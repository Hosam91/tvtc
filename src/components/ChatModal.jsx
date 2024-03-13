import React, { useEffect, useState } from 'react'
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Card,
  Grid,
  CircularProgress,
} from '@mui/material'
import { useMyContext } from '../store'
import axios from 'axios'
import SendIcon from '@mui/icons-material/Send'
import ChatIcon from '@mui/icons-material/Chat';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

export default function ChatModal() {

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInputValue] = useState('')
  const [messages, setMessages] = useState([])
  const [answer, setAnswer] = useState(null)

  const handleOpen = () => setOpen(true)
  const handleClose = () =>
  {
    setOpen(false);
    setAnswer(null)
  }




  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    if (!input.trim()) return

    let { data } = await axios.post('http://89.116.152.54:8000/ai', {
      question: input,
    })
    if (data?.answer) {
      setAnswer(data?.answer)
      setLoading(false)
    } else {
      // Alert('faild')
      setLoading(false)
    }

    setMessages([...messages, input])
    setInputValue('')
  }

  return (
    <div dir="rtl">
      <Button
        onClick={handleOpen}
        variant="contained"
        color="primary"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
       
      >
       
        <span style={{ margin: '.2rem', padding: '.2rem',fontWeight:'bold' }} >   اسأل الذكاء الاصطناعي </span>
        <span style={{ margin: '.2rem', padding: '.2rem' }} > <ChatIcon/> </span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="chat-modal-title"
        aria-describedby="chat-modal-description"
      >
        <Box sx={style}>
          <Typography id="chat-modal-title" variant="h6" component="h6" sx={{textAlign:'center'}}>
          اسأل الذكاء الاصطناعي   
          </Typography>
          {loading && (
            <CircularProgress />
            
          )}
          {answer && 
            <Card
              id="chat-modal-description"
              style={{
                maxHeight: '500px',
                overflowY: 'auto',
                padding: '.5rem',
                margin: '1rem 0 ',
              }}
            >
              {answer && <Typography variant="h6" sx={{textAlign:'right'}}>{answer} </Typography>}
            </Card>
          }
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Message"
              variant="outlined" 
              value={input}
              onChange={handleInputChange}
              margin="normal"
              sx={{ mt:2}}
            />
            <Button
              type="submit"
              variant="contained"
              style={{
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ margin: '.2rem', padding: '.2rem' }}> ارسال </span>
              <span style={{ margin: '.2rem', padding: '.2rem' }}>
                {' '}
                <SendIcon />{' '}
              </span>
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}
