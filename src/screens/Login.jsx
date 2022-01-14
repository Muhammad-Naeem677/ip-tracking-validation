import React from 'react';
import { LoginWrapper } from '../styles/Login';
import TextField from '@mui/material/TextField';
import { Button, colors, InputAdornment, OutlinedInput } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import BackgroundImage from '../img/loginBackgroundImage.jpg'; 


const Login = () => {

    const [values, setValues] = React.useState({
        username: '',
        password: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    
    const handleSubmit = () =>{

    }
    return (
        <LoginWrapper style={{ 
            backgroundImage: `url(${BackgroundImage})`,
             backgroundSize: "cover",
            height: "100vh",
        }}>
            <div className="login-card" >
                <form>
                    <div className="heading-div d-flex flex-direction-column justify-content-center algin-items-center">
                        <LockIcon className='lock-icon'/>
                        <h2>Singn In</h2>
                    </div>
                    <TextField 
                        className="input"
                        id="outlined-basic" 
                        label="Username" 
                        variant="outlined"
                        startAdornment={
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          } />
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
                    <TextField 
                        className="input"

                        id="outlined-basic" 
                        label="Password" 
                        variant="outlined" />
                    <div className="login-div d-flex justify-content-center">
                        <Button onClick={handleSubmit} className="login-btn"  color='success' variant="contained">Sign In</Button>
                    </div>
                </form>
            </div>
        </LoginWrapper>
    );
};

export default Login;