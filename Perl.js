const { exec } = require('child_process');

const comandoPerl = 'perl caminho_do_script.pl argumentos';

exec(comandoPerl, (error, stdout, stderr) => {
  if (error) {
    console.error('Erro ao executar o script Perl:', error);
    return;
  }

  console.log('Saída do script Perl:', stdout);

  console.error('Erros do script Perl:', stderr);
});
