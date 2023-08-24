document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    // Simulated search data (replace with your own data)
    const searchData = [
        { title: "Getting Started with QP Search", url: "https://example.com/getting-started", description: "Learn how to use QP Search for effective searches." },
        { title: "Customizing QP Search Experience", url: "https://example.com/customization", description: "Personalize QP Search to match your preferences." },
        // Add more search results here
    ];

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = searchInput.value;
        
        // Clear previous search results
        searchResults.innerHTML = '';

        // Filter search data based on the search term
        const filteredResults = searchData.filter(result => {
            return result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   result.description.toLowerCase().includes(searchTerm.toLowerCase());
        });

        // Display search results
        if (filteredResults.length > 0) {
            filteredResults.forEach((result, index) => {
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
    });
});
