import FormSignUp from './components/FormSignUp';
import './App.css';
import { Container } from "@mui/material"
import { Typography } from '@mui/material';


function App() {

  const handleSumbit = (valores) =>{
    console.log('APPJS:', valores)
  }

  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align="center">Formulario Registro</Typography>
      <FormSignUp handleSumbit={handleSumbit}/>
    </Container>
  );
}

export default App;
