import { useState } from "react"; 

const TodoForm = () => {
const [value, setValue]

  return <div className="todo-form">
      <h2>Criar Tarefa</h2>
      <form>
        <input type="text" placeholder="Digitar o título" />
        <select>
      <option value="">Selecione uma Categoria</option>
      <option value="Trabalho">Trabalho</option>
      <option value="Pessoal">Pessoal</option>
      <option value="Estudos">Estudos</option>
    </select>
    <button type="submit">Criar Tarefa</button>

      </form>
    </div>
};

export default TodoForm;