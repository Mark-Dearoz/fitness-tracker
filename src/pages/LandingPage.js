import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import Introduction from '../components/landingpage/Introduction'
import Nav from '../components/Nav'
import SignUp from '../components/landingpage/SignUp'
import landingPageImage from '../images/Intro.jpg'
function LandingPage() {
	const classes = useStyles()
	const [screen, setScreen] = useState('introduction')
	return (
		<div className={classes.container}>
			<div className={classes.navContainer}>
				<Nav />
			</div>
			<div className={classes.introContainer}>
				{screen === 'introduction' && <Introduction onClick={() => setScreen('signup')} />}
				{screen === 'signup' && <SignUp onClick={() => setScreen('introduction')} />}
			</div>
			<img src={landingPageImage} className={classes.img}></img>
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
	introContainer: {
		position: 'absolute',
		left: 0,
		top: '50%',
		margin: '64px',
		transform: 'translateY(-50%)',
		minWidth: '50%',
		maxWidth: '800px',
		zIndex: 10,
	},
	img: {
		position: 'absolute',
		height: '100%',
		maxWidth: '100%',
		top: 0,
		right: 0,
		margin: '0px 64px',
		zIndex: 0,
	},
	'@media (max-width: 600px)': {
		navContainer: {
			margin: '0px',
		},
	},
	'@media (max-width: 800px)': {
		introContainer: {
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

export default LandingPage
