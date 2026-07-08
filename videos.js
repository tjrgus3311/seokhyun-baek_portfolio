// 영상(Video) 프로젝트 데이터. 이 배열에 블록 하나만 추가하면 Video 목록·상세 페이지에 자동 반영됨.
// uploaded: 유튜브 실제 업로드 시각(ISO). 영상 페이지 소스의 itemprop="datePublished" 값을 그대로 기록.
//           같은 date(작업 연도)끼리 정렬할 때 최신순 기준으로 쓰임.
const VIDEOS = [
  {
    id:       "crown-changrain",
    ytId:     "UUoisOqDiGs",
    brand:    "크라운제과",
    title:    "참그레인",
    date:     "2024",
    uploaded: "2026-07-08T07:11:25-07:00",
  },
  {
    id:       "crown-momcookie",
    ytId:     "s5bIYGXDvHg",
    brand:    "크라운제과",
    title:    "맘쿠키",
    date:     "2024",
    uploaded: "2026-07-08T07:14:15-07:00",
  },
  {
    id:       "monkshu-lowsugar-mayo",
    ytId:     "nOmDZcr-OAw",
    brand:    "몽크슈",
    title:    "저당 마요네즈",
    date:     "2026",
    uploaded: "2026-07-08T07:52:34-07:00",
  },
  {
    id:       "specwork-sizzle",
    ytId:     "weLJvoi_Kkw",
    brand:    "Spec Work",
    title:    "SIZZLE",
    date:     "2026",
    uploaded: "2026-07-08T07:49:08-07:00",
  },
];

function getVideo(id) {
  return VIDEOS.find(v => v.id === id);
}

// 작업 연도(date) 최신순, 동일 연도면 유튜브 업로드 시각(uploaded) 최신순.
function getSortedVideos() {
  return [...VIDEOS].sort((a, b) => {
    const yearDiff = Number(b.date) - Number(a.date);
    if (yearDiff !== 0) return yearDiff;
    return new Date(b.uploaded) - new Date(a.uploaded);
  });
}

function ytThumb(ytId) {
  return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
}
