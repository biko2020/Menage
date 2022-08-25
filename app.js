var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// nodemailer to sent email
var nodemailer = require("nodemailer");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// --- block send WhatsApp Message

module.exports = {
  sendToWhatsApp: require("./public/javascripts/sendWhatsappMessage.js"),
};

// --- fin block ----------------

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

//- -- sent e-amil ------
app.post("/devis", (req, res) => {
  console.log(req.body);

  // ------ pour le compte gmail
  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'brahimlion38@gmail.com',
  //     pass: ''
  //   }
  // })

  const transporter = nodemailer.createTransport({
    host: "smtp.3rosesmenage.net",
    Port: 465,
    auth: {
      user: "devis@3rosesmenage.net",
      pass: "#OpenDevis2023!",
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: req.body.email,
    to: "devis@3rosesmenage.net",
    subject: `Demande de devis: ${req.body.name}`,
    text: `${req.body.message}
    
    ------------ Détails du Devis -------------:
    
    Nom du client: ${req.body.name}
    Email Adress: ${req.body.email}
    Téléphone: ${req.body.telephone} 
    Code Postal: ${req.body.codepostal}
    Service demandé: ${req.body.services}
    Moment de Contacter: ${req.body.moment}
    Fréquence du Nettoyage: ${req.body.type}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error..!");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
});
//- -- end *****sent e-amil **** ------

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
