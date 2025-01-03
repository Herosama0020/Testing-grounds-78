async function fetchQuestions() {
    const repoOwner = 'Herosama0020';  // Replace with your GitHub username
    const repoName = 'Testing-grounds-78';  // Replace with your repository name
    const folderPath = 'Questions';

    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}`;

    try {
        const response = await fetch(apiUrl);
        const files = await response.json();

        const flipCardsContainer = document.getElementById('flip-cards-container');

        for (let file of files) {
            if (file.type === 'file' && file.name.startsWith('q') && file.name.endsWith('.txt')) {
                const fileResponse = await fetch(file.download_url);
                const text = await fileResponse.text();
                const [question, answer] = text.split('Answer:').map(part => part.trim());
                const questionText = question.replace('Question:', '').trim();

                const flipCard = document.createElement('div');
                flipCard.className = 'flip-card';
                flipCard.onclick = () => flipCard.querySelector('.flip-card-inner').classList.toggle('rotated');

                flipCard.innerHTML = `
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p>${questionText}</p>
                        </div>
                        <div class="flip-card-back">
                            <p>${answer}</p>
                        </div>
                    </div>
                `;

                flipCardsContainer.appendChild(flipCard);
            }
        }
    } catch (error) {
        console.error('Error fetching questions:', error);
    }
}

fetchQuestions();
