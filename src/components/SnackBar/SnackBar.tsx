import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../store/store';
import { setAuthError } from '../../store/authReducer';
// import style from "./SnackBar.module.css"

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref,) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function SnackBar() {

    const dispatch = useDispatch()

    const authError = useSelector<RootStateType, string | null>(state => state.auth.authError)

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setAuthError({ authError: null }));
    };

    return (
        <div>
            <Snackbar open={authError !== null} autoHideDuration={6000} onClose={handleClose} >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {authError && authError}
                </Alert>
            </Snackbar>
        </div>
    );
}