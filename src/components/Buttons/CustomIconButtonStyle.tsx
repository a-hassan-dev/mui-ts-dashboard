import React from 'react';
import Button from '@mui/material/Button';

interface CustomIconButtonStyleProps {
    children: React.ReactNode;
    handleClick: () => void;
    sx: object;
}

function CustomIconButtonStyle({ children, handleClick, sx, ...buttonProps}: CustomIconButtonStyleProps) {
    return (
        <Button
            variant="text"
            color="primary"
            aria-label="button to toggle theme"
            onClick={handleClick}
            size="small"
            sx={{ minWidth: '32px', height: '32px', p: '4px', ...sx }}
            {...buttonProps}
        >
            {children}
        </Button>
    );
}

export default CustomIconButtonStyle;
