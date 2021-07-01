import React, {useEffect, useState} from 'react';
import { EditableProTable } from '@ant-design/pro-table';
import ProField from '@ant-design/pro-field';
import { Button } from 'antd';
import axios from "axios";


export  function Setting() {
    // let defaultData = new Array(3).fill(1).map((_, index) => {
    //     return {
    //         id: (Date.now() + index).toString(),
    //         clientid: `设备${index}`,
    //         devicename: '无名',
    //         ownername: '',
    //         warning: '否'
    //         // created_at: '2020-05-26T09:42:56Z',
    //     };
    // });
    let defaultData=[];
    // let isLoad = false;

    const [editableKeys, setEditableRowKeys] = useState(() => defaultData.map((item) => item.clientid));
    const [dataSource, setDataSource] = useState(() => defaultData);
    const [isLoad, setIsLoad] = useState(false);
    function handleChange(){
        if(!isLoad){
            setDataSource(dataSource);
            // return function cleanup(){
            axios.get('http://localhost:8080/api/device/list')
                .then(function (response){
                    let data = response.data.result;
                    console.log("Setting get:",data);
                    if(!isLoad)setDataSource(data);

                    setIsLoad(true);

                }).catch(function (error){console.log(error)})
            console.log("改了吗？",defaultData);
            // }
        }
    }



    const columns = [
        {
            title: 'clientid',
            dataIndex: 'clientid',
            width: '20%',
            formItemProps: {
                rules: [
                    {
                        required: true,
                        whitespace: true,
                        message: '此项是必填项',
                    },
                    {
                        max: 16,
                        whitespace: true,
                        message: '最长为 16 位',
                    },
                    {
                        min: 3,
                        whitespace: true,
                        message: '最小为 3 位',
                    },
                ],
            },
        },
        {
            title: 'devicename',
            key: 'state',
            dataIndex: 'devicename',
            // valueType: 'select',

        },
        {
            title: 'owner',
            dataIndex: 'owner',
        },
        {
            title: 'option',
            valueType: 'option',
            width: 250,
            render: () => {
                return null;
            },
        },
    ];
    return (<div style={{height:200}}>
        <EditableProTable headerTitle="设备概览"
                          columns={columns}
                          // pageSize={100}
                          // scroll={{ y: 250 }}
                          rowKey="id"
                          value={dataSource}
                          onChange={handleChange}
        //                   recordCreatorProps={{
        //     // newRecordType: 'dataSource',
        //     // record: () => ({
        //     //     id: Date.now(),
        //     // }),
        // }}
        //                   editable={{
        //                         type: 'multiple',
        //                         // editableKeys,
        //                         // actionRender: (row, config, defaultDoms) => {
        //                         //     return [defaultDoms.delete];
        //                         // },
        //                         onValuesChange: (record, recordList) => {
        //                             setDataSource(recordList);
        //                             console.log("onvalueCHANGE!!!")
        //                         },
        //                          // onChange:setEditableRowKeys,
        //                          }}
        />

    </div>);
}