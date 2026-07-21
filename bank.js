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
  }
];
