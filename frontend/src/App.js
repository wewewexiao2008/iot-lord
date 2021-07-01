import logo from './logo.svg';
import './App.css';
import React from "react";
import * as ReactDOM from "react-dom";
import ProForm, { ProFormText, ProFormCaptcha } from '@ant-design/pro-form';
import  {Redirect, BrowserRouter as Router,Route,Link} from "react-router-dom";
import {Map} from "react-amap";
import { MainPage } from './pages/MainPage'
import {Register} from './pages/Register'
import {Login} from './pages/Login'
import {Home} from './pages/Home'
import {Switch, Header, message} from 'antd';
import { MobileOutlined, MailOutlined } from '@ant-design/icons';
import Routers from './utils/routerMap'

import ReactQMap from 'react-qmap';
import Password from "antd/es/input/Password";
import {red,blue} from "@ant-design/colors";
import {Mouse} from "./components/Mouse";
import {Return} from "./pages/Return";
import {NotFound} from "./pages/NotFound";
// import App from "react-qmap/examples/src/App";
class Clock extends React.Component{
  render() {
    return(

        <div>
            github<a href='https://github.com/wewewexiao2008'>@wewewexiao2008</a><br/>
            by 程诗卓 3180106177<br></br>
          当前时间:{this.props.date.toLocaleTimeString()}
        </div>
    )
  }
}

function tick(){
    try{
        ReactDOM.render(
            <Clock date = {new Date()}></Clock>,
            document.getElementById('clock')
        );
        ReactDOM.render(
            <App/>,document.getElementById('root')
        );
    }catch (e){

    }

}
setInterval(tick,100);

// setInterval(loginForm,1000);

class deviceDetails extends React.Component{
    render() {
        return (
            <div>
                设备id:   {}
                设备名称:  {}
                坐标:     {}
            </div>
        )
    }
}

const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};



// let isLogin = false;
class App extends React.Component{
    state={
        user:'',
        validated:false
    }
constructor() {
    super();
    this.state={
        user:'',
        validated:false
    };
    // this.props.history.push('/login-page');
}

    render(){
        let token = this.props.token
        return (
                <Router>

                    <Route path = '/' component={Return} ></Route>
                    <Route path = '/register-page' component={Register}></Route>
                    <Route path = '/login-page' component={Login} ></Route>
                    <Route path = '/home' component={Login} ></Route>
                    <Route path = '/main-page' component={MainPage} ></Route>
                    <Redirect to='/home'/>
                </Router>

      );
    }
}


export default App;
