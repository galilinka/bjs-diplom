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

const ratesBoard = new RatesBoard();

function getRates() {
    ApiConnector.getStocks((response) => {
        console.log(response);
        if (response.success === true) {
            ratesBoard.clearTable();
            ratesBoard.fillTable(response.data);
          };
    });
  }

  getRates();

  setInterval(getRates, 60000);



//операции с деньгами
const moneyManager = new MoneyManager();
//пополнение баланса
moneyManager.addMoneyCallback = (data) => {
    ApiConnector.addMoney(data, (response) => {
        console.log(response);
        if (response.success === true){
            ProfileWidget.showProfile(response.data);
            moneyManager.setMessage(true, 'Баланс пополнен');
        } else {
            moneyManager.setMessage(false, response.error);
        }
    });
}

//конвертирование валюты
moneyManager.conversionMoneyCallback = (data) => {
    ApiConnector.convertMoney(data, (response) =>{
        console.log(response);
        if (response.success === true){
            ProfileWidget.showProfile(response.data);
            moneyManager.setMessage(true, 'Операция завершена успешно!');
        } else {
            moneyManager.setMessage(false, response.error);
        }
    })
}

//перевод валюты
moneyManager.sendMoneyCallback = (data) => {
    ApiConnector.transferMoney(data, (response) =>{
        console.log(response);
        if (response.success === true){
            ProfileWidget.showProfile(response.data);
            moneyManager.setMessage(true, 'Операция завершена успешно!');
        } else {
            moneyManager.setMessage(false, response.error);
        }
    })
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

//добавление пользователя в список избранных
 favoritesWidget.addUserCallback = (data) => {
     ApiConnector.addUserToFavorites(data, (response) => {
            console.log(response);
            if (response.success === true){
                favoritesWidget.clearTable();
                favoritesWidget.fillTable(response.data);
                moneyManager.updateUsersList(response.data);
                favoritesWidget.setMessage(true, 'Операция завершена успешно!');
             } else {
                favoritesWidget.setMessage(false, response.error);
             }
     })
 }

 //удаление пользователя из избранного
 favoritesWidget.removeUserCallback = (data) => {
    ApiConnector.removeUserFromFavorites(data, (response) => {
           console.log(response);
           if (response.success === true){
               favoritesWidget.clearTable();
               favoritesWidget.fillTable(response.data);
               moneyManager.updateUsersList(response.data);
               favoritesWidget.setMessage(true, 'Операция завершена успешно!');
            } else {
               favoritesWidget.setMessage(false, response.error);
            }
    })
}


 


