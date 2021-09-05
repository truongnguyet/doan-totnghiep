import React, {useState} from 'react';
import {
    Avatar, Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel, Grid, Link,
    makeStyles,
    TextField,
    Typography
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import firebase from "firebase";
import {useHistory} from 'react-router-dom'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
};
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Login(props) {

    const classes = useStyles();
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const handleSignIn = async () => {
        try {
            if (!email || !password)
                return;
            setLoading(true)
            await firebase.auth().signInWithEmailAndPassword(email, password)
            history.push("/")
        } catch (e) {
            setError(e.code)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            autoFocus
                            value={email}
                            onChange={e => {
                                setEmail(e.target.value)
                                setError('')
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            value={password}
                            onChange={e => {
                                setPassword(e.target.value)
                                setError('')
                            }}
                        />
                        {
                            error ? <Typography color={"secondary"}>{error} </Typography> :
                                null
                        }
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSignIn}
                            disabled={loading}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                {/*<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />*/}
            </Container>

        </div>
    );
}

export default Login;