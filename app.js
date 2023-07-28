const app = require('express')();


console.log('Hello World!');

app.get('/', (req, res) => {
    res.send('\n Hello World! \n');
}
);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});