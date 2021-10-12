"use strict";

const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
    ApiConnector.login(data, (response)=>{
        console.log(response);
        if (response.success === true){
            location.reload();
        } else {
            userForm.setLoginErrorMessage(`Пользователь с логином ${data} и указанным паролем не найден`)
        }
    });
}

userForm.registerFormCallback = (data) => {
    ApiConnector.register(data, (response)=>{
        console.log(response);
        if (response.success === true){
            location.reload();
        } else {
            userForm.setRegisterErrorMessage(`Пользователь с логином ${data} существует`)
        }
    });
}





