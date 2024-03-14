import React, { useState, useEffect } from 'react'

import { Grid, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import axios from 'axios';

export default function Questions() {
  let { categoryId } = useParams()

  const [categoriesData, setCategorisData] = useState([])
  const [loading,setLoading]=useState(false)

  async function getQuestions(id)
  {
    setLoading(true)
    let { data } = await axios.get(
      `https://fprsnt.me/categories/${id}`
    )
    setCategorisData(data)

    setLoading(false)

   
  }
  useEffect(() =>
  {
    if (categoryId)
    {
      getQuestions(categoryId)
      
    }
   
  }, [])

  return (
    <div dir="rtl">
      <Grid container sx={{ mt: 5 }}>
        <Typography
          variant="h3"
          sx={{ mt: '3rem', textAlign: 'center', fontWeight:'bold' }}
        >
          الأسئلة 
        </Typography>
        <Grid item md={12} sm={12}></Grid>

        <Grid item md={12} sm={12} mt={5}>

          {categoriesData?.map((question) =>
          {
            return <Accordion className='accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className='accTitle'
            >
             {question.question_text}
            </AccordionSummary>
            <AccordionDetails className='accDetails'>
            {question.answer}
            </AccordionDetails>
          </Accordion>
          })  }
        


         
        </Grid>
      </Grid>
    </div>
  )
}
