import {
  createBrowserRouter
} from "react-router-dom";
import App from "./Components/App";
import AddLibrary from "./Components/AddLibrary/AddLibrary";
import AddGroup from "./Components/AddGroup/AddGroup";
import AddMessage from "./Components/AddMsg/AddMessage";
import AddContact from "./Components/AddContact/AddContact";
import Home from "./Components/Home/Home";
import EditLibrary from "./Components/AddLibrary/EditLibrary";
import EditGroup from "./Components/AddGroup/EditGroup";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'add_lib',
        element: <AddLibrary />
      },
      {
        path: 'add_grp',
        element: <AddGroup/>
      },
      {
        path: 'add_msg',
        element: <AddMessage />
      },
      {
        path: 'add_contact',
        element: <AddContact />
      },
      {
        path: 'editlib/:libid',
        element: <EditLibrary/>
      },
      ,
      {
        path: 'editgrp/:grpid',
        element: <EditGroup/>
      },


    ]
  },
]);

export default router;