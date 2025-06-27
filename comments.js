// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Middleware to parse JSON bodies
app.use(express.json());
// Route to handle GET requests
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
// Route to handle POST requests
app.post('/calculate', (req, res) => {
    const { var1, var2 } = req.body;
    if (typeof var1 !== 'number' || typeof var2 !== 'number') {
        return res.status(400).send('Invalid input. Please provide two numbers.');
    }
    const result = calculateNumbers(var1, var2);
    res.json({ result });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 
// Function to calculate the sum of two numbers
function calculateNumbers(var1, var2) {
    return var1 + var2;
}
// Function to demonstrate skills member functionality
function skillsMember() {
    return "This is a skills member function.";
}