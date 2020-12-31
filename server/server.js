import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server at http://localhost:${port}`))

app.get('/', (req, res) => {
    res.send('Server is ready');
})