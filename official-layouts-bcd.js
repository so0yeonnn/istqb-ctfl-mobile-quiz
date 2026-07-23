globalThis.OFFICIAL_BCD_LAYOUTS = {
  'OB-17': `
    <p>다음 활동 설명과 리뷰 활동을 연결하시오.</p>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>번호</th><th>활동 설명</th></tr></thead>
      <tbody>
        <tr><th>1</th><td>검토할 품질 특성과 완료 조건을 선택한다.</td></tr>
        <tr><th>2</th><td>모든 참여자가 작업 산출물에 접근할 수 있도록 한다.</td></tr>
        <tr><th>3</th><td>작업 산출물에서 이상을 식별한다.</td></tr>
        <tr><th>4</th><td>식별한 이상을 논의한다.</td></tr>
      </tbody>
    </table></div>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>기호</th><th>리뷰 활동</th></tr></thead>
      <tbody>
        <tr><th>A</th><td>개별 리뷰</td></tr><tr><th>B</th><td>리뷰 시작</td></tr>
        <tr><th>C</th><td>리뷰 계획</td></tr><tr><th>D</th><td>의사소통 및 분석</td></tr>
      </tbody>
    </table></div>`,
  'OB-18': `
    <p>다음 리뷰 역할과 책임을 연결하시오.</p>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>번호</th><th>리뷰 역할</th></tr></thead>
      <tbody>
        <tr><th>1</th><td>서기</td></tr><tr><th>2</th><td>리뷰 리더</td></tr>
        <tr><th>3</th><td>중재자</td></tr><tr><th>4</th><td>관리자</td></tr>
      </tbody>
    </table></div>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>기호</th><th>책임</th></tr></thead>
      <tbody>
        <tr><th>A</th><td>효과적인 회의 진행과 편안한 리뷰 환경을 보장한다.</td></tr>
        <tr><th>B</th><td>리뷰 정보를 기록한다.</td></tr>
        <tr><th>C</th><td>리뷰 대상과 필요한 자원을 선택한다.</td></tr>
        <tr><th>D</th><td>일정과 장소를 포함해 리뷰 전반을 책임진다.</td></tr>
      </tbody>
    </table></div>`,
  'OB-22': `
    <p>콜레스테롤과 혈압에 따른 위험 수준 결정표이다.</p>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>조건/결과</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th></tr></thead>
      <tbody>
        <tr><th>콜레스테롤<br>(mg/dl)</th><td>≤124</td><td>≤124</td><td>125–200</td><td>125–200</td><td>≥201</td></tr>
        <tr><th>혈압<br>(mmHg)</th><td>≤140</td><td>&gt;140</td><td>≤140</td><td>&gt;140</td><td>–</td></tr>
        <tr><th>위험 수준</th><td>매우 낮음</td><td>낮음</td><td>중간</td><td>높음</td><td>매우 높음</td></tr>
      </tbody>
    </table></div>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>테스트</th><th>콜레스테롤</th><th>혈압</th></tr></thead>
      <tbody>
        <tr><th>TC1</th><td>125</td><td>141</td></tr><tr><th>TC2</th><td>200</td><td>201</td></tr>
        <tr><th>TC3</th><td>124</td><td>201</td></tr><tr><th>TC4</th><td>109</td><td>200</td></tr>
        <tr><th>TC5</th><td>201</td><td>141</td></tr>
      </tbody>
    </table></div>`,
  'OB-31': `
    <p>프로젝트별 개발 및 테스트 노력은 다음과 같다.</p>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>프로젝트</th><th>개발 노력</th><th>테스트 노력</th></tr></thead>
      <tbody>
        <tr><th>P1</th><td>800,000</td><td>40,000</td></tr>
        <tr><th>P2</th><td>1,200,000</td><td>130,000</td></tr>
        <tr><th>P3</th><td>600,000</td><td>70,000</td></tr>
        <tr><th>P4</th><td>1,000,000</td><td>120,000</td></tr>
      </tbody>
    </table></div>`,
  'OB-32': `
    <p>숫자가 작을수록 우선순위가 높다. 논리적 종속성을 먼저 만족해야 한다.</p>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>테스트</th><th>내용</th><th>우선순위</th></tr></thead>
      <tbody>
        <tr><th>TC1</th><td>제품 A 검색</td><td>4</td></tr><tr><th>TC2</th><td>제품 B 검색</td><td>4</td></tr>
        <tr><th>TC3</th><td>상품 A 상세 정보 보기</td><td>3</td></tr><tr><th>TC4</th><td>상품 B 상세 정보 보기</td><td>2</td></tr>
        <tr><th>TC5</th><td>장바구니에 상품 A 추가</td><td>3</td></tr><tr><th>TC6</th><td>장바구니에 상품 B 추가</td><td>1</td></tr>
        <tr><th>TC7</th><td>주문</td><td>5</td></tr>
      </tbody>
    </table></div>
    <ul><li>검색 → 해당 상품의 상세 정보 보기</li><li>상세 정보 보기 → 해당 상품을 장바구니에 추가</li><li>상품 추가 → 주문</li></ul>`,
  'OB-38': `
    <p>정수 목록을 오름차순으로 정렬하는 기능의 테스트 실행 로그이다.</p>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>테스트</th><th>입력</th><th>실제 출력</th><th>결과</th></tr></thead>
      <tbody>
        <tr><th>TC1</th><td>3</td><td>3</td><td>합격</td></tr>
        <tr><th>TC2</th><td>3, 11, 6, 5</td><td>3, 5, 6, 11</td><td>합격</td></tr>
        <tr><th>TC3</th><td>8, 7, 3, 7, 1</td><td>1, 3, 7, 8</td><td>실패</td></tr>
        <tr><th>TC4</th><td>−2, −2, −2, −3, −3</td><td>−3, −2</td><td>실패</td></tr>
        <tr><th>TC5</th><td>0, −2, 0, 3, 4, 4</td><td>−2, 0, 3, 4</td><td>실패</td></tr>
      </tbody>
    </table></div>`,
  'OB-39': `
    <p>도구 설명과 도구 유형을 연결하시오.</p>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>번호</th><th>설명</th></tr></thead>
      <tbody>
        <tr><th>1</th><td>워크플로우를 추적한다.</td></tr><tr><th>2</th><td>의사소통을 촉진한다.</td></tr>
        <tr><th>3</th><td>가상 머신을 제공한다.</td></tr><tr><th>4</th><td>리뷰를 지원한다.</td></tr>
      </tbody>
    </table></div>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>기호</th><th>도구 유형</th></tr></thead>
      <tbody>
        <tr><th>A</th><td>정적 테스팅 도구</td></tr><tr><th>B</th><td>확장성과 배포 표준화 지원 도구</td></tr>
        <tr><th>C</th><td>DevOps 도구</td></tr><tr><th>D</th><td>협업 도구</td></tr>
      </tbody>
    </table></div>`,
  'OC-05': `
    <p>테스트웨어와 이를 생성하는 테스트 활동을 연결하시오.</p>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>번호</th><th>테스트웨어</th></tr></thead>
      <tbody>
        <tr><th>1</th><td>커버리지 항목</td></tr><tr><th>2</th><td>변경 요청</td></tr>
        <tr><th>3</th><td>테스트 실행 일정</td></tr><tr><th>4</th><td>테스트 컨디션 우선순위</td></tr>
      </tbody>
    </table></div>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>기호</th><th>테스트 활동</th></tr></thead>
      <tbody><tr><th>A</th><td>테스트 분석</td></tr><tr><th>B</th><td>테스트 설계</td></tr><tr><th>C</th><td>테스트 구현</td></tr><tr><th>D</th><td>테스트 완료</td></tr></tbody>
    </table></div>`,
  'OC-17': `
    <p>리뷰 유형과 설명을 연결하시오.</p>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>번호</th><th>리뷰 유형</th></tr></thead>
      <tbody><tr><th>1</th><td>기술적 리뷰</td></tr><tr><th>2</th><td>비공식 리뷰</td></tr><tr><th>3</th><td>인스펙션</td></tr><tr><th>4</th><td>워크쓰루</td></tr></tbody>
    </table></div>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>기호</th><th>설명</th></tr></thead>
      <tbody>
        <tr><th>A</th><td>합의 도출, 새로운 아이디어 생성, 작성자 개선</td></tr>
        <tr><th>B</th><td>리뷰어 교육, 공통 이해 형성, 새로운 아이디어와 잠재 결함 발견</td></tr>
        <tr><th>C</th><td>결함 식별과 프로세스 지표 수집</td></tr>
        <tr><th>D</th><td>결함을 식별하지만 공식적인 결과는 요구하지 않음</td></tr>
      </tbody>
    </table></div>`,
  'OC-22': `
    <p>운전면허 시험 규칙을 나타낸 결정표이다.</p>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>조건/결과</th><th>R1</th><th>R2</th><th>R3</th></tr></thead>
      <tbody>
        <tr><th>첫 시험 도전?</th><td>–</td><td>–</td><td>F</td></tr>
        <tr><th>이론 시험 합격?</th><td>T</td><td>F</td><td>–</td></tr>
        <tr><th>실기 시험 합격?</th><td>T</td><td>–</td><td>F</td></tr>
        <tr><th>운전면허 발급?</th><td>X</td><td></td><td></td></tr>
        <tr><th>운전 강습 추가 요청?</th><td></td><td></td><td>X</td></tr>
        <tr><th>시험 재응시 요청?</th><td></td><td>X</td><td></td></tr>
      </tbody>
    </table></div>`,
  'OD-22': `
    <p>운전자의 나이, 운전 경력, 등록 여부에 따른 분류 결정표이다.</p>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>조건/결과</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th></tr></thead>
      <tbody>
        <tr><th>나이</th><td>0–18</td><td>19–65</td><td>19–65</td><td>&gt;65</td><td>0–18</td><td>19–65</td><td>&gt;65</td></tr>
        <tr><th>운전 경력</th><td>–</td><td>0–4</td><td>&gt;4</td><td>–</td><td>–</td><td>–</td><td>–</td></tr>
        <tr><th>등록 여부</th><td>아니요</td><td>아니요</td><td>아니요</td><td>아니요</td><td>예</td><td>예</td><td>예</td></tr>
        <tr><th>분류</th><td>A</td><td>A</td><td>B</td><td>B</td><td>B</td><td>D</td><td>C</td></tr>
      </tbody>
    </table></div>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>테스트</th><th>나이</th><th>경력</th><th>등록</th><th>성별</th><th>예상 분류</th></tr></thead>
      <tbody>
        <tr><th>TC1</th><td>19</td><td>없음</td><td>아니요</td><td>남</td><td>A</td></tr>
        <tr><th>TC2</th><td>65</td><td>5년</td><td>아니요</td><td>여</td><td>B</td></tr>
        <tr><th>TC3</th><td>66</td><td>없음</td><td>예</td><td>남</td><td>C</td></tr>
        <tr><th>TC4</th><td>65</td><td>4년</td><td>예</td><td>여</td><td>D</td></tr>
      </tbody>
    </table></div>`,
  'OD-23': `
    <p>호텔 예약 시스템의 상태 전이표이다. 빈 칸은 유효한 전이가 없음을 뜻한다.</p>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>상태</th><th>예약 가능</th><th>예약 불가</th><th>객실 변경</th><th>취소</th><th>결제</th></tr></thead>
      <tbody>
        <tr><th>S1 요청 중</th><td>S2</td><td>S3</td><td></td><td></td><td></td></tr>
        <tr><th>S2 확인됨</th><td></td><td></td><td>S1</td><td>S4</td><td>S4</td></tr>
        <tr><th>S3 대기자 명단</th><td>S2</td><td></td><td></td><td>S4</td><td></td></tr>
        <tr><th>S4 종료</th><td></td><td></td><td></td><td></td><td></td></tr>
      </tbody>
    </table></div>`,
  'OD-32': `
    <p>테스트 케이스와 요구사항 사이의 추적성 행렬이다.</p>
    <div class="question-table-wrap"><table class="question-table">
      <thead><tr><th>테스트</th><th>Req1</th><th>Req2</th><th>Req3</th><th>Req4</th><th>Req5</th><th>Req6</th><th>Req7</th></tr></thead>
      <tbody>
        <tr><th>TC1</th><td>X</td><td></td><td>X</td><td>X</td><td></td><td></td><td>X</td></tr>
        <tr><th>TC2</th><td>X</td><td></td><td></td><td></td><td>X</td><td></td><td>X</td></tr>
        <tr><th>TC3</th><td></td><td></td><td></td><td></td><td>X</td><td>X</td><td></td></tr>
        <tr><th>TC4</th><td></td><td>X</td><td></td><td></td><td></td><td></td><td></td></tr>
      </tbody>
    </table></div>`
};
