// situationMovies.js
// 영화 분류 데이터
const situationMovies = [
    {
      situation: '외로울 때 보기 좋은 영화',
      movies: [
        {
          id: 'm1',
          title: '가위손',
          thumb: 'https://blog.kakaocdn.net/dn/bRxKct/btsDqbJ42KJ/KriXTKAwN4wRCXeT2jajQk/img.jpg',
          poster: 'https://i.namu.wiki/i/lPh5eRCNGrRjhpgJq8WDq7A3ZYhOihxL4pWFBFG6-j-z3msSGg7E7wpiwE9YO4twCzUMneY05i3F1V_5-h8cHg.webp',
        },
        {
          id: 'm2',
          title: '베티블루 37.2',
          thumb: 'https://cdnimage.dailian.co.kr/news/202101/news_1609639189_951804_m_1.jpeg',
          poster: 'https://www.arthousemomo.co.kr/data/file/movie/20150467D/2949865527_JgqNMZYc_3dcad2f798553a1bc1bced46557e4711be5f2938.jpg',
        },
        {
            id: 'm3',
            title: 'PERFECT BLUE',
            thumb: 'https://visla.kr/wp/wp-content/uploads/2024/11/20241105_film01.jpg',
            poster: 'https://i.namu.wiki/i/tEpFLRZNz2TEj1_BcP73k-YoAnlAVlw_T731psRHW9EAo2X5d436r2wGbc_bKxXjLgORxnhMgJS2-DDC97UQrw.webp',
        },
        {
            id: 'm4',
            title: '케빈에 대하여',
            thumb: 'https://i.namu.wiki/i/vEq1iOGtNHxVRnzp4quykEMgKqgGF2VEzUf_qXOPoRrPYrk40gL7H9lGTgZHhHnER44d8b2E6zhYhQJeg_TByg.webp',
            poster: 'https://i.namu.wiki/i/kEXsjlXfpZ7x76ir7hBu_9OdZzoq94l90mapRZoy1DCQxEHnZ82RhaBdW-uAVTNR0c0G1kbhg_kMPtUQR26qvQ.webp',
        },
        {
            id: 'm5',
            title: '저수지의 개들',
            thumb: 'https://an2-img.amz.wtchn.net/image/v2/djGoEZIYI8IKqHHHtzQTHQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeE5UYzVOamsxTnpNMU56YzVORFUxTlNKOS5qcjhnVjJlTWVZU29DUHhwS0ZDR0Yzc3FZeExpOTAtOXh5bWVVOW9Ham9N',
            poster: 'https://i.namu.wiki/i/okECH-s94hyVDCcCH0n-Wtor6aNlpcOWXRHYZC1dx_fBr0NARYZVmstGwg3RvoJW4LuNnQ9HNBw_Dcq5tzz8Cg.webp',
        },
        {
            id: 'm6',
            title: '불량공주 모모코',
            thumb: 'https://images.justwatch.com/backdrop/11151507/s640/kamikaze-girls',
            poster: 'https://i.namu.wiki/i/oFnQDE_KZTzaYE1IWUIPTfx4in3PtwGPkC54uUYHkNlV4vdkhCGbXzqlSgMHU3GIjaQ2QPjrAxhowJtxpVPxQA.webp',
        },
        {
            id: 'm7',
            title: '거대말벌의 습격',
            thumb: 'https://play-lh.googleusercontent.com/proxy/G4IJtzGpGpMuTiMUvOAPPEMk5hqJLVAVZkFE62MAm_3kananoHFr9LS51IT2qz1MXtARS4GXZ4A8ZrLZH5DjzR1pFULHCMvo9MX9puF204boYGaqibPGksHxVw=s1920-w1920-h1080',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbT5LMpKB_g8xKBv-fRT5shGm3xYM9QCybhA&s',
        },
        {
            id: 'm8',
            title: '해수의 아이',
            thumb: 'https://an2-img.amz.wtchn.net/image/v2/3i3yqUuCBaKeeV_CNo8cpA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZek5UTTVOVEEwT0RVME1qVXlNakV5TVNKOS42X3pGbl9HenBBVV9GNE9BQVdBT0V3aHdWa1RqMGNmSFBMSHBXRWhzWDRF',
            poster: 'https://i.namu.wiki/i/6UmTYq4gO-E0FuMSbD87dCxtpwh1Ezl4eKXyXRx9Q6TkrVxFIytm_NAP7s9Arb3xALj0tat5DpoogSDV5UfL9Q.webp',
        },
        {
            id: 'm9',
            title: '썸머워즈',
            thumb: 'https://imgcp.aacdn.jp/img-a/1200/900/global-aaj-front/article/2018/04/5ac8604b39c21_5ac8603724f68_1980987072.jpg',
            poster: 'https://i.namu.wiki/i/3xwaxcTITN0X2iHkIWx_GHFydWQRh9QNvt5CHBmEkL-b55Ci_D2kOLF8JAslhwsEkLrGUBzZ_sQZEiVz2s2t0A.webp',
        },
        {
            id: 'm10',
            title: '몽상가들',
            thumb: 'https://an2-img.amz.wtchn.net/image/v2/yqdT3pVXsp_GrS48SRN2QQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRneU5qVXdNamN4TmpZeE1UQXlNaUo5LnMxTHlnZzlyOGJ1YVY3UEZFb0RaSFMyMEhlZ2gtRjZhWWYxTksxWHZPSGM=',
            poster: 'https://i.namu.wiki/i/tESKCtBDh03gDnpiYlLgKk2p_CPeKHbTvMsy3fOL5CHSS1iH3xDVGCk8cs64kuLyTbHgRC3iMYjVkiOdZsBLJA.webp',
        },
        // ...
      ],
    },
    {
      situation: '비 오는 날 보기 좋은 영화',
      movies: [
        {
          id: 'm1',
          title: '중경삼림',
          thumb: 'https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdW-kC5PItW9w3UduT5DM0GNFEGeqBtVB1IXPJ5sS8pwskqdsu7AidBO-FDh16-d3TDNw3ho3alR0jndEBey_SYhap7heM-uJVoO.jpg?r=27f',
          poster: 'https://i.namu.wiki/i/s_NXoK_1XVDYVyFRbWkeeQHZjOYPQ6Zhl63hPmF0obsZLbqPZu76_4Yvw3YJd1m-lf4SJwcG95eLZEGljMBtQg.webp',
        },
        {
          id: 'm2',
          title: '날씨의 아이',
          thumb: 'https://an2-img.amz.wtchn.net/image/v2/crO_SeYVG51Uf8VKMYVRIw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeU5USXhOalUwTnpNME1qQXlNamN3TUNKOS5SOHhsb2lXN0hYY250YWM3V09NaVVwVUhPRi1UZDY3OThzWk1QUE1yZm53',
          poster: 'https://i.namu.wiki/i/TD9N7dpXjwAzQDKvUYaRvx5EBmPuIdV1QaGhGkYkFXgoqkz3cvnyqrw5CMTlakc8nYi2rS-ponIiusurNJQRCA.webp',
        },
        {
          id: 'm3',
          title: '혐오스런 마츠코의 일생',
          thumb: 'https://an2-img.amz.wtchn.net/image/v2/NGeU7pMVhzS9SfMdeSaTaA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeE5UYzVOakF3T0RRek5UYzNOakl6TUNKOS5NVmVWSGFRRWZxMERQVTFydVhUclRYVVYyWmUwdExEVlVTeTFKVkJGTkFv',
          poster: 'https://i.namu.wiki/i/4c650JlapnU6ZBdD1fyH-wMAJSM22wHJSq5bXM9LccLnCRoV6RcEv4VDZ0lIFHwpOlZqus0kOpqQWsa4M-9XMQ.webp',
        },
        {
          id: 'm4',
          title: '헬레이저',
          thumb: 'https://visla.kr/wp/wp-content/uploads/2019/05/20190507_01.jpg',
          poster: 'https://i.namu.wiki/i/sk2QxmeyNaba5TcsnHbAFypNZuNErHUz99Q3oDk2P7E48-r6CW4WviDc3OGHOyh4CkWjUr24EMpUWwS3Gbc5eQ.webp',
        },
        {
          id: 'm5',
          title: '항생제',
          thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHHk89w0BtlaL5gfuoLxmzJTR20NRBNGLoMw&s',
          poster: 'https://an2-img.amz.wtchn.net/image/v2/8XSXs8iK95DmhQVezeVE8w.webp?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM04yY0hGNGVITjJjbVptZUhaek1HbHpNWFo1SW4wLnZWVFBsVkVOMS1fX29GTzZYM3p5TmlRaEJFb3pXR2tyX3JvaEw2emZpR2c=',
        },
        {
          id: 'm6',
          title: '라스트 나잇 인 소호',
          thumb: 'https://d3ihz389yobwks.cloudfront.net/1637902635355z3dGc.jpg',
          poster: 'https://i.namu.wiki/i/N41XXQ8Z4BQYSqQRnX5cB_uIilIMBgerUspdbzqNPjMRCh-ZNwt3J065hk6RqRwVuuSUsknSnRfTWB5AAhv4Gw.webp',
        },
        {
          id: 'm7',
          title: '해피 데스데이',
          thumb: 'https://img.seoul.co.kr/img/upload/2017/11/08/SSI_20171108140811_O2.jpg',
          poster: 'https://i.namu.wiki/i/5O78YCVKV87paXIpw-OKOhVWloL3NFmbqBHLD0zbBKDezvVqoeG44Y51G0m_dXsbt7vGzLmNpVf3PDmME09RQA.webp',
        },
        {
          id: 'm8',
          title: '캐빈 인 더 우즈',
          thumb: 'https://fpost.co.kr/board/data/editor/2107/ff5eac1826220d097f81e8902a93f098_1627194972_8394.jpg',
          poster: 'https://i.namu.wiki/i/qE89uYiaLqgEAn1TTgn8F_J1yf-i6Ml-t0ChYiku0_tGH1TGsHcL2PxiiGVM5pMY_y1-qckvvKLjAa11NF3AmQ.webp',
        },
        {
          id: 'm9',
          title: '레이니 데이 인 뉴욕',
          thumb: 'https://an2-img.amz.wtchn.net/image/v2/GaYrRVIBMgaUUVW6YhiCUg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeE5UZ3pOakV4TVRNME1USTFORE01TlNKOS5VUFNnbTUwS3ZZSlJzUnlBVWhlVFlJYVpOMlFndmxyb19tZGxIUFBtVEpn',
          poster: 'https://biz.chosun.com/resizer/v2/INJUY6INA6TDVNN7KANPBAGCYI.jpg?auth=c31a6e5ffabd33288a54a186b7c0ae0921763989877f4414119080bd230282c8&width=530&height=759&smart=true',
        },
        {
          id: 'm10',
          title: '코렐라인',
          thumb: 'https://m.media-amazon.com/images/S/pv-target-images/2f725d22c70e87536a4e331afdaaa5607fe97a40cd24507581c8261e3a319a4d.jpg',
          poster: 'https://i.namu.wiki/i/UBU17swXFMNf76PcT4nTNYilJF3hOGReUxFKpNMg7yMTWr6u-IIzJXJXjX1rjmmXq1vkbNuOVNxQTUpuw0bysQ.webp',
        },

      ],
    },
    {
      situation: '힐링이 필요한 날!',
      movies: [
        {
          id: 'm1',
          title: '스쿨 오브 락',
          thumb: 'https://thumbnews.nateimg.co.kr/view610///news.nateimg.co.kr/orgImg/tr/2023/04/06/51951b18-2de0-41bc-ac1c-accb76bae1ed.jpg',
          poster: 'https://i.namu.wiki/i/KuHub_jjRausjVzF22FPxvdiQVfe0mSX3nqpTMD0UK_BanEINHsXipFBKoD2BQkUkuhfY0WiBauHcHDdZ6ZEKg.webp',
        },
        {
          id: 'm2',
          title: '플로리다 프로젝트',
          thumb: 'https://i.namu.wiki/i/Bqkzzaw9D6xC9_a2PwMI90o72_Oyd1-gIadHBdKEGSCIfG6aapAFcBUJYFh21Z3L-ZdQU4U939_Lrmjwaf4dMg.webp',
          poster: 'https://i.namu.wiki/i/X3p1gFytDLQBIyBYzZ6QWca_0DOi9hu2cMQRPlT0ZizZxWtwOAhS_8cE6C2LRU42hJdqIHe_PSGuvJaCoMZckw.webp',
        },
        {
          id: 'm3',
          title: '벨벳 골드마인',
          thumb: 'https://www.busan.com/nas/data/content/image/2014/07/25/20140725000036_0.jpg',
          poster: 'https://i.namu.wiki/i/Yw83hihfuGRPtAbxx_aU157fcdbiN1X_aB26CuiysUEFRkMcyjIGWTZknehASHTZ49_AwUyfkf1tZtcrV7L5ag.jpg',
        },
        {
          id: 'm4',
          title: '너를 사랑할 수 없는 10가지 이유',
          thumb: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/8f0becc9-afc0-4365-bbe9-cb0298f677d0/compose?aspectRatio=1.78&format=webp&width=1200',
          poster: 'https://i.namu.wiki/i/_ex4s16bpga6Fxe5tr_Dkc-8uwOS4lYbwbSBOxnNVavc3NA6MuaI0beFhtJsm0fsesiDdTqqR7w435h4PgjgOA.webp',
        },
        {
          id: 'm5',
          title: '노트북',
          thumb: 'https://t1.daumcdn.net/news/202302/02/tvreport/20230202220031902gzqp.jpg',
          poster: 'https://i.namu.wiki/i/14TpF6rJi8T3re7CbiG4JIjRSXhs-mqTQvCrcb11aZImDM3Pm7ien5Jaf0sZraWy_KmekUbg_0XckXSAtUQxUw.webp',
        },
        {
          id: 'm6',
          title: '물랑 루즈',
          thumb: 'https://img.sbs.co.kr/newimg/news/2001/100006445_700.jpg',
          poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYoWEszRIaFBbvV1juZH3n4acsb2KXr330Q&s',
        },
        {
          id: 'm7',
          title: '퀸카로 살아남는 법',
          thumb: 'https://cdn.d-art.co.kr/news/photo/202404/385_290_032.jpeg',
          poster: 'https://i.namu.wiki/i/s_jrXdpy8FxXoJhmHHVLbTU4mJF6QWI4RE96ztmEFDyvck5uXM9Y3eO24v2MyjbQq60kRqfrmXw361RdswzGZg.webp',
        },
        {
          id: 'm8',
          title: '유령신부',
          thumb: 'https://image.yes24.com/images/chyes/dvd/soma/20060419/RPDVD_094.jpg',
          poster: 'https://i.namu.wiki/i/jkPpojEveeHGeAHQf5do0LZqOMBwS7QWe5-OGOrwHS_x1Cd2srp3YH52TQ9GXDH8eCSTbkq8nqu-5YA15WAwBQ.webp',
        },
        {
          id: 'm9',
          title: '이상한나라의 앨리스',
          thumb: 'https://i.namu.wiki/i/liZadhImppIh2iRHnKQrh5Fk_0NjKCi74xQCVW7VCxEzua3FPtRqBrH5A3Tfy6hZxgVg4QDoneS8XajVVZdsVg.webp',
          poster: 'https://i.namu.wiki/i/uVcZ3fR6u6iDhhv6mfx6kuqfL-hgZOAkrIENtO5Gcc_VKFAiuAPMdr2I0ojpZSm3dzQ5wpU9Iqpy-6yi7JAKxg.webp',
        },
        {
          id: 'm10',
          title: '피부',
          thumb: 'https://blog.kakaocdn.net/dn/coHUZU/btqOjlO4YRW/Ilyq9Zuk8Z7sB1QIUTkvS1/img.jpg',
          poster: 'https://an2-img.amz.wtchn.net/image/v2/f66inf81um-lMVB2UEANCQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM0owWkhWbWJUUnFaMnMxZVc1MWEzRm5jMjV0SW4wLlNRMldIMWctMktEOExCdXJMTVFaM1UzUGl1WFNWbE1XNW1IMEhOaWNLdHM=',
        },

      ],
    },
  ];
  
  export default situationMovies;
  