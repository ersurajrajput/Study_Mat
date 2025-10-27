export const fetchAllNews = async (query,page) => {
  try {
    let API_KEY = process.env.REACT_APP_NEWS_API_KEY
    let       url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${API_KEY}`;

    if (page === undefined) {
      url += `&page=${page}`;
    }else{
      url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${API_KEY}&page=${page}`;

    }


    let response = await fetch(url);
    let data = await response.json();
 
    return data; // ✅ Must return data
  } catch (error) {
    console.error("Fetch Error:", error);
    return { articles: [], totalResults: 0 }; // safe fallback
  }
};
