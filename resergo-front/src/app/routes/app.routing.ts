// filepath: /c:/Users/samuel.hernandez/Documents/resergo/resergo-front/src/app/routes/app.routing.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../shared/components/main-layout/main-layout.component';
import { LoginComponent } from '../features/login/login.component';
import { HomeComponent } from '../features/home/home.component';
import { ProfileComponent } from '../features/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
        
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'profile',
            component: ProfileComponent
        },
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
        }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
},
];