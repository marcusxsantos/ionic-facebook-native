import * as tslib_1 from "tslib";
import { Facebook } from '@ionic-native/facebook/ngx';
import { Component } from '@angular/core';
var AutenticacaoPage = /** @class */ (function () {
    function AutenticacaoPage(fb) {
        this.fb = fb;
    }
    AutenticacaoPage.prototype.ngOnInit = function () {
    };
    AutenticacaoPage.prototype.loginFacebook = function () {
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) { return console.log('Logged into Facebook!', res); })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    AutenticacaoPage = tslib_1.__decorate([
        Component({
            selector: 'app-autenticacao',
            templateUrl: './autenticacao.page.html',
            styleUrls: ['./autenticacao.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Facebook])
    ], AutenticacaoPage);
    return AutenticacaoPage;
}());
export { AutenticacaoPage };
//# sourceMappingURL=autenticacao.page.js.map