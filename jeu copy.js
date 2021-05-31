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
    
    attaque(adversaire, bonus = 0) {
      if (this.tour < 3) {
        adversaire.points -= this.rand(51) + bonus
        if (adversaire.points < 0) {
          adversaire.points = 0
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
  
  Joueur.prototype.superAttaque = function(adversaire) {
    this.attaque(adversaire, 10)
  }
  
  let joueur1 = new Joueur('Joueur', '1', 100, 0)
  let joueur2 = new Joueur('Joueur', '2', 100, 0)
  let joueur3 = new Joueur('Joueur', '3', 100, 0)
  
  let partie = new Partie(3, [joueur1, joueur2, joueur3])
  
  //Déroulement de la partie
  for (let tour=0; tour<partie.tour; tour++) {
    joueur1.attaque(joueur3)
    joueur1.superAttaque(joueur2)
    
    joueur2.attaque(joueur1)
    joueur2.superAttaque(joueur3)
    
    joueur3.attaque(joueur2)
    joueur3.superAttaque(joueur1)
  }
  
  joueur1.affichePoints()
  joueur2.affichePoints()
  joueur3.affichePoints()
  
  partie.vainqueur()


  const canvas = document.getElementById('canvas');
  let ctx;
  if (canvas.getContext) {
    ctx = canvas.getContext('2d') ;
    for (let j = 0; j < 8; j++) {
      if (j % 2 === 0) {
        for (let i = 0; i < 8; i++) {
          if (i % 2 === 0) {
          ctx.fillRect(i * 30, j * 30, 30, 30);
          }
        }
      } else {
        for (let i = 0; i < 8; i++) {
          if (i % 2 !== 0) {
          ctx.fillRect(i * 30 , j * 30, 30, 30);
          }
        }
      }
    }
  }

