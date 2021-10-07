"use strict";

const { response } = require("express"); //строка сама появилась

const userForm = new userForm();
userForm.loginFormCallback = getData => console.log(getData);

//проверка успешности запроса
ApiConnector.login({login, password}, response => console.log(response)){
    if (response === false){
        console.log("Пользователь с логином не найден");
    } else {
        location.reload();
    };

}
//{success: false, data: "Пользователь с логином не найден"}
//{success: true, userId: "1"}




