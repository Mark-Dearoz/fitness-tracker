import React, {useState, useEffect} from 'react'
import {FormControl, Input, InputLabel, Paper, Button, Box, Typography, FormHelperText} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {signIn} from '../../actions/auth'

const useStyle = makeStyles(theme => ({
    paperForm: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
        marginTop: theme.spacing(3),
    },
    buttonContainer: {
        display: 'flex',
        paddingTop: theme.spacing(3),
        alignItems: 'center'
    },
    button: {
        marginRight: theme.spacing(3)
    },
    typography: {
        textDecoration: 'underline',
        cursor: 'pointer',
        opacity: '25%',
        '&:hover' : {
            opacity: '100%'
        }
    },
    error: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.error.main
    }

}))



const SignIn = props =>{
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyle()
    const errors = useSelector(state => state.errors)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const onSubmitHandler = event => {
        event.preventDefault()
        if(!email){
            dispatch({type: 'SIGNIN_ERROR', payload: 'Please enter an email'})
        }else if(!password){
            dispatch({type: 'SIGNIN_ERROR', payload: 'Please enter an password'})
        }else{
            if(errors.signIn){
                setEmail('')
                setPassword('')   
            }
            dispatch(signIn({email: email, password: password}, history))
        }
    }

    const onChangeHandler = event =>{
        const id = event.target.id
        if(id === 'email') setEmail(event.target.value)
        if(id === 'password') setPassword(event.target.value)
    }
    return(
        <form onSubmit={event => onSubmitHandler(event)}>
            <Paper className={classes.paperForm}>
                {errors?.signIn ? 
                    <Paper className={classes.error} elevation={0}>
                        <Typography>{errors.signIn}</Typography>
                    </Paper> 
                : null}
                <FormControl error={errors.signIn ? true : false} >
                    <InputLabel id='email'>Email</InputLabel>
                    <Input id='email' value={email} onChange={event => onChangeHandler(event)} color='primary'></Input>
                </FormControl>
                <FormControl error={errors.signIn ? true : false}>
                    <InputLabel>Password</InputLabel>
                    <Input type='password' id='password' value={password} onChange={event => onChangeHandler(event)} color='primary'></Input>
                </FormControl>
                <Box className={classes.buttonContainer}>
                    <Button type='submit' variant='contained' color='primary' onClick={event => onSubmitHandler(event)} className={classes.button}>Sign In</Button>
                    <Typography variant='body1' className={classes.typography} onClick={() => props.onSignUp()}>SignUp</Typography>
                </Box>
            </Paper>
        </form>
    )
}

export default SignIn