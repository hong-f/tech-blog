const withAuth = (req, res, next) => {
    // if your not logged in it will take you to login
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;