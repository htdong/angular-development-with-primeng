"use strict";
var router_1 = require('@angular/router');
var checkbox_component_1 = require('./section/checkbox.component');
var router = [
    { path: '', redirectTo: 'chapter3/forms', pathMatch: 'full' },
    { path: 'chapter3/checkbox', component: checkbox_component_1.CheckboxComponent },
    { path: '**', redirectTo: 'chapter3/forms' }
];
exports.routes = router_1.RouterModule.forRoot(router);
