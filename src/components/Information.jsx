import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import OpacityIcon from '@mui/icons-material/Opacity';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloudIcon from '@mui/icons-material/Cloud';

const useStyles = makeStyles({
   component:{
    margin:50,
   },
   row :{
   padding: 10,
   fontSize:16,
   letterSpacing: 2
   },
   value:{
       color:"crimson",
       fontFamily:'cursive'
   },
   icon:{
       marginRight:15,
       color:"gray"
   }
})

const Information =(props) =>{
    const classes =useStyles();
    return(
        props.data ?
      <Box className = {classes.component}>
      <Typography className = {classes.row }><LocationOnIcon className = {classes.icon}/> Location : <Box className={classes.value} component ="span" >{props.data.name} , {props.data.sys.country}</Box></Typography>
      <Typography className = {classes.row }><SettingsBrightnessIcon className = {classes.icon} /> Temperature : <Box className={classes.value} component ="span" > {props.data.main.temp} °C </Box></Typography>
      <Typography className = {classes.row }><OpacityIcon className = {classes.icon}/> Humidity : <Box className={classes.value} component ="span" >{props.data.main.humidity}%</Box></Typography>
      <Typography className = {classes.row }><LightModeIcon className = {classes.icon}/> SunRise : <Box className={classes.value} component ="span" >{new Date(props.data.sys.sunrise * 1000).toLocaleTimeString()}</Box></Typography>
      <Typography className = {classes.row }><Brightness5Icon className = {classes.icon}/> SunSet : <Box className={classes.value} component ="span" >{new Date(props.data.sys.sunset *1000).toLocaleTimeString()}</Box></Typography>
      <Typography className = {classes.row }><DehazeIcon className = {classes.icon}/> Conditions :<Box className={classes.value} component ="span" > {props.data.weather[0].main}</Box></Typography>
      <Typography className = {classes.row }><CloudIcon className = {classes.icon}/> Clouds : <Box className={classes.value} component ="span" >{props.data.clouds.all}%</Box></Typography>
      </Box> : ""
    )
}
export default Information;