
// Select the toggle button and the dropdown menu
const toggleButton = document.querySelector('.togglebutton');
const dropdownMenu = document.querySelector('.dropdown');

// Add an event listener to the toggle button
toggleButton.addEventListener('click', () => {
    // Toggle the visibility class for the dropdown menu
    dropdownMenu.classList.toggle('top-16');
});




