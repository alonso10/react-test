export async function getUsers() {
    const response = await fetch('https://gorest.co.in/public-api/users?_format=json&access-token=nL6p7nrqP2ivDEKY7dtSEECsN0a7ehywZMaE');
    return await response.json();    
}
