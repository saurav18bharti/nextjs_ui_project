"use client";
import React, { useEffect, useRef, useState } from "react";
import back from "../../assets/videoicon/back.svg";
import play from "../../assets/videoicon/play.svg";
import forward from "../../assets/videoicon/forward.svg";
import timing from "../../assets/videoicon/timing.svg";
import sound from "../../assets/videoicon/sound.svg";
import setting from "../../assets/videoicon/setting.svg";
import resizer from "../../assets/videoicon/resizer.svg";
import pause from "../../assets/videoicon/pause.svg";
import soundcontrol from "../../assets/videoicon/soundcontrol.svg";
import circle25 from "../../assets/videoicon/circle25.svg";
import dropdown from "../../assets/videoicon/dropdown.svg";
import Image from "next/image";
import aprendadata from "../video/aprenda.json";
import "./videoplayer.css";

///react-icons
import { IoStop } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import { PiSpeakerSimpleXFill } from "react-icons/pi";

//progress bar

import { normalize } from "path";
import { CircularProgress, Progress } from "@nextui-org/progress";

const VideoPlayerDesign = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLVideoElement>(null);
  const [playstop, setPlayStop] = useState<boolean>(true);
  const [controlSound, setControlSound] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currenttime, setCurrentTime] = useState<string>("0:00");
  const [durationTime, setDurationTime] = useState<string>("0:00");
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const playVideo = () => {
    if (videoRef.current && playstop) {
      videoRef.current.play();
      setPlayStop(false);
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setPlayStop(true);
    }
  };

  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setControlSound(!controlSound);
    }
  };

  const adjustVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      videoRef.current.volume = Number(e.target.value);
    }
    if (Number(e.target.value) === 0) {
      setControlSound(false);
    } else {
      setControlSound(true);
    }
  };

  const controlProgressBar = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
      setCurrentTime(formatTime(videoRef.current.currentTime).toString());

      if (videoRef.current.currentTime == videoRef.current.duration) {
        setPlayStop(true);
      }
    }
  };

  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressBarRef.current;
    const videoElement = videoRef.current;

    if (progressBar && videoElement) {
      const rect = progressBar.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const newTime = (offsetX / rect.width) * videoElement.duration;
      videoElement.currentTime = newTime;
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      setDurationTime(formatTime(videoRef.current.duration).toString());
      videoElement.addEventListener("timeupdate", controlProgressBar);

      return () => {
        videoElement.removeEventListener("timeupdate", controlProgressBar);
      };
    }
  }, []);

  return (
    <div className="main_container_video_player mx-80 mt-4  ">
      <div className=" flex gap-3 justify-center items-center">
        <div className=" bg-video_controller_color border-[2px] border-solid border-black border-opacity-45 p-3 flex-grow">
          <div className="player flex items-center justify-center cursor-pointer ">
            <video ref={videoRef} width={750} className="flex-grow">
              <source src="/videos/video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="multiple_player_icon flex items-center justify-between w-video_controller_width pt-1 ">
            <div className="control_button flex gap-3 flex-grow justify-center">
              <Image
                src={back}
                alt="back"
                className="text-[14px] cursor-pointer"
                onClick={skipBackward}
              />
              {playstop ? (
                <FaPlay
                  onClick={playVideo}
                  className="text-[15px] cursor-pointer text-white"
                />
              ) : (
                <IoStop
                  onClick={pauseVideo}
                  className="text-[15px] text-white cursor-pointer"
                />
              )}
              <Image
                src={forward}
                alt="forward"
                className="text-[14px] cursor-pointer"
                onClick={skipForward}
              />
            </div>
            <div className="timing flex justify-center items-center gap-3 flex-grow">
              <p className="text-[14px] text-white">{currenttime}</p>
              <Progress
                className="w-72 h-2 cursor-pointer"
                value={progress}
                color="danger"
                onClick={handleProgressClick}
                ref={progressBarRef}
              />
              <p className="text-[14px] text-white">{durationTime}</p>
            </div>
            <div className="sound flex justify-center items-center gap-3 flex-grow">
              {controlSound ? (
                <PiSpeakerSimpleHighFill
                  onClick={toggleMute}
                  className="text-[15px] text-white cursor-pointer"
                />
              ) : (
                <PiSpeakerSimpleXFill
                  onClick={toggleMute}
                  className="text-[15px] text-white cursor-pointer"
                />
              )}

              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                onChange={adjustVolume}
                style={{ width: "100px" }}
                className="custom-range accent-white cursor-pointer"
              />
            </div>
            <div className="setting flex gap-3 flex-grow items-center justify-center">
              <Image
                src={setting}
                alt="setting"
                className="text-[14px] cursor-pointer"
              />
              <Image
                src={resizer}
                alt="resizer"
                className="text-[14px] cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="aprenda h-aprenda_height w-aprenda_width bg-video_controller_color flex-grow">
          <div className="aprenda_a_programmer bg-aprenda_a_programmer px-3 py-3 flex items-center justify-between">
            <div className="aprenda_a_programmr_text flex items-center gap-3">
            <CircularProgress
          classNames={{
            svg: "w-20 h-20 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-[14px] text-white",
          }}
          value={70}
          strokeWidth={3}
          showValueLabel={true}
        />
              <div className="aprenda_a_programmer_text_2 text-[17px] text-aprenda_text_color font-normal ">
                <p className="text-[14px]">Aprenda a programar</p>
                <span className="flex gap-2 text-[14px]">
                  <p>1/4</p>
                  <p>•</p>
                  <p>27min</p>
                </span>
              </div>
            </div>
            <Image src={dropdown} alt="dropdown" width={14} className="ml-16" />
          </div>
          <div>
            {aprendadata.map((content) => (
              <div
                key={content.id}
                className=" content_list flex justify-between px-4 py-4 text-aprenda_text_color text-[14px] cursor-pointer "
              >
                <div className="flex items-center  gap-3 flex-grow ">
                 <FaPlay/>
                  {content.id}
                  {".  "}
                   {content.video_name}
                </div>
                <p className="flex-grow text-end ">{content.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="description mt-8 p-4 text-white">
        <p className="pl-8 text-[14px]">Description</p>
        <div className="flex justify-center mt-2 ">
          <p className="border border-pink_color w-40 h-0"></p>
          <p className=" border-gray-600 w-full  border-b-[1px]"></p>
        </div>
        <p className="pt-8 text=[14px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet et
          doloribus modi impedit perspiciatis sequi laborum, praesentium numquam
          voluptatem, explicabo repudiandae cum dicta aliquid nesciunt nihil.
          Eaque veniam nam veritatis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nam, impedit in quidem sed itaque id modi dicta
          reiciendis delectus odit eveniet culpa suscipit laudantium expedita
          neque quibusdam labore! Cumque, officiis.
        </p>
      </div>
    </div>
  );
};

export default VideoPlayerDesign;
