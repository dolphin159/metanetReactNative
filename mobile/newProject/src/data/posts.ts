interface post {
  userid: string;
  postid: string;
  avatar: string;
  like: number;
  comment: comment[];
  ContentImg: string[];
  Content: string;
}

interface comment {
  userid: string;
  avatar: string;
  comment: string;
}

export const PostList: post[] = [
  {
    userid: 'winter123',
    postid: '1',
    avatar:
      'https://cdn.newscj.com/news/photo/202201/newscj_%EC%B2%9C%EC%A7%80%EC%9D%BC%EB%B3%B4_2022_1_9_172514_1003175.jpg',
    like: 1320,
    comment: [
      {
        userid: 'karina00',
        avatar:
          'https://yt3.ggpht.com/ou_xh3wGdrNUFKCy2FwiG1aeobLIvlxF8QaRjl00eZpQZFtAKSmFkJqbh21r-PNNK6jhSvjMAGM=s900-c-k-c0x00ffffff-no-rj',
        comment: 'yeah~~',
      },
      {
        userid: 'zeegel1004',
        avatar:
          'https://thumbnews.nateimg.co.kr/view610///news.nateimg.co.kr/orgImg/tt/2020/11/18/20201118_4690255_1605664577.jpg',
        comment: 'very good',
      },
      {
        userid: 'ningning1234',
        avatar:
          'https://imgnn.seoul.co.kr/img/upload/2022/02/08/SSI_20220208173916_V.jpg',
        comment: 'awesome',
      },
    ],
    ContentImg: [
      'http://www.starinnews.com/news/photo/202110/328063_328332_5233.jpeg',
      'https://img.hankyung.com/photo/202112/BF.28426975.1.jpg',
    ],
    Content: 'picture! ><',
  },
  {
    userid: 'karina00',
    postid: '1',
    avatar:
      'https://yt3.ggpht.com/ou_xh3wGdrNUFKCy2FwiG1aeobLIvlxF8QaRjl00eZpQZFtAKSmFkJqbh21r-PNNK6jhSvjMAGM=s900-c-k-c0x00ffffff-no-rj',
    like: 3322,
    comment: [
      {
        userid: 'winter123',
        avatar:
          'https://cdn.newscj.com/news/photo/202201/newscj_%EC%B2%9C%EC%A7%80%EC%9D%BC%EB%B3%B4_2022_1_9_172514_1003175.jpg',
        comment: 'nice!!!',
      },
      {
        userid: 'zeegel1004',
        avatar:
          'https://thumbnews.nateimg.co.kr/view610///news.nateimg.co.kr/orgImg/tt/2020/11/18/20201118_4690255_1605664577.jpg',
        comment: 'very good',
      },
      {
        userid: 'ningning1234',
        avatar:
          'https://imgnn.seoul.co.kr/img/upload/2022/02/08/SSI_20220208173916_V.jpg',
        comment: 'awesome',
      },
    ],
    ContentImg: [
      'https://file.mk.co.kr/meet/neds/2021/12/image_readtop_2021_1128388_16391105484879287.jpg',
    ],
    Content: '♥♥♥ :)',
  },
  {
    userid: 'zeegel1004',
    postid: '1',
    avatar:
      'https://thumbnews.nateimg.co.kr/view610///news.nateimg.co.kr/orgImg/tt/2020/11/18/20201118_4690255_1605664577.jpg',
    like: 432,
    comment: [
      {
        userid: 'winter123',
        avatar:
          'https://cdn.newscj.com/news/photo/202201/newscj_%EC%B2%9C%EC%A7%80%EC%9D%BC%EB%B3%B4_2022_1_9_172514_1003175.jpg',
        comment: 'nice!!!',
      },
      {
        userid: 'karina00',
        avatar:
          'https://yt3.ggpht.com/ou_xh3wGdrNUFKCy2FwiG1aeobLIvlxF8QaRjl00eZpQZFtAKSmFkJqbh21r-PNNK6jhSvjMAGM=s900-c-k-c0x00ffffff-no-rj',
        comment: 'yeah~~',
      },
      {
        userid: 'ningning1234',
        avatar:
          'https://imgnn.seoul.co.kr/img/upload/2022/02/08/SSI_20220208173916_V.jpg',
        comment: 'awesome',
      },
    ],
    ContentImg: ['https://img.hankyung.com/photo/201912/99.11408081.1.jpg'],
    Content: 'chicken ~~',
  },
  {
    userid: 'ningning1234',
    postid: '1',
    avatar:
      'https://imgnn.seoul.co.kr/img/upload/2022/02/08/SSI_20220208173916_V.jpg',
    like: 324,
    comment: [
      {
        userid: 'winter123',
        avatar:
          'https://cdn.newscj.com/news/photo/202201/newscj_%EC%B2%9C%EC%A7%80%EC%9D%BC%EB%B3%B4_2022_1_9_172514_1003175.jpg',
        comment: 'nice!!!',
      },
      {
        userid: 'karina00',
        avatar:
          'https://yt3.ggpht.com/ou_xh3wGdrNUFKCy2FwiG1aeobLIvlxF8QaRjl00eZpQZFtAKSmFkJqbh21r-PNNK6jhSvjMAGM=s900-c-k-c0x00ffffff-no-rj',
        comment: 'yeah~~',
      },
      {
        userid: 'zeegel1004',
        avatar:
          'https://thumbnews.nateimg.co.kr/view610///news.nateimg.co.kr/orgImg/tt/2020/11/18/20201118_4690255_1605664577.jpg',
        comment: 'very good',
      },
    ],
    ContentImg: [
      'https://cdn.pixabay.com/photo/2017/06/30/22/12/landscape-2459981_960_720.jpg',
    ],
    Content: 'greenday',
  },
  //   {
  //     userid: 'winter123',
  //     avatar:
  //       'https://cdn.newscj.com/news/photo/202201/newscj_%EC%B2%9C%EC%A7%80%EC%9D%BC%EB%B3%B4_2022_1_9_172514_1003175.jpg',
  //     storyContent: '',
  //   },
  //   {
  //     userid: 'karina00',
  //     avatar:
  //       'https://yt3.ggpht.com/ou_xh3wGdrNUFKCy2FwiG1aeobLIvlxF8QaRjl00eZpQZFtAKSmFkJqbh21r-PNNK6jhSvjMAGM=s900-c-k-c0x00ffffff-no-rj',
  //     storyContent: '',
  //   },
  //   {
  //     userid: 'zeegel1004',
  //     avatar:
  //       'https://thumbnews.nateimg.co.kr/view610///news.nateimg.co.kr/orgImg/tt/2020/11/18/20201118_4690255_1605664577.jpg',
  //     storyContent: '',
  //   },
  //   {
  //     userid: 'ningning1234',
  //     avatar:
  //       'https://imgnn.seoul.co.kr/img/upload/2022/02/08/SSI_20220208173916_V.jpg',
  //     storyContent: '',
  //   },
];
