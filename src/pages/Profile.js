import Avatar from '@mui/material/Avatar'
import { deepOrange } from '@mui/material/colors'
import Box from '@mui/material/Box'
import React from 'react'
import { Typography } from '@mui/material'

export const Profile = () => {
  const defSize = 150;
  const user = {
    username: 'Lince'
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }} mt={10} mb={5}>
        <Avatar
          sx={{ width: defSize, height: defSize, bgcolor: deepOrange[500], fontSize: defSize / 2 }}
          alt={user.username}
          src='/broken-image.jpg'
        />
      </Box>
      <Box>
        <Typography variant='h2' component='h2'>
          {user.username}
        </Typography>
      </Box>
    </>
  )
}
