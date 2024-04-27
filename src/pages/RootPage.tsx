import { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigation } from 'react-router-dom';

function RootPage(): JSX.Element {

    const navigation = useNavigation();
    const [ isLoading, setIsLoading ] = useState<boolean | null>(null);

    useEffect(() => {

        setIsLoading(navigation.state === 'loading' && !navigation.location.pathname.includes('edit'));

    }, [ navigation ])

    const LoadingJSX: JSX.Element = (
        <div className="flex items-center justify-center w-full h-screen">
            <h1 className="text-4xl animate-pulse">Loading...</h1>
        </div>
    );

    return (
        <div>
            <header>
                <nav>
                    <ul className="fixed flex gap-6 p-4 text-xl">
                        <li className="text-black hover:opacity-60"><NavLink to="/">Home</NavLink></li>
                        <li className="text-black hover:opacity-60"><NavLink to="/users">Users</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main className="w-full h-screen p-2">
                {
                    isLoading
                        ? LoadingJSX
                        : <Outlet />
                }
            </main>
        </div>
    );
}

export default RootPage;