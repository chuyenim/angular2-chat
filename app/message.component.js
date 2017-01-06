"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_service_1 = require("./services/employee.service");
var MessageListComponent = (function () {
    function MessageListComponent(employeeService) {
        this.employeeService = employeeService;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        this.name = 'Chris';
        this.getList();
    };
    MessageListComponent.prototype.getList = function () {
        var _this = this;
        this.employeeService.GetList().subscribe(function (response) {
            _this.messages = response;
        }, function (error) {
            console.log('System error api');
        });
    };
    MessageListComponent.prototype.Send = function (data) {
        var _this = this;
        console.log(data);
        this.employeeService.Add(data).subscribe(function (response) {
            if (response) {
                _this.getList();
            }
        });
    };
    return MessageListComponent;
}());
MessageListComponent = __decorate([
    core_1.Component({
        selector: 'message-list',
        templateUrl: 'app/message.component.html'
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], MessageListComponent);
exports.MessageListComponent = MessageListComponent;
//# sourceMappingURL=message.component.js.map