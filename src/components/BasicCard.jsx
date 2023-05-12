import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function BasicCard(childToParentData) {
  var data = childToParentData
  return (

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
          <Typography variant="body2">
            {
              data.map(pokemon => {
                return (
                  <div>
                  <h2>{data.name}</h2>
                  </div>
                )
              })
            }
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{m:'auto'}} size="small">saber mas</Button>
      </CardActions>
    </Card>
  );
}