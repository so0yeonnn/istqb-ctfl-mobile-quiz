const QUESTION_BANK = [
  {
    "id": "P1-01",
    "set": "prediction-1",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.1",
    "level": "K1",
    "text": "다음 중 유효한 테스트 목적은 무엇인가?",
    "options": [
      "운영 중 장애가 절대 발생하지 않음을 증명한다.",
      "테스트 대상의 잔여 리스크를 줄이고 품질에 대한 신뢰를 높인다.",
      "발견된 모든 결함의 근본 원인을 테스터가 직접 수정한다.",
      "가능한 모든 입력 조합이 실행되었음을 보장한다."
    ],
    "answer": [
      1
    ],
    "explanation": "테스팅은 결함과 장애를 발견해 리스크를 줄이고 품질 수준에 대한 정보를 제공한다. 무결함이나 완전한 조합 실행을 증명하지는 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-02",
    "set": "prediction-1",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.1",
    "level": "K2",
    "text": "보험 가입 시스템 프로젝트에서 테스트 성공에 가장 크게 기여할 활동은?",
    "options": [
      "테스트 독립성을 위해 테스터와 개발자 간 의사소통을 제한한다.",
      "개발 중 방해가 되지 않도록 모든 테스트 설계를 코딩 완료 후 시작한다.",
      "결함 수를 개발자 개인 평가 지표로 공개한다.",
      "테스터가 요구사항 워크숍부터 참여해 모호한 인수 조건을 조기에 질문한다."
    ],
    "answer": [
      3
    ],
    "explanation": "조기 참여와 이해관계자 협업은 작업 산출물의 결함을 일찍 발견하고 공통 이해를 높여 성공에 기여한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-03",
    "set": "prediction-1",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.3",
    "level": "K2",
    "text": "요구사항에 할인율을 15%로 잘못 명시했고 개발자가 그대로 구현했다. 테스트 중 고객 정책 문서와 비교해 문제를 발견했다. “15%로 잘못 명시한 행위 → 잘못된 요구사항 → 실행 시 잘못된 할인”의 용어 순서는?",
    "options": [
      "오류 → 결함 → 장애",
      "장애 → 결함 → 오류",
      "결함 → 오류 → 장애",
      "오류 → 장애 → 결함"
    ],
    "answer": [
      0
    ],
    "explanation": "사람의 잘못된 행위가 오류(error), 그 결과 작업 산출물에 생긴 문제가 결함(defect), 실행 중 관찰되는 잘못된 동작이 장애(failure)다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-04",
    "set": "prediction-1",
    "chapter": "1장 테스트 기초",
    "lo": "1.3.1",
    "level": "K2",
    "text": "한 팀이 10번의 반복 동안 같은 회귀 테스트만 실행했고 최근에는 새 결함이 거의 발견되지 않았다. 가장 직접적으로 관련된 테스트 원리는?",
    "options": [
      "결함 집중",
      "테스트는 상황에 의존",
      "테스트 마모",
      "오류 부재의 궤변"
    ],
    "answer": [
      2
    ],
    "explanation": "같은 테스트를 반복하면 새 결함을 찾는 효과가 감소한다는 테스트 마모 원리다. 테스트 데이터와 시나리오를 갱신해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-05",
    "set": "prediction-1",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.1",
    "level": "K2",
    "text": "다음 활동을 테스트 프로세스 순서에 맞게 배열한 것은? ① 실행 가능한 테스트 스크립트 준비 ② 테스트 컨디션 식별 ③ 실제 결과와 예상 결과 비교 ④ 테스트 케이스와 테스트 데이터 설계",
    "options": [
      "② → ① → ④ → ③",
      "④ → ② → ③ → ①",
      "② → ④ → ① → ③",
      "① → ② → ④ → ③"
    ],
    "answer": [
      2
    ],
    "explanation": "분석에서 테스트 컨디션을 식별하고, 설계에서 케이스·데이터를 도출하며, 구현에서 실행 준비 후 실행에서 결과를 비교한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-06",
    "set": "prediction-1",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.5",
    "level": "K2",
    "text": "다음 중 주로 테스팅 역할의 책임인 활동을 TWO개 고르시오.",
    "options": [
      "테스트 베이시스 분석",
      "프로젝트 전체 테스트 예산 승인",
      "제품 백로그 우선순위 결정",
      "테스트 환경 구성",
      "릴리스 범위 최종 승인"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "테스트 베이시스 분석과 테스트 환경 구성은 주로 테스팅 역할에 해당한다. 예산·범위 승인과 백로그 우선순위는 관리 또는 제품 책임이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P1-07",
    "set": "prediction-1",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.3",
    "level": "K2",
    "text": "독립적 테스팅에 대한 설명으로 가장 적절한 것은?",
    "options": [
      "작성자와 다른 인지 편향을 가진 사람이 다른 종류의 결함을 발견할 수 있다.",
      "독립성이 높을수록 개발팀과의 협업은 항상 금지된다.",
      "독립 테스터는 테스트 대상에 대한 정보를 받지 않아야 한다.",
      "모든 프로젝트는 조직 외부의 독립 테스트팀을 사용해야 한다."
    ],
    "answer": [
      0
    ],
    "explanation": "독립성은 서로 다른 관점과 편향으로 결함 발견을 돕지만, 고립·책임 전가 같은 단점도 있어 상황에 맞게 수준을 선택한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-08",
    "set": "prediction-1",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.2",
    "level": "K1",
    "text": "전체 팀 접근법의 핵심 설명은?",
    "options": [
      "품질은 테스터만의 책임이다.",
      "팀원 누구나 어떤 작업이든 승인 없이 수행한다.",
      "독립적 테스팅을 조직에서 제거한다.",
      "품질에 대한 책임을 팀 전체가 공유하고 필요한 기술을 함께 활용한다."
    ],
    "answer": [
      3
    ],
    "explanation": "전체 팀 접근법은 팀 전체가 품질을 책임지고 다양한 기술과 관점을 활용하는 협업 방식이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-09",
    "set": "prediction-1",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.2",
    "level": "K1",
    "text": "개발 수명주기와 관계없이 적용되는 좋은 테스팅 관행은?",
    "options": [
      "테스트는 실행 가능한 시스템이 완성된 후에만 시작한다.",
      "각 개발 활동에는 대응하는 테스트 활동이 있다.",
      "테스트 레벨마다 동일한 테스트 목적을 사용한다.",
      "모든 테스트 분석은 테스트 실행 후 수행한다."
    ],
    "answer": [
      1
    ],
    "explanation": "각 개발 활동과 산출물에는 대응하는 테스트 활동이 있으며, 테스트 분석과 설계는 관련 작업 산출물이 준비되는 즉시 시작할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-10",
    "set": "prediction-1",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.3",
    "level": "K1",
    "text": "BDD에서 일반적으로 사용하는 시나리오 표현 형식은?",
    "options": [
      "Plan–Do–Check–Act",
      "Arrange–Compile–Deploy",
      "Given–When–Then",
      "Risk–Control–Report"
    ],
    "answer": [
      2
    ],
    "explanation": "BDD는 이해관계자가 읽을 수 있는 Given–When–Then 형식으로 시스템 행동의 예를 표현한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-11",
    "set": "prediction-1",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.5",
    "level": "K2",
    "text": "다음 중 시프트 레프트를 가장 잘 적용한 사례는?",
    "options": [
      "운영 장애가 발생한 후 단위 테스트를 추가한다.",
      "요구사항 초안 리뷰와 API 계약 테스트 설계를 구현 전에 수행한다.",
      "모든 비기능 테스트를 인수 테스트 단계로 이동한다.",
      "코드 완료 전에는 테스트 환경 논의를 금지한다."
    ],
    "answer": [
      1
    ],
    "explanation": "시프트 레프트는 리뷰, 정적 분석, 테스트 설계와 자동화를 더 이른 시점에 수행해 빠른 피드백을 얻는 것이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-12",
    "set": "prediction-1",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.6",
    "level": "K2",
    "text": "회고(retrospective)가 테스팅 개선에 기여하는 방식으로 가장 적절한 것은?",
    "options": [
      "개인별 결함 유발 횟수를 평가한다.",
      "테스트 종료 기준을 소급해 낮춘다.",
      "미완료 테스트를 숨겨 팀 사기를 유지한다.",
      "완료된 반복의 효과와 비효율을 분석해 다음 반복의 개선 조치를 정한다."
    ],
    "answer": [
      3
    ],
    "explanation": "회고는 프로세스, 협업, 도구와 테스트 활동을 되돌아보고 구체적인 개선 조치를 합의하는 활동이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-13",
    "set": "prediction-1",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.1",
    "level": "K2",
    "text": "여러 마이크로서비스 사이의 데이터 전달과 인터페이스 오류를 주목적으로 확인하는 테스트 레벨은?",
    "options": [
      "컴포넌트 통합 테스팅",
      "컴포넌트 테스팅",
      "시스템 테스팅",
      "인수 테스팅"
    ],
    "answer": [
      0
    ],
    "explanation": "컴포넌트 통합 테스팅은 통합된 컴포넌트·서비스 사이의 인터페이스와 상호작용에 초점을 둔다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-14",
    "set": "prediction-1",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.3.1",
    "level": "K2",
    "text": "운영 데이터베이스를 새 플랫폼으로 마이그레이션한 뒤 수행할 유지보수 테스팅 범위를 정할 때 가장 중요한 요소는?",
    "options": [
      "개발팀의 선호 프로그래밍 언어",
      "변경 영역과 변경되지 않은 영역에 대한 영향 분석",
      "기존 테스트 케이스의 작성자 수",
      "프로젝트 킥오프 회의 시간"
    ],
    "answer": [
      1
    ],
    "explanation": "유지보수 테스팅 범위는 변경 자체와 기존 시스템에 미칠 영향, 리스크, 시스템 규모를 분석해 결정한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-15",
    "set": "prediction-1",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.1",
    "level": "K1",
    "text": "정적 테스팅으로 검토할 수 있는 작업 산출물의 예는?",
    "options": [
      "실행 중인 CPU 사용률만",
      "실제 결과와 예상 결과의 차이만",
      "운영 중 발생한 장애만",
      "요구사항, 소스 코드, 테스트 계획과 계약서"
    ],
    "answer": [
      3
    ],
    "explanation": "사람이 읽고 이해할 수 있거나 도구로 분석 가능한 거의 모든 작업 산출물은 정적 테스팅 대상이 될 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-16",
    "set": "prediction-1",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.1",
    "level": "K1",
    "text": "요구사항 초안을 완성한 직후 고객·개발자·테스터가 함께 짧은 리뷰를 수행했다. 이처럼 조기에 자주 피드백을 받는 주요 이점은?",
    "options": [
      "요구사항 오해를 구현 전에 발견해 재작업 비용을 줄일 수 있다.",
      "동적 테스트가 더 이상 필요하지 않다.",
      "모든 이해관계자의 의견이 항상 같아진다.",
      "결함이 없는 제품임을 증명할 수 있다."
    ],
    "answer": [
      0
    ],
    "explanation": "조기·빈번한 이해관계자 피드백은 요구사항의 오해와 누락을 일찍 발견하고 수정하여 후반 재작업 비용을 줄인다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-17",
    "set": "prediction-1",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.2",
    "level": "K2",
    "text": "리뷰 시작 단계에서 수행하는 작업으로 가장 적절한 것은?",
    "options": [
      "리뷰 메트릭을 폐기한다.",
      "작성자가 모든 이상 항목을 수정한 것으로 간주한다.",
      "참여자에게 작업 산출물과 범위·목표·종료 기준을 배포한다.",
      "동적 테스트 결과만으로 리뷰를 종료한다."
    ],
    "answer": [
      2
    ],
    "explanation": "리뷰 시작에는 작업 산출물과 범위의 배포, 역할 지정, 목표·프로세스·종료 기준 설명, 필요한 질문 응답이 포함된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-18",
    "set": "prediction-1",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.4",
    "level": "K2",
    "text": "워크스루와 인스펙션을 비교한 설명으로 가장 적절한 것은?",
    "options": [
      "워크스루가 항상 인스펙션보다 공식적이다.",
      "워크스루는 보통 작성자가 주도하고, 인스펙션은 정의된 역할·절차·메트릭을 사용하는 가장 공식적인 리뷰이다.",
      "인스펙션에는 개별 검토가 없다.",
      "두 리뷰 모두 정적 테스트가 아니다."
    ],
    "answer": [
      1
    ],
    "explanation": "워크스루는 일반적으로 작성자가 주도하며 다양한 목적에 사용할 수 있다. 인스펙션은 정의된 역할, 절차, 진입·종료 기준과 메트릭을 갖춘 가장 공식적인 리뷰이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-19",
    "set": "prediction-1",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.1.1",
    "level": "K2",
    "text": "명세 기반 입력·출력 동작과 코드 내부 구조를 함께 평가하고 싶다. 적절한 기법 조합은?",
    "options": [
      "리뷰와 형상 관리만",
      "정적 분석과 디버깅만",
      "경험 기반 기법만",
      "블랙박스 기법과 화이트박스 기법"
    ],
    "answer": [
      3
    ],
    "explanation": "블랙박스 기법은 명세 기반 동작을, 화이트박스 기법은 구현 구조와 커버리지를 평가하므로 상호 보완적이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-20",
    "set": "prediction-1",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.1",
    "level": "K3",
    "text": "배송비 규칙은 주문액이 0원 미만이면 오류, 0~49,999원이면 3,000원, 50,000~99,999원이면 1,500원, 100,000원 이상이면 무료이다. 각 동등 분할을 한 번 이상 다루는 최소 테스트 수는?",
    "options": [
      "2개",
      "3개",
      "4개",
      "5개"
    ],
    "answer": [
      2
    ],
    "explanation": "오류, 3,000원, 1,500원, 무료라는 서로 다른 네 동등 분할이 있으므로 각 대표값 1개씩 최소 4개가 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-21",
    "set": "prediction-1",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.2",
    "level": "K3",
    "text": "정수 입력 10~20은 “정상”, 그 밖은 “오류”이다. 현재 테스트 값이 9, 10, 20, 21일 때 2값 경계값 커버리지는 100%다. 3값 경계값 커버리지 100%를 위해 추가할 값은?",
    "options": [
      "11, 19",
      "8, 22",
      "8, 11, 19, 22",
      "10, 20"
    ],
    "answer": [
      0
    ],
    "explanation": "3값 BVA는 각 경계의 바로 아래·경계·바로 위를 요구한다. 기존 9,10,20,21에 11과 19를 추가하면 된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-22",
    "set": "prediction-1",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.3",
    "level": "K3",
    "text": "할인은 회원이면서 연체가 없을 때만 적용되고, 사은품은 회원 여부와 무관하게 10번째 구매일 때 제공된다. 조건은 회원(T/F), 연체(T/F), 10번째 구매(T/F)이다. 모든 규칙을 완전하게 표현하는 결정 테이블의 최대 규칙 수는?",
    "options": [
      "4개",
      "6개",
      "10개",
      "8개"
    ],
    "answer": [
      3
    ],
    "explanation": "독립적인 불리언 조건 3개의 가능한 조합은 2³=8개다. 이후 무관 조건을 합치면 규칙 수를 줄일 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-23",
    "set": "prediction-1",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.4",
    "level": "K3",
    "text": "로그인 상태 모델은 로그아웃(L)에서 성공 로그인으로 인증(A), A에서 로그아웃으로 L, A에서 3회 실패로 잠금(K), K에서 관리자 해제로 L의 네 유효 전이를 가진다. 모든 테스트가 L에서 시작할 때 100% 유효 전이 커버리지에 필요한 최소 테스트 케이스 수는?",
    "options": [
      "2개",
      "1개",
      "3개",
      "4개"
    ],
    "answer": [
      1
    ],
    "explanation": "한 테스트로 L→A→L→A→K→L을 수행하면 네 전이를 모두 지나므로 1개가 가능하다. 단, 문제의 전이 연결이 모두 허용되므로 정답은 1개다.",
    "reviewNote": "전이 경로를 순서대로 이어 붙일 수 있는지 확인한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-24",
    "set": "prediction-1",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.1",
    "level": "K2",
    "text": "100% 구문 커버리지를 달성했다는 사실로 반드시 알 수 있는 것은?",
    "options": [
      "모든 실행 가능한 구문이 한 번 이상 실행되었다.",
      "모든 결정 결과가 실행되었다.",
      "모든 요구사항이 테스트되었다.",
      "모든 결함이 발견되었다."
    ],
    "answer": [
      0
    ],
    "explanation": "구문 커버리지는 실행된 구문의 비율만 보장한다. 분기, 요구사항, 결함 부재는 보장하지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-25",
    "set": "prediction-1",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.2",
    "level": "K2",
    "text": "100% 분기 커버리지를 달성한 테스트 스위트에 대한 설명으로 옳은 것은?",
    "options": [
      "모든 조건 조합을 실행한다.",
      "모든 가능한 경로를 실행한다.",
      "100% 구문 커버리지도 달성한다.",
      "결정이 없는 구문은 실행하지 않아도 된다."
    ],
    "answer": [
      2
    ],
    "explanation": "100% 분기 커버리지는 모든 결정 결과를 실행하므로 실행 가능한 구문도 모두 실행되어 100% 구문 커버리지를 포함한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-26",
    "set": "prediction-1",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.1",
    "level": "K2",
    "text": "오류 추정을 가장 효과적으로 적용하는 방법은?",
    "options": [
      "소스 코드 없이 구문 커버리지를 계산한다.",
      "과거 결함 분류와 개발자가 자주 범한 실수를 바탕으로 공격 목록을 만든다.",
      "요구사항의 모든 조합을 기계적으로 나열한다.",
      "테스터 경험을 배제하고 무작위 값만 사용한다."
    ],
    "answer": [
      1
    ],
    "explanation": "오류 추정은 경험, 과거 결함, 흔한 오류와 실패 지식을 활용해 결함 가능성이 높은 영역을 겨냥한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-27",
    "set": "prediction-1",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.2",
    "level": "K2",
    "text": "탐색적 테스팅 세션에서 테스트 차터의 역할은?",
    "options": [
      "모든 세부 절차와 예상 결과를 고정한다.",
      "테스트 완료 기준을 대체한다.",
      "실행 결과를 자동으로 결함으로 등록한다.",
      "세션의 목적·범위·아이디어를 안내하되 학습에 따른 조정을 허용한다."
    ],
    "answer": [
      3
    ],
    "explanation": "차터는 탐색적 세션의 임무와 초점을 제공하지만, 테스터는 실행 중 학습한 정보에 따라 다음 테스트를 설계한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-28",
    "set": "prediction-1",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.3",
    "level": "K2",
    "text": "체크리스트 기반 테스팅에서 좋은 체크리스트의 특징은?",
    "options": [
      "항목이 구체적이고 직접 확인 가능하며 정기적으로 갱신된다.",
      "모든 항목이 “정상 동작 확인”처럼 포괄적이다.",
      "한 번 작성하면 제품 변경과 관계없이 고정한다.",
      "기대 결과와 테스트 목적을 포함하지 않는다."
    ],
    "answer": [
      0
    ],
    "explanation": "체크리스트 항목은 명확하고 확인 가능해야 하며, 결함·경험·제품 변화에 따라 갱신되어야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-29",
    "set": "prediction-1",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.3",
    "level": "K3",
    "text": "사용자 스토리: “등록 고객으로서 주문을 취소해 결제 환불을 받고 싶다.” 인수 기준은 ① 배송 전 주문만 취소 가능 ② 취소 즉시 결제수단으로 전액 환불 ③ 취소 주문 상태는 ‘취소됨’. 가장 적절한 ATDD 테스트는?",
    "options": [
      "배송 완료 주문의 리뷰 작성 기능을 확인한다.",
      "신규 고객 등록 후 첫 주문이 가능한지 확인한다.",
      "배송 전 주문을 취소하면 전액 환불되고 상태가 취소됨으로 바뀌는지 확인한다.",
      "환율 변경 시 상품 가격 표시를 확인한다."
    ],
    "answer": [
      2
    ],
    "explanation": "ATDD 테스트는 사용자 스토리의 인수 기준을 구체적인 입력과 관찰 가능한 결과로 직접 검증해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-30",
    "set": "prediction-1",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.2",
    "level": "K1",
    "text": "이터레이션 계획에서 테스터가 기여하는 활동은?",
    "options": [
      "완료 기준과 무관하게 테스트 작업을 제외한다.",
      "제품 책임자 대신 모든 스토리의 비즈니스 우선순위를 단독 결정한다.",
      "개발자 개인 성과를 평가한다.",
      "사용자 스토리의 테스트 가능성과 관련 리스크를 분석하고 테스트 작업을 추정한다."
    ],
    "answer": [
      3
    ],
    "explanation": "테스터는 사용자 스토리의 테스트 가능성·인수 조건·리스크를 분석하고 테스트 노력과 작업을 추정하여 이터레이션 계획에 가치를 더한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-31",
    "set": "prediction-1",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.3",
    "level": "K2",
    "text": "다음 중 종료 기준으로 적절한 것을 TWO개 고르시오.",
    "options": [
      "고위험 요구사항 커버리지 100% 달성",
      "첫 테스트 환경 구축 요청 완료",
      "심각도 Critical 미해결 결함 0개",
      "테스트 리더가 프로젝트에 배정됨",
      "요구사항 초안 작성 시작"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "종료 기준은 테스트를 끝낼 수 있는 측정 가능한 조건이다. 커버리지와 미해결 결함 수준이 대표적이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P1-32",
    "set": "prediction-1",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.4",
    "level": "K3",
    "text": "한 테스트 케이스 실행의 3점 추정값이 낙관 2시간, 최빈 5시간, 비관 14시간이다. E=(a+4m+b)/6을 사용하고 동일 난이도의 테스트 6개를 실행할 때 총 추정 시간은?",
    "options": [
      "30시간",
      "36시간",
      "32시간",
      "42시간"
    ],
    "answer": [
      1
    ],
    "explanation": "한 건의 추정은 (2+4×5+14)/6=6시간이고 6건이므로 총 36시간이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-33",
    "set": "prediction-1",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.5",
    "level": "K3",
    "text": "TC1(우선순위3, 선행 없음), TC2(2, TC1 후), TC3(1, TC2 후), TC4(2, TC2 후), TC5(1, 선행 없음)가 있다. 우선순위를 최대한 따르되 의존성을 지킬 때 세 번째 실행할 테스트는?",
    "options": [
      "TC2",
      "TC1",
      "TC3",
      "TC4"
    ],
    "answer": [
      0
    ],
    "explanation": "먼저 독립적인 최고 우선순위 TC5, 이후 TC3을 가능하게 하기 위해 TC1, 그 다음 TC2를 실행한다. 세 번째는 TC2다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-34",
    "set": "prediction-1",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.7",
    "level": "K2",
    "text": "애자일 테스트 사분면에서 Q3에 속하는 테스트의 조합으로 가장 적절한 것은?",
    "options": [
      "컴포넌트 테스트·컴포넌트 통합 테스트",
      "기능 테스트·사용자 스토리 테스트",
      "탐색적 테스트·사용성 테스트·사용자 인수 테스트",
      "성능 테스트·보안 테스트"
    ],
    "answer": [
      2
    ],
    "explanation": "Q3는 비즈니스 관점에서 제품을 비평하는 영역으로 탐색적·사용성·사용자 인수 테스트가 대표적이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-35",
    "set": "prediction-1",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.2",
    "level": "K2",
    "text": "다음 중 제품 리스크에 해당하는 것은?",
    "options": [
      "핵심 테스터의 갑작스러운 퇴사",
      "결제 금액 계산 오류로 고객에게 잘못된 금액이 청구될 가능성",
      "테스트 환경 납품 지연",
      "프로젝트 예산 삭감"
    ],
    "answer": [
      1
    ],
    "explanation": "제품 리스크는 제품 품질 특성이 실패할 가능성과 관련된다. 인력·환경·예산 문제는 프로젝트 수행에 영향을 주는 프로젝트 리스크이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-36",
    "set": "prediction-1",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.3",
    "level": "K2",
    "text": "경영진은 출시 결정을, 개발팀은 수정 계획을 세워야 한다. 테스트 상태를 전달하는 방식으로 가장 적절한 것은?",
    "options": [
      "모든 대상에게 동일한 상세 로그만 보낸다.",
      "메트릭 없이 개인 의견만 전달한다.",
      "좋은 소식만 구두로 전달한다.",
      "경영진에는 잔여 리스크와 추세를 요약하고, 개발팀에는 재현 정보와 영향 범위를 상세히 제공한다."
    ],
    "answer": [
      3
    ],
    "explanation": "테스트 상태 의사소통은 대상과 목적에 맞춰 조정한다. 경영진에는 의사결정용 요약과 잔여 리스크를, 개발팀에는 실행 가능한 상세 정보를 제공한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-37",
    "set": "prediction-1",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.4.1",
    "level": "K2",
    "text": "어제 실패한 테스트가 오늘 통과했지만 사용된 빌드와 테스트 데이터 버전을 알 수 없다. 가장 직접적으로 부족한 관리 활동은?",
    "options": [
      "리스크 분석",
      "오류 추정",
      "형상 관리",
      "인수 테스트"
    ],
    "answer": [
      2
    ],
    "explanation": "형상 관리는 테스트 대상·테스트웨어·환경 버전을 식별하고 통제해 결과의 추적성과 재현성을 보장한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-38",
    "set": "prediction-1",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.5.1",
    "level": "K3",
    "text": "결함 보고서에 “검색 버튼을 누르면 가끔 멈춤”, 기대 결과와 실제 결과, 심각도는 적혀 있다. 개발자가 가장 먼저 재현하는 데 필요한 추가 정보는?",
    "options": [
      "브라우저·빌드 버전과 재현 가능한 입력 및 사전조건",
      "테스터의 연봉",
      "프로젝트 전체 회의록",
      "결함을 만든 것으로 추정되는 개발자 이름"
    ],
    "answer": [
      0
    ],
    "explanation": "재현을 위해 테스트 환경·빌드, 정확한 입력, 사전조건과 단계가 필요하다. 개인 정보나 추정 책임자는 도움이 되지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-39",
    "set": "prediction-1",
    "chapter": "6장 테스트 도구",
    "lo": "6.1.1",
    "level": "K2",
    "text": "정적 분석 도구가 가장 직접적으로 지원하는 활동은?",
    "options": [
      "모든 테스트 케이스의 기대 결과를 스스로 결정한다.",
      "사용자의 실제 만족도를 자동 증명한다.",
      "운영 장애의 사업 영향을 최종 승인한다.",
      "코드를 실행하지 않고 코딩 규칙 위반과 잠재 결함을 탐지한다."
    ],
    "answer": [
      3
    ],
    "explanation": "정적 분석 도구는 소스 코드 등을 실행하지 않고 규칙 위반, 복잡도, 데이터 흐름 이상과 잠재 결함을 찾는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P1-40",
    "set": "prediction-1",
    "chapter": "6장 테스트 도구",
    "lo": "6.2.1",
    "level": "K1",
    "text": "테스트 자동화 도입의 위험은?",
    "options": [
      "반복 실행의 일관성 향상",
      "도구와 자동화 산출물의 유지보수 비용을 과소평가",
      "객관적 측정 가능",
      "회귀 테스트 실행 시간 단축"
    ],
    "answer": [
      1
    ],
    "explanation": "비현실적인 기대와 유지보수 노력 과소평가는 자동화 도입의 대표적 위험이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-01",
    "set": "prediction-2",
    "chapter": "1장 테스트의 기초",
    "lo": "1.1.1",
    "level": "K1",
    "text": "다음 중 테스트의 일반적인 목적으로 가장 적절한 것은?",
    "options": [
      "모든 결함이 제거되었음을 증명한다.",
      "테스트 대상의 품질과 잔여 위험에 관한 정보를 제공한다.",
      "개발자의 실수를 찾아 책임을 정한다.",
      "사용자가 요구하지 않은 기능을 추가한다."
    ],
    "answer": [
      1
    ],
    "explanation": "테스트는 결함을 발견하고 품질 및 잔여 위험에 대한 정보를 제공해 의사결정을 지원한다. 결함이 없음을 증명할 수는 없다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-02",
    "set": "prediction-2",
    "chapter": "1장 테스트의 기초",
    "lo": "1.2.3",
    "level": "K2",
    "text": "불충분한 교육 때문에 분석가가 배송비 경계값을 잘못 이해해 요구사항에 틀린 값을 기록했고, 개발자가 그대로 구현하여 실행 중 잘못된 배송비가 표시되었다. 근본 원인·오류·결함·장애의 연결로 옳은 것은?",
    "options": [
      "네 항목은 모두 결함이다.",
      "잘못 이해한 행위=근본 원인, 틀린 요구사항=오류, 잘못된 표시=결함, 교육 부족=장애",
      "틀린 요구사항=근본 원인, 교육 부족=오류, 잘못된 표시=결함, 잘못 이해=장애",
      "불충분한 교육=근본 원인, 잘못 이해한 행위=오류, 틀린 요구사항=결함, 잘못된 표시=장애"
    ],
    "answer": [
      3
    ],
    "explanation": "근본 원인은 오류가 발생하게 한 조건이며, 사람의 잘못된 행위는 오류, 작업 산출물의 문제는 결함, 실행 중 관찰되는 잘못된 동작은 장애이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-03",
    "set": "prediction-2",
    "chapter": "1장 테스트의 기초",
    "lo": "1.3.1",
    "level": "K2",
    "text": "같은 회귀 테스트를 여러 릴리스 동안 반복했더니 더 이상 새 결함이 거의 발견되지 않는다. 가장 적절한 조치는?",
    "options": [
      "테스트 마모 원리를 고려해 기존 테스트와 데이터를 검토하고 새 테스트를 추가한다.",
      "결함 부재의 오류에 따라 테스트를 즉시 중단한다.",
      "완전 테스트가 가능하므로 모든 입력을 실행한다.",
      "결함 집중 원리에 따라 기존 테스트만 더 자주 반복한다."
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 마모 원리에 따르면 같은 테스트를 반복할수록 새로운 결함 발견력이 떨어질 수 있으므로 기존 테스트와 데이터를 검토하고 새 테스트를 추가해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-04",
    "set": "prediction-2",
    "chapter": "1장 테스트의 기초",
    "lo": "1.3.1",
    "level": "K2",
    "text": "안전 필수 의료기기와 짧은 기간 운영되는 홍보 웹사이트에 동일한 테스트 접근법을 적용하지 않는 이유를 가장 잘 설명하는 원리는?",
    "options": [
      "조기 테스트는 비용을 절감한다.",
      "결함은 집중된다.",
      "테스트는 정황에 의존한다.",
      "완전 테스트는 불가능하다."
    ],
    "answer": [
      2
    ],
    "explanation": "제품의 도메인, 위험, 수명, 규제와 목적에 따라 적합한 테스트 접근법이 달라진다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-05",
    "set": "prediction-2",
    "chapter": "1장 테스트의 기초",
    "lo": "1.4.1",
    "level": "K2",
    "text": "요구사항의 테스트 가능성을 검토하고 테스트 조건을 식별한 뒤, 그 조건을 구체적인 입력·사전조건·기대 결과로 만드는 활동은 각각 무엇인가?",
    "options": [
      "테스트 계획 → 테스트 분석",
      "테스트 설계 → 테스트 구현",
      "테스트 분석 → 테스트 설계",
      "테스트 구현 → 테스트 실행"
    ],
    "answer": [
      2
    ],
    "explanation": "분석은 무엇을 테스트할지인 테스트 조건을 식별하고, 설계는 이를 어떻게 테스트할지인 테스트 케이스와 테스트 데이터를 구체화한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-06",
    "set": "prediction-2",
    "chapter": "1장 테스트의 기초",
    "lo": "1.4.4",
    "level": "K2",
    "text": "다음 중 테스트 베이시스와 테스트웨어의 추적성이 직접 지원하는 활동을 두 개 고르시오.",
    "options": [
      "요구사항별 테스트 커버리지 평가",
      "실패한 테스트와 관련 요구사항의 영향 분석",
      "테스터의 급여 계산",
      "프로그램 언어의 자동 변환"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "양방향 추적성은 요구사항 커버리지를 확인하고 변경이나 실패가 영향을 주는 테스트·요구사항을 찾아낸다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P2-07",
    "set": "prediction-2",
    "chapter": "1장 테스트의 기초",
    "lo": "1.5.1",
    "level": "K2",
    "text": "상충하는 이해관계자의 설명을 들은 테스터가 사실과 추정을 구분하고 질문으로 모순을 드러냈다. 가장 잘 나타난 일반 역량은?",
    "options": [
      "비판적 사고와 의사소통",
      "프로그래밍 언어 숙련만",
      "프로젝트 예산 승인",
      "조직 인사 관리"
    ],
    "answer": [
      0
    ],
    "explanation": "테스터에게는 정보를 비판적으로 분석하고 이해관계자와 명확히 의사소통하는 역량이 중요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-08",
    "set": "prediction-2",
    "chapter": "1장 테스트의 기초",
    "lo": "1.2.2",
    "level": "K1",
    "text": "테스팅과 품질 보증(QA)의 관계에 대한 설명으로 옳은 것은?",
    "options": [
      "테스팅은 프로세스 감사만 수행한다.",
      "테스팅과 QA는 완전히 같은 활동이다.",
      "QA는 오직 테스트 실행만 의미한다.",
      "테스팅은 제품 중심의 품질 관리 활동이고, QA는 프로세스 중심의 예방적 접근을 포함한다."
    ],
    "answer": [
      3
    ],
    "explanation": "테스팅은 제품의 품질을 평가하는 품질 관리 활동이며, QA는 적절한 프로세스의 구현과 개선을 통해 결함을 예방하는 프로세스 중심 접근이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-09",
    "set": "prediction-2",
    "chapter": "2장 소프트웨어 개발 수명주기 전반의 테스트",
    "lo": "2.1.2",
    "level": "K1",
    "text": "다음 중 모든 소프트웨어 개발 수명주기에 적용되는 좋은 테스팅 관행은?",
    "options": [
      "모든 테스트 레벨은 같은 목적을 가진다.",
      "테스트 분석과 설계는 관련 작업 산출물의 초안이 준비되는 즉시 시작할 수 있다.",
      "테스트 실행은 항상 디버깅보다 먼저 수행된다.",
      "순차 모델에서만 정적 테스팅을 수행할 수 있다."
    ],
    "answer": [
      1
    ],
    "explanation": "관련 작업 산출물이 준비되면 테스트 분석과 설계를 조기에 시작할 수 있다. 테스트 레벨은 고유한 목적을 가지며 좋은 관행은 특정 수명주기 모델에만 한정되지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-10",
    "set": "prediction-2",
    "chapter": "2장 소프트웨어 개발 수명주기 전반의 테스트",
    "lo": "2.2.1",
    "level": "K2",
    "text": "완성된 주문 시스템과 외부 결제 사업자의 시스템 사이에서 승인·취소 메시지 교환을 확인하려 한다. 가장 직접적으로 관련된 테스트 레벨은?",
    "options": [
      "컴포넌트 테스트",
      "컴포넌트 통합 테스트",
      "시스템 통합 테스트",
      "인수 테스트"
    ],
    "answer": [
      2
    ],
    "explanation": "시스템 통합 테스트는 테스트 대상 시스템과 외부 시스템·서비스 사이의 인터페이스와 상호작용에 초점을 둔다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-11",
    "set": "prediction-2",
    "chapter": "2장 소프트웨어 개발 수명주기 전반의 테스트",
    "lo": "2.1.3",
    "level": "K1",
    "text": "다음 중 BDD의 전형적인 특징은?",
    "options": [
      "테스트를 코드 내부 분기 수로만 표현한다.",
      "Given-When-Then과 같은 자연어 형태로 행위를 예시화한다.",
      "모든 테스트를 구현 완료 후 작성한다.",
      "오직 비기능 테스트에 사용한다."
    ],
    "answer": [
      1
    ],
    "explanation": "BDD는 이해관계자가 이해할 수 있는 자연어 형식의 행위 예시로 원하는 동작을 표현하고 자동화로 연결할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-12",
    "set": "prediction-2",
    "chapter": "2장 소프트웨어 개발 수명주기 전반의 테스트",
    "lo": "2.1.4",
    "level": "K2",
    "text": "DevOps 환경에서도 수동 탐색적 테스트가 필요한 이유로 가장 적절한 것은?",
    "options": [
      "배포 자동화가 테스트 결과를 삭제하기 때문이다.",
      "자동화는 회귀 테스트에 사용할 수 없기 때문이다.",
      "DevOps에서는 정적 테스트를 금지하기 때문이다.",
      "CI/CD가 모든 품질 특성과 예기치 않은 사용을 자동으로 판단하지는 못하기 때문이다."
    ],
    "answer": [
      3
    ],
    "explanation": "DevOps가 빠른 피드백과 자동화를 지원해도 사용성, 탐색, 새로운 위험 등 인간의 판단이 필요한 테스트는 남는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-13",
    "set": "prediction-2",
    "chapter": "2장 소프트웨어 개발 수명주기 전반의 테스트",
    "lo": "2.1.6",
    "level": "K2",
    "text": "정기 회고에서 팀이 테스트 환경 준비 지연을 반복 문제로 식별했다. 가장 적절한 후속 조치는?",
    "options": [
      "담당자와 기한이 있는 개선 항목을 정하고 다음 회고에서 효과를 확인한다.",
      "과거 문제이므로 기록하지 않는다.",
      "결함 보고서 수를 줄여 보이게 한다.",
      "회고 내용을 팀 밖 누구에게도 공유하지 않는다."
    ],
    "answer": [
      0
    ],
    "explanation": "회고는 개선 기회를 식별하고 실행 가능한 조치를 정한 뒤 그 효과를 추적할 때 가치가 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-14",
    "set": "prediction-2",
    "chapter": "2장 소프트웨어 개발 수명주기 전반의 테스트",
    "lo": "2.3.1",
    "level": "K2",
    "text": "세율 규칙이 바뀌어 계산 모듈은 수정했지만 화면과 데이터베이스 구조는 그대로다. 유지보수 테스트 범위 결정에 가장 유용한 활동은?",
    "options": [
      "무작위 테스트만 수행",
      "영향도 분석",
      "모든 과거 결함 삭제",
      "개발 모델 교체"
    ],
    "answer": [
      1
    ],
    "explanation": "영향도 분석은 변경이 영향을 미칠 수 있는 영역과 회귀 테스트 범위를 식별하는 데 사용된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-15",
    "set": "prediction-2",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.1",
    "level": "K1",
    "text": "정적 테스팅으로 검사하기에 가장 적절한 작업 산출물은?",
    "options": [
      "실사용자의 클릭 속도",
      "실행 중인 서버의 실제 응답 시간",
      "운영 중 발생한 CPU 온도",
      "사용자 스토리의 인수 기준"
    ],
    "answer": [
      3
    ],
    "explanation": "요구사항, 사용자 스토리와 인수 기준, 설계, 코드, 테스트 계획 등 읽고 이해할 수 있는 작업 산출물은 정적 테스팅으로 검사할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-16",
    "set": "prediction-2",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.4",
    "level": "K2",
    "text": "요구사항 작성자가 회의를 주도해 산출물을 차례로 설명하고, 참가자 학습과 결함 발견을 함께 추구한다. 정해진 절차와 지표 수집은 필수가 아니다. 가장 알맞은 리뷰 유형은?",
    "options": [
      "워크스루",
      "기술 리뷰",
      "인스펙션",
      "관리 리뷰"
    ],
    "answer": [
      0
    ],
    "explanation": "워크스루는 보통 작성자가 주도하며 참가자 교육, 합의 형성, 결함 발견 등을 목적으로 할 수 있다. 인스펙션은 훈련된 진행자, 명확한 역할과 절차, 지표 수집을 갖춘 가장 공식적인 리뷰이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-17",
    "set": "prediction-2",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.2",
    "level": "K2",
    "text": "개별 검토가 끝난 뒤 리뷰 참여자들이 발견한 이상 항목을 분석하고 상태·소유자·필요 조치를 결정하는 활동은?",
    "options": [
      "계획",
      "리뷰 시작",
      "의사소통 및 분석",
      "수정 및 보고"
    ],
    "answer": [
      2
    ],
    "explanation": "의사소통 및 분석 활동에서는 발견한 이상 항목을 전달·분석하고 상태, 소유자와 필요한 조치를 결정한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-18",
    "set": "prediction-2",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.3",
    "level": "K1",
    "text": "리뷰 회의를 원활하게 진행하고, 시간과 다양한 관점을 관리하며, 안전한 의견 교환을 촉진하는 역할은?",
    "options": [
      "작성자",
      "조정자(중재자)",
      "관리자",
      "기록자"
    ],
    "answer": [
      1
    ],
    "explanation": "조정자는 리뷰 회의의 효과적 진행과 중재를 책임진다. 기록자는 이상 항목과 결정 사항을 기록한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-19",
    "set": "prediction-2",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.1.1",
    "level": "K2",
    "text": "블랙박스 테스트 기법과 화이트박스 테스트 기법의 주된 베이시스를 올바르게 연결한 것은?",
    "options": [
      "둘 다 오직 테스터 직관",
      "블랙박스–소스코드, 화이트박스–사용자 경험",
      "둘 다 오직 결함 목록",
      "블랙박스–명세, 화이트박스–내부 구조"
    ],
    "answer": [
      3
    ],
    "explanation": "블랙박스 기법은 명세된 행위에서, 화이트박스 기법은 코드나 모델의 내부 구조에서 테스트를 도출한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-20",
    "set": "prediction-2",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.1",
    "level": "K3",
    "text": "회원 등급 점수는 0~999만 유효하다. 0~199는 Basic, 200~699는 Plus, 700~999는 Premium이며 그 밖은 오류다. 유효·무효 동등 분할을 각각 한 번 이상 커버하는 최소 입력 집합은?",
    "options": [
      "{-1, 0, 199, 200, 699, 700, 999, 1000}",
      "{0, 200, 700}",
      "{-1, 100, 500, 800, 1000}",
      "{100, 500, 800, 999}"
    ],
    "answer": [
      2
    ],
    "explanation": "분할은 음수 무효, Basic, Plus, Premium, 1000 이상 무효의 5개다. 각 분할 대표값 하나씩인 {-1,100,500,800,1000}이면 충분하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-21",
    "set": "prediction-2",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.2",
    "level": "K3",
    "text": "입력 가능한 좌석 수는 1~30이다. 2값 경계값 분석으로 100% 커버하기 위한 테스트 집합은?",
    "options": [
      "{0,1,30,31}",
      "{1,30}",
      "{1,2,29,30}",
      "{0,1,2,29,30,31}"
    ],
    "answer": [
      0
    ],
    "explanation": "2값 BVA는 각 경계값과 바로 바깥의 인접값을 사용한다. 하한은 0·1, 상한은 30·31이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-22",
    "set": "prediction-2",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.3",
    "level": "K3",
    "text": "할인은 회원(M)이고 쿠폰(C)이 유효할 때 20%, 둘 중 하나만 참이면 10%, 둘 다 거짓이면 0%다. 현재 테스트가 (M,C)=(T,T),(T,F),(F,F)를 커버했다. 전체 규칙 커버리지에 추가할 최소 테스트는?",
    "options": [
      "(T,T)",
      "(T,F)",
      "(F,F)",
      "(F,T)"
    ],
    "answer": [
      3
    ],
    "explanation": "두 불리언 조건의 네 규칙 중 (F,T)만 빠졌다. 기대 결과는 10% 할인이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-23",
    "set": "prediction-2",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.4",
    "level": "K3",
    "text": "문서 상태는 초안(D)→검토(R)→승인(A), R→D(반려), A→보관(H) 전이를 가진다. 모든 테스트는 D에서 시작한다. 네 유효 전이를 모두 커버하는 최소 테스트 케이스 수와 가능한 경로는?",
    "options": [
      "1개: D→R→A→R→D",
      "1개: D→R→D→R→A→H",
      "2개: D→R→A와 D→H",
      "2개: D→R→D와 D→A→H"
    ],
    "answer": [
      1
    ],
    "explanation": "D→R, R→D, R→A, A→H를 하나의 허용 경로 D→R→D→R→A→H로 모두 통과할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-24",
    "set": "prediction-2",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.1",
    "level": "K2",
    "text": "한 테스트 스위트가 실행 가능한 문장 80개 중 60개를 실행했다. 문장 커버리지는?",
    "options": [
      "75%",
      "60%",
      "20%",
      "80%"
    ],
    "answer": [
      0
    ],
    "explanation": "문장 커버리지 = 실행한 문장 수 / 전체 실행 가능 문장 수 × 100 = 60/80 × 100 = 75%다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-25",
    "set": "prediction-2",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.2",
    "level": "K2",
    "text": "분기 커버리지를 측정할 때 직접 확인해야 하는 것은?",
    "options": [
      "각 요구사항에 하나 이상의 테스트 케이스가 연결되었는지 여부",
      "소스 코드의 모든 가능한 실행 경로가 테스트되었는지 여부",
      "각 결정의 참 결과와 거짓 결과가 테스트로 실행되었는지 여부",
      "모든 입력값 조합이 적어도 한 번 사용되었는지 여부"
    ],
    "answer": [
      2
    ],
    "explanation": "분기 커버리지는 제어 흐름에서 각 결정 결과(참과 거짓 등)가 실행되었는지를 기준으로 측정한다. 모든 경로·요구사항·입력 조합의 커버리지를 의미하지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-26",
    "set": "prediction-2",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.3",
    "level": "K2",
    "text": "화이트박스 테스트가 블랙박스 테스트를 보완하는 방식으로 가장 적절한 것은?",
    "options": [
      "요구사항의 업무 가치를 자동 결정한다.",
      "명세만으로 보이지 않는 미실행 코드 구조를 식별한다.",
      "사용자의 만족도를 코드에서 증명한다.",
      "모든 누락 요구사항을 발견한다."
    ],
    "answer": [
      1
    ],
    "explanation": "구조 커버리지는 실행되지 않은 문장이나 분기를 드러내 추가 테스트를 도출하도록 돕는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-27",
    "set": "prediction-2",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.1",
    "level": "K2",
    "text": "과거 날짜 처리 결함이 월말·윤년·시간대 변경 부근에 몰렸다는 경험을 바탕으로 해당 값을 집중 테스트했다. 사용한 기법은?",
    "options": [
      "동등 분할",
      "결정 테이블 테스팅",
      "문장 테스팅",
      "오류 추정"
    ],
    "answer": [
      3
    ],
    "explanation": "오류 추정은 테스터의 경험, 결함 지식과 실패 이력을 바탕으로 오류가 날 만한 조건을 예측한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-28",
    "set": "prediction-2",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.2",
    "level": "K2",
    "text": "시간 제한 세션에서 테스트 차터를 바탕으로 학습·테스트 설계·실행을 동시에 수행하고 결과를 기록했다. 이는 무엇인가?",
    "options": [
      "탐색적 테스팅",
      "인스펙션",
      "분기 테스팅",
      "TDD"
    ],
    "answer": [
      0
    ],
    "explanation": "탐색적 테스팅은 학습, 설계와 실행이 상호 지원하며 동시에 진행된다. 세션 기반 방식은 차터와 시간 제한을 사용할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-29",
    "set": "prediction-2",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.3",
    "level": "K3",
    "text": "사용자 스토리의 인수 기준은 “Given 품절 상품에 알림 신청을 완료했고, When 재고가 1개 이상으로 변경되면, Then 등록 채널로 알림을 한 번 발송한다.”이다. ATDD 테스트로 가장 적절한 것은?",
    "options": [
      "알림을 신청하지 않은 상품의 화면 색상을 확인한다.",
      "재고 변경 없이 서버 CPU 사용률만 측정한다.",
      "알림 신청 상품의 재고를 0에서 1로 변경하고 등록 채널에 알림이 정확히 한 번 도착하는지 확인한다.",
      "알림 문구가 마음에 드는지 개발자에게 질문한다."
    ],
    "answer": [
      2
    ],
    "explanation": "ATDD 테스트는 인수 기준에서 테스트를 협업해 도출한다. 주어진 사전조건을 만들고 재고 변경 행위를 수행한 뒤 관찰 가능한 알림 결과를 확인해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-30",
    "set": "prediction-2",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.6",
    "level": "K1",
    "text": "테스트 피라미드의 일반적인 개념은?",
    "options": [
      "상위 종단간 테스트가 가장 많아야 한다.",
      "모든 테스트 레벨의 테스트 수를 같게 둔다.",
      "수동 테스트만 피라미드에 포함한다.",
      "빠르고 격리된 하위 레벨 테스트를 많이 두고 느린 상위 종단간 테스트를 적게 둔다."
    ],
    "answer": [
      3
    ],
    "explanation": "테스트 피라미드는 일반적으로 하위 레벨의 빠르고 격리된 테스트를 많이, 상위 레벨의 느리고 복합적인 테스트를 적게 두는 모델이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-31",
    "set": "prediction-2",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.4",
    "level": "K3",
    "text": "과거 유사 프로젝트에서 개발 노력 600인시, 테스트 노력 240인시가 들었다. 이번 개발 추정이 750인시이고 같은 비율을 적용한다면 테스트 노력 추정은?",
    "options": [
      "240인시",
      "300인시",
      "450인시",
      "1,350인시"
    ],
    "answer": [
      1
    ],
    "explanation": "과거 테스트/개발 비율은 240/600=0.4다. 이번에는 750×0.4=300인시로 추정한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-32",
    "set": "prediction-2",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.5",
    "level": "K3",
    "text": "우선순위는 H가 M보다 높다. TC1(H)은 없음, TC2(H)는 TC4 필요, TC3(M)는 없음, TC4(M)는 없음이다. 우선순위와 선행조건을 지키며 실행할 때 가장 적절한 순서는?",
    "options": [
      "TC1→TC4→TC2→TC3",
      "TC2→TC1→TC4→TC3",
      "TC4→TC3→TC1→TC2",
      "TC3→TC4→TC2→TC1"
    ],
    "answer": [
      0
    ],
    "explanation": "독립적인 높은 우선순위 TC1을 먼저 실행하고, TC2의 선행조건 TC4를 수행한 뒤 TC2, 마지막에 남은 중간 우선순위 TC3를 실행한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-33",
    "set": "prediction-2",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.2",
    "level": "K2",
    "text": "성능 테스트 환경을 제공할 외부 업체의 납품이 3주 지연될 가능성이 높아 테스트 일정이 위협받고 있다. 이 상황의 분류로 가장 적절한 것은?",
    "options": [
      "제품 리스크 — 테스트 케이스의 예상 결과가 틀렸음을 나타낸다.",
      "제품 리스크 — 운영 중 응답 시간이 느릴 가능성을 직접 나타낸다.",
      "프로젝트 리스크 — 테스트 활동의 일정과 수행을 위협한다.",
      "결함 — 이미 제품 코드에 잘못이 존재함을 증명한다."
    ],
    "answer": [
      2
    ],
    "explanation": "테스트 환경 또는 외부 공급업체의 지연은 프로젝트 수행과 일정에 영향을 주므로 프로젝트 리스크이다. 제품의 품질 특성이 기대를 충족하지 못할 가능성은 제품 리스크이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-34",
    "set": "prediction-2",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.4",
    "level": "K2",
    "text": "리스크 수준이 높은 기능에 대한 리스크 기반 테스팅 대응으로 가장 적절한 것은?",
    "options": [
      "리스크 정보를 숨긴다.",
      "더 이른 테스트, 숙련된 테스터, 더 높은 커버리지와 집중 회귀 테스트를 배정한다.",
      "낮은 위험 기능과 동일한 강도로만 테스트한다.",
      "해당 기능을 테스트 범위에서 제외한다."
    ],
    "answer": [
      1
    ],
    "explanation": "식별·분석한 위험 수준에 따라 테스트 깊이, 우선순위, 기법, 인력과 시점을 조정해 잔여 위험을 낮춘다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-35",
    "set": "prediction-2",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.7",
    "level": "K2",
    "text": "테스트 사분면에서 성능·부하·보안처럼 제품을 평가하고 기술 중심인 테스트가 주로 속하는 곳은?",
    "options": [
      "Q1 기술 중심·팀 지원",
      "Q2 비즈니스 중심·팀 지원",
      "Q3 비즈니스 중심·제품 평가",
      "Q4 기술 중심·제품 평가"
    ],
    "answer": [
      3
    ],
    "explanation": "Q4는 기술 관점에서 제품을 비판·평가하며 성능, 부하, 보안, 신뢰성 등의 테스트를 포함한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-36",
    "set": "prediction-2",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.2",
    "level": "K2",
    "text": "종료 조건일까지 중요 결함이 남고 핵심 요구사항 커버리지가 목표보다 낮다. 테스트 완료 보고에서 가장 적절한 내용은?",
    "options": [
      "테스트 건수만 보고한다.",
      "합격으로 표시하고 결함을 삭제한다.",
      "현 상태, 미달 기준과 잔여 위험을 투명하게 보고해 출시 결정을 지원한다.",
      "테스터가 단독으로 출시를 취소한다."
    ],
    "answer": [
      2
    ],
    "explanation": "테스트 보고는 진행과 품질, 편차, 장애물과 잔여 위험을 제공해 이해관계자의 의사결정을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-37",
    "set": "prediction-2",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.4.1",
    "level": "K2",
    "text": "형상 관리가 테스트에 주는 이점으로 가장 적절한 것은?",
    "options": [
      "테스트 대상·환경·테스트웨어 버전을 식별해 결과를 재현할 수 있게 한다.",
      "결함의 심각도를 자동 결정한다.",
      "모든 테스트 데이터를 익명화한다.",
      "리스크 분석을 대체한다."
    ],
    "answer": [
      0
    ],
    "explanation": "형상 관리는 버전과 관계를 통제하고 기준선을 유지하여 어떤 대상과 테스트웨어로 결과가 나왔는지 추적·재현하게 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-38",
    "set": "prediction-2",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.5.1",
    "level": "K3",
    "text": "결함 보고에 “저장 안 됨”만 적혀 있고 환경, 빌드, 입력, 단계, 기대·실제 결과가 없다. 이 보고서의 가장 큰 문제와 우선 조치는?",
    "options": [
      "심각도가 낮다. 즉시 종료한다.",
      "결함이 아니다. 테스트를 삭제한다.",
      "우선순위가 높다. 개발자 이름을 추가한다.",
      "재현성과 진단 정보가 부족하다. 환경·버전·사전조건·단계·결과를 보완한다."
    ],
    "answer": [
      3
    ],
    "explanation": "좋은 결함 보고서는 고유 식별, 환경과 버전, 재현 단계와 입력, 기대·실제 결과, 심각도 등의 객관적 정보를 제공해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-39",
    "set": "prediction-2",
    "chapter": "6장 테스트 도구",
    "lo": "6.1.1",
    "level": "K2",
    "text": "테스트 관리 도구가 가장 직접적으로 지원하는 것은?",
    "options": [
      "소프트웨어의 모든 요구사항 자동 작성",
      "테스트 케이스·실행 결과·결함과 추적성 관리",
      "사용자의 감정 자동 판정",
      "미실행 코드의 자동 삭제"
    ],
    "answer": [
      1
    ],
    "explanation": "테스트 관리 도구는 계획, 테스트웨어, 실행 결과, 결함, 커버리지와 추적성 정보를 관리하고 보고한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P2-40",
    "set": "prediction-2",
    "chapter": "6장 테스트 도구",
    "lo": "6.2.1",
    "level": "K1",
    "text": "테스트 자동화의 잠재적 이점은?",
    "options": [
      "수동 테스트와 인간 판단의 완전 제거",
      "도구 도입 즉시 유지보수 비용 제거",
      "반복 회귀 테스트의 실행 시간 절감과 일관성 향상",
      "모든 결함의 자동 수정"
    ],
    "answer": [
      2
    ],
    "explanation": "자동화는 반복 작업을 빠르고 일관되게 수행하고 피드백을 앞당길 수 있지만 구축·유지보수 비용과 한계가 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ],
      "answerPositionBalanced": true
    }
  },
  {
    "id": "P4-01",
    "set": "prediction-4",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.1",
    "level": "K1",
    "text": "다음 중 테스팅의 일반적인 목적에 해당하는 것은?",
    "options": [
      "제품이 모든 상황에서 실패하지 않음을 증명한다.",
      "결함을 발견하고 테스트 대상의 품질 수준에 관한 정보를 제공한다.",
      "발견된 결함을 모두 직접 수정한다.",
      "개발 일정이 지연되지 않도록 보장한다."
    ],
    "answer": [
      1
    ],
    "explanation": "테스팅의 목적에는 결함 발견, 품질 평가, 의사결정 정보 제공, 리스크 감소 등이 포함된다. 무결함이나 일정 준수를 보장하거나 결함을 직접 수정하는 활동은 아니다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-02",
    "set": "prediction-4",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.2",
    "level": "K2",
    "text": "테스트 실행 중 배송비가 잘못 계산되는 현상이 발견되었다. 테스터가 재현 절차와 실제 결과를 개발자에게 전달한 뒤 개발자가 원인을 찾아 코드를 수정했다. 테스팅과 디버깅을 올바르게 구분한 것은?",
    "options": [
      "테스터가 수행한 활동과 개발자가 수행한 활동은 모두 디버깅이다.",
      "현상 발견부터 코드 수정까지 모두 테스팅이다.",
      "재현 절차 작성은 디버깅이고 코드 수정은 테스팅이다.",
      "현상 발견과 보고는 테스팅이고, 원인 분석과 코드 수정은 디버깅이다."
    ],
    "answer": [
      3
    ],
    "explanation": "테스팅은 장애를 유발하는 결함을 드러내고 정보를 제공한다. 디버깅은 장애의 원인을 찾아 분석하고 결함을 제거하는 개발 활동이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-03",
    "set": "prediction-4",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.3",
    "level": "K2",
    "text": "신입 개발자가 세율 규칙 교육을 받지 못해 면세 상품에도 세금을 더하는 코드를 작성했고, 운영 화면에 잘못된 금액이 표시되었다. 원인에서 결과로 이어지는 순서로 옳은 것은?",
    "options": [
      "교육 부족(근본 원인) → 잘못된 판단(오류) → 잘못된 코드(결함) → 금액 오표시(장애)",
      "교육 부족(장애) → 잘못된 판단(결함) → 잘못된 코드(오류) → 금액 오표시(근본 원인)",
      "잘못된 판단(근본 원인) → 교육 부족(오류) → 금액 오표시(결함) → 잘못된 코드(장애)",
      "금액 오표시(오류) → 잘못된 코드(장애) → 교육 부족(결함) → 잘못된 판단(근본 원인)"
    ],
    "answer": [
      0
    ],
    "explanation": "근본 원인은 사람이 오류를 범하게 할 수 있고, 오류는 작업 산출물의 결함을 만들며, 결함이 실행되면 관찰 가능한 장애가 발생할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-04",
    "set": "prediction-4",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.2",
    "level": "K1",
    "text": "전체 팀 접근법의 장점으로 가장 적절한 것은?",
    "options": [
      "테스트 책임을 전적으로 독립 테스트팀에 이전한다.",
      "개발자와 테스터의 역할을 완전히 동일하게 만든다.",
      "필요한 역량을 가진 팀원이 함께 품질에 기여하고 의사소통 장벽을 줄인다.",
      "모든 리뷰에서 작성자의 참여를 금지한다."
    ],
    "answer": [
      2
    ],
    "explanation": "전체 팀 접근법에서는 품질에 대한 책임을 팀 전체가 공유하고 필요한 사람이 테스트 활동에 참여해 협업과 의사소통을 개선한다. 전문 역할 자체가 사라지는 것은 아니다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-05",
    "set": "prediction-4",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.4",
    "level": "K2",
    "text": "요구사항 R-17이 변경되었다. 요구사항과 테스트 조건, 테스트 케이스, 결함 보고서 사이의 추적성이 유지되어 있을 때 가장 직접적으로 얻는 이점은?",
    "options": [
      "테스트 독립성의 단점이 모두 사라진다.",
      "모든 테스트 케이스의 실행 시간이 자동으로 단축된다.",
      "영향받는 테스트와 결함을 빠르게 찾아 변경 영향도를 평가할 수 있다.",
      "운영 장애가 발생하지 않음을 증명할 수 있다."
    ],
    "answer": [
      2
    ],
    "explanation": "양방향 추적성은 요구사항 변경 시 관련 테스트웨어와 결함을 식별하고 커버리지 및 변경 영향도를 평가하는 데 도움을 준다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-06",
    "set": "prediction-4",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.3",
    "level": "K2",
    "text": "다음 중 테스트 구현 활동에서 주로 만들어지는 테스트웨어의 조합은?",
    "options": [
      "실행 순서가 정해진 테스트 절차와 테스트 스위트",
      "테스트 완료 보고서와 교훈 목록",
      "테스트 계획과 리스크 목록",
      "근본 원인 분석 결과와 수정된 소스 코드"
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 구현에서는 테스트 케이스를 실행 가능한 테스트 절차와 테스트 스위트로 구성하고 테스트 데이터를 준비한다. 계획과 완료 보고서는 다른 활동의 산출물이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-07",
    "set": "prediction-4",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.3",
    "level": "K2",
    "text": "독립적인 테스팅에 관한 설명 중 옳은 것을 두 개 고르시오.",
    "options": [
      "독립성이 높아지면 개발자의 품질 책임은 사라진다.",
      "다른 배경을 가진 독립 테스터는 개발자와 다른 유형의 결함을 발견할 수 있다.",
      "최고 수준의 독립성은 모든 프로젝트에서 항상 비용 대비 효과가 가장 높다.",
      "독립 테스트 조직은 개발팀과 고립되어 피드백이 늦어질 위험이 있다.",
      "독립 테스터는 테스트 대상에 관한 지식이 없어야 한다."
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "독립성은 다른 관점과 편향을 제공하지만 고립과 의사소통 문제를 일으킬 수 있다. 개발자의 품질 책임을 없애거나 모든 상황에서 최고 수준을 요구하지는 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-08",
    "set": "prediction-4",
    "chapter": "1장 테스트 기초",
    "lo": "1.3.1",
    "level": "K2",
    "text": "오랜 기간 같은 회귀 테스트만 반복했더니 새 결함 발견 수가 크게 줄었다. 일곱 가지 테스트 원리에 따른 가장 적절한 대응은?",
    "options": [
      "결함이 더 이상 없다고 판단하고 테스트를 중단한다.",
      "기존 테스트와 데이터를 검토해 새 테스트를 추가한다.",
      "모든 테스트를 삭제하고 무작위 테스트만 수행한다.",
      "동일한 테스트를 더 자주 반복한다."
    ],
    "answer": [
      1
    ],
    "explanation": "테스트 마모 원리에 따르면 같은 테스트를 반복할수록 새로운 결함을 발견하는 효과가 떨어질 수 있으므로 테스트와 데이터를 갱신해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-09",
    "set": "prediction-4",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.2",
    "level": "K1",
    "text": "순차적 모델을 쓰는 A팀과 반복적 모델을 쓰는 B팀이 공통으로 따라야 할 관행은?",
    "options": [
      "모든 테스트 레벨에서 동일한 테스트 목적을 사용한다.",
      "구현이 모두 끝난 뒤에만 테스트 분석을 시작한다.",
      "각 개발 활동에 대응하는 테스트 활동을 둔다.",
      "테스트 설계는 개발 수명주기 모델과 무관하게 고정한다."
    ],
    "answer": [
      2
    ],
    "explanation": "어떤 수명주기에서도 각 개발 활동에는 대응하는 테스트 활동이 있고, 테스트 분석과 설계는 관련 작업 산출물의 초안이 존재하는 즉시 시작하는 것이 좋다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-10",
    "set": "prediction-4",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.3",
    "level": "K1",
    "text": "다음 중 테스트 우선 접근법의 예만으로 구성된 것은?",
    "options": [
      "폭포수, 나선형, V 모델",
      "TDD, ATDD, BDD",
      "리뷰, 인스펙션, 정적 분석",
      "회귀 테스트, 확인 테스트, 유지보수 테스트"
    ],
    "answer": [
      1
    ],
    "explanation": "테스트 주도 개발(TDD), 인수 테스트 주도 개발(ATDD), 행위 주도 개발(BDD)은 테스트를 구현보다 먼저 정의하는 테스트 우선 접근법이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-11",
    "set": "prediction-4",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.4",
    "level": "K2",
    "text": "DevOps 환경에서 테스팅에 미칠 수 있는 영향으로 가장 적절한 것은?",
    "options": [
      "개발과 운영이 협업하면 독립 테스트는 항상 불가능하다.",
      "운영 담당자가 참여하므로 수동 테스트가 금지된다.",
      "지속적 배포를 사용하면 비기능 테스트가 불필요하다.",
      "자동화된 파이프라인으로 빠른 피드백과 반복적인 회귀 테스트를 지원한다."
    ],
    "answer": [
      3
    ],
    "explanation": "DevOps는 개발·테스트·운영 간 협업과 CI/CD 자동화를 통해 빠른 피드백, 반복 가능한 테스트, 안정적인 배포를 지원한다. 특정 테스트 유형을 없애는 것은 아니다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-12",
    "set": "prediction-4",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.5",
    "level": "K2",
    "text": "요구사항 초안 단계에서 테스터가 예제와 인수 조건을 검토하고 API 계약 테스트를 구현 전에 준비했다. 이 접근의 설명으로 가장 적절한 것은?",
    "options": [
      "테스트 활동을 더 이른 단계로 이동한 시프트 레프트이다.",
      "운영 환경에서만 검증하는 시프트 라이트이다.",
      "수정된 결함만 재실행하는 확인 테스트이다.",
      "완료된 시스템의 성능만 측정하는 유지보수 테스트이다."
    ],
    "answer": [
      0
    ],
    "explanation": "시프트 레프트는 리뷰, 정적 분석, 테스트 우선 접근법 등을 활용해 테스트 활동을 수명주기의 더 이른 시점에 수행하는 것이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-13",
    "set": "prediction-4",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.3",
    "level": "K2",
    "text": "결제 오류를 수정한 빌드에서 수정된 결제 시나리오를 다시 실행하고, 장바구니와 환불 기능도 함께 실행했다. 두 실행의 구분은?",
    "options": [
      "모두 확인 테스트이다.",
      "결제 시나리오는 확인 테스트, 장바구니와 환불은 회귀 테스트이다.",
      "결제 시나리오는 회귀 테스트, 나머지는 확인 테스트이다.",
      "모두 유지보수 테스트이며 확인·회귀 구분은 없다."
    ],
    "answer": [
      1
    ],
    "explanation": "확인 테스트는 원래 결함이 성공적으로 수정되었는지 확인하고, 회귀 테스트는 변경으로 인해 다른 영역에 부작용이 생기지 않았는지 확인한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-14",
    "set": "prediction-4",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.3.1",
    "level": "K2",
    "text": "운영 중인 급여 시스템의 데이터베이스를 새 제품으로 이전한다. 유지보수 테스트 범위 결정에 가장 관련 있는 요소는?",
    "options": [
      "기존 테스트 케이스의 작성 순서만",
      "최초 개발 당시 팀원의 근속 연수만",
      "새 데이터베이스 공급자의 광고 문구",
      "변경 영역과 영향 분석 결과, 시스템 리스크"
    ],
    "answer": [
      3
    ],
    "explanation": "마이그레이션은 유지보수 테스트의 트리거다. 범위는 변경 정도, 영향받는 영역, 시스템 규모와 리스크 및 기존 테스트웨어의 재사용 가능성을 고려해 정한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-15",
    "set": "prediction-4",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.1",
    "level": "K1",
    "text": "API 구현을 시작하기 전 리뷰 대상으로 선택할 수 있는 것은?",
    "options": [
      "사용자 스토리와 API 명세",
      "실행 중인 서버의 CPU 온도만",
      "운영 사용자의 실제 클릭 속도만",
      "암호화된 네트워크 패킷의 전송 시간만"
    ],
    "answer": [
      0
    ],
    "explanation": "요구사항, 사용자 스토리, 설계, 코드, 테스트 계획과 테스트 케이스 등 읽고 분석할 수 있는 작업 산출물은 정적 테스팅 대상이 될 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-16",
    "set": "prediction-4",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.3",
    "level": "K2",
    "text": "정적 테스팅과 동적 테스팅의 차이를 올바르게 설명한 것은?",
    "options": [
      "정적 테스팅은 장애만 발견하고 동적 테스팅은 결함을 직접 수정한다.",
      "정적 테스팅은 코드에만 적용되고 동적 테스팅은 문서에만 적용된다.",
      "정적 테스팅은 테스트 대상을 실행하지 않고 산출물을 평가하며, 동적 테스팅은 실행을 필요로 한다.",
      "두 방식은 항상 동일한 결함을 같은 비용으로 발견한다."
    ],
    "answer": [
      2
    ],
    "explanation": "정적 테스팅은 실행 없이 리뷰나 정적 분석으로 결함을 직접 발견할 수 있고, 동적 테스팅은 소프트웨어를 실행해 장애를 관찰한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-17",
    "set": "prediction-4",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.3",
    "level": "K1",
    "text": "공식 리뷰에서 리뷰 회의를 효과적으로 진행하고 참가자 간 의견을 조정하는 주 역할은?",
    "options": [
      "작성자",
      "조정자(진행자)",
      "관리자",
      "리뷰 리더와 무관한 외부 사용자"
    ],
    "answer": [
      1
    ],
    "explanation": "조정자(진행자)는 리뷰 회의의 원활한 진행, 시간 관리, 안전한 분위기와 의견 조정을 지원한다. 작성자는 산출물을 만들고 결함을 수정한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-18",
    "set": "prediction-4",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.2",
    "level": "K2",
    "text": "리뷰에서 개별 검토가 끝난 뒤 발견 사항을 분석하고 상태와 소유자를 정해 기록했다. 다음으로 수행할 활동으로 가장 적절한 것은?",
    "options": [
      "테스트 실행 — 리뷰 대상 코드를 반드시 실행한다.",
      "계획 — 리뷰 목적과 범위를 처음 정한다.",
      "리뷰 시작 — 참가자에게 산출물을 배포한다.",
      "수정과 보고 — 결함을 처리하고 필요한 후속 조치와 결과를 보고한다."
    ],
    "answer": [
      3
    ],
    "explanation": "리뷰 프로세스는 계획, 리뷰 시작, 개별 리뷰, 의사소통과 분석, 수정과 보고로 이어진다. 발견 사항을 합의한 뒤에는 결함 수정과 후속 조치 및 보고가 수행된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-19",
    "set": "prediction-4",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.1.1",
    "level": "K2",
    "text": "과거 결함 목록을 바탕으로 날짜 형식 오류가 자주 발생하는 입력을 집중적으로 시험했다. 사용한 테스트 기법 범주는?",
    "options": [
      "화이트박스 테스트 기법",
      "블랙박스 테스트 기법",
      "경험 기반 테스트 기법",
      "형상 관리 기법"
    ],
    "answer": [
      2
    ],
    "explanation": "과거 결함과 테스터의 지식을 활용한 오류 추정은 경험 기반 기법이다. 명세 기반 입력 분할이나 코드 구조 커버리지와는 구분된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-20",
    "set": "prediction-4",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.1",
    "level": "K3",
    "text": "배송비 규칙은 주문 금액이 0원 이상 30,000원 미만이면 3,000원, 30,000원 이상 70,000원 미만이면 1,500원, 70,000원 이상이면 무료이다. 유효 동등 분할을 각각 한 번씩 대표하는 테스트 입력 집합은?",
    "options": [
      "{10,000, 50,000, 90,000}",
      "{0, 29,999, 30,000}",
      "{29,999, 30,000, 69,999}",
      "{-1, 30,000, 70,000}"
    ],
    "answer": [
      0
    ],
    "explanation": "유효 분할은 0~29,999, 30,000~69,999, 70,000 이상 세 개다. 10,000, 50,000, 90,000은 각 분할에서 하나씩 선택한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-21",
    "set": "prediction-4",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.2",
    "level": "K3",
    "text": "입력 가능한 회의 인원 수가 2명 이상 12명 이하이다. 2값 경계값 분석으로 필요한 테스트 값 집합은?",
    "options": [
      "{0, 1, 12, 13}",
      "{2, 3, 11, 12}",
      "{1, 2, 3, 11, 12, 13}",
      "{1, 2, 12, 13}"
    ],
    "answer": [
      3
    ],
    "explanation": "2값 경계값 분석은 각 경계의 경계값과 바로 바깥 인접값을 사용한다. 하한 2에는 1과 2, 상한 12에는 12와 13이 해당한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-22",
    "set": "prediction-4",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.3",
    "level": "K3",
    "text": "대출 승인 규칙은 다음과 같다. 신용 우수이면 소득 증빙과 무관하게 승인한다. 신용 보통이면 소득 증빙이 있을 때만 승인한다. 신용 불량이면 항상 거절한다. 다음 중 규칙과 일치하지 않는 테스트 예상 결과는?",
    "options": [
      "신용 우수, 증빙 없음 → 승인",
      "신용 불량, 증빙 있음 → 승인",
      "신용 보통, 증빙 없음 → 거절",
      "신용 보통, 증빙 있음 → 승인"
    ],
    "answer": [
      1
    ],
    "explanation": "신용 불량은 소득 증빙 여부와 관계없이 항상 거절되어야 한다. 나머지는 주어진 결정 규칙과 일치한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-23",
    "set": "prediction-4",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.4",
    "level": "K3",
    "text": "계정 상태가 활성, 잠금, 해지 세 가지이다. 활성에서 로그인 3회 실패 시 잠금, 잠금에서 관리자 해제 시 활성, 활성에서 탈퇴 시 해지로 전이한다. 해지 상태에서는 어떤 이벤트에도 다른 상태로 전이하지 않는다. 유효하지 않은 전이는?",
    "options": [
      "해지 — 관리자 해제 → 활성",
      "잠금 — 관리자 해제 → 활성",
      "활성 — 탈퇴 → 해지",
      "활성 — 로그인 3회 실패 → 잠금"
    ],
    "answer": [
      0
    ],
    "explanation": "해지 상태는 어떤 이벤트에도 다른 상태로 전이하지 않는다고 했으므로 해지에서 관리자 해제로 활성화되는 전이는 유효하지 않다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-24",
    "set": "prediction-4",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.3",
    "level": "K3",
    "text": "사용자 스토리: “회원은 주문 발송 전 배송지를 변경할 수 있다.” 인수 조건은 “주문 상태가 준비 중이고 새 주소가 유효하면 변경을 저장한다.”이다. ATDD로 도출한 가장 적절한 테스트는?",
    "options": [
      "준비 중 주문에서 상품 수량만 변경하고 배송비를 확인한다.",
      "발송 완료 주문과 유효한 주소를 주고 결제가 취소되는지 확인한다.",
      "준비 중 주문과 유효한 새 주소를 주고 변경 후 새 주소가 저장되는지 확인한다.",
      "주소 입력 없이 로그인 화면의 색상을 확인한다."
    ],
    "answer": [
      2
    ],
    "explanation": "ATDD 테스트는 사용자 스토리의 구체적인 인수 조건을 실행 가능한 예로 표현해야 한다. 준비 중 상태와 유효 주소, 저장 결과를 모두 포함한 테스트가 적절하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-25",
    "set": "prediction-4",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.1",
    "level": "K2",
    "text": "구문 커버리지 80%라는 측정 결과가 의미하는 것은?",
    "options": [
      "모든 분기 결과 중 80%가 실행되었다.",
      "측정 대상 실행 가능 구문의 80%가 테스트로 실행되었다.",
      "전체 요구사항의 80%가 승인되었다.",
      "발견 가능한 결함의 80%를 제거했다."
    ],
    "answer": [
      1
    ],
    "explanation": "구문 커버리지는 실행된 구문 수를 실행 가능한 전체 구문 수로 나눈 비율이다. 분기, 요구사항 또는 결함 제거 비율을 의미하지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-26",
    "set": "prediction-4",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.3",
    "level": "K2",
    "text": "블랙박스 테스트가 모두 통과했더라도 화이트박스 테스트가 추가 가치를 제공할 수 있는 이유는?",
    "options": [
      "화이트박스 테스트는 테스트 데이터를 필요로 하지 않기 때문이다.",
      "화이트박스 테스트는 모든 가능한 경로 실행을 자동으로 보장하기 때문이다.",
      "코드를 보면 요구사항 결함이 존재할 수 없기 때문이다.",
      "명세만으로 드러나지 않는 미실행 코드와 구현 구조의 누락을 식별할 수 있기 때문이다."
    ],
    "answer": [
      3
    ],
    "explanation": "화이트박스 기법은 구현 구조와 커버리지를 살펴 블랙박스 테스트에서 실행되지 않은 코드와 구조적 누락을 찾는 데 도움을 준다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-27",
    "set": "prediction-4",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.2",
    "level": "K2",
    "text": "상세 테스트 케이스 없이 ‘쿠폰 중복 적용의 위험 조사’라는 차터로 시작한 테스터가 관찰 결과에 따라 다음 테스트를 즉시 바꾸었다. 가장 알맞은 접근은?",
    "options": [
      "탐색적 테스팅",
      "체크리스트 기반 테스팅",
      "결정 테이블 테스팅",
      "구문 테스팅"
    ],
    "answer": [
      0
    ],
    "explanation": "탐색적 테스팅은 학습, 테스트 설계, 실행과 평가가 상호 지원하며 동시에 진행되는 경험 기반 접근이다. 세션 기반 운영과 테스트 차터를 사용할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-28",
    "set": "prediction-4",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.3",
    "level": "K2",
    "text": "체크리스트 기반 테스팅에 대한 설명으로 옳은 것은?",
    "options": [
      "체크리스트가 있으면 다른 테스트 기법은 사용할 수 없다.",
      "체크리스트의 각 항목은 반드시 완전한 단계별 테스트 케이스여야 한다.",
      "테스터는 경험과 표준에서 만든 상위 수준 항목을 이용하며, 체크리스트는 결함 정보에 따라 갱신할 수 있다.",
      "모든 테스터가 체크리스트를 사용하면 언제나 동일한 결과가 나온다."
    ],
    "answer": [
      2
    ],
    "explanation": "체크리스트는 경험, 사용자 관점, 표준 및 과거 결함에서 도출한 상위 수준 조건을 포함할 수 있고 정기적으로 갱신해야 한다. 상세 절차나 동일 결과를 보장하지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-29",
    "set": "prediction-4",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.2",
    "level": "K2",
    "text": "인수 조건을 시나리오 지향 형식으로 작성한 예는?",
    "options": [
      "결제 기능을 충분히 테스트한다.",
      "응답 시간은 2초 이하여야 한다.",
      "시스템은 사용하기 쉬워야 한다.",
      "Given 장바구니에 상품이 있고, When 결제를 완료하면, Then 주문 번호가 표시된다."
    ],
    "answer": [
      3
    ],
    "explanation": "Given/When/Then은 사전 조건, 행동, 기대 결과로 구성된 시나리오 지향 인수 조건 형식이다. 단순 규칙형 조건과 모호한 문장은 구분된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-30",
    "set": "prediction-4",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.6",
    "level": "K1",
    "text": "테스트 피라미드의 일반적인 개념으로 옳은 것은?",
    "options": [
      "모든 테스트 레벨에 항상 같은 수의 테스트를 둔다.",
      "하위 수준의 작고 빠른 자동화 테스트를 많이 두고 상위 수준 테스트는 상대적으로 적게 둔다.",
      "상위 UI 테스트만 자동화하고 컴포넌트 테스트는 제거한다.",
      "수동 테스트를 피라미드 아래에 가장 많이 배치한다."
    ],
    "answer": [
      1
    ],
    "explanation": "테스트 피라미드는 빠르고 격리된 하위 수준 테스트를 많이, 느리고 범위가 큰 상위 수준 테스트를 적게 두는 일반적 구성을 설명한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-31",
    "set": "prediction-4",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.3",
    "level": "K2",
    "text": "다음 중 종료 조건에 해당하는 것은?",
    "options": [
      "치명적 결함이 0개이고 계획된 고위험 테스트가 모두 실행되었다.",
      "테스트 환경 설치가 완료되었다.",
      "테스트 데이터 사용 승인을 받았다.",
      "테스트 대상 빌드가 배포되었다."
    ],
    "answer": [
      0
    ],
    "explanation": "종료 조건은 테스트 활동을 완료할 수 있는 상태를 정의하며 커버리지, 미해결 결함, 실행 결과 등이 포함될 수 있다. 환경·데이터·빌드 준비는 일반적으로 시작 조건이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-32",
    "set": "prediction-4",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.4",
    "level": "K3",
    "text": "유사 프로젝트의 테스트 노력이 개발 노력의 30%였다. 새 프로젝트의 예상 개발 노력이 600시간이고 조건이 충분히 유사하다면 비율 기반 추정 테스트 노력은?",
    "options": [
      "420시간",
      "200시간",
      "180시간",
      "780시간"
    ],
    "answer": [
      2
    ],
    "explanation": "비율 기반 추정은 과거 비율을 적용한다. 600시간 × 0.30 = 180시간이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-33",
    "set": "prediction-4",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.5",
    "level": "K3",
    "text": "다음 테스트 케이스의 우선순위를 정한다. T1: 리스크 높음, 선행 조건 없음. T2: 리스크 중간, T1 이후 가능. T3: 리스크 높음, T2 이후 가능. T4: 리스크 낮음, 선행 조건 없음. 리스크와 의존성을 모두 고려한 실행 순서는?",
    "options": [
      "T3 → T1 → T2 → T4",
      "T1 → T2 → T3 → T4",
      "T1 → T3 → T2 → T4",
      "T4 → T1 → T2 → T3"
    ],
    "answer": [
      1
    ],
    "explanation": "T3는 고위험이지만 T2 이후에만 가능하고 T2는 T1에 의존한다. 따라서 T1, T2, T3 순서로 의존성을 충족한 뒤 저위험 T4를 실행한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-34",
    "set": "prediction-4",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.5.1",
    "level": "K3",
    "text": "로그인 실패 결함 보고서에 “로그인이 안 됨”만 적혀 있다. 재현 가능성과 수정 판단을 높이기 위해 가장 우선 추가해야 할 정보 조합은?",
    "options": [
      "관련 없는 기능의 스크린샷만",
      "테스터의 개인 평가와 개발자 근속 연수",
      "프로젝트 전체 예산과 모든 회의록",
      "환경과 빌드, 사전 조건, 재현 단계, 기대 결과와 실제 결과"
    ],
    "answer": [
      3
    ],
    "explanation": "좋은 결함 보고서는 고유 식별자, 환경과 버전, 재현 단계, 기대·실제 결과, 심각도, 상태 및 참고 자료 등을 포함해 재현과 영향 판단을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-35",
    "set": "prediction-4",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.1",
    "level": "K2",
    "text": "테스트 계획에 포함할 내용으로 가장 적절한 조합은?",
    "options": [
      "운영 고객의 개인정보 원본과 광고 계획",
      "수정된 전체 소스 코드와 개인별 급여",
      "테스트 목적, 범위, 접근법, 자원, 일정, 시작·종료 조건과 리스크",
      "모든 결함의 근본 원인과 최종 수정 코드만"
    ],
    "answer": [
      2
    ],
    "explanation": "테스트 계획은 목적, 범위, 가정과 제약, 이해관계자, 의사소통, 리스크, 접근법, 예산·일정·자원 및 조건 등을 정의한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-36",
    "set": "prediction-4",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.3",
    "level": "K2",
    "text": "제품 리스크 분석에서 결제 금액 오류가 가능성과 영향 모두 높게 평가되었다. 테스트 접근에 미칠 영향으로 가장 적절한 것은?",
    "options": [
      "결제 계산에 더 높은 우선순위와 더 강한 테스트 기법 및 커버리지를 배정한다.",
      "리스크가 높으므로 결제 테스트를 생략한다.",
      "모든 기능에 리스크와 무관하게 동일한 테스트 노력을 강제한다.",
      "프로젝트 일정만 변경하고 테스트 범위는 고려하지 않는다."
    ],
    "answer": [
      0
    ],
    "explanation": "제품 리스크 수준은 테스트 범위, 철저함, 우선순위, 기법과 자원 배분에 영향을 준다. 높은 리스크 영역에는 일반적으로 더 집중적인 테스트가 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-37",
    "set": "prediction-4",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.2",
    "level": "K2",
    "text": "경영진을 위한 테스트 완료 보고서에 가장 적절한 내용은?",
    "options": [
      "수정되지 않은 로그 파일 전체를 설명 없이 첨부",
      "모든 자동화 스크립트의 전체 소스 코드",
      "실행 담당자의 개인 메모만",
      "테스트 결과 요약, 목표 대비 상태, 잔여 리스크와 의사결정에 필요한 권고"
    ],
    "answer": [
      3
    ],
    "explanation": "테스트 보고서는 대상 독자에 맞춰 진행 또는 완료 상태, 편차, 품질 평가, 잔여 리스크와 권고를 요약한다. 경영진에게는 의사결정 중심 정보가 적합하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-38",
    "set": "prediction-4",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.4.1",
    "level": "K2",
    "text": "형상 관리가 테스팅을 지원하는 방식으로 가장 적절한 것은?",
    "options": [
      "테스트 설계 없이도 모든 결함을 자동 발견한다.",
      "테스트 대상과 테스트웨어의 버전을 식별하고 일관된 기준선으로 결과를 재현하게 한다.",
      "테스터의 독립성을 항상 최고 수준으로 만든다.",
      "리스크 분석을 수행할 필요를 없앤다."
    ],
    "answer": [
      1
    ],
    "explanation": "형상 관리는 테스트 대상, 환경, 데이터와 테스트웨어의 버전 및 변경 이력을 통제해 추적성, 무결성과 재현성을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-39",
    "set": "prediction-4",
    "chapter": "6장 테스트 도구",
    "lo": "6.1.1",
    "level": "K2",
    "text": "테스트 도구의 지원 방식에 관한 설명 중 옳은 것을 두 개 고르시오.",
    "options": [
      "테스트 관리 도구는 테스트 케이스, 실행 결과, 결함과 추적성 정보의 관리를 지원할 수 있다.",
      "테스트 실행 도구는 사람의 판단이 필요한 사용성 평가를 항상 완전히 대체한다.",
      "성능 테스트 도구는 발견한 모든 병목의 원인을 자동으로 수정한다.",
      "정적 분석 도구는 소프트웨어를 실행하지 않고 코드의 특정 결함이나 표준 위반을 찾을 수 있다.",
      "도구를 도입하면 테스트 프로세스와 교육이 필요 없어진다."
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "테스트 관리 도구는 계획·추적·보고를, 정적 분석 도구는 실행 없이 코드의 특정 문제 탐지를 지원한다. 도구는 사람의 판단과 프로세스를 없애거나 결함을 자동으로 모두 수정하지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P4-40",
    "set": "prediction-4",
    "chapter": "6장 테스트 도구",
    "lo": "6.2.1",
    "level": "K1",
    "text": "한 팀이 자동화 도구를 구입하면 테스트 인력이 거의 필요 없고 모든 회귀 결함을 찾을 수 있다고 예상한다. 이 상황에서 가장 관련 있는 자동화 리스크는?",
    "options": [
      "자동화가 사람을 거의 대체하고 모든 회귀 결함을 찾을 것이라는 비현실적인 기대",
      "반복 테스트의 일관성이 높아질 가능성",
      "수동 반복 작업이 줄어들 가능성",
      "객관적인 커버리지 측정이 쉬워질 가능성"
    ],
    "answer": [
      0
    ],
    "explanation": "자동화의 리스크에는 비현실적 기대, 초기·유지보수 비용, 도구 종속, 자동화 결과에 대한 과신 등이 있다. 나머지는 잠재적 이점이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-01",
    "set": "prediction-5",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.2",
    "level": "K1",
    "text": "테스팅과 품질 보증(QA)의 관계를 올바르게 설명한 것은?",
    "options": [
      "테스팅과 QA는 완전히 같은 용어이다.",
      "QA는 실행 테스트만을 의미하며 테스팅보다 범위가 좁다.",
      "테스팅은 제품 중심의 품질 관리 활동이고, QA는 프로세스의 적절한 구현과 개선에 초점을 둔다.",
      "QA는 결함을 직접 수정하는 디버깅 활동이다."
    ],
    "answer": [
      2
    ],
    "explanation": "테스팅은 품질 관리의 한 형태로 제품 지향적이며, QA는 좋은 프로세스의 적용과 개선을 통해 품질 달성을 지원하는 프로세스 지향 활동이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-02",
    "set": "prediction-5",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.1",
    "level": "K1",
    "text": "출시 승인 회의에서 테스트 결과를 사용하는 일반적인 목적은?",
    "options": [
      "품질과 잔여 리스크에 관한 정보를 제공해 의사결정을 지원한다.",
      "테스트하지 않은 모든 입력이 성공할 것이라고 보장한다.",
      "테스터가 제품 책임자의 결정을 대신한다.",
      "개발자에게 발생한 모든 오류의 책임을 배정한다."
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 결과는 품질 수준과 잔여 리스크에 관한 정보를 제공해 출시 같은 이해관계자의 의사결정을 지원할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-03",
    "set": "prediction-5",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.1",
    "level": "K2",
    "text": "온라인 처방 시스템을 테스트해야 하는 이유를 가장 잘 설명한 것은?",
    "options": [
      "모든 조합을 시험하면 무결함을 수학적으로 증명할 수 있기 때문이다.",
      "개발자가 작성한 코드는 항상 결함이 있으므로 출시를 영구히 막아야 하기 때문이다.",
      "테스팅을 하면 법적 책임이 자동으로 사라지기 때문이다.",
      "장애가 환자 안전과 조직 평판에 큰 피해를 줄 수 있어 관련 리스크를 낮춰야 하기 때문이다."
    ],
    "answer": [
      3
    ],
    "explanation": "소프트웨어 장애는 사람, 조직과 사회에 손실을 줄 수 있다. 테스팅은 결함을 발견하고 제품 리스크를 줄이며 계약·법규 요구 충족에 대한 신뢰를 높인다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-04",
    "set": "prediction-5",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.1",
    "level": "K2",
    "text": "테스트 조건을 식별한 다음 테스트 케이스와 필요한 데이터 요구사항으로 구체화하는 활동은?",
    "options": [
      "테스트 완료",
      "테스트 설계",
      "테스트 모니터링",
      "테스트 계획"
    ],
    "answer": [
      1
    ],
    "explanation": "테스트 분석에서 무엇을 테스트할지 테스트 조건을 식별하고, 테스트 설계에서 그 조건을 테스트 케이스·커버리지 항목·데이터 요구로 구체화한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-05",
    "set": "prediction-5",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.2",
    "level": "K2",
    "text": "동일한 로그인 기능이라도 은행 앱과 사내 행사 앱의 테스트 접근이 달라지는 가장 중요한 이유는?",
    "options": [
      "사내 앱은 결함이 발생하지 않기 때문이다.",
      "테스트 프로세스는 매 프로젝트마다 무작위로 정해야 하기 때문이다.",
      "은행 앱에는 기능 테스트를 사용할 수 없기 때문이다.",
      "도메인 리스크, 규제, 사용자 기대와 기술적 맥락이 다르기 때문이다."
    ],
    "answer": [
      3
    ],
    "explanation": "테스트 프로세스와 접근은 이해관계자, 도메인, 리스크, 규제, 수명주기, 기술과 조직 제약 같은 맥락의 영향을 받는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-06",
    "set": "prediction-5",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.5",
    "level": "K2",
    "text": "테스트 관리 역할과 테스팅 역할을 올바르게 구분한 것은?",
    "options": [
      "두 역할은 모든 조직에서 반드시 서로 다른 사람이 수행해야 한다.",
      "테스트 관리는 결함 코드를 수정하고, 테스팅 역할은 예산 승인만 담당한다.",
      "테스트 관리는 계획·모니터링·제어·완료를 주로 담당하고, 테스팅 역할은 분석·설계·구현·실행을 주로 담당한다.",
      "테스팅 역할은 테스트 계획과 결과에 관여할 수 없다."
    ],
    "answer": [
      2
    ],
    "explanation": "CTFL은 테스트 관리 역할과 테스팅 역할을 활동 중심으로 구분한다. 한 사람이 두 역할을 맡을 수도 있으며 조직 맥락에 따라 책임 배분이 달라진다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-07",
    "set": "prediction-5",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.1",
    "level": "K2",
    "text": "테스터에게 일반적으로 필요한 역량에 관한 설명 중 옳은 것을 두 개 고르시오.",
    "options": [
      "도메인 지식은 편향을 만들기 때문에 갖지 않는 것이 좋다.",
      "테스터는 기술 지식 없이 직관만 사용해야 한다.",
      "세심함과 호기심은 이상 징후와 숨은 가정을 발견하는 데 도움이 된다.",
      "팀워크보다 개인 경쟁이 항상 더 많은 결함을 발견한다.",
      "의사소통 능력은 결함과 리스크를 건설적으로 전달하는 데 중요하다."
    ],
    "answer": [
      2,
      4
    ],
    "explanation": "테스터에게는 테스트 지식 외에도 분석적 사고, 세심함, 호기심, 의사소통, 팀워크와 도메인 이해가 중요하다. 지식과 협업을 의도적으로 배제하지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-08",
    "set": "prediction-5",
    "chapter": "1장 테스트 기초",
    "lo": "1.3.1",
    "level": "K2",
    "text": "많은 테스트를 통과한 쇼핑몰이지만 주문 취소 기능이 실제 고객의 업무 흐름과 맞지 않아 사용되지 않는다. 가장 관련 있는 테스트 원리는?",
    "options": [
      "테스트 마모",
      "오류 부재의 궤변",
      "결함 집중",
      "완전한 테스팅은 불가능"
    ],
    "answer": [
      1
    ],
    "explanation": "시스템이 명세를 충족하고 결함이 적더라도 사용자의 필요와 기대를 충족하지 못하면 성공한 제품이 아니다. 이를 오류 부재의 궤변이라 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-09",
    "set": "prediction-5",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.3",
    "level": "K1",
    "text": "개발 전에 구체적인 예를 Given/When/Then으로 작성하고 그 예를 자동화 가능한 테스트로 활용하는 테스트 우선 접근법은?",
    "options": [
      "정적 분석",
      "V 모델",
      "유지보수 테스팅",
      "BDD"
    ],
    "answer": [
      3
    ],
    "explanation": "BDD는 기대 행위를 자연어 기반의 구체적 예로 표현해 팀의 공통 이해와 테스트 자동화를 지원하는 테스트 우선 접근법이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-10",
    "set": "prediction-5",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.2",
    "level": "K1",
    "text": "개발 수명주기 전반에 적용할 수 있는 관행으로 옳은 것은?",
    "options": [
      "모든 테스트 분석은 시스템 테스트 단계까지 미룬다.",
      "각 테스트 레벨에는 그 레벨에 맞는 고유한 테스트 목적을 둔다.",
      "테스터는 작업 산출물 초안에 피드백하지 않는다.",
      "동적 테스트만 조기 테스트에 해당한다."
    ],
    "answer": [
      1
    ],
    "explanation": "각 테스트 레벨은 서로 다른 목적을 가지며, 테스트 분석과 설계는 관련 작업 산출물의 초안이 준비되는 즉시 시작할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-11",
    "set": "prediction-5",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.1",
    "level": "K2",
    "text": "증분 개발에서 각 증분마다 새 기능을 통합해 제공한다. 적절한 테스트 방식은?",
    "options": [
      "각 증분에서 새 기능을 테스트하고 기존 기능에 대한 회귀 테스트도 반복한다.",
      "마지막 증분 전까지 어떤 테스트도 수행하지 않는다.",
      "첫 증분에서만 시스템 테스트를 한 번 수행한다.",
      "증분 간 인터페이스는 테스트 범위에서 제외한다."
    ],
    "answer": [
      0
    ],
    "explanation": "반복적·증분 수명주기에서는 각 반복과 증분에 정적·동적 테스트가 포함되며, 새 변경과 누적된 기존 기능에 대한 회귀 테스트가 중요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-12",
    "set": "prediction-5",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.6",
    "level": "K2",
    "text": "반복 회고에서 “테스트 데이터 준비가 매번 늦다”는 문제가 반복 확인되었다. 회고 결과를 프로세스 개선에 가장 잘 활용한 것은?",
    "options": [
      "관련 내용을 팀 밖에 숨기고 개인 책임자를 처벌한다.",
      "문제를 기록만 하고 다음 회고까지 아무 조치도 하지 않는다.",
      "다음 반복부터 데이터 생성 스크립트와 준비 완료 조건을 도입하고 효과를 측정한다.",
      "모든 테스트 데이터를 제거해 지연 원인을 없앤다."
    ],
    "answer": [
      2
    ],
    "explanation": "효과적인 회고는 잘된 점과 개선점을 찾고 실행 가능한 조치를 합의하며 이후 반복에서 효과를 추적해 지속적 개선으로 연결한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-13",
    "set": "prediction-5",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.1",
    "level": "K2",
    "text": "서로 독립적으로 테스트된 두 서비스 사이의 API 호출과 데이터 전달을 집중적으로 확인한다. 해당 테스트 레벨은?",
    "options": [
      "컴포넌트 테스팅",
      "컴포넌트 통합 테스팅",
      "시스템 테스팅",
      "인수 테스팅"
    ],
    "answer": [
      1
    ],
    "explanation": "컴포넌트 통합 테스팅은 통합된 컴포넌트나 서비스 사이의 인터페이스와 상호작용에 초점을 둔다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-14",
    "set": "prediction-5",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.2",
    "level": "K2",
    "text": "재해 복구 후 핵심 서비스를 허용 시간 안에 복구할 수 있는지 평가한다. 가장 관련 있는 테스트 유형은?",
    "options": [
      "화이트박스 테스팅만",
      "기능 테스팅",
      "확인 테스팅",
      "비기능 테스팅"
    ],
    "answer": [
      3
    ],
    "explanation": "복구 가능성, 신뢰성, 성능, 보안과 사용성 같은 품질 특성을 평가하는 것은 비기능 테스팅이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-15",
    "set": "prediction-5",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.5",
    "level": "K1",
    "text": "성공적인 리뷰에 기여하는 요인은?",
    "options": [
      "모든 리뷰를 가장 공식적인 인스펙션으로만 수행한다.",
      "발견한 결함 수로 참가자의 성과를 평가한다.",
      "참가자가 충분히 준비할 시간과 명확한 목적을 갖도록 한다.",
      "관리자가 모든 의견을 즉시 기각한다."
    ],
    "answer": [
      2
    ],
    "explanation": "리뷰 성공에는 명확한 목적, 적절한 리뷰 유형, 작은 산출물, 준비 시간, 교육, 조정과 심리적으로 안전한 분위기 등이 기여한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-16",
    "set": "prediction-5",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.1",
    "level": "K1",
    "text": "이해관계자의 조기·빈번한 피드백이 주는 이점은?",
    "options": [
      "요구사항 오해를 일찍 발견해 값비싼 재작업 가능성을 줄인다.",
      "모든 결함이 자동으로 수정된다.",
      "테스트 독립성이 항상 최고 수준이 된다.",
      "후속 테스트가 필요 없어진다."
    ],
    "answer": [
      0
    ],
    "explanation": "조기·빈번한 피드백은 요구사항과 구현에 대한 공통 이해를 높이고 변경을 빠르게 반영해 잘못된 방향의 개발과 재작업을 줄인다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-17",
    "set": "prediction-5",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.2",
    "level": "K2",
    "text": "요구사항 리뷰에서 모순을 발견해 코딩 전에 수정했다. 정적 테스팅의 가치로 가장 적절한 것은?",
    "options": [
      "리뷰 참가자 수와 관계없이 모든 결함을 찾는다.",
      "실행 환경에서만 나타나는 메모리 누수를 반드시 발견한다.",
      "동적 테스팅을 완전히 대체한다.",
      "결함을 조기에 직접 발견해 이후 단계의 수정 비용과 장애 위험을 줄일 수 있다."
    ],
    "answer": [
      3
    ],
    "explanation": "정적 테스팅은 산출물의 결함을 실행 전에 직접 발견해 후속 산출물로 전파되는 것을 막고 비용과 일정 리스크를 줄일 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-18",
    "set": "prediction-5",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.4",
    "level": "K2",
    "text": "안전 규정 문서를 대상으로 훈련된 조정자, 정의된 역할, 체크리스트, 시작·종료 조건과 지표 수집을 요구한다. 가장 알맞은 리뷰 유형은?",
    "options": [
      "비공식 리뷰",
      "인스펙션",
      "워크스루",
      "기술 리뷰"
    ],
    "answer": [
      1
    ],
    "explanation": "인스펙션은 가장 공식적인 리뷰 유형으로 정의된 프로세스와 역할, 훈련된 조정자, 체크리스트, 조건과 지표 수집을 사용한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-19",
    "set": "prediction-5",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.1.1",
    "level": "K2",
    "text": "요구사항의 입력 범위를 분할해 대표값을 선택한 뒤, 코드 분기 커버리지로 보완했다. 사용한 기법의 순서는?",
    "options": [
      "블랙박스 기법 후 화이트박스 기법",
      "경험 기반 기법 후 블랙박스 기법",
      "화이트박스 기법 후 경험 기반 기법",
      "정적 분석 후 리뷰"
    ],
    "answer": [
      0
    ],
    "explanation": "입력 동등 분할은 명세를 기반으로 하는 블랙박스 기법이고, 분기 커버리지는 코드 구조를 기반으로 하는 화이트박스 기법이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-20",
    "set": "prediction-5",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.1",
    "level": "K3",
    "text": "파일 업로드 크기는 1MB 이상 20MB 이하만 유효하다. 유효 분할과 두 무효 분할을 각각 대표하는 최소 입력 집합은?",
    "options": [
      "{0MB, 1MB, 20MB}",
      "{1MB, 20MB}",
      "{0MB, 10MB, 21MB}",
      "{10MB, 19MB, 20MB}"
    ],
    "answer": [
      2
    ],
    "explanation": "동등 분할은 1MB 미만 무효, 1~20MB 유효, 20MB 초과 무효의 세 개다. 0, 10, 21MB가 각각을 대표한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-21",
    "set": "prediction-5",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.2",
    "level": "K3",
    "text": "허용 온도가 10℃ 이상 30℃ 이하이다. 3값 경계값 분석을 적용할 때 필요한 값은?",
    "options": [
      "{8, 9, 10, 30, 31, 32}",
      "{10, 11, 29, 30}",
      "{9, 10, 30, 31}",
      "{9, 10, 11, 29, 30, 31}"
    ],
    "answer": [
      3
    ],
    "explanation": "3값 경계값 분석은 각 경계값과 양쪽의 가장 가까운 이웃을 사용한다. 하한에는 9,10,11, 상한에는 29,30,31이 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-22",
    "set": "prediction-5",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.3",
    "level": "K3",
    "text": "할인 규칙: VIP이면 10% 할인한다. VIP가 아니면서 쿠폰이 유효하면 5% 할인한다. 둘 다 아니면 할인하지 않는다. 다음 중 올바르지 않은 예상 결과는?",
    "options": [
      "VIP, 쿠폰 무효 → 10%",
      "VIP, 쿠폰 유효 → 5%",
      "VIP 아님, 쿠폰 무효 → 0%",
      "VIP 아님, 쿠폰 유효 → 5%"
    ],
    "answer": [
      1
    ],
    "explanation": "VIP이면 쿠폰 여부와 관계없이 10% 할인한다. 따라서 VIP이면서 쿠폰 유효인 경우 5%라는 예상 결과는 규칙과 맞지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-23",
    "set": "prediction-5",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.4",
    "level": "K3",
    "text": "문서 상태는 초안, 검토 중, 승인됨이다. 초안에서 제출하면 검토 중, 검토 중에서 승인하면 승인됨, 검토 중에서 반려하면 초안으로 간다. 승인됨 상태에서 편집은 허용되지 않는다. 유효한 전이 순서는?",
    "options": [
      "승인됨—편집→초안",
      "초안—승인→승인됨",
      "초안—제출→검토 중—반려→초안—제출→검토 중—승인→승인됨",
      "검토 중—제출→승인됨"
    ],
    "answer": [
      2
    ],
    "explanation": "정의된 제출, 반려, 재제출, 승인 전이를 모두 따르는 순서만 유효하다. 나머지는 정의되지 않은 상태·이벤트 조합을 포함한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-24",
    "set": "prediction-5",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.3",
    "level": "K3",
    "text": "스토리: “고객은 품절 상품의 재입고 알림을 신청할 수 있다.” 조건: 유효한 이메일이고 상품이 품절이면 신청을 저장하고 확인 메시지를 보낸다. 가장 적절한 ATDD 테스트는?",
    "options": [
      "품절 상품과 유효 이메일로 신청한 뒤 저장과 확인 메시지를 검증한다.",
      "재고가 있는 상품의 가격만 조회한다.",
      "이메일 없이 홈 화면 색상을 확인한다.",
      "품절 상품을 장바구니에 추가한 뒤 결제를 완료한다."
    ],
    "answer": [
      0
    ],
    "explanation": "ATDD 테스트는 스토리와 인수 조건의 사전 상태, 입력, 행동과 기대 결과를 구체적인 예로 표현해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-25",
    "set": "prediction-5",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.1",
    "level": "K2",
    "text": "실행 가능한 구문이 50개인 코드에서 테스트가 45개 구문을 실행했다. 구문 커버리지는?",
    "options": [
      "45%",
      "90%",
      "50%",
      "95%"
    ],
    "answer": [
      1
    ],
    "explanation": "구문 커버리지는 실행된 구문 수를 전체 실행 가능 구문 수로 나눈 값이다. 45÷50×100=90%이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-26",
    "set": "prediction-5",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.2",
    "level": "K2",
    "text": "코드에 두 개의 결정이 있고 각 결정은 참과 거짓 결과를 가진다. 테스트가 첫 결정의 참·거짓과 두 번째 결정의 참만 실행했다. 분기 커버리지는?",
    "options": [
      "100%",
      "50%",
      "66.7%",
      "75%"
    ],
    "answer": [
      3
    ],
    "explanation": "전체 분기 결과는 네 개이며 그중 세 개를 실행했으므로 분기 커버리지는 3÷4×100=75%이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-27",
    "set": "prediction-5",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.1",
    "level": "K2",
    "text": "과거에 2월 말일과 윤년 처리에서 결함이 자주 발생했다. 오류 추정을 적용한 테스트로 가장 적절한 것은?",
    "options": [
      "코드의 모든 분기를 계산 없이 통과했다고 가정한다.",
      "무작위로 화면 색상만 바꾼다.",
      "2월 28일·29일과 연도 전환 주변의 날짜를 집중적으로 시험한다.",
      "요구사항을 읽지 않고 정상 날짜 하나만 실행한다."
    ],
    "answer": [
      2
    ],
    "explanation": "오류 추정은 과거 결함, 흔한 실수와 테스터 경험을 이용해 결함 가능성이 높은 입력과 상황을 선택한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-28",
    "set": "prediction-5",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.3",
    "level": "K2",
    "text": "보안 체크리스트에 “기본 비밀번호 변경 여부” 항목을 추가해야 할 가장 타당한 근거는?",
    "options": [
      "최근 여러 릴리스에서 관련 결함이 반복 발견되었기 때문이다.",
      "체크리스트는 한 번 작성하면 변경하면 안 되기 때문이다.",
      "모든 항목은 반드시 코드 분기와 일대일이어야 하기 때문이다.",
      "체크리스트에는 과거 경험을 반영할 수 없기 때문이다."
    ],
    "answer": [
      0
    ],
    "explanation": "체크리스트는 경험, 표준, 사용자 관점과 결함 분석을 바탕으로 만들고 새로운 결함 패턴에 따라 유지·개선해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-29",
    "set": "prediction-5",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.1",
    "level": "K2",
    "text": "사용자 스토리를 협업해 작성할 때 3C 중 Conversation의 의미는?",
    "options": [
      "스토리마다 반드시 세 개의 테스트만 만든다.",
      "스토리를 계약서처럼 고정해 어떤 질문도 금지한다.",
      "완료된 코드를 자동으로 배포한다.",
      "카드의 짧은 문구를 출발점으로 개발자·테스터·비즈니스 담당자가 세부 내용을 논의한다."
    ],
    "answer": [
      3
    ],
    "explanation": "3C는 Card, Conversation, Confirmation이다. Conversation은 팀이 스토리의 세부 내용과 예, 리스크 및 인수 조건을 함께 논의하는 과정이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-30",
    "set": "prediction-5",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.2",
    "level": "K1",
    "text": "테스터가 릴리스 계획에 기여하는 방식은?",
    "options": [
      "제품 책임자 대신 모든 사업 우선순위를 단독 결정한다.",
      "품질 리스크와 테스트 가능성 정보를 제공해 스토리 추정과 우선순위 결정을 돕는다.",
      "테스트 노력을 고려하지 않고 개발 일정만 승인한다.",
      "릴리스가 끝난 뒤에만 리스크를 처음 공유한다."
    ],
    "answer": [
      1
    ],
    "explanation": "테스터는 계획 시 테스트 가능한 인수 조건, 품질 리스크, 테스트 노력과 의존성에 관한 정보를 제공해 팀의 추정과 우선순위 결정을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-31",
    "set": "prediction-5",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.3",
    "level": "K2",
    "text": "다음 중 테스트 시작 조건과 종료 조건을 올바르게 연결한 것은?",
    "options": [
      "시작: 완료 보고서 승인 / 종료: 테스트 데이터 준비",
      "시작: 모든 테스트 완료 / 종료: 첫 빌드 수령",
      "시작: 테스트 환경 사용 가능 / 종료: 합의한 커버리지와 잔여 결함 기준 충족",
      "시작: 운영 배포 완료 / 종료: 요구사항 초안 작성"
    ],
    "answer": [
      2
    ],
    "explanation": "시작 조건은 활동을 시작할 수 있는 전제이고 종료 조건은 완료를 판단하는 기준이다. 환경 준비는 대표적 시작 조건, 커버리지와 결함 상태는 종료 조건이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-32",
    "set": "prediction-5",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.4",
    "level": "K3",
    "text": "세 전문가의 테스트 노력 추정이 낙관 40시간, 가능성 높음 70시간, 비관 130시간이다. 삼점 추정 E=(낙관+4×가능성 높음+비관)/6의 결과는?",
    "options": [
      "75시간",
      "80시간",
      "70시간",
      "90시간"
    ],
    "answer": [
      0
    ],
    "explanation": "(40+4×70+130)÷6=450÷6=75시간이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-33",
    "set": "prediction-5",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.5",
    "level": "K3",
    "text": "TC-A는 리스크 높음, TC-B는 리스크 낮음, TC-C는 리스크 중간이며 TC-A가 실행되어야 TC-C를 실행할 수 있다. 다른 의존성은 없다. 리스크 우선 순서는?",
    "options": [
      "TC-C → TC-A → TC-B",
      "TC-A → TC-C → TC-B",
      "TC-B → TC-A → TC-C",
      "TC-A → TC-B → TC-C"
    ],
    "answer": [
      1
    ],
    "explanation": "고위험 TC-A를 먼저 실행하면 TC-C의 의존성도 충족된다. 이후 중위험 TC-C, 저위험 TC-B 순서가 타당하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-34",
    "set": "prediction-5",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.5.1",
    "level": "K3",
    "text": "모바일 앱이 특정 OS 버전에서만 시작 직후 종료된다. 가장 유용한 결함 보고서 제목은?",
    "options": [
      "테스트 실패",
      "앱 문제 있음",
      "확인 부탁드립니다",
      "Android 15.2에서 앱 4.8.0 실행 시 시작 화면 직후 비정상 종료"
    ],
    "answer": [
      3
    ],
    "explanation": "결함 제목은 영향을 받는 대상과 버전, 조건, 관찰된 장애를 짧고 구체적으로 담아 분류와 재현을 돕는 것이 좋다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-35",
    "set": "prediction-5",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.7",
    "level": "K2",
    "text": "사용자 스토리를 구현하기 전에 비즈니스 예제와 기능 테스트를 정의해 팀의 개발을 안내한다. 애자일 테스팅 사분면에서 가장 관련 있는 것은?",
    "options": [
      "Q2: 팀을 지원하는 비즈니스 대면 테스트",
      "Q1: 팀을 지원하는 기술 대면 테스트",
      "Q3: 제품을 비평하는 비즈니스 대면 테스트",
      "Q4: 제품을 비평하는 기술 대면 테스트"
    ],
    "answer": [
      0
    ],
    "explanation": "Q2는 비즈니스 대면이며 팀을 지원하는 기능 예제, 스토리 테스트와 프로토타입 등을 포함한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-36",
    "set": "prediction-5",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.2",
    "level": "K2",
    "text": "다음 사례와 리스크 유형의 연결 중 올바른 것을 두 개 고르시오.",
    "options": [
      "보안 취약점 가능성은 예산 리스크일 뿐 제품 리스크가 아니다.",
      "테스트 환경 납품 지연은 프로젝트 리스크이다.",
      "숙련 테스터 부족은 제품의 기능 결함 그 자체이다.",
      "핵심 계산이 잘못된 결과를 낼 가능성은 제품 리스크이다.",
      "응답 시간이 느릴 가능성은 항상 프로젝트 리스크이다."
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "제품 리스크는 제품 품질 특성이 기대를 충족하지 못할 가능성이고, 프로젝트 리스크는 일정·인력·환경·공급업체처럼 프로젝트 수행을 위협한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-37",
    "set": "prediction-5",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.4",
    "level": "K2",
    "text": "분석된 고위험 기능에 대해 취할 수 있는 적절한 리스크 대응은?",
    "options": [
      "가능성과 영향을 평가하지 않고 무조건 출시한다.",
      "리스크 기록을 삭제해 보고서에서 보이지 않게 한다.",
      "고위험 기능의 테스트를 가장 마지막으로 미룬다.",
      "테스트 범위를 확대하고 경험 많은 인력을 배치하며 필요하면 기능 범위를 축소한다."
    ],
    "answer": [
      3
    ],
    "explanation": "제품 리스크에는 추가 테스트로 완화하거나, 범위를 줄여 회피하거나, 이전하거나, 수용하고 모니터링하는 등의 대응을 선택할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-38",
    "set": "prediction-5",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.3",
    "level": "K2",
    "text": "테스트 진행 상황을 개발팀에 전달하는 가장 효과적인 예는?",
    "options": [
      "“상태가 별로임”이라고만 말한다.",
      "“결제 회귀 테스트 80% 완료, 차단 결함 2건 때문에 잔여 10건이 보류되었으며 수정 빌드는 오후 3시 예정”이라고 구체적으로 공유한다.",
      "모든 원시 로그를 설명 없이 전송한다.",
      "문제가 있어도 완료 시점까지 알리지 않는다."
    ],
    "answer": [
      1
    ],
    "explanation": "상태 소통은 대상 독자에게 맞춰 진행률, 장애 요인, 결함, 리스크와 다음 조치를 명확하고 객관적으로 전달해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-39",
    "set": "prediction-5",
    "chapter": "6장 테스트 도구",
    "lo": "6.1.1",
    "level": "K2",
    "text": "많은 가상 사용자를 생성해 응답 시간과 처리량을 측정하려 한다. 가장 적합한 도구 유형은?",
    "options": [
      "리뷰 관리 도구",
      "정적 분석 도구",
      "성능 테스트 도구",
      "맞춤법 검사 도구"
    ],
    "answer": [
      2
    ],
    "explanation": "성능 테스트 도구는 부하를 생성하고 응답 시간, 처리량과 자원 사용 같은 성능 지표의 수집을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P5-40",
    "set": "prediction-5",
    "chapter": "6장 테스트 도구",
    "lo": "6.2.1",
    "level": "K1",
    "text": "팀이 매일 밤 동일한 회귀 테스트 300개를 수동으로 실행하느라 새 기능 탐색 시간이 부족하다. 자동화로 기대할 수 있는 가장 직접적인 이점은?",
    "options": [
      "반복 작업의 일관성을 높이고 회귀 테스트를 더 자주 실행할 수 있다.",
      "도구가 모든 테스트 목적을 자동으로 결정한다.",
      "유지보수 비용과 초기 투자가 항상 0이 된다.",
      "사람의 비판적 사고가 전혀 필요 없어진다."
    ],
    "answer": [
      0
    ],
    "explanation": "자동화는 반복 실행의 속도와 일관성, 재현성 및 커버리지 측정을 개선할 수 있다. 도구가 판단과 유지보수를 없애지는 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-01",
    "set": "prediction-6",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.2",
    "level": "K1",
    "text": "전체 팀 접근법에 관한 설명으로 옳은 것은?",
    "options": [
      "전체 팀 접근법을 쓰면 독립적인 관점은 금지된다.",
      "테스트 활동은 오직 테스트 직함을 가진 사람만 수행한다.",
      "제품 책임자는 품질 논의에 참여할 수 없다.",
      "팀원은 자신의 전문 역할을 유지하면서도 품질에 대한 책임을 함께 나눌 수 있다."
    ],
    "answer": [
      3
    ],
    "explanation": "전체 팀 접근법에서는 필요한 지식과 역량을 가진 누구나 테스트 활동에 기여하고 팀 전체가 품질 책임을 공유한다. 전문 역할이나 독립적 관점이 사라지는 것은 아니다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-02",
    "set": "prediction-6",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.2",
    "level": "K1",
    "text": "품질 보증 활동의 예로 가장 적절한 것은?",
    "options": [
      "테스트 케이스를 실행해 실제 결과를 기록한다.",
      "조직의 리뷰 프로세스가 정의대로 적용되는지 감사하고 개선점을 찾는다.",
      "실패한 단위 테스트의 코드를 디버깅한다.",
      "특정 입력에서 발생한 장애를 재현한다."
    ],
    "answer": [
      1
    ],
    "explanation": "품질 보증은 프로세스가 적절히 정의되고 적용되는지 평가하고 개선하는 프로세스 지향 활동이다. 나머지는 테스팅 또는 디버깅에 가깝다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-03",
    "set": "prediction-6",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.2",
    "level": "K2",
    "text": "자동 테스트가 재고 수량 -1을 반환해 실패했다. 이후 개발자가 조건문의 잘못된 연산자를 찾아 수정했다. 실패를 관찰한 활동과 연산자를 수정한 활동은 각각 무엇인가?",
    "options": [
      "테스팅과 디버깅",
      "디버깅과 테스팅",
      "둘 다 테스팅",
      "둘 다 품질 보증"
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 실행으로 장애를 관찰하는 것은 테스팅이고, 원인이 되는 결함을 찾아 제거하는 것은 디버깅이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-04",
    "set": "prediction-6",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.3",
    "level": "K2",
    "text": "급한 일정 때문에 분석가가 환율 반올림 규칙을 잘못 이해했고, 요구사항에 잘못된 공식을 적었다. 개발된 앱에서 최종 금액이 다르게 표시되었다. “잘못된 공식이 적힌 요구사항”의 분류는?",
    "options": [
      "장애",
      "오류",
      "결함",
      "근본 원인"
    ],
    "answer": [
      2
    ],
    "explanation": "사람이 규칙을 잘못 이해한 것은 오류이고, 그 결과 요구사항 산출물에 들어간 잘못된 공식은 결함이다. 실행 시 잘못된 금액 표시는 장애다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-05",
    "set": "prediction-6",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.1",
    "level": "K2",
    "text": "테스트 실행 결과와 기대 결과를 비교하고 이상을 분석해 결함 보고 필요성을 판단하는 활동은?",
    "options": [
      "테스트 계획",
      "테스트 실행",
      "테스트 설계",
      "테스트 완료"
    ],
    "answer": [
      1
    ],
    "explanation": "테스트 실행에는 테스트 절차 수행, 실제 결과 기록, 기대 결과와 비교, 이상 분석과 결함 보고가 포함된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-06",
    "set": "prediction-6",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.3",
    "level": "K2",
    "text": "테스트 계획 활동을 주로 지원하는 테스트웨어는?",
    "options": [
      "운영 고객의 사용 기록 원본만",
      "테스트 실행 로그와 실제 결과만",
      "수정된 제품 소스 코드",
      "테스트 계획, 일정과 리스크 목록"
    ],
    "answer": [
      3
    ],
    "explanation": "테스트 계획 활동에서는 목적, 범위, 접근법, 자원, 일정, 조건과 리스크를 담은 계획 및 관련 관리 산출물을 만든다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-07",
    "set": "prediction-6",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.3",
    "level": "K2",
    "text": "A팀은 개발자가 자기 코드를 검사하고, B팀은 같은 부서의 동료가 검사하며, C팀은 외부 전문기관이 검사한다. 이 배치에 대한 판단 중 옳은 것을 두 개 고르시오.",
    "options": [
      "모든 테스트 레벨에는 반드시 외부 조직만 사용해야 한다.",
      "자신이 작성한 작업 산출물을 스스로 테스트하는 것은 독립성이 낮다.",
      "독립성은 의사소통과 협업에 어떤 단점도 만들지 않는다.",
      "독립성이 높으면 테스트 대상 지식이 필요 없다.",
      "다른 조직의 외부 전문가는 일반적으로 같은 팀 동료보다 독립성이 높다."
    ],
    "answer": [
      1,
      4
    ],
    "explanation": "작성자 자신, 동료, 조직 내 독립 테스트팀, 외부 조직 순으로 독립성이 높아질 수 있다. 높은 독립성은 다른 관점을 주지만 고립과 정보 단절 위험도 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-08",
    "set": "prediction-6",
    "chapter": "1장 테스트 기초",
    "lo": "1.3.1",
    "level": "K2",
    "text": "운영 결함의 75%가 결제와 쿠폰 두 모듈에서 반복 발견된다. 테스트 노력을 조정할 때 가장 관련 있는 원리는?",
    "options": [
      "결함 집중",
      "완전한 테스팅은 불가능",
      "조기 테스팅",
      "상황에 따른 테스팅"
    ],
    "answer": [
      0
    ],
    "explanation": "소수의 컴포넌트나 영역에 대부분의 결함이 집중되는 경향을 결함 집중이라 한다. 결함 분포를 활용해 테스트 우선순위를 조정할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-09",
    "set": "prediction-6",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.2",
    "level": "K1",
    "text": "좋은 테스팅 관행으로 옳은 것은?",
    "options": [
      "동적 테스트는 항상 코딩이 모두 끝난 뒤 한 번만 수행한다.",
      "테스터는 작업 산출물 초안이 준비되는 즉시 리뷰와 테스트 분석을 시작할 수 있다.",
      "모든 테스트 레벨은 동일한 테스트 베이시스를 사용한다.",
      "각 개발 활동과 테스트 활동의 대응 관계는 불필요하다."
    ],
    "answer": [
      1
    ],
    "explanation": "조기 테스팅을 위해 관련 작업 산출물의 초안이 존재하는 즉시 정적 테스팅과 테스트 분석·설계를 시작할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-10",
    "set": "prediction-6",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.3",
    "level": "K1",
    "text": "구현 전에 실패하는 단위 테스트를 작성하고, 이를 통과시키는 최소 코드를 만든 뒤 리팩터링하는 접근법은?",
    "options": [
      "BDD",
      "ATDD",
      "TDD",
      "탐색적 테스팅"
    ],
    "answer": [
      2
    ],
    "explanation": "TDD는 테스트 작성, 테스트를 통과시키는 코드 작성, 리팩터링의 짧은 주기를 반복하는 테스트 우선 개발 접근법이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-11",
    "set": "prediction-6",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.5",
    "level": "K2",
    "text": "다음 중 시프트 레프트의 예로 가장 적절한 것은?",
    "options": [
      "릴리스 완료 후에만 인수 조건을 작성한다.",
      "모든 성능 테스트를 운영 장애 발생 뒤로 미룬다.",
      "테스트팀이 요구사항을 보지 못하게 한다.",
      "보안 위협 모델과 정적 분석을 설계·코딩 단계부터 수행한다."
    ],
    "answer": [
      3
    ],
    "explanation": "시프트 레프트는 리뷰, 정적 분석, 테스트 우선 개발과 조기 비기능 테스트 등을 활용해 품질 활동을 더 이른 단계에 수행하는 것이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-12",
    "set": "prediction-6",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.4",
    "level": "K2",
    "text": "DevOps의 지속적 통합 파이프라인에서 테스트 스위트가 자주 실행될 때 기대되는 효과는?",
    "options": [
      "변경으로 인한 회귀를 빠르게 발견하고 팀에 신속히 피드백한다.",
      "모든 탐색적 테스트가 자동으로 불필요해진다.",
      "배포 빈도가 늘면 테스트 범위는 줄여야 한다.",
      "운영 모니터링은 테스팅과 무관해진다."
    ],
    "answer": [
      0
    ],
    "explanation": "CI 파이프라인의 자동 테스트는 변경을 자주 검증해 회귀에 대한 빠른 피드백을 제공한다. 사람의 탐색과 운영 관찰을 모두 대체하지는 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-13",
    "set": "prediction-6",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.1",
    "level": "K2",
    "text": "완성된 예약 시스템과 외부 항공사 시스템 사이의 메시지 형식과 오류 처리를 확인한다. 해당 테스트 레벨은?",
    "options": [
      "컴포넌트 테스팅",
      "컴포넌트 통합 테스팅",
      "시스템 통합 테스팅",
      "인수 테스팅만"
    ],
    "answer": [
      2
    ],
    "explanation": "시스템 통합 테스팅은 테스트 대상 시스템과 다른 시스템 또는 외부 서비스 간 인터페이스와 상호작용에 초점을 둔다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-14",
    "set": "prediction-6",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.3.1",
    "level": "K2",
    "text": "다음 중 유지보수 테스팅을 촉발할 수 있는 사건은?",
    "options": [
      "요구사항 초안을 처음 작성한 것만",
      "운영 플랫폼 변경, 결함 수정, 데이터 마이그레이션과 시스템 폐기",
      "테스트 조직의 주간 회의 개최만",
      "새 프로젝트 코드가 아직 전혀 없는 상태만"
    ],
    "answer": [
      1
    ],
    "explanation": "운영 중 변경, 환경 업그레이드, 긴급 수정, 마이그레이션과 폐기는 유지보수 테스팅의 대표적 트리거다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-15",
    "set": "prediction-6",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.1",
    "level": "K1",
    "text": "정적 분석 도구로 검사하기에 가장 적합한 산출물은?",
    "options": [
      "운영 매장의 고객 대기시간만",
      "실행 중 사용자의 감정",
      "물리 서버의 팬 소음",
      "소스 코드"
    ],
    "answer": [
      3
    ],
    "explanation": "정적 분석 도구는 실행하지 않고 코드나 모델 같은 형식이 있는 산출물을 분석해 규칙 위반, 복잡도와 특정 결함을 찾는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-16",
    "set": "prediction-6",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.3",
    "level": "K1",
    "text": "리뷰에 대한 전체 책임을 맡아 참가자를 결정하고 리뷰가 언제 어디에서 열릴지 조직하는 주 역할은?",
    "options": [
      "리뷰 리더",
      "작성자",
      "기록자",
      "리뷰어"
    ],
    "answer": [
      0
    ],
    "explanation": "리뷰 리더는 리뷰를 조직하고 범위·목적·참가자·일정을 결정하며 진행과 완료를 감시한다. 조직에 따라 다른 명칭을 사용할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-17",
    "set": "prediction-6",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.3",
    "level": "K2",
    "text": "동적 테스팅에서 발견하기 쉽고 정적 테스팅만으로는 직접 관찰하기 어려운 것은?",
    "options": [
      "요구사항 문장 사이의 모순",
      "특정 부하에서 실제 응답 시간이 허용치를 넘는 장애",
      "도달할 수 없는 코드",
      "코딩 표준 위반"
    ],
    "answer": [
      1
    ],
    "explanation": "부하에 따른 실행 시간과 자원 동작은 소프트웨어를 실제 실행해야 관찰할 수 있다. 모순, 도달 불가능 코드와 표준 위반은 정적으로 발견할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-18",
    "set": "prediction-6",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.2",
    "level": "K2",
    "text": "리뷰 시작 활동에서 수행하는 작업은?",
    "options": [
      "개별 리뷰 결과를 최종 보고서로 승인한다.",
      "작성자가 발견된 모든 결함을 이미 수정한다.",
      "참가자가 산출물, 역할, 리뷰 기준과 필요한 배경 정보를 받을 수 있도록 준비한다.",
      "제품 코드를 운영 환경에 배포한다."
    ],
    "answer": [
      2
    ],
    "explanation": "리뷰 시작에서는 산출물과 자료를 배포하고 참가자가 역할, 범위, 목적, 기준과 필요한 교육을 이해하도록 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-19",
    "set": "prediction-6",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.1.1",
    "level": "K2",
    "text": "상세 명세가 부족한 새 기능을 테스터의 도메인 경험과 세션 차터로 조사했다. 사용한 기법 범주는?",
    "options": [
      "경험 기반 기법",
      "화이트박스 기법",
      "블랙박스 기법만",
      "정적 테스팅 기법"
    ],
    "answer": [
      0
    ],
    "explanation": "탐색적 테스팅은 테스터의 경험과 학습을 활용하는 경험 기반 기법이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-20",
    "set": "prediction-6",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.1",
    "level": "K3",
    "text": "회원 등급 점수는 0 미만이면 오류, 0~499는 일반, 500~999는 우수, 1000 이상은 최우수로 분류한다. 네 동등 분할을 모두 대표하는 입력 집합은?",
    "options": [
      "{250, 500, 750, 1000}",
      "{0, 499, 500, 999}",
      "{-1, 0, 500, 999}",
      "{-1, 250, 750, 1200}"
    ],
    "answer": [
      3
    ],
    "explanation": "분할은 0 미만, 0~499, 500~999, 1000 이상이다. -1, 250, 750, 1200은 각각 다른 분할을 대표한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-21",
    "set": "prediction-6",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.2",
    "level": "K3",
    "text": "정수 입력 범위가 100 이상 200 미만이다. 2값 경계값 분석에 필요한 입력은?",
    "options": [
      "{100, 101, 198, 199}",
      "{99, 100, 199, 200}",
      "{99, 100, 101, 198, 199, 200}",
      "{100, 199}"
    ],
    "answer": [
      1
    ],
    "explanation": "유효 범위는 100~199이다. 2값 BVA는 하한 경계의 99·100과 상한 경계의 199·200을 사용한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-22",
    "set": "prediction-6",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.3",
    "level": "K3",
    "text": "배송 규칙: 국내이면서 총액 5만원 이상이면 무료, 국내이면서 5만원 미만이면 3천원, 해외이면 금액과 무관하게 1만원이다. 규칙과 일치하지 않는 것은?",
    "options": [
      "국내, 6만원 → 무료",
      "국내, 4만원 → 3천원",
      "해외, 3만원 → 3천원",
      "해외, 8만원 → 1만원"
    ],
    "answer": [
      2
    ],
    "explanation": "해외 배송은 주문 금액과 무관하게 1만원이므로 해외 3만원 주문에 3천원을 적용하는 결과는 규칙과 일치하지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-23",
    "set": "prediction-6",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.4",
    "level": "K3",
    "text": "플레이어 상태는 정지, 재생, 일시정지이다. 정지에서 재생을 누르면 재생, 재생에서 일시정지를 누르면 일시정지, 일시정지에서 재생을 누르면 재생, 재생에서 중지를 누르면 정지이다. 정의되지 않은 전이는?",
    "options": [
      "일시정지—재생→재생",
      "정지—재생→재생",
      "재생—중지→정지",
      "정지—일시정지→일시정지"
    ],
    "answer": [
      3
    ],
    "explanation": "정지 상태에서 일시정지 이벤트에 대한 전이는 정의되지 않았다. 나머지는 명시된 전이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-24",
    "set": "prediction-6",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.3",
    "level": "K3",
    "text": "스토리: “관리자는 비활성 계정을 잠글 수 있다.” 조건: 계정이 비활성이고 관리자가 잠금을 확인하면 상태를 잠금으로 바꾸고 감사 로그를 남긴다. 적절한 ATDD 테스트는?",
    "options": [
      "비활성 계정에서 관리자가 확인한 뒤 잠금 상태와 감사 로그를 검증한다.",
      "활성 계정의 프로필 사진만 변경한다.",
      "일반 사용자가 로그인 화면 색상을 확인한다.",
      "잠금 계정을 삭제하고 로그를 무시한다."
    ],
    "answer": [
      0
    ],
    "explanation": "스토리의 사전 조건, 행위와 기대 결과인 비활성 상태, 관리자 확인, 잠금 전환과 감사 로그를 모두 검증해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-25",
    "set": "prediction-6",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.2",
    "level": "K2",
    "text": "한 테스트 스위트가 모든 결정의 참·거짓 결과를 적어도 한 번씩 실행했다. 이 결과에서 타당하게 결론 내릴 수 있는 것은?",
    "options": [
      "모든 요구사항 조합을 검증한다.",
      "모든 가능한 실행 경로를 반드시 실행한다.",
      "각 결정의 가능한 결과를 모두 실행하며, 100% 구문 커버리지도 달성한다.",
      "결함이 없음을 증명한다."
    ],
    "answer": [
      2
    ],
    "explanation": "모든 분기 결과를 실행하면 실행 가능한 구문도 모두 실행되므로 100% 구문 커버리지를 포함한다. 모든 경로나 결함 부재까지 보장하지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-26",
    "set": "prediction-6",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.1",
    "level": "K2",
    "text": "100% 구문 커버리지를 달성했지만 100% 분기 커버리지는 아닐 수 있는 이유는?",
    "options": [
      "구문 커버리지는 요구사항 수만 측정하기 때문이다.",
      "한 결정의 한쪽 결과만으로도 모든 구문이 한 번씩 실행될 수 있기 때문이다.",
      "분기 커버리지는 동적 실행을 사용하지 않기 때문이다.",
      "구문 커버리지는 항상 분기 커버리지보다 강하기 때문이다."
    ],
    "answer": [
      1
    ],
    "explanation": "모든 구문을 실행했어도 일부 결정 결과를 실행하지 않았을 수 있다. 따라서 구문 커버리지는 분기 커버리지보다 약하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-27",
    "set": "prediction-6",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.2",
    "level": "K2",
    "text": "탐색적 테스트 세션의 범위와 목적을 간결하게 안내하는 산출물은?",
    "options": [
      "테스트 차터",
      "결함 수정 패치",
      "형상 기준선",
      "배포 승인서"
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 차터는 탐색적 세션의 목표, 범위와 집중할 리스크를 제시하면서 테스터가 학습에 따라 경로를 조정할 여지를 둔다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-28",
    "set": "prediction-6",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.1",
    "level": "K2",
    "text": "문자열 파서 테스트에서 오류 추정으로 선택할 입력은?",
    "options": [
      "요구사항에 없는 기능을 임의로 삭제",
      "정상적인 짧은 문자열 하나만",
      "코드 커버리지 결과와 무관한 화면 색상",
      "빈 문자열, 매우 긴 문자열, 특수문자와 잘못 닫힌 따옴표"
    ],
    "answer": [
      3
    ],
    "explanation": "오류 추정은 경험상 실패하기 쉬운 빈 값, 극단적 길이, 특수문자와 형식 오류 같은 입력을 선택한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-29",
    "set": "prediction-6",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.2",
    "level": "K2",
    "text": "규칙 지향 인수 조건의 예로 가장 적절한 것은?",
    "options": [
      "Given 주문이 있고 When 결제하면 Then 완료된다.",
      "주문 합계가 50,000원 이상이면 배송비는 0원이어야 한다.",
      "사용자가 만족해야 한다.",
      "충분히 빠르게 처리한다."
    ],
    "answer": [
      1
    ],
    "explanation": "규칙 지향 형식은 충족해야 하는 개별 조건이나 비즈니스 규칙을 검증 가능한 문장으로 표현한다. Given/When/Then은 시나리오 지향 형식이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-30",
    "set": "prediction-6",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.1",
    "level": "K1",
    "text": "리스크 가능성이 4, 영향이 5이고 리스크 수준을 두 값의 곱으로 정한다. 리스크 수준은?",
    "options": [
      "5",
      "9",
      "20",
      "4"
    ],
    "answer": [
      2
    ],
    "explanation": "리스크 수준을 가능성과 영향의 곱으로 정의했으므로 4×5=20이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-31",
    "set": "prediction-6",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.1",
    "level": "K2",
    "text": "테스트 계획에서 “누가 어떤 결과를 언제 어떤 방식으로 공유할지”를 정의하는 부분은?",
    "options": [
      "의사소통 접근법",
      "테스트 대상 범위",
      "결함의 수정 코드",
      "제품의 판매 가격"
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 계획은 이해관계자, 보고 내용, 빈도, 형식과 채널을 포함한 의사소통 방법을 정의할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-32",
    "set": "prediction-6",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.4",
    "level": "K3",
    "text": "네 명의 전문가가 테스트 노력을 80, 100, 120, 140시간으로 추정했다. 단순 평균을 이용한 전문가 기반 추정은?",
    "options": [
      "440시간",
      "100시간",
      "120시간",
      "110시간"
    ],
    "answer": [
      3
    ],
    "explanation": "합계 440시간을 네 명으로 나누면 110시간이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-33",
    "set": "prediction-6",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.5",
    "level": "K3",
    "text": "우선순위 숫자가 작을수록 먼저 실행한다. TC1은 우선순위 1, TC2는 2, TC3은 1이며 TC3은 TC2 실행 후에만 가능하다. TC1은 독립적이다. 우선순위와 의존성을 고려한 순서는?",
    "options": [
      "TC2 → TC3 → TC1",
      "TC3 → TC1 → TC2",
      "TC1 → TC2 → TC3",
      "TC2 → TC1 → TC3"
    ],
    "answer": [
      2
    ],
    "explanation": "독립적인 최고 우선순위 TC1을 먼저 실행하고, TC3의 선행 조건인 TC2를 실행한 다음 TC3을 실행한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-34",
    "set": "prediction-6",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.5.1",
    "level": "K3",
    "text": "검색 결과 정렬 결함 보고서에 재현 단계와 실제 결과는 있지만 기대 결과가 없다. 가장 적절한 기대 결과 문장은?",
    "options": [
      "“뭔가 이상하지 않아야 한다.”",
      "“가격 오름차순 선택 시 모든 결과가 낮은 가격에서 높은 가격 순으로 표시되어야 한다.”",
      "“개발자가 알아서 판단한다.”",
      "“화면이 예뻐야 한다.”"
    ],
    "answer": [
      1
    ],
    "explanation": "기대 결과는 입력과 조건에 대해 관찰 가능하고 검증 가능한 올바른 동작을 구체적으로 설명해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-35",
    "set": "prediction-6",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.3",
    "level": "K2",
    "text": "테스트 실행 시작 조건이 충족되지 않았을 때 가장 적절한 조치는?",
    "options": [
      "아무에게도 알리지 않고 프로젝트를 종료한다.",
      "조건을 문서에서 삭제하고 무조건 실행한다.",
      "모든 테스트 결과를 통과로 기록한다.",
      "영향과 리스크를 평가하고 이해관계자와 예외 또는 일정 조정을 합의한다."
    ],
    "answer": [
      3
    ],
    "explanation": "조건 미충족은 자동 중단만을 뜻하지 않는다. 리스크와 상황을 평가해 조건 완화, 예외 승인, 일정 또는 범위 조정을 이해관계자와 결정한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-36",
    "set": "prediction-6",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.3",
    "level": "K2",
    "text": "개인정보 노출 리스크가 매우 높게 평가되었다. 테스트 범위에 미칠 영향은?",
    "options": [
      "접근 제어·암호화·로그 마스킹에 더 깊은 테스트와 높은 커버리지를 배정한다.",
      "보안 테스트를 제외해 일정 리스크를 줄인다.",
      "낮은 리스크 기능과 동일한 노력만 배정한다.",
      "기능 정상 경로 한 건만 확인한다."
    ],
    "answer": [
      0
    ],
    "explanation": "높은 제품 리스크는 관련 품질 특성, 테스트 기법, 데이터, 커버리지, 우선순위와 독립성 수준을 강화하는 근거가 된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-37",
    "set": "prediction-6",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.2",
    "level": "K2",
    "text": "테스트 관리자가 매주 진행 보고서를 보내고 종료 시 완료 보고서를 작성한다. 각 보고서에 넣을 내용으로 적절한 것을 두 개 고르시오.",
    "options": [
      "두 보고서는 독자와 관계없이 원시 로그만 포함해야 한다.",
      "진행 보고에는 리스크 변화나 제어 조치를 포함할 수 없다.",
      "완료 보고는 수행 결과, 목표 대비 평가, 잔여 결함과 교훈을 요약할 수 있다.",
      "진행 보고는 현재 상태, 편차, 장애 요인과 다음 기간 계획을 전달할 수 있다.",
      "완료 보고는 테스트가 시작되기 전에만 작성한다."
    ],
    "answer": [
      2,
      3
    ],
    "explanation": "진행 보고는 주기적으로 상태와 제어에 필요한 정보를, 완료 보고는 종료 시 결과·편차·품질 평가·잔여 리스크·교훈을 독자에 맞게 전달한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-38",
    "set": "prediction-6",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.4.1",
    "level": "K2",
    "text": "결함을 재현하려면 테스트 당시의 앱 빌드, 설정 파일, 데이터와 자동화 스크립트 버전이 필요하다. 이를 가장 직접적으로 지원하는 것은?",
    "options": [
      "오류 추정",
      "형상 관리",
      "동등 분할",
      "제품 리스크 수용"
    ],
    "answer": [
      1
    ],
    "explanation": "형상 관리는 테스트 대상과 테스트웨어의 식별, 버전, 기준선과 변경 이력을 통제해 특정 결과의 재현과 추적을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-39",
    "set": "prediction-6",
    "chapter": "6장 테스트 도구",
    "lo": "6.1.1",
    "level": "K2",
    "text": "요구사항과 테스트 케이스 사이의 연결을 관리하고 커버리지 보고서를 만들려 한다. 적합한 도구 지원은?",
    "options": [
      "테스트 관리 도구",
      "성능 부하 생성기",
      "코드 컴파일러만",
      "화면 녹화 도구만"
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 관리 도구는 요구사항, 테스트 조건·케이스, 실행 결과와 결함 간 추적성을 관리하고 커버리지와 진행 상황 보고를 지원할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P6-40",
    "set": "prediction-6",
    "chapter": "6장 테스트 도구",
    "lo": "6.2.1",
    "level": "K1",
    "text": "테스트 자동화 도입 시 고려할 리스크는?",
    "options": [
      "객관적인 측정값을 수집하기 쉬워질 수 있다.",
      "반복 실행의 일관성이 향상될 수 있다.",
      "회귀 테스트를 야간에도 실행할 수 있다.",
      "테스트 대상이 자주 바뀌면 자동화 스크립트 유지보수 비용이 예상보다 커질 수 있다."
    ],
    "answer": [
      3
    ],
    "explanation": "변경이 잦거나 설계가 불안정하면 스크립트 유지보수 비용이 커질 수 있다. 나머지는 자동화의 잠재적 이점이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-01",
    "set": "prediction-7",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.1",
    "level": "K1",
    "text": "테스트 목적의 예로 적절한 것은?",
    "options": [
      "계약 또는 규제 요구사항을 충족하는지 확인한다.",
      "모든 결함이 수정되었다고 보증한다.",
      "발견한 장애의 원인을 테스터가 직접 코딩한다.",
      "가능한 입력을 빠짐없이 전수 실행한다."
    ],
    "answer": [
      0
    ],
    "explanation": "테스팅은 요구사항 충족 확인, 결함 발견, 품질 평가, 리스크 감소와 의사결정 지원을 목적으로 할 수 있다. 완전성이나 무결함을 보장하지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-02",
    "set": "prediction-7",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.2",
    "level": "K1",
    "text": "전체 팀 접근법을 적용한 사례는?",
    "options": [
      "모든 테스트 결정을 외부 감사자에게만 맡긴다.",
      "테스터가 품질 정보를 다른 역할에 공개하지 않는다.",
      "개발자·테스터·비즈니스 담당자가 예제와 인수 조건을 함께 논의한다.",
      "개발자는 기능 구현 뒤 품질 책임에서 제외된다."
    ],
    "answer": [
      2
    ],
    "explanation": "전체 팀 접근법은 다양한 역할이 함께 품질 활동에 참여하고 정보와 책임을 공유하는 방식이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-03",
    "set": "prediction-7",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.1",
    "level": "K2",
    "text": "철도 신호 제어 소프트웨어에서 체계적인 테스팅이 특히 필요한 이유는?",
    "options": [
      "테스트를 하면 모든 운영 조건을 완전히 증명할 수 있기 때문이다.",
      "장애의 영향이 인명과 재산에 매우 클 수 있어 제품 리스크를 낮춰야 하기 때문이다.",
      "안전 중요 시스템에는 리뷰를 사용할 수 없기 때문이다.",
      "개발자가 테스트에 참여하면 법적으로 무효이기 때문이다."
    ],
    "answer": [
      1
    ],
    "explanation": "장애가 심각한 손실을 일으킬 수 있는 안전 중요 시스템은 높은 제품 리스크에 맞춰 철저한 검증이 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-04",
    "set": "prediction-7",
    "chapter": "1장 테스트 기초",
    "lo": "1.3.1",
    "level": "K2",
    "text": "게임 앱에 효과적이었던 테스트 접근을 의료기기에도 그대로 적용하려 한다. 가장 관련 있는 테스트 원리는?",
    "options": [
      "테스트 마모",
      "결함 집중",
      "오류 부재의 궤변",
      "테스팅은 상황에 따라 달라진다."
    ],
    "answer": [
      3
    ],
    "explanation": "적절한 기법, 독립성, 문서화와 철저함은 도메인, 리스크, 규제와 수명주기 같은 맥락에 따라 달라진다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-05",
    "set": "prediction-7",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.1",
    "level": "K2",
    "text": "테스트 완료 활동에서 수행하는 작업으로 가장 적절한 것은?",
    "options": [
      "테스트 조건을 처음 식별한다.",
      "새 요구사항의 모든 코드를 구현한다.",
      "미해결 결함과 테스트웨어를 인계하고 교훈 및 완료 정보를 정리한다.",
      "개별 테스트 케이스의 입력값만 설계한다."
    ],
    "answer": [
      2
    ],
    "explanation": "테스트 완료에서는 테스트웨어 보존·인계, 환경 종료, 미해결 항목 전달, 교훈 정리와 완료 보고 등을 수행한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-06",
    "set": "prediction-7",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.4",
    "level": "K2",
    "text": "양방향 추적성이 유지될 때 테스트 완료 시 얻는 이점은?",
    "options": [
      "각 요구사항이 어떤 테스트로 검증되었는지와 누락된 커버리지를 확인할 수 있다.",
      "모든 결함의 근본 원인을 자동 수정한다.",
      "테스트 케이스 실행 순서를 무작위로 만든다.",
      "비용 추정이 항상 정확해진다."
    ],
    "answer": [
      0
    ],
    "explanation": "요구사항과 테스트 조건·케이스·결과의 추적성은 커버리지 평가와 누락 확인을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-07",
    "set": "prediction-7",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.1",
    "level": "K2",
    "text": "복잡한 세금 계산 기능을 테스트할 인력을 선택한다. 효과적인 테스터 역량으로 적절한 것을 두 개 고르시오.",
    "options": [
      "다른 팀과 정보를 공유하지 않는 습관",
      "세금 도메인과 관련 기술에 대한 이해",
      "결함을 개인 비난으로 전달하는 방식",
      "규칙을 논리적으로 분석하는 능력",
      "질문하지 않고 명세를 그대로 믿는 태도"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "분석적 사고와 관련 도메인·기술 지식은 복잡한 규칙의 테스트에 도움이 된다. 호기심, 소통과 협업도 중요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-08",
    "set": "prediction-7",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.3",
    "level": "K2",
    "text": "한 개발자가 자기 코드를 테스트한 뒤 다른 팀의 테스터가 같은 기능을 다시 평가했다. 두 번째 평가가 추가 가치를 줄 수 있는 이유는?",
    "options": [
      "독립 테스팅은 의사소통 비용이 전혀 없기 때문이다.",
      "독립 테스터는 요구사항을 몰라야 하기 때문이다.",
      "개발자의 테스트 결과는 모두 무효이기 때문이다.",
      "작성자와 다른 관점과 편향으로 새로운 결함을 발견할 가능성이 있기 때문이다."
    ],
    "answer": [
      3
    ],
    "explanation": "다른 사람이 수행하는 독립 테스팅은 작성자의 확증 편향을 줄이고 다른 결함 유형을 발견할 가능성을 높인다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-09",
    "set": "prediction-7",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.3",
    "level": "K1",
    "text": "비즈니스 담당자·개발자·테스터가 구현 전에 인수 예를 함께 만들고 그 예로 개발을 안내하는 접근법은?",
    "options": [
      "유지보수 테스팅",
      "TDD",
      "ATDD",
      "구문 테스팅"
    ],
    "answer": [
      2
    ],
    "explanation": "ATDD는 여러 관점의 팀원이 구현 전에 인수 조건과 테스트를 구체적인 예로 협업해 정의한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-10",
    "set": "prediction-7",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.2",
    "level": "K1",
    "text": "순차적 개발에서 애자일 개발로 전환하는 팀이 두 방식 모두에서 유지해야 할 관행은?",
    "options": [
      "테스트 목적에 맞춰 각 테스트 레벨에 적합한 테스트 베이시스를 선택한다.",
      "모든 테스트 레벨에서 소스 코드만 베이시스로 사용한다.",
      "정적 테스팅은 순차 모델에서만 수행한다.",
      "테스터의 조기 참여를 금지한다."
    ],
    "answer": [
      0
    ],
    "explanation": "각 테스트 레벨은 목적과 대상에 맞는 테스트 베이시스를 사용하며 개발 산출물이 준비되는 시점부터 테스트 활동을 연계한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-11",
    "set": "prediction-7",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.1",
    "level": "K2",
    "text": "V 모델에서 시스템 요구사항 명세와 가장 직접적으로 대응하는 테스트 레벨은?",
    "options": [
      "컴포넌트 테스팅",
      "시스템 테스팅",
      "컴포넌트 통합 테스팅",
      "단위 디버깅"
    ],
    "answer": [
      1
    ],
    "explanation": "V 모델에서는 시스템 요구사항이 시스템 테스트 분석·설계의 주요 베이시스가 된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-12",
    "set": "prediction-7",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.6",
    "level": "K2",
    "text": "회고에서 정한 개선 조치가 실제 효과가 있었는지 확인하는 방법으로 가장 적절한 것은?",
    "options": [
      "개선 항목을 기록하지 않는다.",
      "조치를 정한 즉시 성공으로 간주한다.",
      "문제를 제기한 사람을 회고에서 제외한다.",
      "다음 반복에서 관련 지표와 팀 피드백을 비교하고 조치 결과를 검토한다."
    ],
    "answer": [
      3
    ],
    "explanation": "회고 조치는 소유자와 기한을 정하고 이후 반복의 관찰·지표·피드백으로 효과를 추적해야 지속적 개선으로 이어진다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-13",
    "set": "prediction-7",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.2",
    "level": "K2",
    "text": "사용자가 화면을 얼마나 쉽게 이해하고 작업을 완료하는지 평가한다. 테스트 유형은?",
    "options": [
      "사용성 비기능 테스팅",
      "기능 테스팅만",
      "확인 테스팅",
      "컴포넌트 통합 테스팅"
    ],
    "answer": [
      0
    ],
    "explanation": "사용성은 효과성, 효율성과 만족도 등 제품의 비기능 품질 특성을 평가한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-14",
    "set": "prediction-7",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.3",
    "level": "K2",
    "text": "버그 수정 후 원래 실패했던 테스트는 통과했지만, 같은 변경이 보고서 기능에 영향을 주지 않았는지도 확인하려 한다. 추가로 필요한 것은?",
    "options": [
      "인수 조건 삭제",
      "확인 테스트만 반복",
      "회귀 테스트",
      "정적 분석만 수행"
    ],
    "answer": [
      2
    ],
    "explanation": "원래 결함의 수정 여부는 확인 테스트로 확인하고, 변경의 부작용은 관련 영역의 회귀 테스트로 찾는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-15",
    "set": "prediction-7",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.3",
    "level": "K1",
    "text": "리뷰할 산출물을 결정하고 인력과 시간을 제공하는 주 역할은?",
    "options": [
      "기록자",
      "관리자",
      "작성자",
      "리뷰어"
    ],
    "answer": [
      1
    ],
    "explanation": "관리자는 무엇을 리뷰할지 결정하고 리뷰에 필요한 직원과 시간을 제공한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-16",
    "set": "prediction-7",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.1",
    "level": "K1",
    "text": "프로토타입을 이해관계자에게 자주 보여주는 가장 직접적인 이점은?",
    "options": [
      "공식 리뷰가 더 이상 필요 없다.",
      "제품 코드의 모든 분기를 자동 실행한다.",
      "결함 수정 비용이 항상 0이 된다.",
      "기대와 실제 방향의 차이를 조기에 찾아 요구사항을 조정할 수 있다."
    ],
    "answer": [
      3
    ],
    "explanation": "빈번한 피드백은 기대 차이와 오해를 일찍 드러내고 제품이 잘못된 방향으로 발전하는 것을 줄인다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-17",
    "set": "prediction-7",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.2",
    "level": "K2",
    "text": "정적 테스팅이 동적 테스팅보다 조기에 발견하기 적합한 결함은?",
    "options": [
      "실행 중 메모리 사용량 급증",
      "특정 네트워크 부하에서만 발생하는 지연",
      "서로 모순되는 요구사항과 누락된 인수 조건",
      "실제 브라우저의 렌더링 속도 저하"
    ],
    "answer": [
      2
    ],
    "explanation": "요구사항의 모순·모호성·누락은 산출물 리뷰로 실행 전 발견할 수 있다. 런타임 성능 문제는 동적 실행이 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-18",
    "set": "prediction-7",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.4",
    "level": "K2",
    "text": "기술적으로 자격 있는 동료들이 설계 대안을 평가하고 합의를 이루며 기술적 결정을 내리는 리뷰 유형은?",
    "options": [
      "기술 리뷰",
      "워크스루",
      "인스펙션",
      "비공식 리뷰"
    ],
    "answer": [
      0
    ],
    "explanation": "기술 리뷰는 기술적 자격이 있는 리뷰어가 수행하며 기술 문제에 대한 합의와 의사결정, 결함 발견을 목적으로 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-19",
    "set": "prediction-7",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.1.1",
    "level": "K2",
    "text": "상태 전이 다이어그램에서 정의된 전이와 유효하지 않은 전이를 도출했다. 기법 범주는?",
    "options": [
      "정적 분석 기법",
      "화이트박스 테스트 기법",
      "경험 기반 테스트 기법",
      "블랙박스 테스트 기법"
    ],
    "answer": [
      3
    ],
    "explanation": "상태 전이 테스팅은 명세나 모델의 외부 동작을 기반으로 하는 블랙박스 기법이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-20",
    "set": "prediction-7",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.1",
    "level": "K3",
    "text": "연령 규칙은 0~12세 아동, 13~18세 청소년, 19세 이상 성인이고 음수는 무효이다. 각 분할을 한 번씩 대표하는 입력은?",
    "options": [
      "{0, 12, 13, 18}",
      "{-1, 8, 16, 30}",
      "{-1, 0, 13, 18}",
      "{8, 12, 18, 19}"
    ],
    "answer": [
      1
    ],
    "explanation": "분할은 음수 무효, 0~12, 13~18, 19 이상이다. -1, 8, 16, 30은 각각 하나의 분할을 대표한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-21",
    "set": "prediction-7",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.2",
    "level": "K3",
    "text": "예약 가능 날짜가 오늘부터 30일 후까지이며 오늘을 0일로 센다. 2값 경계값 분석의 값은?",
    "options": [
      "{-1, 0, 30, 31}",
      "{0, 1, 29, 30}",
      "{-1, 0, 1, 29, 30, 31}",
      "{0, 30}"
    ],
    "answer": [
      0
    ],
    "explanation": "유효 범위는 0~30이다. 2값 BVA는 하한의 -1·0과 상한의 30·31을 선택한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-22",
    "set": "prediction-7",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.3",
    "level": "K3",
    "text": "접근 규칙: 관리자이면 편집 가능, 관리자가 아니면서 문서 소유자이면 편집 가능, 둘 다 아니면 읽기만 가능하다. 규칙과 일치하지 않는 결과는?",
    "options": [
      "관리자, 소유자 아님 → 편집",
      "관리자 아님, 소유자 → 편집",
      "관리자, 소유자 → 읽기만",
      "관리자 아님, 소유자 아님 → 읽기만"
    ],
    "answer": [
      2
    ],
    "explanation": "관리자는 소유 여부와 관계없이 편집할 수 있으므로 관리자이면서 소유자인 경우 읽기만 가능하다는 결과는 규칙과 맞지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-23",
    "set": "prediction-7",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.4",
    "level": "K3",
    "text": "주문 상태는 생성, 결제, 발송, 취소이다. 생성에서 결제하면 결제, 생성에서 취소하면 취소, 결제에서 발송하면 발송, 결제에서 환불하면 취소가 된다. 유효하지 않은 전이는?",
    "options": [
      "생성—결제→결제",
      "생성—발송→발송",
      "결제—환불→취소",
      "결제—발송→발송"
    ],
    "answer": [
      1
    ],
    "explanation": "생성 상태에서 발송 이벤트로 바로 발송 상태가 되는 전이는 정의되지 않았다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-24",
    "set": "prediction-7",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.3",
    "level": "K3",
    "text": "스토리: “사용자는 만료 전 구독을 자동 갱신할 수 있다.” 조건: 결제수단이 유효하고 자동갱신이 켜져 있으면 만료일에 결제하고 기간을 연장한다. 적절한 테스트는?",
    "options": [
      "만료 후 계정을 즉시 삭제한다.",
      "자동갱신을 끄고 프로필 이름만 변경한다.",
      "결제수단 없이 홈 화면을 연다.",
      "유효 결제수단과 자동갱신 활성 상태에서 만료일 결제와 기간 연장을 확인한다."
    ],
    "answer": [
      3
    ],
    "explanation": "ATDD 예는 인수 조건의 사전 상태, 사건과 기대 결과를 모두 포함해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-25",
    "set": "prediction-7",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.1",
    "level": "K2",
    "text": "실행 가능한 구문 80개 중 60개가 실행되었다. 구문 커버리지는?",
    "options": [
      "75%",
      "60%",
      "80%",
      "25%"
    ],
    "answer": [
      0
    ],
    "explanation": "60÷80×100=75%이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-26",
    "set": "prediction-7",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.2",
    "level": "K2",
    "text": "분기 커버리지 측정에서 분모가 되는 것은?",
    "options": [
      "요구사항 문장 수",
      "실행된 테스트 케이스 수",
      "테스트 대상의 실행 가능한 전체 분기 결과 수",
      "발견된 결함 수"
    ],
    "answer": [
      2
    ],
    "explanation": "분기 커버리지는 실행된 분기 결과 수를 실행 가능한 전체 분기 결과 수로 나누어 계산한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-27",
    "set": "prediction-7",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.2",
    "level": "K2",
    "text": "탐색적 테스팅에서 세션 종료 후 디브리핑을 하는 주된 이유는?",
    "options": [
      "세션 기록을 삭제한다.",
      "모든 결함을 자동 수정한다.",
      "테스트 차터를 숨긴다.",
      "수행한 테스트, 발견 사항, 커버리지와 다음 조사 방향을 공유하고 평가한다."
    ],
    "answer": [
      3
    ],
    "explanation": "디브리핑은 세션의 진행과 발견, 학습, 장애 요인과 후속 테스트 필요를 검토해 투명성과 방향성을 높인다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-28",
    "set": "prediction-7",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.3",
    "level": "K2",
    "text": "체크리스트 항목으로 가장 적절한 것은?",
    "options": [
      "시스템을 완벽하게 테스트한다.",
      "비밀번호 재설정 링크가 한 번 사용된 뒤 다시 사용되지 않는지 확인한다.",
      "모든 결함을 찾는다.",
      "품질이 좋은지 느낌으로 판단한다."
    ],
    "answer": [
      1
    ],
    "explanation": "체크리스트 항목은 경험과 위험을 반영하면서도 테스터가 확인할 수 있을 만큼 구체적이어야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-29",
    "set": "prediction-7",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.2",
    "level": "K2",
    "text": "검증 가능한 인수 조건의 특성으로 가장 적절한 것은?",
    "options": [
      "구현 세부 코드를 반드시 그대로 지정한다.",
      "“사용하기 좋아야 한다”처럼 주관적으로만 쓴다.",
      "관찰 가능한 결과와 명확한 조건을 포함한다.",
      "어떤 결과가 성공인지 생략한다."
    ],
    "answer": [
      2
    ],
    "explanation": "좋은 인수 조건은 명확하고 간결하며 검증 가능하고, 사전 조건과 관찰 가능한 기대 결과를 제공한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-30",
    "set": "prediction-7",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.1",
    "level": "K1",
    "text": "테스트 모니터링 지표의 예는?",
    "options": [
      "실행한 테스트 수와 통과·실패 비율",
      "개발자의 개인 취미",
      "회사 식당 메뉴",
      "제품 로고의 선호 색상만"
    ],
    "answer": [
      0
    ],
    "explanation": "모니터링 지표에는 테스트 준비·실행 진행률, 통과·실패, 결함, 커버리지, 비용과 일정 등이 포함될 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-31",
    "set": "prediction-7",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.1",
    "level": "K2",
    "text": "테스트 계획에서 범위 밖 항목을 명시하는 이유는?",
    "options": [
      "테스트 목적을 숨기기 위해서이다.",
      "제외 영역에는 리스크가 절대 없기 때문이다.",
      "나중에 결함 보고를 금지하기 위해서이다.",
      "이해관계자의 기대를 맞추고 테스트하지 않는 영역의 리스크를 투명하게 하기 위해서이다."
    ],
    "answer": [
      3
    ],
    "explanation": "포함·제외 범위를 명확히 하면 자원과 책임을 합의하고 미검증 영역의 잔여 리스크를 이해관계자가 인식할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-32",
    "set": "prediction-7",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.4",
    "level": "K3",
    "text": "과거 프로젝트에서 기능점 1점당 평균 테스트 노력이 2.5시간이었다. 새 프로젝트가 120기능점이면 추정 노력은?",
    "options": [
      "48시간",
      "300시간",
      "122.5시간",
      "250시간"
    ],
    "answer": [
      1
    ],
    "explanation": "비율 기반 추정으로 120×2.5=300시간이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-33",
    "set": "prediction-7",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.5",
    "level": "K3",
    "text": "각 단계에서 실행 가능한 테스트 중 제품 리스크가 높은 것을 먼저 선택한다. TC-X는 고위험, TC-Y는 중위험, TC-Z는 고위험이며 TC-Z는 TC-Y 실행 후 가능하고 TC-X는 독립적이다. 적절한 순서는?",
    "options": [
      "TC-X → TC-Y → TC-Z",
      "TC-Z → TC-X → TC-Y",
      "TC-Y → TC-Z → TC-X",
      "TC-Y → TC-X → TC-Z"
    ],
    "answer": [
      0
    ],
    "explanation": "독립적인 고위험 TC-X를 먼저 실행하고, 고위험 TC-Z를 가능하게 하는 TC-Y를 실행한 뒤 TC-Z를 수행한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-34",
    "set": "prediction-7",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.5.1",
    "level": "K3",
    "text": "결함 보고서의 심각도를 정할 때 가장 중요한 근거는?",
    "options": [
      "개발자가 수정하기 싫어하는 정도",
      "결함을 발견한 사람의 직급",
      "장애가 사용자와 시스템에 미치는 영향",
      "보고서 작성 시간"
    ],
    "answer": [
      2
    ],
    "explanation": "심각도는 결함이나 장애가 제품, 사용자와 비즈니스에 미치는 영향의 정도를 나타낸다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-35",
    "set": "prediction-7",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.7",
    "level": "K2",
    "text": "출시 후보에 대규모 부하 테스트와 취약점 스캔을 수행해 기술적 품질 위험을 비평하려 한다. 해당 활동이 주로 속하는 사분면은?",
    "options": [
      "Q1",
      "Q4",
      "Q2",
      "Q3"
    ],
    "answer": [
      1
    ],
    "explanation": "Q4는 기술 대면이며 제품을 비평하는 비기능 테스트, 보안과 성능 등을 포함한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-36",
    "set": "prediction-7",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.2",
    "level": "K2",
    "text": "다음 상황과 리스크 분류의 연결 중 옳은 것을 두 개 고르시오.",
    "options": [
      "핵심 테스터가 퇴사할 가능성 — 프로젝트 리스크",
      "데이터 유출 가능성 — 일정 리스크만",
      "운영 중 잔액 계산이 틀릴 가능성 — 제품 리스크",
      "응답 지연 가능성 — 프로젝트 리스크만",
      "테스트 환경 지연 — 제품 기능 결함"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "품질 특성의 실패 가능성은 제품 리스크이고, 인력·환경·공급업체·일정 문제는 프로젝트 수행을 위협하는 프로젝트 리스크이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-37",
    "set": "prediction-7",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.3",
    "level": "K2",
    "text": "제품 책임자에게 테스트 상태를 알릴 때 가장 적절한 내용은?",
    "options": [
      "스토리별 완료 상태, 주요 결함, 품질 리스크와 릴리스 영향",
      "모든 자동화 로그의 원시 바이트만",
      "테스터 개인의 감정만",
      "문제가 있어도 “정상”이라는 한 단어만"
    ],
    "answer": [
      0
    ],
    "explanation": "상태 정보는 독자의 의사결정에 맞춰 진행률, 품질, 리스크, 장애 요인과 예측 영향을 요약해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-38",
    "set": "prediction-7",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.4.1",
    "level": "K2",
    "text": "테스트 환경 설정 변경이 승인된 버전인지 확인하려면 무엇이 필요한가?",
    "options": [
      "리뷰 참가자의 개인 메모만",
      "무작위 테스트 데이터만",
      "형상 항목 식별과 변경 통제 기록",
      "테스트 마모 원리만"
    ],
    "answer": [
      2
    ],
    "explanation": "형상 관리는 환경 설정을 형상 항목으로 식별하고 승인된 변경과 기준선을 추적해 일관성과 재현성을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-39",
    "set": "prediction-7",
    "chapter": "6장 테스트 도구",
    "lo": "6.1.1",
    "level": "K2",
    "text": "코드를 실행하지 않고 잠재적 보안 취약 패턴과 코딩 규칙 위반을 탐지하는 도구는?",
    "options": [
      "결함 추적 도구만",
      "테스트 관리 도구",
      "부하 생성 도구",
      "정적 분석 도구"
    ],
    "answer": [
      3
    ],
    "explanation": "정적 분석 도구는 소프트웨어를 실행하지 않고 코드의 데이터 흐름, 규칙 위반과 특정 취약 패턴을 분석한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P7-40",
    "set": "prediction-7",
    "chapter": "6장 테스트 도구",
    "lo": "6.2.1",
    "level": "K1",
    "text": "자동화 도입의 잠재적 이점으로 옳은 것은?",
    "options": [
      "도구가 모든 기대 결과를 스스로 올바르게 만든다.",
      "반복 가능한 테스트를 빠르게 실행하고 사람이 탐색에 쓸 시간을 확보할 수 있다.",
      "테스트 설계 역량이 필요 없어진다.",
      "자동화 스크립트는 제품 변경의 영향을 받지 않는다."
    ],
    "answer": [
      1
    ],
    "explanation": "자동화는 반복 작업의 속도·일관성과 실행 빈도를 높여 사람이 분석과 탐색에 집중하도록 도울 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-01",
    "set": "prediction-8",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.2",
    "level": "K1",
    "text": "테스팅이 품질 관리에 해당하는 이유는?",
    "options": [
      "조직 전체 프로세스의 준수 여부만 감사하기 때문이다.",
      "특정 제품을 평가하고 발견한 결함과 품질 정보를 제공하기 때문이다.",
      "개발자의 오류를 처벌하기 때문이다.",
      "품질 보증 절차를 대신해 모든 프로세스를 정의하기 때문이다."
    ],
    "answer": [
      1
    ],
    "explanation": "테스팅은 제품 중심의 품질 관리 활동이다. QA는 프로세스가 적절히 정의·적용되는지에 초점을 둔다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-02",
    "set": "prediction-8",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.1",
    "level": "K1",
    "text": "출시 전 품질회의에서 테스트팀이 달성하려는 타당한 목표는?",
    "options": [
      "무한한 입력 조합을 모두 실행한다.",
      "운영 장애가 영원히 없음을 증명한다.",
      "모든 개발 작업을 테스터가 대신한다.",
      "테스트 대상에 대한 신뢰 수준을 높인다."
    ],
    "answer": [
      3
    ],
    "explanation": "테스팅은 결함 발견과 리스크 감소를 통해 품질에 대한 신뢰를 높이고 의사결정을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-03",
    "set": "prediction-8",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.1",
    "level": "K2",
    "text": "보험료 계산 오류가 고객 과금과 규제 위반으로 이어질 수 있다. 테스팅의 필요성을 가장 잘 설명한 것은?",
    "options": [
      "계산 기능은 정적 테스팅을 사용할 수 없다.",
      "테스트를 하면 규제 검토가 필요 없어진다.",
      "잠재적 장애의 재정·법적 영향을 줄이고 계산 품질에 대한 정보를 제공한다.",
      "모든 보험 상품 조합을 시험하면 결함 부재가 증명된다."
    ],
    "answer": [
      2
    ],
    "explanation": "테스팅은 제품 장애로 인한 손실 가능성을 낮추고 요구사항·규제 충족에 대한 근거를 제공한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-04",
    "set": "prediction-8",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.3",
    "level": "K2",
    "text": "설계자가 시간대 변환 규칙을 착각해 잘못된 설계 결정을 내렸다. 이 “규칙을 착각한 행위”는 무엇인가?",
    "options": [
      "오류",
      "결함",
      "장애",
      "테스트 베이시스"
    ],
    "answer": [
      0
    ],
    "explanation": "사람이 잘못된 판단이나 행위를 하는 것은 오류다. 오류가 산출물에 반영되면 결함이 되고 실행 시 장애를 일으킬 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-05",
    "set": "prediction-8",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.1",
    "level": "K2",
    "text": "테스트 절차의 우선순위를 정하고 실행 일정에 맞춰 테스트 스위트를 구성하는 활동은?",
    "options": [
      "테스트 완료",
      "테스트 분석",
      "테스트 계획만",
      "테스트 구현"
    ],
    "answer": [
      3
    ],
    "explanation": "테스트 구현에서는 테스트 케이스를 절차와 스위트로 구성하고 우선순위와 실행 순서를 정하며 환경·데이터 준비를 확인한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-06",
    "set": "prediction-8",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.3",
    "level": "K2",
    "text": "테스트 분석 활동의 대표적인 테스트웨어는?",
    "options": [
      "실제 결과가 기록된 실행 로그만",
      "우선순위가 정해진 테스트 조건",
      "테스트 완료 보고서만",
      "수정된 소스 코드"
    ],
    "answer": [
      1
    ],
    "explanation": "테스트 분석에서는 테스트 베이시스를 평가하고 테스트 조건과 관련 리스크·커버리지 항목을 식별하고 우선순위를 정한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-07",
    "set": "prediction-8",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.5",
    "level": "K2",
    "text": "프로젝트가 테스트 관리 역할과 테스팅 역할의 업무를 나누려 한다. 책임 배정으로 올바른 것을 두 개 고르시오.",
    "options": [
      "테스트 관리 역할만 결함을 발견할 수 있다.",
      "테스트 관리 역할은 계획, 모니터링, 제어와 완료를 주로 담당한다.",
      "테스팅 역할은 결과 보고에 참여할 수 없다.",
      "테스팅 역할은 분석, 설계, 구현과 실행을 주로 담당한다.",
      "두 역할은 법적으로 항상 다른 사람이 맡아야 한다."
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "역할은 활동 책임을 구분한 것으로 한 사람이 여러 역할을 맡을 수 있다. 관리 역할은 계획·통제, 테스팅 역할은 분석부터 실행을 중심으로 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-08",
    "set": "prediction-8",
    "chapter": "1장 테스트 기초",
    "lo": "1.3.1",
    "level": "K2",
    "text": "요구사항 모호성을 코딩 전에 리뷰에서 발견했다. 가장 관련 있는 원리는?",
    "options": [
      "테스트 마모",
      "결함 집중",
      "조기 테스팅은 시간과 비용을 절약한다.",
      "오류 부재의 궤변"
    ],
    "answer": [
      2
    ],
    "explanation": "결함을 수명주기 초기에 발견하면 잘못된 산출물로 전파되기 전에 수정해 재작업 비용과 일정을 줄일 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-09",
    "set": "prediction-8",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.2",
    "level": "K1",
    "text": "개발 활동과 테스트 활동의 관계에 관한 좋은 관행은?",
    "options": [
      "모든 레벨의 목적과 베이시스를 동일하게 만든다.",
      "테스트는 운영 배포 뒤에만 시작한다.",
      "테스트 분석은 개발 모델과 무관하게 마지막에만 한다.",
      "각 개발 활동에 대응하는 테스트 활동을 두고 서로의 산출물을 연결한다."
    ],
    "answer": [
      3
    ],
    "explanation": "각 개발 활동에는 대응하는 테스트 활동이 있으며 분석·설계는 관련 산출물 초안부터 시작할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-10",
    "set": "prediction-8",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.3",
    "level": "K1",
    "text": "다음 중 테스트 우선 접근법이 아닌 것은?",
    "options": [
      "TDD",
      "V 모델",
      "ATDD",
      "BDD"
    ],
    "answer": [
      1
    ],
    "explanation": "TDD, ATDD와 BDD는 테스트 우선 접근법이다. V 모델은 개발·테스트 활동의 대응을 표현하는 수명주기 모델이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-11",
    "set": "prediction-8",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.1",
    "level": "K2",
    "text": "순차적 수명주기에서 뒤늦게 요구사항 결함이 발견될 때의 일반적인 영향은?",
    "options": [
      "테스트 설계에 아무 영향이 없다.",
      "반복적 모델보다 항상 즉시 수정된다.",
      "여러 후속 산출물이 이미 만들어져 수정 범위와 비용이 커질 수 있다.",
      "이미 작성된 코드에는 결함이 전파되지 않는다."
    ],
    "answer": [
      2
    ],
    "explanation": "결함이 후속 설계와 코드로 전파된 뒤 발견되면 관련 산출물을 함께 수정해야 해 비용과 일정 영향이 커질 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-12",
    "set": "prediction-8",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.5",
    "level": "K2",
    "text": "시프트 레프트를 오해한 사례는?",
    "options": [
      "모든 테스트를 앞당기기만 하면 된다고 생각해 운영 환경에서만 알 수 있는 품질 정보까지 무시한다.",
      "요구사항 예제를 조기에 리뷰한다.",
      "코딩 중 정적 분석을 수행한다.",
      "구현 전에 인수 테스트를 정의한다."
    ],
    "answer": [
      0
    ],
    "explanation": "시프트 레프트는 가능한 테스트를 조기에 수행하는 것이지 운영 관찰이나 실제 환경 테스트를 없애는 것이 아니다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-13",
    "set": "prediction-8",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.1",
    "level": "K2",
    "text": "단일 클래스의 내부 계산과 예외 처리를 격리해 확인하는 테스트 레벨은?",
    "options": [
      "컴포넌트 통합 테스팅",
      "컴포넌트 테스팅",
      "시스템 통합 테스팅",
      "인수 테스팅"
    ],
    "answer": [
      1
    ],
    "explanation": "컴포넌트 테스팅은 개별 컴포넌트를 격리해 기능과 비기능 특성을 확인한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-14",
    "set": "prediction-8",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.3.1",
    "level": "K2",
    "text": "시스템을 폐기하면서 장기 보관 데이터를 새 저장소로 이전한다. 필요한 유지보수 테스트는?",
    "options": [
      "기존 데이터를 모두 임의 삭제한다.",
      "폐기이므로 어떤 테스트도 하지 않는다.",
      "새 기능의 단위 테스트만 작성한다.",
      "마이그레이션된 데이터의 완전성·정확성과 보존 규칙을 확인한다."
    ],
    "answer": [
      3
    ],
    "explanation": "시스템 폐기와 데이터 이전도 유지보수 테스트 트리거이며 변환·보존된 데이터의 무결성을 확인해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-15",
    "set": "prediction-8",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.1",
    "level": "K1",
    "text": "사람이 수행하는 리뷰 대상으로 적절한 것은?",
    "options": [
      "테스트 계획과 사용자 매뉴얼",
      "실행 중 전력 소비량만",
      "실제 네트워크 지연 시간만",
      "운영 서버의 물리적 온도만"
    ],
    "answer": [
      0
    ],
    "explanation": "요구사항, 설계, 코드, 테스트 계획·케이스와 사용자 문서 같은 산출물은 리뷰로 검사할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-16",
    "set": "prediction-8",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.5",
    "level": "K1",
    "text": "리뷰 성공을 저해하는 행동은?",
    "options": [
      "작은 산출물 단위로 검토한다.",
      "명확한 목적을 공유한다.",
      "발견한 결함 수로 참가자의 성과를 평가한다.",
      "참가자에게 준비 시간을 준다."
    ],
    "answer": [
      2
    ],
    "explanation": "리뷰를 개인 평가 수단으로 사용하면 안전한 분위기와 적극적 참여를 해친다. 참가자 평가는 리뷰 목적이 되어서는 안 된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-17",
    "set": "prediction-8",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.3",
    "level": "K2",
    "text": "정적 테스팅과 동적 테스팅이 상호 보완적인 이유는?",
    "options": [
      "동적 테스팅은 문서 모순을 자동 수정하기 때문이다.",
      "두 방식은 항상 같은 결함만 찾기 때문이다.",
      "정적 테스팅은 실행 중 장애만 발견하기 때문이다.",
      "서로 다른 유형의 결함을 발견하며 한 방식만으로 모든 품질 문제를 다루기 어렵기 때문이다."
    ],
    "answer": [
      3
    ],
    "explanation": "정적 테스팅은 실행 전 산출물 결함에 강하고 동적 테스팅은 실행 중 동작과 장애를 관찰하므로 함께 사용하면 범위가 넓어진다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-18",
    "set": "prediction-8",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.2",
    "level": "K2",
    "text": "개별 리뷰 활동에서 리뷰어가 수행하는 일은?",
    "options": [
      "발견 사항을 논의하기 전에 모든 결함을 직접 수정한다.",
      "자신에게 배정된 산출물을 검토해 이상 항목, 질문과 권고를 기록한다.",
      "리뷰 예산을 최종 승인한다.",
      "운영 배포를 시작한다."
    ],
    "answer": [
      1
    ],
    "explanation": "개별 리뷰에서는 각 리뷰어가 산출물을 평가하고 이상, 질문과 개선 의견을 기록한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-19",
    "set": "prediction-8",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.1.1",
    "level": "K2",
    "text": "코드의 제어 흐름을 분석해 실행되지 않은 분기를 찾았다. 사용한 기법 범주는?",
    "options": [
      "경험 기반 테스트 기법",
      "블랙박스 테스트 기법",
      "화이트박스 테스트 기법",
      "인수 조건 작성 기법"
    ],
    "answer": [
      2
    ],
    "explanation": "분기 테스팅은 내부 코드 구조와 제어 흐름을 기반으로 하는 화이트박스 기법이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-20",
    "set": "prediction-8",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.1",
    "level": "K3",
    "text": "배송 무게는 0kg 초과 5kg 이하 소형, 5kg 초과 20kg 이하 중형, 20kg 초과 대형이며 0kg 이하는 무효이다. 네 분할 대표값은?",
    "options": [
      "{0, 3, 10, 25}",
      "{1, 5, 20, 21}",
      "{0, 5, 20, 25}",
      "{-1, 0, 5, 20}"
    ],
    "answer": [
      0
    ],
    "explanation": "분할은 0 이하 무효, 0 초과~5, 5 초과~20, 20 초과이다. 0,3,10,25가 각각을 대표한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-21",
    "set": "prediction-8",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.2",
    "level": "K3",
    "text": "사용 가능한 포인트가 1점 이상 999점 이하이다. 3값 경계값 분석에 필요한 값은?",
    "options": [
      "{-1,0,1,999,1000,1001}",
      "{0,1,999,1000}",
      "{1,2,998,999}",
      "{0,1,2,998,999,1000}"
    ],
    "answer": [
      3
    ],
    "explanation": "하한 1의 양옆은 0·2, 상한 999의 양옆은 998·1000이므로 여섯 값이 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-22",
    "set": "prediction-8",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.3",
    "level": "K3",
    "text": "환불 규칙: 구매 후 7일 이내이고 미사용이면 전액 환불, 7일 이내지만 사용했으면 환불 불가, 7일 초과면 사용 여부와 무관하게 환불 불가이다. 잘못된 예상 결과는?",
    "options": [
      "5일, 미사용 → 전액 환불",
      "10일, 사용 → 전액 환불",
      "10일, 미사용 → 환불 불가",
      "5일, 사용 → 환불 불가"
    ],
    "answer": [
      1
    ],
    "explanation": "7일을 초과하면 사용 여부와 관계없이 환불 불가이므로 10일·사용 상태의 전액 환불은 규칙과 맞지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-23",
    "set": "prediction-8",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.4",
    "level": "K3",
    "text": "티켓 상태는 열림, 처리 중, 해결됨이다. 열림에서 담당자 배정 시 처리 중, 처리 중에서 해결 시 해결됨, 해결됨에서 재개 시 열림이다. 정의된 전이는?",
    "options": [
      "해결됨—재개→열림",
      "열림—해결→해결됨",
      "처리 중—재개→열림",
      "해결됨—담당자 배정→처리 중"
    ],
    "answer": [
      0
    ],
    "explanation": "해결됨 상태에서 재개 이벤트로 열림 상태로 가는 전이만 주어진 정의에 포함된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-24",
    "set": "prediction-8",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.3",
    "level": "K3",
    "text": "스토리: “사용자는 발급된 쿠폰을 한 주문에 적용할 수 있다.” 조건: 쿠폰이 유효하고 최소 주문액을 충족하면 할인을 적용하고 쿠폰을 사용 처리한다. 적절한 테스트는?",
    "options": [
      "주문 없이 배송 주소만 바꾼다.",
      "만료 쿠폰으로 로그인 화면을 확인한다.",
      "유효 쿠폰과 충족한 주문액으로 적용 후 할인 금액과 사용 상태를 확인한다.",
      "최소 주문액을 무시하고 쿠폰을 삭제한다."
    ],
    "answer": [
      2
    ],
    "explanation": "ATDD 테스트는 유효성, 최소 금액, 할인과 사용 처리라는 인수 조건을 구체적으로 검증해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-25",
    "set": "prediction-8",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.1",
    "level": "K2",
    "text": "구문 커버리지를 높이기 위한 직접적인 조치는?",
    "options": [
      "요구사항 문장 수를 줄인다.",
      "아직 실행되지 않은 실행 가능 구문을 수행하는 테스트를 추가한다.",
      "결함 심각도를 변경한다.",
      "분기 수를 기록하지 않는다."
    ],
    "answer": [
      1
    ],
    "explanation": "구문 커버리지는 실행된 구문 비율이므로 미실행 구문을 실행하는 테스트를 추가하면 직접 높일 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-26",
    "set": "prediction-8",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.2",
    "level": "K2",
    "text": "결정 결과가 총 8개이고 테스트가 6개 결과를 실행했다. 분기 커버리지는?",
    "options": [
      "25%",
      "60%",
      "80%",
      "75%"
    ],
    "answer": [
      3
    ],
    "explanation": "6÷8×100=75%이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-27",
    "set": "prediction-8",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.1",
    "level": "K2",
    "text": "파일 이름 처리 기능에서 오류 추정으로 우선 시험할 값은?",
    "options": [
      "화면 배경색 값만",
      "정상 이름 하나만",
      "빈 이름, 예약어, 매우 긴 이름과 금지 문자가 포함된 이름",
      "코드 줄 수만"
    ],
    "answer": [
      2
    ],
    "explanation": "과거 경험상 실패하기 쉬운 빈 값, 극단 길이, 예약어와 특수문자는 오류 추정의 좋은 후보다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-28",
    "set": "prediction-8",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.2",
    "level": "K2",
    "text": "탐색적 테스팅이 특히 유용한 상황은?",
    "options": [
      "명세가 불완전하고 짧은 시간에 제품을 학습하며 주요 리스크를 조사해야 할 때",
      "모든 절차가 법적으로 고정되어 어떤 판단도 허용되지 않을 때만",
      "테스트 대상에 접근할 수 없을 때",
      "결과 기록이 금지될 때"
    ],
    "answer": [
      0
    ],
    "explanation": "탐색적 테스팅은 학습과 설계·실행을 결합해 정보가 부족하거나 시간 제약이 있는 상황에서 빠르게 피드백을 얻는 데 유용하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-29",
    "set": "prediction-8",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.1",
    "level": "K2",
    "text": "사용자 스토리의 Confirmation을 가장 잘 설명한 것은?",
    "options": [
      "배포 후 광고 문구",
      "카드에 적힌 짧은 제목만",
      "개발자의 개인 구현 메모만",
      "스토리가 완료되었음을 확인할 인수 조건과 구체적 예"
    ],
    "answer": [
      3
    ],
    "explanation": "3C의 Confirmation은 스토리가 의도대로 구현되었는지 확인할 인수 조건과 예를 의미한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-30",
    "set": "prediction-8",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.6",
    "level": "K1",
    "text": "테스트 피라미드에서 상위 UI 테스트를 하위 컴포넌트 테스트보다 적게 두는 일반적인 이유는?",
    "options": [
      "UI 테스트는 결함을 전혀 찾지 못하기 때문이다.",
      "상위 테스트는 보통 더 느리고 취약하며 원인 격리가 어렵기 때문이다.",
      "컴포넌트 테스트는 항상 수동으로만 수행하기 때문이다.",
      "모든 테스트 수를 동일하게 맞춰야 하기 때문이다."
    ],
    "answer": [
      1
    ],
    "explanation": "상위 종단간 테스트는 가치가 있지만 실행 비용과 유지보수 부담이 커서 작고 빠른 하위 테스트보다 적게 두는 경향이 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-31",
    "set": "prediction-8",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.3",
    "level": "K2",
    "text": "종료 조건을 달성하지 못했지만 출시일이 고정되어 있다. 가장 적절한 대응은?",
    "options": [
      "모든 미실행 테스트를 통과로 바꾼다.",
      "결과를 숨기고 조건을 달성했다고 표시한다.",
      "미충족 조건과 잔여 리스크를 보고하고 권한 있는 이해관계자의 결정을 받는다.",
      "결함 보고서를 삭제한다."
    ],
    "answer": [
      2
    ],
    "explanation": "종료 조건 미충족 시 편차와 잔여 리스크를 투명하게 보고하고 출시·범위·추가 조치를 결정할 권한자와 합의해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-32",
    "set": "prediction-8",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.4",
    "level": "K3",
    "text": "비율 기반 추정에서 개발 노력 900시간의 25%를 테스트 노력으로 잡는다. 예상 테스트 노력은?",
    "options": [
      "225시간",
      "250시간",
      "675시간",
      "1125시간"
    ],
    "answer": [
      0
    ],
    "explanation": "900×0.25=225시간이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-33",
    "set": "prediction-8",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.5",
    "level": "K3",
    "text": "각 단계에서 실행 가능한 테스트 중 우선순위 숫자가 작은 것을 먼저 고른다. A(1, 독립), B(3, 독립), C(1, B 이후)일 때 순서는?",
    "options": [
      "C → A → B",
      "A → B → C",
      "B → C → A",
      "B → A → C"
    ],
    "answer": [
      1
    ],
    "explanation": "처음 실행 가능한 A와 B 중 A가 우선이다. C는 B 이후 가능하므로 그 다음 B, 마지막 C를 실행한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-34",
    "set": "prediction-8",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.5.1",
    "level": "K3",
    "text": "결함 보고서에 첨부할 가장 유용한 실제 결과는?",
    "options": [
      "“HTTP 500이 표시됨”",
      "“저장 기능 실패”",
      "“저장 클릭 후 오류가 발생함”",
      "“저장 클릭 후 HTTP 500과 오류 ID E-204가 표시되고 데이터가 저장되지 않음”"
    ],
    "answer": [
      3
    ],
    "explanation": "실제 결과는 관찰 가능한 메시지, 상태 변화와 데이터 영향을 구체적으로 기록해 기대 결과와 비교 및 재현을 돕는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-35",
    "set": "prediction-8",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.2",
    "level": "K2",
    "text": "외부 결제 업체의 테스트 서버가 자주 중단되어 통합 일정이 지연될 가능성이 있다. 분류는?",
    "options": [
      "이미 확인된 제품 결함",
      "제품 리스크만",
      "프로젝트 리스크",
      "테스트 케이스"
    ],
    "answer": [
      2
    ],
    "explanation": "외부 공급업체와 테스트 환경 문제로 일정이 위협받는 것은 프로젝트 리스크다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-36",
    "set": "prediction-8",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.4",
    "level": "K2",
    "text": "고위험 결제 기능의 제품 리스크를 완화하는 조치로 가장 적절한 것은?",
    "options": [
      "독립적인 추가 리뷰와 심화 테스트를 수행하고 결함 추이를 모니터링한다.",
      "결제 테스트를 범위에서 제외한다.",
      "리스크를 기록하지 않는다.",
      "정상 경로 하나만 실행하고 종료한다."
    ],
    "answer": [
      0
    ],
    "explanation": "추가 리뷰, 더 철저한 테스트, 독립성 강화와 지속 모니터링은 제품 리스크를 낮추는 대응이 될 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-37",
    "set": "prediction-8",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.2",
    "level": "K2",
    "text": "테스트 완료 보고서의 목적과 내용으로 적절한 것을 두 개 고르시오.",
    "options": [
      "독자와 무관하게 소스 코드 전체만 제공한다.",
      "잔여 결함과 제품 리스크를 의사결정자에게 알린다.",
      "편차와 교훈을 의도적으로 제외한다.",
      "테스트 결과와 목표 달성 정도를 요약한다.",
      "모든 테스트를 시작하기 전에 최종 결과를 확정한다."
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "완료 보고서는 수행 결과, 목표·조건 달성, 편차, 품질 평가, 잔여 결함·리스크와 교훈을 이해관계자에게 전달한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-38",
    "set": "prediction-8",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.4.1",
    "level": "K2",
    "text": "기준선에 포함된 테스트 스크립트가 승인 없이 변경되었다. 형상 관리 관점의 문제는?",
    "options": [
      "테스트 마모가 자동 해결된다.",
      "통제되지 않은 변경으로 실행 결과의 재현성과 무결성이 훼손될 수 있다.",
      "제품 리스크가 모두 사라진다.",
      "결함 보고서의 심각도가 자동으로 조정된다."
    ],
    "answer": [
      1
    ],
    "explanation": "형상 항목의 승인되지 않은 변경은 어떤 버전이 실행되었는지 불명확하게 해 결과 재현과 추적성을 해친다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-39",
    "set": "prediction-8",
    "chapter": "6장 테스트 도구",
    "lo": "6.1.1",
    "level": "K2",
    "text": "테스트 실행을 자동으로 구동하고 실제 결과를 기대 결과와 비교하는 도구 유형은?",
    "options": [
      "리뷰 지원 도구",
      "정적 분석 도구",
      "테스트 실행 도구",
      "형상 관리 도구만"
    ],
    "answer": [
      2
    ],
    "explanation": "테스트 실행 도구는 스크립트 실행, 입력 제공, 실제·기대 결과 비교와 로그 수집을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P8-40",
    "set": "prediction-8",
    "chapter": "6장 테스트 도구",
    "lo": "6.2.1",
    "level": "K1",
    "text": "자동화에 대한 비현실적인 기대의 예는?",
    "options": [
      "도구를 구입하면 테스트 설계와 유지보수 없이 모든 결함을 자동 발견할 것이라고 믿는다.",
      "반복 테스트의 실행 속도가 빨라질 수 있다고 기대한다.",
      "스크립트 유지보수 예산을 계획한다.",
      "도구 교육 시간을 확보한다."
    ],
    "answer": [
      0
    ],
    "explanation": "도구는 적절한 프로세스, 테스트 설계, 기술과 유지보수가 필요하며 모든 결함 발견을 보장하지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-01",
    "set": "prediction-10",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.2",
    "level": "K1",
    "text": "QA가 주로 초점을 두는 대상은?",
    "options": [
      "특정 결함의 소스 코드 수정",
      "한 테스트 실행의 실제 결과만",
      "품질 달성을 지원하는 조직의 프로세스",
      "운영 장애의 재현 절차만"
    ],
    "answer": [
      2
    ],
    "explanation": "품질 보증은 좋은 프로세스의 정의·구현·평가와 개선에 초점을 두는 프로세스 지향 활동이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-02",
    "set": "prediction-10",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.1",
    "level": "K1",
    "text": "잔여 리스크 정보를 경영진에게 제공하는 테스트 목적은?",
    "options": [
      "의사결정 지원",
      "무결함 증명",
      "디버깅 완료",
      "모든 입력 전수 검사"
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 결과와 잔여 리스크 정보는 출시, 추가 테스트와 리스크 수용 같은 이해관계자의 의사결정을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-03",
    "set": "prediction-10",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.2",
    "level": "K2",
    "text": "테스터가 검색 장애를 재현했고 개발자가 로그를 분석해 잘못된 캐시 키를 수정했다. 개발자가 수행한 핵심 활동은?",
    "options": [
      "인수 조건 작성",
      "테스트 분석",
      "품질 보증 감사",
      "디버깅"
    ],
    "answer": [
      3
    ],
    "explanation": "장애 원인을 찾아 결함을 수정하는 활동은 디버깅이다. 장애 재현과 결과 제공은 테스팅에 해당한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-04",
    "set": "prediction-10",
    "chapter": "1장 테스트 기초",
    "lo": "1.3.1",
    "level": "K2",
    "text": "테스트에서 결함을 발견하지 못했다는 사실만으로 결함이 없다고 결론 내릴 수 없는 이유는?",
    "options": [
      "모든 결함은 운영에서만 발생하기 때문이다.",
      "테스팅은 결함의 존재를 보일 수 있지만 부재를 증명할 수 없기 때문이다.",
      "테스트 결과는 품질과 무관하기 때문이다.",
      "결함 집중 원리가 무결함을 보장하기 때문이다."
    ],
    "answer": [
      1
    ],
    "explanation": "테스팅은 결함의 존재를 드러낼 수 있지만 충분한 테스트가 결함의 부재를 증명하지는 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-05",
    "set": "prediction-10",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.2",
    "level": "K2",
    "text": "같은 전자서명 기능이라도 공공기관 서비스에서 더 엄격한 문서화와 독립성을 요구할 수 있는 이유는?",
    "options": [
      "규제, 감사 추적과 업무 중요도라는 프로젝트 맥락이 다르기 때문이다.",
      "기능 테스트를 사용할 수 없기 때문이다.",
      "공공 서비스에는 사용자가 없기 때문이다.",
      "테스트 프로세스는 항상 무작위로 결정하기 때문이다."
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 접근은 규제, 리스크, 도메인, 이해관계자와 감사 요구 같은 맥락의 영향을 받는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-06",
    "set": "prediction-10",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.4",
    "level": "K2",
    "text": "결함 보고서에서 실패한 테스트 케이스와 원래 요구사항으로 연결되는 추적성이 있을 때 얻는 이점은?",
    "options": [
      "모든 회귀 테스트가 불필요해진다.",
      "결함이 자동 수정된다.",
      "영향받은 요구사항과 커버리지 상태를 빠르게 파악할 수 있다.",
      "제품 리스크가 항상 0이 된다."
    ],
    "answer": [
      2
    ],
    "explanation": "결함에서 테스트와 요구사항으로의 추적은 영향 분석, 커버리지 평가와 수정 후 재시험 범위 결정에 도움을 준다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-07",
    "set": "prediction-10",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.1",
    "level": "K2",
    "text": "분산 팀에서 결함과 리스크를 효과적으로 다루기 위한 테스터 역량으로 적절한 것을 두 개 고르시오.",
    "options": [
      "다양한 역할과 협업해 공통 이해를 만드는 능력",
      "원격 팀의 피드백을 차단하는 습관",
      "모호한 부분을 질문하지 않는 태도",
      "복잡한 정보를 명확하고 건설적으로 전달하는 능력",
      "결함을 개인의 잘못으로 비난하는 방식"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "의사소통과 팀워크는 분산 환경에서 결함·리스크 정보를 정확하게 공유하고 해결을 촉진하는 핵심 역량이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-08",
    "set": "prediction-10",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.3",
    "level": "K2",
    "text": "독립 테스트팀이 개발팀과 너무 늦게만 소통할 때 발생할 수 있는 단점은?",
    "options": [
      "확증 편향이 반드시 완전히 사라진다.",
      "피드백 지연과 우리 대 그들 관계로 협업이 약해질 수 있다.",
      "개발팀이 품질 책임을 더 잘 공유한다.",
      "테스트 대상 지식이 자동으로 늘어난다."
    ],
    "answer": [
      1
    ],
    "explanation": "독립성은 다른 관점을 주지만 고립, 책임 전가와 의사소통 지연이라는 단점을 만들 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-09",
    "set": "prediction-10",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.3",
    "level": "K1",
    "text": "행위 주도 개발의 약어는?",
    "options": [
      "BDD",
      "TDD",
      "ATDD",
      "BVA"
    ],
    "answer": [
      0
    ],
    "explanation": "BDD는 Behavior-Driven Development의 약어이며 구체적인 행위 예를 통해 개발을 안내하는 테스트 우선 접근법이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-10",
    "set": "prediction-10",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.2",
    "level": "K1",
    "text": "팀이 순차 모델과 반복적 모델 중 어느 것을 선택하더라도 유지할 조기 테스팅 관행은?",
    "options": [
      "모든 테스트 레벨을 하나로 합친다.",
      "동적 테스트만 마지막 단계에서 수행한다.",
      "요구사항 리뷰를 생략한다.",
      "관련 작업 산출물의 초안이 나오면 리뷰와 테스트 분석을 시작한다."
    ],
    "answer": [
      3
    ],
    "explanation": "산출물 초안이 준비되는 즉시 정적 테스팅과 테스트 분석·설계를 시작하면 결함을 조기에 발견할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-11",
    "set": "prediction-10",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.4",
    "level": "K2",
    "text": "DevOps 환경에서 운영 모니터링 정보가 테스팅에 주는 가치는?",
    "options": [
      "운영 데이터가 있으면 개발 전 테스트가 금지된다.",
      "실제 사용 패턴과 장애 신호를 알려 테스트 조건과 리스크 분석을 개선할 수 있다.",
      "모든 장애를 자동 수정한다.",
      "비기능 테스트를 제거한다."
    ],
    "answer": [
      1
    ],
    "explanation": "운영 모니터링은 실제 환경의 행동, 사용량과 장애에 대한 피드백을 제공해 테스트 개선과 빠른 대응을 돕는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-12",
    "set": "prediction-10",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.6",
    "level": "K2",
    "text": "회고에서 개선 조치의 소유자와 완료 시점을 정하는 이유는?",
    "options": [
      "다음 반복에서 조치를 잊기 위해서이다.",
      "회고 내용을 개인 성과 처벌에만 사용하기 위해서이다.",
      "조치가 실제 실행되고 후속 추적될 가능성을 높이기 위해서이다.",
      "제품 리스크를 숨기기 위해서이다."
    ],
    "answer": [
      2
    ],
    "explanation": "구체적인 소유자와 기한은 회고 결과를 실행 가능한 개선으로 연결하고 후속 확인을 가능하게 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-13",
    "set": "prediction-10",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.2",
    "level": "K2",
    "text": "권한이 없는 사용자가 관리자 기능에 접근하지 못하는지 평가한다. 가장 관련 있는 테스트 유형은?",
    "options": [
      "확인 테스팅만",
      "기능 정확성만",
      "컴포넌트 통합 테스팅만",
      "보안 비기능 테스팅"
    ],
    "answer": [
      3
    ],
    "explanation": "접근 제어와 기밀성은 보안 품질 특성에 대한 비기능 테스팅의 주요 대상이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-14",
    "set": "prediction-10",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.3.1",
    "level": "K2",
    "text": "운영체제 버전 업그레이드 후 유지보수 테스트 범위를 정할 때 가장 먼저 필요한 것은?",
    "options": [
      "변경 영향 분석과 관련 제품 리스크 평가",
      "모든 기존 테스트 삭제",
      "새 기능 광고 계획",
      "개발자 개인 선호 조사"
    ],
    "answer": [
      0
    ],
    "explanation": "환경 변경의 영향 분석은 영향을 받는 기능, 인터페이스와 비기능 특성을 식별해 유지보수 테스트 범위를 정하는 근거가 된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-15",
    "set": "prediction-10",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.3",
    "level": "K1",
    "text": "리뷰 회의에서 결정과 새로 발견된 이상 항목을 기록하는 역할은?",
    "options": [
      "관리자",
      "작성자",
      "기록자",
      "리뷰 리더"
    ],
    "answer": [
      2
    ],
    "explanation": "기록자는 리뷰어의 이상 항목을 취합하고 회의의 결정과 새 발견 사항을 기록한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-16",
    "set": "prediction-10",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.1",
    "level": "K1",
    "text": "인수 조건 초안에 고객의 조기 피드백을 받는 이점은?",
    "options": [
      "분기 커버리지가 자동으로 100%가 된다.",
      "잘못 이해한 비즈니스 규칙을 구현 전에 바로잡을 수 있다.",
      "후속 검증이 필요 없어진다.",
      "테스트 데이터가 자동 생성된다."
    ],
    "answer": [
      1
    ],
    "explanation": "조기 피드백은 기대와 규칙의 오해를 구현 전에 발견해 재작업과 부적합한 제품 위험을 줄인다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-17",
    "set": "prediction-10",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.2",
    "level": "K2",
    "text": "소스 코드 정적 분석에서 도달 불가능한 코드가 발견되었다. 정적 테스팅의 가치로 적절한 것은?",
    "options": [
      "실행 테스트로 해당 경로를 관찰하기 어려워도 구조적 결함을 직접 찾을 수 있다.",
      "실제 성능을 모든 부하에서 측정한다.",
      "사용자 만족도를 자동 결정한다.",
      "동적 테스트의 모든 목적을 대체한다."
    ],
    "answer": [
      0
    ],
    "explanation": "정적 분석은 실행하지 않고 제어·데이터 흐름을 분석해 도달 불가능 코드 같은 결함을 직접 식별할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-18",
    "set": "prediction-10",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.4",
    "level": "K2",
    "text": "작성자가 산출물을 참가자에게 단계별로 설명하며 학습·합의와 결함 발견을 함께 추구한다. 리뷰 유형은?",
    "options": [
      "비공식 대화만",
      "인스펙션",
      "기술 리뷰만",
      "워크스루"
    ],
    "answer": [
      3
    ],
    "explanation": "워크스루는 일반적으로 작성자가 주도해 산출물을 설명하며 참가자 교육, 합의와 이상 발견을 목적으로 할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-19",
    "set": "prediction-10",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.1.1",
    "level": "K2",
    "text": "명세의 입력·출력 관계만 사용해 테스트를 설계하고 내부 코드는 보지 않았다. 기법 범주는?",
    "options": [
      "화이트박스 테스트 기법",
      "블랙박스 테스트 기법",
      "경험 기반 기법만",
      "정적 분석 기법"
    ],
    "answer": [
      1
    ],
    "explanation": "블랙박스 기법은 내부 구조를 참조하지 않고 명세와 외부 동작을 기반으로 테스트를 도출한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-20",
    "set": "prediction-10",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.1",
    "level": "K3",
    "text": "배터리 지표가 음수이면 무효, 0이면 종료, 1~20이면 낮음, 21~80이면 보통, 81 이상이면 높음이다. 다섯 분할의 대표값은?",
    "options": [
      "{-1,0,20,80,101}",
      "{0,1,20,21,80}",
      "{-1,0,10,50,90}",
      "{0,10,50,90,100}"
    ],
    "answer": [
      2
    ],
    "explanation": "분할은 음수 무효, 0, 1~20, 21~80, 81 이상이다. -1,0,10,50,90이 각각을 대표한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-21",
    "set": "prediction-10",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.2",
    "level": "K3",
    "text": "정수 허용 범위가 5 이상 15 이하이다. 3값 경계값 분석에 필요한 값은?",
    "options": [
      "{4,5,6,14,15,16}",
      "{4,5,15,16}",
      "{5,6,14,15}",
      "{3,4,5,15,16,17}"
    ],
    "answer": [
      0
    ],
    "explanation": "각 경계와 양쪽 인접값을 선택하므로 하한 4·5·6과 상한 14·15·16이 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-22",
    "set": "prediction-10",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.3",
    "level": "K3",
    "text": "승인 규칙: 금액이 100만원 이하이면 자동 승인, 100만원 초과이면서 관리자가 확인하면 승인, 100만원 초과이고 확인이 없으면 보류한다. 잘못된 결과는?",
    "options": [
      "80만원, 확인 없음 → 승인",
      "150만원, 확인 있음 → 승인",
      "150만원, 확인 없음 → 보류",
      "80만원, 확인 있음 → 보류"
    ],
    "answer": [
      3
    ],
    "explanation": "100만원 이하 금액은 관리자 확인 여부와 관계없이 자동 승인되므로 80만원·확인 있음의 보류 결과는 잘못되었다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-23",
    "set": "prediction-10",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.4",
    "level": "K3",
    "text": "비밀번호 재설정 상태는 요청 전, 코드 발급, 완료이다. 요청 전에서 요청하면 코드 발급, 코드 발급에서 유효 코드 입력 시 완료, 코드 발급에서 만료 시 요청 전으로 간다. 유효하지 않은 전이는?",
    "options": [
      "코드 발급—만료→요청 전",
      "요청 전—요청→코드 발급",
      "요청 전—유효 코드 입력→완료",
      "코드 발급—유효 코드 입력→완료"
    ],
    "answer": [
      2
    ],
    "explanation": "요청 전 상태에서는 아직 코드가 발급되지 않았으므로 유효 코드 입력으로 완료되는 전이는 정의되지 않았다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-24",
    "set": "prediction-10",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.3",
    "level": "K3",
    "text": "스토리: “고객은 시작 24시간 전까지 예약을 무료 취소할 수 있다.” 조건: 남은 시간이 24시간 이상이면 취소하고 전액 환불한다. 적절한 테스트는?",
    "options": [
      "시작 2시간 전 예약의 좌석 색상만 확인한다.",
      "시작 30시간 전 예약을 취소해 취소 상태와 전액 환불을 확인한다.",
      "예약 없이 로그인한다.",
      "취소 후 새 상품을 구매한다."
    ],
    "answer": [
      1
    ],
    "explanation": "인수 조건에 맞는 시간 경계, 취소 행위와 기대 결과인 상태 변경과 전액 환불을 검증해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-25",
    "set": "prediction-10",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.1",
    "level": "K2",
    "text": "실행 가능한 구문이 120개이고 96개를 실행했다. 구문 커버리지는?",
    "options": [
      "24%",
      "96%",
      "75%",
      "80%"
    ],
    "answer": [
      3
    ],
    "explanation": "96÷120×100=80%이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-26",
    "set": "prediction-10",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.2",
    "level": "K2",
    "text": "100% 분기 커버리지를 달성했어도 남을 수 있는 테스트 공백은?",
    "options": [
      "특정 데이터 조합과 여러 분기를 거치는 일부 경로가 검증되지 않았을 수 있다.",
      "실행 가능한 구문이 하나도 실행되지 않았을 수 있다.",
      "어떤 결정 결과도 실행되지 않았을 수 있다.",
      "분기 수를 셀 수 없다."
    ],
    "answer": [
      0
    ],
    "explanation": "분기 커버리지는 각 결정 결과 실행을 보장하지만 모든 데이터 조합이나 가능한 경로를 보장하지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-27",
    "set": "prediction-10",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.3",
    "level": "K2",
    "text": "체크리스트를 주기적으로 갱신해야 하는 이유는?",
    "options": [
      "체크리스트는 매 실행 후 반드시 전부 삭제해야 하기 때문이다.",
      "새 결함 패턴, 기술과 위험 변화가 기존 항목에 반영되지 않을 수 있기 때문이다.",
      "항목이 구체적일수록 나쁘기 때문이다.",
      "다른 테스트 기법을 금지하기 위해서이다."
    ],
    "answer": [
      1
    ],
    "explanation": "체크리스트는 과거 결함과 경험, 새로운 위험을 반영해 관련성과 결함 발견력을 유지해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-28",
    "set": "prediction-10",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.2",
    "level": "K2",
    "text": "탐색적 세션 중 예상하지 못한 데이터 동기화 지연을 발견했다. 다음 행동으로 적절한 것은?",
    "options": [
      "기록 없이 제품 설정을 영구 변경한다.",
      "기존 상세 절차에 없으므로 무시한다.",
      "관찰을 기록하고 차터 범위 안에서 관련 조건을 더 조사하며 필요하면 후속 차터를 제안한다.",
      "모든 테스트를 통과로 표시한다."
    ],
    "answer": [
      2
    ],
    "explanation": "탐색적 테스팅은 학습에 따라 다음 테스트를 조정하되 발견과 수행 범위를 기록하고 후속 조사를 관리한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-29",
    "set": "prediction-10",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.2",
    "level": "K2",
    "text": "시나리오 지향 인수 조건을 구성하는 요소는?",
    "options": [
      "사전 상황, 행위와 기대 결과",
      "개발자 이름, 급여와 근속 기간",
      "소스 코드 줄 수만",
      "광고 일정과 판매 목표만"
    ],
    "answer": [
      0
    ],
    "explanation": "Given/When/Then 같은 시나리오 지향 형식은 사전 조건, 사건 또는 행위, 관찰할 기대 결과를 표현한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-30",
    "set": "prediction-10",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.7",
    "level": "K2",
    "text": "개발자가 TDD로 컴포넌트 단위의 자동 테스트를 작성해 구현을 안내한다. 애자일 테스팅 사분면은?",
    "options": [
      "Q4: 제품을 비평하는 기술 대면 테스트",
      "Q2: 팀을 지원하는 비즈니스 대면 테스트",
      "Q3: 제품을 비평하는 비즈니스 대면 테스트",
      "Q1: 팀을 지원하는 기술 대면 테스트"
    ],
    "answer": [
      3
    ],
    "explanation": "Q1은 기술 대면이며 팀을 지원하는 컴포넌트 테스트와 컴포넌트 통합 테스트 등을 포함한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-31",
    "set": "prediction-10",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.1",
    "level": "K2",
    "text": "테스트 계획에서 가정과 제약을 기록하는 주된 이유는?",
    "options": [
      "가정이 항상 사실임을 보증하기 위해서이다.",
      "계획과 추정이 어떤 조건에 의존하는지 투명하게 하고 변화 시 영향을 평가하기 위해서이다.",
      "리스크 보고를 막기 위해서이다.",
      "테스트 범위를 무한대로 만들기 위해서이다."
    ],
    "answer": [
      1
    ],
    "explanation": "가정과 제약은 계획의 근거와 한계를 명확히 해 변경이나 위반이 일정·범위·리스크에 미치는 영향을 관리하게 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-32",
    "set": "prediction-10",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.4",
    "level": "K3",
    "text": "삼점 추정에서 낙관 30시간, 가능성 높음 60시간, 비관 120시간이다. E=(낙관+4×가능성 높음+비관)/6은?",
    "options": [
      "60시간",
      "70시간",
      "65시간",
      "75시간"
    ],
    "answer": [
      2
    ],
    "explanation": "(30+4×60+120)÷6=390÷6=65시간이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-33",
    "set": "prediction-10",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.5",
    "level": "K3",
    "text": "실행 가능한 항목 중 리스크가 높은 순서로 고른다. T1 고위험·독립, T2 저위험·독립, T3 고위험·T2 이후 가능일 때 순서는?",
    "options": [
      "T2 → T1 → T3",
      "T3 → T1 → T2",
      "T2 → T3 → T1",
      "T1 → T2 → T3"
    ],
    "answer": [
      3
    ],
    "explanation": "처음에는 독립적인 고위험 T1을 실행한다. T3을 가능하게 하려면 T2가 필요하므로 이후 T2, T3 순이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-34",
    "set": "prediction-10",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.5.1",
    "level": "K3",
    "text": "결함 보고서에 재현 가능성을 높이는 사전 조건의 예는?",
    "options": [
      "“관리자 계정으로 로그인하고 장바구니에 품절 상품이 있는 상태”",
      "“관리자 계정으로 로그인한 상태”",
      "“장바구니에 상품이 있는 상태”",
      "“Chrome 최신 버전을 실행한 상태”"
    ],
    "answer": [
      0
    ],
    "explanation": "사전 조건은 결함 발생 전 시스템·데이터·권한 상태를 구체적으로 기술해 같은 시작 상태를 만들 수 있게 해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-35",
    "set": "prediction-10",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.1",
    "level": "K1",
    "text": "가능성 2, 영향 4인 리스크와 가능성 4, 영향 3인 리스크를 곱셈으로 비교하면 우선순위가 높은 것은?",
    "options": [
      "두 리스크가 동일",
      "가능성 2·영향 4인 리스크",
      "가능성 4·영향 3인 리스크",
      "정보가 전혀 없어 계산 불가"
    ],
    "answer": [
      2
    ],
    "explanation": "첫 리스크 수준은 8, 두 번째는 12이므로 두 번째가 더 높다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-36",
    "set": "prediction-10",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.4",
    "level": "K2",
    "text": "분석 결과 리스크를 수용하기로 결정했을 때 적절한 후속 행동은?",
    "options": [
      "리스크 기록을 삭제한다.",
      "근거와 책임자를 기록하고 리스크 상태와 발생 신호를 계속 모니터링한다.",
      "이해관계자에게 숨긴다.",
      "발생해도 대응하지 않기로 자동 결정한다."
    ],
    "answer": [
      1
    ],
    "explanation": "리스크 수용은 무시가 아니다. 의사결정 근거와 책임을 기록하고 조건을 모니터링하며 필요 시 비상 대응을 준비한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-37",
    "set": "prediction-10",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.3",
    "level": "K2",
    "text": "경영진과 개발팀에 같은 테스트 상황을 보고해야 한다. 독자별 소통 원칙으로 옳은 것을 두 개 고르시오.",
    "options": [
      "확실하지 않은 수치를 사실처럼 보고한다.",
      "모든 독자에게 같은 원시 로그만 보낸다.",
      "대상 독자의 의사결정에 맞는 세부 수준과 형식을 선택한다.",
      "진행 지연은 완료 후에만 알린다.",
      "좋지 않은 소식도 리스크와 영향, 필요한 조치를 명확히 전달한다."
    ],
    "answer": [
      2,
      4
    ],
    "explanation": "상태 소통은 독자에 맞게 정확하고 시기적절해야 하며 문제, 영향, 불확실성과 요청 조치를 투명하게 전달해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-38",
    "set": "prediction-10",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.4.1",
    "level": "K2",
    "text": "동일한 테스트가 어제는 실패하고 오늘은 통과했다. 형상 관리 정보가 원인 분석을 돕는 방식은?",
    "options": [
      "두 실행의 빌드·환경·데이터·스크립트 버전 차이를 비교할 수 있게 한다.",
      "결함을 자동 수정한다.",
      "모든 결과를 통과로 통일한다.",
      "리스크 평가를 삭제한다."
    ],
    "answer": [
      0
    ],
    "explanation": "실행 시점의 형상 항목 버전을 식별하면 결과 차이가 제품·환경·데이터·테스트웨어 변경에서 왔는지 추적할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-39",
    "set": "prediction-10",
    "chapter": "6장 테스트 도구",
    "lo": "6.1.1",
    "level": "K2",
    "text": "브라우저별 화면 흐름을 반복 실행하고 스크린샷과 결과를 수집하려 한다. 가장 관련 있는 도구는?",
    "options": [
      "리뷰 관리 도구",
      "정적 분석 도구",
      "GUI 테스트 실행 도구",
      "요구사항 모델링 도구만"
    ],
    "answer": [
      2
    ],
    "explanation": "GUI 테스트 실행 도구는 사용자 인터페이스 동작을 자동 수행하고 결과·증거를 수집하는 데 사용할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P10-40",
    "set": "prediction-10",
    "chapter": "6장 테스트 도구",
    "lo": "6.2.1",
    "level": "K1",
    "text": "도구 공급업체에 지나치게 의존할 때의 자동화 리스크는?",
    "options": [
      "반복 실행의 속도가 빨라질 수 있다.",
      "지원 중단이나 가격 변경 시 자동화 자산 유지와 이전이 어려워질 수 있다.",
      "결과 비교가 일관될 수 있다.",
      "야간 실행이 가능할 수 있다."
    ],
    "answer": [
      1
    ],
    "explanation": "특정 공급업체나 독점 형식에 대한 종속은 지원·비용·이전 가능성 변화에 취약하게 만든다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-01",
    "set": "prediction-11",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.1",
    "level": "K1",
    "text": "인수 테스트 결과가 계약 조건을 충족하는지 평가하는 목적은?",
    "options": [
      "운영 중 무장애 증명",
      "모든 잠재 결함 제거 보증",
      "개발 일정 자동 단축",
      "명시된 요구사항 준수 확인"
    ],
    "answer": [
      3
    ],
    "explanation": "테스트 목적에는 계약, 법규와 요구사항 충족 여부를 검증하고 이해관계자에게 정보를 제공하는 것이 포함된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-02",
    "set": "prediction-11",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.2",
    "level": "K1",
    "text": "전체 팀 접근법에서 품질 책임은 누구에게 있는가?",
    "options": [
      "테스터에게만",
      "팀 전체",
      "개발 관리자에게만",
      "외부 감사자에게만"
    ],
    "answer": [
      1
    ],
    "explanation": "전체 팀 접근법에서는 다양한 역할이 각자의 역량으로 기여하며 팀 전체가 품질 책임을 공유한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-03",
    "set": "prediction-11",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.3",
    "level": "K2",
    "text": "부족한 교육 때문에 운영자가 잘못된 설정값을 입력했고, 설정 파일에 잘못된 값이 저장되어 서비스가 시작되지 않았다. 올바른 연결은?",
    "options": [
      "교육 부족은 결함, 잘못된 입력은 장애, 저장된 값은 근본 원인, 시작 실패는 오류",
      "교육 부족은 장애, 잘못된 입력은 근본 원인, 저장된 값은 오류, 시작 실패는 결함",
      "교육 부족은 근본 원인, 잘못된 입력은 오류, 저장된 값은 결함, 시작 실패는 장애",
      "모두 같은 의미의 결함"
    ],
    "answer": [
      2
    ],
    "explanation": "근본 원인은 사람의 오류를 유발할 수 있고, 오류가 산출물의 결함을 만들며, 결함이 실행되면 장애로 나타날 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-04",
    "set": "prediction-11",
    "chapter": "1장 테스트 기초",
    "lo": "1.3.1",
    "level": "K2",
    "text": "입력값 종류가 사실상 무한한 검색 기능에 대해 “모든 조합을 시험하자”는 제안이 비현실적인 이유는?",
    "options": [
      "완전한 테스팅은 사소한 경우를 제외하고 불가능하기 때문이다.",
      "테스트는 결함을 발견할 수 없기 때문이다.",
      "결함은 항상 한 모듈에만 있기 때문이다.",
      "테스트 접근은 상황과 무관하기 때문이다."
    ],
    "answer": [
      0
    ],
    "explanation": "입력·상태·경로 조합이 매우 많아 모든 것을 시험할 수 없으므로 리스크와 우선순위에 기반한 표본 선택이 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-05",
    "set": "prediction-11",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.1",
    "level": "K2",
    "text": "테스트 베이시스를 평가해 테스트할 기능과 품질 특성을 테스트 조건으로 식별하는 활동은?",
    "options": [
      "테스트 구현",
      "테스트 분석",
      "테스트 실행",
      "테스트 완료"
    ],
    "answer": [
      1
    ],
    "explanation": "테스트 분석은 테스트 베이시스와 테스트 대상을 평가해 무엇을 테스트할지 테스트 조건과 우선순위로 정의한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-06",
    "set": "prediction-11",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.2",
    "level": "K2",
    "text": "프로토타입 스타트업과 원자력 제어 시스템의 테스트 문서화 수준이 달라질 수 있는 이유는?",
    "options": [
      "테스트 활동은 언제나 동일해야 하기 때문이다.",
      "원자력 시스템에는 정적 테스팅이 금지되기 때문이다.",
      "스타트업 제품에는 결함이 없기 때문이다.",
      "리스크, 규제, 수명주기와 조직 성숙도 같은 맥락이 다르기 때문이다."
    ],
    "answer": [
      3
    ],
    "explanation": "테스트 프로세스의 형식성·독립성·기법·문서화는 제품 위험, 규제, 개발 방식과 조직 상황에 맞춰 조정된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-07",
    "set": "prediction-11",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.1",
    "level": "K2",
    "text": "접근성 기능을 테스트할 사람에게 유용한 역량을 두 개 고르시오.",
    "options": [
      "시각적 화면만 보고 키보드 사용을 배제하는 습관",
      "접근성 표준과 보조기술에 관한 지식",
      "결함을 숨기는 의사소통 방식",
      "다양한 사용자의 관점을 공감하고 질문하는 능력",
      "사용자 피드백을 무시하는 태도"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "사용자 관점에 대한 공감과 관련 표준·기술 지식은 접근성 장벽을 발견하고 명확히 소통하는 데 중요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-08",
    "set": "prediction-11",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.4",
    "level": "K2",
    "text": "테스트 케이스에서 테스트 조건과 상위 비즈니스 요구사항으로 추적할 수 있을 때 변경 분석에 주는 이점은?",
    "options": [
      "테스트 독립성 단점을 없앤다.",
      "모든 테스트 데이터를 자동 생성한다.",
      "변경된 요구사항 때문에 갱신·재실행할 테스트를 식별할 수 있다.",
      "완전한 경로 커버리지를 증명한다."
    ],
    "answer": [
      2
    ],
    "explanation": "추적성은 요구사항 변경이 관련 테스트웨어에 미치는 영향을 찾아 유지보수와 회귀 범위 결정을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-09",
    "set": "prediction-11",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.3",
    "level": "K1",
    "text": "비즈니스 수준 인수 예를 구현 전에 작성하는 접근법은?",
    "options": [
      "TDD",
      "ATDD",
      "구문 테스팅",
      "유지보수 테스팅"
    ],
    "answer": [
      1
    ],
    "explanation": "ATDD는 비즈니스 담당자, 개발자와 테스터가 구현 전에 인수 예와 테스트를 협업해 정의한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-10",
    "set": "prediction-11",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.2",
    "level": "K1",
    "text": "개발과 테스트의 좋은 대응 관계는?",
    "options": [
      "리뷰와 동적 테스트 중 하나만 사용한다.",
      "테스트는 모든 개발 활동이 끝난 뒤에만 시작한다.",
      "모든 레벨의 테스트 목적을 동일하게 한다.",
      "개발 산출물마다 적절한 테스트 활동과 베이시스를 연결한다."
    ],
    "answer": [
      3
    ],
    "explanation": "모든 수명주기에서 개발 활동과 대응 테스트 활동을 연계하고 산출물 초안부터 조기 검증하는 것이 좋다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-11",
    "set": "prediction-11",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.4",
    "level": "K2",
    "text": "지속적 배포 파이프라인에서 자동 회귀 테스트가 실패했을 때 배포를 중지한다. 이점은?",
    "options": [
      "문제가 있는 변경이 운영으로 전파되기 전에 빠른 피드백을 제공한다.",
      "모든 결함의 근본 원인을 자동 수정한다.",
      "수동 탐색과 리뷰를 금지한다.",
      "제품 리스크 분석을 없앤다."
    ],
    "answer": [
      0
    ],
    "explanation": "자동 품질 게이트는 변경의 회귀를 빠르게 알리고 기준 미충족 빌드의 후속 배포를 막는 데 도움을 준다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-12",
    "set": "prediction-11",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.5",
    "level": "K2",
    "text": "성능 테스트를 시프트 레프트한 사례는?",
    "options": [
      "성능 요구사항을 출시 후 작성한다.",
      "운영 장애가 난 뒤에만 응답 시간을 처음 측정한다.",
      "구현 초기부터 핵심 API의 성능 예산을 정하고 컴포넌트 수준 부하 테스트를 수행한다.",
      "리뷰에서 성능 관련 질문을 금지한다."
    ],
    "answer": [
      2
    ],
    "explanation": "성능 목표와 테스트를 설계·구현 초기로 옮기면 구조적 성능 문제에 더 일찍 피드백할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-13",
    "set": "prediction-11",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.1",
    "level": "K2",
    "text": "실제 업무 담당자가 시스템이 업무 목표와 계약 요구를 충족하는지 평가한다. 테스트 레벨은?",
    "options": [
      "컴포넌트 통합 테스팅",
      "시스템 테스팅만",
      "컴포넌트 테스팅",
      "인수 테스팅"
    ],
    "answer": [
      3
    ],
    "explanation": "인수 테스팅은 비즈니스 요구, 사용자 필요, 계약·규제 조건 충족과 배포 준비 여부에 초점을 둔다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-14",
    "set": "prediction-11",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.3",
    "level": "K2",
    "text": "수정된 데이터 내보내기 결함을 확인하고 수정이 가져오기 기능에 영향을 주지 않았는지도 본다. 올바른 구분은?",
    "options": [
      "둘 다 확인 테스트",
      "내보내기는 확인 테스트, 가져오기는 회귀 테스트",
      "내보내기는 회귀, 가져오기는 확인",
      "둘 다 정적 테스팅"
    ],
    "answer": [
      1
    ],
    "explanation": "원래 결함의 수정 여부는 확인 테스트로, 변경의 부작용은 관련 기능의 회귀 테스트로 평가한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-15",
    "set": "prediction-11",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.1",
    "level": "K1",
    "text": "정적 테스팅 대상으로 알맞은 것은?",
    "options": [
      "실제 고객의 클릭 속도만",
      "실행 중 CPU 사용률만",
      "데이터베이스 설계 모델과 테스트 케이스",
      "운영 네트워크 패킷 지연만"
    ],
    "answer": [
      2
    ],
    "explanation": "모델, 요구사항, 코드와 테스트웨어처럼 읽고 분석할 수 있는 산출물은 정적 테스팅 대상이 될 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-16",
    "set": "prediction-11",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.3",
    "level": "K1",
    "text": "산출물을 검토해 이상 항목을 식별하는 주 역할은?",
    "options": [
      "리뷰어",
      "기록자",
      "관리자",
      "작성자만"
    ],
    "answer": [
      0
    ],
    "explanation": "리뷰어는 산출물을 평가해 잠재 이상, 질문과 개선 제안을 식별한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-17",
    "set": "prediction-11",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.3",
    "level": "K2",
    "text": "요구사항의 누락은 정적 리뷰에서 직접 찾을 수 있지만 런타임 교착은 동적 테스트가 필요한 이유는?",
    "options": [
      "두 방식은 완전히 동일하기 때문이다.",
      "정적 리뷰는 문서를 읽을 수 없기 때문이다.",
      "동적 테스트는 산출물을 실행하지 않기 때문이다.",
      "교착은 실행 중 구성요소 상호작용과 타이밍에서 나타나는 장애이기 때문이다."
    ],
    "answer": [
      3
    ],
    "explanation": "동시성·타이밍에 따른 교착은 소프트웨어 실행 동작을 관찰해야 하며, 문서 누락은 실행 없이 검토할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-18",
    "set": "prediction-11",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.2",
    "level": "K2",
    "text": "리뷰의 의사소통과 분석 활동에서 수행하는 일은?",
    "options": [
      "리뷰 목적을 처음 결정한다.",
      "발견 사항의 상태·소유자·조치를 논의하고 합의한다.",
      "산출물을 참가자에게 처음 배포한다.",
      "모든 결함을 코드에서 직접 수정한다."
    ],
    "answer": [
      1
    ],
    "explanation": "의사소통과 분석에서는 이상 항목을 논의해 결함 여부, 상태, 담당자와 필요한 조치를 결정한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-19",
    "set": "prediction-11",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.1.1",
    "level": "K2",
    "text": "과거 장애 기록을 이용해 자주 실패한 입력을 선택했다. 기법 범주는?",
    "options": [
      "경험 기반 테스트 기법",
      "블랙박스 테스트 기법만",
      "화이트박스 테스트 기법",
      "정적 리뷰 기법"
    ],
    "answer": [
      0
    ],
    "explanation": "과거 결함과 장애 지식을 활용하는 오류 추정은 경험 기반 기법이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-20",
    "set": "prediction-11",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.1",
    "level": "K3",
    "text": "시험 점수가 0~59 불합격, 60~79 보통, 80~100 우수이며 그 밖은 무효이다. 모든 동등 분할을 대표하는 입력 집합은?",
    "options": [
      "{-1,0,60,80,100}",
      "{0,59,60,79,80}",
      "{-1,30,70,90,101}",
      "{30,59,79,80,101}"
    ],
    "answer": [
      2
    ],
    "explanation": "무효 하한, 불합격, 보통, 우수, 무효 상한의 다섯 분할을 -1,30,70,90,101이 각각 대표한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-21",
    "set": "prediction-11",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.2",
    "level": "K3",
    "text": "허용 개수가 3 이상 9 이하인 정수이다. 2값 경계값 분석의 입력은?",
    "options": [
      "{3,4,8,9}",
      "{2,3,9,10}",
      "{2,3,4,8,9,10}",
      "{3,9}"
    ],
    "answer": [
      1
    ],
    "explanation": "하한에서는 2·3, 상한에서는 9·10을 선택한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-22",
    "set": "prediction-11",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.3",
    "level": "K3",
    "text": "배송 알림 규칙: 휴대폰 번호가 있고 SMS 동의면 SMS, 이메일이 있고 이메일 동의면 이메일, 둘 다 가능하면 두 채널 모두, 가능 채널이 없으면 알림 없음이다. 잘못된 결과는?",
    "options": [
      "두 채널 모두 가능 → SMS와 이메일",
      "SMS만 가능 → SMS",
      "이메일만 가능 → 이메일",
      "가능 채널 없음 → SMS"
    ],
    "answer": [
      3
    ],
    "explanation": "가능한 채널이 없으면 알림을 보내지 않아야 하므로 SMS라는 결과는 규칙과 맞지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-23",
    "set": "prediction-11",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.4",
    "level": "K3",
    "text": "파일 상태는 업로드 중, 검사 중, 승인, 거부이다. 업로드 완료 시 검사 중, 검사 통과 시 승인, 검사 실패 시 거부가 된다. 정의되지 않은 전이는?",
    "options": [
      "검사 중—검사 통과→승인",
      "업로드 중—업로드 완료→검사 중",
      "업로드 중—검사 통과→승인",
      "검사 중—검사 실패→거부"
    ],
    "answer": [
      2
    ],
    "explanation": "검사 통과 이벤트는 검사 중 상태에서만 정의되어 있으므로 업로드 중에서 바로 승인으로 갈 수 없다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-24",
    "set": "prediction-11",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.3",
    "level": "K3",
    "text": "스토리: “회원은 배송 전 주문 수량을 변경할 수 있다.” 조건: 주문이 준비 중이고 재고가 충분하면 수량과 총액을 갱신한다. 적절한 테스트는?",
    "options": [
      "준비 중 주문과 충분한 재고에서 수량 변경 후 수량과 총액을 확인한다.",
      "준비 중 주문과 부족한 재고에서 변경 성공만 확인한다.",
      "배송 완료 주문과 충분한 재고에서 수량 변경 성공을 기대한다.",
      "준비 중 주문과 충분한 재고에서 수량만 확인하고 총액은 확인하지 않는다."
    ],
    "answer": [
      0
    ],
    "explanation": "인수 조건의 상태, 재고 조건, 행동과 기대 결과인 수량·총액 갱신을 구체적으로 검증해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-25",
    "set": "prediction-11",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.1",
    "level": "K2",
    "text": "구문 커버리지가 100%라는 뜻은?",
    "options": [
      "모든 결함이 제거되었다.",
      "모든 결정 결과가 실행되었다.",
      "모든 경로가 실행되었다.",
      "모든 실행 가능 구문이 적어도 한 번 실행되었다."
    ],
    "answer": [
      3
    ],
    "explanation": "100% 구문 커버리지는 실행 가능한 각 구문이 테스트로 실행되었음을 의미한다. 분기·경로·결함 부재를 보장하지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-26",
    "set": "prediction-11",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.3",
    "level": "K2",
    "text": "화이트박스 커버리지 측정이 테스트 개선에 주는 가치는?",
    "options": [
      "요구사항의 비즈니스 가치를 자동 결정한다.",
      "실행되지 않은 코드 구조를 찾아 추가 테스트가 필요한 곳을 제시한다.",
      "모든 사용자 기대를 대신 정의한다.",
      "결함 수정을 자동 완료한다."
    ],
    "answer": [
      1
    ],
    "explanation": "구조 커버리지는 테스트가 실행하지 않은 구문·분기 등을 가시화해 테스트 스위트의 공백을 보완하게 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-27",
    "set": "prediction-11",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.1",
    "level": "K2",
    "text": "숫자 입력 파서에서 오류 추정에 적합한 값은?",
    "options": [
      "빈 값, 선행 0, 매우 큰 수, 문자 혼합과 소수점 여러 개",
      "정상 정수 하나만",
      "화면 해상도만",
      "코드 작성자 이름만"
    ],
    "answer": [
      0
    ],
    "explanation": "흔한 형식 실수와 극단값을 반영한 입력은 오류 추정으로 결함 가능성이 높은 영역을 탐색한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-28",
    "set": "prediction-11",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.3",
    "level": "K2",
    "text": "체크리스트 기반 테스트가 여러 테스터에게 다른 결과를 낼 수 있는 이유는?",
    "options": [
      "테스터 경험을 사용하지 않기 때문이다.",
      "체크리스트가 모든 실행 단계를 완전히 고정하기 때문이다.",
      "항목이 상위 수준이라 해석과 경험에 따라 구체적인 테스트가 달라질 수 있기 때문이다.",
      "항목이 항상 자동화 코드이기 때문이다."
    ],
    "answer": [
      2
    ],
    "explanation": "체크리스트는 보통 상위 수준 지침이므로 테스터의 지식과 관점에 따라 세부 테스트와 발견 결과가 달라질 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-29",
    "set": "prediction-11",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.1",
    "level": "K2",
    "text": "3C에서 Card가 의미하는 것은?",
    "options": [
      "최종 계약서 전체",
      "스토리를 간결하게 적어 대화를 시작하게 하는 물리적·전자적 카드",
      "자동화 실행 로그",
      "결함 심각도 표"
    ],
    "answer": [
      1
    ],
    "explanation": "Card는 사용자 스토리의 핵심을 짧게 담고 상세 내용은 Conversation과 Confirmation을 통해 발전시킨다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-30",
    "set": "prediction-11",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.1",
    "level": "K1",
    "text": "테스트 대시보드에 결함 추세를 표시하려 한다. 적절한 지표는?",
    "options": [
      "회의실 좌석 수",
      "회사 주가만",
      "팀원의 통근 거리",
      "심각도별 미해결 결함 수"
    ],
    "answer": [
      3
    ],
    "explanation": "미해결 결함 수, 심각도 분포, 발견·수정 추세와 재오픈 비율 등은 테스트 모니터링에 사용할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-31",
    "set": "prediction-11",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.1",
    "level": "K2",
    "text": "테스트 계획에 테스트 접근법을 포함하는 목적은?",
    "options": [
      "테스트 레벨·유형·기법·우선순위와 자동화 방식을 어떻게 적용할지 합의한다.",
      "제품 가격을 결정한다.",
      "개발자 개인 평가를 수행한다.",
      "모든 결함을 미리 나열한다."
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 접근법은 목표와 리스크를 달성하기 위해 사용할 레벨, 유형, 기법, 우선순위, 환경과 자동화 방향을 설명한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-32",
    "set": "prediction-11",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.4",
    "level": "K3",
    "text": "세 전문가의 추정이 90, 120, 150시간이다. 단순 평균은?",
    "options": [
      "110시간",
      "360시간",
      "120시간",
      "130시간"
    ],
    "answer": [
      2
    ],
    "explanation": "합계 360시간을 3으로 나누면 120시간이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-33",
    "set": "prediction-11",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.5",
    "level": "K3",
    "text": "실행 가능한 항목 중 우선순위 1이 먼저다. A(2, 독립), B(1, A 이후), C(1, 독립)의 실행 순서는?",
    "options": [
      "A → C → B",
      "B → C → A",
      "A → B → C",
      "C → A → B"
    ],
    "answer": [
      3
    ],
    "explanation": "처음 실행 가능한 A와 C 중 우선순위 1인 C를 먼저 한다. B를 실행하려면 A가 필요하므로 A, B 순으로 이어진다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-34",
    "set": "prediction-11",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.5.1",
    "level": "K3",
    "text": "결함 보고서의 재현 단계로 가장 적절한 것은?",
    "options": [
      "관리자로 로그인한 뒤 내보내기를 시도함",
      "1) 관리자 로그인 2) 보고서 메뉴 선택 3) 기간을 지난달로 설정 4) 내보내기 클릭",
      "보고서 메뉴에서 지난달을 선택함",
      "지난달 보고서를 여러 번 확인함"
    ],
    "answer": [
      1
    ],
    "explanation": "재현 단계는 같은 시작 상태와 동작 순서를 다른 사람이 반복할 수 있도록 구체적이고 순차적으로 작성한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-35",
    "set": "prediction-11",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.2",
    "level": "K2",
    "text": "제품 리스크와 프로젝트 리스크 연결로 옳은 것을 두 개 고르시오.",
    "options": [
      "성능 저하 가능성 — 프로젝트 리스크만",
      "검색 결과가 누락될 가능성 — 제품 리스크",
      "데이터 손상 가능성 — 일정 리스크만",
      "테스트 예산이 삭감될 가능성 — 프로젝트 리스크",
      "테스트 인력 부족 — 제품 기능 결함"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "품질 특성 실패 가능성은 제품 리스크이고 예산·인력·일정·환경 문제는 프로젝트 수행 리스크다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-36",
    "set": "prediction-11",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.3",
    "level": "K2",
    "text": "고위험 데이터 변환 기능의 테스트 철저함에 미칠 영향은?",
    "options": [
      "더 다양한 데이터 조합, 경계와 복구 시나리오를 높은 우선순위로 시험한다.",
      "정상 데이터 하나만 확인한다.",
      "변환 테스트를 범위에서 제외한다.",
      "리스크와 무관하게 모든 영역에 같은 노력만 쓴다."
    ],
    "answer": [
      0
    ],
    "explanation": "높은 제품 리스크는 관련 테스트의 범위, 기법, 데이터 다양성, 커버리지와 우선순위를 강화하는 근거다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-37",
    "set": "prediction-11",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.2",
    "level": "K2",
    "text": "테스트 진행 보고서와 완료 보고서의 차이를 올바르게 설명한 것은?",
    "options": [
      "둘 다 테스트 시작 전에만 작성한다.",
      "진행 보고서는 현재 상태와 제어 정보를 주기적으로 제공하고, 완료 보고서는 종료 시 결과와 잔여 리스크를 요약한다.",
      "완료 보고서에는 결과가 포함되지 않는다.",
      "진행 보고서는 독자에게 공유하지 않는다."
    ],
    "answer": [
      1
    ],
    "explanation": "진행 보고는 진행 중 의사결정과 제어를, 완료 보고는 수행 결과·평가·잔여 리스크·교훈을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-38",
    "set": "prediction-11",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.4.1",
    "level": "K2",
    "text": "테스트 데이터 세트에 버전 태그를 붙이는 주된 이유는?",
    "options": [
      "모든 테스트를 통과시키기 위해서이다.",
      "데이터 품질을 자동 보증하기 위해서이다.",
      "개인정보 규칙을 무시하기 위해서이다.",
      "어떤 데이터로 결과가 발생했는지 추적하고 같은 조건을 재현하기 위해서이다."
    ],
    "answer": [
      3
    ],
    "explanation": "테스트 데이터도 형상 항목으로 식별·버전 관리하면 결과 추적성과 재현성이 높아진다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-39",
    "set": "prediction-11",
    "chapter": "6장 테스트 도구",
    "lo": "6.1.1",
    "level": "K2",
    "text": "결함 상태, 담당자, 심각도와 수정 이력을 관리하는 도구는?",
    "options": [
      "결함 관리 도구",
      "성능 부하 도구",
      "정적 분석 도구",
      "화면 비교 도구만"
    ],
    "answer": [
      0
    ],
    "explanation": "결함 관리 도구는 결함 보고, 상태 흐름, 책임, 우선순위·심각도, 연결과 이력 관리를 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P11-40",
    "set": "prediction-11",
    "chapter": "6장 테스트 도구",
    "lo": "6.2.1",
    "level": "K1",
    "text": "자동화의 잠재적 위험은?",
    "options": [
      "회귀 테스트 빈도를 높일 수 있다.",
      "반복 실행이 일관될 수 있다.",
      "자동화 결과를 과신해 사람이 탐색해야 할 문제를 놓칠 수 있다.",
      "측정값 수집이 쉬워질 수 있다."
    ],
    "answer": [
      2
    ],
    "explanation": "자동화에 대한 과도한 신뢰는 도구가 다루지 못하는 사용성, 새로운 위험과 잘못된 오라클을 놓치게 할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-01",
    "set": "prediction-12",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.1",
    "level": "K1",
    "text": "테스트가 이해관계자에게 제공할 수 있는 결과는?",
    "options": [
      "테스트 대상의 품질과 잔여 리스크에 관한 정보",
      "결함이 절대 없다는 증명",
      "개발 예산의 자동 승인",
      "모든 장애의 코드 수정"
    ],
    "answer": [
      0
    ],
    "explanation": "테스팅은 품질 수준, 발견 결함과 잔여 리스크 정보를 제공해 이해관계자의 판단을 돕는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-02",
    "set": "prediction-12",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.2",
    "level": "K1",
    "text": "품질 보증이 프로세스 지향적이라는 뜻은?",
    "options": [
      "모든 테스트 케이스를 실행한다.",
      "한 제품의 테스트 결과만 비교한다.",
      "발견한 결함 코드를 직접 수정한다.",
      "좋은 프로세스가 정의되고 제대로 적용되는지 평가하고 개선한다."
    ],
    "answer": [
      3
    ],
    "explanation": "QA는 프로세스의 적합한 정의·적용과 개선을 통해 품질 달성을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-03",
    "set": "prediction-12",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.2",
    "level": "K2",
    "text": "테스트가 실패한 뒤 원인을 격리하려고 추가 로그를 넣고 코드를 단계 실행했다. 이 후속 활동은?",
    "options": [
      "테스트 완료",
      "디버깅",
      "품질 보증",
      "인수 테스팅"
    ],
    "answer": [
      1
    ],
    "explanation": "장애의 원인을 찾아 결함을 식별하는 추가 분석은 디버깅이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-04",
    "set": "prediction-12",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.3",
    "level": "K2",
    "text": "개발자가 할인 규칙을 잘못 적용한 코드를 작성했지만 해당 분기는 아직 실행되지 않았다. 잘못된 코드는 무엇인가?",
    "options": [
      "근본 원인",
      "장애",
      "결함",
      "오류를 관찰한 실제 결과"
    ],
    "answer": [
      2
    ],
    "explanation": "작업 산출물인 코드에 존재하는 잘못은 결함이다. 실행되지 않았다면 아직 관찰 가능한 장애가 발생하지 않았을 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-05",
    "set": "prediction-12",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.1",
    "level": "K2",
    "text": "상위 테스트 조건을 구체적인 테스트 케이스와 커버리지 항목으로 바꾸는 활동은?",
    "options": [
      "디버깅",
      "테스트 모니터링",
      "테스트 완료",
      "테스트 설계"
    ],
    "answer": [
      3
    ],
    "explanation": "테스트 설계는 테스트 조건을 테스트 케이스, 커버리지 항목과 데이터 요구사항으로 구체화한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-06",
    "set": "prediction-12",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.5",
    "level": "K2",
    "text": "테스트 제어 조치를 결정하고 계획 대비 편차를 관리하는 책임이 중심인 역할은?",
    "options": [
      "테스트 관리 역할",
      "테스팅 역할만",
      "작성자 역할",
      "외부 사용자 역할"
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 관리 역할은 계획, 모니터링, 제어와 완료 활동을 주로 담당한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-07",
    "set": "prediction-12",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.3",
    "level": "K2",
    "text": "개발팀이 먼저 자체 리뷰하고, 인수 전에는 별도 부서의 업무 전문가가 같은 기능을 평가한다. 이 구성에 관한 설명 중 옳은 것을 두 개 고르시오.",
    "options": [
      "독립 수준을 높이면 모든 결함 발견이 보장된다.",
      "별도 부서가 참여하면 개발팀은 품질 활동을 중단해야 한다.",
      "별도 부서는 개발팀과 다른 업무 가정에서 이상을 발견할 수 있다.",
      "자체 리뷰는 독립성이 낮으므로 아무 가치가 없다.",
      "부서 간 거리가 커지면 피드백 전달과 협업이 느려질 수 있다."
    ],
    "answer": [
      2,
      4
    ],
    "explanation": "여러 독립 수준을 조합하면 빠른 내부 피드백과 다른 관점의 결함 발견을 얻을 수 있지만, 조직적 거리는 의사소통 비용을 높일 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-08",
    "set": "prediction-12",
    "chapter": "1장 테스트 기초",
    "lo": "1.3.1",
    "level": "K2",
    "text": "한 회귀 스위트의 결함 발견력이 떨어져 입력 조합과 시나리오를 새로 추가했다. 적용한 원리는?",
    "options": [
      "결함 집중",
      "테스트 마모",
      "오류 부재의 궤변",
      "완전한 테스팅"
    ],
    "answer": [
      1
    ],
    "explanation": "같은 테스트의 반복으로 새 결함 발견 효과가 감소할 수 있으므로 테스트를 갱신해야 한다는 테스트 마모 원리다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-09",
    "set": "prediction-12",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.3",
    "level": "K1",
    "text": "Given/When/Then 형식의 행위 예를 구현 전에 만드는 접근법은?",
    "options": [
      "유지보수 테스팅",
      "TDD",
      "구문 커버리지",
      "BDD"
    ],
    "answer": [
      3
    ],
    "explanation": "BDD는 기대 행위를 구체적인 예로 표현해 공통 이해와 개발을 안내한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-10",
    "set": "prediction-12",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.2",
    "level": "K1",
    "text": "수명주기 전반의 테스트 관행으로 옳은 것은?",
    "options": [
      "각 테스트 레벨은 고유한 목적을 가지며 적절한 베이시스에 연결된다.",
      "모든 테스트 레벨은 같은 목적만 가진다.",
      "테스트 분석은 코딩 완료 후에만 시작한다.",
      "정적 테스팅은 테스트 활동이 아니다."
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 레벨은 서로 다른 목적과 베이시스를 가지며 관련 개발 산출물에 대응한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-11",
    "set": "prediction-12",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.1",
    "level": "K2",
    "text": "반복적 개발에서 첫 반복의 테스트가 이후 반복에도 중요한 이유는?",
    "options": [
      "이후 반복에서는 테스트가 금지되기 때문이다.",
      "첫 반복 뒤에는 변경이 없기 때문이다.",
      "누적된 기능에 대한 회귀 테스트의 기반이 되기 때문이다.",
      "첫 반복만 운영에 배포되기 때문이다."
    ],
    "answer": [
      2
    ],
    "explanation": "반복이 진행되면서 새 기능과 기존 기능이 통합되므로 이전 테스트를 회귀 테스트로 재사용·확장해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-12",
    "set": "prediction-12",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.4",
    "level": "K2",
    "text": "DevOps와 테스트 자동화의 관계를 올바르게 설명한 것은?",
    "options": [
      "DevOps에서는 테스트가 운영 후에만 수행된다.",
      "자동화는 빠른 피드백을 돕지만 모든 품질 판단과 수동 탐색을 대체하지는 않는다.",
      "자동화가 있으면 테스트 설계가 필요 없다.",
      "CI/CD는 비기능 품질과 무관하다."
    ],
    "answer": [
      1
    ],
    "explanation": "DevOps 파이프라인의 자동화는 반복 가능하고 빠른 피드백을 제공하지만 사람의 분석·탐색과 다양한 품질 활동도 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-13",
    "set": "prediction-12",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.1",
    "level": "K2",
    "text": "완성된 모바일 뱅킹 앱의 기능·성능·사용성을 전체 시스템 관점에서 평가한다. 테스트 레벨은?",
    "options": [
      "시스템 테스팅",
      "컴포넌트 테스팅",
      "컴포넌트 통합 테스팅",
      "인수 테스팅만"
    ],
    "answer": [
      0
    ],
    "explanation": "시스템 테스팅은 완성된 전체 시스템의 종단간 기능과 비기능 품질을 평가한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-14",
    "set": "prediction-12",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.3.1",
    "level": "K2",
    "text": "운영 중 긴급 보안 패치를 적용한 뒤 적절한 유지보수 테스트는?",
    "options": [
      "광고 문구 검토만",
      "수정 코드 리뷰 없이 출시만",
      "모든 기존 테스트 삭제",
      "수정된 취약점의 확인 테스트와 영향받을 수 있는 기능의 회귀 테스트"
    ],
    "answer": [
      3
    ],
    "explanation": "패치가 의도한 문제를 해결했는지 확인하고 변경이 다른 영역에 부작용을 만들지 않았는지 회귀 테스트해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-15",
    "set": "prediction-12",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.5",
    "level": "K1",
    "text": "리뷰에서 안전한 분위기가 중요한 이유는?",
    "options": [
      "작성자만 발언하게 하기 위해서이다.",
      "참가자가 보복 우려 없이 의문과 이상 항목을 제기하도록 하기 위해서이다.",
      "결함 수로 사람을 평가하기 위해서이다.",
      "준비 시간을 없애기 위해서이다."
    ],
    "answer": [
      1
    ],
    "explanation": "심리적으로 안전한 환경은 솔직한 피드백과 다양한 관점을 촉진해 리뷰 효과를 높인다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-16",
    "set": "prediction-12",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.3",
    "level": "K1",
    "text": "리뷰에서 발견된 산출물 결함을 수정하는 주 역할은?",
    "options": [
      "리뷰 리더",
      "기록자",
      "작성자",
      "관리자"
    ],
    "answer": [
      2
    ],
    "explanation": "작성자는 리뷰 대상 산출물을 만들고 확인된 결함을 수정한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-17",
    "set": "prediction-12",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.2",
    "level": "K2",
    "text": "설계 리뷰가 코드 작성 전에 인터페이스 누락을 발견했다. 가장 직접적인 효과는?",
    "options": [
      "잘못된 설계가 코드와 테스트로 전파되는 것을 막아 재작업을 줄인다.",
      "실제 부하 성능을 자동 측정한다.",
      "운영 장애를 모두 재현한다.",
      "동적 테스트가 필요 없어지게 한다."
    ],
    "answer": [
      0
    ],
    "explanation": "조기 정적 테스팅은 결함 전파를 막고 이후 산출물 수정 비용과 일정 위험을 줄인다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-18",
    "set": "prediction-12",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.4",
    "level": "K2",
    "text": "최대한 많은 이상을 찾기 위해 정의된 역할·절차·지표를 사용하고 작성자가 리뷰 리더나 기록자가 될 수 없다. 리뷰 유형은?",
    "options": [
      "비공식 리뷰",
      "워크스루",
      "기술 리뷰",
      "인스펙션"
    ],
    "answer": [
      3
    ],
    "explanation": "인스펙션은 가장 공식적인 리뷰로 전체 프로세스와 역할, 지표를 사용하며 이상 발견 극대화를 목적으로 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-19",
    "set": "prediction-12",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.1.1",
    "level": "K2",
    "text": "결정 테이블을 사용해 조건 조합별 기대 결과를 도출했다. 기법 범주는?",
    "options": [
      "경험 기반 테스트 기법",
      "화이트박스 테스트 기법",
      "블랙박스 테스트 기법",
      "정적 코드 분석"
    ],
    "answer": [
      2
    ],
    "explanation": "결정 테이블은 명세의 조건과 행동 관계를 기반으로 하는 블랙박스 기법이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-20",
    "set": "prediction-12",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.1",
    "level": "K3",
    "text": "월 사용량이 0 미만이면 무효, 0~100은 기본, 101~500은 표준, 501 이상은 대용량이다. 모든 분할 대표값은?",
    "options": [
      "{0,100,101,500}",
      "{-1,50,300,700}",
      "{-1,0,101,500}",
      "{50,100,500,501}"
    ],
    "answer": [
      1
    ],
    "explanation": "분할은 음수 무효, 0~100, 101~500, 501 이상이다. -1,50,300,700이 각각을 대표한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-21",
    "set": "prediction-12",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.2",
    "level": "K3",
    "text": "비밀번호 길이는 8자 이상 12자 이하의 정수만 허용한다. 3값 경계값 분석을 적용한 테스트 길이 집합은?",
    "options": [
      "{6,7,8,12,13,14}",
      "{7,8,12,13}",
      "{8,9,11,12}",
      "{7,8,9,11,12,13}"
    ],
    "answer": [
      3
    ],
    "explanation": "3값 경계값 분석은 각 경계값과 바로 아래·위 값을 사용하므로 7·8·9와 11·12·13이 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-22",
    "set": "prediction-12",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.3",
    "level": "K3",
    "text": "배송 우선 규칙: 긴급이면 당일, 긴급이 아니고 회원이면 익일, 둘 다 아니면 일반 배송이다. 규칙과 일치하지 않는 것은?",
    "options": [
      "긴급·회원 → 익일",
      "비긴급·회원 → 익일",
      "비긴급·비회원 → 일반",
      "긴급·비회원 → 당일"
    ],
    "answer": [
      0
    ],
    "explanation": "긴급 주문은 회원 여부와 관계없이 당일 배송이므로 긴급·회원의 익일 결과는 잘못되었다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-23",
    "set": "prediction-12",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.4",
    "level": "K3",
    "text": "인증 상태는 대기, 인증됨, 잠금이다. 대기에서 성공 로그인 시 인증됨, 대기에서 실패 3회 시 잠금, 인증됨에서 로그아웃 시 대기, 잠금에서 관리자 해제 시 대기이다. 정의되지 않은 전이는?",
    "options": [
      "대기—성공 로그인→인증됨",
      "인증됨—실패 3회→잠금",
      "대기—실패 3회→잠금",
      "잠금—관리자 해제→대기"
    ],
    "answer": [
      1
    ],
    "explanation": "실패 누적으로 잠금되는 전이는 인증 전 대기 상태에서만 정의되어 있고, 인증됨 상태에서는 정의되지 않았다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-24",
    "set": "prediction-12",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.3",
    "level": "K3",
    "text": "스토리: “고객은 결제 전 포인트를 사용할 수 있다.” 조건: 포인트가 충분하면 사용액만큼 결제금액과 잔여 포인트를 줄인다. 적절한 테스트는?",
    "options": [
      "포인트 부족 시 사용 거절만 확인한다.",
      "충분한 포인트에서 잔여 포인트 감소만 확인하고 결제금액은 확인하지 않는다.",
      "충분한 포인트에서 사용 후 결제금액과 잔여 포인트를 모두 확인한다.",
      "충분한 포인트에서 결제금액 감소만 확인하고 잔여 포인트는 확인하지 않는다."
    ],
    "answer": [
      2
    ],
    "explanation": "인수 조건의 충분한 포인트, 사용 행동과 두 기대 결과를 함께 검증해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-25",
    "set": "prediction-12",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.2",
    "level": "K2",
    "text": "분기 결과가 10개인 코드에서 8개 결과를 실행했다. 분기 커버리지는?",
    "options": [
      "80%",
      "20%",
      "8%",
      "100%"
    ],
    "answer": [
      0
    ],
    "explanation": "8÷10×100=80%이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-26",
    "set": "prediction-12",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.3",
    "level": "K2",
    "text": "화이트박스 기법과 블랙박스 기법을 함께 사용할 때의 이점은?",
    "options": [
      "정적 테스팅을 금지한다.",
      "모든 가능한 경로를 자동 증명한다.",
      "테스트 데이터를 없앤다.",
      "요구사항 동작과 내부 구조의 테스트 공백을 서로 다른 관점에서 보완한다."
    ],
    "answer": [
      3
    ],
    "explanation": "블랙박스는 외부 요구 동작, 화이트박스는 내부 구조를 다루므로 결합하면 서로 다른 커버리지 공백을 찾을 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-27",
    "set": "prediction-12",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.2",
    "level": "K2",
    "text": "탐색적 테스팅에서 학습·설계·실행의 관계는?",
    "options": [
      "설계가 완전히 끝난 뒤 학습을 시작한다.",
      "서로 피드백하며 동시에 진행될 수 있다.",
      "실행 결과는 다음 테스트에 영향을 주지 않는다.",
      "기록과 평가를 하지 않는다."
    ],
    "answer": [
      1
    ],
    "explanation": "탐색적 테스팅은 제품 학습, 테스트 설계와 실행을 상호 지원하는 병행 활동으로 본다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-28",
    "set": "prediction-12",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.3",
    "level": "K2",
    "text": "과거 결함에서 만든 체크리스트를 사용할 때 주의할 점은?",
    "options": [
      "다른 기법을 모두 금지한다.",
      "항목을 영구 고정한다.",
      "현재 제품과 리스크에 맞는지 검토하고 낡은 항목을 갱신한다.",
      "발견 결과를 기록하지 않는다."
    ],
    "answer": [
      2
    ],
    "explanation": "체크리스트는 현재 맥락과 새로운 결함 정보를 반영해 정기적으로 유지해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-29",
    "set": "prediction-12",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.2",
    "level": "K2",
    "text": "규칙 지향 인수 조건과 시나리오 지향 인수 조건의 차이는?",
    "options": [
      "규칙 지향은 검증할 수 없다.",
      "둘은 항상 같은 문장 형식이다.",
      "시나리오 지향에는 기대 결과가 없다.",
      "규칙 지향은 개별 조건을, 시나리오 지향은 사전 상황·행위·기대 결과의 흐름을 표현한다."
    ],
    "answer": [
      3
    ],
    "explanation": "규칙 지향 형식은 검증할 조건을 목록화하고, 시나리오 지향 형식은 Given/When/Then 같은 흐름으로 예를 표현한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-30",
    "set": "prediction-12",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.6",
    "level": "K1",
    "text": "테스트 피라미드에서 가장 넓은 기반에 일반적으로 배치되는 것은?",
    "options": [
      "작고 빠른 컴포넌트 수준 자동 테스트",
      "느린 종단간 UI 테스트",
      "수동 인수 테스트만",
      "운영 장애 보고서"
    ],
    "answer": [
      0
    ],
    "explanation": "피라미드의 기반에는 빠르고 격리된 하위 수준 자동 테스트를 많이 두는 것이 일반적이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-31",
    "set": "prediction-12",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.1",
    "level": "K2",
    "text": "테스트 계획에서 일정과 자원을 함께 고려해야 하는 이유는?",
    "options": [
      "리스크를 기록하지 않기 위해서이다.",
      "모든 테스트를 무기한 수행하기 위해서이다.",
      "사용 가능한 인력·환경·시간 안에서 범위와 우선순위를 현실적으로 조정하기 위해서이다.",
      "제품 가격을 정하기 위해서이다."
    ],
    "answer": [
      2
    ],
    "explanation": "테스트 계획은 제약된 자원을 목표·리스크·범위와 연결해 실행 가능한 일정과 책임을 만든다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-32",
    "set": "prediction-12",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.4",
    "level": "K3",
    "text": "과거 평균이 사용자 스토리 하나당 테스트 6시간이고 새 릴리스가 45개 스토리라면 비율 기반 추정은?",
    "options": [
      "51시간",
      "270시간",
      "7.5시간",
      "225시간"
    ],
    "answer": [
      1
    ],
    "explanation": "45×6=270시간이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-33",
    "set": "prediction-12",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.5",
    "level": "K3",
    "text": "숫자가 작을수록 우선순위가 높다. A(2, 독립), B(1, A 이후), C(1, 독립), D(3, C 이후)의 실행 순서는?",
    "options": [
      "B → C → A → D",
      "A → B → C → D",
      "C → D → A → B",
      "C → A → B → D"
    ],
    "answer": [
      3
    ],
    "explanation": "처음 실행 가능한 A와 C 중 C가 우선이다. 다음에는 A가 D보다 우선이고, A가 끝나면 우선순위 1인 B, 마지막으로 D를 실행한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-34",
    "set": "prediction-12",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.5.1",
    "level": "K3",
    "text": "요구사항은 “잔액 부족 이체를 거절하고 잔액을 유지한다”이다. 실제로 10만원 잔액에서 15만원 이체 후 오류는 표시됐지만 잔액이 -5만원이 되었다. 가장 유용한 결함 보고 내용은?",
    "options": [
      "입력값·사전 잔액·실행 동작과 함께 기대 결과는 거절 및 10만원 유지, 실제 결과는 오류 표시 및 -5만원이라고 기록한다.",
      "“잔액 부족 처리가 이상함”이라고 제목만 기록한다.",
      "오류 메시지가 표시됐으므로 기대 결과와 실제 결과가 같다고 기록한다.",
      "개발자가 재현할 수 있도록 입력값과 계정 상태는 생략한다."
    ],
    "answer": [
      0
    ],
    "explanation": "효과적인 결함 보고서는 재현에 필요한 조건과 단계, 기대 결과와 실제 결과의 구체적인 차이를 제공한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-35",
    "set": "prediction-12",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.2",
    "level": "K2",
    "text": "환율 반올림 오류 가능성과 공용 테스트 단말의 예약 취소 가능성을 분석했다. 올바른 분류는?",
    "options": [
      "둘 다 제품 리스크이다.",
      "반올림 오류 가능성은 제품 리스크, 단말 예약 취소 가능성은 프로젝트 리스크이다.",
      "둘 다 프로젝트 리스크이다.",
      "반올림 오류는 프로젝트 리스크, 단말 예약 취소는 제품 리스크이다."
    ],
    "answer": [
      1
    ],
    "explanation": "계산 정확성 실패 가능성은 제품 품질을 위협하고, 테스트 장비를 제때 쓰지 못할 가능성은 테스트 수행을 위협한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-36",
    "set": "prediction-12",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.4",
    "level": "K2",
    "text": "회사는 온라인 결제 부정 사용으로 생길 수 있는 금전 손실을 보상하는 보험에 가입했다. 이 대응은?",
    "options": [
      "리스크 수용",
      "테스트를 통한 리스크 완화",
      "리스크 이전",
      "비상 계획 실행"
    ],
    "answer": [
      2
    ],
    "explanation": "보험 계약은 위험이 현실화될 때의 금전적 영향을 보험자에게 이전한다. 발생 가능성 자체를 테스트로 낮추는 완화와는 다르다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-37",
    "set": "prediction-12",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.2",
    "level": "K2",
    "text": "테스트 보고서 작성 원칙으로 옳은 것을 두 개 고르시오.",
    "options": [
      "진행·결과·리스크를 근거와 함께 명확히 전달한다.",
      "모든 독자에게 원시 로그만 보낸다.",
      "불확실성을 확정 사실처럼 쓴다.",
      "독자의 역할과 의사결정에 맞는 세부 수준을 사용한다.",
      "좋지 않은 결과는 제외한다."
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "보고서는 정확하고 객관적이며 독자에 맞춰 상태, 편차, 품질과 리스크를 의사결정 가능한 형태로 제공해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-38",
    "set": "prediction-12",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.4.1",
    "level": "K2",
    "text": "테스트 결과와 사용한 빌드 사이의 연결을 보존하는 것이 중요한 이유는?",
    "options": [
      "리뷰 역할을 대체하기 위해서이다.",
      "모든 결함을 자동 수정하기 위해서이다.",
      "테스트 목적을 없애기 위해서이다.",
      "어떤 제품 버전에서 결과가 나왔는지 추적하고 재현하기 위해서이다."
    ],
    "answer": [
      3
    ],
    "explanation": "형상 식별과 결과 연결은 실행 증거의 무결성, 추적성과 재현성을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-39",
    "set": "prediction-12",
    "chapter": "6장 테스트 도구",
    "lo": "6.1.1",
    "level": "K2",
    "text": "모델에서 상태와 전이의 누락·불일치를 자동 검사하는 도구는?",
    "options": [
      "부하 생성 도구",
      "모델 기반 테스트 또는 모델 분석 도구",
      "결함 관리 도구만",
      "화면 녹화 도구"
    ],
    "answer": [
      1
    ],
    "explanation": "모델 기반 도구는 상태·전이 모델을 분석하고 테스트를 도출하거나 모델의 일관성을 검사할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P12-40",
    "set": "prediction-12",
    "chapter": "6장 테스트 도구",
    "lo": "6.2.1",
    "level": "K1",
    "text": "매일 반복하던 대량 데이터 비교를 자동화했을 때 기대할 수 있는 이점은?",
    "options": [
      "수동 테스트가 영구적으로 금지된다.",
      "자동 검사가 비즈니스 기대 결과를 스스로 정의한다.",
      "테스터가 반복 비교에 쓰던 시간을 탐색과 분석에 활용할 수 있다.",
      "자동화 코드에는 결함이 생길 수 없다."
    ],
    "answer": [
      2
    ],
    "explanation": "반복적이고 기계적인 작업을 자동화하면 사람은 탐색, 분석과 판단처럼 가치가 높은 활동에 더 집중할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-01",
    "set": "prediction-14",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.2",
    "level": "K1",
    "text": "전체 팀 접근법을 가장 잘 설명한 것은?",
    "options": [
      "제품 책임자는 테스트 결과를 볼 수 없다.",
      "테스트 직함이 있는 사람만 품질을 논의한다.",
      "필요한 역량을 가진 팀원들이 품질 책임을 공유하고 테스트 활동에 기여한다.",
      "모든 역할의 전문성을 없애고 같은 업무만 수행한다."
    ],
    "answer": [
      2
    ],
    "explanation": "전체 팀 접근법에서는 전문 역할을 유지하면서도 팀 전체가 품질에 책임을 지고 필요한 사람이 테스트 활동에 기여한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-02",
    "set": "prediction-14",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.1",
    "level": "K1",
    "text": "규제기관 제출 전에 테스트 결과를 검토하는 목적은?",
    "options": [
      "규정 충족 여부와 잔여 리스크에 대한 신뢰 정보를 제공하기 위해서이다.",
      "모든 미래 변경을 금지하기 위해서이다.",
      "개발 예산을 자동 계산하기 위해서이다.",
      "결함 수정 책임을 규제기관에 넘기기 위해서이다."
    ],
    "answer": [
      0
    ],
    "explanation": "테스트는 계약·법률·규제 요구의 충족 여부를 확인하고 이해관계자에게 품질과 리스크 정보를 제공할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-03",
    "set": "prediction-14",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.2",
    "level": "K2",
    "text": "의료기기와 사내 행사 예약 앱에 같은 테스트 프로세스를 그대로 적용하지 않는 주된 이유는?",
    "options": [
      "예약 앱은 결함이 생길 수 없기 때문이다.",
      "테스트 활동에는 공통 요소가 전혀 없기 때문이다.",
      "의료기기에는 정적 테스팅을 할 수 없기 때문이다.",
      "도메인 위험, 규제, 수명주기, 기술과 이해관계자 제약이 테스트 방식에 영향을 주기 때문이다."
    ],
    "answer": [
      3
    ],
    "explanation": "테스트 프로세스는 제품의 위험도·도메인·규제, 개발 방식, 팀, 기술과 프로젝트 제약 같은 맥락에 맞게 조정된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-04",
    "set": "prediction-14",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.3",
    "level": "K2",
    "text": "결제 테스트를 실행하기 위해 준비한 고객 계정·카드번호·잔액 값의 모음은 어떤 테스트웨어인가?",
    "options": [
      "테스트 완료 보고서",
      "테스트 데이터",
      "프로젝트 비즈니스 케이스",
      "제품 소스 코드"
    ],
    "answer": [
      1
    ],
    "explanation": "테스트 실행에 입력하거나 필요한 상태를 만드는 값과 계정 정보의 모음은 테스트 데이터에 해당한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-05",
    "set": "prediction-14",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.4",
    "level": "K2",
    "text": "테스트 결과를 인수 조건과 연결해 두었을 때 얻는 이점은?",
    "options": [
      "인수 조건 변경이 금지된다.",
      "실패한 테스트가 자동으로 수정된다.",
      "조건별 검증 상태와 실패 영향을 확인해 커버리지·출시 판단을 지원한다.",
      "모든 테스트의 우선순위가 같아진다."
    ],
    "answer": [
      2
    ],
    "explanation": "추적성은 테스트 베이시스, 테스트웨어, 결과와 결함의 관계를 보여 주어 커버리지 평가와 변경 영향 분석을 돕는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-06",
    "set": "prediction-14",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.5",
    "level": "K2",
    "text": "민지는 제품 리스크에 따라 테스트 접근법과 자원 배분을 정하고, 준호는 경계값으로 케이스를 도출해 실행한다. 역할 연결은?",
    "options": [
      "민지는 테스트 관리 역할, 준호는 테스팅 역할",
      "두 사람 모두 작성자 역할만",
      "민지는 디버깅 역할, 준호는 품질 보증 역할",
      "민지는 테스팅 역할만, 준호는 테스트 관리 역할만"
    ],
    "answer": [
      0
    ],
    "explanation": "접근법·자원·우선순위를 계획하는 책임은 테스트 관리 역할에, 케이스 도출과 실행은 테스팅 역할에 해당한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-07",
    "set": "prediction-14",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.3",
    "level": "K2",
    "text": "개발자가 자기 단위 테스트를 수행한 뒤 다른 팀의 테스터가 시스템 테스트를 수행한다. 독립성 관점의 설명은?",
    "options": [
      "독립 테스터는 개발팀과 의사소통하면 안 된다.",
      "개발자 테스트는 독립성이 낮으므로 모두 폐기해야 한다.",
      "다른 팀이 참여하면 개발자의 품질 책임이 사라진다.",
      "서로 다른 독립 수준을 조합해 빠른 피드백과 다른 관점을 함께 얻는다."
    ],
    "answer": [
      3
    ],
    "explanation": "낮은 독립 수준은 빠른 피드백을, 높은 수준은 다른 편향과 관점을 제공할 수 있어 여러 수준을 적절히 조합할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-08",
    "set": "prediction-14",
    "chapter": "1장 테스트 기초",
    "lo": "1.3.1",
    "level": "K2",
    "text": "전체 모듈의 15%에서 운영 결함의 75%가 반복 발견되었다. 관련 테스트 원리는?",
    "options": [
      "테스트 마모",
      "결함 집중",
      "오류 부재의 궤변",
      "완전한 테스팅"
    ],
    "answer": [
      1
    ],
    "explanation": "소수의 컴포넌트나 영역에 대부분의 결함이 집중되는 현상을 결함 집중 원리라고 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-09",
    "set": "prediction-14",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.3",
    "level": "K1",
    "text": "비즈니스 담당자·개발자·테스터가 인수 테스트를 먼저 만들고 이를 통과하도록 구현하는 접근법은?",
    "options": [
      "코드 커버리지 분석",
      "TDD만",
      "ATDD",
      "유지보수 테스팅"
    ],
    "answer": [
      2
    ],
    "explanation": "ATDD는 구현 전에 협업하여 인수 테스트를 만들고, 이 테스트가 개발을 안내하도록 하는 테스트 우선 접근법이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-10",
    "set": "prediction-14",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.2",
    "level": "K1",
    "text": "성능 테스팅과 사용성 테스팅을 구분하는 기준은?",
    "options": [
      "평가하려는 품질 특성과 테스트 목적",
      "테스트를 수행하는 요일",
      "소스 파일의 이름",
      "테스터의 직급"
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 유형은 기능 또는 성능·사용성·보안 같은 특정 품질 특성과 관련된 목적을 중심으로 묶은 테스트 활동이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-11",
    "set": "prediction-14",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.4",
    "level": "K2",
    "text": "DevOps 파이프라인에서 배포 후보마다 자동 회귀 테스트를 실행하는 주된 이점은?",
    "options": [
      "제품 품질에 대한 팀의 책임을 도구에 넘긴다.",
      "운영 모니터링과 수동 탐색을 완전히 없앤다.",
      "모든 테스트 데이터 문제를 자동 해결한다.",
      "변경에 대한 빠르고 반복 가능한 피드백으로 배포 위험을 조기에 드러낸다."
    ],
    "answer": [
      3
    ],
    "explanation": "지속적 통합·배포의 자동 테스트는 변경마다 빠른 피드백을 주지만 모든 테스트 활동과 사람의 판단을 대체하지는 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-12",
    "set": "prediction-14",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.5",
    "level": "K2",
    "text": "시프트 레프트를 적용하면서도 후반 테스트를 유지해야 하는 이유는?",
    "options": [
      "조기 리뷰는 아무 결함도 찾지 못하기 때문이다.",
      "조기 활동으로 찾기 어려운 통합·실환경·종단간 리스크는 후반 단계에서 드러날 수 있기 때문이다.",
      "시프트 레프트는 테스트를 운영 이후로 미루는 방식이기 때문이다.",
      "후반 테스트만이 요구사항을 검토할 수 있기 때문이다."
    ],
    "answer": [
      1
    ],
    "explanation": "시프트 레프트는 테스트를 앞당기는 것이지 후반 테스트를 모두 제거하는 것이 아니며 각 단계에 적합한 위험을 다뤄야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-13",
    "set": "prediction-14",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.3",
    "level": "K2",
    "text": "배송비 결함 수정 후 수정된 계산을 다시 확인하고 주문 합계·환불 기능도 실행했다. 두 활동의 순서는?",
    "options": [
      "인수 테스팅 후 컴포넌트 테스팅",
      "회귀 테스팅 후 정적 분석",
      "확인 테스팅 후 회귀 테스팅",
      "성능 테스팅 후 사용성 테스팅"
    ],
    "answer": [
      2
    ],
    "explanation": "수정된 결함이 해결됐는지 확인하는 것은 확인 테스팅이고, 변경의 부작용을 찾는 관련 기능 실행은 회귀 테스팅이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-14",
    "set": "prediction-14",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.3.1",
    "level": "K2",
    "text": "기존 서비스를 폐기하고 고객 데이터를 새 시스템으로 이전할 때 필요한 유지보수 테스트는?",
    "options": [
      "데이터 변환의 완전성·정확성과 보관·복구 가능성을 검증한다.",
      "폐기 시스템이므로 아무 테스트도 하지 않는다.",
      "새 시스템의 로고 색상만 확인한다.",
      "모든 과거 데이터의 삭제만 확인한다."
    ],
    "answer": [
      0
    ],
    "explanation": "시스템 폐기와 데이터 마이그레이션은 유지보수 테스트의 트리거이며 변환·보존된 데이터의 무결성과 접근성을 확인해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-15",
    "set": "prediction-14",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.3",
    "level": "K1",
    "text": "리뷰에서 발견된 이상, 결정 사항과 후속 조치의 책임자를 문서화하는 역할은?",
    "options": [
      "검토 대상 고객",
      "작성자",
      "관리자",
      "기록자"
    ],
    "answer": [
      3
    ],
    "explanation": "기록자는 리뷰에서 발견한 이상과 결정, 조치 항목 등 필요한 리뷰 정보를 수집하고 기록한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-16",
    "set": "prediction-14",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.5",
    "level": "K1",
    "text": "리뷰 성공 요인으로 적절한 것은?",
    "options": [
      "결함 수로 작성자를 평가한다.",
      "측정 가능한 목적을 정하고 적합한 리뷰 유형과 참가자를 선택한다.",
      "참가자에게 준비 시간을 주지 않는다.",
      "모든 산출물에 가장 공식적인 리뷰만 강제한다."
    ],
    "answer": [
      1
    ],
    "explanation": "명확한 목적, 적절한 유형·기법·참가자, 충분한 준비, 관리 지원과 심리적 안전은 성공적인 리뷰를 돕는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-17",
    "set": "prediction-14",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.2",
    "level": "K2",
    "text": "요구사항 리뷰에서 모순을 발견했을 때 얻는 가장 직접적인 가치가 아닌 것은?",
    "options": [
      "요구사항 품질과 공통 이해를 높인다.",
      "잘못된 설계와 코드로 결함이 전파되는 것을 막는다.",
      "실행 중인 시스템의 실제 응답시간을 측정한다.",
      "후속 테스트 베이시스의 품질을 개선한다."
    ],
    "answer": [
      2
    ],
    "explanation": "정적 리뷰는 모순을 조기에 찾지만 실행 중 성능 같은 동적 품질은 실제 시스템을 실행하는 테스트로 측정해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-18",
    "set": "prediction-14",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.4",
    "level": "K2",
    "text": "작성자가 산출물을 설명하며 참가자에게 안내하고, 목적에 따라 시나리오·드라이런을 사용할 수 있는 리뷰 유형은?",
    "options": [
      "워크스루",
      "인스펙션",
      "비공식 리뷰만",
      "동적 시스템 테스트"
    ],
    "answer": [
      0
    ],
    "explanation": "워크스루는 작성자가 주도해 산출물을 단계적으로 설명하며 참가자는 질문하고 이상을 찾는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-19",
    "set": "prediction-14",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.1.1",
    "level": "K2",
    "text": "상태 전이 테스팅과 구문 테스팅의 기법 범주를 올바르게 연결한 것은?",
    "options": [
      "둘 다 정적 리뷰 기법",
      "둘 다 경험 기반",
      "상태 전이는 화이트박스, 구문은 블랙박스",
      "상태 전이는 블랙박스, 구문 테스팅은 화이트박스"
    ],
    "answer": [
      3
    ],
    "explanation": "상태 전이는 명세된 상태·이벤트를 이용하는 블랙박스 기법이고 구문 테스팅은 코드 구조를 이용하는 화이트박스 기법이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-20",
    "set": "prediction-14",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.1",
    "level": "K3",
    "text": "파일 크기가 0바이트이면 빈 파일, 1~1024는 소형, 1025~1048576은 중형, 그보다 크면 대형이다. 각 동등 분할을 한 번씩 대표하는 집합은?",
    "options": [
      "{0,1,1024,1025}",
      "{0,500,500000,2000000}",
      "{1,1024,1025,1048576}",
      "{500,1024,1048576,1048577}"
    ],
    "answer": [
      1
    ],
    "explanation": "네 유효 분할은 0, 1~1024, 1025~1048576, 1048577 이상이며 첫 집합은 각 분할을 하나씩 대표한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-21",
    "set": "prediction-14",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.2",
    "level": "K3",
    "text": "허용 온도는 정수 -10℃ 이상 50℃ 이하이다. 3값 경계값 분석의 완전한 집합은?",
    "options": [
      "{-10,-9,49,50}",
      "{-11,-10,50,51}",
      "{-11,-10,-9,49,50,51}",
      "{-12,-11,-10,50,51,52}"
    ],
    "answer": [
      2
    ],
    "explanation": "각 경계와 바로 아래·위 값을 선택하므로 하한 주변 -11·-10·-9와 상한 주변 49·50·51이 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-22",
    "set": "prediction-14",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.3",
    "level": "K3",
    "text": "접근 규칙은 “관리자는 항상 허용, 일반 사용자는 근무시간이고 계정이 활성일 때만 허용”이다. 거절되는 조합은?",
    "options": [
      "일반 사용자·근무시간·비활성 계정",
      "관리자·비근무시간·비활성 계정",
      "일반 사용자·근무시간·활성 계정",
      "관리자·근무시간·활성 계정"
    ],
    "answer": [
      0
    ],
    "explanation": "일반 사용자는 근무시간과 활성 계정 조건을 모두 만족해야 하므로 비활성 계정이면 거절된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-23",
    "set": "prediction-14",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.4",
    "level": "K3",
    "text": "티켓 상태는 신규→배정됨→처리중→해결됨이다. 처리중에서는 배정됨으로 되돌릴 수 있고 해결됨에서는 재개 시 처리중이 된다. 유효한 전이 순서는?",
    "options": [
      "신규→배정됨→해결됨",
      "신규→처리중→해결됨",
      "배정됨→신규→처리중",
      "신규→배정됨→처리중→해결됨→처리중"
    ],
    "answer": [
      3
    ],
    "explanation": "첫 번째 순서는 정의된 정상 전이와 해결됨에서 처리중으로 가는 재개 전이를 모두 따른다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-24",
    "set": "prediction-14",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.3",
    "level": "K3",
    "text": "인수 조건: “재고가 있으면 주문 수량만큼 재고를 줄이고 주문을 확정한다.” ATDD 테스트로 가장 적절한 것은?",
    "options": [
      "재고 0개에서 주문 거절 메시지만 확인한다.",
      "재고 5개에서 2개 주문 후 주문 확정과 잔여 재고 3개를 확인한다.",
      "재고 5개에서 상품 설명만 확인한다.",
      "주문 후 배송 추적 화면의 색상만 확인한다."
    ],
    "answer": [
      1
    ],
    "explanation": "주어진 인수 조건의 사전 재고, 주문 행동, 주문 확정과 정확한 재고 감소라는 결과를 함께 검증해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-25",
    "set": "prediction-14",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.3",
    "level": "K2",
    "text": "화이트박스 커버리지 측정이 제공하는 가치로 가장 적절한 것은?",
    "options": [
      "모든 사용자 요구가 충족됐음을 증명한다.",
      "누락된 요구사항을 모두 자동 발견한다.",
      "실행되지 않은 코드 구조를 식별해 추가 테스트 설계를 안내한다.",
      "테스트 베이시스 없이 기대 결과를 만든다."
    ],
    "answer": [
      2
    ],
    "explanation": "구조 커버리지는 테스트가 실행한 코드 요소와 공백을 객관적으로 보여 주어 추가 테스트를 도출하는 데 도움을 준다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-26",
    "set": "prediction-14",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.3",
    "level": "K2",
    "text": "체크리스트 기반 테스팅에서 서로 다른 테스터가 같은 항목을 다르게 시험할 수 있는 이유는?",
    "options": [
      "체크리스트는 보통 상위 수준 지침이어서 테스터가 경험과 맥락으로 구체화하기 때문이다.",
      "각 항목에 모든 입력과 절차가 완전히 고정되어 있기 때문이다.",
      "체크리스트는 기대 결과를 사용할 수 없기 때문이다.",
      "테스터는 발견 내용을 기록하면 안 되기 때문이다."
    ],
    "answer": [
      0
    ],
    "explanation": "체크리스트는 세부 테스트 케이스보다 추상적일 수 있어 수행자가 항목을 해석하고 다양한 테스트를 도출할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-27",
    "set": "prediction-14",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.1",
    "level": "K2",
    "text": "오류 추정에서 “0으로 나누기” 사례를 선택할 근거로 가장 적절한 것은?",
    "options": [
      "무작위 입력만 허용하는 규칙",
      "요구사항의 모든 문장을 무시하려는 목적",
      "코드의 구문 수만 높이려는 목적",
      "계산 기능에서 개발자가 분모 0 처리를 자주 빠뜨린다는 과거 경험"
    ],
    "answer": [
      3
    ],
    "explanation": "오류 추정은 흔한 실수, 과거 장애와 결함 분포, 도메인 지식을 활용해 실패 가능성이 높은 조건을 예상한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-28",
    "set": "prediction-14",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.2",
    "level": "K2",
    "text": "A: “환불은 구매 후 7일 이내만 허용한다.” B: “Given 구매 후 3일, When 환불 요청, Then 승인한다.” 두 인수 조건의 형식은?",
    "options": [
      "A와 B 모두 규칙 지향",
      "A는 규칙 지향, B는 시나리오 지향",
      "A와 B 모두 시나리오 지향",
      "A는 시나리오 지향, B는 규칙 지향"
    ],
    "answer": [
      1
    ],
    "explanation": "A는 검증할 비즈니스 규칙을 직접 표현하고, B는 Given/When/Then 흐름의 구체적 예를 사용한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-29",
    "set": "prediction-14",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.1",
    "level": "K2",
    "text": "사용자 스토리의 “대화”가 중요한 이유는?",
    "options": [
      "고객이 개발자 없이 구현하기 때문이다.",
      "문서화와 인수 조건을 전부 금지하기 때문이다.",
      "카드의 짧은 문구만으로 부족한 세부사항과 예를 협업으로 발견하기 때문이다.",
      "스토리를 테스트 불가능하게 만들기 때문이다."
    ],
    "answer": [
      2
    ],
    "explanation": "사용자 스토리의 카드·대화·확인 중 대화는 다양한 관점으로 세부사항과 예, 인수 조건을 구체화한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-30",
    "set": "prediction-14",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.1",
    "level": "K1",
    "text": "가능성 3, 영향 5인 리스크 수준을 곱셈으로 계산하면?",
    "options": [
      "15",
      "8",
      "2",
      "35"
    ],
    "answer": [
      0
    ],
    "explanation": "리스크 수준을 가능성과 영향의 곱으로 정한 경우 3×5=15이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-31",
    "set": "prediction-14",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.7",
    "level": "K2",
    "text": "테스트 사분면에서 비즈니스 관점으로 제품을 비평하며 수행하는 탐색적·사용성·인수 테스팅은 주로 어디에 속하는가?",
    "options": [
      "Q4만",
      "Q1",
      "Q2만",
      "Q3"
    ],
    "answer": [
      3
    ],
    "explanation": "Q3은 비즈니스 관점에서 제품을 비평하는 사분면으로 탐색적, 사용성 및 사용자 인수 테스팅 등이 포함된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-32",
    "set": "prediction-14",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.4",
    "level": "K3",
    "text": "첫 12개 테스트 케이스 작성에 18시간이 걸렸다. 같은 복잡도의 80개를 비율로 추정하면 총 작성 시간은?",
    "options": [
      "98시간",
      "120시간",
      "144시간",
      "62시간"
    ],
    "answer": [
      1
    ],
    "explanation": "케이스당 18÷12=1.5시간이므로 80개에는 80×1.5=120시간이 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-33",
    "set": "prediction-14",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.5",
    "level": "K3",
    "text": "남은 실행 시간은 3시간이며 테스트는 나눌 수 없다. A(리스크 15, 4시간), B(12, 1시간), C(10, 2시간)일 때 가장 많은 리스크를 우선 다루는 선택은?",
    "options": [
      "C만",
      "B만",
      "B와 C",
      "A"
    ],
    "answer": [
      2
    ],
    "explanation": "A는 시간 제약 때문에 실행할 수 없고, B와 C를 함께 실행하면 3시간 안에 합계 리스크 22를 다룰 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-34",
    "set": "prediction-14",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.5.1",
    "level": "K3",
    "text": "요구사항은 “빈 장바구니에서는 결제 버튼이 비활성화된다”이다. 빈 장바구니에서 버튼이 활성화되고 클릭 시 HTTP 500이 발생했다. 가장 완전한 결함 보고는?",
    "options": [
      "빌드·브라우저와 빈 장바구니 사전조건, 클릭 단계, 기대한 비활성 상태, 실제 HTTP 500·오류 ID, 화면과 로그 증거를 기록한다.",
      "“결제 안 됨”이라는 제목과 심각도만 기록한다.",
      "HTTP 500 화면만 첨부하고 재현 조건과 기대 결과는 생략한다.",
      "요구사항 문장만 복사하고 실제 결과는 개발자가 찾게 한다."
    ],
    "answer": [
      0
    ],
    "explanation": "재현 가능한 결함 보고서는 식별 정보, 환경·사전조건, 단계, 기대 결과와 실제 결과, 영향·심각도 및 관련 증거를 구체적으로 포함한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-35",
    "set": "prediction-14",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.2",
    "level": "K2",
    "text": "“검색 결과에서 개인정보가 노출될 가능성”과 “핵심 테스터가 퇴사할 가능성”의 분류는?",
    "options": [
      "각각 프로젝트 리스크와 제품 리스크",
      "둘 다 제품 리스크",
      "둘 다 프로젝트 리스크",
      "각각 제품 리스크와 프로젝트 리스크"
    ],
    "answer": [
      3
    ],
    "explanation": "개인정보 노출은 제품 품질 실패 가능성이고 핵심 인력 손실은 프로젝트 수행 능력을 위협한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-36",
    "set": "prediction-14",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.4",
    "level": "K2",
    "text": "외부 결제 서비스 중단 위험에 대비해 대체 결제 제공자로 전환하는 절차를 미리 준비했다. 대응은?",
    "options": [
      "리스크를 테스트로 제거",
      "비상 계획",
      "리스크 은폐",
      "결함 보고 생략"
    ],
    "answer": [
      1
    ],
    "explanation": "위험이 현실화됐을 때 영향을 줄이기 위해 미리 준비한 대체 절차는 비상 계획에 해당한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-37",
    "set": "prediction-14",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.2",
    "level": "K2",
    "text": "같은 테스트 결과를 경영진과 기술팀에 보고할 때 적절한 방식은?",
    "options": [
      "경영진에게만 모든 스택 추적을 제공한다.",
      "두 독자 모두에게 설명 없이 원시 로그만 보낸다.",
      "경영진에는 품질·사업 리스크와 결정 사항을, 기술팀에는 상세 실패·로그와 조치 정보를 제공한다.",
      "기술팀에는 실패 정보를 숨긴다."
    ],
    "answer": [
      2
    ],
    "explanation": "테스트 보고서는 독자의 역할과 의사결정 필요에 맞게 요약 수준, 형식과 기술적 세부사항을 조정해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-38",
    "set": "prediction-14",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.4.1",
    "level": "K2",
    "text": "결함이 특정 브라우저에서만 재현된다. 형상 관리 정보가 도울 수 있는 것은?",
    "options": [
      "실행 당시 브라우저·운영체제·빌드·테스트 데이터 버전을 식별한다.",
      "결함의 심각도를 자동으로 0으로 만든다.",
      "모든 환경을 동일하다고 가정한다.",
      "과거 실행 증거를 삭제한다."
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 환경과 제품·테스트웨어 버전을 식별하면 결과를 재현하고 차이의 원인을 추적할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-39",
    "set": "prediction-14",
    "chapter": "6장 테스트 도구",
    "lo": "6.1.1",
    "level": "K2",
    "text": "요구사항과 테스트 케이스 사이의 연결 및 커버리지 공백을 관리하는 도구 유형은?",
    "options": [
      "컴파일러만",
      "부하 생성 도구만",
      "화면 캡처 도구만",
      "테스트 관리 도구"
    ],
    "answer": [
      3
    ],
    "explanation": "테스트 관리 도구는 요구사항, 테스트 케이스, 실행 결과와 결함의 추적성 및 진행·커버리지 보고를 지원할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P14-40",
    "set": "prediction-14",
    "chapter": "6장 테스트 도구",
    "lo": "6.2.1",
    "level": "K1",
    "text": "테스트 자동화가 제공할 수 있는 이점은?",
    "options": [
      "잘못 설계한 테스트도 자동으로 올바르게 바꾼다.",
      "동일한 절차를 반복 가능하게 실행하고 객관적인 실행 기록을 남긴다.",
      "제품 변경 후 스크립트 수정을 불필요하게 한다.",
      "자동 결과의 해석 오류를 완전히 방지한다."
    ],
    "answer": [
      1
    ],
    "explanation": "자동화는 반복 가능성과 일관성, 실행 로그 제공을 개선할 수 있지만 테스트 설계와 유지보수, 결과 해석의 필요성을 없애지는 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-01",
    "set": "prediction-15",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.2",
    "level": "K1",
    "text": "품질 관리와 대비되는 품질 보증의 초점은?",
    "options": [
      "사용자 화면의 성능 측정만",
      "개별 테스트 실행의 실제 결과만 기록",
      "발견된 결함의 코드 수정",
      "적절한 프로세스가 수립되고 준수되는지에 대한 신뢰 제공"
    ],
    "answer": [
      3
    ],
    "explanation": "품질 보증은 좋은 프로세스가 제품 품질 달성에 기여한다는 신뢰를 주기 위한 프로세스 지향 활동이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-02",
    "set": "prediction-15",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.2",
    "level": "K1",
    "text": "전체 팀 접근법에서도 유지될 수 있는 것은?",
    "options": [
      "품질에 대한 개발자의 책임 면제",
      "테스트 전문성과 필요한 수준의 독립적 관점",
      "테스터와 비즈니스 담당자의 대화 금지",
      "모든 팀원이 동일한 기술만 보유해야 한다는 규칙"
    ],
    "answer": [
      1
    ],
    "explanation": "전체 팀이 품질 책임을 공유하더라도 전문 역할과 테스트 전문성, 상황에 필요한 독립적 관점은 유지될 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-03",
    "set": "prediction-15",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.2",
    "level": "K2",
    "text": "API 테스트가 잘못된 상태 코드를 관찰한 뒤 개발자가 로그를 분석해 누락된 예외 처리를 수정했다. 활동 구분은?",
    "options": [
      "상태 코드 관찰은 테스팅, 원인 분석과 수정은 디버깅",
      "두 활동 모두 품질 보증",
      "상태 코드 관찰은 디버깅, 수정은 테스팅",
      "두 활동 모두 테스트 계획"
    ],
    "answer": [
      0
    ],
    "explanation": "테스팅은 실패를 드러내고 정보를 제공하며, 디버깅은 원인을 찾아 결함을 제거하는 개발 활동이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-04",
    "set": "prediction-15",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.1",
    "level": "K2",
    "text": "테스트 완료 보고서가 잔여 결함과 미충족 출구 조건을 보여 주었다. 제품 성공에 기여하는 방식은?",
    "options": [
      "테스트팀이 사업 결정을 단독으로 내린다.",
      "제품이 무결함임을 자동 증명한다.",
      "출시 여부와 추가 조치에 대한 근거 기반 결정을 지원한다.",
      "모든 잔여 리스크를 숨겨 일정 준수를 보장한다."
    ],
    "answer": [
      2
    ],
    "explanation": "정확한 품질·리스크 정보는 이해관계자가 출시, 수정, 추가 테스트 또는 리스크 수용을 합리적으로 결정하도록 돕는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-05",
    "set": "prediction-15",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.2",
    "level": "K2",
    "text": "안전 필수 철도 제어 시스템에서 일반 콘텐츠 사이트보다 리뷰와 독립 테스트를 강화한 이유는?",
    "options": [
      "철도 시스템은 동적 테스트를 수행할 수 없기 때문이다.",
      "콘텐츠 사이트에는 테스트가 법적으로 금지되기 때문이다.",
      "테스트 활동은 시스템 위험과 무관하기 때문이다.",
      "실패 영향과 규제 등 테스트 맥락이 더 엄격한 접근을 요구하기 때문이다."
    ],
    "answer": [
      3
    ],
    "explanation": "제품 위험, 규제 요구, 도메인과 실패 영향 같은 맥락 요인은 테스트 범위·철저함·독립성과 기법에 영향을 준다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-06",
    "set": "prediction-15",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.3",
    "level": "K2",
    "text": "“고위험 결제 요구사항의 테스트 완료 여부를 요약한 문서”는 어느 활동을 지원하는 테스트웨어인가?",
    "options": [
      "테스트 분석 활동의 테스트 조건만",
      "테스트 완료 활동의 테스트 완료 보고서",
      "테스트 구현 활동의 실행 스크립트만",
      "디버깅 활동의 수정 소스 코드"
    ],
    "answer": [
      1
    ],
    "explanation": "테스트 완료 보고서는 수행 결과, 완료 기준, 품질 평가와 잔여 리스크를 요약하여 테스트 완료 활동을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-07",
    "set": "prediction-15",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.1",
    "level": "K2",
    "text": "결함 회의에서 테스터가 상대방의 관점을 듣고 관찰 사실과 추정을 구분해 설명했다. 가장 관련 있는 역량은?",
    "options": [
      "적극적 경청과 분석적·비판적 사고",
      "소스 코드 암기만",
      "갈등 회피를 위한 정보 은폐",
      "도메인 지식의 의도적 배제"
    ],
    "answer": [
      0
    ],
    "explanation": "경청과 비판적 사고는 다른 관점을 이해하고 사실·가정·추론을 구분해 건설적으로 소통하는 데 도움을 준다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-08",
    "set": "prediction-15",
    "chapter": "1장 테스트 기초",
    "lo": "1.3.1",
    "level": "K2",
    "text": "쇼핑 앱에서는 사용성 테스트를 강조하고 암호화 모듈에서는 보안·구조 테스트를 강조했다. 관련 원리는?",
    "options": [
      "완전한 테스팅이 가능하다.",
      "결함 집중만 적용된다.",
      "테스팅은 상황에 의존한다.",
      "테스트 마모 때문에 같은 기법만 사용한다."
    ],
    "answer": [
      2
    ],
    "explanation": "적절한 테스트 접근법은 테스트 대상, 품질 위험, 도메인과 목적에 따라 달라진다는 상황 의존 원리의 사례다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-09",
    "set": "prediction-15",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.2",
    "level": "K1",
    "text": "개발 수명주기 전반의 좋은 관행을 보여 주는 활동 연결은?",
    "options": [
      "모든 테스트 레벨에서 동일한 결함만 찾는다.",
      "시스템 설계 중에는 테스트 베이시스를 검토하지 않는다.",
      "코드 작성이 끝날 때까지 테스트 계획을 금지한다.",
      "요구사항을 정의할 때 인수 테스트 분석도 시작한다."
    ],
    "answer": [
      3
    ],
    "explanation": "개발 작업 산출물이 만들어질 때 대응 테스트 활동을 조기에 시작하면 베이시스 결함과 테스트 가능성 문제를 빠르게 발견할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-10",
    "set": "prediction-15",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.3",
    "level": "K1",
    "text": "“주어진 계정 잔액에서 송금할 때 기대 결과”를 Given/When/Then으로 먼저 합의하는 접근법은?",
    "options": [
      "구문 테스팅",
      "BDD",
      "유지보수 테스팅",
      "인스펙션"
    ],
    "answer": [
      1
    ],
    "explanation": "BDD는 기대 행위를 구체적인 예와 Given/When/Then 형식으로 표현하여 공통 이해와 구현을 안내한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-11",
    "set": "prediction-15",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.1",
    "level": "K2",
    "text": "순차적 수명주기에서 시스템 테스트 분석을 요구사항 단계부터 시작할 때의 이점은?",
    "options": [
      "테스트 베이시스의 결함을 조기에 발견하고 후반 실행을 미리 준비한다.",
      "시스템 테스트 실행을 요구사항 문서에서 직접 수행한다.",
      "구현 이후의 모든 테스트를 제거한다.",
      "개발 단계 간 추적성을 없앤다."
    ],
    "answer": [
      0
    ],
    "explanation": "순차 모델에서도 대응 테스트 레벨의 분석·설계를 조기에 시작하면 베이시스 결함과 테스트 가능성 문제를 빠르게 발견할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-12",
    "set": "prediction-15",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.6",
    "level": "K2",
    "text": "회고에서 “요구사항 예제 워크숍 덕분에 재작업이 감소했다”는 데이터가 나왔다. 적절한 활용은?",
    "options": [
      "워크숍을 즉시 중단한다.",
      "좋은 결과는 개선 대상이 아니므로 기록에서 삭제한다.",
      "효과적인 관행으로 유지·확대하고 다음 반복에서도 효과를 측정한다.",
      "재작업 수치를 결함 보고서와 무관하게 조작한다."
    ],
    "answer": [
      2
    ],
    "explanation": "회고는 문제뿐 아니라 잘 작동한 관행도 식별하여 유지·확대하고 지속적으로 효과를 확인하는 데 사용한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-13",
    "set": "prediction-15",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.1",
    "level": "K2",
    "text": "운영 담당자가 실제 업무 절차로 새 재고 시스템의 준비 상태를 확인한다. 가장 알맞은 테스트 레벨은?",
    "options": [
      "정적 코드 분석",
      "컴포넌트 테스팅",
      "컴포넌트 통합 테스팅",
      "인수 테스팅"
    ],
    "answer": [
      3
    ],
    "explanation": "인수 테스팅은 사용자·운영·계약·규제 관점에서 전체 시스템이 배포와 사용 준비가 되었는지 확인한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-14",
    "set": "prediction-15",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.3",
    "level": "K2",
    "text": "결함 수정 직후 확인 테스트는 통과했지만 다음 날 야간 회귀 테스트가 실패했다. 의미는?",
    "options": [
      "확인과 회귀 테스트는 같으므로 결과가 모순이다.",
      "원래 결함은 수정됐을 수 있으나 변경이 다른 기능에 부작용을 만들었을 수 있다.",
      "회귀 실패는 항상 테스트 도구 결함이다.",
      "확인 테스트 통과는 모든 부작용 부재를 증명한다."
    ],
    "answer": [
      1
    ],
    "explanation": "확인 테스팅은 특정 수정의 성공을 확인하고 회귀 테스팅은 변경으로 인한 다른 영역의 부작용을 찾는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-15",
    "set": "prediction-15",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.1",
    "level": "K1",
    "text": "정적 테스팅으로 검사할 수 있는 작업 산출물은?",
    "options": [
      "사용자 스토리의 인수 조건",
      "실행 중 네트워크 지연 그 자체",
      "운영 중 CPU 사용률의 시간 변화만",
      "사용자의 실제 클릭 반응시간만"
    ],
    "answer": [
      0
    ],
    "explanation": "사용자 스토리와 인수 조건 같은 읽을 수 있는 작업 산출물은 리뷰를 통해 정적으로 검사할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-16",
    "set": "prediction-15",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.1",
    "level": "K1",
    "text": "프로토타입을 조기에 보여 주고 사용자 피드백을 자주 받는 이점은?",
    "options": [
      "사용자의 품질 책임을 없앤다.",
      "모든 결함을 자동 수정한다.",
      "사용자의 기대와 설계 차이를 구현이 굳기 전에 발견한다.",
      "실제 성능 측정을 영구히 대체한다."
    ],
    "answer": [
      2
    ],
    "explanation": "조기·빈번한 피드백은 요구와 해결책의 불일치를 빠르게 드러내고 변경 비용과 잘못된 방향의 위험을 줄인다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-17",
    "set": "prediction-15",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.3",
    "level": "K2",
    "text": "정적 분석과 동적 테스트가 발견하기 쉬운 문제의 연결로 옳은 것은?",
    "options": [
      "둘 다 소스 없이 미사용 변수 검출",
      "정적 분석—실제 사용성 만족도, 동적 테스트—문서 철자 오류만",
      "둘 다 실행 없이 응답시간 측정",
      "정적 분석—도달 불가능 코드, 동적 테스트—실행 시 메모리 부족 실패"
    ],
    "answer": [
      3
    ],
    "explanation": "정적 분석은 코드를 실행하지 않고 구조적 이상을 찾고, 동적 테스트는 실행 중 자원 사용과 실패를 관찰할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-18",
    "set": "prediction-15",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.2",
    "level": "K2",
    "text": "리뷰 계획 활동에서 정해야 할 내용으로 가장 적절한 것은?",
    "options": [
      "발견 결함의 수정 코드 전체",
      "범위·목적·산출물·리뷰 유형·참가자·일정과 출구 조건",
      "동적 부하 테스트의 실제 응답시간",
      "제품 출시 후 판매 가격"
    ],
    "answer": [
      1
    ],
    "explanation": "리뷰 계획에서는 목적과 범위, 대상 산출물, 특성·리스크, 리뷰 유형, 역할·참가자, 일정 및 출구 조건 등을 정한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-19",
    "set": "prediction-15",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.1.1",
    "level": "K2",
    "text": "결정 테이블과 오류 추정의 기법 범주를 올바르게 연결한 것은?",
    "options": [
      "결정 테이블은 블랙박스, 오류 추정은 경험 기반",
      "둘 다 화이트박스",
      "결정 테이블은 경험 기반, 오류 추정은 블랙박스",
      "둘 다 정적 분석"
    ],
    "answer": [
      0
    ],
    "explanation": "결정 테이블은 명세의 조건·행동을 사용하는 블랙박스 기법이고 오류 추정은 지식과 경험을 사용하는 경험 기반 기법이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-20",
    "set": "prediction-15",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.1",
    "level": "K3",
    "text": "배송 무게가 0kg 이하면 거절, 0초과~5kg은 소형, 5초과~20kg은 중형, 20kg 초과는 대형이다. 각 분할 대표값 집합은?",
    "options": [
      "{-1,0,5,20}",
      "{0,5,20,21}",
      "{0,3,10,25}",
      "{3,5,10,20}"
    ],
    "answer": [
      2
    ],
    "explanation": "분할은 0 이하, 0 초과~5, 5 초과~20, 20 초과이며 0·3·10·25가 각각 하나를 대표한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-21",
    "set": "prediction-15",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.2",
    "level": "K3",
    "text": "정수 입력은 100~999만 유효하다. 2값 경계값 분석에 필요한 값은?",
    "options": [
      "{98,99,1000,1001}",
      "{100,999}",
      "{99,100,101,998,999,1000}",
      "{99,100,999,1000}"
    ],
    "answer": [
      3
    ],
    "explanation": "두 경계에서 인접한 두 분할의 가장 가까운 값인 99·100과 999·1000을 선택한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-22",
    "set": "prediction-15",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.3",
    "level": "K3",
    "text": "무료 배송 규칙은 “VIP이거나 주문액이 10만원 이상이면 무료, 단 해외 배송은 항상 유료”이다. 무료 배송 조합은?",
    "options": [
      "해외·VIP·주문액 12만원",
      "국내·일반회원·주문액 12만원",
      "해외·일반회원·주문액 15만원",
      "국내·일반회원·주문액 5만원"
    ],
    "answer": [
      1
    ],
    "explanation": "해외 배송이 아니면서 VIP 또는 10만원 이상 조건을 만족해야 하므로 첫 조합만 무료이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-23",
    "set": "prediction-15",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.4",
    "level": "K3",
    "text": "구독 상태는 체험중, 활성, 일시정지, 해지이다. 체험중→활성, 활성↔일시정지, 활성→해지, 일시정지→해지가 정의된다. 유효하지 않은 전이는?",
    "options": [
      "체험중→일시정지",
      "체험중→활성",
      "일시정지→활성",
      "활성→해지"
    ],
    "answer": [
      0
    ],
    "explanation": "체험중 상태에서 정의된 전이는 활성으로의 전환뿐이므로 일시정지로 직접 이동할 수 없다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-24",
    "set": "prediction-15",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.3",
    "level": "K3",
    "text": "인수 조건은 “로그인 5회 실패 시 계정을 잠그고 잠금 안내를 보낸다”이다. 직접 도출한 테스트는?",
    "options": [
      "로그인 없이 비밀번호 변경 화면만 확인한다.",
      "4회 실패 후 성공 로그인만 확인한다.",
      "활성 계정으로 연속 5회 실패 후 잠금 상태와 안내 발송을 모두 확인한다.",
      "잠금과 무관한 프로필 사진 업로드를 확인한다."
    ],
    "answer": [
      2
    ],
    "explanation": "사전 활성 상태에서 5회 실패라는 조건과 계정 잠금 및 안내 발송이라는 두 결과를 함께 검증해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-25",
    "set": "prediction-15",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.1",
    "level": "K2",
    "text": "현재 테스트는 모든 실행문을 적어도 한 번 수행했다. 구문 테스팅 관점에서 다음 조치로 가장 적절한 것은?",
    "options": [
      "구문 수와 무관하게 커버리지를 0%로 보고한다.",
      "제품에 결함이 없다고 선언한다.",
      "모든 테스트를 영구 삭제한다.",
      "구문 커버리지 목표가 달성됐는지 확인하고 다른 기법으로 남은 위험을 보완한다."
    ],
    "answer": [
      3
    ],
    "explanation": "모든 실행문이 수행되면 100% 구문 커버리지이지만 결함 부재나 다른 구조·요구 위험의 충족을 보장하지 않으므로 추가 기법이 필요할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-26",
    "set": "prediction-15",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.2",
    "level": "K2",
    "text": "분기 테스트가 구문 테스트보다 더 강한 이유는?",
    "options": [
      "분기 테스트는 모든 경로를 항상 실행하기 때문이다.",
      "100% 분기 커버리지는 100% 구문 커버리지를 포함하지만 그 역은 성립하지 않기 때문이다.",
      "구문 테스트는 코드를 실행하지 않기 때문이다.",
      "분기 테스트는 명세만 사용하기 때문이다."
    ],
    "answer": [
      1
    ],
    "explanation": "모든 분기 결과를 실행하면 관련 구문도 실행되지만 모든 구문을 실행했다고 해서 모든 분기 결과가 실행된 것은 아니다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-27",
    "set": "prediction-15",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.2",
    "level": "K2",
    "text": "탐색 중 예상 밖의 환율 반올림을 발견해 즉시 여러 통화와 소수 자릿수를 추가 시험했다. 보여 주는 특징은?",
    "options": [
      "실행에서 얻은 학습이 다음 테스트 설계를 바로 안내한다.",
      "모든 테스트가 실행 전에 완전히 고정된다.",
      "관찰 결과는 차터와 무관하므로 버린다.",
      "탐색적 테스팅은 결과를 기록하지 않는다."
    ],
    "answer": [
      0
    ],
    "explanation": "탐색적 테스팅에서는 학습·설계·실행이 함께 진행되어 새 정보가 다음 테스트 아이디어와 우선순위에 즉시 반영된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-28",
    "set": "prediction-15",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.3",
    "level": "K2",
    "text": "“오류 메시지가 원인과 해결 방법을 알려 주는가?”라는 체크리스트 항목을 적용하는 방식은?",
    "options": [
      "오류 메시지와 무관한 성능만 측정한다.",
      "항목 문장만 읽고 실행 없이 무조건 통과한다.",
      "여러 오류 상황을 만들어 메시지의 명확성과 도움 정도를 평가한다.",
      "체크리스트 항목을 결과와 함께 삭제한다."
    ],
    "answer": [
      2
    ],
    "explanation": "체크리스트 항목은 테스터가 경험과 맥락을 활용해 구체적인 테스트 조건과 사례로 해석하여 수행한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-29",
    "set": "prediction-15",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.1",
    "level": "K2",
    "text": "사용자 스토리 작성 워크숍에서 테스터가 기여하기 가장 적절한 내용은?",
    "options": [
      "스토리의 확인 조건을 의도적으로 제거한다.",
      "비즈니스 가치 논의를 금지한다.",
      "개발자와 고객 없이 최종 요구를 단독 승인한다.",
      "경계·예외·검증 가능성을 질문해 구체적인 예와 인수 조건을 만든다."
    ],
    "answer": [
      3
    ],
    "explanation": "테스터는 테스트 관점의 질문과 예를 제공해 모호함을 줄이고 스토리를 이해 가능하고 검증 가능하게 만드는 데 기여한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-30",
    "set": "prediction-15",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.1",
    "level": "K1",
    "text": "결함 처리 상태의 추세를 보여 주는 테스트 지표는?",
    "options": [
      "회의 참석자의 평균 나이",
      "기간별 신규·해결·미해결 결함 수",
      "제품 광고 문구 길이",
      "개발 장비의 구매 가격만"
    ],
    "answer": [
      1
    ],
    "explanation": "시간에 따른 신규·해결·미해결 결함 수와 심각도 분포는 품질 상태와 결함 처리 진척을 모니터링하는 지표가 될 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-31",
    "set": "prediction-15",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.3",
    "level": "K2",
    "text": "진입 조건이 충족되지 않았지만 테스트를 시작해야 한다면 적절한 행동은?",
    "options": [
      "관련 위험과 영향을 평가하고 이해관계자의 합의·예외 결정을 기록한다.",
      "조건을 충족한 것으로 조용히 바꾼다.",
      "모든 진입 조건과 리스크 기록을 삭제한다.",
      "영향 분석 없이 무조건 출시한다."
    ],
    "answer": [
      0
    ],
    "explanation": "진입 조건 미충족은 자동 금지나 무시가 아니라 위험·대안·영향을 평가하고 권한 있는 이해관계자가 예외 여부를 결정하도록 해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-32",
    "set": "prediction-15",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.4",
    "level": "K3",
    "text": "낙관 6일, 최빈 9일, 비관 18일일 때 세 점 추정 E=(낙관+4×최빈+비관)÷6은?",
    "options": [
      "9일",
      "11일",
      "10일",
      "13일"
    ],
    "answer": [
      2
    ],
    "explanation": "(6+4×9+18)÷6=60÷6=10일이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-33",
    "set": "prediction-15",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.5",
    "level": "K3",
    "text": "가용 시간은 4시간이다. A(리스크 18, 3시간), B(14, 2시간), C(9, 1시간), D(8, 2시간)일 때 합계 리스크를 가장 크게 다루는 조합은?",
    "options": [
      "C와 D",
      "B와 D",
      "B와 C",
      "A와 C"
    ],
    "answer": [
      3
    ],
    "explanation": "A와 C는 4시간에 합계 리스크 27이며, B+D는 22, B+C는 23, C+D는 17이므로 가장 크다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-34",
    "set": "prediction-15",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.5.1",
    "level": "K3",
    "text": "요구사항은 “유효하지 않은 파일은 업로드하지 않고 이유를 표시한다”이다. .exe 파일이 저장됐고 안내가 없었다. 적절한 결함 보고 내용은?",
    "options": [
      "“업로드 이상”이라는 제목만 쓴다.",
      "빌드·브라우저, .exe 파일 조건, 업로드 단계, 기대한 거절·안내, 실제 저장·무안내 결과와 로그를 기록한다.",
      "파일 이름과 실제 결과를 생략한다.",
      "기대 결과 없이 개발자에게 직접 재현을 맡긴다."
    ],
    "answer": [
      1
    ],
    "explanation": "완전한 결함 보고서는 환경과 입력, 재현 단계, 기대·실제 결과, 영향과 증거를 포함해 조사와 재현을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-35",
    "set": "prediction-15",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.3",
    "level": "K2",
    "text": "복구 실패의 영향과 가능성이 모두 높게 평가되었다. 테스트 철저함에 미치는 영향은?",
    "options": [
      "장애·백업·복원·데이터 무결성 시나리오와 관련 커버리지를 강화한다.",
      "정상 시작 화면만 확인한다.",
      "복구 테스트를 저위험으로 분류해 제외한다.",
      "모든 영역에 위험과 무관하게 같은 노력만 배정한다."
    ],
    "answer": [
      0
    ],
    "explanation": "높은 제품 리스크는 관련 테스트 범위, 우선순위, 데이터·시나리오 다양성, 기법과 커버리지 수준을 높이는 근거가 된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-36",
    "set": "prediction-15",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.4",
    "level": "K2",
    "text": "보안 완화 조치를 적용한 뒤 침투 테스트 결과와 신규 취약점 추이를 계속 검토하는 목적은?",
    "options": [
      "테스트를 중단하는 리스크 수용",
      "리스크 기록을 삭제하는 리스크 은폐",
      "완화 조치의 효과를 확인하고 변화하거나 새로 나타난 리스크를 식별하는 리스크 모니터링",
      "모든 책임을 사용자에게 이전"
    ],
    "answer": [
      2
    ],
    "explanation": "리스크 모니터링은 완화 조치가 효과적인지 확인하고 평가 정보를 갱신하며 새롭게 나타나는 리스크를 식별한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-37",
    "set": "prediction-15",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.3",
    "level": "K2",
    "text": "고위험 성능 기준은 미달이지만 전체 통과율은 96%이다. 가장 적절한 상태 보고는?",
    "options": [
      "모든 테스트가 끝날 때까지 아무도 알리지 않는다.",
      "96%만 강조하고 성능 미달은 숨긴다.",
      "원시 로그만 보내고 의미를 설명하지 않는다.",
      "통과율과 함께 미달한 고위험 기준, 사용자 영향, 불확실성 및 필요한 결정을 명시한다."
    ],
    "answer": [
      3
    ],
    "explanation": "상태 소통은 총괄 수치뿐 아니라 목표·리스크 관점의 편차, 영향과 필요한 조치를 독자에게 시기적절하게 전달해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-38",
    "set": "prediction-15",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.4.1",
    "level": "K2",
    "text": "테스트 결과가 어떤 테스트 데이터 버전으로 생성됐는지 기록하지 않았다. 발생하는 문제는?",
    "options": [
      "결함이 자동으로 수정된다.",
      "동일 조건 재현과 결과 비교·감사가 어려워진다.",
      "테스트 커버리지가 자동으로 100%가 된다.",
      "제품 요구사항이 자동 승인된다."
    ],
    "answer": [
      1
    ],
    "explanation": "형상 항목의 버전을 식별하지 않으면 실행 조건과 증거의 무결성을 보장하기 어렵고 결과를 재현·비교하기 힘들다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-39",
    "set": "prediction-15",
    "chapter": "6장 테스트 도구",
    "lo": "6.1.1",
    "level": "K2",
    "text": "테스트 데이터 생성 도구가 특히 유용한 상황은?",
    "options": [
      "개인정보를 노출하지 않으면서 다양한 경계·형식·대용량 데이터를 반복 생성해야 할 때",
      "리뷰 회의의 심리적 안전을 자동 보장할 때",
      "모든 기대 결과를 사람 없이 결정할 때",
      "제품 리스크를 삭제할 때"
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 데이터 도구는 필요한 조건과 규모의 데이터를 효율적으로 만들거나 마스킹하여 반복 가능성과 개인정보 보호를 지원할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P15-40",
    "set": "prediction-15",
    "chapter": "6장 테스트 도구",
    "lo": "6.2.1",
    "level": "K1",
    "text": "자동 테스트웨어 유지보수를 계획하지 않았을 때의 리스크는?",
    "options": [
      "야간 무인 실행이 가능해질 수 있다.",
      "반복 실행 속도가 빨라질 수 있다.",
      "제품 변경과 맞지 않는 스크립트가 잘못된 실패나 통과 결과를 낼 수 있다.",
      "결과 로그가 일관되게 생성될 수 있다."
    ],
    "answer": [
      2
    ],
    "explanation": "자동화 스크립트는 제품과 환경 변화에 맞춰 유지해야 하며, 방치하면 오탐·미탐과 신뢰 하락 및 유지보수 부채가 발생할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-01",
    "set": "prediction-13",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.1",
    "level": "K1",
    "text": "테스터가 주문 취소 흐름의 장애를 출시 전에 발견했다. 이 활동이 달성하는 테스트 목적은?",
    "options": [
      "개발자의 업무 성과를 평가한다.",
      "결함을 드러내고 관련 품질 리스크를 낮춘다.",
      "모든 미래 장애가 사라졌음을 증명한다.",
      "테스터가 코드를 직접 수정할 권한을 얻는다."
    ],
    "answer": [
      1
    ],
    "explanation": "출시 전 장애를 관찰하면 원인이 되는 결함을 처리하고 사용자에게 미칠 품질 리스크를 낮출 기회를 제공한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-02",
    "set": "prediction-13",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.2",
    "level": "K1",
    "text": "품질 보증 활동에 해당하는 것은?",
    "options": [
      "경계값 테스트 데이터를 생성한다.",
      "회원가입 테스트를 실행해 실제 결과를 기록한다.",
      "실패 원인을 찾아 프로그램을 수정한다.",
      "조직의 테스트 프로세스가 표준에 맞게 정의·적용되는지 평가한다."
    ],
    "answer": [
      3
    ],
    "explanation": "품질 보증은 프로세스가 적절히 정의되고 적용되는지를 평가하고 개선하는 프로세스 지향 활동이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-03",
    "set": "prediction-13",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.1",
    "level": "K2",
    "text": "새 세금 규칙을 개발자·업무 담당자·테스터가 예제로 검토한 뒤 구현했다. 성공에 기여하는 테스팅 관행은?",
    "options": [
      "조기에 협업해 서로 다른 관점으로 요구사항의 오해를 줄였다.",
      "구현 전에는 실행할 코드가 없으므로 아무 테스트 활동도 할 수 없다.",
      "테스터가 세금 규칙의 최종 소유자가 되었다.",
      "검토를 했으므로 동적 테스트는 불필요하다."
    ],
    "answer": [
      0
    ],
    "explanation": "조기 테스트와 이해관계자 협업은 요구사항의 모호함과 오해를 구현 전에 발견해 제품 성공 가능성을 높인다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-04",
    "set": "prediction-13",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.3",
    "level": "K2",
    "text": "피로한 분석가가 소수점 규칙을 잘못 이해해 잘못된 요구사항을 작성했다. 인과관계의 올바른 설명은?",
    "options": [
      "잘못 이해한 행위는 결함이고 문서는 장애이다.",
      "피로는 장애이고 잘못된 요구사항은 오류이다.",
      "피로는 근본 원인이 될 수 있고, 잘못 이해한 행위는 오류이며, 잘못된 요구사항은 결함이다.",
      "문서 결함은 실행하지 않아도 항상 사용자 장애이다."
    ],
    "answer": [
      2
    ],
    "explanation": "근본 원인은 사람의 오류를 유발할 수 있고, 그 오류로 작업 산출물에 결함이 만들어질 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-05",
    "set": "prediction-13",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.4",
    "level": "K2",
    "text": "요구사항 R7이 변경되었다. 추적성이 잘 유지된 경우 가장 먼저 확인하기 쉬운 것은?",
    "options": [
      "R7을 작성한 사람의 근무 일정",
      "R7과 연결된 테스트 조건·케이스·결과 중 영향받는 항목",
      "모든 프로젝트의 결함 총수",
      "제품과 무관한 도구 라이선스 가격"
    ],
    "answer": [
      1
    ],
    "explanation": "테스트 베이시스와 테스트웨어 사이의 양방향 추적성은 변경 영향 분석과 커버리지 평가를 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-06",
    "set": "prediction-13",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.1",
    "level": "K2",
    "text": "테스트 실행 활동에 가장 직접적으로 해당하는 것은?",
    "options": [
      "프로젝트 전체 테스트 접근법을 선택한다.",
      "테스트 조건을 커버리지 항목으로 구체화한다.",
      "완료 보고서와 교훈을 작성한다.",
      "준비된 테스트 절차를 수행하고 실제 결과와 이상을 기록한다."
    ],
    "answer": [
      3
    ],
    "explanation": "테스트 실행에서는 절차를 수행하고 실제 결과를 기대 결과와 비교하며 이상을 기록한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-07",
    "set": "prediction-13",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.1",
    "level": "K2",
    "text": "테스터가 모호한 환불 규칙의 가정을 질문하고, 재현 증거를 비난 없이 팀에 설명했다. 드러난 역량을 두 개 고르시오.",
    "options": [
      "이해관계자와의 접촉 회피",
      "소스 코드 자동 생성 능력만",
      "도메인 지식 배제",
      "비판적 사고",
      "효과적인 의사소통"
    ],
    "answer": [
      3,
      4
    ],
    "explanation": "가정을 검토하고 근거를 평가하는 것은 비판적 사고이며, 증거를 건설적으로 공유하는 것은 효과적인 의사소통이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-08",
    "set": "prediction-13",
    "chapter": "1장 테스트 기초",
    "lo": "1.3.1",
    "level": "K2",
    "text": "명세된 기능은 모두 통과했지만 사용자가 실제 업무를 완료할 수 없다. 관련된 테스트 원리는?",
    "options": [
      "오류 부재의 궤변",
      "결함 집중",
      "테스트 마모",
      "완전한 테스팅은 불가능"
    ],
    "answer": [
      0
    ],
    "explanation": "결함이 거의 없더라도 시스템이 사용자의 필요와 비즈니스 목표를 충족하지 못하면 성공적인 제품이라고 할 수 없다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-09",
    "set": "prediction-13",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.2",
    "level": "K1",
    "text": "테스트 레벨을 구분하는 요소로 적절한 것은?",
    "options": [
      "프로그래밍 언어 하나만",
      "테스트 대상, 목적, 베이시스, 결함과 실패, 접근법 및 책임",
      "테스터의 근무 장소만",
      "릴리스의 판매 가격만"
    ],
    "answer": [
      1
    ],
    "explanation": "각 테스트 레벨은 대상과 목적, 테스트 베이시스, 예상 결함·실패, 접근법과 책임 등의 특성으로 구분된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-10",
    "set": "prediction-13",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.3",
    "level": "K1",
    "text": "구현할 코드보다 먼저 실패하는 단위 테스트를 작성하고 이를 통과하도록 코드를 만드는 접근법은?",
    "options": [
      "탐색적 테스팅",
      "BDD",
      "인수 테스팅",
      "TDD"
    ],
    "answer": [
      3
    ],
    "explanation": "TDD는 작은 테스트를 먼저 작성하고 실패를 확인한 뒤, 이를 통과하는 코드를 만들고 리팩터링하는 방식이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-11",
    "set": "prediction-13",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.5",
    "level": "K2",
    "text": "요구사항 예제와 정적 분석을 개발 초기에 수행하는 것이 시프트 레프트인 이유는?",
    "options": [
      "테스트 활동을 더 이른 단계로 옮겨 빠른 피드백과 조기 결함 발견을 얻기 때문이다.",
      "운영 테스트를 왼쪽 화면에서 실행하기 때문이다.",
      "후반 테스트를 모두 삭제하기 때문이다.",
      "개발자만 테스트하도록 역할을 제한하기 때문이다."
    ],
    "answer": [
      0
    ],
    "explanation": "시프트 레프트는 리뷰·분석·자동화 같은 테스트 활동을 수명주기의 앞쪽에서 시작해 결함 전파와 수정 비용을 줄인다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-12",
    "set": "prediction-13",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.6",
    "level": "K2",
    "text": "회고에서 자동 테스트의 잦은 오탐이 피드백을 늦춘다는 사실을 확인했다. 개선 조치로 가장 적절한 것은?",
    "options": [
      "자동 테스트 결과를 팀에 숨긴다.",
      "실패 알림을 전부 끄고 통과로 처리한다.",
      "불안정 테스트의 원인을 분류하고 담당자·기한·오탐 감소 목표를 정해 다음 회고에서 측정한다.",
      "측정 기준 없이 도구를 즉시 교체한다."
    ],
    "answer": [
      2
    ],
    "explanation": "회고의 개선 항목은 관찰된 문제에 대응하며 담당과 기한, 확인 가능한 목표가 있어야 효과를 추적할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-13",
    "set": "prediction-13",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.2",
    "level": "K2",
    "text": "주문 서비스와 결제 서비스 사이의 요청 형식과 오류 처리 상호작용을 검증한다. 가장 알맞은 테스트 레벨은?",
    "options": [
      "컴포넌트 테스팅",
      "컴포넌트 통합 테스팅",
      "시스템 테스팅만",
      "인수 테스팅만"
    ],
    "answer": [
      1
    ],
    "explanation": "컴포넌트 통합 테스팅은 컴포넌트 또는 서비스 사이의 인터페이스와 상호작용을 중점적으로 확인한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-14",
    "set": "prediction-13",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.3.1",
    "level": "K2",
    "text": "운영 데이터베이스 엔진을 교체하기 전 테스트 범위를 정할 때 가장 먼저 필요한 것은?",
    "options": [
      "변경 내용을 보지 않고 전체 시스템 재작성",
      "기존 테스트를 모두 폐기하는 결정",
      "사용자 수와 무관한 화면 색상 변경",
      "변경 부분과 연관 기능·데이터에 대한 영향 분석"
    ],
    "answer": [
      3
    ],
    "explanation": "유지보수 테스트의 범위는 변경의 위험도와 크기, 기존 시스템에 미치는 영향에 대한 분석을 바탕으로 정한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-15",
    "set": "prediction-13",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.1",
    "level": "K1",
    "text": "개발 초기에 이해관계자로부터 자주 피드백을 받을 때의 이점은?",
    "options": [
      "요구사항의 오해와 변경을 일찍 발견해 재작업 위험을 줄인다.",
      "모든 동적 테스트를 없앨 수 있다.",
      "이해관계자의 책임을 개발팀에 넘긴다.",
      "제품이 무결함임을 즉시 증명한다."
    ],
    "answer": [
      0
    ],
    "explanation": "조기·빈번한 피드백은 기대와 구현 사이의 차이, 오해와 변경을 빠르게 드러내어 잘못된 방향으로 진행할 위험을 줄인다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-16",
    "set": "prediction-13",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.1",
    "level": "K1",
    "text": "리뷰 대상으로 적절한 작업 산출물은?",
    "options": [
      "운영 사용자 개인의 감정만",
      "실행 중 CPU 온도만",
      "요구사항 명세서, 테스트 계획, 소스 코드 모두",
      "컴파일된 프로그램의 응답시간만"
    ],
    "answer": [
      2
    ],
    "explanation": "읽고 이해할 수 있는 요구사항, 설계, 코드, 테스트웨어, 계획과 계약 등 다양한 작업 산출물을 리뷰할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-17",
    "set": "prediction-13",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.3",
    "level": "K2",
    "text": "정적 테스팅과 동적 테스팅을 함께 사용하는 이유로 가장 적절한 것은?",
    "options": [
      "두 방법은 항상 동일한 결함만 찾기 때문이다.",
      "문서·코드 자체의 이상과 실행 중 드러나는 실패를 서로 다른 방식으로 찾기 때문이다.",
      "정적 테스팅을 하면 실행 환경이 필요 없어지기 때문이다.",
      "동적 테스팅은 요구사항과 무관하기 때문이다."
    ],
    "answer": [
      1
    ],
    "explanation": "정적 테스팅은 실행 전에 산출물의 결함을 찾고 동적 테스팅은 실행 시 실패를 관찰하므로 상호 보완적이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-18",
    "set": "prediction-13",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.2",
    "level": "K2",
    "text": "공식 리뷰에서 개인 검토가 끝난 직후 일반적으로 수행할 활동은?",
    "options": [
      "테스트 계획을 프로젝트와 무관하게 삭제한다.",
      "수정 확인 없이 산출물을 즉시 폐기한다.",
      "제품을 운영에 강제 배포한다.",
      "참가자들이 발견한 이상을 소통하고 분석해 상태·책임·조치를 결정한다."
    ],
    "answer": [
      3
    ],
    "explanation": "개별 리뷰 후에는 발견 사항을 공유·분석하고 결함 여부, 소유자와 후속 조치를 합의하는 소통 및 분석 활동이 이어진다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-19",
    "set": "prediction-13",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.1.1",
    "level": "K2",
    "text": "과거 장애와 테스터의 직관을 이용해 취약한 입력을 예상했다. 사용한 테스트 기법 범주는?",
    "options": [
      "경험 기반 테스트 기법",
      "블랙박스 테스트 기법만",
      "화이트박스 테스트 기법만",
      "정적 분석 기법"
    ],
    "answer": [
      0
    ],
    "explanation": "오류 추정과 같은 경험 기반 기법은 테스터의 지식, 과거 결함과 직관을 활용해 테스트를 도출한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-20",
    "set": "prediction-13",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.1",
    "level": "K3",
    "text": "할인율은 구매액이 0원 미만이면 무효, 0~49,999원은 0%, 50,000~99,999원은 5%, 100,000원 이상은 10%이다. 모든 동등 분할을 대표하는 값 집합은?",
    "options": [
      "{-1, 0, 50000, 100000}",
      "{0, 49999, 50000, 99999}",
      "{-1, 30000, 70000, 120000}",
      "{30000, 49999, 99999, 100000}"
    ],
    "answer": [
      2
    ],
    "explanation": "네 분할은 음수 무효, 0~49,999, 50,000~99,999, 100,000 이상이며 첫 번째 집합은 각 분할에서 하나씩 선택한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-21",
    "set": "prediction-13",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.2",
    "level": "K3",
    "text": "입력 가능한 좌석 수는 정수 1~6이다. 2값 경계값 분석으로 모든 경계를 검사하는 최소 값 집합은?",
    "options": [
      "{1,6}",
      "{0,1,6,7}",
      "{0,1,2,5,6,7}",
      "{-1,0,6,7}"
    ],
    "answer": [
      1
    ],
    "explanation": "2값 경계값 분석에서는 각 경계 자체와 인접 분할의 가장 가까운 값을 사용하므로 0·1과 6·7이 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-22",
    "set": "prediction-13",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.3",
    "level": "K3",
    "text": "대출 규칙은 “성인이며 신용 양호이면 승인, 성인이며 신용 불량이면 보증인이 있을 때만 승인, 미성년자는 거절”이다. 승인되는 조건 조합은?",
    "options": [
      "미성년·신용 불량·보증인 있음",
      "성인·신용 불량·보증인 없음",
      "미성년·신용 양호·보증인 있음",
      "성인·신용 불량·보증인 있음"
    ],
    "answer": [
      3
    ],
    "explanation": "성인이고 신용이 불량한 경우에는 보증인이 있을 때에만 승인 규칙을 만족한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-23",
    "set": "prediction-13",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.4",
    "level": "K3",
    "text": "문서 상태 전이는 초안→검토중→승인됨이며, 검토중에서는 초안으로 반려될 수 있다. 승인됨 이후에는 보관됨으로만 이동한다. 유효하지 않은 전이 순서는?",
    "options": [
      "초안→검토중→승인됨→초안",
      "초안→검토중→초안→검토중",
      "초안→검토중→승인됨→보관됨",
      "초안→검토중→초안"
    ],
    "answer": [
      0
    ],
    "explanation": "승인됨 상태에서는 보관됨으로만 이동할 수 있으므로 승인됨에서 초안으로의 전이는 정의되지 않았다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-24",
    "set": "prediction-13",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.3",
    "level": "K3",
    "text": "인수 조건은 “쿠폰이 유효하고 최소 주문액 이상이면 할인하고 쿠폰을 사용 처리한다”이다. 이 조건을 직접 검증하는 테스트는?",
    "options": [
      "쿠폰 없이 주문하고 결제 성공만 확인한다.",
      "유효한 쿠폰으로 최소 주문액 미만 주문 후 배송지만 확인한다.",
      "유효한 쿠폰과 최소 주문액 이상 주문에서 할인액과 쿠폰 사용 상태를 모두 확인한다.",
      "사용 완료 쿠폰으로 로그인 성능만 측정한다."
    ],
    "answer": [
      2
    ],
    "explanation": "인수 테스트는 주어진 유효 쿠폰과 주문액 조건, 할인 행동, 쿠폰 상태 변경이라는 기대 결과를 함께 확인해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-25",
    "set": "prediction-13",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.1",
    "level": "K2",
    "text": "실행문 60개 중 테스트 스위트가 45개를 실행했다. 구문 커버리지는?",
    "options": [
      "25%",
      "75%",
      "45%",
      "80%"
    ],
    "answer": [
      1
    ],
    "explanation": "구문 커버리지는 실행된 구문 수를 전체 구문 수로 나눈 값이므로 45÷60×100=75%이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-26",
    "set": "prediction-13",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.2",
    "level": "K2",
    "text": "분기 커버리지 100%가 의미하는 것은?",
    "options": [
      "결함이 더 이상 존재하지 않는다.",
      "모든 가능한 실행 경로가 수행되었다.",
      "모든 입력 조합이 검사되었다.",
      "각 결정의 모든 분기 결과가 적어도 한 번 실행되었다."
    ],
    "answer": [
      3
    ],
    "explanation": "100% 분기 커버리지는 각 결정 결과를 모두 실행했음을 뜻하지만 모든 경로나 결함 부재를 보장하지 않는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-27",
    "set": "prediction-13",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.1",
    "level": "K2",
    "text": "과거에 날짜 형식과 윤년 처리에서 결함이 많았던 시스템을 다시 시험한다. 오류 추정을 가장 잘 적용한 것은?",
    "options": [
      "2월 29일, 잘못된 구분자, 빈 날짜와 같은 취약 사례를 추가한다.",
      "명세에서 임의의 정상 예 하나만 선택한다.",
      "소스 코드의 모든 분기를 계산만 한다.",
      "이전 결함 정보는 편향이므로 폐기한다."
    ],
    "answer": [
      0
    ],
    "explanation": "오류 추정은 과거 결함, 개발자의 실수 경향과 도메인 지식을 이용해 실패 가능성이 높은 사례를 선택한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-28",
    "set": "prediction-13",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.2",
    "level": "K2",
    "text": "60분 탐색적 테스트 세션을 효과적으로 관리하는 방법은?",
    "options": [
      "실행 전에 모든 세부 절차를 고정해 학습을 반영하지 않는다.",
      "아무 목표나 기록 없이 무작위로 클릭한다.",
      "목표와 범위를 차터로 정하고 발견·아이디어·시간 사용을 기록한 뒤 디브리핑한다.",
      "발견한 이상을 보고하지 않는다."
    ],
    "answer": [
      2
    ],
    "explanation": "세션 기반 테스트 관리는 차터, 시간 상자, 세션 기록과 디브리핑으로 탐색의 자율성과 책임성을 함께 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-29",
    "set": "prediction-13",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.1",
    "level": "K2",
    "text": "사용자 스토리를 개발하기 전 고객·개발자·테스터가 예시와 인수 조건을 함께 논의했다. 가장 큰 이점은?",
    "options": [
      "고객이 모든 테스트를 혼자 작성하게 한다.",
      "서로 다른 관점으로 스토리의 공통 이해와 테스트 가능성을 높인다.",
      "인수 조건 없이 구현을 시작하게 한다.",
      "테스터가 비즈니스 결정을 단독 승인하게 한다."
    ],
    "answer": [
      1
    ],
    "explanation": "협업 기반 사용자 스토리 작성은 비즈니스·개발·테스트 관점을 결합해 모호함을 줄이고 검증 가능한 인수 조건을 만든다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-30",
    "set": "prediction-13",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.2",
    "level": "K1",
    "text": "릴리스 계획 회의에서 테스터가 제공할 수 있는 가치는?",
    "options": [
      "테스트 범위와 무관하게 출시일을 보장한다.",
      "비즈니스 우선순위를 혼자 최종 승인한다.",
      "개발자의 구현 방법을 모두 대신 결정한다.",
      "품질 리스크·테스트 가능성·테스트 노력에 관한 정보를 제공한다."
    ],
    "answer": [
      3
    ],
    "explanation": "테스터는 계획 단계에서 리스크, 테스트 가능성, 테스트 접근법·노력과 완료 기준에 대한 관점을 제공해 현실적인 계획에 기여한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-31",
    "set": "prediction-13",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.3",
    "level": "K2",
    "text": "출구 조건으로 “치명 결함 0개, 고위험 요구사항 테스트 100% 완료”를 정한 이유는?",
    "options": [
      "테스트 종료 판단을 목표와 리스크에 연결된 측정 가능한 기준으로 만들기 위해서이다.",
      "모든 결함이 영원히 없음을 증명하기 위해서이다.",
      "진행 상황을 보고하지 않기 위해서이다.",
      "테스트 실행 순서를 무작위로 정하기 위해서이다."
    ],
    "answer": [
      0
    ],
    "explanation": "출구 조건은 완료 여부와 품질 상태를 객관적으로 평가하도록 측정 가능한 테스트 목표 및 리스크 기준을 제공한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-32",
    "set": "prediction-13",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.4",
    "level": "K3",
    "text": "한 테스트 작업의 낙관값 4시간, 최빈값 7시간, 비관값 16시간이다. 세 점 추정 E=(낙관+4×최빈+비관)÷6의 결과는?",
    "options": [
      "7시간",
      "9시간",
      "8시간",
      "11시간"
    ],
    "answer": [
      2
    ],
    "explanation": "(4+4×7+16)÷6=48÷6=8시간이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-33",
    "set": "prediction-13",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.5",
    "level": "K3",
    "text": "리스크 수준이 큰 테스트를 먼저 하되 선행 조건을 지킨다. A(리스크 9, B 이후), B(6, 독립), C(8, 독립), D(7, C 이후)의 순서는?",
    "options": [
      "B → A → C → D",
      "C → D → B → A",
      "C → B → A → D",
      "A → C → D → B"
    ],
    "answer": [
      1
    ],
    "explanation": "처음 가능한 B와 C 중 C의 리스크가 더 크다. C 이후 D가 가능해지며 D, B, 그리고 B에 의존하는 A 순서가 된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-34",
    "set": "prediction-13",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.5.1",
    "level": "K3",
    "text": "검색 버튼을 누르면 8초 뒤 결과가 나오지만 요구사항은 2초 이내이다. 가장 유용한 결함 보고 제목과 증거는?",
    "options": [
      "“요구사항이 틀림”과 개발자 이름만",
      "“검색이 느림”이라는 제목만",
      "“성능 오류”와 화면 색상 캡처만",
      "“검색 응답시간 2초 기준 초과—동일 데이터 5회 평균 8.1초”와 환경·데이터·측정 로그"
    ],
    "answer": [
      3
    ],
    "explanation": "구체적인 기능, 기대 기준과 실제 측정값을 제목·결과에 담고 재현 환경과 증거를 제공하면 분석과 우선순위 판단에 유용하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-35",
    "set": "prediction-13",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.3",
    "level": "K2",
    "text": "개인정보 노출 가능성이 매우 낮지만 영향이 치명적이라고 평가됐다. 테스트 접근법에 미칠 수 있는 영향은?",
    "options": [
      "높은 영향도를 고려해 보안 전문성·독립성·관련 커버리지를 강화한다.",
      "가능성이 낮으므로 기록 없이 테스트에서 제외한다.",
      "모든 기능에 같은 깊이의 테스트만 적용한다.",
      "보안과 무관한 정상 화면 하나만 확인한다."
    ],
    "answer": [
      0
    ],
    "explanation": "제품 리스크 수준과 특성은 테스트 범위, 철저함, 기법, 인력의 전문성 및 독립 수준을 정하는 근거가 된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-36",
    "set": "prediction-13",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.2",
    "level": "K2",
    "text": "완료 보고서에서 “테스트 95% 통과”만 제시했을 때 추가로 필요한 정보는?",
    "options": [
      "보고서 작성자의 취미",
      "통과한 테스트 이름 하나만",
      "미실행·실패 항목, 잔여 결함과 리스크, 완료 기준 달성 여부",
      "프로젝트와 무관한 전체 소스 코드"
    ],
    "answer": [
      2
    ],
    "explanation": "통과율만으로는 출시 판단이 어렵다. 범위와 편차, 실패·미실행, 잔여 결함·리스크 및 완료 기준을 함께 설명해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-37",
    "set": "prediction-13",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.3",
    "level": "K2",
    "text": "결제 API 환경 장애로 고위험 테스트 30건이 차단되어 출구 조건 달성이 지연되고 있다. 상태 전달 문장으로 가장 적절한 것은?",
    "options": [
      "“전체적으로 조금 늦지만 아마 괜찮다.”",
      "“고위험 결제 테스트 30건이 환경 장애로 차단됐고 출구 조건은 미달이다. 수요일까지 환경 복구 결정이 필요하며 일정 영향은 2일로 예상한다.”",
      "“실행률 72%”라는 숫자만 전달한다.",
      "장애가 해결될 때까지 이해관계자에게 알리지 않는다."
    ],
    "answer": [
      1
    ],
    "explanation": "효과적인 상태 소통은 대상 독자에게 현재 상태, 원인, 품질·일정 영향, 불확실성과 필요한 결정을 구체적이고 시기적절하게 전달한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-38",
    "set": "prediction-13",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.4.1",
    "level": "K2",
    "text": "승인된 테스트 케이스 기준선이 변경되었다. 형상 관리상 올바른 처리는?",
    "options": [
      "모든 과거 실행 결과를 새 버전에 자동 연결한다.",
      "기존 버전을 추적 불가능하게 덮어쓴다.",
      "변경 이유와 승인자를 삭제한다.",
      "변경을 식별·통제하고 새 버전과 승인 이력, 관련 결과의 연결을 보존한다."
    ],
    "answer": [
      3
    ],
    "explanation": "형상 관리는 테스트웨어의 버전과 변경 이력을 통제하고 관련 제품 버전·실행 결과와의 추적성을 유지한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-39",
    "set": "prediction-13",
    "chapter": "6장 테스트 도구",
    "lo": "6.1.1",
    "level": "K2",
    "text": "테스트 실행 자동화 도구를 사용할 때 생길 수 있는 리스크는?",
    "options": [
      "취약한 스크립트 유지보수와 도구에 대한 비현실적인 기대가 비용을 키울 수 있다.",
      "반복 실행 속도가 빨라질 수 있다.",
      "결과 비교가 일관될 수 있다.",
      "야간에 무인 실행할 수 있다."
    ],
    "answer": [
      0
    ],
    "explanation": "자동화에는 초기 투자, 스크립트 유지보수, 도구 종속과 과도한 기대 같은 리스크가 있으며 조직적·기술적 관리가 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P13-40",
    "set": "prediction-13",
    "chapter": "6장 테스트 도구",
    "lo": "6.2.1",
    "level": "K1",
    "text": "잘못된 기대 결과를 자동 스크립트에 구현했는데 반복 실행이 모두 통과했다. 드러난 자동화 리스크는?",
    "options": [
      "통과 횟수가 많으면 테스트 설계가 자동 검증된다.",
      "자동 실행은 항상 기대 결과 오류를 스스로 수정한다.",
      "결함 있는 자동 검사가 반복되어 잘못된 품질 신뢰를 줄 수 있다.",
      "자동화하면 테스트웨어 리뷰가 불가능해진다."
    ],
    "answer": [
      2
    ],
    "explanation": "자동화는 작성된 검사를 빠르게 반복할 뿐 그 검사가 올바름을 보장하지 않으므로 잘못된 설계가 거짓 신뢰를 만들 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-01",
    "set": "prediction-17",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.1",
    "level": "K1",
    "text": "계약상 기능 충족 여부를 확인하는 테스트 목적은?",
    "options": [
      "명시된 계약 요구사항의 충족 여부를 검증한다.",
      "계약 내용을 테스터가 임의로 변경한다.",
      "모든 사용자의 미래 행동을 예측한다.",
      "결함 수정 코드를 직접 배포한다."
    ],
    "answer": [
      0
    ],
    "explanation": "테스팅의 목적에는 명시된 요구사항과 계약·법규 요구의 충족 여부를 검증하는 것이 포함된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-02",
    "set": "prediction-17",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.2",
    "level": "K1",
    "text": "전체 팀 접근법에서 제품 책임자의 기여로 적절한 것은?",
    "options": [
      "개발자와 테스터의 협업을 금지한다.",
      "모든 테스트 실행을 테스터에게 숨긴다.",
      "비즈니스 가치와 인수 조건을 명확히 하고 품질 논의에 참여한다.",
      "기술적 결함을 직접 모두 수정한다."
    ],
    "answer": [
      2
    ],
    "explanation": "제품 책임자와 비즈니스 담당자는 가치·요구·인수 조건에 대한 지식을 제공하여 팀의 공통 품질 책임에 기여한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-03",
    "set": "prediction-17",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.3",
    "level": "K2",
    "text": "모호한 시간대 요구를 분석가가 잘못 해석해 코드에 잘못된 변환 규칙이 들어갔고 사용자에게 하루 전 날짜가 보였다. 연결은?",
    "options": [
      "모호한 요구는 장애이고 날짜 오표시는 근본 원인이다.",
      "모호한 요구는 근본 원인, 잘못된 해석은 오류, 변환 규칙은 결함, 날짜 오표시는 장애가 될 수 있다.",
      "잘못된 해석은 장애이고 코드는 오류이다.",
      "코드 결함은 실행 전에도 항상 사용자 장애이다."
    ],
    "answer": [
      1
    ],
    "explanation": "근본 원인이 사람의 오류를 유발하고, 오류가 산출물 결함을 만들며, 결함이 실행될 때 관찰 가능한 장애로 나타날 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-04",
    "set": "prediction-17",
    "chapter": "1장 테스트 기초",
    "lo": "1.3.1",
    "level": "K2",
    "text": "가능한 입력 조합이 수십억 개라 모두 실행할 수 없다. 적용해야 할 원리는?",
    "options": [
      "입력 수가 많으면 테스트를 생략한다.",
      "모든 조합을 실행할 때까지 출시를 무기한 연기한다.",
      "한 정상 입력만으로 무결함을 증명한다.",
      "완전한 테스팅은 불가능하므로 리스크와 우선순위에 따라 표본을 선택한다."
    ],
    "answer": [
      3
    ],
    "explanation": "사소한 경우를 제외하면 모든 조합과 경로를 시험하는 것은 불가능하므로 위험·우선순위와 기법을 이용해 테스트를 선택한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-05",
    "set": "prediction-17",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.1",
    "level": "K2",
    "text": "요구사항에서 테스트 가능한 특징을 찾아 우선순위가 있는 테스트 조건으로 만드는 활동은?",
    "options": [
      "테스트 분석",
      "테스트 구현",
      "테스트 실행",
      "테스트 완료"
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 분석은 테스트 베이시스를 검토하고 테스트 가능한 특징과 조건을 식별·우선순위화한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-06",
    "set": "prediction-17",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.2",
    "level": "K2",
    "text": "짧은 프로토타입 프로젝트가 상세 문서보다 탐색적 테스트와 빠른 피드백을 많이 사용한 이유는?",
    "options": [
      "프로토타입에는 결함이 생기지 않기 때문이다.",
      "모든 프로젝트는 같은 테스트웨어를 의무적으로 사용하기 때문이다.",
      "기간·개발 방식·문서 수준 같은 맥락에 맞춰 프로세스를 조정했기 때문이다.",
      "탐색적 테스트는 계획과 목적이 필요 없기 때문이다."
    ],
    "answer": [
      2
    ],
    "explanation": "테스트 활동과 형식성은 수명주기, 기간, 위험, 팀과 사용 가능한 베이시스 등 프로젝트 맥락에 맞춰 조정된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-07",
    "set": "prediction-17",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.4",
    "level": "K2",
    "text": "결함 D12를 실패한 테스트와 원래 요구사항에 연결했을 때 가장 유용한 것은?",
    "options": [
      "결함 심각도가 자동으로 0이 된다.",
      "결함 영향과 수정 후 재시험할 범위를 추적할 수 있다.",
      "요구사항 작성자가 자동 변경된다.",
      "테스트 데이터가 필요 없어지게 된다."
    ],
    "answer": [
      1
    ],
    "explanation": "요구사항·테스트·결과·결함 사이 추적성은 영향 분석, 커버리지 평가와 확인·회귀 테스트 선택을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-08",
    "set": "prediction-17",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.3",
    "level": "K2",
    "text": "외부 독립 테스트팀이 늦게 참여해 제품 맥락을 충분히 알지 못했다. 가능한 단점은?",
    "options": [
      "외부 팀은 다른 관점을 가질 수 없다.",
      "독립성이 있으면 모든 결함을 자동 발견한다.",
      "개발팀의 품질 책임이 법적으로 사라진다.",
      "학습과 의사소통 비용 때문에 피드백이 늦거나 부정확할 수 있다."
    ],
    "answer": [
      3
    ],
    "explanation": "높은 독립성은 새 관점을 주지만 제품 지식 부족, 고립과 의사소통 장벽이라는 단점이 생길 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-09",
    "set": "prediction-17",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.2",
    "level": "K1",
    "text": "수명주기와 무관하게 적용되는 관행은?",
    "options": [
      "각 테스트 레벨의 목적에 맞는 테스트 베이시스를 정한다.",
      "테스트는 운영 장애 후에만 시작한다.",
      "모든 레벨에서 같은 환경만 쓴다.",
      "개발 산출물과 테스트를 연결하지 않는다."
    ],
    "answer": [
      0
    ],
    "explanation": "각 레벨의 목적과 대상에 적합한 베이시스를 정하고 개발 활동과 테스트 활동을 연결하는 관행은 여러 수명주기에 적용된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-10",
    "set": "prediction-17",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.3",
    "level": "K1",
    "text": "작은 실패 테스트 작성→최소 코드 구현→리팩터링의 반복은?",
    "options": [
      "워크스루",
      "ATDD",
      "TDD",
      "상태 전이 테스팅"
    ],
    "answer": [
      2
    ],
    "explanation": "TDD는 구현 전에 단위 테스트를 쓰고 통과할 최소 코드를 만든 뒤 리팩터링하는 짧은 주기를 반복한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-11",
    "set": "prediction-17",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.1",
    "level": "K2",
    "text": "증분 개발에서 각 증분마다 시스템 테스트와 회귀 테스트를 수행하는 이유는?",
    "options": [
      "첫 증분 이후에는 변경이 발생하지 않기 때문이다.",
      "새 기능의 품질과 기존 기능과의 통합 영향을 지속적으로 확인하기 위해서이다.",
      "최종 증분에서만 제품이 실행 가능하기 때문이다.",
      "증분 사이 추적성을 없애기 위해서이다."
    ],
    "answer": [
      1
    ],
    "explanation": "증분마다 제품이 성장하고 통합되므로 새 기능 확인과 누적된 기존 기능에 대한 회귀 테스트가 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-12",
    "set": "prediction-17",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.4",
    "level": "K2",
    "text": "DevOps 환경에서 테스터가 운영 모니터링 데이터에 관심을 가져야 하는 이유는?",
    "options": [
      "모니터링은 기능·성능과 무관하기 때문이다.",
      "운영 데이터가 모든 사전 테스트를 대체하기 때문이다.",
      "운영팀만 품질 책임을 갖기 때문이다.",
      "실사용 실패와 품질 추세를 피드백으로 받아 테스트와 리스크 평가를 개선할 수 있기 때문이다."
    ],
    "answer": [
      3
    ],
    "explanation": "DevOps는 개발·테스트·운영의 빠른 피드백을 장려하며 운영 정보는 실제 위험과 테스트 개선에 유용하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-13",
    "set": "prediction-17",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.2",
    "level": "K2",
    "text": "브라우저 종류별 화면 동작을 비교하는 테스트 유형은?",
    "options": [
      "호환성 테스팅",
      "컴포넌트 테스팅",
      "확인 테스팅",
      "정적 리뷰"
    ],
    "answer": [
      0
    ],
    "explanation": "호환성 테스팅은 서로 다른 하드웨어·소프트웨어·브라우저·운영체제 환경에서의 상호운용과 동작을 평가하는 비기능 테스트 유형이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-14",
    "set": "prediction-17",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.3.1",
    "level": "K2",
    "text": "운영체제 업그레이드 뒤 유지보수 테스트 범위에 포함할 내용은?",
    "options": [
      "업그레이드 전 결과를 자동 통과 처리",
      "새 기능이 없으므로 테스트 없음",
      "업그레이드와 직접 관련된 호환성 확인 및 영향받는 기능의 회귀 테스트",
      "광고 페이지 문구만 검토"
    ],
    "answer": [
      2
    ],
    "explanation": "환경 변경도 유지보수 테스트 트리거이며 변경 적합성과 기존 기능에 미친 부작용을 확인해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-15",
    "set": "prediction-17",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.1",
    "level": "K1",
    "text": "실행 전에 정적 테스팅으로 함께 검토할 수 있는 조합은?",
    "options": [
      "실행 중 응답시간·메모리 사용량·전력 소비량",
      "화면 와이어프레임·API 명세·탐색 테스트 차터",
      "실사용자의 클릭 속도·표정·만족도",
      "운영 장애의 실제 복구시간만"
    ],
    "answer": [
      1
    ],
    "explanation": "와이어프레임, API 명세와 테스트 차터는 읽고 이해할 수 있는 작업 산출물이므로 실행 없이 리뷰할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-16",
    "set": "prediction-17",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.5",
    "level": "K1",
    "text": "리뷰의 성공 가능성을 높이는 관리 행동은?",
    "options": [
      "항상 가장 공식적인 유형만 사용한다.",
      "발견 결함 수로 개인을 처벌한다.",
      "리뷰 목적을 공개하지 않는다.",
      "참가자에게 충분한 준비 시간과 교육을 제공한다."
    ],
    "answer": [
      3
    ],
    "explanation": "참가자 준비, 교육, 시간 확보와 건설적인 문화 및 관리 지원은 효과적인 리뷰의 성공 요인이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-17",
    "set": "prediction-17",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.2",
    "level": "K2",
    "text": "코딩 전에 인터페이스 설계의 타입 불일치를 리뷰로 찾았다. 정적 테스팅의 가치로 적절한 것은?",
    "options": [
      "후속 코드·테스트에 결함이 전파되기 전에 낮은 비용으로 수정할 수 있다.",
      "실제 네트워크 응답시간을 자동 측정한다.",
      "모든 운영 장애를 재현한다.",
      "동적 테스트의 필요성을 없앤다."
    ],
    "answer": [
      0
    ],
    "explanation": "산출물 결함을 조기에 발견하면 하위 산출물로의 전파와 재작업 비용 및 일정 위험을 줄일 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-18",
    "set": "prediction-17",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.2",
    "level": "K2",
    "text": "리뷰에서 수정이 완료된 뒤 수행할 후속조치로 적절한 것은?",
    "options": [
      "수정 여부와 무관하게 즉시 종료한다.",
      "모든 발견 기록을 삭제한다.",
      "합의한 결함이 처리됐는지 확인하고 리뷰 기준에 따라 결과를 보고한다.",
      "제품 성능 테스트를 리뷰 기록 대신 사용한다."
    ],
    "answer": [
      2
    ],
    "explanation": "수정 및 보고 활동에서는 결함 상태와 조치를 추적하고 출구 조건 충족을 확인하며 결과와 지표를 보고한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-19",
    "set": "prediction-17",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.1.1",
    "level": "K2",
    "text": "경계값 분석과 분기 테스팅의 범주 연결은?",
    "options": [
      "둘 다 경험 기반",
      "경계값 분석은 블랙박스, 분기 테스팅은 화이트박스",
      "경계값 분석은 화이트박스, 분기는 블랙박스",
      "둘 다 비공식 리뷰"
    ],
    "answer": [
      1
    ],
    "explanation": "경계값은 입력·출력 분할 경계를 이용하는 블랙박스 기법이고 분기 테스팅은 코드 제어 흐름을 이용하는 화이트박스 기법이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-20",
    "set": "prediction-17",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.1",
    "level": "K3",
    "text": "회원 등급 점수가 0 미만이면 무효, 0~199는 일반, 200~499는 실버, 500 이상은 골드이다. 각 분할 대표값 집합은?",
    "options": [
      "{100,199,499,500}",
      "{0,199,200,499}",
      "{-1,0,200,500}",
      "{-1,100,300,700}"
    ],
    "answer": [
      3
    ],
    "explanation": "네 분할은 음수 무효, 0~199, 200~499, 500 이상이며 첫 집합이 각각 하나씩 대표한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-21",
    "set": "prediction-17",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.2",
    "level": "K3",
    "text": "유효한 정수 포트 번호가 1024~49151이다. 2값 경계값 분석 집합은?",
    "options": [
      "{1023,1024,49151,49152}",
      "{1024,49151}",
      "{1023,1024,1025,49150,49151,49152}",
      "{1022,1023,49152,49153}"
    ],
    "answer": [
      0
    ],
    "explanation": "각 경계 양쪽의 가장 가까운 값인 1023·1024와 49151·49152를 사용한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-22",
    "set": "prediction-17",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.3",
    "level": "K3",
    "text": "지원 규칙은 “프리미엄 고객은 24시간, 일반 고객은 평일 근무시간에만 채팅, 계정 정지 고객은 항상 거절”이다. 허용 조합은?",
    "options": [
      "일반·활성·일요일 14시",
      "프리미엄·정지·월요일 10시",
      "일반·활성·화요일 14시",
      "일반·정지·수요일 11시"
    ],
    "answer": [
      2
    ],
    "explanation": "활성 일반 고객은 평일 근무시간에 채팅이 허용되며 정지 고객은 등급·시간과 관계없이 거절된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-23",
    "set": "prediction-17",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.4",
    "level": "K3",
    "text": "배송 상태는 준비→발송→배송중→완료이며 배송중에서 실패 시 발송으로 돌아간다. 유효한 왕복 전이 순서는?",
    "options": [
      "준비→배송중→완료",
      "준비→발송→배송중→발송→배송중",
      "발송→준비→배송중",
      "준비→발송→완료"
    ],
    "answer": [
      1
    ],
    "explanation": "첫 순서는 정상 전이 후 배송 실패로 발송 상태에 돌아갔다가 다시 배송중으로 이동하는 정의된 경로다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-24",
    "set": "prediction-17",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.3",
    "level": "K3",
    "text": "인수 조건은 “예약 취소가 출발 24시간 전이면 전액 환불하고 좌석을 다시 판매 가능하게 한다”이다. 적절한 테스트는?",
    "options": [
      "출발 30시간 전 취소 후 환불만 보고 좌석 상태는 보지 않는다.",
      "출발 10시간 전 취소 후 로그인만 확인한다.",
      "예약 없이 노선 검색 속도만 측정한다.",
      "출발 30시간 전 취소 후 전액 환불과 좌석 재판매 상태를 확인한다."
    ],
    "answer": [
      3
    ],
    "explanation": "조건을 충족하는 취소 시점과 전액 환불, 좌석 상태 변경이라는 모든 기대 결과를 함께 검증해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-25",
    "set": "prediction-17",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.1",
    "level": "K2",
    "text": "의사코드가 “합계=0; 프리미엄이면 합계=10; 합계를 출력”이다. 100% 구문 커버리지에 필요한 최소 테스트는?",
    "options": [
      "프리미엄이 참인 테스트 1개",
      "프리미엄이 거짓인 테스트 1개",
      "참과 거짓 테스트 2개가 반드시 필요",
      "어떤 테스트도 필요 없음"
    ],
    "answer": [
      0
    ],
    "explanation": "프리미엄이 참이면 초기화, 조건 내부 대입과 출력 구문을 모두 실행하므로 한 테스트로 100% 구문 커버리지를 달성한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-26",
    "set": "prediction-17",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.2",
    "level": "K2",
    "text": "결정이 6개이고 각 결정의 참·거짓 결과 중 9개를 실행했다. 분기 커버리지는?",
    "options": [
      "9%",
      "66.7%",
      "75%",
      "90%"
    ],
    "answer": [
      2
    ],
    "explanation": "전체 분기 결과는 6×2=12개이며 9÷12×100=75%이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-27",
    "set": "prediction-17",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.1",
    "level": "K2",
    "text": "과거 결함 목록에서 파일 이름의 공백·특수문자 문제가 많았다. 오류 추정 적용은?",
    "options": [
      "파일 이름 결함 이력을 무시한다.",
      "공백·다국어·예약문자·매우 긴 이름을 집중 시험한다.",
      "정상 영문 이름 하나만 반복한다.",
      "코드 커버리지 수치만 보고 입력을 고른다."
    ],
    "answer": [
      1
    ],
    "explanation": "오류 추정은 과거 결함과 흔한 실수를 근거로 실패 가능성이 높은 입력과 상황을 선택한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-28",
    "set": "prediction-17",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.2",
    "level": "K2",
    "text": "탐색 세션 종료 후 디브리핑의 목적은?",
    "options": [
      "모든 탐색을 영구 중단한다.",
      "발견 기록을 삭제한다.",
      "차터와 무관하게 통과만 선언한다.",
      "수행 범위·발견·리스크·후속 아이디어를 공유하고 다음 세션을 조정한다."
    ],
    "answer": [
      3
    ],
    "explanation": "디브리핑은 세션에서 수행한 테스트와 결과, 방해 요소, 위험과 다음 아이디어를 검토해 투명성과 학습을 높인다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-29",
    "set": "prediction-17",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.2",
    "level": "K2",
    "text": "“세금은 배송 국가와 상품 유형의 조합으로 결정한다”는 인수 조건을 명확히 표현하기 좋은 형식은?",
    "options": [
      "조건 조합과 결과를 나열한 결정 테이블 형태의 규칙 지향 형식",
      "기대 결과가 없는 자유 문장",
      "소스 코드 분기 수만 기록",
      "사용자 감정만 적은 시나리오"
    ],
    "answer": [
      0
    ],
    "explanation": "여러 조건 조합과 결과를 다루는 비즈니스 규칙은 결정 테이블 같은 규칙 지향 형식으로 명확하게 표현할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-30",
    "set": "prediction-17",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.2",
    "level": "K1",
    "text": "반복 계획에서 테스터가 사용자 스토리에 기여하는 방식은?",
    "options": [
      "개발자의 모든 작업을 대신 추정한다.",
      "제품 우선순위를 혼자 확정한다.",
      "테스트 가능성·리스크·필요한 테스트 작업과 노력에 대한 의견을 제공한다.",
      "인수 조건을 삭제한다."
    ],
    "answer": [
      2
    ],
    "explanation": "테스터는 계획 중 품질 리스크와 테스트 가능성, 테스트 작업·노력, 의존성과 완료 기준을 논의해 계획의 현실성을 높인다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-31",
    "set": "prediction-17",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.1",
    "level": "K2",
    "text": "테스트 계획에서 의사소통 방식을 정하는 목적은?",
    "options": [
      "결함 정보를 팀 밖에 숨기기 위해서이다.",
      "누가 어떤 상태·리스크 정보를 언제 어떤 형식으로 받을지 합의하기 위해서이다.",
      "모든 회의를 없애기 위해서이다.",
      "제품 요구사항을 자동 생성하기 위해서이다."
    ],
    "answer": [
      1
    ],
    "explanation": "테스트 계획은 이해관계자, 보고 내용·주기·형식과 소통 경로를 정의해 적시에 의사결정을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-32",
    "set": "prediction-17",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.4",
    "level": "K3",
    "text": "25개 테스트에 40시간이 들었다. 같은 복잡도의 90개를 비율로 추정한 시간은?",
    "options": [
      "160시간",
      "130시간",
      "115시간",
      "144시간"
    ],
    "answer": [
      3
    ],
    "explanation": "테스트 하나당 40÷25=1.6시간이며 90×1.6=144시간이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-33",
    "set": "prediction-17",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.5",
    "level": "K3",
    "text": "시간 제한은 5시간이다. A(리스크 20,4시간), B(16,3시간), C(12,2시간), D(7,1시간) 중 합계 리스크가 최대인 조합은?",
    "options": [
      "B와 C",
      "A와 D",
      "B와 D",
      "C와 D"
    ],
    "answer": [
      0
    ],
    "explanation": "B+C는 5시간에 리스크 28로 A+D의 27, B+D의 23, C+D의 19보다 크다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-34",
    "set": "prediction-17",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.5.1",
    "level": "K3",
    "text": "모바일 앱 5.2에서 알림을 누르면 앱이 종료되고 오류 코드 N14가 남았다. 완전한 결함 보고는?",
    "options": [
      "오류 코드 없이 개발자 이름만 쓴다.",
      "“앱 꺼짐”만 기록한다.",
      "기기·OS·앱 빌드, 알림 사전조건과 단계, 기대 화면, 실제 종료·N14, 로그·빈도·영향을 기록한다.",
      "기대 결과와 재현 단계를 생략한다."
    ],
    "answer": [
      2
    ],
    "explanation": "효과적인 결함 보고는 식별 정보, 환경, 사전조건, 재현 단계, 기대·실제 결과, 심각도와 증거를 포함한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-35",
    "set": "prediction-17",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.2",
    "level": "K2",
    "text": "“오프라인 저장 시 데이터 손상 가능성”과 “테스트 환경 납품 지연 가능성”의 분류는?",
    "options": [
      "둘 다 제품 리스크",
      "제품 리스크와 프로젝트 리스크",
      "둘 다 프로젝트 리스크",
      "프로젝트 리스크와 제품 리스크"
    ],
    "answer": [
      1
    ],
    "explanation": "데이터 무결성 실패는 제품 품질 위험이고 환경 납품 지연은 테스트 수행 일정이라는 프로젝트 목표를 위협한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-36",
    "set": "prediction-17",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.4",
    "level": "K2",
    "text": "낮은 수준으로 평가된 표시 오류 리스크를 이해관계자가 수용했다. 적절한 관리는?",
    "options": [
      "발생 시 대응을 금지한다.",
      "리스크를 기록에서 삭제한다.",
      "사용자에게 숨긴다.",
      "수용 근거와 책임을 기록하고 상태 변화와 발생 신호를 모니터링한다."
    ],
    "answer": [
      3
    ],
    "explanation": "리스크 수용은 무시가 아니며 결정과 근거를 기록하고 변화를 모니터링하며 필요하면 대응을 재검토해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-37",
    "set": "prediction-17",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.2",
    "level": "K2",
    "text": "반복 중간에 작성하는 테스트 진행 보고서의 주요 목적은?",
    "options": [
      "현재 상태·편차·장애물·리스크를 알려 제어와 의사결정을 지원한다.",
      "최종 교훈만 보관하고 진행 정보는 숨긴다.",
      "제품 코드를 대신 수정한다.",
      "모든 잔여 결함을 자동 종료한다."
    ],
    "answer": [
      0
    ],
    "explanation": "진행 보고서는 테스트 중 현재 진척, 결과, 편차와 위험을 정기적으로 전달하여 필요한 제어 조치를 돕는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-38",
    "set": "prediction-17",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.4.1",
    "level": "K2",
    "text": "동일한 빌드 이름을 서로 다른 바이너리에 재사용했다. 형상 관리 문제는?",
    "options": [
      "결함 우선순위가 자동 상승한다.",
      "모든 테스트가 자동 통과한다.",
      "제품 버전 식별이 모호해 결과 추적과 재현의 신뢰성이 떨어진다.",
      "테스트 데이터가 필요 없어지게 된다."
    ],
    "answer": [
      2
    ],
    "explanation": "형상 항목은 고유하게 식별되어야 하며 동일 이름 재사용은 어떤 제품이 시험됐는지 증명하기 어렵게 만든다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-39",
    "set": "prediction-17",
    "chapter": "6장 테스트 도구",
    "lo": "6.1.1",
    "level": "K2",
    "text": "정적 분석 도구가 지원할 수 있는 활동은?",
    "options": [
      "실사용자의 만족도를 자동 확정한다.",
      "코드의 미사용 변수·도달 불가능 코드·규칙 위반을 실행 없이 탐지한다.",
      "모든 런타임 성능 실패를 재현한다.",
      "결함 수정 우선순위를 사업 대신 결정한다."
    ],
    "answer": [
      1
    ],
    "explanation": "정적 분석 도구는 산출물을 실행하지 않고 코딩 규칙 위반, 제어·데이터 흐름 이상과 특정 결함 패턴을 찾을 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P17-40",
    "set": "prediction-17",
    "chapter": "6장 테스트 도구",
    "lo": "6.2.1",
    "level": "K1",
    "text": "자동화의 잠재적 이점으로 적절한 것은?",
    "options": [
      "초기 투자와 유지보수를 제거한다.",
      "자동 스크립트의 결함 가능성을 없앤다.",
      "모든 탐색적 테스트를 대체한다.",
      "사람이 수행하기 어려운 대용량·고빈도 검사를 반복 실행할 수 있다."
    ],
    "answer": [
      3
    ],
    "explanation": "자동화는 대량·반복·고빈도 작업을 효율적으로 수행할 수 있지만 스크립트 결함, 투자와 유지보수 및 사람 판단의 필요성은 남는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-01",
    "set": "prediction-18",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.2",
    "level": "K1",
    "text": "조직 차원의 품질 보증 사례는?",
    "options": [
      "한 로그인 테스트의 실제 결과만 기록한다.",
      "여러 프로젝트의 리뷰 절차 효과를 분석해 표준 절차와 교육을 개선한다.",
      "실패한 조건문의 연산자를 수정한다.",
      "특정 결함의 재현 단계만 실행한다."
    ],
    "answer": [
      1
    ],
    "explanation": "품질 보증은 여러 제품에 적용되는 프로세스의 정의·적용·효과를 평가하고 조직적 개선과 교육을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-02",
    "set": "prediction-18",
    "chapter": "1장 테스트 기초",
    "lo": "1.5.2",
    "level": "K1",
    "text": "전체 팀 접근법의 전제는?",
    "options": [
      "제품 품질은 특정 역할만이 아니라 팀 전체의 책임이다.",
      "테스터만 고객과 대화할 수 있다.",
      "개발자는 테스트에 참여하면 안 된다.",
      "모든 독립 테스트를 금지한다."
    ],
    "answer": [
      0
    ],
    "explanation": "전체 팀 접근법은 필요한 기술을 가진 누구나 테스트 활동에 기여하고 팀이 품질 책임을 함께 진다는 전제에 기반한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-03",
    "set": "prediction-18",
    "chapter": "1장 테스트 기초",
    "lo": "1.1.2",
    "level": "K2",
    "text": "테스터가 재현 가능한 장애를 보고했지만 원인은 아직 모른다. 다음 디버깅 단계로 적절한 것은?",
    "options": [
      "실패를 관찰했으므로 이미 디버깅도 완료됐다.",
      "테스터가 장애를 품질 보증 프로세스로 바꾼다.",
      "원인 분석 없이 테스트를 영구 종료한다.",
      "개발자가 원인을 격리하고 결함을 찾아 수정한다."
    ],
    "answer": [
      3
    ],
    "explanation": "디버깅은 관찰된 실패의 원인을 분석해 결함을 찾고 수정한 뒤 수정 결과를 확인하는 개발 활동이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-04",
    "set": "prediction-18",
    "chapter": "1장 테스트 기초",
    "lo": "1.2.1",
    "level": "K2",
    "text": "테스터가 요구사항의 검증 불가능한 표현을 지적해 측정 가능한 기준으로 바꾸게 했다. 기여한 가치는?",
    "options": [
      "테스터가 비즈니스 요구를 단독 결정했다.",
      "모든 구현 결함의 부재를 증명했다.",
      "테스트 가능성과 요구사항 품질을 높여 후속 오해와 결함을 줄였다.",
      "동적 테스트가 필요 없어졌다."
    ],
    "answer": [
      2
    ],
    "explanation": "조기 리뷰와 테스트 관점은 모호하거나 검증 불가능한 요구를 개선해 공통 이해와 제품 성공 가능성을 높인다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-05",
    "set": "prediction-18",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.1",
    "level": "K2",
    "text": "실행 결과가 기대 결과와 다를 때 테스트 실행 중 수행할 작업은?",
    "options": [
      "테스트 계획의 범위를 몰래 변경한다.",
      "차이를 이상으로 기록하고 필요한 정보를 수집한다.",
      "결함 원인 코드를 반드시 직접 수정한다.",
      "추적성을 모두 삭제한다."
    ],
    "answer": [
      1
    ],
    "explanation": "테스트 실행에서는 실제 결과를 비교하고 관찰된 이상과 증거를 기록하여 추가 분석과 결함 보고를 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-06",
    "set": "prediction-18",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.3",
    "level": "K2",
    "text": "“테스트 진행률, 커버리지와 차단 이슈를 매주 요약한 자료”는 어떤 테스트웨어인가?",
    "options": [
      "테스트 진행 보고서",
      "테스트 설계 명세",
      "자동 실행 스크립트",
      "테스트 데이터 세트"
    ],
    "answer": [
      0
    ],
    "explanation": "테스트 진행 보고서는 모니터링 정보와 계획 대비 상태, 결과·리스크·장애물을 주기적으로 전달한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-07",
    "set": "prediction-18",
    "chapter": "1장 테스트 기초",
    "lo": "1.4.5",
    "level": "K2",
    "text": "테스트 관리 역할이 수행하고 테스팅 역할이 지원할 수 있는 활동은?",
    "options": [
      "테스트 결과를 기록하지 않는다.",
      "제품 결함의 소스 코드를 직접 수정한다.",
      "사용자 요구를 단독 승인한다.",
      "완료 기준과 진행 정보를 바탕으로 테스트 제어 조치를 결정한다."
    ],
    "answer": [
      3
    ],
    "explanation": "모니터링 결과로 계획과 실제를 비교하고 우선순위·자원·일정 조치를 결정하는 것은 테스트 관리 역할의 핵심 책임이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-08",
    "set": "prediction-18",
    "chapter": "1장 테스트 기초",
    "lo": "1.3.1",
    "level": "K2",
    "text": "요구사항이 확정되기 전에 예제 리뷰로 중요한 누락을 찾았다. 관련 원리는?",
    "options": [
      "테스트 마모",
      "결함 집중",
      "조기 테스팅은 시간과 비용을 절감한다.",
      "오류 부재의 궤변"
    ],
    "answer": [
      2
    ],
    "explanation": "테스트 활동을 일찍 시작하면 결함이 후속 산출물에 전파되기 전에 발견하여 수정 비용과 일정 위험을 줄일 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-09",
    "set": "prediction-18",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.2",
    "level": "K1",
    "text": "개발 수명주기 전반의 좋은 테스트 관행은?",
    "options": [
      "테스트 분석을 출시 뒤에만 시작한다.",
      "테스트웨어와 관련 작업 산출물 사이의 추적성을 유지한다.",
      "모든 테스트 레벨의 목적을 같게 만든다.",
      "리뷰와 동적 테스트 중 하나만 허용한다."
    ],
    "answer": [
      1
    ],
    "explanation": "개발 산출물과 테스트웨어의 관계를 유지하면 커버리지, 변경 영향과 테스트 목표 달성 여부를 확인할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-10",
    "set": "prediction-18",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.3",
    "level": "K1",
    "text": "테스트 우선 개발 접근법으로만 구성된 묶음은?",
    "options": [
      "TDD·ATDD·BDD",
      "TDD·분기 테스팅·인스펙션",
      "ATDD·성능 테스팅·워크스루",
      "BDD·회귀 테스팅·정적 분석"
    ],
    "answer": [
      0
    ],
    "explanation": "CTFL에서 다루는 테스트 우선 접근법의 예는 테스트 주도 개발(TDD), 인수 테스트 주도 개발(ATDD), 행위 주도 개발(BDD)이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-11",
    "set": "prediction-18",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.5",
    "level": "K2",
    "text": "코드 커밋 전에 정적 분석을 개발자 환경에서 자동 실행한다. 시프트 레프트 효과는?",
    "options": [
      "정적 분석 결과를 검토할 필요가 없게 한다.",
      "운영 중 실제 성능을 완전히 증명한다.",
      "모든 시스템 테스트를 제거한다.",
      "코드 규칙 위반과 일부 결함을 통합 이전에 빠르게 피드백한다."
    ],
    "answer": [
      3
    ],
    "explanation": "정적 분석을 개발 초기에 통합하면 결함을 더 이른 시점에 찾아 수정하고 후속 단계로의 전파를 줄일 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-12",
    "set": "prediction-18",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.1.6",
    "level": "K2",
    "text": "회고에서 정한 개선 조치가 효과적이었는지 판단하는 방법은?",
    "options": [
      "회고 기록을 즉시 삭제한다.",
      "조치 담당자만 바꾸고 결과는 측정하지 않는다.",
      "사전에 정한 지표와 다음 반복의 실제 결과를 비교한다.",
      "좋은 결과만 선택해 보고한다."
    ],
    "answer": [
      2
    ],
    "explanation": "개선 조치는 측정 가능한 목표와 담당자를 두고 후속 반복에서 효과를 확인해야 학습과 지속적 개선으로 이어진다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-13",
    "set": "prediction-18",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.1",
    "level": "K2",
    "text": "전체 시스템과 외부 세금 서비스·결제망 사이의 인터페이스를 검증한다. 테스트 레벨은?",
    "options": [
      "컴포넌트 테스팅",
      "시스템 통합 테스팅",
      "시스템 테스팅만",
      "인수 테스팅만"
    ],
    "answer": [
      1
    ],
    "explanation": "시스템 통합 테스팅은 완성된 시스템과 외부 시스템·서비스 사이의 인터페이스와 상호작용을 중점적으로 확인한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-14",
    "set": "prediction-18",
    "chapter": "2장 SDLC 전반의 테스팅",
    "lo": "2.2.2",
    "level": "K2",
    "text": "동시 사용자 증가 시 응답시간과 처리량을 측정한다. 테스트 유형은?",
    "options": [
      "성능 테스팅",
      "기능 적합성 테스팅만",
      "확인 테스팅",
      "컴포넌트 통합 테스팅"
    ],
    "answer": [
      0
    ],
    "explanation": "성능 테스팅은 부하 조건에서 시간 효율성, 처리량과 자원 사용 등 성능 품질 특성을 평가한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-15",
    "set": "prediction-18",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.1",
    "level": "K1",
    "text": "다음 중 정적 테스팅의 대상이 아닌 것은?",
    "options": [
      "백로그의 인수 조건",
      "아키텍처 구성도",
      "테스트 자동화 스크립트",
      "동영상 재생 중 실제로 측정한 프레임 손실률"
    ],
    "answer": [
      3
    ],
    "explanation": "실행 중 관찰한 프레임 손실률은 동적 측정 결과이다. 구성도·스크립트·인수 조건은 실행하지 않고 리뷰하거나 분석할 수 있는 산출물이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-16",
    "set": "prediction-18",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.3",
    "level": "K1",
    "text": "리뷰 범위와 목적을 정하고 사람·시간을 확보하는 책임을 가진 역할은?",
    "options": [
      "작성자만",
      "기록자",
      "관리자",
      "검토 대상 시스템"
    ],
    "answer": [
      2
    ],
    "explanation": "관리자는 리뷰의 필요와 목적을 정하고 자원·시간을 제공하며 리뷰 정책과 효과를 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-17",
    "set": "prediction-18",
    "chapter": "3장 정적 테스팅",
    "lo": "3.1.3",
    "level": "K2",
    "text": "정적 리뷰와 동적 사용성 테스트의 차이는?",
    "options": [
      "둘 다 반드시 실행 중 장애만 찾는다.",
      "리뷰는 화면 설계의 일관성을 실행 없이 볼 수 있고, 동적 테스트는 실제 사용자의 과업 수행을 관찰한다.",
      "리뷰만 실제 사용 시간을 측정한다.",
      "동적 테스트는 실행할 제품이 필요 없다."
    ],
    "answer": [
      1
    ],
    "explanation": "정적 테스팅은 산출물을 실행하지 않고 평가하며 동적 테스팅은 실행 행동과 결과를 관찰한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-18",
    "set": "prediction-18",
    "chapter": "3장 정적 테스팅",
    "lo": "3.2.4",
    "level": "K2",
    "text": "동료가 코드 변경을 빠르게 확인하며 공식 역할·지표 없이 의견을 남겼다. 리뷰 유형은?",
    "options": [
      "비공식 리뷰",
      "인스펙션",
      "공식 기술 리뷰만",
      "워크스루만"
    ],
    "answer": [
      0
    ],
    "explanation": "비공식 리뷰는 정해진 프로세스나 역할이 거의 없이 동료 검토, 페어링 또는 간단한 의견 형태로 수행될 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-19",
    "set": "prediction-18",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.1.1",
    "level": "K2",
    "text": "체크리스트 기반 테스팅과 결정 테이블 테스팅의 범주는?",
    "options": [
      "둘 다 정적 분석",
      "둘 다 화이트박스",
      "체크리스트는 블랙박스, 결정 테이블은 경험 기반",
      "체크리스트는 경험 기반, 결정 테이블은 블랙박스"
    ],
    "answer": [
      3
    ],
    "explanation": "체크리스트 기반 테스팅은 경험 기반이고 결정 테이블은 명세 조건·행동을 이용하는 블랙박스 기법이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-20",
    "set": "prediction-18",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.1",
    "level": "K3",
    "text": "구독 개월 수가 0 미만이면 무효, 0이면 체험, 1~6은 단기, 7~24는 장기, 25 이상은 기업 계약이다. 모든 동등 분할 대표 집합은?",
    "options": [
      "{-1,0,1,7,25}",
      "{0,1,6,7,25}",
      "{-1,0,3,12,30}",
      "{0,3,6,24,30}"
    ],
    "answer": [
      2
    ],
    "explanation": "분할은 음수 무효, 0, 1~6, 7~24, 25 이상이며 -1·0·3·12·30이 각각 하나를 대표한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-21",
    "set": "prediction-18",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.2",
    "level": "K3",
    "text": "허용 할부 개월 수는 정수 1~24이다. 3값 경계값 분석의 집합은?",
    "options": [
      "{0,1,24,25}",
      "{0,1,2,23,24,25}",
      "{1,2,23,24}",
      "{-1,0,1,24,25,26}"
    ],
    "answer": [
      1
    ],
    "explanation": "하한 주변 0·1·2와 상한 주변 23·24·25를 모두 선택한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-22",
    "set": "prediction-18",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.3",
    "level": "K3",
    "text": "환불 규칙은 “구매 7일 이내이고 미사용이면 환불, 불량품이면 기간·사용 여부와 무관하게 환불”이다. 환불되는 조합은?",
    "options": [
      "구매 20일·사용함·불량품",
      "구매 5일·사용함·정상품",
      "구매 10일·미사용·정상품",
      "구매 20일·미사용·정상품"
    ],
    "answer": [
      0
    ],
    "explanation": "불량품은 기간과 사용 여부에 관계없이 환불된다는 우선 규칙 때문에 첫 조합이 환불된다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-23",
    "set": "prediction-18",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.2.4",
    "level": "K3",
    "text": "심사 상태는 접수→검토→승인 또는 반려이며, 반려에서는 보완 시 접수로 돌아간다. 정의된 전이 순서는?",
    "options": [
      "반려→검토→승인",
      "접수→승인→검토",
      "검토→접수→승인",
      "접수→검토→반려→접수→검토→승인"
    ],
    "answer": [
      3
    ],
    "explanation": "첫 순서는 검토 후 반려, 보완 후 재접수와 재검토·승인이라는 모든 정의된 전이를 따른다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-24",
    "set": "prediction-18",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.3",
    "level": "K3",
    "text": "인수 조건은 “유효한 초대코드 사용 시 회원을 팀에 추가하고 코드를 소진 처리한다”이다. 적절한 테스트는?",
    "options": [
      "코드 없이 프로필 수정만 확인한다.",
      "유효 코드로 로그인 화면 색상만 확인한다.",
      "유효 코드 사용 후 팀 구성원 증가와 코드 재사용 불가를 확인한다.",
      "코드 사용 후 팀 추가만 보고 코드 상태는 확인하지 않는다."
    ],
    "answer": [
      2
    ],
    "explanation": "인수 조건의 유효 코드, 팀 추가와 코드 소진이라는 모든 관찰 가능한 결과를 함께 검증해야 한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-25",
    "set": "prediction-18",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.3.3",
    "level": "K2",
    "text": "구조 커버리지 분석에서 예외 처리 블록이 한 번도 실행되지 않았다. 얻는 가치는?",
    "options": [
      "예외 처리에 결함이 없음을 증명한다.",
      "테스트되지 않은 내부 구조를 찾아 오류 상황 테스트를 추가할 근거가 된다.",
      "모든 요구사항 누락을 자동 발견한다.",
      "동적 테스트가 필요 없게 한다."
    ],
    "answer": [
      1
    ],
    "explanation": "화이트박스 커버리지는 실행되지 않은 코드 요소를 보여 주어 숨은 구조 위험과 추가 테스트 대상을 식별하도록 돕는다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-26",
    "set": "prediction-18",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.1",
    "level": "K2",
    "text": "세션 만료 결함이 자주 발생한 제품에 오류 추정을 적용한 테스트는?",
    "options": [
      "만료 직전·직후 요청, 여러 탭, 장시간 유휴 후 복귀를 시험한다.",
      "새 정상 세션 하나만 확인한다.",
      "과거 세션 결함을 모두 무시한다.",
      "코드 구문 수만 계산한다."
    ],
    "answer": [
      0
    ],
    "explanation": "오류 추정은 과거 결함과 흔한 실패 패턴을 이용해 취약한 시간·동시성 상황을 집중적으로 시험한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-27",
    "set": "prediction-18",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.2",
    "level": "K2",
    "text": "탐색적 테스트 차터가 제공하는 것은?",
    "options": [
      "제품과 무관한 자유 활동만 허용한다.",
      "모든 클릭 순서를 사전에 고정한다.",
      "결과 기록을 금지한다.",
      "세션의 목표와 범위를 안내하면서 학습에 따른 세부 설계 유연성을 남긴다."
    ],
    "answer": [
      3
    ],
    "explanation": "차터는 무엇을 왜 탐색할지 임무를 정의하되 테스터가 실행 중 학습에 따라 테스트를 설계하도록 여지를 준다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-28",
    "set": "prediction-18",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.4.3",
    "level": "K2",
    "text": "체크리스트 항목이 반복적으로 아무 결함도 찾지 못하고 제품 구조도 바뀌었다. 적절한 조치는?",
    "options": [
      "모든 새 결함 정보를 무시한다.",
      "체크리스트를 영구 고정한다.",
      "현재 리스크와 결함 이력에 맞춰 항목을 검토·수정하거나 제거한다.",
      "체크리스트 사용 결과를 기록하지 않는다."
    ],
    "answer": [
      2
    ],
    "explanation": "체크리스트는 새 위험·결함과 제품 변화를 반영해 정기적으로 갱신해야 테스트 마모와 낡은 초점을 피할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-29",
    "set": "prediction-18",
    "chapter": "4장 테스트 분석과 설계",
    "lo": "4.5.1",
    "level": "K2",
    "text": "사용자 스토리의 인수 조건을 고객·개발자·테스터가 함께 예제로 확인하는 이유는?",
    "options": [
      "테스터가 비즈니스 가치를 혼자 결정한다.",
      "서로 다른 관점으로 공통 이해와 테스트 가능한 확인 기준을 만든다.",
      "대화를 없애고 카드 문장만 사용한다.",
      "모든 예외 조건을 의도적으로 제외한다."
    ],
    "answer": [
      1
    ],
    "explanation": "협업과 구체적인 예는 모호한 가정을 드러내고 스토리의 가치·범위와 검증 방법에 대한 공동 이해를 만든다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-30",
    "set": "prediction-18",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.1",
    "level": "K1",
    "text": "요구사항 커버리지를 나타내는 지표는?",
    "options": [
      "하나 이상의 테스트와 연결된 요구사항의 비율",
      "회의 참석자의 수",
      "코드 저장소 용량",
      "제품 광고 클릭률"
    ],
    "answer": [
      0
    ],
    "explanation": "테스트와 연결되거나 실행·통과한 요구사항의 비율은 테스트 베이시스 커버리지 지표로 사용할 수 있다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-31",
    "set": "prediction-18",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.3",
    "level": "K2",
    "text": "진입 조건과 출구 조건의 연결로 옳은 것은?",
    "options": [
      "두 조건은 항상 무시해야 한다.",
      "둘 다 제품 출시 후에만 확인한다.",
      "진입 조건은 결함 수만, 출구 조건은 자원 수만 다룬다.",
      "진입 조건은 활동 시작의 전제, 출구 조건은 활동 완료 판단 기준이다."
    ],
    "answer": [
      3
    ],
    "explanation": "진입 조건은 활동을 시작할 수 있는 상태를, 출구 조건은 목표와 완료 여부를 평가하는 기준을 정의한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-32",
    "set": "prediction-18",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.4",
    "level": "K3",
    "text": "한 기능의 테스트 노력은 개발 노력의 30%였다. 새 기능 개발 추정이 420시간이면 비율 기반 테스트 노력은?",
    "options": [
      "390시간",
      "140시간",
      "126시간",
      "450시간"
    ],
    "answer": [
      2
    ],
    "explanation": "420×0.30=126시간이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-33",
    "set": "prediction-18",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.1.5",
    "level": "K3",
    "text": "우선순위 숫자가 작을수록 먼저이며 의존성을 지킨다. A(1,B 이후), B(2,독립), C(1,D 이후), D(3,독립)의 순서는?",
    "options": [
      "D→C→B→A",
      "B→A→D→C",
      "B→D→A→C",
      "A→B→D→C"
    ],
    "answer": [
      1
    ],
    "explanation": "처음 가능한 B와 D 중 B가 우선이고 이후 A가 가능해 우선순위 1로 실행된다. 다음 D와 D에 의존하는 C 순이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-34",
    "set": "prediction-18",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.5.1",
    "level": "K3",
    "text": "NFC 결제 시 화면은 성공이지만 계좌가 두 번 차감됐다. 가장 유용한 결함 보고는?",
    "options": [
      "기기·OS·앱·거래 ID, NFC 결제 단계, 기대 1회 차감, 실제 2회 차감, 계좌 내역과 로그를 기록한다.",
      "“결제 문제”라고만 쓴다.",
      "거래 ID와 계좌 증거를 삭제한다.",
      "성공 화면만 있으므로 결함을 보고하지 않는다."
    ],
    "answer": [
      0
    ],
    "explanation": "환경과 고유 거래 정보, 단계, 기대·실제 재무 영향 및 증거를 포함해야 재현·조사와 심각도 판단이 가능하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-35",
    "set": "prediction-18",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.2",
    "level": "K2",
    "text": "“추천 정확도 저하 가능성”과 “테스트 예산 삭감 가능성”의 분류는?",
    "options": [
      "프로젝트 리스크와 제품 리스크",
      "둘 다 제품 리스크",
      "둘 다 프로젝트 리스크",
      "제품 리스크와 프로젝트 리스크"
    ],
    "answer": [
      3
    ],
    "explanation": "추천 정확도는 제품 품질 특성이고 예산 삭감은 테스트 프로젝트 수행 능력을 위협한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-36",
    "set": "prediction-18",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.2.4",
    "level": "K2",
    "text": "고위험 알고리즘에 독립 전문가 리뷰와 추가 결정 테이블 테스트를 적용했다. 대응은?",
    "options": [
      "무조건적 리스크 수용",
      "리스크 은폐",
      "리스크 완화",
      "테스트 중단"
    ],
    "answer": [
      2
    ],
    "explanation": "독립성·리뷰·적절한 기법과 추가 테스트는 결함 가능성 또는 영향을 낮추기 위한 제품 리스크 완화 조치다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-37",
    "set": "prediction-18",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.3.2",
    "level": "K2",
    "text": "테스트 완료 보고서를 운영팀도 받는 이유는?",
    "options": [
      "테스트 스크립트를 운영팀이 모두 수정하게 하기 위해서이다.",
      "잔여 결함·알려진 제한과 운영상 모니터링·대응 필요를 전달하기 위해서이다.",
      "제품 위험을 숨기기 위해서이다.",
      "개발팀과의 소통을 금지하기 위해서이다."
    ],
    "answer": [
      1
    ],
    "explanation": "완료 보고서는 결과와 잔여 품질 위험, 알려진 제한을 관련 독자에게 전달하여 출시와 운영 준비 결정을 지원한다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-38",
    "set": "prediction-18",
    "chapter": "5장 테스트 활동 관리",
    "lo": "5.4.1",
    "level": "K2",
    "text": "테스트 환경 설정 파일이 승인 없이 바뀌었다. 필요한 형상 관리 조치는?",
    "options": [
      "변경을 식별·검토·승인하고 버전과 영향받은 실행 결과를 추적한다.",
      "설정 이력을 삭제한다.",
      "모든 과거 결과를 새 설정 결과로 바꾼다.",
      "환경은 형상 항목이 아니라고 가정한다."
    ],
    "answer": [
      0
    ],
    "explanation": "환경 설정도 결과에 영향을 주는 형상 항목이므로 변경 통제와 버전 식별 및 결과 연결이 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-39",
    "set": "prediction-18",
    "chapter": "6장 테스트 도구",
    "lo": "6.1.1",
    "level": "K2",
    "text": "부하 생성 도구가 지원하는 테스트 활동은?",
    "options": [
      "모든 성능 병목을 자동 수정한다.",
      "요구사항 모호성을 자동 합의한다.",
      "리뷰의 작성자 역할을 대신한다.",
      "동시 가상 사용자와 트랜잭션을 발생시켜 성능 측정 조건을 만든다."
    ],
    "answer": [
      3
    ],
    "explanation": "성능 도구는 부하를 생성하고 응답시간·처리량·자원 지표를 수집할 수 있지만 병목 해석과 수정은 별도 활동이다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  },
  {
    "id": "P18-40",
    "set": "prediction-18",
    "chapter": "6장 테스트 도구",
    "lo": "6.2.1",
    "level": "K1",
    "text": "CI에서 자동 테스트를 자주 실행할 때의 이점은?",
    "options": [
      "테스트 설계와 유지보수를 없앤다.",
      "모든 자동 결과가 항상 정확함을 보장한다.",
      "변경으로 생긴 회귀를 빠르게 발견해 피드백 시간을 줄일 수 있다.",
      "수동 탐색을 금지한다."
    ],
    "answer": [
      2
    ],
    "explanation": "자동화된 빈번한 실행은 회귀에 대한 빠른 피드백을 제공하지만 테스트의 정확성·유지보수와 사람의 판단은 여전히 필요하다.",
    "review": {
      "status": "verified",
      "date": "2026-07-21",
      "basis": "ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D",
      "checks": [
        "learning-objective",
        "k-level",
        "answer",
        "distractors",
        "explanation",
        "language",
        "duplicate-screening"
      ]
    }
  }
];
