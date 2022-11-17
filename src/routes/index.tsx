//Navigate: é usado para apontar a rota para direcionar pra onder você quer navegar junto com o "to="/pagina-inicial""
import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts';

export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext();
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleTheme}>TOGGLE THEME</Button>} />
            <Route path="/pagina-secundaria" element={<Button>pagina-secundaria</Button>} />

            {/* se a rota não for achada, ela vai cair no "path='*'" */}
            <Route path='*' element={<Navigate to="/pagina-inicial"/>} /> 
        </Routes>
    );
}