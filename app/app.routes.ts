import { Routes, RouterModule } from '@angular/router';
import { MessageListComponent } from './message.component';
import { LoginComponent } from './login.component';

const routing: Routes = [
    {path: '', component: MessageListComponent},
    {path: 'login', component: LoginComponent}
]
export const appRoutes = RouterModule.forRoot(routing);