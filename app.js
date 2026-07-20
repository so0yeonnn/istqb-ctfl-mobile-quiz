const questions = [
  {
    chapter: '1장 테스트 기초', syllabus: '1.1.1',
    text: '다음 중 테스팅의 전형적인 목적으로 가장 적절한 것은?',
    options: ['모든 결함이 제거되었음을 증명한다.', '테스트 대상의 품질 수준을 평가하고 이해관계자에게 정보를 제공한다.', '개발자가 작성한 코드를 대신 수정한다.', '제품이 모든 상황에서 실패하지 않음을 보장한다.'],
    answer: 1,
    explanation: '테스팅은 품질을 평가하고 의사결정에 필요한 정보를 제공한다. 결함이 전혀 없음을 증명하거나 무결함을 보장하지는 않는다.'
  },
  {
    chapter: '1장 테스트 기초', syllabus: '1.1.2',
    text: '테스팅과 디버깅의 관계에 대한 설명으로 옳은 것은?',
    options: ['둘은 같은 활동이다.', '테스팅은 결함을 수정하고 디버깅은 장애를 관찰한다.', '테스팅은 장애나 결함을 드러낼 수 있고, 디버깅은 원인을 찾아 수정한다.', '디버깅은 테스터만 수행한다.'],
    answer: 2,
    explanation: '테스팅은 실패를 관찰하거나 결함을 발견하는 활동이고, 디버깅은 실패의 원인을 찾아 분석하고 수정하는 개발 활동이다.'
  },
  {
    chapter: '1장 테스트 기초', syllabus: '1.3.1',
    text: '“완전한 테스팅은 불가능하다”는 원리가 의미하는 것은?',
    options: ['테스트를 수행할 필요가 없다.', '항상 무작위 테스트만 해야 한다.', '자동화하면 모든 조합을 테스트할 수 있다.', '위험과 우선순위를 고려하여 테스트 노력을 집중해야 한다.'],
    answer: 3,
    explanation: '모든 입력과 사전조건 조합을 테스트하는 것은 극히 단순한 경우를 제외하면 불가능하므로 리스크 기반으로 범위를 선택한다.'
  },
  {
    chapter: '1장 테스트 기초', syllabus: '1.3.1',
    text: '“오류 부재의 궤변”을 가장 잘 설명한 것은?',
    options: ['결함은 특정 모듈에 집중된다.', '명세대로 동작해도 사용자의 필요를 충족하지 못하면 성공한 시스템이 아니다.', '같은 테스트를 반복하면 결함 발견 효과가 감소한다.', '테스트는 개발 초기에 시작할수록 좋다.'],
    answer: 1,
    explanation: '결함을 많이 제거했더라도 잘못된 요구사항을 구현했거나 사용자 요구를 충족하지 못하면 품질 좋은 제품이라 할 수 없다.'
  },
  {
    chapter: '1장 테스트 기초', syllabus: '1.4.1',
    text: '테스트 분석 활동의 주요 산출물로 가장 적절한 것은?',
    options: ['테스트 완료 보고서', '자동화 실행 로그', '우선순위가 지정된 테스트 컨디션', '수정된 소스 코드'],
    answer: 2,
    explanation: '테스트 분석은 테스트 베이시스를 검토하여 무엇을 테스트할지 식별하고 테스트 컨디션을 정의·우선순위화한다.'
  },
  {
    chapter: '1장 테스트 기초', syllabus: '1.4.4',
    text: '테스트 베이시스와 테스트 케이스, 테스트 결과 사이의 추적성이 주는 이점은?',
    options: ['커버리지를 평가하고 변경의 영향을 파악할 수 있다.', '모든 테스트를 자동화할 수 있다.', '결함 보고가 필요 없어지는 효과가 있다.', '테스트 독립성이 제거된다.'],
    answer: 0,
    explanation: '양방향 추적성은 요구사항 커버리지 확인, 변경 영향 분석, 감사와 보고를 지원한다.'
  },
  {
    chapter: '1장 테스트 기초', syllabus: '1.4.5',
    text: '다음 중 테스트 관리 역할에 가장 가까운 활동은?',
    options: ['테스트 케이스 실행', '테스트 목적과 접근법, 자원 및 일정 결정', '실제 결과와 예상 결과 비교', '탐색적 테스트 세션 수행'],
    answer: 1,
    explanation: '테스트 관리는 계획, 모니터링, 제어와 완료 활동에 초점을 둔다. 실행과 분석은 주로 테스팅 역할의 활동이다.'
  },
  {
    chapter: '1장 테스트 기초', syllabus: '1.5.2',
    text: '전체 팀 접근법(whole team approach)의 장점으로 가장 적절한 것은?',
    options: ['테스트 책임을 테스터에게만 한정한다.', '역할 간 의사소통을 줄인다.', '다양한 기술과 관점을 활용해 품질에 대한 공동 책임을 높인다.', '독립적 테스팅을 항상 금지한다.'],
    answer: 2,
    explanation: '전체 팀 접근법은 팀 구성원이 품질에 공동 책임을 지고 서로의 기술과 관점을 활용하게 한다.'
  },
  {
    chapter: '2장 SDLC 전반의 테스팅', syllabus: '2.1.1',
    text: '소프트웨어 개발 수명주기 모델이 테스팅에 미치는 영향으로 옳은 것은?',
    options: ['테스트 활동의 시기와 범위는 선택한 수명주기와 프로젝트 상황에 맞게 조정된다.', '모든 수명주기에서 테스트 순서는 완전히 같다.', '애자일에서는 문서 리뷰가 불가능하다.', '순차 모델에서는 테스트를 계획할 수 없다.'],
    answer: 0,
    explanation: '테스트 접근법, 자동화 정도, 문서화 수준, 테스트 레벨과 활동 시기는 SDLC와 프로젝트 맥락에 맞게 조정된다.'
  },
  {
    chapter: '2장 SDLC 전반의 테스팅', syllabus: '2.1.5',
    text: '시프트 레프트(shift left)의 예로 가장 적절한 것은?',
    options: ['운영 배포 후에만 성능 테스트를 시작한다.', '테스트 완료 보고서를 생략한다.', '모든 테스트를 시스템 테스트 레벨로 이동한다.', '요구사항 작성 단계에서 리뷰와 테스트 설계를 시작한다.'],
    answer: 3,
    explanation: '시프트 레프트는 리뷰, 정적 분석, 테스트 설계 같은 활동을 개발 수명주기의 더 이른 시점에 수행하는 것이다.'
  },
  {
    chapter: '2장 SDLC 전반의 테스팅', syllabus: '2.1.3',
    text: '테스트 주도 개발(TDD)의 기본 반복 순서로 옳은 것은?',
    options: ['코드 작성 → 배포 → 테스트 삭제', '실패하는 테스트 작성 → 최소 코드 작성 → 리팩터링', '요구사항 승인 → 운영 배포 → 회귀 테스트', '테스트 계획 → 인수 테스트 → 요구사항 작성'],
    answer: 1,
    explanation: 'TDD는 작은 단위의 실패하는 테스트를 먼저 작성하고 이를 통과하는 최소 코드를 구현한 뒤 리팩터링하는 주기를 반복한다.'
  },
  {
    chapter: '2장 SDLC 전반의 테스팅', syllabus: '2.1.4',
    text: 'DevOps가 테스팅에 제공할 수 있는 이점으로 가장 적절한 것은?',
    options: ['수동 테스트를 완전히 제거한다.', '품질 책임을 운영팀에만 부여한다.', '빠른 피드백과 반복 가능한 자동화 파이프라인을 지원한다.', '비기능 테스팅을 생략한다.'],
    answer: 2,
    explanation: 'DevOps와 CI/CD는 자동화된 빌드·테스트·배포를 통해 빠른 피드백과 반복 가능한 프로세스를 지원한다.'
  },
  {
    chapter: '2장 SDLC 전반의 테스팅', syllabus: '2.2.3',
    text: '확인 테스팅과 리그레션 테스팅을 올바르게 비교한 것은?',
    options: ['확인 테스팅은 수정 성공 여부를, 리그레션 테스팅은 변경의 부작용을 확인한다.', '둘은 항상 동일한 테스트 케이스를 사용한다.', '확인 테스팅은 비기능 테스트만 포함한다.', '리그레션 테스팅은 최초 배포 전에만 수행한다.'],
    answer: 0,
    explanation: '확인 테스팅은 특정 결함 수정이 성공했는지 확인하고, 리그레션 테스팅은 변경이 다른 부분에 부정적 영향을 주었는지 확인한다.'
  },
  {
    chapter: '2장 SDLC 전반의 테스팅', syllabus: '2.3.1',
    text: '유지보수 테스팅을 촉발할 수 있는 상황으로 가장 적절한 것은?',
    options: ['프로젝트 시작 회의 개최', '테스터 채용 공고 게시', '아직 작성되지 않은 제품 아이디어 논의', '운영 플랫폼 마이그레이션과 시스템 폐기'],
    answer: 3,
    explanation: '수정·업그레이드, 운영 환경 변경, 마이그레이션, 시스템 폐기는 유지보수 테스팅의 대표적인 촉발 요인이다.'
  },
  {
    chapter: '3장 정적 테스팅', syllabus: '3.1.1',
    text: '정적 테스팅의 특징으로 옳은 것은?',
    options: ['실행 가능한 코드만 대상으로 한다.', '테스트 대상을 실행하지 않고도 결함을 발견할 수 있다.', '실제 결과와 예상 결과를 반드시 비교한다.', '운영 환경에서만 수행한다.'],
    answer: 1,
    explanation: '정적 테스팅은 요구사항, 설계, 코드 등 작업 산출물을 실행하지 않고 평가한다.'
  },
  {
    chapter: '3장 정적 테스팅', syllabus: '3.2.2',
    text: '공식 리뷰에서 회의를 효과적으로 진행하고 참여자 간 중재를 담당하는 역할은?',
    options: ['작성자', '관리자', '조정자', '기록자'],
    answer: 2,
    explanation: '조정자(모더레이터)는 리뷰 회의를 진행하고 안전한 분위기와 효과적인 의사소통을 지원한다.'
  },
  {
    chapter: '3장 정적 테스팅', syllabus: '3.2.4',
    text: '리뷰 성공 요인으로 가장 적절한 것은?',
    options: ['명확한 목적을 정하고 적합한 리뷰 유형과 참여자를 선택한다.', '발견한 결함 수를 개인 평가에 사용한다.', '작성자가 모든 회의를 단독 진행한다.', '대규모 산출물을 준비 없이 한 번에 검토한다.'],
    answer: 0,
    explanation: '명확한 목표, 작은 검토 단위, 충분한 준비 시간, 교육받은 참여자, 심리적 안전이 리뷰 성공을 돕는다.'
  },
  {
    chapter: '3장 정적 테스팅', syllabus: '3.2.3',
    text: '일반적으로 가장 형식적이며 정의된 역할, 메트릭과 종료 기준을 사용하는 리뷰 유형은?',
    options: ['비공식 리뷰', '워크스루', '기술 리뷰', '인스펙션'],
    answer: 3,
    explanation: '인스펙션은 가장 형식적인 리뷰 유형으로 정의된 프로세스, 역할, 데이터 수집과 종료 기준을 사용한다.'
  },
  {
    chapter: '4장 테스트 분석과 설계', syllabus: '4.2.1',
    text: '나이가 18세 미만, 18~64세, 65세 이상으로 처리되는 시스템에 동등 분할을 적용할 때 최소 테스트 수는?',
    options: ['1개', '3개', '4개', '6개'],
    answer: 1,
    explanation: '서로 다르게 처리되는 세 개의 유효 동등 분할에서 대표값을 하나씩 선택하므로 최소 3개가 필요하다.'
  },
  {
    chapter: '4장 테스트 분석과 설계', syllabus: '4.2.2',
    text: '유효 입력 범위가 1~100일 때 3값 경계값 분석에 필요한 값의 집합은?',
    options: ['1, 100', '0, 1, 100, 101', '0, 1, 2, 99, 100, 101', '-1, 0, 1, 100, 101, 102'],
    answer: 2,
    explanation: '3값 경계값 분석은 각 경계에서 경계 바로 아래, 경계, 경계 바로 위 값을 선택한다.'
  },
  {
    chapter: '4장 테스트 분석과 설계', syllabus: '4.2.3',
    text: '서로 독립적인 두 불리언 조건의 모든 조합을 결정 테이블로 테스트하려면 최대 몇 개의 규칙이 필요한가?',
    options: ['1개', '2개', '3개', '4개'],
    answer: 3,
    explanation: '각 조건이 참/거짓 두 값을 가지므로 가능한 조합은 2² = 4개다.'
  },
  {
    chapter: '4장 테스트 분석과 설계', syllabus: '4.2.4',
    text: '상태 모델에 유효한 전이가 4개 있고 테스트가 그중 3개를 실행했다. 유효 전이 커버리지는?',
    options: ['50%', '75%', '80%', '100%'],
    answer: 1,
    explanation: '유효 전이 커버리지는 실행한 유효 전이 수를 전체 유효 전이 수로 나눈 값이므로 3/4 = 75%다.'
  },
  {
    chapter: '4장 테스트 분석과 설계', syllabus: '4.3.1',
    text: '다음 의사코드를 x=1로 한 번 실행했다. 구문 커버리지는? “if x > 0 then y = 1; print(y)”',
    options: ['100%', '75%', '50%', '25%'],
    answer: 0,
    explanation: 'x=1이면 y=1 대입과 print 구문이 모두 실행되므로 실행 가능한 구문 커버리지는 100%다.'
  },
  {
    chapter: '4장 테스트 분석과 설계', syllabus: '4.3.2',
    text: '직전 문제의 의사코드를 x=1로만 실행했을 때 분기 커버리지는?',
    options: ['100%', '75%', '50%', '25%'],
    answer: 2,
    explanation: '결정 결과 참과 거짓 중 참만 실행했으므로 분기 커버리지는 1/2 = 50%다.'
  },
  {
    chapter: '4장 테스트 분석과 설계', syllabus: '4.3.3',
    text: '화이트박스 테스팅의 가치로 가장 적절한 것은?',
    options: ['요구사항 없이 사용자 만족도를 증명한다.', '모든 누락 요구사항을 자동 탐지한다.', '코드를 보지 않고 비즈니스 규칙만 평가한다.', '구현 구조를 고려해 아직 실행되지 않은 부분을 식별한다.'],
    answer: 3,
    explanation: '화이트박스 기법은 코드나 구조를 기반으로 커버리지를 측정하고 테스트되지 않은 구조 요소를 찾는 데 유용하다.'
  },
  {
    chapter: '4장 테스트 분석과 설계', syllabus: '4.4.1',
    text: '오류 추정(error guessing)의 기반으로 가장 적절한 것은?',
    options: ['소스 코드의 모든 분기 목록', '테스터의 경험, 과거 결함과 흔한 실수에 대한 지식', '무작위 입력만을 생성하는 도구', '완성된 결정 테이블만 사용'],
    answer: 1,
    explanation: '오류 추정은 테스터가 축적한 경험과 과거 결함, 개발자가 흔히 범하는 오류에 대한 지식을 활용한다.'
  },
  {
    chapter: '4장 테스트 분석과 설계', syllabus: '4.4.2',
    text: '탐색적 테스팅을 올바르게 설명한 것은?',
    options: ['테스트 학습, 설계와 실행을 동시에 수행하고 결과를 다음 테스트에 반영한다.', '실행 전에 모든 절차를 완전히 고정한다.', '자동 생성된 입력만 허용한다.', '테스트 대상을 실행하지 않는다.'],
    answer: 0,
    explanation: '탐색적 테스팅에서는 학습, 설계와 실행이 상호 지원하며 진행 중 얻은 정보로 다음 테스트를 조정한다.'
  },
  {
    chapter: '4장 테스트 분석과 설계', syllabus: '4.4.3',
    text: '체크리스트 기반 테스팅의 특징으로 가장 적절한 것은?',
    options: ['모든 코드 분기를 자동 실행한다.', '상태 모델에서만 사용할 수 있다.', '경험과 결함 정보에서 도출한 확인 항목 목록을 사용한다.', '테스트 케이스를 만들 수 없을 때 무작위로 실행한다.'],
    answer: 2,
    explanation: '체크리스트는 경험, 표준, 사용자 관점과 과거 결함 등에서 도출한 고수준 확인 항목을 제공한다.'
  },
  {
    chapter: '4장 테스트 분석과 설계', syllabus: '4.5.2',
    text: '인수 테스트 주도 개발(ATDD)의 특징으로 가장 적절한 것은?',
    options: ['코드 구현이 끝난 후 테스터가 단독으로 인수 기준을 작성한다.', '구현 전에 다양한 관점의 팀원이 예제와 인수 테스트를 함께 구체화한다.', '비기능 요구사항은 다루지 않는다.', '단위 테스트를 모두 제거한다.'],
    answer: 1,
    explanation: 'ATDD는 비즈니스, 개발, 테스트 관점이 협력하여 구현 전에 인수 기준과 구체적인 예제를 정의한다.'
  },
  {
    chapter: '5장 테스트 활동 관리', syllabus: '5.1.1',
    text: '테스트 계획 활동의 결과로 가장 적절한 것은?',
    options: ['모든 결함의 원인 제거', '실제 결과와 예상 결과 비교', '테스트 로그 자동 삭제', '테스트 목적, 접근법, 자원과 일정 정의'],
    answer: 3,
    explanation: '테스트 계획은 목표와 접근법을 정하고 자원, 일정, 메트릭, 위험, 시작·종료 기준 등을 정의한다.'
  },
  {
    chapter: '5장 테스트 활동 관리', syllabus: '5.1.3',
    text: '테스트 종료 기준의 예로 가장 적절한 것은?',
    options: ['요구사항 초안이 처음 작성됨', '목표 커버리지를 달성하고 미해결 결함이 합의된 한도 이내임', '테스터 한 명이 배정됨', '첫 번째 빌드가 시작됨'],
    answer: 1,
    explanation: '종료 기준은 목표 커버리지, 미해결 결함 수준, 통과율, 잔여 리스크 등 테스트 종료 판단에 사용하는 측정 가능한 조건이다.'
  },
  {
    chapter: '5장 테스트 활동 관리', syllabus: '5.2.1',
    text: '다음 중 제품 리스크에 해당하는 것은?',
    options: ['핵심 테스터의 퇴사 가능성', '테스트 환경 구축 지연', '결제 계산 오류로 고객에게 잘못 청구될 가능성', '테스트 예산 삭감'],
    answer: 2,
    explanation: '제품 리스크는 제품의 품질 특성과 관련된다. 인력, 일정, 환경과 예산 문제는 프로젝트 리스크다.'
  },
  {
    chapter: '5장 테스트 활동 관리', syllabus: '5.2.2',
    text: '일반적으로 제품 리스크 수준을 결정하는 두 요소는?',
    options: ['발생 가능성과 영향도', '테스터 수와 개발자 수', '코드 줄 수와 테스트 수', '일정과 회의 횟수'],
    answer: 0,
    explanation: '리스크 수준은 보통 부정적 사건의 발생 가능성과 발생했을 때의 영향도를 조합해 평가한다.'
  },
  {
    chapter: '5장 테스트 활동 관리', syllabus: '5.2.3',
    text: '리스크 기반 테스팅의 적용으로 가장 적절한 것은?',
    options: ['모든 기능에 동일한 테스트 노력을 배분한다.', '낮은 리스크 기능만 먼저 테스트한다.', '리스크 정보를 테스트와 무관하게 보관한다.', '높은 제품 리스크 영역에 더 이르고 강도 높은 테스트를 배정한다.'],
    answer: 3,
    explanation: '리스크 분석 결과는 테스트 범위, 깊이, 우선순위와 기법 선택에 사용되며 높은 리스크에 더 많은 노력을 배정한다.'
  },
  {
    chapter: '5장 테스트 활동 관리', syllabus: '5.1.4',
    text: '3점 추정에서 낙관값 4시간, 최빈값 7시간, 비관값 16시간일 때 E=(a+4m+b)/6의 추정값은?',
    options: ['7시간', '8시간', '9시간', '12시간'],
    answer: 1,
    explanation: '(4 + 4×7 + 16) / 6 = 48 / 6 = 8시간이다.'
  },
  {
    chapter: '5장 테스트 활동 관리', syllabus: '5.3.1',
    text: '테스트 진행 상황을 모니터링하기에 적절한 메트릭은?',
    options: ['팀원의 개인 급여', '프로젝트와 무관한 제품 판매량', '프로그래밍 언어의 인기 순위', '계획·실행·통과·실패한 테스트 케이스 수'],
    answer: 3,
    explanation: '테스트 케이스 상태, 결함 상태, 커버리지, 비용과 일정 등의 메트릭을 통해 진행 상황과 품질을 모니터링한다.'
  },
  {
    chapter: '5장 테스트 활동 관리', syllabus: '5.4.1',
    text: '형상 관리가 테스팅을 지원하는 방법으로 가장 적절한 것은?',
    options: ['테스트웨어와 테스트 대상의 버전을 식별하여 결과를 재현할 수 있게 한다.', '발견된 결함을 자동 수정한다.', '모든 변경을 검토 없이 승인한다.', '테스트 계획을 대체한다.'],
    answer: 0,
    explanation: '형상 관리는 테스트 대상, 테스트웨어와 환경의 버전을 식별·통제하여 추적성과 재현성을 제공한다.'
  },
  {
    chapter: '5장 테스트 활동 관리', syllabus: '5.5.1',
    text: '좋은 결함 보고서에 포함해야 할 정보로 가장 적절한 것은?',
    options: ['개발자의 개인 평가', '원인 확인 전 단정한 수정 방법', '재현 절차, 기대 결과, 실제 결과와 테스트 환경', '결함과 무관한 전체 회의 기록'],
    answer: 2,
    explanation: '명확한 재현 절차, 환경, 기대·실제 결과, 심각도와 관련 참조는 결함 분석과 수정, 확인을 돕는다.'
  },
  {
    chapter: '6장 테스트 도구', syllabus: '6.1.1',
    text: '테스트 자동화의 잠재적 이점으로 가장 적절한 것은?',
    options: ['테스트 분석이 더 이상 필요 없다.', '도입 즉시 모든 비용이 사라진다.', '반복 작업을 일관되게 수행하고 객관적인 측정 정보를 얻을 수 있다.', '자동화된 테스트는 유지보수가 필요 없다.'],
    answer: 2,
    explanation: '도구는 반복 실행의 일관성과 속도를 높이고 사람이 수행하기 어려운 측정과 대량 처리를 지원할 수 있다.'
  },
  {
    chapter: '6장 테스트 도구', syllabus: '6.1.2',
    text: '테스트 자동화 도입의 위험으로 가장 적절한 것은?',
    options: ['반복 테스트의 실행 일관성이 향상됨', '비현실적인 기대를 갖고 자동화 산출물 유지보수 노력을 과소평가함', '회귀 테스트 시간이 단축됨', '대량 측정이 가능해짐'],
    answer: 1,
    explanation: '비현실적인 기대, 잘못된 도구 선택, 유지보수 비용 과소평가, 충분한 교육 부족은 자동화 도입의 대표적 위험이다.'
  }
];

