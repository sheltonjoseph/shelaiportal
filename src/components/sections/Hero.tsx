import { styles } from "../../constants/styles";
import React, { useEffect, useRef } from "react";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import audioFile from "../../assets/background-music.mp3";

const Hero = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          // Attempt to play audio directly
          await audioRef.current.play();
          console.log("Audio playback started successfully");
        }
      } catch (error) {
        console.error("Autoplay blocked by browser:", error);
      }
    };

    playAudio();
  }, []);

  return (
    <section className="relative mx-auto h-screen w-full flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center w-full">
        {/* Text Section */}
        <div className="flex flex-col items-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
        </div>

        {/* Canvas Section */}
        <div className="h-[400px] w-[400px] md:h-[600px] md:w-[750px]">
          <ComputersCanvas />
          <audio ref={audioRef} src={audioFile} preload="auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
