const API_URL = process.env.REACT_APP_API_URL;

export async function loginUser(credentials){
    const response = await fetch(`${API_URL}/api/auth/login`,{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json'
        },
      
        body: JSON.stringify({...credentials})
    });

    return await response.json();
}


export async function createResident(credentials){
    const response = await fetch(`${API_URL}/api/auth/createresident`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...credentials})
    });

    const json = await response.json();
    return json;
}
