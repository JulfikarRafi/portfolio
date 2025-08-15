import { createBrowserRouter } from "react-router";
// import MyLayout from "../Layout/MyLayout";
import MyLayout from "../Layout/MyLayout";
import Home from "../Page/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import ProjectDetails from "../components/ProjectDetails";



const router = createBrowserRouter([
  {
    path: "/",
    Component:MyLayout,
    children:[
        {
            index: true,
            Component:Home,
        },
        {
            path:'about',
            Component:About,
        },
        {
          path:'skills',
          Component:Skills,
        },
        {
          path:'contact',
          Component:Contact,
        },
        {
          path:'projects',
          Component:Projects,
        },
        {
          path:"projects/:id",
          Component:ProjectDetails,
        }
    ]
  },
]);

export default router;