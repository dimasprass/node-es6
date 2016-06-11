module.exports.home = (req, res) => {
	res.render('index/home', {tagline: 'Welcome aboard!'});
}

module.exports.about = (req, res) => {
	res.render('index/about', {tagline: 'About Page!'});
}

module.exports.whatWeDo = (req, res) => {
	res.render('index/what_we_do', {tagline: 'What We Do Page!'});
}

module.exports.register = (req, res) => {
	res.render('index/register', {tagline: 'Register Page'});
}
module.exports.login = (req, res) => {
	res.render('index/login', {tagline: 'LOGIN PAGE'});
}