import express, { json } from 'express'
import employeesRoutes from './routes/employes.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

//interpretar los valores json que llegan desde post y put
app.use(express.json());

//traigo las rutas que importe
app.use(indexRoutes);
app.use('/api',employeesRoutes);

app.use((req,res,next)=>{
   res.status(404).json({
      message: "Not Found 404"
   });
});

export default app;