import { createBrowserRouter } from "react-router";
import App from "../App";
import overview from "../pages/overview";
import UserManagement from "../pages/UserManagement";
import taskManagement from "../pages/taskManagement";
import SpecialTaskManagement from "../pages/SpecialTaskManagement";
 



const Router = createBrowserRouter([
    {
        path : '/',
        Component : App,
        children :[
            { 
               index : true,
               Component : overview ,
            },
            { 
               path : 'user-management',
               Component : UserManagement ,
            },
            { 
               path : 'task-management',
               Component : taskManagement,
            },
            { 
               path : 'special/project-management',
               Component : SpecialTaskManagement,
            },
            // { 
            //    path : 'track-order',
            //    Component : TrackOrder,
            // },
            // { 
            //    path : 'admin-user',
            //    Component : AdminUserSection,
            // },
            // { 
            //    path : 'setting',
            //    Component : Setting,
            // },
            // { 
            //    path : 'drivers-list',
            //    Component : DriverList,
            // },
            // { 
            //    path : 'create-role',
            //    Component : AddNewAdmin,
            // },
        ]
    }
]) 
export default Router;