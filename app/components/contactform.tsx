import {
  TextField,
  Button,
  Box
} from '@mui/material'
import { useState } from 'react'

/**
 * This is the contact form that will be used to allow people to contact me
 * through the website onto my email
 * @returns 
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  /**
   * This function is the change handler in the form
   * @param e 
   */
  function handleChange (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  /**
   * This function will be the submission handler for the form
   */
  async function handleSubmission(e: { preventDefault: () => void }) {
    // prevents the page from refreshing after the form is submitted
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        console.error(data.error)
      }
    } catch (error) {
      setStatus('error')
      console.error('Fetch error:', error)
    }
  }

  return(
    <Box component='form' onSubmit={handleSubmission}>
      {status === 'error' && 
      'An error has occured while attempting to send the email. Please try again'}
      <TextField
        margin='dense'
        fullWidth
        label='Name'
        size='small'
        value={formData.name}
        onChange={handleChange}
        name='name'
        required
      />
      <TextField
        margin='dense'
        fullWidth
        label='Email'
        size='small'
        value={formData.email}
        onChange={handleChange}
        name='email'
        required
      />
      <TextField
        margin='dense'
        multiline
        maxRows={4}
        minRows={4}
        fullWidth
        label='Message'
        size='small'
        value={formData.message}
        onChange={handleChange}
        name='message'
        required
      />
      <Button
        type='submit'
        disabled={status == 'sending'}
      >
        Submit
      </Button>
    </Box>
  )
}