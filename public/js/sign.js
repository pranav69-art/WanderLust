
  window.addEventListener("load", async function () {
    await Clerk.load();

    const signInBtn = document.getElementById("sign-in");
    const signUpBtn = document.getElementById("sign-up");

    if (Clerk.user) {
      Clerk.mountUserButton(document.getElementById("user-button"));
      signInBtn.style.display = "none";
      signUpBtn.style.display = "none";
    } else {
      signInBtn.addEventListener("click", () => {
        Clerk.openSignIn();
      });

      signUpBtn.addEventListener("click", () => {
        Clerk.openSignUp();
      });
    }
  });