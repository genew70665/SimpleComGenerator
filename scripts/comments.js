// Get references to the HTML elements
const buttonContainer = document.getElementById('button-container');
const commentDisplay = document.getElementById('comment-display');

// Use the Fetch API to load your JSON file
fetch('comments.json')
    .then(response => response.json()) // Parse the JSON from the response
    .then(data => {
        // 'data' is now your array of objects from the JSON file
        data.forEach(entry => {
            // 1. Create a button for each entry
            const button = document.createElement('button');

            // 2. Set the button's text to the entry's title
            button.textContent = entry.Title;

            // 3. Add a click event listener
            button.addEventListener('click', () => {
                // When clicked, update the comment display with the entry's comment
                commentDisplay.textContent = entry.Comment;
            });

            // 4. Add the new button to the button container
            buttonContainer.appendChild(button);
        });
    })
    .catch(error => {
        // Handle any errors that occurred during fetch
        console.error('Error fetching the JSON file:', error);
        commentDisplay.textContent = 'Could not load data. Please check the console for errors.';
    });
