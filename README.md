# techlabs

### 지원자 성명 : 류이서

### 빌드 방법

1. 레포지토리 클론 : 'https://github.com/ryuiseo/techlabs.git'
2. 종속성 설치 : client 폴더, server 폴더 각각 'npm install'
3. 환경변수 세팅 : client 폴더, server 폴더 .env에 CLIENT_ID , CLIENT_SECRET 입력, NAVER_API_BASE_URL=https://openapi.naver.com/v1 입력
4. 프로젝트 시작 : server 폴더 먼저 실행 -> node index.js / client 폴더 -> 'npm start'

### 프로젝트 설명 (CORS에러 해결방법)

- 구현사항

  - 네이버 Open API 키워드 연령별 트렌드 조회를 활용
  - styled-component를 사용해 컴포넌트에 격리된 스타일을 적용
  - rechatrs를 사용하여 연령별 트렌드 조회를 시각화

- CORS에러 해결방법
  - 네이버 Open API는 보안상의 이유로 교차출처 HTTP 요청을 제한하여 CORS 오류 발생
  - 클라이언트에서 http-proxy-middleware를 사용하는 방법도 있지만 개발환경에서만 적용가능하고 배포시 문제가 발생한다.
  - 백엔드 서버로 네이버 Open Api를 가져와서 프론트로 보내주는 방법으로 CORS에러 해결

### 선택구현사항 (x)
