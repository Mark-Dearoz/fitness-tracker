import { createUseStyles } from 'react-jss'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Input from '../Input'
import { emailRegex, passwordRegex } from '../loginPage/regex'
import { signUp } from '../../actions/auth'

function SignUp(props) {
	const dispatch = useDispatch()
	const classes = useStyles()
	const [input, setInput] = useState({ email: '', password: '', confirmPassword: '' })
	const [valid, setValid] = useState({ email: true, password: true, confirmPassword: true })

	const submitForm = () => {
		const isValid = {}
		isValid.email = emailRegex.test(input.email)
		isValid.password = passwordRegex.test(input.password)
		isValid.confirmPassword = input.password === input.confirmPassword
		setValid(isValid)
		if (isValid.email && isValid.password && isValid.confirmPassword) {
			dispatch(signUp(input))
			props.onClick()
		}
	}
	const handleChange = (e) => {
		if (e.target.id === 'email') {
			setInput((prevState) => ({ ...prevState, email: e.target.value }))
		}
		if (e.target.id === 'password') {
			setInput((prevState) => ({ ...prevState, password: e.target.value }))
		}
		if (e.target.id === 'confirmPassword') {
			setInput((prevState) => ({ ...prevState, confirmPassword: e.target.value }))
		}
	}
	return (
		<>
			<ul className={classes.errorContainer}>
				{!valid.email && <li className={classes.error}>Invalid Email</li>}
				{!valid.password && (
					<li className={classes.error}>
						Password must contain atleast 8 character, with atleast one numeric digit, one
						uppercase, and one lowercase
					</li>
				)}
				{!valid.confirmPassword && <li className={classes.error}>password does not match</li>}
			</ul>
			<div className={classes.container}>
				<Input>Name</Input>
				<Input value={input.email} onChange={handleChange} id="email" type="email">
					Email
				</Input>
				<Input value={input.password} onChange={handleChange} id="password" type="password">
					Password
				</Input>
				<Input
					value={input.confirmPassword}
					onChange={handleChange}
					id="confirmPassword"
					type="password"
				>
					Confirm
				</Input>
				<div className={classes.buttonContainer}>
					<p className={classes.cancel} onClick={() => props.onClick()}>
						Cancel
					</p>
					<button className={classes.button} onClick={submitForm}>
						Join Now
					</button>
				</div>
			</div>
		</>
	)
}

const useStyles = createUseStyles((theme) => ({
	errorContainer: {
		position: 'absolute',
		top: '-50%',
		listStyleType: 'none',
		display: 'flex',
		flexDirection: 'column',
		gap: '8px',
	},
	error: {
		color: theme.colors.light,
		backgroundColor: theme.colors.accent,
		padding: '8px',
		fntSize: '26px',
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		gap: '8px',
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: '16px',
	},
	cancel: {
		color: theme.colors.light,
		textDecoration: 'underline',
		cursor: 'pointer',
	},
	button: {
		width: 'fit-content',
		fontSize: '26px',
		color: theme.colors.light,
		fontWeight: 700,
		padding: '0.5em 1em',
		border: 'none',
		borderRadius: '5rem',
		backgroundColor: theme.colors.accent,
		cursor: 'pointer',
		alignSelf: 'flex-end',
		margin: '8px',
	},
	'@media (max-width: 800px)': {
		cancel: {
			fontSize: '14px',
		},
		button: { fontSize: '21px' },
	},
}))

export default SignUp
