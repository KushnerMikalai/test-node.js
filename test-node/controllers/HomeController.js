const nodeMailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

exports.getHomePage = (req, res, next) => {
  res.render('pages/index', {
    pageTitle: 'English Panda',
    path: '/',
  });
};

exports.postEmail = (req, res, next) => {
  let transporter = nodeMailer.createTransport(
    smtpTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: 'nickminskwdf@gmail.com',
        pass: 'S4iu5QWQckIrgY',
      },
    })
  );
  let mailOptions = {
    from: 'nickminskwdf@gmail.com',
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.body,
    html: '<b>NodeJS Email Tutorial</b>',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.redirect('/');
  });
};
