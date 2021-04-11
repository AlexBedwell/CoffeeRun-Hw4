(function (window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;
    

    class RemoteDataStore{
        constructor(url) {
            console.log('running the DataStore function');
            if (!url) { throw new Error('No remote URL supplied.'); }

        this.serverURL=url;
        }

        post_helper(type,url,val){
            return $.ajax({type: type, url:url, contentType:'application/json',
                data:JSON.stringify(val),
            success: function (response){
                console.log('function returned: '+JSON.stringify(response));
            }
        });
        }

        helper(type,url,cb){
            return $.ajax({type:type,url:url,contentType:'application/json',
                success:function(response){
               // console.log('function returned: '+JSON.stringify(response));
                if(cb!== undefined){cb(response);}
                }
            });
        }


        add(val){return this.post_helper('POST', this.serverURL, +'/projects/coffeerun-4b9a3/databases/(default)/documents/orders', val);}
        get(key, cb){return this.helper ('GET', this.serverURL+'/projects/coffeerun-4b9a3/databases/(default)/documents/orders', +'/'+key,cb);}
        getALL(cb){return this.helper ('GET', this.serverURL+'/projects/coffeerun-4b9a3/databases/(default)/documents/orders', cb);}
        remove(key){return this.helper ('DELETE',this.serverURL+'/'+key);}
    }

    App.RemoteDataStore = RemoteDataStore = RemoteDataStore;
    window.App=App;
})(window);