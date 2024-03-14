import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Card, Typography } from '@mui/material'
import { useMyContext } from '../store'
import axios from 'axios'

export default function Categories() {
  const [categoriesData, setCategorisData] = useState([])
  const [loading,setLoading]=useState(false)

  async function getCategories()
  {
    setLoading(true)
    let { data } = await axios.get(
      'https://fprsnt.me/categories/'
    )
    setCategorisData(data)

    setLoading(false)

   
  }
  useEffect(() => {
    getCategories()
   
  }, [])

  if (loading) return <div style={{display:'flex',justifyContent:'center'}}><h3>Loading...</h3></div>;
  // if (error) return <div>Error: {error.message}</div>;


  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {categoriesData?.map((category, i) => {
          return (
            <Grid item key={category.id} md={4} xs={12}>
              <Link to={`/category/${category.id}`}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    backgroundColor: '#0091ea',
                    width: '100%',
                    padding:'1rem'
                  }}
                  className="category"
                >
                  <Typography variant="h6" color="#fff">
                    {category.name=='questions'?'الأسئلة الشائعة':category.name} 
                  </Typography>
                </Card>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}
