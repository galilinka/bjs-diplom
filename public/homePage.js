"use strict";

//выход из личного кабинета
const logoutButton = new LogoutButton();

logoutButton.action = () =>
{
    logout (() => {
        if (){
            location.reload();
        }

    });
}

//получение иформации о пользователе
(current) = ((response) => {
    if (response === true){
        ProfileWidget.showProfile(response);
    }
})

//получение текущих курсов валют
const ratesBoard = new RatesBoard();
 const exchange = (el) => {
     if (el === true){
         ratesBoard.clearTable();
         ratesBoard.fillTable();
     } 
 }
 const interval = setInterval(() => {
    exchange();
 }, 60000)

 //операции с деньгами
const moneyManager = new MoneyManager();

moneyManager.addMoneyCallback(data, () => {
    addMoney();
    if (data === true){
        showProfile();
        setMessage();
    }
})
//реализовать конаерсию и перевод

 //работа с избранным
 const favoritesWidget = new FavoritesWidget();
 (getFavorites) = () =>{
     if (){
        clearTable();
        fillTable(data);
        updateUsersList();
     }
 }

 favoritesWidget.addUserCallback((addUserToFavorites) => {
     return addUserToFavorites;
 })





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