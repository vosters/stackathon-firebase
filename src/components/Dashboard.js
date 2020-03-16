import React from 'react'
import { Typography, Paper, Avatar, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import firebase from './firebase'
import { withRouter } from 'react-router-dom'
import styles from "./withStyles";

function Dashboard(props) {
	const { classes } = props

	if(!firebase.getCurrentUsername()) {
		// not logged in
		alert('Please login first')
		props.history.replace('/login')
		return null
	}

	// const [quote, setQuote] = useState('')

	// useEffect(() => {
	// 	firebase.getCurrentUserQuote().then(setQuote)
	// })

	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<VerifiedUserOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Hello { firebase.getCurrentUsername() }
				</Typography>
				{/* <Typography component="h1" variant="h5">
					Your quote: {quote ? `"${quote}"` : <CircularProgress size={20} />}
				</Typography> */}
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					// onClick={logout}
					href='http://apple.com'
					className={classes.submit}>
					Download App
          		</Button>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					onClick={logout}
					className={classes.submit}>
					Logout
          		</Button>
			</Paper>
		</main>
	)

	async function logout() {
		await firebase.logout()
		props.history.push('/')
	}
}

export default withRouter(withStyles(styles)(Dashboard))