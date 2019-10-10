const { Router } = require('express');

const User = require('./model');

const router = new Router();

router.get('/user', async (req, res, next) => {
	try {
		const users = await User.findAll();

		return res.send(users);
	} catch (err) {
		console.error(err);
		next(err);
	}
});

router.post('/sign-up', async (req, res, next) => {
	const user = {
		name: req.body.name,
		descriptors: req.body.descriptors
	};

	try {
		const newUser = await User.create(user);

		return res.send(newUser);
	} catch (err) {
		console.error(err);
		next(err);
	}
});

module.exports = router;
