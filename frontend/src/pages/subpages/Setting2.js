import React from 'react';
import { useForm } from 'react-hook-form';
import ReactDOM from 'react-dom';
import {message, Spin} from 'antd';
import { InfinityTable as Table } from 'antd-table-infinity';
// import { columns, fetchData } from './stories/Table/mockData';
import axios from "axios";

function Setting1(){

    const {
        register,
        handleSubmit,
        formState: { errors2 },
    } = useForm();

    const onSearch = (data) => {
        console.log("searchgin!!!");
        console.log(data)
        axios.get("http://localhost:8080/api/join/search",{
            params:{
                keyword: data.keyword
            }
        }).then(
            (response)=>{
                let dt = response.data.result;
                console.log("response:",dt);

                // DataSource=data;
                // this.setState({loading:false,data:data})
            })
    }
    return(
        <h1>

        <form onSubmit={handleSubmit(onSearch) }>
            search for:     {    }
            <input {...register('keyword')} />
            <input type="submit" />
        </form>
        </h1>
    )
}
export  function Setting2() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.get("http://localhost:8080/api/device/update",{
            params:{
                clientid:data.clientid,
                devicename:data.devicename,
                ownername:data.ownername
            }
        }).then(
            (response)=>{
                let data = response.data.result;
                console.log("response:",data);
                if(data.modifyId==0){
                    console.log("no row affected")
                    message.warning("设备id不存在!")

                }else{
                    message.success("修改成功!")
                }
                // DataSource=data;
                // this.setState({loading:false,data:data})
            })
    }


    return (
        <h1>修改设备
        <form onSubmit={handleSubmit(onSubmit) }>
            clientid:
            <input {...register('clientid', )} /> {/* register an input */}

            { } devicename: { }
            <input {...register('devicename')} />
            {  } ownername: { }
            <input {...register('ownername')} />
            <input type="submit" />
            <div></div>
            <p></p>

            {errors.clientid && <h5>clientid is required.</h5>}
        </form>
{/*<Setting1></Setting1>*/}

            {/*<form>*/}
            {/*    <input type="search" />*/}
            {/*</form>*/}
        <ShowTable/>
        </h1>
    );
}


const columns = [
    {
        title: 'clientid',
        dataIndex: 'clientid',
        render: text => text,
        width: 40,
    },
    {
        title: 'name',
        dataIndex: 'devicename',
        width: 30,
    },
    {
        title: 'owner',
        width: 30,
        dataIndex: 'ownername',
    },
    // {
    //     title: 'logtimestamp',
    //     width: 50,
    //     dataIndex: 'logtimestamp',
    // },
    {
        title: 'Last info',
        width: 70,
        dataIndex: 'info',
    },{
        title: 'lat',
        width: 30,
        dataIndex: 'lat',
    },{
        title: 'ing',
        width: 30,
        dataIndex: 'ing',
    },{
        title: 'devicevalue',
        width: 20,
        dataIndex: 'devicevalue',
    },{
        title: 'alert',
        width: 20,
        dataIndex: 'alert',
    }

    // {
    //     title: 'description',
    //     width: 200,
    //     dataIndex: 'description',
    // },
];
// import React, { Component } from 'react';


class ShowTable extends React.Component {
    state = {
        data: [],
        loading: false,
    };
    async componentWillMount () {

        console.log('loading');
        this.setState({ loading: true });
        // var DataSource = [];
        await axios.get("http://localhost:8080/api/join/search").then(
             (response)=>{
                let data = response.data.result;
                console.log("Settting get:",data);
                // DataSource=data;
                 this.setState({data:data})
            }
        ).catch();
        console.log("Settting get:",this.state.data);
        // this.setState();
        // fetchData(this.state.data.length).then(newData =>
        //     this.setState(({ data }) => ({
        //         loading: false,
        //         data: data.concat(newData),
        //     })),
        // );
    }

    handleRefresh = () =>{
        this.setState({loading:true});
        if(this.state.loading === true){
            axios.get("http://localhost:8080/api/join/list",{

            }).then(
                (response)=>{
                    let data = response.data.result;
                    console.log("Settting get:",data);
                    // DataSource=data;
                    this.setState({data:data})

                }
            ).catch();
            // console.log("Settting get:",data);
        }
    }
    render() {
        console.log('loading');
        // this.setState({ loading: true });
        // var DataSource = [];
        var data=[];

        // this.setState({loading:false,data:data})

        return (
            <><button onClick={this.handleRefresh}>刷新</button>
                {/*<button onClick={this.handleSearch}>搜索</button>*/}
            <Table
                rowKey='clientid'  // 非常重要，请按你的数据列正确设置，否则滚动会出问题
                // loading={this.state.loading}
                // onFetch={this.handleFetch}
                // pageSize={20}
                // loadingIndicator={this.loadMoreContent}
                columns={columns}
                scroll={{ y: 2200 }}
                // dataSource={this.state.data}
                dataSource={this.state.data}
                bordered
                debug
            />

            </>
        );
    }
}


