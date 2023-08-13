const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const PORT = 8000;

app.use(cors()); 
app.use(bodyParser.json());










app.use(bodyParser.json());


app.post('/api/submit-contact-form', (req, res) => {
    const formData = req.body; 
    res.json({ message: 'Form submission received successfully!' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
