(function (window) {
    'use strict';

    var App = window.App || {};
    

    function RemoteDataStore(url) { 
        if(!url){throw new Error('No remote URL supplied.');}
        this.serverUrl = url;
    }

    RemoteDataStore.prototype.add = function (key, val){ 
        $.post(this.serverUrl, val, function(serverResponse){
            console.log(serverResponse);
        });
    };
    RemoteDataStore.prototype.getAll = function (key) { 
        $.get(this.serverUrl, function (serverResponse){
            console.log(serverResponse);
            cb(serverResponse);
        });
    };
    RemoteDataStore.prototype.get = function(key, cb) {
        //return this.daata
        $.get(this.serverUrl + '/' + key, function(serverResponse){
            console.log(serverResponse);
            cb(serverResponse);
        });
    };
    RemoteDataStore.prototype.remove = function(key) { 
        //delete this.data[key];
        $.ajax(this.serverUrl + '/' + key, {type:'DELETE'});
     };

    RemoteDataStore.prototype.removeAll = function(){
        $.ajax(this.serverUrl, {tye:'DELETE'});
    }

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
    })(window);
    