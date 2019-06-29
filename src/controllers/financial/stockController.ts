import { pick } from 'lodash';

import RequestErrorException from '../../utils/exceptions/RequestErrorException';

export class StockController {
  public router: any;
  public context: any;
  constructor(router: any, context: any) {
    this.router = router;
    this.context = context;
  }

  public init() {
    // methods list
    // this.createSymbol();
    this.listStocks();
    this.createStock();
    return this.router;
  }
  public listStocks() {
    this.router.get('/stock', async (req: any, res: any, next: any) => {
      try {
        const { name, symbol, description } = req.query;
        const list = await this.context.read(pick({ name, symbol, description }));

        if (res.status(200)) {
          res.send(list);
        } else {
          throw new RequestErrorException();
        }
      } catch (error) {
        next(error);
      }
    });
  }
  public createStock() {
    this.router.post('/stock', async (req: any, res: any, next: any) => {
      try {
        const { name, symbol, description = '' } = await this.context.create(req.query);
        if (res.status(200)) {
          res.send({
            description,
            name,
            symbol,
          });
        } else {
          throw new RequestErrorException();
        }
      } catch (error) {
        next(error);
      }
    });
  }

}
