import React from "react";
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
import './videoplayer.css'

const VideoPlayerDesign = () => {
  return (
    <div className="main_container_video_player mx-80 mt-4  ">
        <div className=" flex gap-3 justify-center items-center">    
      <div className=" bg-video_controller_color border-[2px] border-solid border-black border-opacity-45 p-4 ">
        <div className="player h-video_height flex items-center justify-center ">
          <Image src={pause} alt="pause" />
        </div>
        <div className="multiple_player_icon flex items-center justify-between w-video_controller_width  ">
          <div className="control_button flex gap-3">
            <Image src={back} alt="back" width={14} />
            <Image src={play} alt="play" width={14} />
            <Image src={forward} alt="forward" width={14} />
          </div>
          <div className="timing flex justify-center items-center gap-3">
            <p className="text-[10px] text-white">01:05</p>
            <Image
              className="text-center"
              src={timing}
              alt="timing"
              width={100}
              height={100}
            />
            <p className="text-[10px] text-white">02:32</p>
          </div>
          <div className="sound flex justify-center items-center gap-3">
            <Image src={sound} alt="sound" width={14} />
            <Image src={soundcontrol} alt="sound_control" width={50} />
          </div>
          <div className="setting flex gap-3">
            <Image src={setting} alt="setting" width={18} />
            <Image src={resizer} alt="resizer" width={14} />
          </div>
        </div>
      </div>
      <div className="aprenda h-aprenda_height w-aprenda_width bg-video_controller_color">
        <div className="aprenda_a_programmer bg-aprenda_a_programmer pl-3 py-3 flex items-center justify-between">
          <div className="aprenda_a_programmr_text flex items-center gap-3">
            <Image
              className="w-20 p-2"
              src={circle25}
              alt="resizer"
              width={14}
            />
            <div className="aprenda_a_programmer_text_2 text-[17px] text-aprenda_text_color font-normal">
              <p>Aprenda a programar</p>
              <span className="flex gap-2">
                <p>1/4</p>
                <p>•</p>
                <p>27min</p>
              </span>
            </div>
          </div>
          <Image src={dropdown} alt="dropdown" width={20} className="ml-16" />
          <div></div>
        </div>
        <div>
          {aprendadata.map((content) => (
            <div key={content.id} className=" content_list flex justify-between px-4 py-4 text-aprenda_text_color text-[12px] ">
              <div>
                <input type="checkbox" name="vehicle1" value="Bike" className="mr-4 "/>
                {content.id }{"."}
                <label> {content.video_name}</label>
              </div>
              {content.time}
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className="description mt-8 p-4 text-white">
        <p className="pl-8">Description</p>
        <div className="flex justify-center mt-2 ">
            <p className="border border-pink-700 w-40 h-0"></p>
            <p className=" border-gray-600 w-full  border-b-[1px]"></p>
        </div>
        <p className="pt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet et doloribus modi impedit perspiciatis sequi laborum, praesentium numquam voluptatem, explicabo repudiandae cum dicta aliquid nesciunt nihil. Eaque veniam nam veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, impedit in quidem sed itaque id modi dicta reiciendis delectus odit eveniet culpa suscipit laudantium expedita neque quibusdam labore! Cumque, officiis.</p>
      </div>
    </div>
  );
};

export default VideoPlayerDesign;