const STORAGE_KEY = 'istqb-ctfl-v401-mock-2';
const DURATION_SECONDS = 60 * 60;
const letters = ['A', 'B', 'C', 'D'];

const $ = selector => document.querySelector(selector);
const screens = [...document.querySelectorAll('.screen')];
const startButton = $('#start-button');
const resumeButton = $('#resume-button');
const timerElement = $('#timer');
const finishDialog = $('#finish-dialog');

let state = loadState() || newState();
let timerHandle = null;

function newState() {
  return {
    answers: Array(questions.length).fill(null),
    flags: Array(questions.length).fill(false),
    current: 0,
    startedAt: null,
    finishedAt: null
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || !Array.isArray(saved.answers) || saved.answers.length !== questions.length) return null;
    return saved;
  } catch {
    return null;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle('active', screen.id === id));
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function beginExam(fresh) {
  if (fresh) state = newState();
  if (!state.startedAt) state.startedAt = Date.now();
  saveState();
  showScreen('quiz-screen');
  renderQuestion();
  startTimer();
}

function renderQuestion() {
  const q = questions[state.current];
  $('#question-number').textContent = `${state.current + 1} / ${questions.length}`;
  $('#answered-count').textContent = `답변 ${state.answers.filter(answer => answer !== null).length}개`;
  $('#progress-fill').style.width = `${((state.current + 1) / questions.length) * 100}%`;
  $('#chapter').textContent = q.chapter;
  $('#syllabus').textContent = `실러버스 ${q.syllabus}`;
  $('#question-text').textContent = q.text;

  const options = $('#options');
  options.replaceChildren(options.querySelector('legend'));
  q.options.forEach((option, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'option';
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer';
    input.id = `q${state.current + 1}-${letters[index]}`;
    input.value = String(index);
    input.checked = state.answers[state.current] === index;
    const label = document.createElement('label');
    label.htmlFor = input.id;
    label.textContent = `${letters[index]}. ${option}`;
    input.addEventListener('change', () => {
      state.answers[state.current] = index;
      saveState();
      $('#answered-count').textContent = `답변 ${state.answers.filter(answer => answer !== null).length}개`;
    });
    wrapper.append(input, label);
    options.append(wrapper);
  });

  $('#prev-button').disabled = state.current === 0;
  $('#next-button').textContent = state.current === questions.length - 1 ? '전체 보기' : '다음';
  const flagButton = $('#flag-button');
  flagButton.setAttribute('aria-pressed', String(state.flags[state.current]));
  flagButton.textContent = state.flags[state.current] ? '검토 해제' : '검토 표시';
}

