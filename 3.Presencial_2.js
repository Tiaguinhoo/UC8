//Contagem e Classificação

const quantidadeAlunos = 14;

for (index = 0; index <= quantidadeAlunos; index++) {
    if (index === 0) {
    console.log ('O número é zero');  
    }   else if (index %2 === 0) {
        console.log ('O número', index, 'é par');
        }   else { 
            console.log ('O número', index, 'é impar');
            }
}       