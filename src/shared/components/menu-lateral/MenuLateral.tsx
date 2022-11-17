import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"; 
import React from "react";
import './style.css';
import { Box } from '@mui/system';

type AppThemeProvider = {
    children: React.ReactNode;
};

//se um menu lateral é um FC (Functinal component) automaticamente pode-se pegar a propriedade children por parãmetro, que no caso são todos os filhos do nosso componente.
//sempre que vc quiser usar um valor fixo de no projeto utilizando o metial ... use o spacing do material
export const MenuLateral: React.FC<AppThemeProvider> = ({children}) => {
    const theme = useTheme();

    return (
        //variant serve pra dizer como queremos o menu lateral ... "quer ele permanente?" você "quer o persistente? ... persistente expande e poder se diminuido tbm.
        //Repare que na linha 22 eu coloquei 100vh ... pra pegar a tela inteiro verticalmente ... e depois eu defini um espaçamento para a esquerda usando o "theme.spacing"
        <>
            <Drawer variant='permanent'>
                {/* esse box fefine o tamanho da nav */}
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar
                            sx={{height: theme.spacing(12), width: theme.spacing(12)}}
                            src="/assets/images/avatar/1.png" />
                    </Box>
                    
                    {/* coloca uma linha horizontal */}
                    <Divider />

                    {/* { flex vai ocupar todo o espaço disponivel } */}
                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>Home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página inicial"></ListItemText>
                            </ListItemButton>   
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height={"100vh"} marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
}