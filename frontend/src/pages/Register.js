import ProForm, {ProFormText} from "@ant-design/pro-form";
import React from 'react'
import logo from "../logo.svg";
import {message} from "antd";
import axios from "axios";

export class Register extends React.Component{
    constructor() {
        super();
        this.handleRegister= this.handleRegister.bind(this);
        this.redirect= this.redirect.bind(this);
    }
    async redirect(validated){
        if(validated)
            this.props.history.push("/login-page")
        else message.warning("用户名或邮箱重复！！")
    }
    async handleRegister(values){
        console.log('Received values of form: ', values)
        let validated = false;
        let myconfig= {
            params: {
                username: values.username,
                password: values.password,
                email: values.email
            }
        };
        console.log("config of insertion",myconfig);
        // if(validated){

        await axios.get("http://localhost:8080/api/user/add",myconfig)
            .then(function (response){
                let data = response.data.result;
                console.log("insert result:",data);
                validated =true;
                // console.log(data)
            })
            .catch(function (error){console.log(error)})
        // }
        // console.log(validated)

        await this.redirect(validated);
    }
    render(){
        return(
            <div
                style={{
                    width: 330,
                    margin: 'auto',
                }}
            >
                <ProForm
                    onFinish={this.handleRegister}
                    submitter={{
                        searchConfig: {
                            submitText: '注册',
                        },
                        render: (_, dom) => dom.pop(),
                        submitButtonProps: {
                            size: 'large',
                            style: {
                                width: '100%',
                            },
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
                    <ProFormText
                        fieldProps={{
                            size: 'large',
                        }}
                        name="email"
                        label="邮箱"
                        placeholder="请输入邮箱"

                        rules={[
                            {
                                required: true,
                                message: '请输入邮箱!',
                            }
                            ,
                            {
                                // pattern: /^1\d{10}\@$/,
                                pattern: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.]){1,2}[A-Za-z\d]{2,5}$/,
                                message: '不合法的邮箱格式!',
                            },
                        ]}
                    />

                </ProForm>
            </div>
        )
    }
}