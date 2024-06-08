import { Box, Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function Card({img, title, description, state, characteristics, price}) {
  return (
    <Box sx={{border: "1px solid gray", width: 400, height: 480, textAlign: "center"}}>
        <img style={{width: "100%", height: 250, borderBlockEnd: "1px solid black"}} src={img} alt="image not found" />
        <Typography variant='h4'>{title}</Typography>
        <Box sx={{display: "flex", justifyContent: "space-between", px: 2}}>
        <Typography>{description}</Typography>
        <Typography>{state}</Typography>
        </Box>
        <Typography>{characteristics}</Typography>
        <Box sx={{display: "flex", justifyContent: "end", px: 2}}>
        <Typography variant='h4'>$ {price}</Typography>
        </Box>
        <Box sx={{display: "flex", px: 2, justifyContent: "space-between"}}>
            <CheckCircleOutlineIcon sx={{fontSize: 60, color: 'green'}}/>
            <HighlightOffIcon sx={{fontSize: 60, color: "red"}}/>
        </Box>
    </Box>
  )
}
