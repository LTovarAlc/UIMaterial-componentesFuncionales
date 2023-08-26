import {Button, FormControl, FormControlLabel}  from "@mui/material/"
import {TextField} from "@mui/material/"
import {Switch} from "@mui/material/"
import {FormGroup} from "@mui/material"
import {FormCrontollLabel} from "@mui/material"

function FormSignUp () {
    return (
    <form>
        <TextField 
            id="name" 
            label="Nombre" 
            variant="outlined" 
            fullWidth
            margin="normal"
        />
        <TextField 
            id="lastname" 
            label="Apellidos" 
            variant="outlined"
            fullWidth
            margin="nomrmal"
        />
        <TextField 
            id="email" 
            label="Correo Electronico" 
            variant="outlined" 
            fullWidth
            margin="normal"
        />
        <FormGroup>
            <FormControlLabel 
                control={
                    <Switch defaultChecked  />
                } 
                label="Promociones"/>
            
            <FormControlLabel 
                control={
                    <Switch defaultChecked  />
                } 
                label="Novedades"/>

        </FormGroup>
        <Button variant="contained">Registrarse</Button>
    </form>
    )
}

export default FormSignUp