// import React, { Component } from 'react';
// import './jitsi.css'
// import AddIcCallIcon from '@mui/icons-material/AddIcCall';
// import CallEndIcon from '@mui/icons-material/CallEnd';
// import MicIcon from '@mui/icons-material/Mic';
// import MicOffIcon from '@mui/icons-material/MicOff';
// import CachedIcon from '@mui/icons-material/Cached';



// class JitsiComponent extends Component {
       
//     domain = `jitsi.jyotisya.ai`;
//     api = {};
  
//     constructor(props) {
//         super(props);
//         this.state = {
//             room: 'Jyotisya',
//             user: {
//                 name: ''
//             }, 
//             isAudioMuted: true,
//             isVideoMuted: false,
//             isModerator: null,

//             initiated_at:null,
//             call_initiated_by:'',
//             hangup_by:'',
//             hangup_at:'',
//             call_duration_actual:null,
//             event_name:'',
//             data:null,
//            }
//     }

//     startMeet = () => {
//         const userLink=window.location.href.split('/');
//         const roomName=userLink[5];
//         if(userLink[4]==='agent'){
//             this.setState({isModerator:userLink[4]});
//         }
//         else{
//             this.setState({isModerator:'user'});
//         }
       
        
//         const options = {
//             roomName,
//             width: '100%',
//             height: 600,  
            
//             configOverwrite: { 
//                 prejoinPageEnabled: true ,
//                filmStripOnly:true,
//             },
            
//             interfaceConfigOverwrite: {
//                 // overwrite interface properties
//                 TOOLBAR_BUTTONS: [],
               
//                 SHOW_JITSI_WATERMARK: false,
//                 TOOLBAR_ALWAYS_VISIBLE: false,
//                 DEFAULT_REMOTE_DISPLAY_NAME: 'Me',
//                 filmStripOnly: true,
                
                
//             },
//             parentNode: document.querySelector('#jitsi-iframe'),
//             userInfo: {
//                 displayName: this.state.user.name
//             }
            
//         }
//         this.api = new window.JitsiMeetExternalAPI(this.domain, options);
//         // console.log({new:this.api})
//         this.api.addEventListeners({
//             readyToClose: this.handleClose,
//             participantLeft: this.handleParticipantLeft,
//             participantJoined: this.handleParticipantJoined,
//             videoConferenceJoined: this.handleVideoConferenceJoined,
//             videoConferenceLeft: this.handleVideoConferenceLeft,
//             audioMuteStatusChanged: this.handleMuteStatus,
//             videoMuteStatusChanged: this.handleVideoStatus,
//             participantRoleChanged: this.handleParticipantRoleChanged,
//             filmstripDisplayChanged:this.filmstripDisplayChanged,
//         });
//         this.api.executeCommand( 'toggleFilmStrip' );  
//         // this.api.getRoomsInfo().then(rooms => {
//         //     console.log(rooms);
//         // })
        

//     }
   

//     handleClose = () => {
//         console.log("handleClose");
//     }

//     handleParticipantLeft = async (participant) => {
//         console.log("handleParticipantLeft", participant); // { id: "2baa184e" }
//         const data = await this.getParticipants();
//     }

//     handleParticipantJoined = async (participant) => {
//         console.log("handleParticipantJoined", participant);    // { id: "2baa184e", displayName: "Shanu Verma", formattedDisplayName: "Shanu Verma" }
//         const data = await this.getParticipants();
//         console.warn(data);
//     }

//     handleVideoConferenceJoined = async (participant) => {
//         // console.log("handleVideoConferenceJoined", participant); // { roomName: "bwb-bfqi-vmh", id: "8c35a951", displayName: "Akash Verma", formattedDisplayName: "Akash Verma (me)"}
//         const data = await this.getParticipants();
//     }

//     handleVideoConferenceLeft = () => {
//         // console.log("handleVideoConferenceLeft");
//         return this.props.history.push('/thank-you');
//     }

//     handleMuteStatus = (audio) => {
//         // console.log("handleMuteStatus", audio); // { muted: true }
//     }

//     handleVideoStatus = (video) => {
//         // console.log("handleVideoStatus", video); // { muted: true }
//     }

//     handleParticipantRoleChanged = (event) => {
//     console.log("handleParticipantRoleChanged", event); // { id: "2baa184e", role: "moderator" }
//     const { id, role } = event;
//     // if(role==="moderator"){
//     //     this.setState(({isModerator: true}));
       
//     // }
// }

//     filmstripDisplayChanged=(event)=>{
//         // console.log("filmstripDisplayChanged",event)
//     }


//     getParticipants() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(this.api.getParticipantsInfo()); // get all participants
//             }, 500)
//         });
//     }
    

    
//     // custom event
//     executeCommand(command) {
        
