import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {

  // Cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Anima o número de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Preenche cada animal no Dom
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Puxa os animais através de um arquivo json e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // Fetch e espera resposta e transforma em Json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Após a transformação de Json, ativa as funções para preencher e animar os números
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumeros();

    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
