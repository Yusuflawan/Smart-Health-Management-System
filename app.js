// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyAOkihVjC4fks5LTMdgi6A5EMOOIjhEDnQ",
//     authDomain: "smart-health-management-eafef.firebaseapp.com",
//     projectId: "smart-health-management-eafef",
//     storageBucket: "smart-health-management-eafef.appspot.com",
//     messagingSenderId: "702245878117",
//     appId: "1:702245878117:web:d7b6e1b95328dcb102c98c"
//   };

//     // Initialize Firebase
//     // const app = initializeApp(firebaseConfig);

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Google login functionality
// const googleLoginBtn = document.getElementById("googleLoginBtn");

// googleLoginBtn.addEventListener("click", () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth()
//         .signInWithPopup(provider)
//         .then(result => {
//             const user = result.user;
//             console.log('User Info:', user);
//             alert(`Welcome ${user.displayName}`);
//             // Redirect or perform further actions
//         })
//         .catch(error => {
//             console.error('Error during sign in:', error);
//         });
// });



// {/* <script type="module"> */}
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAOkihVjC4fks5LTMdgi6A5EMOOIjhEDnQ",
    authDomain: "smart-health-management-eafef.firebaseapp.com",
    projectId: "smart-health-management-eafef",
    storageBucket: "smart-health-management-eafef.appspot.com",
    messagingSenderId: "702245878117",
    appId: "1:702245878117:web:d7b6e1b95328dcb102c98c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();

   document.getElementById("googleLoginBtn").addEventListener("click", () => {
    alert("Hiiiiiiiiii");
   });

// </script>






































        // // Import the functions from Firebase SDK
        // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
        // import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

        // // Your web app's Firebase configuration
        // const firebaseConfig = {
        //     apiKey: "AIzaSyAOkihVjC4fks5LTMdgi6A5EMOOIjhEDnQ",
        //     authDomain: "smart-health-management-eafef.firebaseapp.com",
        //     projectId: "smart-health-management-eafef",
        //     storageBucket: "smart-health-management-eafef.appspot.com",
        //     messagingSenderId: "702245878117",
        //     appId: "1:702245878117:web:d7b6e1b95328dcb102c98c"
        // };

        // // Initialize Firebase
        // const app = initializeApp(firebaseConfig);

        // // Initialize Firebase Authentication
        // const auth = getAuth(app);

        // // Google login functionality
        // document.getElementById("googleLoginBtn").addEventListener("click", () => {
        //     const provider = new GoogleAuthProvider();
        //     signInWithPopup(auth, provider)
        //         .then((result) => {
        //             const user = result.user;
        //             console.log('User Info:', user);
        //             alert(`Welcome ${user.displayName}`);
        //             // Further actions or redirect
        //         })
        //         .catch((error) => {
        //             console.error('Error during sign in:', error);
        //         });
        // });
   