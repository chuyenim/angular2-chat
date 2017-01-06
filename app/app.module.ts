import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MessageListComponent } from './message.component';
import { EmployeeService } from './services/employee.service';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations: [
    AppComponent,
    MessageListComponent,
    LoginComponent
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }  