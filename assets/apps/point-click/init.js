var t = new Turtle(document.getElementById('turtle'));
var app  = new MirobotApp(function(mirobot){
  t.setMirobot(mirobot);
}, {
  l10n: true,
  languages: baseLanguages
});