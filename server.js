const express=require('express');
const cors=require('cors');
const userrelatedroutes=require('./routes/user');
const app=express();
app.use(cors('*'));
app.use(express.json());
app.use('/user',userrelatedroutes);
app.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000')
  })