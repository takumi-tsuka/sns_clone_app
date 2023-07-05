import httpCommon from "../http-common";

class UserSrv{
    login(data:unknown){
        return httpCommon.post("/login",data);
    }
    register(data:unknown){
        return httpCommon.post("/register",data);
    }
}
export default new UserSrv();