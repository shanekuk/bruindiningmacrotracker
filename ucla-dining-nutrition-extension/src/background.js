// This file serves as the background script for the Chrome extension. 
// It manages events, handles messages from content scripts and popups, 
// and stores data using Chrome's storage API.

chrome.runtime.onInstalled.addListener(() => {
    console.log("UCLA Dining Nutrition Extension installed.");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getNutritionalData") {
        // Handle the request for nutritional data
        chrome.storage.local.get(["nutritionalData"], (result) => {
            sendResponse({ data: result.nutritionalData });
        });
        return true; // Indicates that the response will be sent asynchronously
    }
});

// Additional event listeners and functions can be added here as needed.