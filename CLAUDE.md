# 포트폴리오 사이트 (seokhyun-baek_portfolio)

백석현 개인 포트폴리오 웹사이트. 사진·영상·AI 콘텐츠 아카이빙 및 취업/이직용.

- 배포 주소: https://seokhyun-baek-portfolio.vercel.app
- 제작 방식: Claude와 대화하며 코드 제작 (코딩 무경험 시작) — 설명은 항상 쉽게, 전문 용어 최소화

## 기술 스택

| 역할 | 도구 | 비고 |
|---|---|---|
| 이미지·영상 저장 | Cloudinary | Cloud Name: cfljj4qd |
| 코드 저장소 | GitHub | seokhyun-baek_portfolio |
| 배포 | Vercel | GitHub 연동 자동 배포 (push하면 자동 반영) |
| 문의 폼 | Formspree | 엔드포인트: /f/xlgypeny |

## 사이트 구조

총 7개 HTML 페이지 + 데이터 파일 1개:

- `index.html` — 홈 (사진 콘텐츠 그리드 + Show more)
- `photography.html` — Photography (All/Food/Product 필터)
- `video.html` — Video
- `ai.html` — AI Content (All/Photography/Video 필터)
- `contact.html` — 연락처 + 문의 폼
- `project.html` — Photography 세부 페이지 템플릿
- `ai-project.html` — AI Content 세부 페이지 템플릿
- `projects.js` — **프로젝트 데이터 통합 관리 파일 (핵심)**. 여기 하나만 수정하면 홈·목록·상세 페이지에 전부 자동 반영됨.

## 디자인 원칙

- 네이비 다크 테마 (기본 색상 `#0d1117`)
- 드롭다운 네비게이션 (Photography → Food/Product, AI Content → Photography/Video)
- 3:4 그리드 + 호버 오버레이 (브랜드명/프로젝트명/날짜)
- 필터 탭 + 개수 뱃지
- 세부 페이지 라이트박스 (스와이프 제스처, 슬라이드 전환 모션 지원)
- 모바일 최적화: 햄버거 메뉴, 스와이프 제스처
- 모든 페이지 네비게이터에 검색 기능 (`projects.js`의 `searchProjects` 함수)

## 새 프로젝트 추가 방법

`projects.js` 파일의 `PROJECTS` 배열에 블록 하나만 추가하면 끝.

```javascript
{
  id:        "프로젝트-고유이름",
  section:   "photography",   // photography 또는 ai
  category:  "food",          // food/product 또는 photography/video
  brand:     "브랜드명",
  title:     "프로젝트명",
  date:      "2026",
  showOnHome: true,
  images: [
    "Cloudinary 이미지 URL (첫 번째가 대표 썸네일)",
  ]
}
```

### 주의사항

- Cloudinary 한글 파일명은 percent-encoding이 필요하므로, Cloudinary에서 **Copy URL로 받은 전체 URL을 그대로 사용**할 것 (직접 타이핑/수정 금지).
- URL에 버전 번호(`v1234567890`)와 확장자(`.jpg`) 포함 여부 확인.
- 수정 후 GitHub에 커밋/푸시하면 Vercel이 자동 배포함 (별도 배포 명령 불필요).
- 이미지 업로드 전 저용량 변환 워크플로가 있음 (사용자 로컬 메모리 참고: PNG/큰 JPEG → JPEG q90, 10MB 이하로 압축 후 Cloudinary 업로드).

## 연락처 정보 (Contact 페이지 반영용)

- 이메일: tjrgus331@gmail.com
- 인스타그램: @m0m0_3311
- 휴대전화: 010-7228-7328
