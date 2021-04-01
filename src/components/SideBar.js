import React from 'react'
import {Link} from 'react-router-dom'
import {Drawer, IconButton, List, ListItem, Typography, Divider} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import {makeStyles} from '@material-ui/styles'
import {useDispatch} from 'react-redux'


const useStyle = makeStyles(() => ({
    list: {
        margin: '0px 0px 0px 8px',
        padding: '0px'
    },
    listItem: {
        display: 'flex',
        padding: '8px 0px',
        gap: '32px'
    },
    iconButton: {
        '&:hover': {
            boxShadow: '0px 0px rgba(0,0,0,0.0)',
            backgroundColor: 'rgba(0,0,0,0)'
        }
    }
}))

const SideBar = props =>{
    const dispatch = useDispatch()
    const classes = useStyle()

    return(
        <Drawer open={props.open} onClose={props.onClose} anchor='left'>
            <List className={classes.list}>
                <ListItem className={classes.listItem} style={{justifyContent: 'flex-end', padding: '0px'}}>
                    <IconButton onClick={props.onClose} className={classes.iconButton}>
                        <ArrowBackIosIcon/>
                    </IconButton>
                </ListItem>
                <Divider/>
                <ListItem className={classes.listItem}>
                    <AccountCircleIcon fontSize='large'/>
                    <Typography variant='h6'>{props.userName}</Typography>
                    <Link to='/'>
                        <IconButton className={classes.iconButton} onClick={() => dispatch({type: "LOGOUT"})}>
                            <ExitToAppIcon />
                        </IconButton>
                    </Link>
                </ListItem>
                <Divider/>
                <ListItem className={classes.listItem} button={true}>
                    <FitnessCenterIcon fontSize='large'/>
                    <Typography variant='h6'>Fitness Guides</Typography>
                </ListItem>
                <ListItem className={classes.listItem} button={true}>
                    <ShowChartIcon fontSize='large'/>
                    <Typography variant='h6'>Dashboard</Typography>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SideBar