/* 
    File name: app.js
    Author: Matthew Walichnowsky
    Website name: walichnowsky.com
    File description: This page contains my main app information.
*/

// Modules.
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var nodemailer = require('nodemailer');

// // Email
// var transporter = nodemailer.createTransport(transport[, defaults])

// Page variables.
var routes = require('./routes/index');
var about = require('./routes/about');
var services = require('./routes/services');
var projects = require('./routes/projects');
var experience = require('./routes/experience');
var contact = require('./routes/contact');

// Set a variable to call express().
var app = express();

// View engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

// Load favicon for my portfolio.
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Page linking.
app.use('/', routes);
app.use('/about', about);
app.use('/services', services);
app.use('/projects', projects);
app.use('/experience', experience);
app.use('/contact', contact);

// Image linking.
//app.use('/', public);

// Contact form use.
// app.get('/contact', routes.contact);

// Google recapcha.
app.get
('/',function(req,res) 
    {
        // Sending our HTML file to browser.
        res.sendFile(__dirname + '/index.html');
    }
);
app.post
('/submit',function(req,res)
    {
        // If its blank or null means user has not selected the captcha, so return the error.
        if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) 
        {
            return res.json({"responseCode" : 1,"responseDesc" : "Please select captcha"});
        }
        // Secret key.
        var secretKey = "6Lc84ggUAAAAAM3yVWUMHGDWRv9-wbbcU4VGfGCT";

        // Req.connection.remoteAddress will provide IP address of connected user.
        var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;

        // Hitting GET request to the URL, Google will respond with success or error scenario.
        request
        (verificationUrl,function(error,response,body) 
            {
                body = JSON.parse(body);

                // Success will be true or false depending upon captcha validation.
                if(body.success !== undefined && !body.success) 
                {
                    return res.json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
                }
                res.json({"responseCode" : 0,"responseDesc" : "Sucess"});
            }
        );
    }
);

// Gmail email sender.
// app.post('/contact', function (req, res) {
//   var mailOpts, smtpTrans;
//   //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
//   smtpTrans = nodemailer.createTransport('SMTP', {
//       service: 'Gmail',
//       auth: {
//           user: "mwalichnowsky@gmail.com",
//           pass: "password-here" 
//       }
//   });
//   //Mail options
//   mailOpts = {
//       from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
//       to: 'me@gmail.com',
//       subject: 'Website contact form',
//       text: req.body.message
//   };
//   smtpTrans.sendMail(mailOpts, function (error, response) {
//       //Email not sent
//       if (error) {
//           res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
//       }
//       //Yay!! Email sent
//       else {
//           res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
//       }
//   });
// });


// ------- Error Handling ------------------------------------------
    // Catch 404 and forward to error handler
    app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
    });

    // Development error handler will print stacktrace.
    if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
        message: err.message,
        error: err
        });
    });
    }

    // Production error handler no stacktraces leaked to user.
    app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
    });
// ------- End of Error Handling ------------------------------------


// Listen for events.
app.listen(3000);
console.log('Express is running on port 3000');


module.exports = app;