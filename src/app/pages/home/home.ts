import { Component } from '@angular/core';
import { CardItemComponent } from '../../shared/card-item/card-item';

@Component({
  selector: 'app-home',
  imports: [CardItemComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  titulo: any;
}
