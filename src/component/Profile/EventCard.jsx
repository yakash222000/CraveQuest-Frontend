import React from 'react'
import {Card,CardMedia,CardContent,Typography,CardActions,IconButton,Button} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const EventCard = () => {
  return (
    <div>
        <Card> 
            <CardMedia sx={{height:250,width:280}} image="https://cdn.pixabay.com/photo/2020/02/01/06/13/vegan-4809593_1280.jpg"/>
            <CardContent>
                <Typography variant="h5">
                    Fast Food
                </Typography>
                <Typography variant="body2">
                    50% off on your first order !!
                </Typography>
                <div  className="py-2 space-y-2">
                    <p>{'Mumbai'}</p>
                    <p className="text-sm text-blue-500">March 14, 2024 12:00 PM</p>
                    <p className="text-sm text-red-500">March 15, 2024 12:00 PM</p>

                </div>

            </CardContent>
            {true && <CardActions>
                <Button variant='outlined' fullWidth> Delete</Button>
            </CardActions>}

        </Card>
      
    </div>
  )
}

export default EventCard
