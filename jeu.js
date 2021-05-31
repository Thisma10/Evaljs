class Partie {
  constructor(tour, joueurs) {
    this.tour = tour
    this.joueurs = joueurs
    this.joueurVainqueur = null
  }

  vainqueur() {
    var pts = 0
    this.joueurs.forEach(joueur => {
      this.joueurVainqueur = joueur.points > pts ? joueur : this.joueurVainqueur
      pts = joueur.points
    })

    if (this.joueurVainqueur === null) {
      console.log('Oups personne n\'a gagné !')
      return;
    }
    
    console.log(`${this.joueurVainqueur.identite()} gagne la partie avec ${this.joueurVainqueur.points} points`)
  }
}

class Joueur {
  constructor(nom, prenom, points, tour) {
    this.nom = nom
    this.prenom = prenom
    this.points = 100
    this.tour = 0
  }
  
  rand(nb) {
    return Math.floor(Math.random() * Math.floor(nb));
  }
  
  de(){
    valeurde = rand
    if (valeurde = 1) {
      tour = 2
      adversaire.affichePoints()
      ++this.tour
    }
  }

  identite() {
    return `${this.nom} ${this.prenom}`
  }
  
  affichePoints() {
    console.log(`${this.identite()} possède ${this.points} points`)
  }
  
}

let joueur1 = new Joueur('Joueur', '1', 0, 0)
let joueur2 = new Joueur('Joueur', '2', 0, 0)

let partie = new Partie(2, [joueur1, joueur2])

//Déroulement de la partie
for (let tour=0; points<100; ) {
  joueur1.de
  
  joueur2.de
 
}

joueur1.affichePoints()
joueur2.affichePoints()

partie.vainqueur()

var newgame = document.getElementById('newgame');

function evenement() {
  alert('Vous avez cliqué sur le bouton')
}

button.addEventListener('click', evenement)

const rolldice = document.getElementById('rolldice');

rolldice.addEventListener('click', event => {
  alert('Vous avez cliqué sur le bouton')
})


var hold = document.getElementById('hold');

function evenement() {
  alert('Vous avez cliqué sur le bouton')
}

button.addEventListener('click', evenement)

/* a utilisé pour faire les if des lancer de dé
<div>
    <button id='handler'>Event</button>
</div>
<div id='stringText'>
    <h4>Some Description</h4>
    <p>
        Some more information
    </p>
</div>

<script>
window.onload = function(){
 document.getElementById("handler").addEventListener("click", display, true);
};
   
    function display() {

        if (document.getElementById("stringText").style.display === "block") {
            document.getElementById("stringText").style.display = "none";
        } else {
            document.getElementById("stringText").style.display = "block";
        }

    };

</script>
*/

/* a utiliser pour les dé
var btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
*/