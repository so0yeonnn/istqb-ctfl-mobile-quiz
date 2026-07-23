from pathlib import Path
import subprocess

import pdfplumber
from PIL import Image


ROOT = Path(__file__).resolve().parents[2]
PDF_ROOT = ROOT / "tmp" / "pdfs" / "ko"
OUTPUT = ROOT / "istqb-quiz-web" / "assets" / "official"
PDFTOPPM = Path(
    r"C:\Users\조수연\.cache\codex-runtimes\codex-primary-runtime"
    r"\dependencies\native\poppler\Library\bin\pdftoppm.exe"
)
TARGETS = {
    "B": [22, 23, 31, 32, 38, 39],
    "C": [22, 23, 32],
    "D": [22, 23, 32],
}
RESOLUTION = 180
SCALE = RESOLUTION / 72


def top_level_question(words, number):
    matches = [
        word
        for word in words
        if word["text"] == f"{number}." and word["x0"] < 100
    ]
    return min(matches, key=lambda word: word["top"], default=None)


def option_a(words, start, end):
    matches = [
        word
        for word in words
        if word["text"].lower() == "a."
        and word["x0"] < 130
        and start < word["top"] < end
    ]
    return min(matches, key=lambda word: word["top"], default=None)


OUTPUT.mkdir(parents=True, exist_ok=True)
for sample, numbers in TARGETS.items():
    pdf_path = PDF_ROOT / f"{sample}-Q-ko.pdf"
    with pdfplumber.open(pdf_path) as pdf:
        page_words = [page.extract_words() for page in pdf.pages]
        page_for = {}
        for page_index, words in enumerate(page_words):
            for number in numbers:
                marker = top_level_question(words, number)
                if marker:
                    page_for[number] = (page_index, marker)

        rendered = {}
        for number in numbers:
            page_index, marker = page_for[number]
            if page_index not in rendered:
                prefix = OUTPUT / f"sample-{sample.lower()}-page-{page_index + 1}"
                subprocess.run(
                    [
                        str(PDFTOPPM),
                        "-f",
                        str(page_index + 1),
                        "-singlefile",
                        "-png",
                        "-r",
                        str(RESOLUTION),
                        str(pdf_path),
                        str(prefix),
                    ],
                    check=True,
                )
                rendered[page_index] = Image.open(prefix.with_suffix(".png"))

            words = page_words[page_index]
            next_markers = [
                word
                for word in words
                if word["text"].endswith(".")
                and word["text"][:-1].isdigit()
                and word["x0"] < 100
                and word["top"] > marker["top"]
            ]
            section_end = min(
                (word["top"] for word in next_markers),
                default=pdf.pages[page_index].height - 35,
            )
            first_option = option_a(words, marker["top"], section_end)
            crop_end = first_option["top"] - 5 if first_option else section_end - 5
            page = pdf.pages[page_index]
            box = (
                int(48 * SCALE),
                max(0, int((marker["top"] - 8) * SCALE)),
                int((page.width - 42) * SCALE),
                int(crop_end * SCALE),
            )
            crop = rendered[page_index].crop(box)
            crop.save(
                OUTPUT / f"sample-{sample.lower()}-q{number}-source.png",
                optimize=True,
            )

        for image in rendered.values():
            source_path = Path(image.filename)
            image.close()
            source_path.unlink()
