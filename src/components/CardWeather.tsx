import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IWeather } from '../types/IWeather'

export default function CardWeather (item : IWeather) {

    return  (
        <>

            <Box sx={{
                background: 'rgb(255, 255, 255)',
                width: 'fit-content',
                boxShadow: '1px 1px 1em rgb(0 , 0 , 0 , 0.2)',
                marginTop: '20px',
            }}>
                <CardContent>
                    <Box display="flex" flexDirection="row" justifyContent='space-between'>
                        <Box p={1}>
                            <Typography variant="h2" color="textPrimary">
                                {Math.round(item.main.temp)}<span>&#176;</span>
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                {item.coord.lon}, {item.coord.lat}
                            </Typography>
                        </Box>
                        <Box p={1}>
                            <Typography variant="h3" color="textSecondary">
                                {item.name}
                            </Typography>
                            <Typography variant="h6" color="textPrimary" textAlign='end' >
                                {item.weather[0].description.toLocaleUpperCase()}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
                <CardContent >
                    <Box display="flex" flexDirection="row-reverse">
                        <Box p={0} sx={{
                            margin: '0 auto'
                        }}>
                            <Typography variant="h4" color="textPrimary">
                                <img className="weatherimg" alt="image1" src={`/${item.weather[0].icon}.svg`} />
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
                <CardContent>
                    <Box display="flex" flexDirection="row" flexWrap='wrap'>
                        <Box p={1}>
                            <Typography variant="h6" color="textPrimary">
                                Humidity: {item.main.humidity} %
                            </Typography>
                        </Box>
                        <Box p={1}>
                            <Typography variant="h6" color="textPrimary">
                                pressure: {item.main.pressure} pa
                            </Typography>
                        </Box>
                        <Box p={1}>
                            <Typography variant="h6" color="textPrimary">
                                wind: {item.wind.speed} km/h
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
</Box>

            
        </>
    )
}