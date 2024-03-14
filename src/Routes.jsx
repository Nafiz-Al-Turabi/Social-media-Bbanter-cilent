import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Components/Home/Home";
import UserProfile from "./Components/Page/UserProfile/UserProfile";
import Login from "./Components/Login/Login";
import Friends from "./Components/Page/Friends/Friends";
import Videos from "./Components/Page/Videos/Videos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'userProfile',
                element: <UserProfile />
            },
            {
                path: 'friedns',
                element: <Friends />
            },
            {
                path: 'videos',
                element: <Videos />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    },
]);

export default router;