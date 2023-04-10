const arrayItems = [
  {
    source: {
      id: '0',
      name: 'DW',
    },
    author: 'Harvey',
    title: 'Trump imprisoned',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ex officiis ab optio id pariatur corporis quod dolorum iure similique dolor accusantium, dolorem in ipsa, suscipit illum nulla. Veniam!',
    url: 'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    urlToImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    publishedAt: '2023-03-22T07:45',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?',
  },
  {
    source: {
      id: '1',
      name: 'DW',
    },
    author: 'Don Lemon',
    title: 'The midterm elections went not as expected',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ex officiis ab optio id pariatur corporis quod dolorum iure similique dolor accusantium, dolorem in ipsa, suscipit illum nulla. Veniam!',
    url: 'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    urlToImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    publishedAt: '2023-03-20T13:45',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?',
  },
  {
    source: {
      id: '2',
      name: 'DW',
    },
    author: 'Tucker Carlson',
    title: 'New J6 footage',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ex officiis ab optio id pariatur corporis quod dolorum iure similique dolor accusantium, dolorem in ipsa, suscipit illum nulla. Veniam!',
    url: 'https://www.nbcnews.com/news/us-news/fox-news-tucker-carlson-fresh-scrutiny-buffalo-mass-shooting-rcna29084',
    urlToImage:
      'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-05/220516-tucker-carlson-mn-1540-1d6c8e.jpg',
    publishedAt: '2023-03-20T09:45',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?',
  },
  {
    source: {
      id: '3',
      name: 'DW',
    },
    author: 'Don Lemon',
    title: 'Crazy Leftists lose their minds',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ex officiis ab optio id pariatur corporis quod dolorum iure similique dolor accusantium, dolorem in ipsa, suscipit illum nulla. Veniam!',
    url: 'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    urlToImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    publishedAt: '2023-03-20T13:45',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?',
  },
  {
    source: {
      id: '4',
      name: 'DW',
    },
    author: 'Don Lemon',
    title: 'Speaker attacked at Harvard university',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ex officiis ab optio id pariatur corporis quod dolorum iure similique dolor accusantium, dolorem in ipsa, suscipit illum nulla. Veniam!',
    url: 'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    urlToImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    publishedAt: '2023-03-20T13:45',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?',
  },
  {
    source: {
      id: '5',
      name: 'DW',
    },
    author: 'Tucker Carlson',
    title: 'Transitioning children',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ex officiis ab optio id pariatur corporis quod dolorum iure similique dolor accusantium, dolorem in ipsa, suscipit illum nulla. Veniam!',
    url: 'https://www.nbcnews.com/news/us-news/fox-news-tucker-carlson-fresh-scrutiny-buffalo-mass-shooting-rcna29084',
    urlToImage:
      'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-05/220516-tucker-carlson-mn-1540-1d6c8e.jpg',
    publishedAt: '2023-03-20T09:45',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?',
  },
  {
    source: {
      id: '6',
      name: 'DW',
    },
    author: 'Don Lemon',
    title: "House speaker's husband attacked at home",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ex officiis ab optio id pariatur corporis quod dolorum iure similique dolor accusantium, dolorem in ipsa, suscipit illum nulla. Veniam!',
    url: 'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    urlToImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    publishedAt: '2023-03-20T13:45',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?',
  },
  {
    source: {
      id: '7',
      name: 'DW',
    },
    author: 'Tucker Carlson',
    title: 'Trump goes back to wwe amid campaign',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ex officiis ab optio id pariatur corporis quod dolorum iure similique dolor accusantium, dolorem in ipsa, suscipit illum nulla. Veniam!',
    url: 'https://www.nbcnews.com/news/us-news/fox-news-tucker-carlson-fresh-scrutiny-buffalo-mass-shooting-rcna29084',
    urlToImage:
      'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-05/220516-tucker-carlson-mn-1540-1d6c8e.jpg',
    publishedAt: '2023-03-20T09:45',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?',
  },
  {
    source: {
      id: '8',
      name: 'DW',
    },
    author: 'Tucker Carlson',
    title: 'Don Lemon got demoted',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ex officiis ab optio id pariatur corporis quod dolorum iure similique dolor accusantium, dolorem in ipsa, suscipit illum nulla. Veniam!',
    url: 'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    urlToImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    publishedAt: '2023-03-20T13:45',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?',
  },
  {
    source: {
      id: '9',
      name: 'DW',
    },
    author: 'Tucker Carlson',
    title: 'Critical Race Theory being taught in school',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ex officiis ab optio id pariatur corporis quod dolorum iure similique dolor accusantium, dolorem in ipsa, suscipit illum nulla. Veniam!',
    url: 'https://www.nbcnews.com/news/us-news/fox-news-tucker-carlson-fresh-scrutiny-buffalo-mass-shooting-rcna29084',
    urlToImage:
      'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-05/220516-tucker-carlson-mn-1540-1d6c8e.jpg',
    publishedAt: '2023-03-20T09:45',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?',
  },
  {
    source: {
      id: '10',
      name: 'DW',
    },
    author: 'Don Lemon',
    title: 'Jazz Jennings regrets transitiong',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ex officiis ab optio id pariatur corporis quod dolorum iure similique dolor accusantium, dolorem in ipsa, suscipit illum nulla. Veniam!',
    url: 'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    urlToImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    publishedAt: '2023-03-20T13:45',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?',
  },
  {
    source: {
      id: '11',
      name: 'DW',
    },
    author: 'Tucker Carlson',
    title: 'AI puts programming jobs up in the air',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ex officiis ab optio id pariatur corporis quod dolorum iure similique dolor accusantium, dolorem in ipsa, suscipit illum nulla. Veniam!',
    url: 'https://www.nbcnews.com/news/us-news/fox-news-tucker-carlson-fresh-scrutiny-buffalo-mass-shooting-rcna29084',
    urlToImage:
      'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-05/220516-tucker-carlson-mn-1540-1d6c8e.jpg',
    publishedAt: '2023-03-20T09:45',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?',
  },
  {
    source: {
      id: '12',
      name: 'DW',
    },
    author: 'Don Lemon',
    title:
      'OpenAI director says AI could take over human race',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ex officiis ab optio id pariatur corporis quod dolorum iure similique dolor accusantium, dolorem in ipsa, suscipit illum nulla. Veniam!',
    url: 'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    urlToImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    publishedAt: '2023-03-20T13:45',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?',
  },
  {
    source: {
      id: '13',
      name: 'DW',
    },
    author: 'Tucker Carlson',
    title: 'ChatGPT does students homework',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ex officiis ab optio id pariatur corporis quod dolorum iure similique dolor accusantium, dolorem in ipsa, suscipit illum nulla. Veniam!',
    url: 'https://www.nbcnews.com/news/us-news/fox-news-tucker-carlson-fresh-scrutiny-buffalo-mass-shooting-rcna29084',
    urlToImage:
      'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-05/220516-tucker-carlson-mn-1540-1d6c8e.jpg',
    publishedAt: '2023-03-20T09:45',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?',
  },
  {
    source: {
      id: '14',
      name: 'DW',
    },
    author: 'Don Lemon',
    title: 'AI could cause a deepfake crisis',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ex officiis ab optio id pariatur corporis quod dolorum iure similique dolor accusantium, dolorem in ipsa, suscipit illum nulla. Veniam!',
    url: 'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    urlToImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/221215095659-donald-trump-file-0822.jpg?c=original',
    publishedAt: '2023-03-20T13:45',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque nesciunt non nam, repudiandae quo quaerat minima labore eaque alias optio mollitia quibusdam, velit maiores reprehenderit debitis numquam voluptas eos?',
  },
];

export default arrayItems;
