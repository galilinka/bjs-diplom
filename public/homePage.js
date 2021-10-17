"use strict";

//выход из личного кабинета
const logoutButton = new LogoutButton();

logoutButton.action = () => {
    ApiConnector.logout((response) => {
        if (response.success === true){
            location.reload();
            }    
    });
};

//получение иформации о пользователе
ApiConnector.current((response) => {
    if (response.success === true){
        ProfileWidget.showProfile(response);
    }
});

//получение текущих курсов валют
const ratesBoard = new RatesBoard();
ApiConnector.getStocks = ((response) => {
    if (response.success === true){
         ratesBoard.clearTable(response);
         ratesBoard.fillTable(response);    
    }
});

 const interval = setInterval(() => {
    ApiConnector.getStocks();
 }, 60000)

 //операции с деньгами
const moneyManager = new MoneyManager();

//пополнение баланса
moneyManager.addMoneyCallback(() => {
    ApiConnector.addMoney(data, (response) =>{
        if (response.success === true){
            showProfile(data);
            setMessage(isSuccess, message); 
        }
    })

//конвертирование валюты
moneyManager.conversionMoneyCallback(() => {
    ApiConnector.convertMoney(data, (response) =>{
        if (response.success === true){
            showProfile(data);
            setMessage(isSuccess, message); 
        }
    })

//перевод валюты
moneyManager.sendMoneyCallback(() => {
    ApiConnector.transferMoney(data, (response) =>{
        if (response.success === true){
            showProfile(data);
            setMessage(isSuccess, message); 
        }
    })

 //работа с избранным
 const favoritesWidget = new FavoritesWidget();

 //начальный список избранного
 ApiConnector.getFavorites((response) => {
     if (response.success === true){
        clearTable();
        fillTable(data);
        updateUsersList();
     }
});

//добавление пользователя в список избранных
 favoritesWidget.addUserCallback(() => {
    ApiConnector.addUserToFavorites(data, (response) => {
        if (response.success === true){
            clearTable();
            fillTable(data);
            updateUsersList();
         } else {
             setMessage(isSuccess, message);
         }  
    })
    console.log(response);
 });

 //удаление пользователя из избранного
 favoritesWidget.removeUserCallback(() => {
    ApiConnector.removeUserFromFavorites(data, (response) => {
        if (response.success === true){
            clearTable();
            fillTable(data);
            updateUsersList();
         } else {
             setMessage(isSuccess, message);
         }  
    })
    console.log(response);
 });


