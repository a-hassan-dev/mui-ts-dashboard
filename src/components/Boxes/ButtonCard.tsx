import React from 'react'
import { Button, Card } from '@mui/material';

function ButtonCard({
        children,
        index,
        isSelected,
        handleClick,
    }: Readonly<{
        children: React.ReactNode
        index: number
        isSelected: boolean
        handleClick: Function
    }>) {
    return (
    <Card
        key={index}
        variant="outlined"
        component={Button}
        onClick={() => handleClick(index)}
        sx={{
            p: 3,
            height: 'fit-content',
            width: '100%',
            background: 'none',
            backgroundColor: isSelected ? 'action.selected' : undefined,
            borderColor: (theme) => {
                if (theme.palette.mode === 'light') {
                    return isSelected
                    ? 'primary.light'
                    : 'grey.200';
                }
                return isSelected ? 'primary.dark' : 'grey.800';
            }
        }}
    >
    {children}
    </Card>
    )
}

export default ButtonCard