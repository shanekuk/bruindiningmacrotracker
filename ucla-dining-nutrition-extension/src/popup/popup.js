document.addEventListener('DOMContentLoaded', function() {
    const nutritionDataContainer = document.getElementById('nutrition-data');
    const fetchDataButton = document.getElementById('fetch-data');

    fetchDataButton.addEventListener('click', function() {
        chrome.runtime.sendMessage({ action: 'getNutritionData' }, function(response) {
            if (response && response.data) {
                displayNutritionData(response.data);
            } else {
                nutritionDataContainer.innerHTML = 'No data available.';
            }
        });
    });

    function displayNutritionData(data) {
        nutritionDataContainer.innerHTML = '';
        data.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `${item.name}: ${item.calories} calories, ${item.protein}g protein, ${item.carbs}g carbs, ${item.fat}g fat`;
            nutritionDataContainer.appendChild(div);
        });
    }
});