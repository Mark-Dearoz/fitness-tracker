import React, { useEffect, useState, useRef } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Planner from '../components/dashboard/plannerModule/Planner'
import Graph from '../components/dashboard/graphModule/Graph'
import BestLift from '../components/dashboard/bestLiftModule/BestLift'
import { Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { getExercises } from '../actions/exercise'
import { getMuscleGroups } from '../actions/muscleGroup'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	box: {
		padding: theme.spacing(3),
		backgroundColor: theme.palette.grey[800],
		[theme.breakpoints.down('md')]: {
			padding: theme.spacing(1),
		},
	},
}))

const Dashboard = () => {
	const classes = useStyles()
	const history = useHistory()
	const dispatch = useDispatch()
	const user = useRef(JSON.parse(localStorage.getItem('profile')))
	const [sideBarOpen, setSideBarOpen] = useState(false)

	useEffect(() => {
		if (user.current === null) return history.replace('/login')
		dispatch(getExercises())
		dispatch(getMuscleGroups())
	}, [])

	return (
		<>
			<Header onOpen={() => setSideBarOpen(true)} />
			<SideBar
				onClose={() => setSideBarOpen(false)}
				open={sideBarOpen}
				userName={user.current?.result?.email}
			/>
			<Box className={classes.box}>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<Graph />
					</Grid>
					<Grid item xs={12} sm={6} lg={3}>
						<BestLift />
					</Grid>
					<Grid item xs={12}>
						<Planner />
					</Grid>
				</Grid>
			</Box>
		</>
	)
}

export default Dashboard
