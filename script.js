document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const searchTerm = searchInput.value;
        
        // Clear previous search results
        searchResults.innerHTML = '';

        // Fetch search results from API (replace with your API endpoint)
        const apiUrl = `https://api.example.com/search?q=${encodeURIComponent(searchTerm)}`;
        
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            
            // Display search results
            if (data.results && data.results.length > 0) {
                data.results.forEach((result, index) => {
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('result-item');
                    resultItem.innerHTML = `
                        <h3>${index + 1}. ${result.title}</h3>
                        <p>${result.description}</p>
                        <a href="${result.url}" target="_blank">Read more</a>
                    `;
                    searchResults.appendChild(resultItem);
                });
            } else {
                const noResults = document.createElement('p');
                noResults.textContent = 'No results found.';
                searchResults.appendChild(noResults);
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    });
});
