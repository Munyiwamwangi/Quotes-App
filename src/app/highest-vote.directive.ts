import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appHighestVote]'
})
export class HighestVoteDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'rgb(28, 99, 99)';
  }
}
