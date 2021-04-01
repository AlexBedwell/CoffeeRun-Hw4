(function (window) {
    'use strict';
    var PAYMENT_SELECTOR = '[data-coffee-order="payment"]';

    var App = window.App || {};
    var $ = window.jQuery;
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(PAYMENT_SELECTOR);

    formHandler.addSubmitHandler(function (){
        var Name=$('#name').val()
        $('#ex1').html("<p> Payment complete. Thank you for order" +" "+Name) ;
        $('#ex1').modal("show");
    });

    })(window);