import service from '../utils/request'

//根据官方文档的“请求配置”
//登录接口
export function Login(data){
    return service.request({
        //根据接口写
        // url:"/devApi/login",
        url:"/login",
        method:"post",
        data:data         //请求类型为 post 时
        //params:data       请求类型为 get 时
    })
}
