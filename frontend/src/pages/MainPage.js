import {Map} from "react-amap";
import React from "react";
import request from "umi-request";
// import Breadcrumb, from "antd";

import {Overview} from'./subpages/Overview'
import {Setting} from'./subpages/Setting'
import {Link, Route} from "react-router-dom";
import {MapView, MapwithLine} from "../components/MapView";
import {Layout, message} from "antd";

import { Menu, Button } from 'antd';

// import {Tabbar} from "../components/Tabbar";
import {DesktopOutlined, PieChartOutlined, SettingOutlined} from "@ant-design/icons";
import axios from "axios";
import {Setting2} from "./subpages/Setting2";
// import Sider from "antd";

const{Header,Content, Footer,  Sider} = Layout;
// const { SubMenu } = Menu;

export  class MainPage extends React.Component {
    state = {
        collapsed: false,
        username: "",
        devices:[],
        isValidated: false
    };
    constructor() {
        super();
        this.state={
            collapsed: false,
            isValidated: true
        }
        // setInterval(this.componentWillMount,5000)


    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };
    handleLogout=()=>{
        this.setState({
            isValidated:false
        })
        this.props.history.push('/home');

    }

    render=()=> {
        var {collapsed,username,devices} = this.state;

        try{
            this.state.username=this.props.location.state.username;
        }catch (e){
            message.error("用户未登录！");
        }

        // var devices = this.state;
        return (

            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    {/*<div className="logo" />*/}
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<DesktopOutlined/>}>
                            总览
                            <Link to={{pathname:'/main-page',state:{user:username, devices:devices} }}></Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<PieChartOutlined/>}>
                            统计
                            <Link to={{pathname:'/main-page/overview' ,state:{user:username, devices:devices}}}></Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<SettingOutlined/>}>
                            设置
                            <Link to={{pathname:'/main-page/setting' ,state:{user:username, devices:devices}}}></Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <Button onClick={this.handleLogout} style={{position:'absolute',top:20,right:90}}>登出</Button>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            <Route exact path='/main-page' component={MapwithLine}></Route>
                            <Route path='/main-page/overview' component={Overview}></Route>
                            <Route path='/main-page/setting' component={Setting2}></Route>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Created by @wewewexiao2008</Footer>
                </Layout>
            </Layout>
        );


    }
    async componentWillMount () {
        let devices = [];
        await axios.get('http://localhost:8080/api/device/list')
            .then(function(response){
                let data = response.data.result;
                console.log(data);
                devices = data;
                console.log("devices get:" + data);

            })
            .catch(function (error){console.log(error)})
        this.setState({devices : devices});
    }



}