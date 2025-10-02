import { createBrowserRouter } from "react-router";
import App from "../App";
import overview from "../pages/overview";
import UserManagement from "../pages/UserManagement";
import UserRequest from "../pages/UserRequest";
import JobManagement from "../pages/JobManagement";
import SpecialProject from "../pages/SpecialProject";
import Conversation from "../pages/Conversation";
import Proposals from "../pages/Proposals";
 



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
               path : 'user-request',
               Component : UserRequest ,
            },
            { 
               path : 'job-management',
               Component : JobManagement,
            },
            { 
               path : 'special-projects',
               Component : SpecialProject,
            },
            { 
               path : 'conversations',
               Component : Conversation,
            },
            { 
               path : 'proposals',
               Component : Proposals,
            },
            { 
               path : 'user-management',
               Component : UserManagement,
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