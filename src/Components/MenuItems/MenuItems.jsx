// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import EditIcon from '@mui/icons-material/Edit';
// import Divider from '@mui/material/Divider';

// import HeadphonesIcon from '@mui/icons-material/Headphones';
// import AudiotrackIcon from '@mui/icons-material/Audiotrack';
// import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
// import CampaignIcon from '@mui/icons-material/Campaign';
// import SettingsIcon from '@mui/icons-material/Settings';

// const StyledMenu = styled((props) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'right',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   '& .MuiPaper-root': {
//     borderRadius: 6,
//     marginTop: theme.spacing(1),
//     minWidth: 180,
//     color:
//       theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//     boxShadow:
//       'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//     '& .MuiMenu-list': {
//       padding: '4px 0',
//     },
//     '& .MuiMenuItem-root': {
//       '& .MuiSvgIcon-root': {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       '&:active': {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity,
//         ),
//       },
//     },
//   },
// }));

// export default function CustomizedMenus() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [audioDevices, setAudioDevices] = React.useState([]);
//   const open = Boolean(anchorEl);

//   React.useEffect(() => {
//     navigator.mediaDevices.enumerateDevices().then(devices => {
//       const audioDevices = devices.filter(device =>  device.kind === 'audiooutput' && (device.label.split(" ")[0]==="Headphones" || device.label.split(" ")[0]==="Speakers"));

//       setAudioDevices(audioDevices);

//     });
//   }, []);
//   // const uniqueLabels = Array.from(new Set(audioDevices.map(device => device.label)));
//   // console.log(uniqueLabels);
//   // console.log(audioDevices);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);

//   };

//   const handleClose = (e) => {
//     setAnchorEl(null);
//     // console.log(e.target.textContent);
//   };

//   return (
//     <div>
//       <Button
//         id="demo-customized-button"
//         aria-controls={open ? 'demo-customized-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         variant="contained"
//         disableElevation
//         onClick={handleClick}
//         // endIcon={<KeyboardArrowDownIcon />}
//         style={{background:"#5d5d5d",borderRadius:"50%",padding:'0px', height:'4rem',width:'2rem',transform:"scale(0.77"}}

//       >
//         <AudiotrackIcon/>
//       </Button>
//       <StyledMenu
//         id="demo-customized-menu"
//         MenuListProps={{
//           'aria-labelledby': 'demo-customized-button',
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//       >

//         {/* <Divider sx={{ my: 0.5 }} /> */}

//           {audioDevices.map(device => (
//             // <MenuItem key={device.deviceId} onClick={handleClose} disableRipple>
//             //   {/* {device.kind.includes("audiooutput")  ?  <CampaignIcon /> : <HeadphonesIcon />} */}
//             //   {/* {device.label.includes("Headphones")?"Headphones" : device.label.includes("Speakers") ? " Speaker" : ""} */}
//             //   {device.label.split(" ")[0]==="Headphones"?"Headphones" : device.label.split(" ")[0]==="Speakers" ? " Speaker":""}

//             // </MenuItem>
//             (device.label.includes("Headphones")) ? (
//               <MenuItem key={device.deviceId} onClick={handleDeviceChange(device.deviceId)} disableRipple>
//                 <HeadphonesIcon />
//                 Headphones
//               </MenuItem>
//             ) : (device.label.includes("Speaker")) ? (
//               <MenuItem key={device.deviceId} onClick={handleDeviceChange(device.deviceId)} disableRipple>
//                 <CampaignIcon />
//                 Speaker
//               </MenuItem>
//             ) : null
//           ))}

//       </StyledMenu>
//     </div>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SettingsIcon from "@mui/icons-material/Settings";



import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const [InputAudio, setInputAudio] = React.useState('');
    const [outputAudio,setOutputAudio]=React.useState('');

    const [audioDevices, setAudioDevices] = React.useState([]);
    const [input,setInput]=React.useState([]);
    const [output,setOutput]=React.useState([]);

    const [inputLabel,setInputLabel]=React.useState('');
    const [inputDeviceId,setInputDeviceId]=React.useState('');
    const [outputLabel,setOutputLabel]=React.useState('');
    const [outputDeviceId,setOutputDeviceId]=React.useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    
    React.useEffect(() => {
          navigator.mediaDevices.enumerateDevices().then(devices => {
            const audioDevices = devices.filter(device =>  device.kind === 'audiooutput' ||  device.kind=='audioinput');
      
            // setAudioDevices(audioDevices);
            // console.log(audioDevices);
            const audioIn=[];
            const audioOut=[];
            audioDevices.map((check)=>
              // console.log(check)
              {check.kind=="audioinput"? audioIn.push(check):audioOut.push(check)}

            )
          
            setInput(audioIn);  
            setOutput(audioOut);
              setAudioDevices(audioDevices);
          });
        }, [open,audioDevices]);
        // console.log(InputAudio.length);
        // console.log(input);
        // console.log(output);

    const handleChangeInput = (event) => {
      setInputAudio(event.target.value);
      setInputLabel(event.target.value);

      {
        input.map((device)=>
             {device.label===event.target.value? setInputDeviceId(device.deviceId):setInputDeviceId("default")}
            // console.log(device.kind)
        )
      }
      
      
    };
    // console.log({inputLabel,inputDeviceId});
    const handleChangeOutput = (event) => {
      setOutputAudio(event.target.value);
      setOutputLabel(event.target.value);

      {
        output.map((device)=>
              {device.label===event.target.value? setOutputDeviceId(device.deviceId):setOutputDeviceId("default")}
            // console.log(device.label)
        )
      }
    };

   
    // console.log({outputLabel,outputDeviceId});
    const SendData=()=>{
        props.handleCallback({inputLabel,inputDeviceId,outputLabel,outputDeviceId});
        handleClose();
    }

    return (
        <div>
            <Button
                onClick={handleOpen}
                style={{
                    color: "white",
                    background: " rgb(93, 93, 93)",
                    padding: "17px",
                    borderRadius: "100%",
                    width: "2rem",
                    transform: "scale(0.75)",
                }}
            >
                <SettingsIcon />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Audio Setting
                    </Typography>
                    <hr/>
                  

                    <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Input Audio
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={InputAudio}
                                label="InputAudio"
                                onChange={handleChangeInput}
                            >
                              {
                                input.map((device)=>
                                  <MenuItem value={device.label} >{device.label}</MenuItem>
                                )
                              }
                                
                               
                            </Select>
                            
                        </FormControl>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 5, mb:3 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                output Audio 
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={outputAudio}
                                label="outputAudio"
                                onChange={handleChangeOutput}
                            >
                                 {
                                output.map((device)=>
                                  <MenuItem value={device.label}>{device.label}</MenuItem>
                                )
                              }
                            </Select>
                        </FormControl>
                    </Typography>
                    <Button variant="contained" onClick={SendData}>Ok</Button>
                </Box>
            </Modal>
        </div>
    );
}
