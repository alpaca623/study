/************************************
 * 변수 정의
 *
 * sellQuantity - 매도 잔량
 * buyingQuantity - 매수 잔량
 * price - 가격
 * lastPrice(or nowPrice) - 현재가
 * pastPrice - 전일가
 * netChange - 전일대비
 * highPrice - 고가
 * lowPrice - 저가
 * transactionPrice - 거래대금
 * time - 시간
 * amount - 수량
 * price - 가격
 * tradeNumber - 거래번호
 * userId - ID
 * tradedPrice - 체결가
 * tradedAmount - 체결량
 * signAmountSum - 표시 잔량 합계
 *************************************/

/*************************************
 * KEY 설정
 * 1. 가격 - 판매자가 가격을 등록
 *    기준가격(or 특정 flag)을 기준으로 고/저 구분 할 수 있나?
 *    Q. 기준가격의 거래번호들의 수량을 파악해야한다.(개별수량 및 전체수량)
 * 2. 시간 - 가격에 따른 시간순 정렬이 필요
 * 3. 거래번호 - 거래번호 검색?
 *    받아오는 데이터의 모든 기준은 거래번호여야 한다. - 1차 결론
 *    1. 거래번호를 기준으로 가격, 수량이 분포되어 있고
 *        다른 거래번호와의 가격 비교로 수량 파악이 가능함
 *        (매도인지, 매수인지 구분 필요 - 어떤 값?)
 * 4. ?
 *************************************/
export const data = [
  {
    tradeNumber: 9929391,
    userId: "test01",
    price: 115900,
    amount: 100,
    time: new Date("2019", "06", "30", "12", "51"),
    priceType: 0
  },
  {
    tradeNumber: 9929371,
    userId: "test13",
    price: 115800,
    amount: 1012,
    time: new Date("2019", "06", "30", "12", "51"),
    priceType: 0
  },
  {
    tradeNumber: 9919391,
    userId: "test01",
    price: 115550,
    amount: 100,
    time: new Date("2019", "06", "31", "11", "30"),
    priceType: 1
  },
  {
    tradeNumber: 9959391,
    userId: "test01",
    price: 115250,
    amount: 100,
    time: new Date("2019", "06", "28", "13", "51"),
    priceType: 1
  },
  {
    tradeNumber: 9329391,
    userId: "test01",
    price: 115200,
    amount: 100,
    time: new Date("2019", "06", "28", "13", "58"),
    priceType: 1
  },
  {
    tradeNumber: 6629391,
    userId: "test01",
    price: 115200,
    amount: 100,
    time: new Date("2019", "06", "28", "12", "52"),
    priceType: 1
  },
  {
    tradeNumber: 1329391,
    userId: "test01",
    price: 473,
    amount: 115000,
    time: new Date("2019", "06", "18", "11", "22"),
    priceType: 0
  },
  {
    tradeNumber: 9729391,
    userId: "test01",
    price: 114900,
    amount: 100,
    time: new Date("2019", "06", "30", "09", "13"),
    priceType: 0
  },
  {
    tradeNumber: 9929371,
    userId: "test13",
    price: 115800,
    amount: 1012,
    time: new Date("2019", "06", "30", "12", "51"),
    priceType: 0
  },
  {
    tradeNumber: 9919391,
    userId: "test01",
    price: 115550,
    amount: 100,
    time: new Date("2019", "06", "31", "11", "30"),
    priceType: 1
  },
  {
    tradeNumber: 9959391,
    userId: "test01",
    price: 115250,
    amount: 100,
    time: new Date("2019", "06", "28", "13", "51"),
    priceType: 1
  },
  {
    tradeNumber: 9329391,
    userId: "test01",
    price: 115200,
    amount: 100,
    time: new Date("2019", "06", "28", "13", "58"),
    priceType: 1
  },
  {
    tradeNumber: 6629391,
    userId: "test01",
    price: 115200,
    amount: 100,
    time: new Date("2019", "06", "28", "12", "52"),
    priceType: 1
  },
  {
    tradeNumber: 1329391,
    userId: "test01",
    price: 473,
    amount: 115000,
    time: new Date("2019", "06", "18", "11", "22"),
    priceType: 0
  },
  {
    tradeNumber: 9729391,
    userId: "test01",
    price: 114900,
    amount: 100,
    time: new Date("2019", "06", "30", "09", "13"),
    priceType: 0
  }
];

/**
 * 나와야 하는 데이터 형식을 구성해보자.
 */
const result = {
  highList: [
    {
      tradeNumber: 6629391,
      userId: "test021",
      price: 115200,
      amount: 100,
      time: new Date("2019", "06", "28", "12", "52"),
      priceType: 1
    },
    {
      tradeNumber: 6629391,
      userId: "test021",
      price: 115200,
      amount: 100,
      time: new Date("2019", "06", "28", "12", "52"),
      priceType: 1
    }
  ],
  lowList: [
    {
      tradeNumber: 6629391,
      userId: "test001",
      price: 115200,
      amount: 100,
      time: new Date("2019", "06", "28", "12", "52"),
      priceType: 1
    },
    {
      tradeNumber: 6629391,
      userId: "test013",
      price: 115200,
      amount: 100,
      time: new Date("2019", "06", "28", "12", "52"),
      priceType: 1
    }
  ],
  // 체결가 실시간 리스트
  contractList: [
    {
      tradedPrice: 115200,
      tradedAmount: 234,
      time: new Date("2019", "06", "30", "12", "14"),
      priceType : 0
    },
    {
      tradedPrice: 115200,
      tradedAmount: 234,
      time: new Date("2019", "06", "30", "12", "14"),
      priceType : 1
    },
    {
      tradedPrice: 115200,
      tradedAmount: 234,
      time: new Date("2019", "06", "30", "12", "14"),
      priceType : 0
    },
    {
      tradedPrice: 115200,
      tradedAmount: 234,
      time: new Date("2019", "06", "30", "12", "14"),
      priceType : 0
    },
    {
      tradedPrice: 115200,
      tradedAmount: 234,
      time: new Date("2019", "06", "30", "12", "14"),
      priceType : 1
    },
    {
      tradedPrice: 115200,
      tradedAmount: 234,
      time: new Date("2019", "06", "30", "12", "14"),
      priceType : 1
    }
  ],
  info: {
    lastPrice: 115250, // 현재가
    pastPrice: 114250, // 전일가
    netChange: "24.50%", // 전일대비
    high: 115900, // 고가
    low: 114250, // 저가
    transactionPrice: "120백만" // 거래대금
  }
};
