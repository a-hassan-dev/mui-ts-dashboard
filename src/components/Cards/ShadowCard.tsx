import React from 'react'
import { alpha, Card } from '@mui/material';

function ShadowCard({
        children,
        sx,
    }: Readonly<{
        children: React.ReactNode;
        sx: object
    }>) {
    return (
    <Card
        sx={(theme) => ({
            backgroundSize: 'cover',
            borderRadius: '10px',
            outlineColor:
                theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
                theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
            '&:hover': {
                boxShadow: theme.palette.mode === 'light' 
                ? `0 0 12px 8px ${alpha('##5aacff', 0.2)}` 
                : `0 0 24px 12px ${alpha('#0360bd', 0.2)}`,
                transition: 'box-shadow 0.3s ease-in-out',
            },
            ...sx
        })}
    >
    {children}
    </Card>
    )
}

export default ShadowCard