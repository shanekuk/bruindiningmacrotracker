// This file contains the JavaScript code that runs in the context of the UCLA dining menu page.
// It is responsible for extracting nutritional data from the page and sending it to the background script or popup.

const extractNutritionalData = () => {
    const menuItems = document.querySelectorAll('.menu-item'); // Adjust the selector based on the actual menu item class
    const nutritionalData = [];

    menuItems.forEach(item => {
        const name = item.querySelector('.item-name').innerText; // Adjust the selector based on the actual item name class
        const calories = item.querySelector('.item-calories').innerText; // Adjust the selector based on the actual calories class
        const protein = item.querySelector('.item-protein').innerText; // Adjust the selector based on the actual protein class
        const fat = item.querySelector('.item-fat').innerText; // Adjust the selector based on the actual fat class
        const carbs = item.querySelector('.item-carbs').innerText; // Adjust the selector based on the actual carbs class

        nutritionalData.push({
            name,
            calories,
            protein,
            fat,
            carbs
        });
    });

    return nutritionalData;
};

const sendNutritionalData = () => {
    const data = extractNutritionalData();
    chrome.runtime.sendMessage({ type: 'NUTRITIONAL_DATA', data });
};

// Run the function to send nutritional data when the content script is loaded
sendNutritionalData();