import {Routes} from '@angular/router';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { SupportToolComponent } from '../support-tool/support-tool.component';
import {HomeSupportToolComponent} from '../home-support-tool/home-support-tool.component';
import { OcCreationComponent } from '../oc-creation/oc-creation.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../auth.guard';

export const routes:Routes = [
    {path:'register', component:RegisterUserComponent },
    {path:'login', component:LoginComponent },
    {path: '', redirectTo:'/login', pathMatch:'full'},
    {path:'tool', component:SupportToolComponent, children:[
        {path:'home', component:HomeSupportToolComponent},
        {path:'creationOC', component:OcCreationComponent}
    ],
    canActivate: [AuthGuard]}
];
// {path: '', component:HomeSupportToolComponent, outlet: 'toolSupport' },
// {path: 'tool', component:HomeSupportToolComponent, outlet: 'toolSupport' }