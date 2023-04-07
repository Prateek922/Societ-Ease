const API_URL = process.env.REACT_APP_API_URL;
const adminAuthToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZDYyMzhkMmMtMzQ1ZS00OWY2LTg3OTEtYTM0MDIzYzJiYzE5IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VyVHlwZSI6ImFkbWluIn0sImlhdCI6MTY4MDcwMzg3MH0.qW0ETxJ7FrwVkPw-VTHllWwl-xQMKDC5MMpkCBvQoVk";
const residentAuthToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiOTAzYzY0MjktOTg4NC00OGNlLTgzZTctODg3NjMwNjc3YzE0IiwiZW1haWwiOiJwcmFzaEBnbWFpbC5jb20iLCJ1c2VyVHlwZSI6InJlc2lkZW50In0sImlhdCI6MTY4MDcwODk1NX0.IdWoBKkVOiWnaLARLXXWkClYeC3TV1u1z-9q5MSE6AY";

export async function addMaintenance(maintenanceData){
    const response = await fetch(`${API_URL}/api/maintenance/createmaintenance`,{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
           'auth-token': `${adminAuthToken}`
        },
      
        body: JSON.stringify({...maintenanceData})
    });

    return await response.json();
}

export async function getMaintenance(){
    const response = await fetch(`${API_URL}/api/maintenance/getmaintenance`,{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },

    });

    return await response.json();
}

export async function updateMaintenance(maintenanceData){
    const response = await fetch(`${API_URL}/api/maintenance/updatemaintenance`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${adminAuthToken}`
        },
        body: JSON.stringify({...maintenanceData})
    });

    const json = await response.json();
    return json;
}

export async function deleteMaintenance(maintenanceID){
    const response = await fetch(`${API_URL}/api/maintenance/deletemaintenance`,{
        method:'DELETE',
        headers:{
            'auth-token': `${adminAuthToken}`
        },
        body: JSON.stringify({maintenanceID})

    });

    const json = await response.json();
    return json;
}