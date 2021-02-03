/*
Utilisation de ELSE IF et de son alternative SWITCH
en cas de conditions multiples.

Pour l'exemple, voici un petit script qui donne à l'utilisateur
le résultat du mélange de 2 couleurs primaires.

partant du principe que :
bleu + rouge = violet
jaune + rouge = orange
bleu + jaune = vert
*/

// Nous commmençons par déclarer 2 variables d'entrée (color1, color2)
// et 1 tableau result contenant les résultats possibles
var color1;
var color2;
var result = ['violet', 'orange', 'vert'];

color1 = window.prompt('Choisissez une couleur primaire (rouge, bleu, ou jaune)');
color2 = window.prompt('Choisissez une couleur de mélange (rouge, bleu, ou jaune)');

// si on mélange les couleurs bleu et rouge
if ((color1 == 'rouge' && color2 == 'bleu') || (color1 == 'bleu' && color2 == 'rouge')) {
  alert('En mélangeant du rouge et du bleu, vous obtenez du ' + result[0]);
}
// sinon si on mélange les couleurs rouge et jaune
else if ((color1 == 'rouge' && color2 == 'jaune') || (color1 == 'jaune' && color2 == 'rouge')) {
  alert('En mélangeant du rouge et du jaune, vous obtenez du ' + result[1]);
}
// sinon si on mélange les couleur bleu et jaune
else if ((color1 == 'bleu' && color2 == 'jaune') || (color1 == 'jaune' && color2 == 'bleu')) {
  alert('En mélangeant du jaune et du bleu, vous obtenez du ' + result[2]);
}
// sinon
else {
  alert('vous n\'avez pas renseigné une couleur acceptée');
}
