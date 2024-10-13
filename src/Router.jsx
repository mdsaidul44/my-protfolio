import { createBrowserRouter } from "react-router-dom";
import Main from "./Main/Main";
import Home from "./Home";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

  
 const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/skill',
                element: <Skills></Skills>
            },
            {
                path: '/project',
                element: <Projects></Projects>
            }
        ]
    },
 ])
 export default router