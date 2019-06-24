import dotenv from 'dotenv';

export class QuoteController {
  public router: any;
  public context: any;
  constructor(router: any, context: any) {
    this.router = router;
    this.context = context;
  }

  public init() {
    // list all routes
    this.getQuotes();
    return this.router;
  }

  public getQuotes() {
    dotenv.config();
    this.router.get('/quote', (req: any, res: any, next: any) => {
      try {
        console.log('@@@quote',req.query);
      } catch (error) {
        next(error);
      }
    });
  }
}
