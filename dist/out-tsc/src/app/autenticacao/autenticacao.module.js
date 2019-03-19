import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AutenticacaoPage } from './autenticacao.page';
var routes = [
    {
        path: '',
        component: AutenticacaoPage
    }
];
var AutenticacaoPageModule = /** @class */ (function () {
    function AutenticacaoPageModule() {
    }
    AutenticacaoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AutenticacaoPage]
        })
    ], AutenticacaoPageModule);
    return AutenticacaoPageModule;
}());
export { AutenticacaoPageModule };
//# sourceMappingURL=autenticacao.module.js.map