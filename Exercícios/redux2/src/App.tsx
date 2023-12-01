import React from 'react';
import Counter from './components/counter';

//Redux é um gerenciador de states que permite você ter states globais
//Store é o global state, geralmente composto de vários pedaços
//Actions, são o que o redux é falado para fazer com os states

//const increment = { type: 'INCREMENT', payload: 1}, o type é sempre uma string, é o nome da action. Payload é opcional, é algum tipo de dado que pode ser passado para a action

//Reducers são responsáveis por atualizar dados com base nas actions.Os reducer não alteram o state diretamente, eles criam uma cópia do state com todas as propriedades e nessa cópia fazer as mudanças, depois o state antigo é substituido pela cópia. Não devemos alterar states diretamente

function App() {
  return (

    <div className="App">
     
      <Counter />

    </div>

  );
}

export default App;
