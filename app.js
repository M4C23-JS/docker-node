const express = require('express');
const app = express();

app.get('/', (req, res) => {
	console.log('Any enter i ssn serversss');
	res.send('Welocome!!');
});

app.get('/say', (req, res) => {
	console.log('Any say' + req.query.name + '!!');
	res.send('Welocome!!' + req.query.name);
});

app.listen(3000, () => {
	console.log('Server listening port 3000 :=)');
});
