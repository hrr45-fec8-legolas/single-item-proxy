require('newrelic');

const express = require('express');
const app = express();
const {createProxyMiddleware} = require('http-proxy-middleware');
const port = 8001;
const path = require('path');

// const apiProxy = createProxyMiddleware({target: 'http://ec2-3-132-5-204.us-east-2.compute.amazonaws.com:3001'});
const reviewProxy = createProxyMiddleware({target: 'http://localhost:3004'});
// const relatedProxy = createProxyMiddleware({target: 'http://54.89.234.183:3003'});
// const itemsProxy = createProxyMiddleware({target: 'http://34.201.53.74:3002'});
app.use(express.static('public'))

// app.use('/api/items/:id',apiProxy);
app.use('/api/allreviews/',reviewProxy);
app.use('/api/addreview/',reviewProxy);
// app.use('/api/related_products/:id',relatedProxy);
// app.use('/items/:id',itemsProxy);

// << MAY NEED TO REMOVE >>
// app.get('/:id', (req, res) => {
//   res.send('public');
// })

app.listen(port,() => {
  console.log('listening..');
});