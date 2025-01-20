const axios = require('axios');

// Function to generate a quote image
const quote = async (text, name, photoUrl) => {
    const config = {
        type: 'quote',
        format: 'png',
        backgroundColor: '#FFFFFF',
        width: 512,
        height: 768,
        scale: 2,
        messages: [{
            entities: [],
            avatar: true,
            from: {
                id: 1,
                name: name,
                photo: {
                    url: photoUrl
                }
            },
            text: text,
            replyMessage: {}
        }]
    };

    // Sending POST request to the quote API
    const response = await axios.post('https://quote-api.bokov68872.repl.co/generate', config, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Converting the response image data to base64
    const imageData = Buffer.from(response.data.result.image.data, 'base64');

    return {
        status: '200',
        creator: 'AdrianTzy',
        result: imageData
    };
};

// Exporting the quote function
module.exports = {
    quote: quote
};
