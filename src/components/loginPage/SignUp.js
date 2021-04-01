import React, {useState} from 'react'
import {FormControl, Input, InputLabel, Paper, Button, Box, FormHelperText} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {emailRegex, passwordRegex} from './regex'
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {signUp} from '../../actions/auth'

const useStyle = makeStyles(theme => ({
    paperForm: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
        marginTop: theme.spacing(3)
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
    }
}))

const SignUp = props => {
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyle()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({email: false, password: false, confirmPassword: false})

    const onSubmitHandler = event => {
        event.preventDefault()
        const e = {...errors}
        emailRegex.test(email) ? e.email = false : e.email = true
        passwordRegex.test(password) ? e.password = false : e.password = true
        password === confirmPassword ? e.confirmPassword = false : e.confirmPassword = true
        setErrors(e)
        if(!errors.email && !errors.password && !errors.confirmPassword){
            dispatch(signUp({email: email, password: password, confirmPassword: confirmPassword}, history))
        }

    }
    const onChangeHandler = event =>{
        const id = event.target.id
        if(id === 'email') setEmail(event.target.value)
        if(id === 'password') setPassword(event.target.value)
        if(id === 'confirmPassword') setConfirmPassword(event.target.value)
    }

    return(
        <form onSubmit={event =>onSubmitHandler(event)}>
            <Paper className={classes.paperForm}>
                <FormControl error={errors.email}>
                    <InputLabel id='email'>Email</InputLabel>
                    <Input id='email' value={email} onChange={event => onChangeHandler(event)} color='primary'></Input>
                    {errors.email ? <FormHelperText>Invalid Email</FormHelperText> : null}
                </FormControl>
                <FormControl error={errors.password}>
                    <InputLabel>Password</InputLabel>
                    <Input type='password' id='password' value={password} onChange={event => onChangeHandler(event)} color='primary'></Input>
                    <FormHelperText>Must contain atleast 8 character, with atleast one numeric digit, one uppercase, and one lowercase</FormHelperText>
                </FormControl>
                <FormControl error={errors.confirmPassword}>
                    <InputLabel>Confirm Password</InputLabel>
                    <Input type='password' id='confirmPassword' value={confirmPassword} onChange={event => onChangeHandler(event)} color='primary'></Input>
                    {errors.confirmPassword ? <FormHelperText>Password must be the same</FormHelperText> : null}
                </FormControl>
                <Box className={classes.buttonContainer}>
                    <Button type='submit' variant='contained' color='primary' onClick={event => onSubmitHandler(event)} className={classes.button}>Confirm</Button>
                    <Button variant='contained' color='primary' onClick={() => props.onCancel()}>Cancel</Button>
                </Box>
            </Paper>
        </form>
    )
}

export default SignUp