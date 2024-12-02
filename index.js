const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routers/userRoutes.js');
const transaksiRouter = require('./routers/transaksiRouter');
const barangRouter = require('./routers/barangRouter');
const supplierRouter = require('./routers/supplierRouter');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', transaksiRouter);
app.use('/api', barangRouter);
app.use('/api', supplierRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
