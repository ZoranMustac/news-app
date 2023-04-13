import axios from 'axios';

export class NewsService {
  URL = 'https://newsapi.org/v2/everything?';
  apiKey = '&apiKey=57260dde21cb4e81ba6533d409f58c98';

  async fetchAll() {
    const allURLs = `${this.URL}q=everything${this.apiKey}`;
    const res = await axios.get(allURLs);
    return res.data;
  }

  async fetchBitcoin() {
    const res = await axios.get(
      this.URL + 'q=bitcoin' + this.apiKey,
    );
    return res.data;
  }

  async fetchArray() {
    const res = await axios.get('../arrayItems');
    return res.data;
  }

  async fetchApple() {
    const res = await axios.get(
      this.URL + 'q=apple' + this.apiKey,
    );
    return res.data;
  }

  async fetchTechCrunch() {
    const res = await axios.get(
      this.URL +
        'domains=techcrunch.com,thenextweb.com' +
        this.apiKey,
    );
    return res.data;
  }

  async fetchTopHeadlines() {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=business` +
        this.apiKey,
    );
    return res.data;
  }

  async fetchHeadline(page) {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=10&page=${page}` +
        this.apiKey,
    );
    return res.data;
  }

  async fetchTesla() {
    const res = await axios.get(
      this.URL + 'q=tesla&sortBy=publishedAt' + this.apiKey,
    );
    return res.data;
  }

  async fetchWSJ() {
    const res = await axios.get(
      this.URL + 'domains=wsj.com' + this.apiKey,
    );
    return res.data;
  }
}
