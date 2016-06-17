(function() {   
    'use strict'; 
    angular.module('ngWifiWizard', [])
    .factory('ngWifiWizard', ['$q', '$window', function($q, $window) {
        return {
            startScan: function(success, fail) {
                var q = $q.defer();
                $window.plugins.WifiWizard.startScan(function() {
                    q.resolve();
                }, 
                function() {
                    q.reject();
                });
                return q.promise;
            },
            
            getScanResults: function([options], listHandler, fail) {
                var q = $q.defer();
                $window.plugins.WifiWizard.getScanResults([options],function(results){
                    q.resolve(results);
                },
                function() {
                    q.reject();
                });
                return q.promise;
            },
            
            listNetworks: function(listHandler, fail) {
                var q = $q.defer();
                $window.plugins.WifiWizard.listNetworks(function(networks) {
                    q.resolve(networks);
                },
                function() {
                    q.reject();
                });
                return q.promise;
            },
            
            addNetwork: function(wifi, win, fail) {
                var q = $q.defer();
                $window.plugins.WifiWizard.addNetwork(wifi, win, fail);
                return q.promise;
            },
            
            removeNetwork: function(SSID, win, fail) {
                var q = $q.defer();
                $window.plugins.WifiWizard.removeNetwork(SSID, win, fail);
                return q.promise;
            },
            
            connectNetwork: function(SSID, win, fail) {
                var q = $q.defer();
                $window.plugins.WifiWizard.connectNetwork(SSID, win, fail);
                return q.promise;
            },
            
            disconnectNetwork: function(SSID, win, fail) {
                var q = $q.defer();
                $window.plugins.WifiWizard.disconnectNetwork(SSID, win, fail);
                return q.promise;
            },
            
            formatWifiConfig: function(SSID, password, algorithm) {
                var q = $q.defer();
                $window.plugins.WifiWizard.formatWifiConfig(SSID, password, algorithm);
                return q.promise;
            },
            
            formatWPAConfig: function(SSID, password) {
                var q = $q.defer();
                $window.plugins.WifiWizard.formatWPAConfig(SSID, password);
                return q.promise;
            }
        }
    }]);
})();
