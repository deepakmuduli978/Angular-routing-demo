import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Service } from './service/service';
import { Component } from '@angular/core';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'service', component: Service },
  { path: 'contact', component: Contact },
];