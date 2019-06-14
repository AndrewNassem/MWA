import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users.component';
import { UsersModule } from './users/users.module';
import { MyGuardGuard } from './my-guard.guard';
import { MainComponentComponent } from './main-component/main-component.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent
    ],
  imports: [
    BrowserModule,
    UsersModule, HttpClientModule,
    RouterModule.forRoot([
      {path: '' , component : MainComponentComponent} ,
      {path: 'home' , component : MainComponentComponent} ,
      {path: 'user/' , component : UsersComponent , canActivate: [MyGuardGuard]} ,
      {path: 'user/:uiid' , component : UsersComponent , canActivate: [MyGuardGuard]} ,
      {path: '**' , redirectTo : 'home'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
