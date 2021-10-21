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
    console.log(response);
    if (response.success === true){
        ProfileWidget.showProfile(response.data);
    }
});
//получение текущих курсов валют
const ratesBoard = new RatesBoard();
let func = ((response) => {
    console.log(response);
    if (response.success === true){
         ratesBoard.clearTable();
         ratesBoard.fillTable(response.data);
    }
});
 const interval = setInterval(() => {
    ApiConnector.getStocks();
 }, 60000)
//операции с деньгами
const moneyManager = new MoneyManager();
//пополнение баланса
moneyManager.addMoneyCallback = (data) => {
    ApiConnector.addMoney(data, (response) => {
        console.log(response);
        if (response.success === true){
            showProfile(response.data);
            moneyManager.setMessage(true, 'Баланс пополнен');
        } else {
            moneyManager.setMessage(false, response.e);
        }
    });
}
//работа с избранным
 const favoritesWidget = new FavoritesWidget();
 //начальный список избранного
 ApiConnector.getFavorites((response) => {
    console.log(response);
     if (response.success === true){
        favoritesWidget.clearTable();
        favoritesWidget.fillTable(response.data);
        moneyManager.updateUsersList(response.data);
     }
});





