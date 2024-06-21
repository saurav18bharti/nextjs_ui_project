"use client"
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
type AppContextT = {
  id: number;
  setId: Dispatch<SetStateAction<number>>;
  playstopvideo:boolean;
  setPlayStopVideo:Dispatch<SetStateAction<boolean>>;
  videoList:{id:number,src:string,video_name:string,time:string}[];
  setVideoList:(list:{id:number,src:string,video_name:string,time:string}[])=>any;
  currentVideoIndex:number;
  setCurrentVideoIndex:(index:number)=>void;
  playNextVideo:()=>void;
};

 const AppContext = createContext({} as AppContextT );

type AppContextProviderProps = {
  children: ReactNode;
};

export const VideoPlayerProvider = ({ children }: AppContextProviderProps) => {
  const [id, setId] = useState<number>(0);
  const [currentVideoIndex,setCurrentVideoIndex]=useState<number>(0);
  const[videoList,setVideoList]=useState<{id:number,src:string,video_name:string,time:string}[]>([]);
  const [playstopvideo,setPlayStopVideo]=useState<boolean>(true);

  const playNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % videoList.length;
      setId(videoList[nextIndex].id);
      return nextIndex;
    });
    setPlayStopVideo(false);
    
  };

  return (
    <AppContext.Provider value={{ id, setId ,videoList, setVideoList, currentVideoIndex, setCurrentVideoIndex, playNextVideo,playstopvideo,setPlayStopVideo}}>{children}</AppContext.Provider>
  );
};

export function useAppContext(){
  return useContext(AppContext);
}