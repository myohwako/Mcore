// 음악 데이터 저장
const albums   = [
    {
      id: 1,
      title: 'I Really Want to Stay at Your House',
      description: '사이버펑크 2077을 플레이 해보셨나요? 애니메이션도 보셨나요? 아직까지 이 음악을 들으면 눈물이 한 방울 흐르곤 하는것입니다..',
      src: 'https://i.scdn.co/image/ab67616d0000b273a91a5b301baac1f46e6f30eb',
    },
    {
      id: 2,
      title: 'owls eye',
      description: '숲속에서 들어야 할 것 같은 음악입니다. 곤충을 키우게 된다면 태교는 이 음악으로 해주고 싶다는 생각이 듭니다.',
      src: 'https://i.scdn.co/image/ab67616d0000b27393f04150372d161d37a8179f',
    },
    {
      id: 3,
      title: 'Feel Good Inc.',
      description: '그야말로 feel good, 느좋 음악입니다. 고릴라즈를 많이 사랑해주세요.',
      src: 'https://i.scdn.co/image/ab67616d0000b27319d85a472f328a6ed9b704cf',
    },
    {
      id: 4,
      title: 'Nike Shoes',
      description: '정말 .. 좋습니다. 들으면서 걸으면 8비트로 리듬타게 됩니다. 나이키 신발이 있으시다면 신고 들어보세요. 빈지노 정말 좋아합니다.',
      src: 'https://i.namu.wiki/i/hyInYAqsK3vwvfN4aA1vB54_WA5o57ZCxyNSc2zlEUrK5bDU_6NFTCaNW2txTvpnOFZROYJAfmUU5GugKYvCTg.webp',
    },
    {
      id: 5,
      title: 'MG1',
      description: '머신걸 정말 좋아합니다. 다른 음악들도 너무좋아서 추천하고싶어요. ',
      src: 'https://f4.bcbits.com/img/a1555444215_16.jpg',
    },
    {
      id: 6,
      title: '거인',
      description: '이 전파납치 라는 앨범이 진짜,, 좋습니다. 장르가 포크트로니카라고 하는데, 사운드가 너무~ 마음에 들어요.',
      src: 'https://images.genius.com/6dcbfe8da56ba92e300dfef6f3b538ec.1000x1000x1.png',
    },
    {
      id: 7,
      title: `Cartier'god Icedancer`,
      description: '블레이드 (블레이디 아닙니다.) 노래인데 정말 환상적입니다. Drain Gang의 음악은 꼭 들어보아야 합니다.',
      src: 'https://i1.sndcdn.com/artworks-000464627946-qp8s3e-t500x500.jpg',
    },
    {
      id: 8,
      title: 'DEAD FLOWERS',
      description: '여름 장마철에 들으면 정말 끝내주는 음악입니다.',
      src: 'https://f4.bcbits.com/img/a3290395945_16.jpg',
    },
    {
      id: 9,
      title: 'MAMA LISA',
      description: '스월비의 언더커버엔젤은 명반입니다. 국내 힙합을 잘 모르지만 이건 정말 명반입니다. 꼭 전곡 순서대로 들어보세요.',
      src: 'https://image.bugsm.co.kr/album/images/500/203269/20326912.jpg',
    },
    {
      id: 10,
      title: 'Cherry Waves',
      description: '데프톤즈의 체리웨이브. 저의 테마곡입니다. 제가 그렇게 하기로 정했어요..',
      src: 'https://i.scdn.co/image/ab67616d0000b273c869fa3b4e0ce4dd9818a40e',
    },
    {
      id: 11,
      title: 'Warm On A Cold Night',
      description: '새벽 1-2시쯤 꼭 꼭 들어보새요.',
      src: 'https://i.namu.wiki/i/INboBhg7ulIugimrq2rAz-IBHx3XHIHXw3AKjzLrz5C0P7OVasFNX_DSV4gAgDHmU10yGT_8hQBzjyu-E9K5Og.webp',
    },
    {
      id: 12,
      title: 'Lament',
      description: '최근에 클래식, 피아노곡을 정말 자주 듣는데 왜 클래식이 클래식인지 알 것 같습니다.',
      src: 'https://i.scdn.co/image/ab67616d0000b2731f28a7849c4f5d64d0d6383a',
    },
    {
      id: 13,
      title: 'Utopia',
      description: '자연의 소리를 좋아한다면 들어보세요.',
      src: 'https://f4.bcbits.com/img/a2211639953_16.jpg',
    },
    {
      id: 14,
      title: 'Daydreaming',
      description: '이거 진짜 좋습니다. 봄 즈음에 버스나 차 타고 창 밖 보면서 멍 때리고 들어야해요.',
      src: 'https://i.scdn.co/image/ab67616d0000b27345643f5cf119cbc9d2811c22',
    },
    {
      id: 15,
      title: 'Love It If We Made I',
      description: '넷플릭스 시리즈 블랙 미러를 좋아하는 사람은 이 음악을 들어보아야 합니다.',
      src: 'https://i.scdn.co/image/ab67616d0000b2736c582022e90b11f0da287a9a',
    },
    {
      id: 16,
      title: 'Buriburi',
      description: '부리부리~',
      src: 'https://image.bugsm.co.kr/album/images/500/40921/4092157.jpg',
    },
    {
      id: 17,
      title: 'melancholy',
      description: '이건 우울할 때 들으면 100% 우울이 해소되는 최고의 음악입니다. 정말 100%로 행복해 집니다.',
      src: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Shadow_of_Intent_-_Melancholy.png',
    },
  ];

export default albums;