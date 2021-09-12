import { useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { motion } from 'framer-motion'

function Input(props) {
	const classes = useStyles()
	const theme = useTheme()
	const [focus, setFocus] = useState(false)
	return (
		<div className={classes.container}>
			<h3 className={classes.title}>{props.children}</h3>
			<div className={classes.inputContainer}>
				<input
					className={classes.input}
					id={props.id}
					value={props.value}
					type={props.type}
					onChange={props.onChange ? (e) => props.onChange(e) : null}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
				></input>
				<motion.div
					className={classes.line}
					animate={
						focus
							? { backgroundColor: theme.colors.accent }
							: { backgroundColor: theme.colors.light }
					}
				></motion.div>
			</div>
		</div>
	)
}

const useStyles = createUseStyles((theme) => ({
	container: {
		width: '100%',
		display: 'flex',
		gap: '16px',
	},
	title: {
		color: theme.colors.light,
		fontSize: '41px',
		fontWeight: 700,
	},
	inputContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
	},
	input: {
		width: 'inherit',
		height: '100%',
		border: 'none',
		backgroundColor: 'rgba(0,0,0,0)',
		color: theme.colors.light,
		textAlign: 'center',
		fontSize: '26px',

		'&:focus': {
			outline: 'none',
		},
	},
	line: {
		height: '2px',
		width: '100%',
		backgroundColor: theme.colors.light,
	},
	'@media (max-width: 800px)': {
		title: {
			fontSize: '28px',
		},
		input: {
			fontSize: '21px',
		},
	},
}))
export default Input
