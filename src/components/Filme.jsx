import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Link,Button } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'

function Filme(props) {
  return (
    <Card sx={{maxWidth:945,width:"33%", color:"purple" ,fontFamily:"cursive", fontSize:"200%",height:"300px", }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={props.imagem}
            alt={props.titulo}
             />
            <CardContent sx={{ }}>
           <Typography variant="h5" component="div">
            {props.titulo}
           </Typography>
           <Typography variant="body2" color="text.secondary">
            {props.descricao}
           </Typography>
           <Grid container>
            <Grid item xs={2}>
                <span>{props.categoria}</span>
            </Grid>
            <Grid item xs={2}>
                <span> {props.ano}</span>
            </Grid>
           < Grid item xs >
            <span>{props.duracao}</span>
           </Grid>
           </Grid>
            </CardContent>
           
        </CardActionArea>
        <Grid container  > 
        <Grid item xs={6} marginTop="-10px" marginLeft="60px" color={purple}>
        <Button onClick={props.excluir} >✗​</Button>
        </Grid>

        <Grid item xs={6} marginLeft="10px" maxleft="905px" marginTop="-40px" color={purple}>
        <Link href={"Edicao/"+ props.id }>✐​</Link>
        </Grid>
        </Grid>
        
    </Card>
  )
}

export default Filme