import cookieParser from 'cookie-parser';
import express from 'express';
import httpErrors from 'http-errors';
import morgan from 'morgan';

// Routers list
import quoteRouter from './api/quote/quoteRouter';
import stockRouter from './api/stock/stockRouter';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', quoteRouter());
app.use('/', stockRouter());

// catch 404 and forward to error handler
app.use((req: any, res: any, next: any): any => next(httpErrors(404)));

// error handler
app.use((err: any, req: any, res: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
