import { Router } from 'express';

// Database
import { ContextStrategy as Context } from '../../db/base/contextStrategy';
import { MongoDBStrategy as MongoDB } from '../../db/mongodb/mongoDBStrategy';

// Controller
import { SymbolController } from '../../controllers/financial/symbolController';

// Model
import symbol from '../../models/stock';

const context = new Context(new MongoDB(MongoDB.connect(), symbol));
const symbolRouter = () => {
  const symbolController = new SymbolController(Router(), context);
  symbolController.router.use('/symbol', symbolController.init());
  return symbolController.router;
};

export default symbolRouter;
