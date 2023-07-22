const { error } = require('console');
const express=require('express');
const { appendFile } = require('fs');
const { request } = require('https');
const appforuser=express.Router();
const mysql=require('mysql');
var connection=mysql.createConnection(
{
    host:'localhost',
    user:'root',
    password:'manager',
    database:'dac2023'
}
);

appforuser.get("/",(request,response)=>{

    connection.query("select * from user",(error,result)=>{
        if(error==null)
        {
            var data=JSON.stringify(result);
            response.setHeader("Content-Type","application/json")
            response.write(data);
        }else{
            console.log(error);
            response.setHeader("Content-Type","application/json")
            response.write(error);
        }
        response.end();
    })
})


appforuser.post("/add",(request,response)=>{
   var query=`insert into user values(${request.body.Id},'${request.body.Name}','${request.body.Address}')`;
    connection.query(query,(error,result)=>{
        if(error==null)
        {
         var data=JSON.stringify(result);
         response.setHeader("Content-Type","application/json");
         response.write(data);
        }else{
          console.log(error);
          response.setHeader("Content-Type","application/json");
          response.write(error);
        }
        response.end();
    })
})

appforuser.put("/update",(request,response)=>{
    var query=`update user set name='${request.body.Name}' where Id='${request.body.Id}'`;
    connection.query(query,(error,result)=>{
        if(error==null)
        {
           var data=JSON.stringify(result);
           response.setHeader("Content-Type","application-json");
           response.write(data);
        }else
        {
            console.log(error);
            response.setHeader("Content-Type","application-json");
            response.write(error);
           
        }
        response.end();
    })
})


appforuser.delete("/delete",(request,response)=>{
    var query=`delete from user where Id='${request.body.Id}'`;
    connection.query(query,(error,result)=>{
        if(error==null)
        {
         var data=JSON.stringify(result);
         response.setHeader("Content-Type","application/json");
         response.write(data);
        }else{
          console.log(error);
          response.setHeader("Content-Type","application/json");
          response.write(error);
        }
        response.end();
    })      
})

module.exports=appforuser;