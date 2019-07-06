import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Cheap is expensive', 'Merlin', 'Joe', 0, 0, new Date(2019, 3, 14)),
    new Quote(2, 'Enjoy your youth while you are still"free"', 'Merlin', 'Joe_me', 0, 0, new Date(2019, 3, 14)),
    new Quote(3, 'If you judge people, you have no time to love them. ', 'Columbus', 'Joe-me', 0, 0, new Date(2019, 3, 14)),
    new Quote(4, 'Life is not about finding yourself.Life is about creating yourself.', 'B. Shaw', 'sonia', 0, 0, new Date(2019, 3, 14)),
    new Quote(5, 'Life is really simple, but we insist on making it complicated', 'Confucius', 'JoeM', 0, 0, new Date(2019, 3, 14)),
    new Quote(6, 'I have found that if you love life, life will love you back.', 'Arthur ', 'Joe Russel', 0, 0, new Date(2019, 3, 14)),
    new Quote(7, 'You get in life what you have the courage to ask for', 'Oprah', 'Arthur', 0, 0, new Date(2019, 3, 14))

  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    // quote.publisher + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  constructor() { }

  ngOnInit() {
  }

}
