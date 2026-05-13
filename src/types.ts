export interface Project {
  id: number;
  title: string;
  designer: string;
  category: string;
  img: string;
  desc: string;
}

export const PROJECTS: Project[] = [
  { id: 1, title: '시티 오아시스', designer: '김보성', category: 'Urban', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', desc: '다양한 재난에 대응하고, 도시와 시민의 회복력을 강화하기 위한 공간입니다.' },
  { id: 2, title: '윤슬 (潤室)', designer: '김슬기', category: 'Culture', img: 'https://images.unsplash.com/photo-1511818473275-1bb099411144?auto=format&fit=crop&w=800&q=80', desc: '빛이 물에 스며들듯, 감정이 조용히 회복되는 공간을 제안합니다.' },
  { id: 3, title: 'MAKER GROUND', designer: '박승현', category: 'Public', img: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&w=800&q=80', desc: '만들고 실험하며 스스로 성장하는 청소년 창작의 공간입니다.' },
  { id: 4, title: '감각의 공명', designer: '이혜연', category: 'Culture', img: 'https://images.unsplash.com/photo-1449156059431-787c5b76926d?auto=format&fit=crop&w=800&q=80', desc: '자연은 공간을 통해 증폭되고 그 울림은 사람의 감각으로 이어집니다.' },
  { id: 5, title: '소음사이 속 고요', designer: '이정민', category: 'Public', img: 'https://images.unsplash.com/photo-1487958449913-d92799063815?auto=format&fit=crop&w=800&q=80', desc: '시끄러운 도시 속 감각을 극대화하는 치유 공간을 설계했습니다.' },
  { id: 6, title: '숨을 쉬는 집', designer: '이수빈', category: 'Residential', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', desc: '단절된 일상 속에서 관계와 흐름을 회복하도록 돕는 주거 공간입니다.' },
  { id: 7, title: '테크노액시스성수', designer: '양종인', category: 'Urban', img: 'https://images.unsplash.com/photo-1481253127861-534498168948?auto=format&fit=crop&w=800&q=80', desc: '평지인 성수에 전시를 관람하고 쉬거나 산책을 할 수 있는 언덕을 제안합니다.' },
  { id: 8, title: '정양원 (靜養院)', designer: '정동주', category: 'Public', img: 'https://images.unsplash.com/photo-1493397869517-2300b4840a79?auto=format&fit=crop&w=800&q=80', desc: '정지된 감정을 고르고, 공간 경험을 통해 점진적 회복을 시키는 도시 건축입니다.' },
  { id: 9, title: '도심 속 치유 공간', designer: '한만호', category: 'Public', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', desc: '휴식, 사색, 감정 회복을 위한 도시 속 열린 공간입니다.' },
  { id: 10, title: '사회 재연결 허브', designer: '황성종', category: 'Public', img: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=800&q=80', desc: '은둔 고립 청년의 사회 재연결을 돕는 통합 건축 플랫폼입니다.' },
  { id: 11, title: '세대 연결소', designer: '허윤', category: 'Public', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', desc: '서로 다른 세대가 일상과 경험을 나누며 소통하는 커뮤니티 공간입니다.' },
  { id: 12, title: 'Axis Hall', designer: '이효재', category: 'Urban', img: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=800&q=80', desc: '폐교 및 공장 재생을 통한 커뮤니티 리밸런싱 센터 프로젝트입니다.' },
  { id: 13, title: '별담', designer: '박시영', category: 'Public', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80', desc: 'AI 기술을 기반으로 한 미래형 공공시설의 새로운 형태를 제안합니다.' },
  { id: 14, title: 'Vertical Archive', designer: '박예빈', category: 'Culture', img: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80', desc: '지역의 기억을 보존하고 수직적으로 쌓아 올린 아카이브 하우스입니다.' },
  { id: 15, title: '감각 통합 공간', designer: '남찬호', category: 'Public', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80', desc: '발달장애 및 감각장애인을 위한 감각통합 복합공간 설계입니다.' },
  { id: 16, title: 'BORN FIRE', designer: '김민찬', category: 'Culture', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80', desc: '버려진 자원을 활용한 업사이클링 복합문화시설입니다.' },
  { id: 17, title: '도시 치유 스튜디오', designer: '이혜빈', category: 'Culture', img: 'https://images.unsplash.com/photo-1464930667322-145604f9d271?auto=format&fit=crop&w=800&q=80', desc: '지친 현대인의 감정 회복을 위한 도시 속 전문 치유 스튜디오입니다.' },
  { id: 18, title: '기억의 집', designer: '임연택', category: 'Culture', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80', desc: '지역의 기억을 아카이브하고 공유하는 문화적 주거 거점입니다.' },
  { id: 19, title: '포레스트', designer: '이서현', category: 'Urban', img: 'https://images.unsplash.com/photo-1434031215912-06976149f143?auto=format&fit=crop&w=800&q=80', desc: '기후 변화 위기에 대응하는 지속 가능한 도심 속 건축 모델입니다.' },
  { id: 20, title: '기억의 문턱', designer: '송태화', category: 'Public', img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80', desc: '죽음과 애도, 기억을 담는 현대적 장례 및 추모 공간 프로젝트입니다.' },
  { id: 21, title: '문턱 없는 귀환', designer: '문성찬', category: 'Residential', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80', desc: '고립된 청년들을 위한 재사회화 하우징 및 공유 주거 제안입니다.' },
  { id: 22, title: '一目暸然 Project', designer: '이준석', category: 'Public', img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80', desc: '명확한 시각적 구성과 동선 계획을 통한 공공 공간의 재해석입니다.' },
  { id: 23, title: '언아웃 (Unout)', designer: '전승환', category: 'Culture', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80', desc: '감정 회복을 위한 전용 치유 스튜디오와 전시 공간의 결합입니다.' },
  { id: 24, title: 'R.F', designer: '김민성', category: 'Public', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80', desc: 'AI 기술을 활용한 하이브리드 형태의 미래형 도서관 제안입니다.' },
  { id: 25, title: '기억의 파편', designer: '홍영기', category: 'Public', img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80', desc: '도시의 조각난 기억들을 건축적 요소로 통합하는 공공 프로젝트입니다.' }
];
