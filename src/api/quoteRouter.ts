import { Router } from 'express';

// Database
import { ContextStrategy as Context } from '../db/base/contextStrategy';
import { MongoDBStrategy as MongoDB } from '../db/mongodb/mongoDBStrategy';

// Controllers list
import { QuoteController } from '../controllers/financial/quoteController';

// Models list
import quote from '../models/quote';

// Put all models in a single object
const models = { quote };

const context = new Context(new MongoDB(MongoDB.connect(), models.quote));
const quoteRouter = () => {
  const quoteController = new QuoteController(Router(), context);

  quoteController.router.use('/quote', quoteController.init());

  return quoteController.router;
};

export default quoteRouter;
