import { Component } from '@angular/core';
import { Home } from '../home/home';
import { About } from '../about/about';
import { Service } from '../service/service';
import { Contact } from '../contact/contact';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html'
})
export class Navbar {}