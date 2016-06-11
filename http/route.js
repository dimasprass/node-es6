const Index = require('../routes/index');

module.exports = (app) => {

	app.get('/', Index.home);
	app.get('/about', Index.about);
	app.get('/what-we-do', Index.whatWeDo);
	app.get('/register', Index.register);
	app.get('/login', Index.login);
}
