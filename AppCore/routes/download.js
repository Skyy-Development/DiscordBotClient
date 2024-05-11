const { Router } = require('express');

const app = Router();

app.get('/', (req, res) => {
	return res.redirect(
		'https://github.com/skyy-development/releases',
	);
});

module.exports = app;
