import { Component, HostListener } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  @HostListener('document:keydown.control.m') doSth(){
    this.router.navigate(['/admin']);
  }
  title = 'Water';
  constructor(public router:Router){}
}
