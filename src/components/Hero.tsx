import Image from "next/image";

// ponder una foto de perfil mirando al frente

const Hero = (): JSX.Element => {
  return (
    <div className="h-screen text-white flex flex-col justify-center items-center bg-slate-950">
      <div className="flex gap-36 items-center mx-52">
        <div className="flex flex-col gap-5">
          <div className="font-mono text-lg text-emerald-400">
            Hello, my name is
          </div>
          <div className="font-sans text-7xl font-extrabold">
            Alexander Filsecker.
          </div>
          <div className="font-sans text-slate-500 text-5xl">
            A Full Stack Developer
          </div>
          <div className="text-gray-300 mt-4">
            I am a software engineer dedicated to perfection and yada añlskdjfla
            asdflñasd asñdlkfjñas dasñlkdjf asñdlkfjaslñkdjf asñlkdjfñaskljdff
            asdñllkfjaslñdkfj añsldkjfñalskdjf asdñlfkja sdñlfkj asdfñlk
            asdñfkfl j
          </div>
        </div>
        <Image
          alt="Profile Picture"
          src="/images/alex-profile.png"
          width={1500}
          height={1000}
          className="border-4 rounded-full border-emerald-400 bg-slate-900"
        />
      </div>
    </div>
  );
};

export default Hero;
