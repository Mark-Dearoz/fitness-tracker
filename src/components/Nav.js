import { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Link, useLocation } from 'react-router-dom'
import theme from '../styles/theme'
import Hamburger from './svg/Hamburger'

function Nav() {
	return window.innerWidth > 600 ? <DesktopNav /> : <MobileNav />
}

const DesktopNav = () => {
	const classes = useDesktopStyles()
	const { pathname } = useLocation()
	return (
		<ul className={classes.container}>
			<Link to="/">
				<li className={classes.link} style={pathname === '/' ? { color: theme.colors.accent } : {}}>
					Home
				</li>
			</Link>
			<Link to="/about">
				<li
					className={classes.link}
					style={pathname === '/about' ? { color: theme.colors.accent } : {}}
				>
					About
				</li>
			</Link>
			<Link to="/dashboard">
				<li
					className={classes.link}
					style={pathname === '/dashboard' ? { color: theme.colors.accent } : {}}
				>
					Dashboard
				</li>
			</Link>
			<Link to="/login">
				<li
					className={classes.link}
					style={pathname === '/login' ? { color: theme.colors.accent } : {}}
				>
					Log In
				</li>
			</Link>
		</ul>
	)
}
const MobileNav = () => {
	const classes = useMobileStyles()
	const { pathname } = useLocation()
	const [open, setOpen] = useState(false)
	return (
		<>
			<div className={classes.hamburger} onClick={() => setOpen((prevState) => !prevState)}>
				<Hamburger open={open} />
			</div>
			{open && (
				<ul className={classes.container}>
					<Link to="/">
						<li
							className={classes.link}
							style={pathname === '/' ? { color: theme.colors.accent } : {}}
						>
							Home
						</li>
					</Link>
					<Link to="/about">
						<li
							className={classes.link}
							style={pathname === '/about' ? { color: theme.colors.accent } : {}}
						>
							About
						</li>
					</Link>
					<Link to="/dashboard">
						<li
							className={classes.link}
							style={pathname === '/dashboard' ? { color: theme.colors.accent } : {}}
						>
							Dashboard
						</li>
					</Link>
					<Link to="/login">
						<li
							className={classes.link}
							style={pathname === '/login' ? { color: theme.colors.accent } : {}}
						>
							Log In
						</li>
					</Link>
				</ul>
			)}
		</>
	)
}

const useDesktopStyles = createUseStyles((theme) => ({
	container: {
		display: 'flex',
		gap: '64px',
	},
	link: {
		color: theme.colors.light,
		listStyleType: 'none',
		textDecoration: 'none',
	},
}))

const useMobileStyles = createUseStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		width: '100vw',
		height: '100vh',
		gap: '64px',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.colors.dark,
	},
	link: {
		color: theme.colors.light,
		listStyleType: 'none',
		textDecoration: 'none',
	},
	hamburger: {
		position: 'absolute',
		top: '16px',
		right: '16px',
		zIndex: 100,
	},
}))
export default Nav
