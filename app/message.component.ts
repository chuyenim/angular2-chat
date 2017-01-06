import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component ({
    selector: 'message-list',
    templateUrl: 'app/message.component.html'
})
export class MessageListComponent implements OnInit {
    public messages: any[];
    public name: string;

    constructor(private employeeService: EmployeeService) {}
    ngOnInit() {
        this.name = 'Chris';
        this.getList();
    }

    getList() {
        this.employeeService.GetList().subscribe((response:any) => {
            this.messages = response;
        }, error => {
            console.log('System error api');
        });
    }

    Send(data: any) {
        console.log(data);
        this.employeeService.Add(data).subscribe(response=> {
            if (response) {
                this.getList();
            }
        });
    }
}