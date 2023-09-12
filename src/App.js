import { Avatar, Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import Filme from "./components/Filme";

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
    
  return (
     <>
      <h1>Filmes</h1>
      <Container
      sx={{
        display:"flex",
        flexFlow:"row",
        flexWrap: "wrap",
        gap:"2rem",
      }}
      >
        {filmes && (
          filmes.map((filme, index)=>(
        
          <Filme
            imagem={filme.imagem}
            titulo={filme.titulo}
            descricao={filme.descricao}
            categoria={filme.categoria}
            ano={filme.ano}
            duracao={filme.duracao}
            />
        ))
      )}
    </Container>

     </> 
  );
}
export default App;
