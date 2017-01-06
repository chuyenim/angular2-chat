"use strict";
var router_1 = require("@angular/router");
var message_component_1 = require("./message.component");
var login_component_1 = require("./login.component");
var routing = [
    { path: '', component: message_component_1.MessageListComponent },
    { path: 'login', component: login_component_1.LoginComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map