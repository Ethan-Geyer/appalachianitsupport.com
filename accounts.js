document.addEventListener("DOMContentLoaded", () => {
    const account = msalInstance.getActiveAccount();

    const loginContainer = document.getElementById("login-container");
    const accountContainer = document.getElementById("account-container");

    if (!account) {
        loginContainer.style.display = "block";
        document.getElementById("login-btn").onclick = login;
        return;
    }

    accountContainer.style.display = "block";

    document.getElementById("user-name").innerText = account.name;
    document.getElementById("user-email").innerText = account.username;

    document.getElementById("logout-btn").onclick = logout;

    loadInvoices();
});

function loadInvoices() {
    const invoiceList = document.getElementById("invoice-list");

    invoiceList.innerHTML = `
        <div>Invoice #101 — $89.99 — Paid</div>
        <div>Invoice #102 — $129.99 — Pending</div>
    `;
}
