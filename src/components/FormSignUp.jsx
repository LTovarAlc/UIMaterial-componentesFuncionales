import React from "react"
import { useState } from "react"
import { Button, FormControl, FormControlLabel}  from "@mui/material/"
import { TextField} from "@mui/material/"
import { Switch} from "@mui/material/"
import { FormGroup} from "@mui/material"

function FormSignUp (handleSubmit) {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)

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
        />
        <TextField 
            id="lastname" 
            label="Apellidos" 
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value) }
        />
        <TextField 
            id="email" 
            label="Correo Electronico" 
            variant="outlined" 
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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