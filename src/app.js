import express from "express";
const app = express();

import path from 'path'
import { fileURLToPath } from "url";
import apiRoutes from './routes/app.routes.js'

const filename = fileURLToPath(import.meta.url)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(filename, '../public')));
app.use('/api', apiRoutes);
app.use((req, res, next) => {
    res.status(404).sendFile(path.resolve(filename, '../public/404.html'));
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(filename, '../public/index.html'));
})

export default app;