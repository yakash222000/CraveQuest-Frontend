import { Typography,TextField,Button } from '@mui/material'
import {Formik,Form,Field} from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../State/Authentication/Action'

const initialValues={
    email:"", 
    password:""
}

const LoginForm = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleSubmit=(values)=>{
        dispatch(loginUser({userData:values,navigate}))
    }
  return (
    <div>
        <Typography variant="h5" className="text-center">
            Login
        </Typography>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form>
                <Field
                    as={TextField}
                    name="email"
                    label="email"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    
                />
                <Field
                    as={TextField}
                    name="password"
                    label="password"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    type="password"
                    
                />
                <Button sx={{mt:2 ,padding:'.7rem'}} fullWidth variant="contained" type="submit">Submit</Button>
            </Form>
        </Formik>
        <Typography align='center' sx={{mt:3}} variant="body2">
            Don't have an account?
            <Button size="small" onClick={()=>navigate("/account/register")}>
                Register
            </Button>
        </Typography>
      
    </div>
  )
}

export default LoginForm
