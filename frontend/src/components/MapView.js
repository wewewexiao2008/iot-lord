import React, {useState} from 'react';
import {createStore} from 'redux'
// const Map = ReactAMAP.Map;
import ReactDOM from 'react-dom';
import {Circle, Map, Marker, Polyline} from "react-amap";
import axios from "axios";


// const store =createStore()

export class MapwithLine extends React.Component{

    state = {
        username: "",
        devices:[],paths:[],listItems: []
    };
    constructor (){
        super();
        this.state = {
            visible: false,
            devices:[],
            paths:[],
            listItems:[],
            markers:[],
            mkItems:[],
            risks:[]
        };
        // setInterval(this.update,5000)
        // this.update = this.update.bind(this)

    }
    //
    async componentWillMount() {
        let devices = [];
        let paths = [];
        let markers = [];
        let risks = [];
        const maxpath = 10;
        await axios.get('http://localhost:8080/api/device/list')
            .then(function(response){
                let data = response.data.result;
                console.log(data);
                for(let i=0;i<data.length;i++){
                    devices.push(data[i].clientid)
                }
                console.log("devices get:" );
                console.log(devices)

            })
            .catch(function (error){console.log(error)})
        await axios.get('http://localhost:8080/api/log/getpath',{params:{
                maxpath: maxpath
            }})
            .then(function (response){

                let data = response.data.result;
                for(let j = 0;j<devices.length;j++){
                    let temp = [];
                    let final={};
                    let risk;
                    for(let i=0;i<data.length;i++){
                        // console.log(data[i].clientid,"vs",devices[j])
                        if(data[i].clientid === devices[j]){
                            temp.push({ latitude: data[i].lat,longitude:data[i].ing})
                            final = { latitude: data[i].lat,longitude:data[i].ing};
                            risk = data[i].alert;
                        }
                        if(temp.length>maxpath) break;
                    }
                    paths.push(temp);
                    markers.push(final);
                    risks.push(risk);
                }
            }).then(this.setState({risks:risks, markers:markers,paths:paths,devices:devices}))
            .catch(function(error){console.log(error)})
        // this.setState({devices : devices});
    }

    async toggleVisible(){
        this.setState({
            visible: true,
        });
        let _devices = [];
        let _paths = [];
        let _markers= [];
        let _risks=[];
        const maxpath = 10;
        await axios.get('http://localhost:8080/api/device/list')
            .then(function(response){
                let data = response.data.result;
                console.log(data);
                for(let i=0;i<data.length;i++){
                    _devices.push(data[i].clientid)
                    _risks.push(data[i].alert);
                    console.log("_devices get:" + data[i]);
                }



            })
            .catch(function (error){console.log(error)})
        await axios.get('http://localhost:8080/api/log/getpath',{params:{
                maxpath: maxpath
            }})
            .then(function (response){

                let data = response.data.result;
                for(let j = 0;j<_devices.length;j++){
                    let temp = [];
                    let final={};
                    let risk;
                    for(let i=0;i<data.length;i++){
                        // console.log(data[i].clientid,"vs",_devices[j])
                        if(data[i].clientid === _devices[j]){
                            temp.push({ latitude: data[i].lat,longitude:data[i].ing})
                            final = { latitude: data[i].lat,longitude:data[i].ing};
                            // risk = data[i].alert;
                        }
                        if(temp.length>maxpath) break;
                    }
                    _paths.push(temp);
                    _markers.push(final);
                    // _risks.push(risk);
                }
            }).then(this.setState({markers:_markers,paths:_paths,devices:_devices,risks: _risks}))
            .catch(function(error){console.log(error)})
        const devices = this.state.devices;
        const visible = this.state.visible;
        const paths = this.state.paths;
        const markers = this.state.markers;
        const risks = this.state.risks;
        const events = {
            created: (ins) => { console.log(ins); },
            click: () => { console.log('clicked') },
        }
        var listItems = [];
        var mkItems =[];

        for(let j = 0;j< devices.length;j++){
            let color = "#"
            for (let i = 0; i < 6; i++) color+=parseInt(Math.random() * 16).toString(16)
            // listItems.push(<DeviceLine visible ={visible} clientid = {devices[j]}></DeviceLine>)
            listItems.push(<Polyline
                path={
                    paths[j]
                }
                events={ this.lineEvents }
                style={{strokeColor:color}}
                visible={ visible}
                // draggable={ this.state.draggable }
                draggable = {false}
            />)
            mkItems.push(<Circle
                center={ markers[j] }
                radius={ 500 }
                visible={ true }
                style={{fillColor: risks[j]===false?'green':'red', strokeColor:risks[j]===false?'green':'red'} }
                // draggable={ this.state.draggable }
            />)

        }
        this.setState({mkItems:mkItems,listItems:listItems})
        console.log("getlist",listItems[0])
    }

    render(){

        // console.log(devices[1]);
        return <div>
            <button onClick={() => {this.toggleVisible() } }>显示路径</button>
            <div style={{width: '100%', height: '700px',position:'relative'}}>
                {/*{this.finalMap()}*/}
                <Map  mapStyle='dark'  zoom={10.0} amapkey={'090e2ca73ca5c8964b96a2d06d87f3c2'}>
                    {this.state.listItems}
                    {this.state.mkItems}
                </Map>
                {/*<DeviceLine visible ={visible} clientid = {devices[1]}></DeviceLine>*/}
                    {/*{this.genElements(this.state.devices)}*/}
                    {/*{this.changePath('device0001')}*/}
                {/*</Map>*/}
            </div>
        </div>
    }
}

export class MapView extends React.Component{

}