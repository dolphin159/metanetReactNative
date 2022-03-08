interface user {
  userid: string;
  password: string;
  avatar: string;
  email: string;
  phone: string;
}

interface story {
  userid: string;
  avatar: string;
  storyContent: string;
}

export const StoryList: story[] = [
  {
    userid: 'winter123',
    avatar:
      'https://cdn.newscj.com/news/photo/202201/newscj_%EC%B2%9C%EC%A7%80%EC%9D%BC%EB%B3%B4_2022_1_9_172514_1003175.jpg',
    storyContent: '',
  },
  {
    userid: 'karina00',
    avatar:
      'https://yt3.ggpht.com/ou_xh3wGdrNUFKCy2FwiG1aeobLIvlxF8QaRjl00eZpQZFtAKSmFkJqbh21r-PNNK6jhSvjMAGM=s900-c-k-c0x00ffffff-no-rj',
    storyContent: '',
  },
  {
    userid: 'zeegel1004',
    avatar:
      'https://thumbnews.nateimg.co.kr/view610///news.nateimg.co.kr/orgImg/tt/2020/11/18/20201118_4690255_1605664577.jpg',
    storyContent: '',
  },
  {
    userid: 'ningning1234',
    avatar:
      'https://imgnn.seoul.co.kr/img/upload/2022/02/08/SSI_20220208173916_V.jpg',
    storyContent: '',
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
