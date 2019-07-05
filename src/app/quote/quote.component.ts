import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
   quotes: Quote [] = [
  new Quote(1, 'Cheap is expensive', 'Merlin', 'Joe', 0, 0, new Date(2019, 3, 14)),
  new Quote(1, 'Enjoy your youth while you are still"free"', 'Merlin', 'Joe_me', 0, 0, new Date(2019, 3, 14)),
  new Quote(1, 'If you judge people, you have no time to love them. ', 'Christopher Columbus', 'Joe-me', 0, 0, new Date(2019, 3, 14)),
  new Quote(1, 'Life isn not about finding yourself.Life is about creating yourself.', 'B. Shaw', 'sonia', 0, 0, new Date(2019, 3, 14)),
  new Quote(1, 'Cheap is expensive', 'Merlin', 'Joe', 0, 0, new Date(2019, 3, 14)),
  new Quote(1, 'Cheap is expensive', 'Merlin', 'Joe', 0, 0, new Date(2019, 3, 14)),
  new Quote(1, 'Cheap is expensive', 'Merlin', 'Joe', 0, 0, new Date(2019, 3, 14))

];
  constructor() { }

  ngOnInit() {
  }

}
