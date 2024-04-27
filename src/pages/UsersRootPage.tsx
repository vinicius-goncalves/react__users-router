import { Outlet, useParams } from 'react-router-dom';
import UserContextProvider from '../contexts/UserContext';

function UsersRootPage(): JSX.Element {

    const params = useParams();

    return (
        <div className="w-full h-screen">
            <UserContextProvider id={ params.userId || '' }>
                <Outlet />
            </UserContextProvider>
        </div>
    );
}

export default UsersRootPage;