//  Import the dependency that translates JSON to JS
import * as nodeFetch from "node-fetch"

export const getLoginToken = async () => {
    // Store token, method & payload in "reponse" 
    const response = await nodeFetch("http://localhost:2221/api/login", {
        // From Network > Headers > Request Method
        method: "POST",
        // From Network > Payload
        // Use JSON.stringify to convert body to a string
        body: JSON.stringify({ username: "admin", password: "Admin123" })
    })
    // Error handling if call not worked
    if (response.status !== 200) {
        throw new Error("Error occurred trying to retrieve the login token.")
    }
    // store all translated response data as a json object
    const body = await response.json()
    // It now contains the token property and can be returned as body.token
    return body.token

}