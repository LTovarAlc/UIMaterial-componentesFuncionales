import React from "react"
import { useState } from "react"
import { Button, FormControl, FormControlLabel}  from "@mui/material/"
import { TextField} from "@mui/material/"
import { Switch} from "@mui/material/"
import { FormGroup} from "@mui/material"

function FormSignUp ({handleSubmit}) {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: "Deben ser almenos 3 caracteres"
        },
        lastName:{
            error: false,
            message: "Deben ser almenos 3 caracteres"
        }
    })
        
    function validarNombre(name){
        if(name.length >= 3){
            return { name:{ error: false, message: ''}}
        }else{
            return { name:{ error: true, message: 'Deben ser almenos 3 caracteres'}}
        }
    }

    function validarLastName(lastName){
        if(lastName.length >= 3){
            return { lastName:{ error: false, message: ''}}
        }else{
            return { lastName:{ error: true, message: 'Deben ser almenos 3 caracteres'}}
        }
    }

    function validarEmail(email){
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        return emailRegex.test(email);
    }
 
    return (
    <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit({
            name,
            lastName,
            email,
            prom,
            nov
        })
    }}>
        <TextField 
            id="name" 
            label="Nombre" 
            variant="outlined" 
            fullWidth
            margin="normal"
            onChange={(e) => setName(e.target.value)}
            value={name}
            error={errors.name && errors.name.error}
            helperText={errors.name.message ? errors.name.message: ''}
            onBlur={(e)=> {
                const nameValidation = validarNombre(e.target.value)
                setErrors({
                    ...errors,
                    name: nameValidation.name
                })
            }}
        />
        <TextField 
            id="lastname" 
            label="Apellidos" 
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value) }
            error={errors.lastName && errors.lastName.error}
            helperText={errors.lastName.message ? errors.lastName.message: ''}
            onBlur={(e) => {
                const lastNameValidartion = validarLastName(e.target.value)
                setErrors({
                    ...errors,
                    lastName: lastNameValidartion.lastName
                })
            }}
        />
        <TextField 
            id="email" 
            label="Correo Electronico" 
            variant="outlined" 
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!validarEmail(email) && email !== ""}
            helperText={!validarEmail(email) && email !== "" ? "Correo electronico inválido" : ""}
        />
        <FormGroup>
            <FormControlLabel 
                control={
                    <Switch checked={prom} onChange={(e) => setProm(e.target.checked) }/>
                } 
                label="Promociones"/>
            
            <FormControlLabel 
                control={
                    <Switch checked={nov} onChange={(e) => setNov(e.target.checked) }  />
                } 
                label="Novedades"/>

        </FormGroup>
        <Button variant="contained" type="submit">Registrarse</Button>
    </form>
    )
}

export default FormSignUp