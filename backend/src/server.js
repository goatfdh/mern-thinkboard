import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

import path from 'path';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();


if(process.env.NODE_ENV !== 'production'){
   app.use(cors({
   origin: "http://localhost:5173",// Replace with your frontend URL
})
); // Enable CORS for all routes
}

// Middleware to parse JSON bodies: req.body
app.use(express.json());
app.use(rateLimiter); // Apply the rate limiter middleware to all routes


// our simple custom middleware to log the request method and url
// app.use((req,res,next)=>{
//   console.log(`Req method is ${req.method} & Req url is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname,'../frontend/dist')));

   app.get("*",(req,res)=>{
      res.sendFile(path.join(__dirname,'../frontend', "dist", "index.html"));
   });
}


connectDB().then(() => {
  app.listen(PORT, () => {
  console.log('Server is running on port:',PORT);
   })
});


