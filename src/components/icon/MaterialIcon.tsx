import Icon from '@mui/material/Icon';

interface MaterialIconProps {
    icon: string;
    width?: number;
    sx?: object;
}

function MaterialIcon({ icon, width, sx, ...other }:MaterialIconProps){
    return (
        <Icon
            sx={{ width, height: width, ...sx }} 
            {...other}
        >{icon}</Icon>
    )
}

export default MaterialIcon;
