import { Router } from 'express';

// Database
import { ContextStrategy as Context } from '../../db/base/contextStrategy';
import { MongoDBStrategy as MongoDB } from '../../db/mongodb/mongoDBStrategy';

// Controller
import { StockController } from '../../controllers/financial/stockController';

// Model
import stock from '../../models/stock';

const context = new Context(new MongoDB(MongoDB.connect(), stock));
const stockRouter = () => {
  const stockController = new StockController(Router(), context);
  stockController.router.use('/stock', stockController.init());
  return stockController.router;
};

export default stockRouter;
