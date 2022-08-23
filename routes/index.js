var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  //- fichier data
  const data = {
    title: "3Roses Ménage",
    PROPOS:
      "Nous apportons une approche personnelle et efficace chez chacun de nos clients. N’hésitez pas à nous contacter pour obtenir une estimation pour des besoins résidentiaux, commerciaux, institutionnels, gouvernementaux, industriels et en nettoyage après construction.",
    DERNIERNETTOYAGE:
      "Dans notre portefeuille, vous pouvez parcourir les derniers travaux de néttoyage effectué dans différents type d'etablissement et à des endroits différentes. Nos professionnels d'entretien de ménage qualifiés sont toujours prêts à concevoir quelque chose de spéciale pour vous, même s'il s'agit d'une operation de nettoyage bien spécifique.",
    EXPERIENCES:
      "Depuis 11 ans, nous avons travaillé fort pour créer de bonnes relations, durables avec des familles comme la vôtre..",
    TEMOIGNAGE:
      "Cette entreprise m'a été vivement recommandée. La sensibilité, les connaissances, la vision et l'exécution ultime que cette entreprise a apportées à la table étaient formidables. Merci pour l'intérieur incroyable!",
  };
  res.render("index", data);
  //next ();
});
/* Get Services page */
router.get("/services", function (req, res, next) {
  res.render("pages/services", { title: "services" });
});

/* Get Eco-Produits page */
router.get("/ecoproduits", function (req, res, next) {
  res.render("pages/ecoproduits", { title: "eco-produits" });
});

/* Get Tarifs page */
router.get("/tarifs", function (req, res, next) {
  res.render("pages/tarifs", { title: "tarifs" });
});

/* GET aprpos page. */
router.get("/apropos", function (req, res, next) {
  res.render("pages/apropos", { title: "apropos" });
  //next();
});

/* get blog page */
router.get("/blog", function (req, res, next) {
  res.render("pages/blog", { title: "blog" });
});

/* get FAQ page */
router.get("/faq", function (req, res, next) {
  res.render("pages/faq", { title: "F.A.Q" });
});

module.exports = router;
