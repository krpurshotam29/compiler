// https://rapidapi.com/Glavier/api/online-code-compiler

async function runCode() {
    const selectedLanguage = document.getElementById('language').value;
    const selectedCode = document.getElementById('code').value;

    const url = 'https://online-code-compiler.p.rapidapi.com/v1/';
    const options = {
        method: 'POST',
        headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '38a66360b1mshac073e6005cba83p1beb0cjsnd5bf8b2b8c7f',
                'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
            },
        body: JSON.stringify({
            language: selectedLanguage,
            version: 'latest',
            code: selectedCode,
            input: null
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        document.getElementById('output').textContent = JSON.parse(result).output;
    } catch (error) {
        console.error(error);
    }
}