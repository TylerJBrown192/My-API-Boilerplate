import bodyParser = require('body-parser');
import errorhandler = require('errorhandler');
import express = require('express');

const app: express.Express = express();

if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
}

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => { console.log('Request received'); next(); });

app.listen(3000);
