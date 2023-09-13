import { Avatar, Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import filmes from "./filmes";
import Filme from "./components/Filme";
import Filmes from "./filmes";

function App(props) {

  const [ filmes, setFilmes ] = useState();
  const [ erro, setErro ] = useState();

  useEffect ( ( ) => {
    fetch( process.env.REACT_APP_BACKEND + "filmes", {
      method: "GET",
      headers:{
          'Content-Type': 'application/json'
      },
  })
  .then( (resposta) => resposta.json() ) 
  .then( (json) => { setFilmes (json)} )
  .catch( (erro) => {setErro( true ) } ) 

  console.log( filmes );
  }, [])
    
  function Excluir(evento, id){
    evento.preventDefault();
    fetch( process.env.REACT_APP_BACKEND + "filmes", {
      method: "DELETE",
      headers:{
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(
          {
              id: id
          }
      )
  })
  .then( (resposta) => resposta.json() ) 
  .then( (json) => {
    const novaLista = filmes.filter((filme) => filme._id !== id );
     setFilmes(novaLista);
  } )
  .catch( (erro) => {setErro( true ) } ) 
  }

  return (
     <>
      <h1>Maquiagens</h1>
      <Container
      sx={{
        display:"flex",
        flexFlow:"row",
        flexWrap: "wrap",
        gap:"2rem",
      }}
      >
        {filmes && (
          filmes.map((filmes, index)=>(
        
          <Filmes
            imagem={filmes.imagem}
            titulo={filmes.titulo}
            descricao={filmes.descricao}
            categoria={filmes.categoria}
            ano={filmes.ano}
            duracao={filmes.duracao}
            excluir={ (e) => Excluir (e, filmes._id)}
            id={filmes._id}
            />
        ))
      )}
    </Container>

     </> 
  );
}
export default App;
