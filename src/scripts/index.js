const moviesList = [
  {
    title: "Matrix",
    poster: "./src/img/matrix-poster.jpg",
    genre: "Ficção Científica",
    synopsis: `O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro.`,
  },
  {
    title: "O Poderoso Chefão",
    poster: "./src/img/poderoso-chefao-poster.jpg",
    genre: "Drama",
    synopsis: `Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.`,
  },
  {
    title: "A Origem",
    poster: "./src/img/a-origem-poster.jpg",
    genre: "Ação",
    synopsis: `Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a oportunidade de se redimir ao realizar uma tarefa aparentemente impossível: plantar uma ideia na mente do herdeiro de um império. Para realizar o crime perfeito, ele conta com a ajuda do parceiro Arthur, o discreto Eames e a arquiteta de sonhos Ariadne. Juntos, eles correm para que o inimigo não antecipe seus passos.`,
  },
  {
    title: "Pulp Fiction",
    poster: "./src/img/pulp-fiction-poster.jpg",
    genre: "Crime",
    synopsis: `Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle.`,
  },
  {
    title: "Interestelar",
    poster: "./src/img/interestellar-poster.jpg",
    genre: "Aventura",
    synopsis: `As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.`,
  },
];

function createCard(movie) {

  const { title, poster, genre, synopsis } = movie

  const liCard = document.createElement('li')
  const imgCard = document.createElement('img')
  const divCard = document.createElement('div')
  const h3Card = document.createElement('h3')
  const h4Card = document.createElement('h4')
  const pCard = document.createElement('p')

  liCard.classList.add('movie')
  imgCard.classList.add('movie-poster')
  divCard.classList.add('movie-info')
  h3Card.classList.add('movie-title')
  h4Card.classList.add('movie-genre')
  pCard.classList.add('movie-synopsis')

  imgCard.src = poster
  h3Card.innerText = title
  h4Card.innerHTML = genre
  pCard.innerText = synopsis

  liCard.append(imgCard,divCard)
  divCard.append(h3Card,h4Card,pCard)

  return liCard;
}

function renderCards(list) {
  const ulCard = document.querySelector('.movies-list')
  
  ulCard.innerHTML = ""

  list.forEach(element => {
    const card = createCard(element)

    ulCard.appendChild(card)
  });
}

renderCards(moviesList);
