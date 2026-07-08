// 영상(Video) 프로젝트 데이터. 이 배열에 블록 하나만 추가하면 Video 목록·상세 페이지에 자동 반영됨.
const VIDEOS = [
  {
    id:    "crown-changrain",
    ytId:  "UUoisOqDiGs",
    brand: "크라운제과",
    title: "참그레인",
    date:  "2024",
  },
  {
    id:    "crown-momcookie",
    ytId:  "s5bIYGXDvHg",
    brand: "크라운제과",
    title: "맘쿠키",
    date:  "2024",
  },
];

function getVideo(id) {
  return VIDEOS.find(v => v.id === id);
}

function ytThumb(ytId) {
  return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
}
