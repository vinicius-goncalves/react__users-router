import { defer } from 'react-router-dom';

async function getUsers() {
    const res = await fetch('http://localhost:8080/users');
    const data = await res.json();
    return data;
}

export default async function loader() {

    return defer({
        users: await getUsers()
    });
}