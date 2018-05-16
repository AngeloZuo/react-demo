const app = require('./index');
const hostName = 'localhost';
const port = 9091;

app.listen(port, hostName, () => {
    console.log(`Server Address is: ${hostName}:${port}`);
});