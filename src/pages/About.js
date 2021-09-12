import { createUseStyles } from 'react-jss'
import Nav from '../components/Nav'
import AboutImage from '../images/About.png'
function About() {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<div className={classes.navContainer}>
				<Nav />
			</div>
			<div className={classes.contentContainer}>
				<div className={classes.headerContainer}>
					<h1 className={classes.header}>Learn Track Share</h1>
					<div className={classes.line}></div>
				</div>

				<p className={classes.text}>
					Learn different excercises, workouts, and programs curated by professional trainers and
					other athletes who are part of the community.
				</p>
				<p className={classes.text}>
					Track your workouts and personal records anytime and anywhere you go.
				</p>
				<p className={classes.text}>Share your workouts and achivement with the whole community</p>
			</div>
			<img src={AboutImage} className={classes.img}></img>
		</div>
	)
}

const useStyles = createUseStyles((theme) => ({
	container: {
		backgroundColor: theme.colors.dark,
		width: '100vw',
		height: '100vh',
		overflow: 'hidden',
	},
	navContainer: {
		position: 'absolute',
		margin: '64px',
		top: 0,
		right: 0,
		zIndex: 50,
	},
	contentContainer: {
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		margin: '64px',
		display: 'flex',
		flexDirection: 'column',
		gap: '16px',
		color: theme.colors.light,
		maxWidth: '800px',
		zIndex: 10,
	},
	headerContainer: {
		width: 'fit-content',
	},
	header: {
		fontSize: '42px',
		fontWeight: 700,
	},
	line: {
		height: '4px',
		backgroundColor: theme.colors.accent,
	},
	text: {
		fontSize: '26px',
	},
	img: {
		position: 'absolute',
		height: 'inherit',
		top: 0,
		right: 0,
		margin: '0px 64px',
		zIndex: 0,
	},
	'@media (max-width: 800px)': {
		header: {
			fontSize: '28px',
		},
		text: {
			fontSize: '21px',
		},
		contentContainer: {
			margin: '0px',
			width: '100%',
			padding: '16px',
			maxWidth: '600px',
		},
		img: {
			right: '50%',
			transform: 'translateX(50%)',
			margin: '0px',
			height: 'auto',
			maxHeight: '100%',
			maxWidth: '100%',
		},
	},
}))

export default About
