export class Quote {
   public showDescription: boolean;
 constructor(
   public id: number,
   public quote: string,
   public author: string,
   public publisher: string,
   public initialVote: number,
   public finalVote: number,
   public completeDate: Date) {
   this.showDescription = false;
 }
}
