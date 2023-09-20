import { AppBar, Avatar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar, Tooltip, Typography} from "@mui/material"
import { useState } from "react";
import Foto from "./img/logo.jpg";

 
const pages = ['Produtos', 'Cadastro', 'Login'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function MenuResponsivo() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };




  return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="/"
                      sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                >
                  
                    Mari Maria Makeup
                   
                </Typography >

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                     <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                     >
                        </IconButton>   

                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                    >
                      {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                      ))}


                    </Menu>
                </Box>
               
                <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
                >
                  Logo               
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
               
              <Button
               
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              > 
                <Link href={"/Cadastro"} sx={{color:'black', textDecoration:'none'}}>Cadastrar</Link>

              </Button>
          
              <Button
               
               onClick={handleCloseNavMenu}
               sx={{ my: 2, color: 'white', display: 'block' }}
             > 
               <Link href={"/Login"} sx={{color:'black', textDecoration:'none'}}>Logar</Link>

             </Button>
             <Button
               
               onClick={handleCloseNavMenu}
               sx={{ my: 2, color: 'white', display: 'block' }}
             > 
               <Link href={"/Maquiagem"} sx={{color:'black', textDecoration:'none'}}>Produtos</Link>

             </Button>
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
              
              <img src={Foto} height="70"></img>
            </Tooltip>
            <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            >
               
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"></Typography>
                </MenuItem>
            
                    </Menu>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default MenuResponsivo;