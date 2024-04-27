import { createContext, useEffect, useState } from 'react';
import DBUser from '../ts/interfaces/DBUser';
import { useRouteLoaderData } from 'react-router-dom';

export const UserContext = createContext<{
    user: DBUser,
    users: DBUser[]
} | null>({ user: { Id: '', Name: '', GamesOwned: 0, MostPlayedGame: '' }, users: [] });

export default function UserContextProvider({ id, children }: { id: string, children: React.ReactNode }) {

    const [ user, setUser ] = useState<DBUser>({ Id: '', Name: '', GamesOwned: 0, MostPlayedGame: '' });
    const { users } = useRouteLoaderData('users') as { users: DBUser[] };

    useEffect(() => {

        const userFound = users.find(user => user.Id === id) as DBUser;
        setUser(userFound);

    }, [ id, users ])

    return (
        <UserContext.Provider value={{ user, users }}>
            { children }
        </UserContext.Provider>
    );
}