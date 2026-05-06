export interface Project {
  id: number;
  title: string;
  designer: string;
  category: string;
  img: string;
  desc: string;
}

export const PROJECTS: Project[] = [
  { id: 1, title: '바이오필릭 도시 노드', designer: '팀 01: 홍길동, 이강인', category: 'Residential', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', desc: '자연과 도시의 경계를 허무는 새로운 주거 프로토타입을 제안합니다.' },
  { id: 2, title: '떠다니는 라이브러리', designer: '팀 02: 김철수, 박지성', category: 'Public', img: 'https://images.unsplash.com/photo-1511818473275-1bb099411144?auto=format&fit=crop&w=800&q=80', desc: '수변 공간을 활용한 유동적인 지식 공유의 장을 설계했습니다.' },
  { id: 3, title: '빛의 침묵: 박물관', designer: '팀 03: 이영희, 손흥민', category: 'Culture', img: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&w=800&q=80', desc: '그림자가 공간을 구성하는 핵심 요소가 되는 전시 공간입니다.' },
  { id: 4, title: '수직적 숲의 정원', designer: '팀 04: 최민수, 조유리', category: 'Urban', img: 'https://images.unsplash.com/photo-1449156059431-787c5b76926d?auto=format&fit=crop&w=800&q=80', desc: '고밀도 도심 속 수직 정원을 통한 미세먼지 저감과 휴식 공간 제안.' },
  { id: 5, title: '그리드 너머의 질서', designer: '팀 05: 한소희, 정해인', category: 'Residential', img: 'https://images.unsplash.com/photo-1487958449913-d92799063815?auto=format&fit=crop&w=800&q=80', desc: '정형화된 건축 그리드를 해체하고 사용자 중심의 유연한 공간을 창출합니다.' },
  { id: 6, title: '순환하는 도시 센터', designer: '팀 06: 김나래, 박서준', category: 'Public', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', desc: '자원의 순환과 커뮤니티의 연결을 시각화한 복합 문화 센터입니다.' },
  { id: 7, title: '시간의 단층: 도심 재생', designer: '팀 07: 이동휘, 신세경', category: 'Urban', img: 'https://images.unsplash.com/photo-1481253127861-534498168948?auto=format&fit=crop&w=800&q=80', desc: '오래된 공장 단지를 보존하면서도 현대적 기능을 삽입한 리모델링 프로젝트.' },
  { id: 8, title: '무한의 회랑', designer: '팀 08: 구자철, 이성경', category: 'Culture', img: 'https://images.unsplash.com/photo-1493397869517-2300b4840a79?auto=format&fit=crop&w=800&q=80', desc: '끝없이 이어지는 보행 동선을 통해 공간의 연속성을 탐구합니다.' },
  { id: 9, title: '공중 부유 주거지', designer: '팀 09: 장기하, 아이유', category: 'Residential', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', desc: '지면 점유를 최소화하고 공중 공간을 활용한 미래형 주택 단지.' },
  { id: 10, title: '투명한 경계의 집', designer: '팀 10: 공유, 김고은', category: 'Residential', img: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=800&q=80', desc: '프라이버시를 지키면서도 외부 환경과 소통하는 유동적인 벽체 설계.' },
  { id: 11, title: '모듈러 학교 시스템', designer: '팀 11: 유재석, 조세호', category: 'Public', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', desc: '인구 변화에 대응하여 확장이 가능한 모듈형 초등학교 건물 제안.' },
  { id: 12, title: '물의 기억 박물관', designer: '팀 12: 강하늘, 천우희', category: 'Culture', img: 'https://images.unsplash.com/photo-1518005020250-675921e21720?auto=format&fit=crop&w=800&q=80', desc: '수공간을 적극 활용하여 고요하고 정적인 명상의 공간을 구현.' },
  { id: 13, title: '지하 도시 테라피', designer: '팀 13: 노홍철, 하하', category: 'Urban', img: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=800&q=80', desc: '버려진 지하 보도를 활용한 도심 속 치유 정원과 상업 시설 프로젝트.' },
  { id: 14, title: '바람의 통로 하우징', designer: '팀 14: 현빈, 손예진', category: 'Residential', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80', desc: '기후 위기에 대응하기 위해 자연풍의 흐름을 유도하는 배치 계획.' },
  { id: 15, title: '네트워크 아트 센터', designer: '팀 15: 우도환, 문가영', category: 'Culture', img: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80', desc: '디지털 아트와 오프라인 전시의 경계를 허무는 기술 융합 센터.' },
  { id: 16, title: '커뮤니티 쉐어링 큐브', designer: '팀 16: 최우식, 김다미', category: 'Public', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80', desc: '공유 경제를 기반으로 한 1인 가구용 모듈러 공유 오피스 및 주거.' },
  { id: 17, title: '접혀진 대지의 건축', designer: '팀 17: 정경호, 최수영', category: 'Urban', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80', desc: '지형의 높낮이를 건물 내부로 끌어들여 대지와의 일체감을 강조.' },
  { id: 18, title: '반향하는 소리의 돔', designer: '팀 18: 안효섭, 김세정', category: 'Culture', img: 'https://images.unsplash.com/photo-1464930667322-145604f9d271?auto=format&fit=crop&w=800&q=80', desc: '음향 공학을 건축적으로 풀어낸 소규모 연주 및 공연 전용 돔.' },
  { id: 19, title: '에코-스테이션 2026', designer: '팀 19: 변우석, 김혜윤', category: 'Public', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80', desc: '친환경 모빌리티 거점이자 에너지 자립이 가능한 미래형 정류소.' },
  { id: 20, title: '마지막 평원: 화장장', designer: '팀 20: 조진웅, 김혜수', category: 'Public', img: 'https://images.unsplash.com/photo-1434031215912-06976149f143?auto=format&fit=crop&w=800&q=80', desc: '죽음과 삶의 경계에서 평온한 작별을 돕는 감성적인 장례 시설.' }
];
