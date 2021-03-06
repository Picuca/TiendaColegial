module.exports = function (app) {

    var account = require('./account');
    app.get('/account',account.getUser);
    app.post('/account', account.addUser);

    var accountInfo = require('./account-info');
    app.post('/account-info',accountInfo.editInfo);
    app.post('/account-info',accountInfo.deleteUser)
    app.post('/account-info',accountInfo.editCard);

    var homePage = require('./home-page');
    app.get('/home-page', homePage.welcome);

    var books = require('./books');
    app.get('/books', books.getbooks);

    var camisas = require('./camisas');
    app.get('/camisas', camisas.getcamisas);

    var pantalon = require('./pantalon');
    app.get('/pantalon', pantalon.getpantalon);

    var gorras = require('./gorras');
    app.get('/gorras', gorras.getgorras);

    var articles = require('./articles');
    app.get('/articles', articles.getarticles);

    var newArrivals = require('./new-arrivals');
    app.get('/new-arrivals', newArrivals.getNewArrivals);

    var topSellers = require('./top-sellers');
    app.get('/top-sellers', topSellers.getTopSellers);

    var search = require('./search');
    app.get('/search', search.getSearch);


    var inventory = require('./update-inventory');
     app.post('/update-inventory',inventory.updateInventory);

     var checkout = require('./checkout');
         app.post('/cart',checkout.postDBUpdate)


};
