import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootPage from './pages/RootPage.tsx';
import loaderUsersPage from './pages/loaders/loader-users-root-page.ts';
import UsersRootPage from './pages/UsersRootPage.tsx';
import UserPage from './pages/UserPage.tsx';
import EditPage from './pages/EditPage.tsx';
import UsersPage from './pages/UsersPage.tsx';
import actionUsersPage from './pages/actions/action-edit-user.ts';

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            { index: true, element: <App /> },
            {
                path: 'users',
                element: <UsersRootPage />,
                loader: loaderUsersPage,
                id: 'users',
                children: [
                    {
                        path: '',
                        element: <UsersPage />
                    },
                    {
                        path: ':userId',
                        element: <UserPage />
                    },
                    {
                        path: ':userId/edit',
                        element: <EditPage />,
                        action: actionUsersPage
                    }
                ]
            }
        ]
    }
]);

const children: JSX.Element = (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

const root = document.getElementById('root') as HTMLDivElement;

ReactDOM.createRoot(root).render(children);
