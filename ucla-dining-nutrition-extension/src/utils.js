function formatNutritionalData(data) {
    return {
        calories: data.calories || 0,
        protein: data.protein || 0,
        carbs: data.carbs || 0,
        fats: data.fats || 0,
    };
}

function fetchNutritionalData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => formatNutritionalData(data))
        .catch(error => console.error('Error fetching nutritional data:', error));
}

function saveDataToStorage(key, data) {
    chrome.storage.local.set({ [key]: data }, () => {
        console.log('Data saved to storage:', key);
    });
}

function getDataFromStorage(key, callback) {
    chrome.storage.local.get([key], (result) => {
        callback(result[key]);
    });
}