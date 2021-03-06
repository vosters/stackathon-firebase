import React from 'react'
import { Typography, Paper, Avatar, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import styles from './withStyles'

function Landing(props) {
	const { classes } = props

	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<VerifiedUserOutlined />
				</Avatar>
				<Typography component="h1" variant="h5" >
					Get in the Game
				</Typography>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/survey"
					className={classes.submit}>
					Join The League
          		</Button>
			</Paper>
		</main>
	)
}

export default withStyles(styles)(Landing)