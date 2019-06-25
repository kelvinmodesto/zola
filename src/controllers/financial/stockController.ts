export class SymbolController {
  public router: any;
  public context: any;
  constructor(router: any, context: any) {
    this.router = router;
    this.context = context;
  }

  public init() {
    // methods list
    // this.createSymbol();
    this.listSymbols();
    return this.router;
  }
  public listSymbols() {
    this.router.get('/symbol', (req: any, res: any, next: any) => {
      try {
        console.log('@@@symbol',req.query);
      } catch (error) {
        next(error);
      }
    });
  }
  public createSymbol() {
    this.router.post('/symbol', async (req, res, next) => {
      try {
        const { name }
      } catch(error) {
        next(error);
      }
    });
  }

}
