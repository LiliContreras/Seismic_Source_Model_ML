let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Lilibeth Contreras Alvarado, Leonardo Ramírez Guzmán')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  