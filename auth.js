const msalConfig = {
  auth: {
    clientId: "14df4285-6c52-447c-aa22-60a7fb5c6aac",
    authority: "https://appalachianitsupportb2c.ciamlogin.com/appalachianitsupportb2c.onmicrosoft.com",
    knownAuthorities: ["appalachianitsupportb2c.ciamlogin.com"],
    redirectUri: "https://appalachianitsupport.com"
  }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

function login() {
    console.log("Login clicked");
    msalInstance.loginRedirect();
}

function logout() {
    msalInstance.logout();
}

msalInstance.handleRedirectPromise().then((response) => {
    if (response) {
        msalInstance.setActiveAccount(response.account);
    }
});

function getAccount() {
    return msalInstance.getActiveAccount();
}
