const msalConfig = {
  auth: {
    clientId: "14df4285-6c52-447c-aa22-60a7fb5c6aac",
    authority: "https://appalachianitsupportb2c.ciamlogin.com/appalachianitsupportb2c.onmicrosoft.com",
    knownAuthorities: ["appalachianitsupportb2c.ciamlogin.com"],
    redirectUri: "https://appalachianitsupport.com"
  }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

// Handle redirect response
msalInstance.handleRedirectPromise().then(response => {
    if (response && response.account) {
        msalInstance.setActiveAccount(response.account);
    }
});

// Login function used by /login page
function login() {
    msalInstance.loginRedirect();
}

// Logout function used by /account page
function logout() {
    msalInstance.logoutRedirect({
        postLogoutRedirectUri: "https://appalachianitsupport.com/"
    });
}




