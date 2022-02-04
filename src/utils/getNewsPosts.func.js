import axios from "axios";

const NEWS_ROUTE = "https://newsapi.org/v2/top-headlines?sources=wired&from=2022-01-30&sortBy=popularity&apiKey=7856bc7132644ff593db348b9ec59074";

export const getNewsPosts = async (callback) => {
  try {
    const res = await axios.get(NEWS_ROUTE);
    const articles = res.data.articles;
    callback(articles);
  } catch (error) {
    console.log(error);
  }
};