function moveQuestion(offset) {
  const next = state.current + offset;
  if (next >= questions.length) return openOverview();
  state.current = Math.max(0, next);
  saveState();
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openOverview() {
  const answered = state.answers.filter(answer => answer !== null).length;
  const flagged = state.flags.filter(Boolean).length;
  $('#overview-summary').textContent = `답변 ${answered}개 · 미답변 ${questions.length - answered}개 · 검토 ${flagged}개`;
  const grid = $('#question-grid');
  grid.replaceChildren();
  questions.forEach((_, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = String(index + 1);
    if (state.answers[index] !== null) button.classList.add('answered');
    if (state.flags[index]) button.classList.add('flagged');
    button.setAttribute('aria-label', `${index + 1}번${state.answers[index] !== null ? ' 답변 완료' : ' 미답변'}${state.flags[index] ? ', 검토 표시' : ''}`);
    button.addEventListener('click', () => {
      state.current = index;
      saveState();
      showScreen('quiz-screen');
      renderQuestion();
    });
    grid.append(button);
  });
  showScreen('overview-screen');
}

function askToFinish() {
  const unanswered = state.answers.filter(answer => answer === null).length;
  $('#finish-dialog-text').textContent = unanswered
    ? `미답변 ${unanswered}문제가 있습니다. 미답변은 오답으로 처리됩니다.`
    : '모든 문항에 답했습니다. 제출 후에는 답을 변경할 수 없습니다.';
  finishDialog.showModal();
}

function finishExam() {
  state.finishedAt = Date.now();
  saveState();
  clearInterval(timerHandle);
  finishDialog.close();
  renderResults();
  showScreen('result-screen');
}

function getResults() {
  const details = questions.map((question, index) => ({
    question,
    number: index + 1,
    selected: state.answers[index],
    correct: state.answers[index] === question.answer
  }));
  const score = details.filter(item => item.correct).length;
  return { details, score, wrong: details.filter(item => !item.correct) };
}

function renderResults() {
  const { details, score, wrong } = getResults();
  const passed = score >= 26;
  $('#result-label').textContent = passed ? '합격 기준 통과' : '복습 후 재도전';
  $('#result-title').textContent = `${score} / 40점`;
  $('#result-summary').textContent = `정답률 ${Math.round(score / 40 * 100)}% · 오답 ${wrong.length}개`;

  const chapterMap = new Map();
  details.forEach(item => {
    const bucket = chapterMap.get(item.question.chapter) || { correct: 0, total: 0 };
    bucket.total += 1;
    if (item.correct) bucket.correct += 1;
    chapterMap.set(item.question.chapter, bucket);
  });
  const chapterResults = $('#chapter-results');
  chapterResults.replaceChildren();
  chapterMap.forEach((value, chapter) => {
    const row = document.createElement('div');
    row.className = 'chapter-row';
    const name = document.createElement('span');
    name.textContent = chapter;
    const valueText = document.createElement('strong');
    valueText.textContent = `${value.correct}/${value.total}`;
    const bar = document.createElement('div');
    bar.className = 'chapter-bar';
    const fill = document.createElement('span');
    fill.style.width = `${value.correct / value.total * 100}%`;
    bar.append(fill);
    row.append(name, valueText, bar);
    chapterResults.append(row);
  });

  const wrongAnswers = $('#wrong-answers');
  wrongAnswers.replaceChildren();
  if (!wrong.length) {
    const perfect = document.createElement('p');
    perfect.className = 'answer-good';
    perfect.textContent = '전 문항 정답입니다.';
    wrongAnswers.append(perfect);
  } else {
    wrong.forEach(item => {
      const card = document.createElement('article');
      card.className = 'wrong';
      const title = document.createElement('h4');
      title.textContent = `${item.number}번 · ${item.question.chapter} · ${item.question.syllabus}`;
      const prompt = document.createElement('p');
      prompt.textContent = item.question.text;
      const selected = document.createElement('p');
      selected.className = 'answer-bad';
      selected.textContent = `선택: ${item.selected === null ? '미답변' : letters[item.selected]}`;
      const correct = document.createElement('p');
      correct.className = 'answer-good';
      correct.textContent = `정답: ${letters[item.question.answer]}`;
      const explanation = document.createElement('p');
      explanation.className = 'explanation';
      explanation.textContent = item.question.explanation;
      card.append(title, prompt, selected, correct, explanation);
      wrongAnswers.append(card);
    });
  }
}

function buildExportText() {
  const { details, score, wrong } = getResults();
  const chapterMap = new Map();
  details.forEach(item => {
    const bucket = chapterMap.get(item.question.chapter) || { correct: 0, total: 0 };
    bucket.total += 1;
    if (item.correct) bucket.correct += 1;
    chapterMap.set(item.question.chapter, bucket);
  });
  const chapters = [...chapterMap].map(([chapter, value]) => `${chapter} ${value.correct}/${value.total}`).join(', ');
  const wrongLines = wrong.map(item => {
    const chosen = item.selected === null ? '미답변' : letters[item.selected];
    return `${item.number}번 | 실러버스 ${item.question.syllabus} | 선택 ${chosen} | 정답 ${letters[item.question.answer]} | ${item.question.text} | 개념: ${item.question.explanation}`;
  });
  return [
    `ISTQB CTFL v4.0.1 모의고사 2회 결과: ${score}/40점 (${Math.round(score / 40 * 100)}%).`,
    `영역별: ${chapters}.`,
    '',
    '오답 목록:',
    wrongLines.length ? wrongLines.join('\n') : '오답 없음',
    '',
    '위 결과를 채점 기록으로 정리하고, 틀린 문제를 Notion의 ISTQB 오답노트 및 관련 개념정리에 기록·연결해 주세요. 실러버스 절별 취약점과 다음 복습 우선순위도 제안해 주세요.'
  ].join('\n');
}

async function shareResults() {
  const text = buildExportText();
  const status = $('#export-status');
  try {
    if (navigator.share) {
      await navigator.share({ title: 'ISTQB CTFL 모의고사 결과', text });
      status.textContent = '공유가 완료되었습니다.';
    } else if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      status.textContent = '결과를 복사했습니다. ChatGPT 또는 Codex 대화에 한 번만 붙여 넣으세요.';
    } else {
      throw new Error('share unavailable');
    }
  } catch (error) {
    if (error.name === 'AbortError') {
      status.textContent = '공유가 취소되었습니다. 결과는 이 기기에 남아 있습니다.';
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = '결과를 복사했습니다. 대화에 붙여 넣으세요.';
    } catch {
      status.textContent = '결과 파일 저장 버튼을 사용해 주세요.';
    }
  }
}

