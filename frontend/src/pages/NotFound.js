import React from "react";
import {Mouse} from "../components/Mouse";
import {Link} from "react-router-dom";
import {Header} from "antd/es/layout/layout";

export class NotFound extends React.Component{

    render() {
        return (

            <div>
                出错啦！右上角返回主页
                <Mouse>
                    {(mouse)=><div style={{
                        position:'absolute',
                        top:mouse.y-30,
                        left:mouse.x-80,
                        color:mouse.down?"red":"blue"
                    }
                    }>{mouse.x},{mouse.y}</div>}
                </Mouse>
                <div style={{position: 'fixed' ,top:'10px',right:'20px'}}>

                    <Link to={'/'}>主页</Link>
                </div>
            </div>

        );
    }

}