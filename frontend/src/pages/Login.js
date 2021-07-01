import ProForm, {ProFormText} from "@ant-design/pro-form";
import logo from "../logo.svg";
import {Link} from "react-router-dom";
import {Map} from "react-amap";
import React from 'react'
import {Mouse} from '../components/Mouse'
import {message} from "antd";
import axios from "axios";

import { browserHistory  } from 'react-router'
const {Provider, Consumer} = React.createContext();

export class Login extends React.Component{
    constructor() {
        super();
        this.state={

        }
        // this.checkUser = this.checkUser.bind(this);
        this.handleLogin= this.handleLogin.bind(this);
        this.redirect= this.redirect.bind(this);

    }

    async redirect(validated,username){
        if(validated)
            this.props.history.push({pathname:"/main-page",state:{username:username}})
            // this.props.history.push({pathname:"/main-page"})
        else {
            // this.props.history.push({pathname:"/main-page"})
            message.warning("密码错误或未注册或网络错误！")
        }
    }
    async handleLogin(values){
             // await waitTime(500);
             // this.handleLogin();

             console.log('Received values of form: ', values)
             let myconfig = {
                 params: {
                     username: values.username
                     // password: values.password;
                 }
             };
             let validated = false;
             let username = "";
             await axios.get("http://localhost:8080/api/user/get",myconfig)
                 .then(function (response){

                     let data = response.data.result;
                     console.log("Get from db:",data);

                     if(data.passwd === values.password) {
                         // console.log(getpasswd);
                         console.log("登录成功");
                         message.success('登录成功');
                         validated = true;
                         username = data.username;
                         // console.log(validated);

                         // eslint-disable-next-line no-restricted-globals
                     }
                     else {
                         // console.log(getpasswd);
                         console.log("登录失败");
                     }
                 })
                 .catch(function (error){console.log(error)})
            // console.log(validated)
             await this.redirect(validated,username);
         }
    render(){
        return(

            <div className="App">

                <div

                    style={{
                        width: 330,
                        margin: 'auto',
                    }}
                >
                    <ProForm
                        // props={this.props}
                        onFinish={this.handleLogin}
                        submitter={{
                            searchConfig: {
                                submitText: '登录',
                            },
                            render: (_, dom) => dom.pop(),
                            submitButtonProps: {
                                size: 'large',
                                style: {
                                    width: '100%',
                                },
                            },
                            onSubmit: async(values) => {


                            },
                        }}

                    >
                        <h1
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            <img
                                style={{
                                    height: '44px',
                                    marginRight: 16,
                                }}
                                alt="logo"
                                src={logo}
                                // src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                            />
                            IoT Lord
                        </h1>
                        <div
                            style={{
                                marginTop: 12,
                                textAlign: 'center',
                                marginBottom: 40,
                            }}
                        >
                            IoT Lord是一个物联网管理系统，前端采用React，后端采用<del>php</del>,<del>java</del>,spring boot


                        </div>
                        <ProFormText
                            fieldProps={{
                                size: 'large',
                                // prefix: <MobileOutlined />,
                            }}
                            name="username"
                            label="账号"
                            placeholder="请输入账号"
                            // value={username}
                            // onChange={this.handleForm}
                            rules={[
                                {
                                    min:6,
                                    message: '账号长度至少6个字符!'
                                },
                                {
                                    required: true,
                                    message: '请输入账号!',
                                }
                                // ,
                                // {
                                //     pattern: /^1\d{10}$/,
                                //     message: '不合法的手机号格式!',
                                // },
                            ]}
                        />
                        <ProFormText.Password
                            fieldProps={{
                                size: 'large',
                                // prefix: <MobileOutlined />,
                            }}
                            width="md"
                            name="password"
                            label="密码"
                            placeholder="请输入密码"
                            // value={password}
                            // onChange={this.handleForm}
                            rules={[
                                {
                                    min:6,
                                    message: '密码至少6个字符!'
                                },
                                {
                                    required: true,
                                    message: '请输入密码!',
                                }
                            ]}
                        />

                    </ProForm>
                </div>
                <Mouse>
                    {(mouse)=><div style={{
                        position:'absolute',
                        top:mouse.y-30,
                        left:mouse.x-80,
                        color:mouse.down?"red":"blue"
                    }
                    }>{mouse.x},{mouse.y}</div>}
                </Mouse>

                <Link to={'/register-page'}>没有账号,去注册</Link>

                {/*<button onClick={this.handleGoRegister} type="primary">去注册</button>*/}

                <div id = 'clock' style={{position:'relative',bottom:'-50px'}}>

                </div>

                {/*<div style={{width: '100%', height: '400px'}} >*/}
                {/*    /!*normal（默认样式）、dark（深色样式）、light（浅色样式）、fresh(osm清新风格样式)、blue_night*!/*/}
                {/*    <Map mapStyle='dark' amapkey={'090e2ca73ca5c8964b96a2d06d87f3c2'} />*/}
                {/*</div>*/}

            </div>

        )
    }
}