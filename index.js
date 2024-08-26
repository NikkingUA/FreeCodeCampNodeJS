import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.send('Response String');
});


app.listen(3000, () => console.log('Server started on port 3000'))