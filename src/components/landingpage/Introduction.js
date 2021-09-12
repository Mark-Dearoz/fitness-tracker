import { createUseStyles } from 'react-jss'

function Introduction(props) {
	const classes = useStyles()
	return (
		<>
			<h1 className={classes.header}>Work Harder</h1>
			<h1 className={classes.header}>Work Smarter</h1>
			<button className={classes.button} onClick={() => props.onClick()}>
				Join The Community
			</button>
		</>
	)
}

const useStyles = createUseStyles((theme) => ({
	header: {
		fontSize: '110px',
		color: theme.colors.light,
		lineHeight: '110px',
		fontWeight: 700,
	},
	button: {
		width: 'fit-content',
		fontSize: '26px',
		color: theme.colors.light,
		fontWeight: 700,
		marginTop: '8px',
		padding: '0.5em 1em',
		border: 'none',
		borderRadius: '5rem',
		backgroundColor: theme.colors.accent,
		cursor: 'pointer',
	},
	'@media (max-width: 800px)': {
		header: {
			fontSize: '51px',
			lineHeight: '51px',
		},
		button: {
			fontSize: '21px',
		},
	},
}))

export default Introduction
