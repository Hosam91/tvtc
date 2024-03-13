import React, { useState, useEffect } from 'react'
import headerImage from '../images/header.png'
import { Card, Grid, Typography, Divider } from '@mui/material'

export default function Header() {
  const myStyle = {
    width: '100%',
    height: '40vh',
    display: 'flex',
    justifyContent: 'center',
    alginItems: 'center',
    marginTop: '100px',
    backgroundColor: '#3f81a0ae;',
    position: 'relative',
  }

  return (
    <>
      <Grid container>
        <Grid item md={12} sm={12} style={myStyle}>
          {/* <div className="overlay"></div> */}
          <img src={headerImage} alt="" />
        </Grid>

        <Divider />
      </Grid>
    </>
  )
}
