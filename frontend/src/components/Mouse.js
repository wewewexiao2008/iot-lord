import React from 'react'

export class Mouse extends React.Component{
    state = {
        x:0,
        y:0,
        down:false
    }

    handleMouseMove = e =>{
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    handleMouseDown = e =>{
        this.setState({
            down:true
        })
    }
    handleMouseUp = e =>{
        this.setState({
            down:false
        })
    }
    // 鼠标事件绑定
    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mousedown',this.handleMouseDown);
        window.addEventListener('mouseup',this.handleMouseUp);
    }
    render(){
        return this.props.children(this.state)
    }
    //移除事件绑定
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mousedown',this.handleMouseDown);
        window.removeEventListener('mouseup',this.handleMouseUp);
    }
}