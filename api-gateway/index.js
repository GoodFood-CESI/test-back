const express = require('express');
const cors  = require('cors');
const morgan = require('morgan');

const { createProxyMiddleware} = require('http-proxy-middleware');
const {setupLogging} = require("./logging");


const app = express();


setupLogging(app);

const authProxy = createProxyMiddleware({
    target:'http://localhost:4000/',
    changeOrigin:true,
});

const userProxy = createProxyMiddleware({
    target:'https://randomuser.me/',
    changeOrigin:true,
});


app.use('/test',authProxy);
app.use('/yes',authProxy);
app.use('/api',userProxy);

app.use(cors());




app.listen(5000,()=> console.log('ça marche'))

