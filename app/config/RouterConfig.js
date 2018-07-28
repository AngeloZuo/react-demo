import Home from "../components/Home";
import CustomerContainer from "../containers/customers/CustomerContainer";
import MemberPoints from "../components/memberPoints/MemberPoints";
import ProjectsGraphic from "../components/projectsGraphic/ProjectsGraphic";

export const RouterConfig = {
  baseUrl: "/",
  routes: [
    {
      url: "/",
      component: Home
    },
    {
      url: "/customerSearch",
      component: CustomerContainer
    },
    {
      url: "/memberPoints",
      component: MemberPoints
    },
    {
      url: "/projectsGraphic",
      component: ProjectsGraphic
    }
  ]
};
