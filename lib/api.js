const axios = require('axios');

// Function to fetch news data from your specific API
async function fetchSriLankaNews() {
    const options = {
        method: 'GET',
        url: 'https://sri-lanka-latest-news.p.rapidapi.com/articles/sirasa',
        headers: {
            'x-rapidapi-key': 'fd927ad26emshe46341a6d5158d6p1f7d13jsn572698cd0a36',
            'x-rapidapi-host': 'sri-lanka-latest-news.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const articles = response.data.articles;

        // Format the news headlines
        let newsMessage = 'Here are the latest news headlines from Sri Lanka:\n\n';
        articles.forEach((article, index) => {
            newsMessage += `${index + 1}. ${article.title}\n${article.url}\n\n`;
        });

        return newsMessage;
    } catch (error) {
        console.error('Error fetching Sri Lanka news:', error);
        return 'Sorry, I could not fetch the news at the moment.';
    }
}

module.exports = {
    fetchSriLankaNews
};
