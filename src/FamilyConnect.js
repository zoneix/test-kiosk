import { useEffect, useState } from "react";
import {Spinner} from '@momentum-ui/react';
import {Button} from '@mui/material';
import MuiPhoneNumber from "material-ui-phone-number";
import { Typography, TextField } from '@mui/material';
import axios from 'axios';
import { findPhoneNumbersInText, isValidPhoneNumber } from 'libphonenumber-js'
import { redirect_uri } from "./PresenceDemo/constants";

import './FamilyConnect.css';
import { padding } from "@mui/system";

const Konnect = () => {
  //var invitee;
  const [invitee, setInvitee] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [displayJoinView, setDisplayJoinView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const sip = localStorage.getItem("bridge_sip");
  const client = "HCA Healthcare";

  const sendMessage = async (meetingLink) => {
    try {
      const body = JSON.stringify({
        "number": `${findPhoneNumbersInText(phoneNumber)[0].number.number}`,
        "message": `${invitee} has invited you to a ${client} video chat: ${meetingLink}`
      });
  
      const config = {
        method: 'post',
        url: 'https://hooks-us.imiconnect.io/events/JAMIQW66NE',
        headers: { 
          'Content-Type': 'application/json'
        },
        data: body
      };
  
      const {data} = await axios(config);
    } catch (e) {
      console.log(e);
    }
  }

  const generateMeetingLink = async () => {
    try {
      const config = {
        method: 'post',
        url: 'https://wxsd.wbx.ninja/wxsd-guest-demo/create_url',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          "sip_target": sip,
          "header_toggle": "false",
          "sms_button": "false",
          "show_email": false,
          "expire_hours": 8,
          "self_view": "true",
          "offset": "420",
          "auto_dial": false,
          "background_url": "https://cdn.glitch.global/0ea3fa3d-0dda-4202-bb67-bc4344db0595/hca-s8plus-bkg-2.png",
        })
      };

      const {data:{urls: {Guest}}} = await axios(config);

      return Guest[0];
    } catch(error) {
      console.log(error);
    }
  };

  const invite = async () => {
    setIsLoading(true);
    const meetingLink =  await generateMeetingLink();
    await sendMessage(meetingLink);
    setIsLoading(false);
    setDisplayJoinView(true);
  }

  const handlePhoneNumberOnChange = (value) => {
    if(isValidPhoneNumber(value)) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }

    setPhoneNumber(value);
  };


  const joinTheBridge = () => {
    window.location.href = `sip:${sip}`;
  };

  const SMSView =  <div className="SMSView">
    <Typography>Text a video chat link to a family member. Enter their mobile number and click the Invite button.</Typography>
    
    <TextField id="standard-basic" label="From" variant="standard" value={invitee} 
    onChange={(e) => {
      setInvitee(e.target.value);
    }}
    />
    
    <MuiPhoneNumber
      disableDropdown="true"  
      name="phone"
      label="Mobile Number"
      data-cy="user-phone"
      defaultCountry={"us"}
      value={phoneNumber}
      onChange={(value) => { handlePhoneNumberOnChange(value)}}
    />
    
      <Button
        disabled={isButtonDisabled}
        onClick={async (e) => await invite()}
        variant="outlined"
      >Invite
      </Button>
    </div>;
  const joinView = <div className="SMSView">
     <Typography variant="subtitle1" align="center">Video chat invite sent</Typography>
     <Typography variant="subtitle1" align="center">to {phoneNumber}</Typography>
     <Typography variant="subtitle1" align="center">from {invitee}</Typography>
    <Button
      onClick={(e) => {joinTheBridge()}}
      style={{
        backgroundColor: "#24ab31",
        color: "white",
        alignSelf: "center",
        padding: "0.5rem 1rem"
      }}
    >Join The Video Chat</Button>
  </div>
  const view = isLoading ? <Spinner /> : displayJoinView ? joinView : SMSView;

  return <div className="konnectModal">
    {view}
  </div>;
};

export default Konnect;

        