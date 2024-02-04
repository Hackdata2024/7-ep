// import React, { useState, useEffect } from 'react';

// const AAnimation = () => {
//   const [isSignIn, setIsSignIn] = useState(true);

//   useEffect(() => {
//     const overlay = document.getElementById("overlay");
//     const openSignUpButton = document.getElementById("slide-left-button");
//     const openSignInButton = document.getElementById("slide-right-button");
//     const leftText = document.getElementById("sign-in");
//     const rightText = document.getElementById("sign-up");
//     const accountForm = document.getElementById("sign-in-info");
//     const signinForm = document.getElementById("sign-up-info");

//     const openSignUp = () => {
//       leftText.classList.remove("overlay-text-left-animation-out");
//       overlay.classList.remove("open-sign-in");
//       rightText.classList.remove("overlay-text-right-animation");

//       accountForm.classList.add("form-left-slide-out");
//       rightText.classList.add("overlay-text-right-animation-out");
//       overlay.classList.add("open-sign-up");
//       leftText.classList.add("overlay-text-left-animation");

//       setTimeout(() => {
//         accountForm.style.display = "none";
//         accountForm.classList.remove("form-left-slide-in");
//         accountForm.classList.remove("form-left-slide-out");
//       }, 700);

//       setTimeout(() => {
//         signinForm.style.display = "flex";
//         signinForm.classList.add("form-right-slide-in");
//       }, 200);
//     };

//     const openSignIn = () => {
//       leftText.classList.remove("overlay-text-left-animation");
//       overlay.classList.remove("open-sign-up");
//       rightText.classList.remove("overlay-text-right-animation-out");

//       signinForm.classList.add("form-right-slide-out");
//       leftText.classList.add("overlay-text-left-animation-out");
//       overlay.classList.add("open-sign-in");
//       rightText.classList.add("overlay-text-right-animation");

//       setTimeout(() => {
//         signinForm.style.display = "none";
//         signinForm.classList.remove("form-right-slide-in");
//         signinForm.classList.remove("form-right-slide-out");
//       }, 700);

//       setTimeout(() => {
//         accountForm.style.display = "flex";
//         accountForm.classList.add("form-left-slide-in");
//       }, 200);
//     };

//     openSignUpButton.addEventListener("click", openSignUp, false);
//     openSignInButton.addEventListener("click", openSignIn, false);

//     return () => {
//       // Clean up event listeners when component unmounts
//       openSignUpButton.removeEventListener("click", openSignUp, false);
//       openSignInButton.removeEventListener("click", openSignIn, false);
//     };
//   }, []); 


// };

// export default AAnimation;
