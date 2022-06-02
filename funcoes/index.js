// Oque é uma função ?
// Uma função é um trecho de codigo que pode ou não ser executado
// Ela deve serguir um pricipio do SOLID
// O nome da função deve simbolizar uma ação

function fazerCafe() {
  const comprouCarne = true;

  fazerChurrasco(comprouCarne);
}
function fazerChurrasco(comprouCarne) {
  if (comprouCarne) {
    return 'Fazendo churracso';
  }
}

const isDay = false;

if (isDay) {
  //Executar uma função  ou invocar a função
  fazerCafe();
}

// Outras formas de declarar uma função

const fazerSuco = () => {};
const callBack = () => {};

// Parametros de função

// const lavarRoupa = (sabao) => {
//   if (sabao) {
//     return 'Roupa limpa';
//   } else {
//     return 'Roupa suja';
//   }
// };

// const sabao = true;

// lavarRoupa(sabao); // 'Roupa limpa'
// lavarRoupa(false); // 'Roupa suja'

// Multiplos parametros

// const lavarRoupa = (sabao, agua, detergente, maquina) => {
//   if (sabao && agua && detergente && maquina) {
//     return 'Roupa limpa';
//   } else {
//     return 'Roupa suja';
//   }
// };

// const sabao = true;
// const agua = true;
// const detergente = true;
// const maquina = true;

// lavarRoupa(sabao, agua, detergente, maquina);

// Multiplos parametros nomeados

const lavarRoupa = ({ sabao, agua, detergente, maquina }) => {
  if (sabao && agua && detergente && maquina) {
    return 'Roupa limpa';
  } else {
    return 'Roupa suja';
  }
};

const sabao = true;
const agua = true;
const detergente = true;
const maquina = true;

const params = { agua, detergente, maquina, sabao };

lavarRoupa(params);
