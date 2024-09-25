import { Typography,TextField,Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import {Formik,Form,Field} from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../State/Authentication/Action'
import { useDispatch } from 'react-redux'

const initialValues={
    fullName:"",
    email:"", 
    password:"",
    role:""
}

const RegisterForm = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const handleSubmit=(values)=>{
        console.log("values from",values);
        dispatch(registerUser({userData:values,navigate}))
    }

  return (
    <div>
        <Typography variant="h5" className="text-center">
            Register
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
                <Field
                    as={TextField}
                    name="fullName"
                    label="Full Name"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    
                />
                <FormControl fullWidth margin='normal'>
  <InputLabel id="role-simple-select-label">Role</InputLabel>
  <Field as={Select}
    labelId="role-simple-select-label"
    id="role-simple-select"
    label="Role"
    name="role"
    
  >
    <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
    <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
  </Field>
</FormControl>
                <Button sx={{mt:2 ,padding:'.7rem'}} fullWidth variant="contained" type="submit">Submit</Button>
            </Form>
        </Formik>
        <Typography align='center' sx={{mt:3}} variant="body2">
            if already have an account?
            <Button size="small" onClick={()=>navigate("/account/login")}>
                Login
            </Button>
        </Typography>
      
    </div>
  )
}

export default RegisterForm
