// HotDeal.jsx
// const resp = await axios.get('EC2IP:8000/api/hotdeals')
// // const resp = RESP.HOTDEALS;
// for (let i=0; i<resp.length; i++) {

// }

// response.js
const RESP = {
  LOGIN: {
      user: [
        {
        token: "eyJ0eXAi...",
        name: "박승현",
      },
    ]
  },
  COMMERCIALS: 
     [
      {
        id: "0",
        member: "member1",
        content: "content1",
        img:
          "http://ui.ssgcdn.com/cmpt/banner/202103/2021032509540448772796294379_265.jpg",
        device:"device1",
        category: 1,
        score:1
      },
      {
        id: "1",
        member: "member2",
        content: "content2",
        img:
          "http://ui.ssgcdn.com/cmpt/banner/202103/2021032509540448772796294379_265.jpg",
        device:"device2",
        category: 2,
        score:2
      },
      {
        id: "2",
        member: "member3",
        content: "content3",
        img:
          "http://ui.ssgcdn.com/cmpt/banner/202103/2021032509540448772796294379_265.jpg",
        device:"device3",
        category: 3,
        score:3
      },
      {
        id: "3",
        member: "member4",
        content: "content4",
        img:
          "http://ui.ssgcdn.com/cmpt/banner/202103/2021032509540448772796294379_265.jpg",
        device:"device4",
        category: 4,
        score:4
      },
      {
        id: "4",
        member: "member5",
        content: "content5",
        img:
          "http://ui.ssgcdn.com/cmpt/banner/202103/2021032509540448772796294379_265.jpg",
        device:"device1",
        category: 5,
        score:5
      },
      {
        id: "5",
        member: "member1",
        content: "content2",
        img:
          "http://ui.ssgcdn.com/cmpt/banner/202103/2021032509540448772796294379_265.jpg",
        device:"device3",
        category: 4,
        score:3
      },
    ],
  COMMENTS: 
    [
      {
        id: "0",
        member: "member1",
        comment: "content1",
        isDeleteable: true,
      },
      {
        id: "1",
        member: "member2",
        comment: "content2",
        isDeleteable: false,
      },
      {
        id: "2",
        member: "member3",
        comment: "content3",
        isDeleteable: true,
      },
    ],








  HOTDEALS: {
    ok: true,
    result: [
      {
        name: "모나미 3000 플러스펜 낱개",
        price: 200,
        brand: "오피스존",
        mall: "이마트몰",
      },
    ],
  },
  
  ITEM_DETAIL: {
    ok: true,
    result: {
      price: 200,
      name: "",
      sections: {
        detail: {
          modelNo: "1000032249707",
        },
        imgs: [
          "http://gi.esmplus.com/dodomae/NAR/Monami/pluspen3000.jpg",
          "http://ai.esmplus.com/officetop/PIL.jpg",
        ],
        requireds: {
          modelName: "3000 플러스펜 낱개",
        },
        reviews: [
          {
            star: 5,
            comment: "필기감이 좋고 가성비 최고",
            item: "[구매옵션] 색상: 보라색",
            userid: "jgs*******",
            createdAt: "2021-03-31T19:01:56.791388+09:00",
          },
        ],
      },
    },
  },
};

export default RESP;