import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react';
import { useState, useEffect } from 'react';
import MenuResponsivo from './components/MenuResponsivo';


    function Filmes()   {

    const[ cor, setCor] = useState ("");
    const[ descricao, setDescricao ] = useState ("");
    const[ marca, setMarca ] = useState ("");
    const[ validade, setValidade ] = useState ("");
    const[ categoria, setCategoria ] = useState ("");
    const[ imagem, setImagem ] = useState ("");
    const[ cadastro, setCadastro ] = useState(false);
    const[ erro, setErro ] = useState(false);


    function Film(evento){
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "filmes", {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                cor: cor,
                descricao: descricao,
                marca: marca,
                validade: validade,
                categoria: categoria,
                imagem: imagem,
            }
        )
    })
    .then( (resposta) => resposta.json() ) 
        .then( (json) => {
            if(json._id) {
                setCadastro(true);
                setErro(false);
            }
            else{
                setErro(true);
                setCadastro(false);
            }
        } )
        .catch( (erro) => {setErro( true ) } ) 
    
}
    useEffect (() => {
        setCor("");
        setDescricao("");
        setMarca("");
        setValidade("");
        setCategoria("");
        setImagem("");
    } , [cadastro]);
   



  
  return (
    <>
    <MenuResponsivo/>
    <Container component="section" maxWidth="xs">

        
        <Box sx={{
             mt: 10,
             backgroundColor: "pink",
             padding: "50px",
             borderRadius: "10px",
             display: "flex",
             flexDirection: "column",
             alignItems: "center"
        }}>
            <Typography component="h1" variant='h5'>Maquiagens</Typography>

            {erro && (<Alert severity="warning" sx={{ mt: 2, mb: 2}}>Desculpe, tente novamente</Alert>)}
            {cadastro && (<Alert severity="success" sx={{ mt: 2, mb: 2}}>obrigado por se cadastrar</Alert>)}


            <Box component="form" onSubmit={Film}> 
            <TextField 
                 label="Cor"
                 variant='filled' 
                 type="cor"
                 margin="normal" 
                 value={cor}
                 onChange={ (e) => setCor( e.target.value)}
                 fullWidth 
                 />
                 <TextField
                 label="Descricao"
                 variant='filled' 
                 type="descricao"
                 margin="normal" 
                 value={descricao}
                 onChange={ (e) => setDescricao ( e.target.value)}
                 fullWidth 
                 />
                  <TextField 
                 label="Marca"
                 variant='filled' 
                 type="marca"
                 margin="normal" 
                 value={marca}
                 onChange={ (e) => setMarca ( e.target.value)}
                 fullWidth 
                 />
                  <TextField 
                 label="Validade"
                 variant='filled' 
                 type="validade"
                 margin="normal" 
                 value={validade}
                 onChange={ (e) => setValidade ( e.target.value)}
                 fullWidth 
                 />
                  <TextField 
                 label="Categoria"
                 variant='filled' 
                 type="categoria"
                 margin="normal" 
                 value={categoria}
                 onChange={ (e) => setCategoria ( e.target.value)}
                 fullWidth 
                 />
                  <TextField 
                 label="Insira a url da imagem"
                 variant='filled' 
                 type="imagem"
                 margin="normal" 
                 value={imagem}
                 onChange={ (e) => setImagem ( e.target.value)}
                 fullWidth 
                 />
                 <Button type="submit" variant="contained" fullWidth sx={ { mt: 2, md: 2} } >Procurar</Button>
            </Box>
        </Box>
    </Container>
    </>
  )
}
export default Filmes;
