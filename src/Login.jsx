import { Alert, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate, json } from 'react-router-dom';
import Foto from  "./components/img/makeupicon.png";
import Fotos from "./components/img/fundo2.jpg";


/*QUANDO IMPORTA EM BAIXO E CITA A FUNÇÃO AUTOMATICAMENTE APARECE A FUNÇÃO AQUI*/


/* STYLE DO SITE,A PALETA DE CORES COPIADAS DO SITE*/ 

    function Login() {

        document.body.style.backgroundImage = "url("+ Fotos +")";
    const[ email, setEmail] = useState ("");
    const[ senha, setSenha ] = useState ("");
    const[ lembrar, setLembrar ] = useState (false);
    const[ login, setLogin ] = useState (false);
    const[ erro, setErro ] = useState (false);

    const navigate = useNavigate();

 /* DANDO UM VALOR PARA O  COMPOMENTE, QUER DIZER QUE O CAMPO DE EMAIL FICARA VAZIO, POR EXEMPLO*/ 


    useEffect( () => {
       if(login){
            localStorage.setItem("usuario" , JSON.stringify({email: email}));
            setEmail("");
            setSenha("");
            navigate("/");
       }
    }, [ login ] );
    /* verifica se o email é verdadeiro e te redireciona para outra pagina*/ 

    function Autenticar( evento)
    {
        evento.preventDefault();

        fetch( process.env.REACT_APP_BACKEND + "login", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: email,
                    senha: senha
                }
            )
        })
        .then( (resposta) => resposta.json() ) 
        .then( (json) => {
            if(json.user) {
                setLogin(true);
            }
            else{
                setErro(true);
            }
        } )
        .catch( (erro) => {setErro( true ) } ) 
    }
    /* verifica se tem erro, avisa pelo alert e se nao tiver manda pro back ange e redireciona para a outra pagina*/ 

  return (
    <>
    <Container component="section" maxWidth="xs">
        <Box sx={{
            mt: 10,
            backgroundColor: "rgba(250, 250, 250, 0.22);",
            padding: "50px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft:"-424px",
            width:"25rem",
            height:"31rem",

            }}>

            

                 
            <Typography component="h1" variant='h5'>Fazer Login</Typography>
            <br></br>
            <img src={Foto} height="150"></img>
            <br></br>

            {erro && ( <Alert  severity="warning">Revise seus dados e tente novamente!</Alert> )}
            <Box component="form" onSubmit={Autenticar}>
                
                <TextField 
                 label="Endereço de Email"
                 variant='filled' 
                 type="email"
                 margin="normal" 
                 value={email}
                 onChange={ (e) => setEmail ( e.target.value)}
                 fullWidth 
                 {...erro && ("error")}
                 />
                <TextField
                 label="Senha"
                  variant='filled' 
                  type="password" 
                  margin="normal"
                   fullWidth 
                   value={senha}
                   onChange={ (e) => setSenha( e.target.value)}
                   />
                <FormControlLabel
                    control={ <Checkbox value={lembrar} name="lembrar" onChange={(e) => setLembrar ( !lembrar)}/>}
                    label="Lembrar-me"
                />
                <Button type="submit" variant="contained" fullWidth sx={ { mt: 2, md: 2}  } >Continuar</Button>            
                <Grid container>
                    
                    <Grid item >                      
                    <Link href={"/Cadastro"} sx={{color:'black', textDecoration:'none'}}>Cadastrar</Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Container>
    </>
    )
}

export default Login