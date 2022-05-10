import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public direction: any = 'Avda Sardiñeira 37, 15008';
  public phone: any = '+34 666 156 406';
  public gmail: any = 'reydominguezsaulo7@gmail.com';

  constructor() { }

  ngOnInit(): void {
  }

}
