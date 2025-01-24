export const adminDetails = {
    username: "admin",
    password: process.env.ADMIN_PASSWORD
}

// process.env stores external env data such as password
// Create a .env.js file to store the ADMIN_PASSWORD variable
// This should be secret, so is then "ignored" in .gitignore.js