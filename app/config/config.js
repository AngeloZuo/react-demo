import React from "react";
import { Icon } from "antd";

const DEV_SERVER_ADDRESS = "http://localhost:9091/";

const Homepage_slogan = "Welcome to Home Page !";

const headerConfig = {
  defaultTab: 0,
  tabsList: [
    {
      labelPath: {
        pathname: "/"
      },
      labelContent: (
        <Icon
          type="home"
          style={{ fontSize: 16, color: "#fff", marginRight: 0 }}
        />
      ),
      labelValue: "Home"
    },
    {
      labelPath: {
        pathname: "/customerSearch"
      },
      labelContent: "Customer Search",
      labelValue: "Customer Search"
    },
    {
      labelPath: {
        pathname: "/memberPoints"
      },
      labelContent: "Member Points",
      labelValue: "Member Points"
    }
  ]
};

export { DEV_SERVER_ADDRESS, Homepage_slogan, headerConfig };
