import compiaLogo from '../assets/compia.png';
import React from "react";
function Home() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Bem-vindo à Loja Virtual COMPIA</h1>
      <p>Confira nossos livros e materiais exclusivos!</p>
      <img
        src= {compiaLogo}
        alt="Logo da loja"
        style={{ marginTop: "20px", width: "400px" }}
      />
      <p>Clique no link acima para Acessar o Site!</p>
    </div>
  );
}

export default Home;

