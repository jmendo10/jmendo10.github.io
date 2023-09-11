async function checkGrammar() {
    const text = document.getElementById('textInput').value;
    const apiUrl = 'https://api.languagetool.org/v2/check';
    
    const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({
            text: text,
            language: 'en'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    displayResults(data);
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    data.matches.forEach(match => {
        const errorText = `<p><strong>Error:</strong> ${match.message}</p>`;
        const correctedText = `<p><strong>Correction:</strong> ${match.replacements[0] ? match.replacements[0].value : 'No suggestion'}</p>`;
        resultsDiv.innerHTML += errorText + correctedText;
    });
}