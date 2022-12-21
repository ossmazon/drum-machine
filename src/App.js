import "./App.css";
import React, { useEffect, useState } from "react";

const FirstAudioCLips = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];
const SecondAudioClips = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const soundsName = {
  heaterKit: "Heater Kit",
  smoothPianoKit: "Smooth Piano Kit",
};
const soundGroup = {
  heaterKit: FirstAudioCLips,
  smoothPianoKit: SecondAudioClips,
};

const KeyboardKey = ({ play, sound: {id, keyTrigger, keyCode, url } }) => {
  const handlekeydown = (event) => {
    if (event.keyCode === keyCode) play(keyTrigger,id);
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handlekeydown);
  }, []);

  return (
    <div className="col-md-4 col-6 mb-5 ">
      <button
        className="drum-pad btn btn-primary  "
        id={keyCode}
        onClick={() => play(keyTrigger, id)}
      >
        <audio className="clip" id={keyTrigger} src={url} />
        {keyTrigger}
      </button>
    </div>
  );
};

const KeyboardEvent = ({ play, sounds }) => {
  return sounds.map((sound) => <KeyboardKey play={play} sound={sound} />);
};

const DumControle = ({ name, changeSoundsGroup }) => (
  
  <div className="controle row justify-content-center " >
    
     <div className="row">
    <h2 id="display" className="text-center">{name}</h2>
    
    </div>
    <div className="row">
    
    <button className="alert alert-warning" onClick={changeSoundsGroup}>
      Change Sounds Group
    </button>
    </div>
   
  </div>
  
  
  
);

function App() {
  const [soundName, setSoundName] = React.useState("");
  const [soundType, setSoundType] = React.useState("heaterKit");
  const [sounds, setSounds] = React.useState(soundGroup[soundType]);

  const play = (keyTrigger,sound) => {
    setSoundName(sound)
    const audio = document.getElementById(keyTrigger);
    audio.currentTime = 0;
    audio.play();
  };

  const changeSoundsGroup = () => {
    setSoundName("")
    if (soundType === "heaterKit") {
      setSoundType("smoothPianoKit");
      setSounds(soundGroup.smoothPianoKit);
    } else {
      setSoundType("heaterKit");
      setSounds(soundGroup.heaterKit);
    }
  };

  return (
    <div className="bg-secondary min-vh-100 text-white">
      <div className=" text-white container p-5 " id="drum-machine">
        <div className="container">
          <h2 className="mb-5 text-center">Drum machine</h2>
          <div className="row">
            <div className="col-md-6">
              <div
                className="text-center row justify-content-center "
                
              >
                <KeyboardEvent play={play} sounds={sounds} />
              </div>
            </div>
            <div className="col-md-6" >
              <div className="row justify-content-center " >
              <DumControle  name={soundName || soundsName[soundType]} changeSoundsGroup={changeSoundsGroup} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
