import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

import { createBem } from "~/bem";
import "./Card.scss";
import { BufferIcon, MuteIcon, VolumeIcon, ErrorIcon } from "~/assets/images";

interface CardProps {
  id: string;
  ref: React.RefObject<HTMLDivElement>;
  audioId?: string;
  iconColour?: string;
  content: React.ReactNode;
}

const bem = createBem("Card");

const Card = ({
  id,
  ref,
  audioId,
  iconColour = "#fff",
  content,
}: CardProps) => {
  const [playing, setPlaying] = useState(false);
  const [icon, setAudioIcon] = useState("buffer");

  return (
    <div
      id={id}
      className={bem()}
      ref={ref}
      onMouseOver={() => setPlaying(true)}
      onMouseLeave={() => setPlaying(false)}
      onClick={() => setPlaying(!playing)}
    >
      {audioId && (
        <>
          <ReactPlayer
            className={bem("audio")}
            url={`https://www.youtube.com/watch?v=${audioId}`}
            loop
            playing={playing}
            onBuffer={() => setAudioIcon("buffer")}
            onPlay={() => setAudioIcon("playing")}
            onPause={() => setAudioIcon("mute")}
            onError={() => setAudioIcon("error")}
            width="0px"
            height="0px"
          />
          <div className={bem("audioIcon")}>
            {icon === "buffer" && <BufferIcon iconColour={iconColour} />}
            {icon === "mute" && <MuteIcon iconColour={iconColour} />}
            {icon === "playing" && <VolumeIcon iconColour={iconColour} />}
            {icon === "error" && <ErrorIcon iconColour={iconColour} />}
          </div>
        </>
      )}
      {content}
    </div>
  );
};

export default Card;
