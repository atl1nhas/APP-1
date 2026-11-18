import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


// const usuarios = [
//   { id: 1, nome: "Atlas", email: "atlas@email.com" },
//   { id: 2, nome: "Elise", email: "elise@email.com" },
//   { id: 3, nome: "Oona", email: "oona@email.com" },
// ];

// function ListaUsuarios() {
//   return (
//     <ul>
//       {usuarios.map((usuario) => (
//         <li key={usuario.id}>
//           {usuario.nome} - {usuario.email}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ListaUsuarios;

// --------------------------------------------------------------------------------

// Versão A: variável comum — a tela não reage a mudanças
// const usuarios = [...];
// Versão B: estado — a tela re-renderiza quando setUsuarios é chamado
// const [usuarios, setUsuarios] = useState([...]);
// explicação: O useState atualiza os dados e faz a tela atualizar também.

// --------------------------------------------------------------------------------

// function ListaDeNomes() {
//   const [nomes, setNomes] = useState(["Atlas", "Elise"]);
//   const [input, setInput] = useState("");

//   function adicionar() {
//     setNomes([...nomes, input]);
//     setInput("");
//   }

//   return (
//     <div>
//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       <button onClick={adicionar}>Adicionar</button>

//       <ul>
//         {nomes.map((nome, index) => (
//           <li key={index}>{nome}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListaDeNomes;

// --------------------------------------------------------------------------------

// function ListaTarefas() {
//   const [tarefas, setTarefas] = useState([]);

//   function adicionarTarefa() {
//     const novaTarefa = {
//       id: Date.now(),
//       texto: "Estudar React"
//     };

//     setTarefas([...tarefas, novaTarefa]);
//   }

//   return (
//     <div>
//       <h2>Lista de Tarefas</h2>

//       <button onClick={adicionarTarefa}>
//         Adicionar tarefa
//       </button>

//       {tarefas.map((tarefa) => (
//         <p key={tarefa.id}>
//           {tarefa.texto} - ID: {tarefa.id}
//         </p>
//       ))}
//     </div>
//   );
// }

// export default ListaTarefas;

// --------------------------------------------------------------------------------

// function ListaTarefas() {
//   const [tarefas, setTarefas] = useState([]);
//   const [input, setInput] = useState("");

//   function adicionarTarefa() {
//     if (!input.trim()) return;

//     const novaTarefa = {
//       id: Date.now(),
//       texto: input
//     };

//     setTarefas([...tarefas, novaTarefa]);
//     setInput("");
//   }

//   return (
//     <div>
//       <h2>Lista de Tarefas</h2>

//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Digite uma tarefa"
//       />

//       <button onClick={adicionarTarefa}>
//         Adicionar
//       </button>

//       <ul>
//         {tarefas.map((tarefa) => (
//           <li key={tarefa.id}>
//             {tarefa.texto}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListaTarefas;