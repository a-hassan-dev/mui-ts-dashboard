import PropTypes from 'prop-types';
// @mui
import { Dialog, Button, DialogTitle, DialogActions, DialogContent, Divider } from '@mui/material';
import React from 'react';

// ----------------------------------------------------------------------

type ConfirmDialogProps = {
  open: boolean,
  title: React.ReactNode,
  action: React.ReactNode,
  content: React.ReactNode,
  onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void,
  SubButton: React.ReactNode,
};

ConfirmDialog.defaultProps = {
  SubButton: 'Cancel',
};
export default function ConfirmDialog({
  title,
  content,
  action,
  open,
  onClose,
  SubButton,
  ...other
} : ConfirmDialogProps ) {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose} {...other}>
      <DialogTitle variant='h4' sx={{pb:1, pt:2}}>{title}</DialogTitle>
      <Divider orientation="horizontal" flexItem />
      {content && <DialogContent sx={{ typography: 'body2', pt:2 }}> {content} </DialogContent>}
      {/* <Divider orientation="horizontal" flexItem /> */}
      <DialogActions>
        <Button variant="outlined" color="inherit" onClick={(event) => onClose(event, 'escapeKeyDown')}>{SubButton}</Button>
        {action}
      </DialogActions>
    </Dialog>
  );
}
