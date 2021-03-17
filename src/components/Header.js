import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(() => ({
    appBar: {
        height: 'min-content'
    },
    toolBar: {
        padding: '0px',
        width: '100%',
        display: 'flex',
        justifyContent: 'start',
        shadow: 'none',
    },
    iconButton: {
        '&:hover': {
            boxShadow: '0px 0px rgba(0,0,0,0.0)',
            backgroundColor: 'rgba(0,0,0,0)'
        }
    },
    typography: {
        margin: '0px 16px 0px 16px',
    }
}))


const Header = props => {
    const classes = useStyles()

    return(
        <AppBar position='sticky' className={classes.appBar}>
            <Toolbar variant='dense' className={classes.toolBar}>
                <IconButton edge='end' color='inherit' aria-label='menu' onClick={props.onOpen} className={classes.iconButton}>
                   <MenuIcon/>
                </IconButton>
                <Typography variant='h6' className={classes.typography}>
                    Fitness Tracker
                </Typography>
            </Toolbar>
        </AppBar>
    )
    }

export default Header