//Navigate: é usado para apontar a rota para direcionar pra onder você quer navegar junto com o "to="/pagina-inicial""
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
    // const { toggleTheme } = useAppThemeContext();
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

    //itens que aparece na nav do site
    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/pagina-inicial',
                label: 'Página-inicial',
            }
        ]);
    }, []);

    return (
    //rota com todas as páginas
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>TOGGLE drawer</Button>} />
            <Route path="/pagina-secundaria" element={<Button>pagina-secundaria</Button>} />

            {/* se a rota não for achada, ela vai cair no "path='*'" */}
            <Route path='*' element={<Navigate to="/pagina-inicial"/>} /> 
        </Routes>
    );
}