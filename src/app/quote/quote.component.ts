import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { QuoteFormComponent } from '../quote-form/quote-form.component';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quote: any;
  @Input() submitByName: any;
  @Input() quoteUpdate: QuoteFormComponent ;

  quotes: Quote[] = [
    new Quote(1, 'Cheap is expensive', 'Merlin', 'Joe', 0, 0, new Date(2004, 7, 14)),
    new Quote(2, 'Enjoy your youth while you are still"free"', 'Merlin', 'Joe_me', 0, 0, new Date(2012, 9, 14)),
    new Quote(3, 'If you judge people, you have no time to love them. ', 'Columbus', 'Joe-me', 0, 0, new Date(2014, 4, 14)),
    new Quote(4, 'Life is not about finding yourself.Life is about creating yourself.', 'B. Shaw', 'sonia', 0, 0, new Date(2018, 5, 14)),
    new Quote(5, 'Life is really simple, but we insist on making it complicated', 'Confucius', 'JoeM', 0, 0, new Date(2017, 7, 14)),
    new Quote(6, 'I have found that if you love life, life will love you back.', 'Arthur ', 'Joe Russel', 0, 0, new Date(2018, 12, 14)),
    new Quote(7, 'You get in life what you have the courage to ask for', 'Oprah', 'Arthur', 0, 0, new Date(2016, 3, 14))

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
  // <!--***************************** quote voting  Effect ****************************************** -->

  upVoter(index) {
    let i: number;
    i = this.quotes[index].upVote;
    i++;
    this.quotes[index].upVote = i;
    console.log('this i: ' + i);
  }

  dnVoter(index) {
    let j: number;
    j = this.quotes[index].dnVote;
    j++;
    this.quotes[index].dnVote = j;
  }

  highest(arr) {
    arr = [];
    this.quotes.forEach(quote => {
      arr.push(quote.upVote);
    });
    const high = Math.max.apply(Math, arr);
    return high;
  }

  addQuote(quote) {
    this.quotes.unshift(quote);
    console.log(this.quotes);
  }
    // <!--***************************** quote voting  Effect ****************************************** -->

  constructor() { }

  ngOnInit() {
  }

}
