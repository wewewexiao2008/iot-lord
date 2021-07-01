import React from "react";
import {Mouse} from "../components/Mouse";
import {Link} from "react-router-dom";
import {  Button } from 'antd';
export class Return extends React.Component{

    onClick = ()=>{
        this.props.history.push("/home")
    }
    render() {
        return (
            <div>
                <Mouse>
                    {(mouse)=><div style={{
                        position:'absolute',
                        top:mouse.y-30,
                        left:mouse.x-80,
                        color:mouse.down?"red":"blue"
                    }
                    }>{mouse.x},{mouse.y}</div>}
                </Mouse>
                <Button onClick={this.onClick} style={{position: 'absolute' ,top:'20px',right:'20px'}}>
                    主页
                    {/*<Link to={'/home'}>主页</Link>*/}
                </Button>
            </div>

        );
    }

}