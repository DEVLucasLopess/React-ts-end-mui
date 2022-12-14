import { 
    Avatar, 
    Divider, 
    Drawer, 
    Icon, 
    List, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    useMediaQuery,
    useTheme } 
from "@mui/material";

import React from "react";
import './style.css';
import { Box } from '@mui/system';

import { useDrawerContext, useAppThemeContext } from "../../contexts";
import { Navigate, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { Label } from "@mui/icons-material";

interface IListItemLinkProps {
    to: string; 
    icon: string;
    label: string;
    onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({to, icon, label, onClick}) => {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(to)
        onClick?.();
    }

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon className="icon-menu-desktop">home</Icon>
            </ListItemIcon>
            <ListItemText primary="Página inicial"></ListItemText>
        </ListItemButton>
    )
} 

type AppThemeProvider = {
    children: React.ReactNode;
};

//se um menu lateral é um FC (Functinal component) automaticamente pode-se pegar a propriedade children por parãmetro, que no caso são todos os filhos do nosso componente.
//sempre que vc quiser usar um valor fixo de no projeto utilizando o metial ... use o spacing do material
export const MenuLateral: React.FC<AppThemeProvider> = ({children}) => {
    const theme = useTheme();
    //processo de mediaQuery do Material-UI
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
    const { toggleTheme } = useAppThemeContext();

    return (
        // variant serve pra dizer como queremos o menu lateral ... "quer ele permanente?" você "quer o persistente? ... persistente expande e poder se diminuido tbm.
        // Repare que na linha 22 eu coloquei 100vh ... pra pegar a tela inteiro verticalmente ... e depois eu defini um espaçamento para a esquerda usando o "theme.spacing".
        // O "temporary" e "permanent" são os modos que o menu lateral vai abrir.
        // "onClose="toggleDrawerOpen" serve para fechar o menu lateral".
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                {/* esse box fefine o tamanho da nav */}
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar alt="" sx={{height: theme.spacing(12), width: theme.spacing(12)}}
                            src="https://cdn.discordapp.com/attachments/477994148964728832/998755777135247391/unknown.png" />
                    </Box>
                    
                    {/* coloca uma linha horizontal */}
                    <Divider />

                    {/* { flex vai ocupar todo o espaço disponivel } */}
                    <Box flex={1}>
                        <List component="nav">
                            { drawerOptions.map(drawerOption => (
                                <ListItemLink
                                    to={drawerOption.label}
                                    key={drawerOption.path}
                                    icon={drawerOption.path}
                                    label={drawerOption.icon}
                                    onClick={smDown ? toggleDrawerOpen : undefined}
                                />
                            ))}
                        </List>
                    </Box>

                    <Box>
                        <List component="nav">
                           <ListItemButton onClick={toggleTheme}>
                                <ListItemIcon>
                                    <Icon>
                                        dark_mode
                                    </Icon>
                                </ListItemIcon>
                                <ListItemText primary="Alternar tema" />
                           </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height={"100vh"} marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
}