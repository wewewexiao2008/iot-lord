import React, {Component} from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'
import Logo from '../../components/logo/logo'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', //账号
            pwd: '', // 密码
            pwdConfirm: '', // 确认密码
            type: 'worker', // 用户类型 默认求职者
        }
    }

    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div className="page-register">
                <Logo/>
                <List>
                    <InputItem onChange={value => this.handleChange('username', value)}>lbj-账号</InputItem>
                    <InputItem onChange={value => this.handleChange('pwd', value)}>lbj-密码</InputItem>
                    <InputItem onChange={value => this.handleChange('pwdConfirm', value)}>lbj-确认</InputItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <RadioItem
                        onClick={() => this.handleChange('type', 'worker')}
                        checked={this.state.type === 'worker'}>牛人    </RadioItem>
                    <RadioItem
                        onClick={() => this.handleChange('type', 'boss')}
                        checked={this.state.type === 'boss'}>BOSS</RadioItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <Button type="primary">登录</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick={this.handleGoLogin.bind(this)} type="primary">已有账号，去登录</Button>
                </WingBlank>
            </div>
        )
    }

    /*
    *     去登录
    * */
    handleGoLogin() {
        this.props.history.push('/login')
    }

    /*
    *     绑定表单值
    * */
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
}

export default Register