export const apiBaseUrl = "https://datahub.prisca.5starcompany.com.ng/api"

export const setHeaders = ()=>{
    const user = JSON.parse(localStorage.getItem('DataHubUserToken'))
    const headers ={
        headers: {
            "Authorization":`Bearer Bearer ${user?.access_token}`
        }
    }
    return headers
}