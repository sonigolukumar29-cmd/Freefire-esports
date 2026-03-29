require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const pool = require('./config/database');
const authRoutes = require('./routes/auth');
const matchRoutes = require('./routes/matches');
const paymentRoutes = require('./routes/payment');
const userRoutes = require('./routes/user');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/user', userRoutes);

app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Free Fire eSports API is running' });
});

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Free Fire eSports Platform API', version: '1.0.0', endpoints: { auth: '/api/auth', matches: '/api/matches', payment: '/api/payment', user: '/api/user' } });
});

app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal server error', message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Free Fire eSports API running on port ${PORT}`);
});
