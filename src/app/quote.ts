export class Quote {
  public showDescription: boolean;
  public showButton: boolean;
  constructor(
    public id: number,
    public description: string,
    public name: string,
    public publisher: string,
    public upVote: number,
    public dnVote: number,
    public completeDate: Date) {
    this.showDescription = false;
    //  this.showButton:true;
  }
}