//         this.api.executeCommand(command);;
//         if(command == 'hangup') {
//             return this.props.history.push('/thank-you');
//         }

//         if(command == 'toggleAudio') {
//             this.setState({ isAudioMuted: !this.state.isAudioMuted });
//         }

//         if(command == 'toggleVideo') {
//             this.setState({ isVideoMuted: !this.state.isVideoMuted });
//         }
        
       
        
//     }

//     componentDidMount() {
       
//         if (window.JitsiMeetExternalAPI) {
           
//             this.startMeet();
//         } else {
//             alert('JitsiMeetExternalAPI not loaded');
//         }
//     }

//     render() {
//         const { isAudioMuted, isVideoMuted,isModerator } = this.state;
//         console.log(isModerator);
//         // console.log(this.state.room);
//         return (
//             <div className='jitse'>
          
//             <div className='item-center' id="jitsi-iframe">
                
//             <div className="extend-call">
                
            
//                    {this.state.isModerator==='agent'?<button className='extend-btn'> <AddIcCallIcon /> Extend Call </button>:''}
//                </div>
//                <div className="other">
//                   <button onClick={ () => this.executeCommand('hangup') }  className='extend-btn call-end'><CallEndIcon/></button>
//                   <button  className='extend-btn camera-roll' onClick={ () => this.executeCommand('toggleVideo') }><CachedIcon /></button>
//                    <button className='extend-btn camera-roll' onClick={ () => this.executeCommand('toggleAudio')}>{isAudioMuted?<MicIcon/> : <MicOffIcon/>}</button>
                 
//                </div>   

//             </div>

//             </div>
//         );
//     }
// }

// export default JitsiComponent;


import React, { useEffect, useState } from "react";
import "./jitsi.css";

import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import CallEndIcon from "@mui/icons-material/CallEnd";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import CachedIcon from "@mui/icons-material/Cached";
import axios from "axios";  


