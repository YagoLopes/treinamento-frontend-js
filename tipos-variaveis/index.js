// Padroes de variaveis

var PascalCase = '';
var cammelCase = '';
var snake_case = '';

// Tipos de primitivos

// Boolean(true | false);
// Number(floate | Integer);
// String(char | varChar);
// Null
// Undefined

//Booleanos

var check = true;
var isDia = true;
var isNoite = false;

// Numeros

var idade = 22;
var salario = 3500.75;
var centavos = 0.1;
var phone = 349988004385;

// Textos e palavras

var nome = 'Yago';
var phone = '(34) 9 98800-4385';
var texto = 'Olá Eu sou o <b class="troca-b">Matheus</b> e tenho 26 anos';

//  Concatenação de strings

var texto2 = `Olá Eu sou o <b class="troca-b">Matheus</b> e tenho ${idade} anos`;
var texto3 =
  'Olá Eu sou o <b class="troca-b">Matheus</b> e tenho' + idade + 'anos';
var texto3 = 'Olá Eu sou o <b class="troca-b">Matheus</b> e tenho' + idade;

'a' + 'b';
('ab');

'a' + 2;
('a2');

//  Não existe ou inexistente

var sexo = undefined;
var sexo = null;

// Operadores Boolean

Boolean(''); // false
Boolean(0); // false
Boolean('abacaxi'); // true
!!''; // false
!!'abacaxi'; // true
!false; // true
!!true; // true

check.valueOf(); // true

// Operadores Number

Number(''); // 0
Number('1'); // 1
Number('a'); // NaN

parseInt('1'); // 1
parseFloat('1.5'); // 1.5

// Operadores String

String(1); //'1'
String(0); // '0'
String('a'); // 'a'
String(null);
String(undefined);

var teste = 0;
teste.toString(); // '0'

// Tipos de variaveis

var teste = ''; // Aloca um espaço mutavel na memoria do computador
let teste2 = ''; // Aloca um espaço mutavel na memoria do computador
const teste3 = ''; // Aloca um espaço não mutavel na memoria do computador

// Quando eu devo usar cada um ?

// - Usar o cont sempre kkkk
// - Usar o let quando não der pra usar o const
