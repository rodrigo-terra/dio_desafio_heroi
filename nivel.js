// Desafio Classificador de nível de Herói

let qtdXp = 8000
let nome = "Aquiles"

/*
  if (qtdXp < 1001) {
    console.log("O herói de nome " + nome + " está no nível Ferro!")
  } else if (qtdXp < 2001) {
    console.log("O herói de nome " + nome + " está no nível Bronze!")
  } else if (qtdXp < 5001) {
    console.log("O herói de nome " + nome + " está no nível Prata!")
  } else if (qtdXp < 7001) {
    console.log("O herói de nome " + nome + " está no nível Ouro!")
  } else if (qtdXp < 8001) {
    console.log("O herói de nome " + nome + " está no nível Platina!")
  } else if (qtdXp < 9001) {
    console.log("O herói de nome " + nome + " está no nível Ascendente!")
  } else if (qtdXp < 10001) {
    console.log("O herói de nome " + nome + " está no nível Imortal!")
  } else {
    console.log("O herói de nome " + nome + " está no nível Radiante!")
  }
*/

switch (true) {
  case (qtdXp < 1001):
  console.log("O herói de nome " + nome + " está no nível Ferro!")
  break

  case (qtdXp < 2001) :
  console.log("O herói de nome " + nome + " está no nível Bronze!")
  break

  case (qtdXp < 5001) :
  console.log("O herói de nome " + nome + " está no nível Prata!")
  break

  case (qtdXp < 7001) :
  console.log("O herói de nome " + nome + " está no nível Ouro!")
  break

  case (qtdXp < 8001) :
  console.log("O herói de nome " + nome + " está no nível Platina")
  break

  case (qtdXp < 9001) :
  console.log("O herói de nome " + nome + " está no nível Ascendente!")
  break

  case (qtdXp < 10001) :
  console.log("O herói de nome " + nome + " está no nível Imortal!")
  break

  default:
  console.log("O herói de nome " + nome + " está no nível Radiante!")
  break
}