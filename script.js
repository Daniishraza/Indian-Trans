const translateBtn = document.getElementById('translateBtn');
const inputText = document.getElementById('inputText');
const languageSelect = document.getElementById('languageSelect');
const translatedText = document.getElementById('translatedText');

// Replace with your API endpoint and key
const apiEndpoint = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
const apiKey = '48f23d5365msh932aedba6222833p1079f1jsn487f392d71bd';

translateBtn.addEventListener('click', async () => {
    const text = inputText.value;
    const targetLang = languageSelect.value;

    const data = new URLSearchParams();
    data.append('q', text);
    data.append('target', targetLang);
    
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    };

    try {
        const response = await fetch(apiEndpoint, options);
        const result = await response.json();
        translatedText.textContent = result.data.translations[0].translatedText;
    } catch (error) {
        console.error('Error:', error);
        translatedText.textContent = 'Error occurred while translating.';
    }
});
