const API_URL = process.env.REACT_APP_API_URL;
const adminAuthToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZDYyMzhkMmMtMzQ1ZS00OWY2LTg3OTEtYTM0MDIzYzJiYzE5IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VyVHlwZSI6ImFkbWluIn0sImlhdCI6MTY4MDcwMzg3MH0.qW0ETxJ7FrwVkPw-VTHllWwl-xQMKDC5MMpkCBvQoVk";
const residentAuthToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiOTAzYzY0MjktOTg4NC00OGNlLTgzZTctODg3NjMwNjc3YzE0IiwiZW1haWwiOiJwcmFzaEBnbWFpbC5jb20iLCJ1c2VyVHlwZSI6InJlc2lkZW50In0sImlhdCI6MTY4MDcwODk1NX0.IdWoBKkVOiWnaLARLXXWkClYeC3TV1u1z-9q5MSE6AY";

export async function addComplaint(complaintData){
    const response = await fetch(`${API_URL}/api/complaint/createcomplaint`,{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
           'auth-token': `${residentAuthToken}`
        },
      
        body: JSON.stringify({...complaintData})
    });

    return await response.json();
}

export async function getAllComplaints(){
    const response = await fetch(`${API_URL}/api/complaint/getallcomplaints`,{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
           'auth-token': `${adminAuthToken}`
        },

    });

    return await response.json();
}

export async function getMyComplaints(){
    const response = await fetch(`${API_URL}/api/complaint/getmycomplaints`,{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
           'auth-token': `${residentAuthToken}`
        },

    });

    return await response.json();
}

export async function updateComplaint(complaintData){
    const response = await fetch(`${API_URL}/api/complaint/updatecomplaint`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${residentAuthToken}`
        },
        body: JSON.stringify({...complaintData})
    });

    const json = await response.json();
    return json;
}

export async function deleteComplaint(complaintID){
    const response = await fetch(`${API_URL}/api/complaint/deletecomplaint`,{
        method:'DELETE',
        headers:{
            'auth-token': `${residentAuthToken}`
        },
        body: JSON.stringify({complaintID})

    });

    const json = await response.json();
    return json;
}

export async function resolveComplaint(complaintID){
    const response = await fetch(`${API_URL}/api/complaint/resolvecomplaint`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${residentAuthToken}`
        },
        body: JSON.stringify({complaintID})
    });

    const json = await response.json();
    return json;
}