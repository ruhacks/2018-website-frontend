/*global angular */

angular
.module('app.controllers', [])
.controller('authCtrl', ['authService', '$window', function authCtrl(authService, $window) {
    var _ctrl = this;

    _ctrl.err = {
        show: false,
        text: ''
    }
    
    _ctrl.login = function() {
        var userCheck = typeof _ctrl.user === 'undefined' || _ctrl.user.trim() === '';
        var passCheck = typeof _ctrl.pass === 'undefined' || _ctrl.pass.trim() === '';

        if(userCheck || passCheck) {
            if(userCheck && passCheck) {
                _ctrl.err.text = 'Please provide your username and password.';
            } else if (userCheck) {
                _ctrl.err.text = 'Please provide your username.';
            } else if (passCheck) {
                _ctrl.err.text = 'Please provide your password.';
            }
            _ctrl.err.show = true;
        } else {
            authService.auth({'username': _ctrl.user, 'pass': _ctrl.pass}).then(
                function(res){
                    if(res.data.valid){
                        $window.location.assign('dash');
                        _ctrl.err.text = 'Transferring you to dashboard';
                    } else {
                        _ctrl.err.text = 'Wrong username/password';
                    }
                    _ctrl.err.show = true;
                },
                function(res){
                    console.log('Failed to log in.');
                    console.log(res.status + ' ' + res.statusText);
                    _ctrl.err.text = 'Sorry unable to log you in at the moment. Try again later. :(';
                    _ctrl.err.show = true;
                }
            );
        }
    }

    _ctrl.logout = function() {
        authService.logout().then(
            function (res) {
                console.log('Logged out');
                $window.location.assign('');
            },
            function(res) {
                console.log('Failed to log out');
                console.log(res.status + ' ' + res.statusText);
            }
        );
    }
}]);