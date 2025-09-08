import { createBrowserRouter } from "react-router";
import App from "../App";
import overview from "../pages/overview";
 



const Router = createBrowserRouter([
    {
        path : '/',
        Component : App,
        children :[
            { 
               index : true,
               Component : overview ,
            },
            // { 
            //    path : 'products',
            //    Component : Products ,
            // },
            // { 
            //    path : 'vendors',
            //    Component : Vendor,
            // },
            // { 
            //    path : 'drivers',
            //    Component : Drivers  ,
            // },
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