import { useDrawerContext } from '../contexts';
import { Box, Typography, useTheme, IconButton, Icon, useMediaQuery } from '@mui/material';

interface ILayoutBaseDePaginaProps {
    titulo: string;
    children: React.ReactNode;
    barraDeFerramentas?: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, titulo, barraDeFerramentas }) => {
    const theme = useTheme();
    // constanto que recebe a função de abrir e fechar o menu lateral
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { toggleDrawerOpen } = useDrawerContext();
    //o que é o "gap={1}"? é apenas um espaço entre as informações ... 
    //"é o número "1" é a unidade de medida do MUI que já vem configurado" no caso "8px" se fosse 2 seria "16px" de dispancia.
    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box display="flex" alignItems="center" gap={1} padding={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
                {/* função que abre ou fecha o menu */}
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}
                
                {/* o "whiteSpace" evita que algum texto quebre a linha quando diminuir a tela */}
                {/* "overflow" quando o texto que não quebra chegar no limite da box ... ele não invadir outra box */}
                {/* Esse "textOverflow" vai ajudar quando o texto começar a quebra, ele vaia dicionar 2 pontinhos no final, demostrando que o texto continua */}
                {/* exemplo ... ( Lita de cid... ) */}
                <Typography 
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
                >
                    {titulo}
                </Typography>
            </Box>

            { barraDeFerramentas && ( 
                <Box>
                   {barraDeFerramentas}
                </Box>
            )}

            {/* esse "flex={1}" box vai ocupar todo espaço disponivel */}
            {/* o overflow auto quando o box foir muito alto ... verticalmente, ele vai passar a ter scroll .
            .. esse cara é muito usado pra scrollar só o pedaço do componente que vc quer */}
            <Box flex={1} overflow="auto">
                { children }
            </Box>
        </Box>
    );
};