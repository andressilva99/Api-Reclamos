import express from "express";
import CommonRoutes from "./http/routes/common.routes";
import CategoryRoutes from "./http/routes/category.routes";
import VisitorRoutes from "./http/routes/visitor.routes";
import ClaimRoutes from "./http/routes/claim.routes";
import cors from "cors";
import { log } from "debug";
import expressWinston from "express-winston";
import winston from "winston";
import visitorsSeeder from "./infrastructure/seeders/visitors.seeder";
import claimSeeder from "./infrastructure/seeders/claims.seeder";
import categoriesSeeder from "./infrastructure/seeders/categories.seeder";

const app: express.Application = express();

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

try {
  categoriesSeeder.generate();
  visitorsSeeder.generate();
  claimSeeder.generate();
} catch {
  console.log('error generating seeders');
}


app.use(expressWinston.logger(loggerOptions));


const routes: Array<CommonRoutes> = [];
app.use(cors());
app.use(express.json());

// Add router
// you should add your routes here...
//routes.push(new PassengerRoutes(app)); crear una nueva estancia del la ruta y push
//routes.push()

routes.push(new CategoryRoutes(app));
routes.push(new VisitorRoutes(app));
routes.push(new ClaimRoutes(app));

app.listen(3000, () => {
  routes.forEach((route: CommonRoutes) => {
    log(`Routes configured for ${route.getName()}`);
  });
  log("Server listening on port 3000");
});