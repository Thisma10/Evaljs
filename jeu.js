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
      else {

      }
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
for (let tour=0; points<100) {
  joueur1.de
  
  joueur2.de
 
}

joueur1.affichePoints()
joueur2.affichePoints()

partie.vainqueur()

var button = document.getElementById('newgame');

function evenement() {
  alert('Vous avez cliqué sur le bouton')
}

button.addEventListener('click', evenement)

var button = document.getElementById('rolldice');

function evenement() {
  alert('Vous avez cliqué sur le bouton')
}

button.addEventListener('click', evenement)

var button = document.getElementById('hold');

function evenement() {
  alert('Vous avez cliqué sur le bouton')
}

button.addEventListener('click', evenement)