const Jitsi = () => {

  const domain = "jitsi.jyotisya.ai";
  const [audio, setAudio] = useState(true);
  const [video, setVideo] = useState(true);

  const [api, setApi] = useState();
  const [isModerator, setIsModerator] = useState(null);
  const [room, setRoom] = useState("");

  //capture Events
  const [initiated_at, setInitiated_at] = useState(null);
  const [call_initiated_by, setCall_initiated_by] = useState("");
  const [hangup_by, setHangup_by] = useState("");
  const [hangup_at, setHangup_at] = useState("");
  const [call_duration_actual, setCall_duration_actual] = useState(null);
  const [event_name, setEvent_name] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    // console.log(window.location.href);
    const userLink = window.location.href.split("/");
    console.log(userLink);
    setRoom(userLink[5]);
    if (userLink[4] === "agent") {
      setIsModerator(userLink[4]);
      setCall_initiated_by("agent");
    } else {
      setIsModerator("user");
      setCall_initiated_by("user");
    }
    // console.log(roomName);
    const options = {
      roomName: room,
      width: "100%",
      height: 600,
      parentNode: document.querySelector("#jitsi-iframe"),

      configOverwrite: {
        filmStripOnly: false,
      },
      interfaceConfigOverwrite: {
        DEFAULT_REMOTE_DISPLAY_NAME: "Participant",
        DEFAULT_LOCAL_DISPLAY_NAME: "Me",
        SHOW_JITSI_WATERMARK: false,
        HIDE_DEEP_LINKING_LOGO: true,
        SHOW_BRAND_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        SHOW_POWERED_BY: false,
        TOOLBAR_BUTTONS: [],
        DISABLE_FOCUS_INDICATOR: true,
      },
      lang: "en",
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);
    const date = new Date(); // Replace this with your own Date object
    const timestamp = date.toISOString().replace("T", " ").replace("Z", "");
    setInitiated_at(timestamp);
    console.log(api);

    const getParticipants = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(api.getParticipantsInfo()); // get all participants
        }, 500);
      });
    };

    const handleClose = (participant) => {
        console.log(participant);
      console.log("handleClose");
      const date = new Date(); // Replace this with your own Date object
      const timestamp = date.toISOString().replace("T", " ").replace("Z", "");
      setHangup_at(timestamp);

      setEvent_name("hangup");
      setData(participant);
      //calculate time duration

      if (hangup_at !== null && initiated_at !== null) {
        // console.log(hangup_at, initiated_at);
        // console.log({hangup_at:hangup_at});
        // console.log({initiated_at:initiated_at});
        const timeDurationInMilliseconds = Math.floor(hangup_at - initiated_at);
        const timeDurationInSeconds =
          timeDurationInMilliseconds / (1000 * 3600 * 24);
        console.log(timeDurationInSeconds);
        setCall_duration_actual(timeDurationInSeconds);
      }
    };
    const handleParticipantLeft = async (participant) => {
      console.log("handleParticipantLeft", participant); // { id: "2baa184e" }
    
      setEvent_name("ParticipantLeft");
      setData(participant);
      const data = await getParticipants();
    };

    const handleParticipantJoined = async (participant) => {
      console.log("handleParticipantJoined", participant); // { id: "2baa184e", displayName: "Shanu Verma", formattedDisplayName: "Shanu Verma" }
      const data = await getParticipants();
      console.warn(data);

      setEvent_name("ParticipantJoined");
      setData(participant);
    };

    const handleVideoConferenceJoined = async (participant) => {
      console.log("handleVideoConferenceJoined", participant); // { roomName: "bwb-bfqi-vmh", id: "8c35a951", displayName: "Akash Verma", formattedDisplayName: "Akash Verma (me)"}
      setEvent_name("VideoConferenceJoined");
      setData(participant);
      const data = await getParticipants();
    };

    const handleVideoConferenceLeft = (participant) => {
      // console.log("handleVideoConferenceLeft");
      // return this.props.history.push('/thank-you');
      setEvent_name("VideoConferenceLeft");
      setData(participant);
    };

    const handleMuteStatus = (audio) => {
      console.log("handleMuteStatus", audio); // { muted: true }
      setEvent_name("audio");
      setData(audio);
    };

    const handleVideoStatus = (video) => {
      console.log("handleVideoStatus", video); // { muted: true }
      setEvent_name("video");
      setData(video);
    };

    const handleParticipantRoleChanged = (event) => {
      // console.log("handleParticipantRoleChanged", event); // { id: "2baa184e", role: "moderator" }
      const { id, role } = event;
      // if(role==="moderator"){
      //     this.setState(({isModerator: true}));

      // }
    };

    const filmstripDisplayChanged = (event) => {
      // console.log("filmstripDisplayChanged",event)
    };

    api.addEventListeners({
      readyToClose: handleClose,
      participantLeft: handleParticipantLeft,
      participantJoined: handleParticipantJoined,
      videoConferenceJoined: handleVideoConferenceJoined,
      videoConferenceLeft: handleVideoConferenceLeft,
      audioMuteStatusChanged: handleMuteStatus,
      videoMuteStatusChanged: handleVideoStatus,
      participantRoleChanged: handleParticipantRoleChanged,
      filmstripDisplayChanged: filmstripDisplayChanged,
    });
    setApi(api);

    return () => {
      api.dispose();
    };
  }, [isModerator]);

  // console.log(initiated_at);
  // console.log(call_initiated_by);
  // console.log(hangup_at);
  // console.log(call_duration_actual);
  console.log(data);

  // useEffect(()=>{
  //   const meetStartData=async()=>{
  //     const meetData = {
  //       agent_id:'123',
  //       meeting_id:room

  //     }
  //     try {
  //       const data = await axios.post(`http://localhost:9999/Jitsi`,meetData);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     meetStartData();
  //   }
  // },[]);
  // useEffect(() => {
  //   const catchEvent = async () => {
  //     const events = {
  //       meeting_id: room,
  //       agent_id: "123",
  //       user_id: "234",
  //       call_type: "video",
  //       initiated_at: initiated_at,
  //       call_initiated_by: call_initiated_by,
  //       hangup_at: hangup_at,
  //       jitsi_event: {
  //         meeting_id: room,
  //         event_name: event_name,
  //         data: data,
  //       },
  //     };
  //     try {
  //       const res = await axios.post(`http://localhost:9999/Jitsi/`, events);
  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   catchEvent();
  // }, [audio, video, hangup_at,data]);

  const executeCommands = (command) => {
    api.executeCommand("toggleFilmStrip");
    api.executeCommand(command);

    if (command === "hangup") {
      // return this.props.history.push('/thank-you');
    }

    if (command === "toggleAudio") {
      setAudio((prev) => !prev);
    }

    if (command === "toggleVideo") {
      setVideo((prev) => !prev);
    }
  };
  return (
    <div className="Jitsi">
      <div className="item-center" id="jitsi-iframe">
        <div className="extend-call">
          {isModerator === "agent" ? (
            <button className="extend-btn">
              {" "}
              <AddIcCallIcon /> Extend Call{" "}
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="other">
          <button
            onClick={() => executeCommands("hangup")}
            className="extend-btn call-end"
          >
            <CallEndIcon />
          </button>
          <button
            className="extend-btn camera-roll"
            onClick={() => executeCommands("toggleVideo")}
          >
            <CachedIcon />
          </button>
          <button
            className="extend-btn camera-roll"
            onClick={() => executeCommands("toggleAudio")}
          >
            {audio ? <MicIcon /> : <MicOffIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jitsi;
