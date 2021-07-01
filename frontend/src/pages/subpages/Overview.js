import React from'react'
// import request from "umi-request";
import axios from "axios";
// import {Area, Bar} from '@antv/g2plot';
import { Chart, LineAdvance} from 'bizcharts';
import GridLayout from 'react-grid-layout';

// ReactDOM.render(<TrendChart />, document.getElementById('container'));
function barPlot(data) {

 return
};
export class Overview extends React.Component{

    state = {
        data1:[],
        data2:[],
        devices:[],
        user:""
    }
    constructor() {
        super()
        this.state = {
            // devices:this.props.location.state.devices,
            // user:this.props.location.state.user
        };
        this.handleMouseDown= this.handleMouseDown.bind(this);
    }
    async handleMouseDown(){
        let data = []

        await axios.get('http://localhost:8080/api/log/countbytime', {

        })
            .then(function (response) {
                 data = response.data.result;
                console.log(response.data);
            })
            .then(this.setState({data1:data}))
            .catch(function (error) {
                console.log(error);
            })
        await axios.get('http://localhost:8080/api/log/flowbytime', {

        })
            .then(function (response) {
                data = response.data.result;
                console.log(response.data);
            })
            .then(this.setState({data2:data}))
            .catch(function (error) {
                console.log(error);
            })

        // return plot;
    }

    async componentWillMount(){
        let data = []
        await axios.get('http://localhost:8080/api/log/countbytime', {

        })
            .then(function (response) {
                 data = response.data.result;
                console.log("countbytime")
                console.log(response.data);
            })
            .then()
            .catch(function (error) {
                console.log(error);
            })
        this.setState({data1:data})

        await axios.get('http://localhost:8080/api/log/flowbytime', {

        })
            .then(function (response) {
                data = response.data.result;
                console.log("flowbytime")
                console.log(response.data);
            })
            .then()
            .catch(function (error) {
                console.log(error);
            })
        this.setState({data2:data})
    }

    render() {


            //
        const db= this.state.data1;
        const fl = this.state.data2;
        const layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];
        // barPlot.render();
        // barPlot.render();
        return (
            // <GridLayout className="layout" layout={layout} cols={2} rowHeight={300} width={1200}>
<div>
<h1>设备在线总数</h1>
            <Chart padding={[10, 20, 50, 40]} autoFit height={400} data={db} >
            <LineAdvance
                shape="smooth"
                point
                area
                position="times*online_count"
                color="city"
            />


        </Chart>
    <h1>消息流量</h1>
        <Chart padding={[10, 20, 50, 40]} autoFit height={400} data={fl} >
            <LineAdvance
                shape="smooth"
                point
                area
                position="times*online_count"
                color="city"
            />


        </Chart>
</div>

    // </GridLayout>
            // <button onClick={this.handleMouseDown}></button>
            // </>

            // <div style={}>
            // <button onClick={this.handleMouseDown}>
            //     刷新
            // </button>


        );
    }

}