// Viene fornito un layout di base in cui è presente 
// **una card di esempio** inserita staticamente nell’html. 
// Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e 
// **dovrà quindi essere rimossa dall’html**.
// Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.

// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.
// **Consigli del giorno:**
// Ragioniamo come sempre a step.
// Scriviamo prima la logica in italiano e poi traduciamo in codice.
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.

// creare array oggeti
// aggiungere le informazioni necessari egli


// dove stampare l'array
const output = document.querySelector('.team-card');

// arrayCard
const arrayCard = [
  {
    img:"img/wayne-barnett-founder-ceo.jpg",
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
  }
]

console.log(arrayCard);

// stampo l'array con ciclo for in

for (let i in arrayCard){
  const card = arrayCard[i];
  console.log(card);
  output.innerHTML = 
  `<div class="card-image">
  <img
    src=${card.img}
    alt=${card.nome}
  />
  </div>
  <div class="card-text">
    <h3>${card.nome}</h3>
    <p>${card.ruolo}</p>
  </div>
   
  `;
}
