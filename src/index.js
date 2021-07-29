//console.log("Hello Dilip 1234");
const { request } = require('express');
const express = require('express')
const app = express()

app.use(express.json())
const { P, fn, sn, add, mf ,myMethod,myMethod2,myMethod3,myMethod4} = require('./helper')
console.log(P);
console.log(fn);
console.log(sn);
console.log(add);
console.log(mf);
myMethod();
console.log(myMethod2);
myMethod2();
console.log(myMethod3);
myMethod3();
console.log(myMethod4);
myMethod4();

app.get('/', function (req, res) {
    res.send('hello world');
});
app.get(`/getmyname`, (req, res) => {
    res.send('hello how are you');
});
app.post(`/getsurname`, (req, res) => {
    res.send('what is your Name');
});
app.post(`/getaddr`, (req, res) => {
    res.send('where are you from');
});
app.post(`/getcountry`, (req, res) => {
    let u = req.body.uname;
    console.log(u);
    res.status(200).json({ "username": u });
});
//app.listen(PRT,()=>{
  // console.log(`this server is running ${ PRT }`);
//})
