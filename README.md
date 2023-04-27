레딧 클론 사이트

해외 유명 커뮤니티 사이트인 레딧을 클론코딩하여 개발하였습니다.
프론트: 타입스크립트, 리엑트, tailwind
백엔드: node, next.js

기능구현
- 도커를 이용하여 postgres를 백엔드와 연결(DB는 Typeorm으로 구현)
- 로그인시 아이디 비밀번호 서버로 넘어오면 유저정보 확인 후 쿠키에 토큰발급
- 공통으로 사용되는 유저정보인증 재사용성을 위해 미들웨어로 따로 분리
- 댓글 투표 무한스크롤(useSWRINFINITE) 기능 개발 및 aws ec2사용하여 배포

url: http://ec2-15-164-163-51.ap-northeast-2.compute.amazonaws.com/
