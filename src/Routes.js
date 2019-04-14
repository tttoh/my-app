import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

const path = "./screens";

const AsyncHome = asyncComponent(() => import({path}).then(m => m.Home));
const AsyncAbout = asyncComponent(() => import({path}).then(m => m.About));
const AsyncPassword = asyncComponent(() => import({path}).then(m => m.Password));
const AsyncLogin = asyncComponent(() => import({path}).then(m => m.Login));
const AsyncDropdown = asyncComponent(() => import({path}).then(m => m.Dropdown1));
const AsyncLanding = asyncComponent(() => import({path}).then(m => m.Landing));

export default ({ childProps }) => {
    
}
