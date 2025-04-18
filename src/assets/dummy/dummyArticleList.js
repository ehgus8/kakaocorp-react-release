const dummyArticleList = [
  {
    id: 11517,
    title:
      '“하루 1만 명 오가던 골목상권에서 5천 명의 온라인 단골 만들다” 카카오-북촌 계동길 상인회장, 파리 OECD 회의에서 ‘프로젝트 단골’ 성과 발표',
    tags: ['#프로젝트단골', '#oecd', '#상생사례', '#디지털전환', '#소상공인'],
    date: '2025.04.11',
    category: '보도자료',
    imgSrc: `${import.meta.env.BASE_URL}dummy/11517.webp`,
    iconSrc: `${import.meta.env.BASE_URL}dummy/loudspeaker.webp`,
    content: `- 카카오, 아시아 유일 민간 협력사로 ‘D4SME’ 정례 회의 참석… 소상공인 디지털 전환 지원 사례 소개
  - 북촌 계동길 상인회장이 발표 참여해 현장 경험 전달, “골목상권의 디지털 전환 계기”`,
  },
  {
    id: 11516,
    title: '카카오프렌즈, 양재천에서 벚꽃 시즌 오프라인 이벤트 진행',
    tags: ['#IP', '#라이언&춘식', '#카카오프렌즈', '#캐릭터'],
    date: '2025.04.09',
    category: '보도자료',
    imgSrc: `${import.meta.env.BASE_URL}dummy/11516.webp`,
    iconSrc: `${import.meta.env.BASE_URL}dummy/loudspeaker.webp`,
    content: `- 라이언과 춘식이 캐릭터 활용한 벚꽃 맞이 이벤트 진행 …. 9일부터 약 한 달간 운영
  - 초대형 라이언·춘식이 애드벌룬, 친환경 굿즈 패키지 등 다양한 볼거리 제공
  - ‘라춘 복 배달 in 도산공원’ 에 이어 양재천으로 확대… 계절마다 새로운 공간에서 팬 접점 확대`,
  },
  {
    id: 11515,
    title: '카카오메이커스, 누적 거래액 1조 원 돌파',
    tags: [
      '#새가버치',
      '#에코씨드',
      '#임팩트커머스',
      '#제가버치',
      '#카카오메이커스',
    ],
    date: '2025.04.08',
    category: '보도자료',
    imgSrc: `${import.meta.env.BASE_URL}dummy/11515.webp`,
    iconSrc: `${import.meta.env.BASE_URL}dummy/loudspeaker.webp`,
    content: `- 2016년 첫선을 보인 지 9년 만에 누적 거래액 1조 원 달성… 가파른 속도로 거래액 증가
  - 카카오메이커스 공동 주문에 303만 명 참여, 제가버치에서는 7천 톤의 농축수산물 거래
  - 이용자들의 착한 소비 유도, 환경과 사회 전반에 긍정적 변화 주는 ‘임팩트 커머스’로 자리매김`,
  },
  {
    id: 11512,
    title:
      '소셜브랜드 ‘민들레마음’과 따뜻한 마음 전해 카카오톡 선물하기, 2년 연속 중증희귀난치질환 환아와 이벤트 진행',
    tags: [
      '#카카오톡 선물하기',
      '#만약약국',
      '#민들레마음',
      '#중증희귀난치질환 환아',
      '#만우절 이벤트',
    ],
    date: '2025.03.28',
    category: '보도자료',
    imgSrc: `${import.meta.env.BASE_URL}dummy/11512.webp`,
    iconSrc: `${import.meta.env.BASE_URL}dummy/loudspeaker.webp`,
    content: `- 선물하기, 매년 ‘착한 거짓말’을 주제로 따뜻한 마음 전해
  - 선물하기에 ‘만약 약국’ 오픈.. 마음작가로 변신한 환아들의 ‘만약’ 처방전 공개
  - 마음작가들의 그림으로 선물하기 홈 화면 단장하고, 선물하기 추천 선물 선봬
  
   `,
  },
  {
    id: 11511,
    title:
      '카카오, 산불피해 복구 지원 모금액 50억 넘었다… 카카오도 10억 기부 동참',
    tags: ['#카카오같이가치', '#산불피해기부'],
    date: '2025.03.27',
    category: '보도자료',
    imgSrc: `${import.meta.env.BASE_URL}dummy/11511.webp`,
    iconSrc: `${import.meta.env.BASE_URL}dummy/loudspeaker.webp`,
    content: `- 23일부터 카카오같이가치서 모금 진행, 이용자 120만 명 동참하며 50억 이상 모금액 조성
  - 응원 댓글 1건마다 카카오가 1천 원 기부… 현재까지 5억 원 기부, 총 10억 기부 예정`,
  },
  {
    id: 11510,
    title: '카카오, 제30기 정기주총 개최…함춘승 이사회 의장 선임',
    tags: ['#카카오톡 선물하기', '#만약약국', '#민들레마음'],
    date: '2025.03.26',
    category: '보도자료',
    imgSrc: `${import.meta.env.BASE_URL}dummy/11510.webp`,
    iconSrc: `${import.meta.env.BASE_URL}dummy/loudspeaker.webp`,
    content: `- 신종환 CFO, 신규 사내이사 선임
  - 김선욱 법무법인 세승 변호사, 사외이사 및 감사위원 신규 선임
  [2025-03-26] 카카오가 제30기 정기 주주총회 후 열린 이사회에서 함춘승 피에이치앤컴퍼니 사장을 신규이사회 의장으로 선임했다.`,
  },
  {
    id: 11507,
    title:
      '카카오임팩트, 테크포임팩트 LAB 성과공유회서 7개 사회 혁신 기술 공개',
    tags: ['#성과공유회', '#카카오임팩트', '#테크포임팩트'],
    date: '2025.03.24',
    category: '보도자료',
    imgSrc: `${import.meta.env.BASE_URL}dummy/11507.webp`,
    iconSrc: `${import.meta.env.BASE_URL}dummy/loudspeaker.webp`,
    content: `- 21일 카카오 판교아지트에서 성과공유회 열고 5개월간 개발한 7개 기술 솔루션 발표
  
  - 저사양 기기용 백내장 진단 AI앱, 쉬운 글 AI 번안 서비스 등 올 상반기 기술 상용화 눈앞
  - IT 전문가와 사회혁신가의 네트워킹 기회 마련··· 기술로 만드는 사회 변화에 지속 지원 약속
      `,
  },
  {
    id: 11508,
    title:
      '카카오, 포털 다음(Daum) 뉴스에 ‘지역’ 카테고리 49개 언론사 신규 입점',
    tags: ['#콘텐츠CIC', '#다음뉴스', '#포털 다음', '#입점프로세스'],
    date: '2025.03.24',
    category: '보도자료',
    imgSrc: `${import.meta.env.BASE_URL}dummy/11508.webp`,
    iconSrc: `${import.meta.env.BASE_URL}dummy/loudspeaker.webp`,
    content: `- 지역 카테고리 대상 첫 입점 프로세스 진행 … 입점 신청한 언론사 중 63% 입점
  
  - 4월 중 다음뉴스에 ‘지역 뉴스’ 공급 … 다채롭고 심도 있는 지역 뉴스 제공
  
  - 두 번째 입점 프로세스는 ‘경제’ 분야 … ‘강소언론사 입점 트랙’도 마련 예정`,
  },
  {
    id: 11506,
    title: '카카오, 포털 다음(Daum) 스포츠 야구게임센터 개편',
    tags: ['#콘텐츠CIC', '#다음스포츠', '#야구게임센터', '#프로야구', '#다음'],
    date: '2025.03.21',
    category: '보도자료',
    imgSrc: `${import.meta.env.BASE_URL}dummy/11506.webp`,
    iconSrc: `${import.meta.env.BASE_URL}dummy/loudspeaker.webp`,
    content: `- 그래픽 중계, 필드뷰, 득점 문자 중계 고도화로 경기 중계 서비스 강화
  
  - 다양한 기록 제공부터 경기 종료 후 AI 경기 요약까지 … 다채로운 정보 확인 가능
  
  - 안타예측해 상금 얻는 ‘비더레전드’, MVP 투표, 커뮤니티 등 이용자 참여형 서비스 확대`,
  },
  {
    id: 11505,
    title: '카카오같이가치, BIG5 성격검사 리뉴얼 기념 이용자 참여 이벤트 진행',
    tags: ['#마음날씨', '#사회공헌', '#카카오같이가치'],
    date: '2025.03.20',
    category: '보도자료',
    imgSrc: `${import.meta.env.BASE_URL}dummy/11505.webp`,
    iconSrc: `${import.meta.env.BASE_URL}dummy/loudspeaker.webp`,
    content: `- 카카오같이가치 BIG5 성격검사 개편, 한층 사용자 친화적인 테스트로 거듭   
  
  - UI/UX 변화로 사용성 개선하고 카카오프렌즈 쬬르디 30종 캐릭터로 결과 이해도 높여 
  
  - 31일까지 이벤트 진행··· 1천 원 기부쿠폰 최대 1억 원까지 선착순 지급 및 쬬르디 인형 등 경품 제공 `,
  },
  {
    id: 11502,
    title: '카카오, 15주년 맞아 그룹 경영 워크숍 성료',
    tags: ['#이노베이션 윈도우', '#정신아', '#카카오', '#카카오톡'],
    date: '2025.03.19',
    category: '보도자료',
    imgSrc: `${import.meta.env.BASE_URL}dummy/11502.webp`,
    iconSrc: `${import.meta.env.BASE_URL}dummy/loudspeaker.webp`,
    content: `- ‘End to And’ 슬로건 아래 모바일 혁명 잇는 AI 시대 전략 방향 제시
  
  - 정신아 의장 “새로 열린 AI 이노베이션 윈도우 놓쳐선 안 돼”
  
  - 명확한 방향 설정, 효율적 실행 위한 ‘신중하되 대담한 리더십’ 강조 `,
  },
  {
    id: 11503,
    title: "카카오, '2025 온라인 브랜드 소상공인 육성사업(TOPS)' 참여",
    tags: ['#카카오 톡딜', '#소상공인 지원', '#TOPS 사업 참여'],
    date: '2025.03.19',
    category: '보도자료',
    imgSrc: `${import.meta.env.BASE_URL}dummy/11503.webp`,
    iconSrc: `${import.meta.env.BASE_URL}dummy/loudspeaker.webp`,
    content: `- 중기부∙한유원 주관  경쟁력 있는 소상공인 육성하는 TOPS 사업 참여 
  
  - 카카오 톡딜 운영 식품 브랜드 200개사 선정, 성장 지원을 비롯해 다양한  혜택 제공`,
  },
  {
    id: 11501,
    title: '카카오프렌즈, 프리퀄 웹툰 ‘그래도, 라이언’ 공개',
    tags: ['#카카오프렌즈', '#캐릭터', '#라이언', '#웹툰'],
    date: '2025.03.18',
    category: '보도자료',
    imgSrc: `${import.meta.env.BASE_URL}dummy/11501.webp`,
    iconSrc: `${import.meta.env.BASE_URL}dummy/loudspeaker.webp`,
    content: `- 베일에 싸여 있던 둥둥섬과 라이언의 어린 시절 이야기 담은 첫 오리지널 웹툰
  
  - 18일부터 카카오페이지·카카오웹툰 및 글로벌 플랫폼 동시 공개
  
  - 대사 없이 감정을 전달하는 그래픽 노블 스타일의 감성적인 일러스트로 그려내
  
  - 한정판 이모티콘·굿즈 증정 이벤트 진행, 단행본 및 공식 굿즈 출시 예정`,
  },
];

export default dummyArticleList;
