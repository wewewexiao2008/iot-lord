import  {Return} from '../pages/Return'
import {HomePage} from '../pages/Home'
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Register} from "../pages/Register";
import {Login} from "../pages/Login";
import {MainPage} from "../pages/MainPage";
import React from "react";
import {MapView} from "../components/MapView";
import {Overview} from "../pages/subpages/Overview";
import {Setting} from "../pages/subpages/Setting";


export default [

    { path : '/' ,component:Return },
    { path : '/register-page', component:Register},
    { path : '/login-page', component:Login },
    { path : '/' ,component:Login , exact:true},
    { path : '/main-page' ,component:MainPage ,auth: true},
    { path:'/main-page', component:MapView,exact:true},
    { path:'/main-page/overview', component:Overview,auth:true},
    { path:'/main-page/setting', component:Setting,auth:true}
]