const fs = require('fs');

const content = 'Este é o conteúdo do arquivo "sobre.txt"';

fs.writeFile('sobre.txt', content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Arquivo "sobre.txt" criado com sucesso!');
});
