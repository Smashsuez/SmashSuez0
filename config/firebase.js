// import firebase from "firebase/app";
// import "firebase/messaging";

// const firebaseConfig = {
//   // Your Firebase configuration goes here
// };

// //if (!firebase.apps.length) {
// //  firebase.initializeApp(firebaseConfig);
// //}

// const messaging = firebase.messaging.isSupported() ? firebase.messaging() : null;

// if (messaging) {
//   // Request permission to receive notifications
//   Notification.requestPermission().then(permission => {
//     if (permission === "granted") {
//       console.log("Notification permission granted.");
//       // Get the registration token for this user
//       messaging.getToken().then(token => {
//         console.log("Registration token:", token);
//         // Send the token to your server to enable it to send notifications to this user
//       }).catch(error => {
//         console.log("Failed to get registration token:", error);
//       });
//     } else {
//       console.log("Notification permission denied.");
//     }
//   });
// }
