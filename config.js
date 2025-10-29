// --- WARNING: FOR LOCAL TESTING ONLY ---
// These are the ACTUAL configuration keys from your AuctionX Firebase project (auctionx-a1d55).

// 1. Define the Firebase Config (must be a JSON string)
const mockFirebaseConfig = JSON.stringify({
    apiKey: "AIzaSyAI4MOThOO09xzDpXBtFiJ1nPGPz71eW9o", 
    authDomain: "auctionx-a1d55.firebaseapp.com",
    projectId: "auctionx-a1d55", 
    storageBucket: "auctionx-a1d55.appspot.com",
    messagingSenderId: "292726662639", 
    appId: "1:292726662639:web:23cb7611ef126df6fbd21a"
});

// 2. Define the global variables the app is expecting
// We use the projectId as the application ID.
window.__app_id = 'auctionx-a1d55'; 
window.__firebase_config = mockFirebaseConfig;
window.__initial_auth_token = undefined; 
