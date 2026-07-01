// ══════════════════════════════════════════════════════════════════
//  포트폴리오 프로젝트 데이터 (이 파일 하나만 수정하면 전체 사이트 반영)
// ══════════════════════════════════════════════════════════════════
//
//  📌 새 프로젝트 추가 방법:
//     아래 PROJECTS 배열에 { } 블록 하나를 복사해서 추가하면 끝!
//     홈 / 목록 페이지 / 상세 페이지가 전부 자동으로 갱신됩니다.
//
//  📌 각 항목 설명:
//     id        : 고유 주소용 이름 (영문/숫자/하이픈, 겹치면 안 됨)
//     section   : "photography" → Photography 탭에 표시
//                 "ai"          → AI Content 탭에 표시
//     category  : Photography일 때 → "food" 또는 "product"
//                 AI Content일 때  → "photography" 또는 "video"
//     brand     : 브랜드명 (예: "Le Labo")
//     title     : 프로젝트명 (예: "Work Spec")
//     date      : 연도 (예: "2026")
//     showOnHome: true → 홈 화면에도 표시 (영상은 보통 false)
//     images    : 이미지 URL 목록 (첫 번째가 대표 이미지)
//     videoIds  : (영상 프로젝트만) 유튜브 영상 ID 목록
//
// ══════════════════════════════════════════════════════════════════

const PROJECTS = [

  {
    id:        "lelabo-workspec",
    section:   "ai",             // AI Content 탭
    category:  "photography",    // AI > Photography
    brand:     "Le Labo",
    title:     "Work Spec",
    date:      "2026",
    showOnHome: true,
    images: [
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782874332/%E1%84%85%E1%85%B3%E1%84%85%E1%85%A1%E1%84%87%E1%85%A9_%E1%84%83%E1%85%A1%E1%86%AB%E1%84%8E%E1%85%A6_01_opqajw.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782874332/%E1%84%85%E1%85%B3%E1%84%85%E1%85%A1%E1%84%87%E1%85%A9_%E1%84%8B%E1%85%A5%E1%84%82%E1%85%A1%E1%84%83%E1%85%A513_%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%84%86%E1%85%AE%E1%86%AF02_wmgz09.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782874332/%E1%84%85%E1%85%B3%E1%84%85%E1%85%A1%E1%84%87%E1%85%A9_%E1%84%82%E1%85%A6%E1%84%85%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B536_%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%84%86%E1%85%AE%E1%86%AF01_rmabvf.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782874332/%E1%84%85%E1%85%B3%E1%84%85%E1%85%A1%E1%84%87%E1%85%A9_%E1%84%87%E1%85%A6%E1%84%85%E1%85%B3%E1%84%80%E1%85%A1%E1%84%86%E1%85%A9%E1%86%BA22_%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%84%86%E1%85%AE%E1%86%AF02_wpwuip.jpg",
    ]
  },

  {
    id:        "ourtea-specwork",
    section:   "ai",             // AI Content 탭
    category:  "photography",    // AI > Photography
    brand:     "OUR TEA",
    title:     "Spec Work",
    date:      "2026",
    showOnHome: true,
    images: [
      // 첫 번째 = 대표 썸네일 (05번)
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782891143/260529_%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%AF%E1%84%90%E1%85%B5_%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%84%86%E1%85%AE%E1%86%AF_05-10mb_uoqbgz.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782891146/260324_%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%AF%E1%84%90%E1%85%B5_%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%84%86%E1%85%AE%E1%86%AF_02-10mb_vbr1ua.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782891146/260324_%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%AF%E1%84%90%E1%85%B5_%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%84%86%E1%85%AE%E1%86%AF_01-10mb_eogw64.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782891144/260529_%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%AF%E1%84%90%E1%85%B5_%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%84%86%E1%85%AE%E1%86%AF_03-10mb_bhtlxa.jpg",
    ]
  },

  {
    id:        "crimion-specwork",
    section:   "ai",             // AI Content 탭
    category:  "photography",    // AI > Photography
    brand:     "CRIMION",
    title:     "Spec Work",
    date:      "2026",
    showOnHome: true,
    images: [
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782891369/%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8B%E1%85%A9%E1%86%AB_%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%86%E1%85%B5%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%83%E1%85%B3_%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%84%86%E1%85%AE%E1%86%AF_01-10mb_nvxjen.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782891365/%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8B%E1%85%A9%E1%86%AB_%E1%84%87%E1%85%A1%E1%86%B7_%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%83%E1%85%B3_%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%84%86%E1%85%AE%E1%86%AF_01-10mb_aarzv0.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782891367/%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8B%E1%85%A9%E1%86%AB_%E1%84%92%E1%85%B3%E1%86%A8%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%8C%E1%85%A1%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%83%E1%85%B3_%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%84%86%E1%85%AE%E1%86%AF_01-10mb_p2mf6t.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782891365/%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8B%E1%85%A9%E1%86%AB_%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%83%E1%85%B3_%E1%84%83%E1%85%A1%E1%86%AB%E1%84%8E%E1%85%A6_%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%84%86%E1%85%AE%E1%86%AF_01-10mb_z99xj9.jpg",
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // 📋 새 프로젝트 추가 시 아래 템플릿을 복사해서 사용하세요:
  // ────────────────────────────────────────────────────────────────
  /*
  // ▼ Photography (Food/Product) 프로젝트 예시
  {
    id:        "jungmiso-almond",
    section:   "photography",
    category:  "food",              // "food" 또는 "product"
    brand:     "정미소",
    title:     "아몬드 스프레드",
    date:      "2025",
    showOnHome: true,
    images: [
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v.../이미지1.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v.../이미지2.jpg",
    ]
  },

  // ▼ AI Video 프로젝트 예시
  {
    id:        "ai-motion",
    section:   "ai",
    category:  "video",
    brand:     "Sora",
    title:     "Product Motion",
    date:      "2025",
    showOnHome: false,              // 영상은 홈에 안 띄우는 게 보통
    videoIds:  ["유튜브ID1", "유튜브ID2"],
    images:    []
  },
  */

];

// ── 헬퍼 함수 (수정할 필요 없음) ──────────────────────────────────
const thumb = (url) => url.replace('/w_1200/', '/w_800/');  // 목록용 축소 이미지

function getProject(id)      { return PROJECTS.find(p => p.id === id); }
function getBySection(sec)   { return PROJECTS.filter(p => p.section === sec); }
function getByCategory(sec, cat) { return PROJECTS.filter(p => p.section === sec && p.category === cat); }
function getHomeWorks()      { return PROJECTS.filter(p => p.showOnHome && p.category !== 'video'); }
