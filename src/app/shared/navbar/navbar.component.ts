import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public phone: any = '666 156 406';
  public gmail: any = 'reydominguezsaulo7@gmail.com';

  constructor() { }

  ngOnInit(): void {
  }

}