function downloadResults() {
  const blob = new Blob([buildExportText()], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `istqb-ctfl-mock-2-${new Date().toISOString().slice(0, 10)}.md`;
  link.click();
  URL.revokeObjectURL(url);
  $('#export-status').textContent = '결과 파일을 저장했습니다.';
}

function startTimer() {
  clearInterval(timerHandle);
  const tick = () => {
    if (!state.startedAt || state.finishedAt) return;
    const elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
    const remaining = Math.max(0, DURATION_SECONDS - elapsed);
    const minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
    const seconds = String(remaining % 60).padStart(2, '0');
    timerElement.textContent = `${minutes}:${seconds}`;
    if (remaining === 0) finishExam();
  };
  tick();
  timerHandle = setInterval(tick, 1000);
}

startButton.addEventListener('click', () => beginExam(true));
resumeButton.addEventListener('click', () => beginExam(false));
$('#prev-button').addEventListener('click', () => moveQuestion(-1));
$('#next-button').addEventListener('click', () => moveQuestion(1));
$('#flag-button').addEventListener('click', () => {
  state.flags[state.current] = !state.flags[state.current];
  saveState();
  renderQuestion();
});
$('#open-overview').addEventListener('click', openOverview);
$('#return-button').addEventListener('click', () => {
  showScreen('quiz-screen');
  renderQuestion();
});
$('#finish-button').addEventListener('click', askToFinish);
$('#cancel-finish').addEventListener('click', () => finishDialog.close());
$('#confirm-finish').addEventListener('click', finishExam);
$('#share-button').addEventListener('click', shareResults);
$('#download-button').addEventListener('click', downloadResults);
$('#reset-button').addEventListener('click', () => {
  if (!confirm('저장된 답안과 결과를 모두 지우고 새로 시작할까요?')) return;
  localStorage.removeItem(STORAGE_KEY);
  state = newState();
  clearInterval(timerHandle);
  timerElement.textContent = '60:00';
  resumeButton.classList.add('hidden');
  showScreen('start-screen');
});

if (state.finishedAt) {
  renderResults();
  showScreen('result-screen');
} else if (state.startedAt) {
  resumeButton.classList.remove('hidden');
  resumeButton.textContent = `이어 풀기 · 답변 ${state.answers.filter(answer => answer !== null).length}개`;
}

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}
