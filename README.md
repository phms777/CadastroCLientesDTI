# CadastroCLientesDTI
Projeto básico de uma CRUD implemetado como parte do processo seletivo para o cargo de Analista Desenvolvedor da DTI
OBS: 
1) seguindo as diretivas do próprio teste, não houve uma preocupação substancial com robustez no código. 
2) para a persistência dos dados foi adotada a técnica de salvar as informações em arquivo json, simulando assim um acesso a algum SGDB.

Tela inicial (lista de clientes já cadastrados e os respectivos botões de acesso às funcionalidades de adição, detalhamento (e edição) e deleção de clientes da base de dados)
![image](https://user-images.githubusercontent.com/48165096/116767877-412fa080-aa09-11eb-9850-1d73cb2747f6.png)

Tela de detalhamento com os dados dos clientes
![image](https://user-images.githubusercontent.com/48165096/116767948-a7b4be80-aa09-11eb-8012-8f497bd2bcaf.png)

Tela de edição dos dados dos clientes
![image](https://user-images.githubusercontent.com/48165096/116767960-c2873300-aa09-11eb-91af-73d456feaa21.png)

Tela de adição de um novo cliente à base de dados
![image](https://user-images.githubusercontent.com/48165096/116767997-f9f5df80-aa09-11eb-8a3c-abf49ec69f87.png)

Tela de clientes com um novo cliente cadastrado
![image](https://user-images.githubusercontent.com/48165096/116768015-185bdb00-aa0a-11eb-88ac-00976c8a9936.png)


O projeto segue a seguinte estrutura de pastas:

CadastroClienteDTI
  back-end 
    Controllers //onde se encontra os endpoints da API
    DataBase // rotinas de arquivamento e leitura das informações em arquivo json
    IServices //Interface do serviço 
    Models // Modelo da entidade cliente
    Services // Serviço com os métodos principais da CRUD
    
  front-end
    src
      app
        criar-clientes //componente de criação de clientes
        editar-clientes //componente de edição dos dados dos clientes
        detalhar-clientes //componente de detalhamento dos dados dos clientes
        lista-cliente // componente principal com a listagem do cliente
        
      Models // Modelo da entidade cliente
      Services // Serviço com os métodos de acesso http para o consumo da API
      
      
        
