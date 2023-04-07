const API_URL = process.env.REACT_APP_API_URL;
const adminAuthToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZDYyMzhkMmMtMzQ1ZS00OWY2LTg3OTEtYTM0MDIzYzJiYzE5IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VyVHlwZSI6ImFkbWluIn0sImlhdCI6MTY4MDcwMzg3MH0.qW0ETxJ7FrwVkPw-VTHllWwl-xQMKDC5MMpkCBvQoVk";

export async function getAllResident(){
    const response = await fetch(`${API_URL}/api/admin/getallres`,{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
           'auth-token': `${adminAuthToken}`
        },
    });

    return await response.json();
}

export async function getResident(residentID){
    const response = await fetch(`${API_URL}/api/admin/getres`,{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
           'auth-token': `${adminAuthToken}`
        },
        body: JSON.stringify({residentID})
    });

    return await response.json();
}

