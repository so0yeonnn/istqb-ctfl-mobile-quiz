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
      ]
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
      "테스터가 요구사항 워크숍부터 참여해 모호한 인수 조건을 조기에 질문한다.",
      "개발 중 방해가 되지 않도록 모든 테스트 설계를 코딩 완료 후 시작한다.",
      "결함 수를 개발자 개인 평가 지표로 공개한다.",
      "테스트 독립성을 위해 테스터와 개발자 간 의사소통을 제한한다."
    ],
    "answer": [
      0
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
      ]
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
      "장애 → 결함 → 오류",
      "오류 → 결함 → 장애",
      "결함 → 오류 → 장애",
      "오류 → 장애 → 결함"
    ],
    "answer": [
      1
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
      ]
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
      ]
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
      "② → ④ → ① → ③",
      "④ → ② → ③ → ①",
      "② → ① → ④ → ③",
      "① → ② → ④ → ③"
    ],
    "answer": [
      0
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
      ]
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
      "독립성이 높을수록 개발팀과의 협업은 항상 금지된다.",
      "작성자와 다른 인지 편향을 가진 사람이 다른 종류의 결함을 발견할 수 있다.",
      "독립 테스터는 테스트 대상에 대한 정보를 받지 않아야 한다.",
      "모든 프로젝트는 조직 외부의 독립 테스트팀을 사용해야 한다."
    ],
    "answer": [
      1
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
      ]
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
      "품질에 대한 책임을 팀 전체가 공유하고 필요한 기술을 함께 활용한다.",
      "독립적 테스팅을 조직에서 제거한다."
    ],
    "answer": [
      2
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
      ]
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
      "각 개발 활동에는 대응하는 테스트 활동이 있다.",
      "테스트는 실행 가능한 시스템이 완성된 후에만 시작한다.",
      "테스트 레벨마다 동일한 테스트 목적을 사용한다.",
      "모든 테스트 분석은 테스트 실행 후 수행한다."
    ],
    "answer": [
      0
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
      ]
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
      "Given–When–Then",
      "Arrange–Compile–Deploy",
      "Risk–Control–Report"
    ],
    "answer": [
      1
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
      ]
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
      ]
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
      "완료된 반복의 효과와 비효율을 분석해 다음 반복의 개선 조치를 정한다.",
      "미완료 테스트를 숨겨 팀 사기를 유지한다.",
      "테스트 종료 기준을 소급해 낮춘다."
    ],
    "answer": [
      1
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
      ]
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
      "컴포넌트 테스팅",
      "컴포넌트 통합 테스팅",
      "시스템 테스팅",
      "인수 테스팅"
    ],
    "answer": [
      1
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
      ]
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
      ]
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
      "요구사항, 소스 코드, 테스트 계획과 계약서",
      "운영 중 발생한 장애만",
      "실제 결과와 예상 결과의 차이만"
    ],
    "answer": [
      1
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
      ]
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
      ]
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
      "참여자에게 작업 산출물과 범위·목표·종료 기준을 배포한다.",
      "작성자가 모든 이상 항목을 수정한 것으로 간주한다.",
      "리뷰 메트릭을 폐기한다.",
      "동적 테스트 결과만으로 리뷰를 종료한다."
    ],
    "answer": [
      0
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
      ]
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
      "워크스루는 보통 작성자가 주도하고, 인스펙션은 정의된 역할·절차·메트릭을 사용하는 가장 공식적인 리뷰이다.",
      "워크스루가 항상 인스펙션보다 공식적이다.",
      "인스펙션에는 개별 검토가 없다.",
      "두 리뷰 모두 정적 테스트가 아니다."
    ],
    "answer": [
      0
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
      ]
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
      "블랙박스 기법과 화이트박스 기법",
      "정적 분석과 디버깅만",
      "경험 기반 기법만",
      "리뷰와 형상 관리만"
    ],
    "answer": [
      0
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
      ]
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
      ]
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
      "8, 22",
      "11, 19",
      "8, 11, 19, 22",
      "10, 20"
    ],
    "answer": [
      1
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
      ]
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
      "8개",
      "10개"
    ],
    "answer": [
      2
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
      ]
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
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "answer": [
      0
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
      ]
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
      "모든 결정 결과가 실행되었다.",
      "모든 실행 가능한 구문이 한 번 이상 실행되었다.",
      "모든 요구사항이 테스트되었다.",
      "모든 결함이 발견되었다."
    ],
    "answer": [
      1
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
      ]
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
      "100% 구문 커버리지도 달성한다.",
      "모든 가능한 경로를 실행한다.",
      "모든 조건 조합을 실행한다.",
      "결정이 없는 구문은 실행하지 않아도 된다."
    ],
    "answer": [
      0
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
      ]
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
      "과거 결함 분류와 개발자가 자주 범한 실수를 바탕으로 공격 목록을 만든다.",
      "소스 코드 없이 구문 커버리지를 계산한다.",
      "요구사항의 모든 조합을 기계적으로 나열한다.",
      "테스터 경험을 배제하고 무작위 값만 사용한다."
    ],
    "answer": [
      0
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
      ]
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
      "세션의 목적·범위·아이디어를 안내하되 학습에 따른 조정을 허용한다.",
      "실행 결과를 자동으로 결함으로 등록한다.",
      "테스트 완료 기준을 대체한다."
    ],
    "answer": [
      1
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
      ]
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
      ]
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
      "배송 전 주문을 취소하면 전액 환불되고 상태가 취소됨으로 바뀌는지 확인한다.",
      "신규 고객 등록 후 첫 주문이 가능한지 확인한다.",
      "배송 완료 주문의 리뷰 작성 기능을 확인한다.",
      "환율 변경 시 상품 가격 표시를 확인한다."
    ],
    "answer": [
      0
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
      ]
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
      "사용자 스토리의 테스트 가능성과 관련 리스크를 분석하고 테스트 작업을 추정한다.",
      "제품 책임자 대신 모든 스토리의 비즈니스 우선순위를 단독 결정한다.",
      "개발자 개인 성과를 평가한다.",
      "완료 기준과 무관하게 테스트 작업을 제외한다."
    ],
    "answer": [
      0
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
      ]
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
      "32시간",
      "36시간",
      "42시간"
    ],
    "answer": [
      2
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
      ]
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
      "TC1",
      "TC2",
      "TC3",
      "TC4"
    ],
    "answer": [
      1
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
      ]
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
      ]
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
      "결제 금액 계산 오류로 고객에게 잘못된 금액이 청구될 가능성",
      "핵심 테스터의 갑작스러운 퇴사",
      "테스트 환경 납품 지연",
      "프로젝트 예산 삭감"
    ],
    "answer": [
      0
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
      ]
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
      "경영진에는 잔여 리스크와 추세를 요약하고, 개발팀에는 재현 정보와 영향 범위를 상세히 제공한다.",
      "좋은 소식만 구두로 전달한다.",
      "메트릭 없이 개인 의견만 전달한다."
    ],
    "answer": [
      1
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
      ]
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
      "형상 관리",
      "오류 추정",
      "인수 테스트"
    ],
    "answer": [
      1
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
      ]
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
      "테스터의 연봉",
      "브라우저·빌드 버전과 재현 가능한 입력 및 사전조건",
      "프로젝트 전체 회의록",
      "결함을 만든 것으로 추정되는 개발자 이름"
    ],
    "answer": [
      1
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
      ]
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
      "코드를 실행하지 않고 코딩 규칙 위반과 잠재 결함을 탐지한다.",
      "사용자의 실제 만족도를 자동 증명한다.",
      "운영 장애의 사업 영향을 최종 승인한다.",
      "모든 테스트 케이스의 기대 결과를 스스로 결정한다."
    ],
    "answer": [
      0
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
      ]
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
      "객관적 측정 가능",
      "도구와 자동화 산출물의 유지보수 비용을 과소평가",
      "회귀 테스트 실행 시간 단축"
    ],
    "answer": [
      2
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
      ]
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
      ]
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
      "불충분한 교육=근본 원인, 잘못 이해한 행위=오류, 틀린 요구사항=결함, 잘못된 표시=장애",
      "잘못 이해한 행위=근본 원인, 틀린 요구사항=오류, 잘못된 표시=결함, 교육 부족=장애",
      "틀린 요구사항=근본 원인, 교육 부족=오류, 잘못된 표시=결함, 잘못 이해=장애",
      "네 항목은 모두 결함이다."
    ],
    "answer": [
      0
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
      ]
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
      ]
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
      "테스트는 정황에 의존한다.",
      "결함은 집중된다.",
      "조기 테스트는 비용을 절감한다.",
      "완전 테스트는 불가능하다."
    ],
    "answer": [
      0
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
      ]
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
      "테스트 분석 → 테스트 설계",
      "테스트 설계 → 테스트 구현",
      "테스트 계획 → 테스트 분석",
      "테스트 구현 → 테스트 실행"
    ],
    "answer": [
      0
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
      ]
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
      ]
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
      "테스팅은 제품 중심의 품질 관리 활동이고, QA는 프로세스 중심의 예방적 접근을 포함한다.",
      "테스팅과 QA는 완전히 같은 활동이다.",
      "QA는 오직 테스트 실행만 의미한다.",
      "테스팅은 프로세스 감사만 수행한다."
    ],
    "answer": [
      0
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
      ]
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
      "테스트 분석과 설계는 관련 작업 산출물의 초안이 준비되는 즉시 시작할 수 있다.",
      "모든 테스트 레벨은 같은 목적을 가진다.",
      "테스트 실행은 항상 디버깅보다 먼저 수행된다.",
      "순차 모델에서만 정적 테스팅을 수행할 수 있다."
    ],
    "answer": [
      0
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
      ]
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
      ]
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
      ]
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
      "CI/CD가 모든 품질 특성과 예기치 않은 사용을 자동으로 판단하지는 못하기 때문이다.",
      "자동화는 회귀 테스트에 사용할 수 없기 때문이다.",
      "DevOps에서는 정적 테스트를 금지하기 때문이다.",
      "배포 자동화가 테스트 결과를 삭제하기 때문이다."
    ],
    "answer": [
      0
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
      ]
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
      ]
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
      "영향도 분석",
      "무작위 테스트만 수행",
      "모든 과거 결함 삭제",
      "개발 모델 교체"
    ],
    "answer": [
      0
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
      ]
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
      "사용자 스토리의 인수 기준",
      "실행 중인 서버의 실제 응답 시간",
      "운영 중 발생한 CPU 온도",
      "실사용자의 클릭 속도"
    ],
    "answer": [
      0
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
      ]
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
      ]
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
      ]
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
      "관리자",
      "조정자(중재자)",
      "기록자"
    ],
    "answer": [
      2
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
      ]
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
      "블랙박스–명세, 화이트박스–내부 구조",
      "블랙박스–소스코드, 화이트박스–사용자 경험",
      "둘 다 오직 결함 목록",
      "둘 다 오직 테스터 직관"
    ],
    "answer": [
      0
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
      ]
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
      "{-1, 100, 500, 800, 1000}",
      "{0, 200, 700}",
      "{100, 500, 800, 999}"
    ],
    "answer": [
      1
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
      ]
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
      "{1,30}",
      "{0,1,30,31}",
      "{1,2,29,30}",
      "{0,1,2,29,30,31}"
    ],
    "answer": [
      1
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
      ]
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
      "(F,T)",
      "(F,F)"
    ],
    "answer": [
      2
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
      ]
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
      "1개: D→R→D→R→A→H",
      "1개: D→R→A→R→D",
      "2개: D→R→A와 D→H",
      "2개: D→R→D와 D→A→H"
    ],
    "answer": [
      0
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
      ]
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
      "20%",
      "60%",
      "75%",
      "80%"
    ],
    "answer": [
      2
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
      ]
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
      "각 결정의 참 결과와 거짓 결과가 테스트로 실행되었는지 여부",
      "소스 코드의 모든 가능한 실행 경로가 테스트되었는지 여부",
      "각 요구사항에 하나 이상의 테스트 케이스가 연결되었는지 여부",
      "모든 입력값 조합이 적어도 한 번 사용되었는지 여부"
    ],
    "answer": [
      0
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
      ]
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
      "명세만으로 보이지 않는 미실행 코드 구조를 식별한다.",
      "요구사항의 업무 가치를 자동 결정한다.",
      "사용자의 만족도를 코드에서 증명한다.",
      "모든 누락 요구사항을 발견한다."
    ],
    "answer": [
      0
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
      ]
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
      "오류 추정",
      "결정 테이블 테스팅",
      "문장 테스팅",
      "동등 분할"
    ],
    "answer": [
      0
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
      ]
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
      ]
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
      "알림 신청 상품의 재고를 0에서 1로 변경하고 등록 채널에 알림이 정확히 한 번 도착하는지 확인한다.",
      "재고 변경 없이 서버 CPU 사용률만 측정한다.",
      "알림 문구가 마음에 드는지 개발자에게 질문한다."
    ],
    "answer": [
      1
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
      ]
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
      "빠르고 격리된 하위 레벨 테스트를 많이 두고 느린 상위 종단간 테스트를 적게 둔다.",
      "모든 테스트 레벨의 테스트 수를 같게 둔다.",
      "수동 테스트만 피라미드에 포함한다.",
      "상위 종단간 테스트가 가장 많아야 한다."
    ],
    "answer": [
      0
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
      ]
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
      ]
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
      ]
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
      "프로젝트 리스크 — 테스트 활동의 일정과 수행을 위협한다.",
      "제품 리스크 — 운영 중 응답 시간이 느릴 가능성을 직접 나타낸다.",
      "제품 리스크 — 테스트 케이스의 예상 결과가 틀렸음을 나타낸다.",
      "결함 — 이미 제품 코드에 잘못이 존재함을 증명한다."
    ],
    "answer": [
      0
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
      ]
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
      "더 이른 테스트, 숙련된 테스터, 더 높은 커버리지와 집중 회귀 테스트를 배정한다.",
      "리스크 정보를 숨긴다.",
      "낮은 위험 기능과 동일한 강도로만 테스트한다.",
      "해당 기능을 테스트 범위에서 제외한다."
    ],
    "answer": [
      0
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
      ]
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
      ]
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
      "현 상태, 미달 기준과 잔여 위험을 투명하게 보고해 출시 결정을 지원한다.",
      "합격으로 표시하고 결함을 삭제한다.",
      "테스트 건수만 보고한다.",
      "테스터가 단독으로 출시를 취소한다."
    ],
    "answer": [
      0
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
      ]
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
      ]
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
      "재현성과 진단 정보가 부족하다. 환경·버전·사전조건·단계·결과를 보완한다.",
      "우선순위가 높다. 개발자 이름을 추가한다.",
      "결함이 아니다. 테스트를 삭제한다."
    ],
    "answer": [
      1
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
      ]
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
      "테스트 케이스·실행 결과·결함과 추적성 관리",
      "소프트웨어의 모든 요구사항 자동 작성",
      "사용자의 감정 자동 판정",
      "미실행 코드의 자동 삭제"
    ],
    "answer": [
      0
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
      ]
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
      "반복 회귀 테스트의 실행 시간 절감과 일관성 향상",
      "도구 도입 즉시 유지보수 비용 제거",
      "수동 테스트와 인간 판단의 완전 제거",
      "모든 결함의 자동 수정"
    ],
    "answer": [
      0
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
      ]
    }
  }
];
