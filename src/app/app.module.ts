import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {AppRoutingModule} from './app-routing/app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';;
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from  '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import {UserService} from './services/user.service';
import {TokenInterceptorService} from './services/token-interceptor.service';
import{SprintService} from './services/sprint.service';

import { SupportToolComponent } from './support-tool/support-tool.component';
import { ToolNavigationComponent } from './tool-navigation/tool-navigation.component';
import { OcCreationComponent } from './oc-creation/oc-creation.component';
import { HomeSupportToolComponent } from './home-support-tool/home-support-tool.component';
import { SidebarSupportToolComponent } from './sidebar-support-tool/sidebar-support-tool.component';


import{AuthGuard} from './auth.guard';
import { ListOrderChangesComponent } from './list-order-changes/list-order-changes.component';
import { CreationSprintComponent } from './creation-sprint/creation-sprint.component';
import { DashboardSprintComponent } from './dashboard-sprint/dashboard-sprint.component';
import { DialogComponent } from './dialog/dialog.component';
import { CreationTaskComponent } from './creation-task/creation-task.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    HeaderComponent,
    LoginComponent,
    SupportToolComponent,
    ToolNavigationComponent,
    OcCreationComponent,
    HomeSupportToolComponent,
    SidebarSupportToolComponent,
    ListOrderChangesComponent,
    CreationSprintComponent,
    DashboardSprintComponent,
    DialogComponent,
    CreationTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    SprintService,
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    },
    MatDatepickerModule
  ],
 
  entryComponents:[
    DialogComponent,
    CreationTaskComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
