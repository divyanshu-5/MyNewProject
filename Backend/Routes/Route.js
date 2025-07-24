let express = require("express")
let { PostDataApi, GetDataApi, GetDataByName, GetDataById, UpdateDataApi,deleteDataApi } = require("../Controller/Controller")

let {SignUpApi,LoginApi}= require("../Controller/user_auth_controller")

let router = express.Router();

router.post("/api/postdata",PostDataApi)

router.get("/api/getdata",GetDataApi)

router.get("/api/getdatabyname",GetDataByName)

router.get("/api/getdatabyid/:id",GetDataById)

router.put("/api/updatedata/:id",UpdateDataApi)

router.delete("/api/deletedata/:id",deleteDataApi)

// 

router.post("/api/auth/signup",SignUpApi);

router.post("/api/auth/login",LoginApi);



module.exports = router