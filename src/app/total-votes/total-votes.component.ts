import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';
import { QuoteComponent } from '../quote/quote.component';
import { QuoteDetailComponent } from '../quote-detail/quote-detail.component';



@Component({
  selector: 'app-total-votes',
  templateUrl: './total-votes.component.html',
  styleUrls: ['./total-votes.component.css']
})
export class TotalVotesComponent implements OnInit {
   @Input() quote: Quote;
 @Output() isComplete = new EventEmitter <boolean>();
  constructor() { }

  ngOnInit() {
  }

}
