const API_URL = process.env.REACT_APP_API_URL;
const adminAuthToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZDYyMzhkMmMtMzQ1ZS00OWY2LTg3OTEtYTM0MDIzYzJiYzE5IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VyVHlwZSI6ImFkbWluIn0sImlhdCI6MTY4MDcwMzg3MH0.qW0ETxJ7FrwVkPw-VTHllWwl-xQMKDC5MMpkCBvQoVk";
const residentAuthToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiOTAzYzY0MjktOTg4NC00OGNlLTgzZTctODg3NjMwNjc3YzE0IiwiZW1haWwiOiJwcmFzaEBnbWFpbC5jb20iLCJ1c2VyVHlwZSI6InJlc2lkZW50In0sImlhdCI6MTY4MDcwODk1NX0.IdWoBKkVOiWnaLARLXXWkClYeC3TV1u1z-9q5MSE6AY";

export async function addNotice(noticeData){
    const response = await fetch(`${API_URL}/api/notice/createnotice`,{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
           'auth-token': `${adminAuthToken}`
        },
      
        body: JSON.stringify({...noticeData})
    });

    return await response.json();
}

export async function getNotice(){
    const response = await fetch(`${API_URL}/api/notice/getnotice`,{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },

    });

    return await response.json();
}

export async function updateNotice(noticeData){
    const response = await fetch(`${API_URL}/api/notice/updatenotice`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${adminAuthToken}`
        },
        body: JSON.stringify({...noticeData})
    });

    const json = await response.json();
    return json;
}

export async function deleteNotice(noticeID){
    const response = await fetch(`${API_URL}/api/notice/deletenotice`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'auth-token': `${adminAuthToken}`
        },
        body: JSON.stringify({noticeID})

    });

    const json = await response.json();
    return json;
}