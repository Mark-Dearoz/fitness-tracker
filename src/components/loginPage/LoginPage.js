import React, {useEffect, useState} from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import {Box, Paper, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {useHistory} from 'react-router-dom'

const useStyle = makeStyles(theme => ({
    box: {
        width: '100%',
        height: '100vh',
        backgroundColor: theme.palette.primary.light
    },
    formContainer: {
        position: 'absolute',
        left: '50%',
        top: '20%',
        transform: 'translateX(-50%)',
        width: '400px',
        height: 'fit-content',
        padding: theme.spacing(3),
        backgroundColor: theme.palette.primary.dark
    }
}))

const LoginPage = () => {
    const classes = useStyle()
    const history = useHistory()
    const user = JSON.parse(localStorage.getItem('profile'))
    const [form, setForm] = useState(0)

    useEffect(() => {
        if(user !== null) history.push('/dashboard')
    }, [])

    return (
        <Box className={classes.box}>
            <Paper className={classes.formContainer} elevation={10}>
                <Typography variant='h4'>{form ? 'Sign Up': 'Sign In'}</Typography>
                {form ?  <SignUp onCancel={() => setForm(0)}/> : <SignIn onSignUp={() => setForm(1)}/>}
            </Paper>
            
        </Box>
            
    )
}

export default LoginPage