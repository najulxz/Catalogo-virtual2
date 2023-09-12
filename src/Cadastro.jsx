import { Alert, Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from '@mui/material'
import React,{ useEffect, useState }  from 'react'



function Cadastro() {

    const[ nome, setNome] = useState ("");
    const[ email, setEmail ] = useState ("");
    const[ telefone, setTelefone ] = useState ("");
    const[ senha, setSenha ] = useState ("");
    const[ cpf, setCpf ] = useState ("");
    const[ erro, setErro ] = useState (false);
    const[ lembrar, setLembrar ] = useState (false);
    const[ cadastro, setCadastro ] = useState (false);

    function Cadastrar(evento){
            evento.preventDefault();
            fetch(  process.env.REACT_APP_BACKEND + "users", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    nome: nome,
                    cpf: cpf,
                    telefone: telefone,
                    email: email,
                    senha: senha
                }
            )
        })
        .then( (resposta) => resposta.json() ) 
        .then( (json) => {
            if(json.cpf) {
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
    useEffect(() => {
        setNome("");
        setEmail("");
        setCpf("");
        setSenha("");
        setTelefone("");
       // setCadastro(false);


    }, [ Cadastro]);
    

  return (
    <Container component="section" maxWidth="sm">
        <Box sx={{
            mt: 10,
            backgroundColor: "pink",
            padding: "50px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
            }}>
            <Typography component="h1" variant='h5'>Cadastro</Typography>

            {erro && (<Alert severity="warning" sx={{ mt: 2, mb: 2}}>Desculpe, tente novamente</Alert>)}
            {cadastro && (<Alert severity="success" sx={{ mt: 2, mb: 2}}>obrigado por se cadastrar</Alert>)}


            <Box component="form" onSubmit={Cadastrar}>
            <TextField
            label="Nome"
            variant='filled' 
            type="nome"
            margin="normal" 
            value={nome}
            onChange={ (e) => setNome ( e.target.value)}
            fullWidth 
            />
           <TextField
           label="Email"
           variant='filled' 
           type="email"
           margin="normal" 
           value={email}
           onChange={ (e) => setEmail ( e.target.value)}
           fullWidth 
           />
           <TextField
           label="Telefone"
           variant='filled' 
           type="telefone"
           margin="normal" 
           value={telefone}
           onChange={ (e) => setTelefone ( e.target.value)}
           fullWidth 
           />
           <TextField
           label="Senha"
           variant='filled' 
           type="senha" 
           margin="normal"
            fullWidth 
            value={senha}
            onChange={ (e) => setSenha( e.target.value)}
           />
           <TextField
           label="Cpf"
           variant='filled' 
           type="text" 
           margin="normal"
            fullWidth 
            value={cpf}
            onChange={ (e) => setCpf( e.target.value)}
           />
               <FormControlLabel
            control={ <Checkbox value={lembrar} name="lembrar" onChange={(e) => setLembrar ( !lembrar)}/>}
             label="Concordo com todos os termos e condições"
            />
            <Button type="submit" variant="contained" fullWidth sx={ { mt: 2, md: 2} } >Cadastrar</Button>
            </Box>
            </Box>
    </Container>
    )
}
 
export default Cadastro