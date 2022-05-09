import QRCode from 'qrcode.react';
import { Link } from '@mui/material';
import {login_url} from './constants';
import { Typography } from '@mui/material';

import "./AuthCode.css";

const AuthCode = ({loginState}) => {
  console.log(`${login_url}&state=${loginState}`);

  return <div className="authCode">
    <Typography variant="subtitle1" align="center">For HCA Clinician use only.</Typography>
    <Typography variant="subtitle1" align="center">Please scan the QR code with your phone for access.</Typography>
    <QRCode value={`${login_url}&state=${loginState}`} size={200}/>
  </div>
  
}

export default AuthCode;