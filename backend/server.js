import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const productsFile = path.join(__dirname, 'data', 'products.json');
const ordersFile = path.join(__dirname, 'data', 'orders.json');

function readJson(filePath, fallback) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return fallback;
  }
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

app.get('/api/products', (req, res) => {
  const products = readJson(productsFile, []);
  res.json(products);
});

app.post('/api/orders', (req, res) => {
  const { name, email, artworkType, size, message } = req.body;

  if (!name || !email || !artworkType) {
    return res.status(400).json({ message: 'Name, email, and artwork type are required.' });
  }

  const orders = readJson(ordersFile, []);
  const newOrder = {
    id: Date.now(),
    name,
    email,
    artworkType,
    size: size || 'Standard',
    message: message || '',
    createdAt: new Date().toISOString()
  };

  orders.push(newOrder);
  writeJson(ordersFile, orders);

  return res.status(201).json({
    message: 'Order placed successfully.',
    order: newOrder
  });
});

app.post('/api/commission', (req, res) => {
  const { name, email, projectType, details } = req.body;

  if (!name || !email || !projectType) {
    return res.status(400).json({ message: 'Name, email, and project type are required.' });
  }

  const orders = readJson(ordersFile, []);
  const newCommission = {
    id: Date.now(),
    name,
    email,
    projectType,
    details: details || '',
    type: 'commission',
    createdAt: new Date().toISOString()
  };

  orders.push(newCommission);
  writeJson(ordersFile, orders);

  return res.status(201).json({
    message: 'Commission request received.',
    commission: newCommission
  });
});

app.listen(PORT, () => {
  console.log(`BEARTS backend running on http://localhost:${PORT}`);
});
