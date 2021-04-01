(function (window) {
    'use strict';
    var App = window.Appp || {};

    var Validation = {
        isCompanyEmail: function (email) {
            return /.+@bignerdranch\.com$/.test(email);
            }
            
    };
    App.Validation = Validation;
    window.App = App;
})(window);