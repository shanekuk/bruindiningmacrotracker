// This file contains the JavaScript code for the options page. It handles saving and retrieving user settings using Chrome's storage API.

document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save');
    const resetButton = document.getElementById('reset');
    const settingsForm = document.getElementById('settings-form');

    // Load saved settings
    chrome.storage.sync.get(['setting1', 'setting2'], function(data) {
        if (data.setting1) {
            document.getElementById('setting1').value = data.setting1;
        }
        if (data.setting2) {
            document.getElementById('setting2').value = data.setting2;
        }
    });

    // Save settings
    saveButton.addEventListener('click', function() {
        const setting1 = document.getElementById('setting1').value;
        const setting2 = document.getElementById('setting2').value;

        chrome.storage.sync.set({
            setting1: setting1,
            setting2: setting2
        }, function() {
            alert('Settings saved!');
        });
    });

    // Reset settings to default
    resetButton.addEventListener('click', function() {
        chrome.storage.sync.remove(['setting1', 'setting2'], function() {
            document.getElementById('setting1').value = '';
            document.getElementById('setting2').value = '';
            alert('Settings reset to default!');
        });
    });
});