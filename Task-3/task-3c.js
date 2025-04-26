document.addEventListener('DOMContentLoaded', function () {
    const jokeContainer = document.getElementById('jokeContainer');
    const setupElement = document.getElementById('setup');
    const punchlineElement = document.getElementById('punchline');
    const fetchJokeBtn = document.getElementById('fetchJokeBtn');
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&safe-mode';

    async function fetchJoke() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.type === 'single') {
                setupElement.textContent = data.joke;
                punchlineElement.textContent = '';
            } else if (data.type === 'twopart') {
                setupElement.textContent = data.setup;
                punchlineElement.textContent = data.delivery;
            } else {
                setupElement.textContent = 'Failed to fetch a joke.';
                punchlineElement.textContent = '';
            }
        } catch (error) {
            console.error('Error fetching joke:', error);
            setupElement.textContent = 'Error fetching joke.';
            punchlineElement.textContent = '';
        }
    }

    fetchJokeBtn.addEventListener('click', fetchJoke);

    // Fetch an initial joke when the page loads
    fetchJoke();
});