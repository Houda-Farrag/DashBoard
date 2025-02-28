import React from 'react'
import { Typography } from '@mui/material'
import { useTheme } from '@emotion/react';

export default function Header({title, subtitle}) {
const theme = useTheme();
    return (
    <div>
      <Typography
          variant="h4"
          sx={{ p: 3,pb: 0, fontWeight: "bold", color: theme.palette.primary.main }}
        >
   {title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{my: 0, px: 3, color: theme.palette.text.main }}
        >
          {subtitle}
        </Typography>
    </div>
  )
}
