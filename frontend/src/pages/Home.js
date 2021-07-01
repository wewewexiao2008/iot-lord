import {Link} from "react-router-dom";
import React from 'react'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
export class Home extends React.Component{
    render() {
        return <div>
            <Layout>
                <Header>IoT-Lord</Header>
                <Content>
                    <Link to={'/login-page'}>已有账号，登陆</Link>
                    <br/>
                    <Link to={'/register-page'}>注册</Link>
                </Content>
                {/*<Footer> </Footer>*/}
            </Layout>

        </div>
    }
}