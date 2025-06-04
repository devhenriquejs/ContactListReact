# 📚 Lista de Contatos - React: Gerenciador de Contatos Moderno

Bem-vindo ao Lista de Contatos - React, um sistema robusto e moderno para gerenciar sua lista de contatos. Desenvolvido com as melhores práticas de React e gerenciamento de estado, este projeto serve como uma demonstração das minhas habilidades em desenvolvimento front-end, focando em usabilidade, performance e manutenibilidade.

**Live Demo:** [https://contact-list-react-ten.vercel.app/](https://contact-list-react-ten.vercel.app/)

## ✨ Funcionalidades

* **Adição de Contatos:** Formulário intuitivo para adicionar novos contatos com validação de dados (nome, e-mail, telefone).
* **Edição de Contatos:** Edite informações de contatos existentes diretamente na lista.
* **Remoção de Contatos:** Exclua contatos da lista com um clique.
* **Persistência de Dados:** Os contatos são salvos automaticamente no `localStorage` do navegador, garantindo que suas informações não sejam perdidas ao recarregar a página.
* **Pesquisa Dinâmica:** Filtre a lista de contatos em tempo real por nome.
* **Notificações Toast:** Feedback visual amigável para ações de adicionar, editar e remover contatos.
* **Experiência do Usuário (UX):**
    * **Loading Skeleton:** Indicadores de carregamento que melhoram a percepção de performance.
    * **Animações Suaves:** Transições e animações com Framer Motion para uma interface mais dinâmica.
    * **Modais Acessíveis:** Utilização de componentes Radix UI para modais e toasts acessíveis e semânticos.
* **Testes Unitários:** Cobertura de testes para a lógica central de gerenciamento de contatos com Jest e React Testing Library.
* Modal de adição de novo contato com validação em tempo real.
* Exemplo de edição de um contato existente.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com um stack moderno e robusto:

* **React 19:** Biblioteca JavaScript para construção de interfaces de usuário.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática, melhorando a manutenibilidade e escalabilidade do código.
* **Redux Toolkit:** A forma oficial e recomendada para escrever lógica Redux, simplificando o gerenciamento de estado global.
    * **Redux Persist:** (Implementado manualmente via `localStorage` em `index.ts` para simplificação e controle total.)
* **Styled Components:** Biblioteca para estilização de componentes React com CSS-in-JS, proporcionando CSS escopado e dinâmico.
* **React Hook Form:** Biblioteca para construção de formulários com foco em performance e simplicidade, integrando validação de forma eficiente.
* **Zod:** Biblioteca de declaração e validação de schemas, utilizada para garantir a integridade dos dados dos formulários.
* **Framer Motion:** Biblioteca de animação para React, usada para criar transições e interações fluidas na interface.
* **Radix UI:** Primitivos de UI acessíveis e sem estilo, utilizados para construir componentes como Modais (Dialog) e Toasts, garantindo acessibilidade e customização.
* **Lucide React:** Coleção de ícones SVG leves e personalizáveis.
* **React Hot Toast:** Uma biblioteca simples e elegante para exibir notificações toast.
* **Jest & React Testing Library:** Ferramentas para testes unitários e de integração, garantindo a qualidade e o comportamento esperado das funcionalidades.
* **ESLint & Prettier:** Ferramentas para padronização de código e garantia de boas práticas.

## Primeiros Passos com Create React App

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

### Scripts Disponíveis

No diretório do projeto, você pode executar:

#### `npm start`

Executa o aplicativo em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições.
Você também verá quaisquer erros de lint no console.

#### `npm test`

Inicia o executor de testes no modo interativo de observação.
Consulte a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para obter mais informações.

#### `npm run build`

Compila o aplicativo para produção na pasta `build`.
Ele agrupa corretamente o React em modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem os hashes.
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações.

#### `npm run lint`

Executa o ESLint para verificar a qualidade do código e problemas de estilo, garantindo consistência e aderência às melhores práticas.

#### `npm run format`

Executa o Prettier para formatar automaticamente a base de código, mantendo um estilo de código consistente em todo o projeto.

#### `npm run eject`

**Atenção: esta é uma operação sem volta. Depois de `eject`ar, não há como voltar atrás!**

Se você não estiver satisfeito com as ferramentas de compilação e as escolhas de configuração, pode `eject`ar a qualquer momento. Este comando removerá a única dependência de compilação do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc.) diretamente para o seu projeto, para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas apontarão para os scripts copiados para que você possa ajustá-los. A partir deste ponto, você está por conta própria.

Você não precisa usar `eject` nunca. O conjunto de recursos selecionados é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estivesse pronto para isso.

## Saiba Mais

Você pode aprender mais na [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulte a [documentação do React](https://reactjs.org/).

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.