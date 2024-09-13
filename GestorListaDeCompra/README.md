# Teste e Treino de Commit 
Testando comandos do git:

Lista de comandos em ordem:

# 1 - Clonar o repositório remoto
git clone https://github.com/usuario/repositorio.git
Trazer tudo o que está no respositório do github para o computador

# 2 - Entrar no diretório do repositório
cd repositorio
Acessar a pasta nova que foi criada quando foi feito o clone 

# 3 - Sincronizar repositório remoto com repositório local
git fetch origin

# 4 - Adicionar as alterações ao índice
git add .
O 'add .' seleciona todos os arquivos do repositório local ("pasta do computador") e os prepara para fazer envio

# 5 - Commit as alterações
git commit -m "Mensagem do commit" - Coloque sempre mensagens bem descritivas sobre suas alterações 
commit = Um commit no Git é uma operação que salva as alterações no repositório local. 

# 6 - Enviar as alterações para o repositório remoto
git push 

