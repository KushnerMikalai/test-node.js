exports.getHomePage = (req, res, next) => {
  res.render('pages/index', {
    pageTitle: 'English Panda',
    path: '/',
    isAuthenticated: req.isLoggedIn,
  });
};
