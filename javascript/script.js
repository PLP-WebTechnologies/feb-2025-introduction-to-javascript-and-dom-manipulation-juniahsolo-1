// Wait for DOM to be fully loaded before executing script
document.addEventListener('DOMContentLoaded', function() {
    // Task 1: Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const dynamicText = document.getElementById('dynamic-text');

    changeTextBtn.addEventListener('click', function() {
        dynamicText.textContent = "Text successfully changed using JavaScript!";
        dynamicText.style.fontWeight = 'bold';
    });

    // Task 2: Modify CSS styles via JavaScript
    const styleDemo = document.getElementById('style-demo');

    styleDemo.addEventListener('click', function() {
        // Toggle between two different styles
        if (styleDemo.style.backgroundColor === 'lightblue') {
            styleDemo.style.backgroundColor = '#f0f0f0';
            styleDemo.style.color = 'black';
            styleDemo.style.border = '2px solid #ccc';
        } else {
            styleDemo.style.backgroundColor = 'lightblue';
            styleDemo.style.color = 'white';
            styleDemo.style.border = '2px solid navy';
        }
    });

    // Task 3: Add or remove an element when a button is clicked
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const toggleContainer = document.getElementById('toggle-container');
    const toggledElement = document.getElementById('toggled-element');

    toggleElementBtn.addEventListener('click', function() {
        if (toggledElement.style.display === 'none') {
            toggledElement.style.display = 'block';
            toggleElementBtn.textContent = 'Hide Element';
        } else {
            toggledElement.style.display = 'none';
            toggleElementBtn.textContent = 'Show Element';
        }
    });

    // Bonus: Change the main heading color on mouseover
    const mainHeading = document.getElementById('main-heading');

    mainHeading.addEventListener('mouseover', function() {
        mainHeading.style.color = 'darkblue';
    });

    mainHeading.addEventListener('mouseout', function() {
        mainHeading.style.color = '';
    });
});