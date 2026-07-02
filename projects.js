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
    title:     "Spec Work",
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

  {
    id:        "binggrae-melatonin-nmn",
    section:   "photography",
    category:  "food",
    brand:     "빙그레",
    title:     "멜라토닌&NMN",
    date:      "2025",
    showOnHome: true,
    images: [
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782917257/250617_%E1%84%87%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A6_%E1%84%86%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%90%E1%85%A9%E1%84%82%E1%85%B5%E1%86%AB_NMN_1_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1-10mb_gtvlsb.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782917259/250617_%E1%84%87%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A6_%E1%84%86%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%90%E1%85%A9%E1%84%82%E1%85%B5%E1%86%AB_NMN_2_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1-10mb_qrbcdf.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782917260/250617_%E1%84%87%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A6_%E1%84%86%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%90%E1%85%A9%E1%84%82%E1%85%B5%E1%86%AB_NMN_3_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1-10mb_vxdh3g.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782917245/250617_%E1%84%87%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A6_%E1%84%86%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%90%E1%85%A9%E1%84%82%E1%85%B5%E1%86%AB_NMN4283_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1-10mb_pmtnqu.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782917239/250617_%E1%84%87%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A6_%E1%84%86%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%90%E1%85%A9%E1%84%82%E1%85%B5%E1%86%AB_NMN4323_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1-10mb_bi5hqi.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782917237/250617_%E1%84%87%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A6_%E1%84%86%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%90%E1%85%A9%E1%84%82%E1%85%B5%E1%86%AB_NMN4366_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1-10mb_qrxrrp.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782917244/250617_%E1%84%87%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A6_%E1%84%86%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%90%E1%85%A9%E1%84%82%E1%85%B5%E1%86%AB_NMN4381_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1-10mb_mqnr4m.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782917240/250617_%E1%84%87%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A6_%E1%84%86%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%90%E1%85%A9%E1%84%82%E1%85%B5%E1%86%AB_NMN4398_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1-10mb_sn4kkg.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782917238/250617_%E1%84%87%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A6_%E1%84%86%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%90%E1%85%A9%E1%84%82%E1%85%B5%E1%86%AB_NMN4496_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1-10mb_tui7sa.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782917248/250617_%E1%84%87%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A6_%E1%84%86%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%90%E1%85%A9%E1%84%82%E1%85%B5%E1%86%AB_NMN4519_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1-10mb_pd1ewn.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782917249/250617_%E1%84%87%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A6_%E1%84%86%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%90%E1%85%A9%E1%84%82%E1%85%B5%E1%86%AB_NMN4533_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1-10mb_pnd023.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782917247/250617_%E1%84%87%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A6_%E1%84%86%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%90%E1%85%A9%E1%84%82%E1%85%B5%E1%86%AB_NMN4547_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1-10mb_omhlpj.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782917251/250617_%E1%84%87%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A6_%E1%84%86%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%90%E1%85%A9%E1%84%82%E1%85%B5%E1%86%AB_NMN4606_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1-10mb_dylvs1.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782917255/250617_%E1%84%87%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B3%E1%84%85%E1%85%A6_%E1%84%86%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A1%E1%84%90%E1%85%A9%E1%84%82%E1%85%B5%E1%86%AB_NMN4615_%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1-10mb_uasuds.jpg",
    ]
  },

  {
    id:        "mongbest-water",
    section:   "photography",
    category:  "product",
    brand:     "몽베스트",
    title:     "생수",
    date:      "2025",
    showOnHome: true,
    images: [
      // 첫 번째 = 대표 썸네일 (4089)
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782916532/250612_%E1%84%85%E1%85%B5%E1%84%91%E1%85%B3_%E1%84%86%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B34089-10mb_hcjy10.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782916529/250612_%E1%84%85%E1%85%B5%E1%84%91%E1%85%B3_%E1%84%86%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B34070-10mb_izsxil.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782916538/250612_%E1%84%85%E1%85%B5%E1%84%91%E1%85%B3_%E1%84%86%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B34072-10mb_k6kas6.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782916530/250612_%E1%84%85%E1%85%B5%E1%84%91%E1%85%B3_%E1%84%86%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B34074-10mb_yhq7jq.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782916539/250612_%E1%84%85%E1%85%B5%E1%84%91%E1%85%B3_%E1%84%86%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B34076-10mb_gh0kjb.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782916531/250612_%E1%84%85%E1%85%B5%E1%84%91%E1%85%B3_%E1%84%86%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B34078-10mb_vfy5an.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782916535/250612_%E1%84%85%E1%85%B5%E1%84%91%E1%85%B3_%E1%84%86%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B34082-10mb_petgsh.jpg",
      "https://res.cloudinary.com/cfljj4qd/image/upload/w_1200/v1782916533/250612_%E1%84%85%E1%85%B5%E1%84%91%E1%85%B3_%E1%84%86%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B34094-10mb_ikepaa.jpg",
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

// 검색: 브랜드명 / 프로젝트명 / 카테고리로 프로젝트 찾기
function searchProjects(keyword) {
  const q = keyword.trim().toLowerCase();
  if (!q) return [];
  return PROJECTS.filter(p => {
    const haystack = `${p.brand} ${p.title} ${p.section} ${p.category}`.toLowerCase();
    return haystack.includes(q);
  });
}
