import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'


const pages = ['Home']
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  
  // State to store the current time
  const [currentTime, setCurrentTime] = useState('')

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }


  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }



  useEffect(() => {
    const tick = () => {
      // Get current time
      const now = new Date()

      // Format: Day name, date, time
      const dayName = now.toLocaleString('default', { weekday: 'long' })
      const date = now.toLocaleDateString()
      const time = now.toLocaleTimeString()

      // Update state with formatted string
      setCurrentTime(`${dayName}, ${date}, ${time}`)
    }

    // Call tick() immediately to display the time right away
    tick()

    // Set up an interval to update the time every second
    const timerID = setInterval(tick, 1000)

    // Clean up the interval on component unmount
    return () => clearInterval(timerID)
  }, [])


  return (
    <AppBar fullwidth>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
            <img
              src={logo}
              alt="logo"
              style={{ width: '32px', height: '32px' }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              {pages.map((page,i) => (
                <MenuItem Click={handleCloseNavMenu} key={i}>
                  <Link
                    style={{ textDecoration: 'none', color: '#000' }}
                    to={`/${page}`}
                  >
                    <Typography textAlign="center"> {page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
           <Typography
            variant="p"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 300,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,i) => (
              <Link key={i} to={`/${page}`} style={{ textDecoration: 'none' }}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Typography variant="p" color="inherit">
            { currentTime}

            </Typography>
          </Box>
         
    
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
