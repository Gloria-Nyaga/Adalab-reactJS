const baseURL = process.env.REACT_APP_BASE_URL;

console.log({baseURL})

export const login = async({username, password})=>{
    try{
    const response = await fetch(`${baseURL}/auth/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username, password})
        })
        return response.json()
    }

    catch(error){
        return `Error during login:${error.message}`
    }
}
