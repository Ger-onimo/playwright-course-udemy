import * as nodeFetch from "node-fetch"

export const getLoginToken = async () => {
    const response = await nodeFetch("http://localhost:2221/api/login", {
        method: "POST",
        body: { username: "admin", password: "Admin123" }

    })

}