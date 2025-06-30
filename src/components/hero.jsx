import pfp from "/Users/user/Documents/React-portfolio/src/assets/IMG_6206.jpg"
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'> 
            <div className='flex flex-col items-center lg:items-start'>
                <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16">
                    Mohammed Abrar
                </h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    Full Stack Developer
                </span>
                <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                Pursuing a B.Tech in Computer Science Engineering and a B.Sc. in AIML. Passionate about programming, I continuously seek challenges to refine my skills and excel in software development. As a Full Stack Developer, I specialize in building scalable web applications using the latest technologies.
                </p>
            </div>

            </div>
            <div className="w-full lg:w-1/2 lg:p-8" > 
                <div className="flex justify-center">
                    <img className='rounded-full' src={pfp}></img>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Hero
