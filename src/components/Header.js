import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
    appBar: {
        height: 'min-content',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    toolBar: {
        width: '100%',
        display: 'flex',
        justifyContent: 'start',
        padding: theme.spacing(0),
        shadow: 'none',
    },
    iconButton: {
        cursor: 'pointer'
    },
    typography: {
        margin: `0px ${theme.spacing(2)}px`,
    }
}))

const Header = props => {
    const classes = useStyles()

    return(
        <AppBar position='sticky' className={classes.appBar}>
            <Toolbar variant='dense' className={classes.toolBar}>
                <MenuIcon onClick={props.onOpen} className={classes.iconButton}/>
                <Typography variant='h6' className={classes.typography}> Fitness Tracker </Typography>
            </Toolbar>
        </AppBar>
    )
    }

export default Header