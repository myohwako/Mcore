import React, { useMemo } from "react";
import Card from "./GameCard";
import '../css/GameCard.css';

const gameList = [
    {
        id: 1,
        title: "Alice: Madness Returns",
        price: "$9.99",
        categories: ["horror", "adventure", "action"],
        description: '이상한 나라의 앨리스를 모티브로 한 다크 판타지 게임입니다. 조금 호러한 분위기에 오래된 게임이지만 그만큼 분위기도 좋고 재미있습니다. 엘든 링 앨리스 버전이라고 생각해 주세요.',
        src: "https://i.namu.wiki/i/E7V3ar2EhbeQtdyckYdMFjx1X9Jdg3HeYx8JvVwt6x-krXli_6awrhQ3nNVjC9F3QW9YUipKtyPRi0n_vwuKr8nyXW_KEdb8hdYfUTOvZw0vjIUOKuUQRcT9D33_S5uoP6654Ake_WgocxUqap_N6w.webp",
    },
    {
        id: 2,
        title: "Fran Bow",
        color: "white",
        price: "$14.99",
        categories: ["horror", "adventure", "puzzle"],
        description: '호러 퍼즐 게임입니다. 주인공이 정신병원을 탈출하고,, 모험을 하는 내용이며, 연출이 잔인할 수 있지만 게임성 있고 분위기도 좋습니다. 또한 마지막 메시지가 기억에 많이 남을 정도로,, 끝까지 플레이 해보면 이만한 힐링 게임이없어요.',
        src: "https://m.media-amazon.com/images/M/MV5BMGZjZThjZTItZTA1ZS00ZTVlLWE1NjgtMjQ4ZTUwMGM1MzJhXkEyXkFqcGc@._V1_.jpg",
    },

    {
        id: 3,
        title: "Sally Face",
        color: "white",
        price: "$2.99",
        categories: ["horror", "adventure", "puzzle"],
        description: '모종의 이유로 얼굴을 가리는 마스크를 쓰고 다니는 샐리의 모험입니다. 만약 메탈을 즐겨 듣는다, 조금 불쾌한 걸 좋아한다, 블랙조크를 좋아한다면 재미있게 플레이 할 수 있을 것 같습니다.',
        src: "https://m.media-amazon.com/images/I/81SI6+aiNdL.jpg",
    },

    {
        id: 4,
        title: "Agatha Knife",
        color: "white",
        price: "$2.99",
        categories: ["comedy", "adventure", "Indie"],
        description: '샐리 페이스와도 비슷한 류의 게임입니다. 사이비 종교를 창설해보는 매우 귀여운 게임으로, 정말로 귀여운 그래픽과 그렇지 않은 주인공의 행동들이 재미있는 포인트 입니다.',
        src: "https://store-images.s-microsoft.com/image/apps.15556.66548112218331062.593653a5-162f-40fa-b3e0-be9c86f54db8.3a076445-5cd2-40cb-8b96-0096fd80766a",
    },

    {
        id: 5,
        title: "The Wolf Among Us",
        color: "white",
        price: "$14.99",
        categories: ["cinematic", "mystery", "action"],
        description: '이 게임은 정말 영화같습니다. 연출도 그렇고 정말 동화처럼 잘 만들었어요. 고전 동화책 속 등장인물들이 굉장히 현실적인 버전으로 나타나서 많은 어려움에 휩싸이게 되고, 그것들을 하나하나 해결해 주는 그런 게임입니다. 제목부터 멋있지 않나요? 울프 어몽 어스',
        src: "https://cdn1.epicgames.com/offer/97590ba7ef144232b14093375c468032/EGS_TheWolfAmongUs2_Telltale_S2_1200x1600-28a121945b86101ea1b20cc3d5f86e78",
    },

    {
        id: 6,
        title: "Little Nightmares",
        color: "white",
        price: "$19.99",
        categories: ["Indie", "adventure", "puzzle"],
        description: '어드벤처 게임으로, 3D 횡스크롤 게임입니다. 그래픽도 이쁘고 몰입도도 높아서 한때 엄청 인기를 끌었었어요. 센과 치히로의 행방불명이 생각나기도 합니다.',
        src: "https://i.namu.wiki/i/xjegZ9vmTupFJEivH87XhwnPP-2X-0_0byo68EMJ7mkYb_QbHCQzuIkmis32s95VP0ceV5-Bg01Ns3cQvH5PZg.webp",
    },

    {
        id: 7,
        title: "What Remains of Edith Finch",
        color: "white",
        price: "US$4.99",
        categories: ["Indie", "mystery", "puzzle"],
        description: '가문의 저주를 풀어내는 게임입니다. 동화같은 분위기를 좋아한다면 추천해요. 굉장히 몰입도 있으며 재미있게 플레이 했습니다.',
        src: "https://m.media-amazon.com/images/M/MV5BNzgwOTc5MzktYWZkMS00MjcxLWIzMTMtN2U2MDc0NWM5ZWUyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },

    {
        id: 8,
        title: "Cyberpunk 2077",
        color: "white",
        price: "$59.99",
        categories: ["FPS", "action", "adventure"],
        description: '사이버펑크.. 세일할 때 구매해서 꼭 해보세요,, 저는 멋진 넷러너가되었습니다.',
        src: "https://i.namu.wiki/i/950BfZVhM3ViDYMgeB1lohhaoYgHIn8jHYUAxf6cNIEALIuCOwHekU2oekmBawbVV46eZmi2Hqz4KK_txLMZ95ETVfb5wg-YdWcQntmwckxEiTj5n_vkpb3Sg1mTPa7DZSrMZXtDrncs_iyTZWMLsg.webp",
    },

    {
        id: 9,
        title: "Bad Dream: Coma",
        color: "white",
        price: "$2.24",
        categories: ["adventure", "Indie", "puzzle"],
        description: '클릭으로 퍼즐을 푸는 게임입니다. 러스티레이크와도 비슷하다고 볼 수 있습니다. 저는 이런 게임이 좋은가 봅니다.. 하나같이 좀 어두운 분위기네요.',
        src: "https://www.letsplayindex.com/images/games/m/ba/bad-dream-coma-2017-8301.jpg",
    },

    {
        id: 10,
        title: "Life is Strange",
        color: "white",
        price: "$2.24",
        categories: ["cinematic", "adventure", "Indie"],
        description: '이건 정말 엄청난 힐링 게임입니다. 저는 아직도 이 게임 삽입곡을 들으면 가슴 한쪽이 저릿저릿하고 먹먹해지고..네... 그러네요.. 선택지에 따라 게임 내용이 엄청 많이 달라지는 게임입니다. 언틸던을 해보셨다면 비슷한 느낌이에요. 좀 아쉬운 점은 엔딩은 딱 두 가지 뿐이라는 거지만, 정말 한 번 해볼 가치가 있습니다. 에피소드1이 무료이니 한 번 해보세요.',
        src: "https://image.api.playstation.com/vulcan/ap/rnd/202105/1412/bJYCCmymxvgviuuolfOx8srg.png",
    },

    {
        id: 11,
        title: `OMORI`,
        color: "white",
        price: "$2.24",
        categories: ["Indie", "RPG", "anime"],
        description: '쯔꾸르 게임입니다. 오모리라는 .. (김치찌개) 친구가 환상과 현실을 넘나들며 모험을 하게 되는데요. 이 은둔형 외톨이 오모리에게는 대체 무슨 일이 있었길래 이렇게 살게 된 것일까요..? 궁금하다면 다운로드',
        src: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_Omori.jpg",
    },

    {
        id: 12,
        title: "Pocket Mirror",
        color: "white",
        price: "$2.24",
        categories: ["horror", "RPG", "anime"],
        description: '정말 좋아하는 쯔꾸르 게임입니다. 그래픽이 정말 도트라고 할 수 없을 정도로 아름답고, 문장도 너무.. 마음에 들어요. 사운드도 미쳤습니다. 최고. 한 번 리워크 되어서 리워크 된 버전이 스팀에 판매하는데, 저는 개인적으로 원래 버전이 더 좋은 것 같습니다.',
        src: "https://indee.serviweb.nat.cu/posters/juegos/1294_Pocket%20Mirror%20~%20GoldenerTraum.jpg",
    },

    {
        id: 13,
        title: "トイレ・イン・ワンダーランド",
        color: "white",
        price: "$2.24",
        categories: ["comedy", "RPG", "adventure"],
        description: '이상한 나라의 화장실! 굉장히 웃깁니다. 이것도 쯔꾸르 게임이고, 심심할 때 한 번 해보세요.',
        src: "https://i.namu.wiki/i/kMFKwKmmCuCkP8SmxlL0rHY-9Gjq56MxvrGFoJfwHypMstIytjxiA8gyP9PvdTskwYJXlBCTew_X_iOAZQ8Phw.webp",
    },
];

const GameList = ({ selectedCategory, onCardClick }) => {
    const filteredList = useMemo(() => {
      if (selectedCategory === "all") return gameList;
      return gameList.filter((game) => game.categories.includes(selectedCategory));
    }, [selectedCategory]);
  
    return (
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredList.map((li) => (
          <Card key={li.id} game={li} onClick={onCardClick} />
        ))}
      </div>
    );
  };
  
  
  export default GameList;
  
  // 외부에서 카테고리 생성에만 사용
  export const gameListData = gameList;

// export default GameList;
