import { Clerk } from '@clerk/clerk-js';

// Get the key from your environment
const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const clerk = new Clerk(clerkPublishableKey);

async function initClerk() {
  try {
    await clerk.load();

    const signInBtn = document.getElementById('sign-in-btn');
    const signUpBtn = document.getElementById('sign-up-btn');

    // Attach Clerk events to your custom styled buttons
    signInBtn.onclick = () => clerk.openSignIn();
    signUpBtn.onclick = () => clerk.openSignUp();

    // Change UI if already logged in
    if (clerk.user) {
      document.querySelector('h1').innerText = `Welcome, ${clerk.user.firstName}!`;
      // Replace buttons with a 'Go to Dashboard' button or User Button
      document.querySelector('.btn-group').innerHTML = `<div id="user-button"></div>`;
      clerk.mountUserButton(document.getElementById('user-button'));
    }
  } catch (err) {
    console.error('Clerk failed to load', err);
  }
}

initClerk();