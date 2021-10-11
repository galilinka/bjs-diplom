"use strict";

const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
    this.data = data;
    ApiConnector.login(data, (response)=>{
        if (data === False){
            response = `Пользователь с логином ${this.data} и указанным паролем не найден`
            return response;
        } else {
            userId = '1'; // нужно где-то использовать?
            location.reload();
        }
        console.log(data);
    });
}

userForm.registerFormCallback = (data) => {
    this.data = data;
    ApiConnector.register(data, (response)=>{
        if (data === False){
            response = `Пользователь с логином ${this.data} уже существует`
            return response;
        } else {
            userId = '1'; // нужно где-то использовать?
            location.reload();
        }
        console.log(data);
    });
}





