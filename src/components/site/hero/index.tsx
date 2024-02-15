
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col '>
      {/* grid */}

      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10' />

      <div className='md:mt-[400px] mt-[200px]'>
        <p className='text-center'>Run your orginization, in one place</p>
        <div className='bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative'>
          <h1 className='text-9xl font-bold text-center md:text-[200px]'>
            Vyntrua
          </h1>
        </div>
      </div>
      <div className='flex justify-center items-center relative md:mt-[-70px]'>
        <Image
          src={'/assets/preview.png'}
          alt='banner image'
          height={1200}
          width={1200}
          className='rounded-tl-2xl rounded-tr-2xl border-2 border-muted'
        />
        <div className='bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10'></div>
      </div>
    </section>
  );
};

export default Hero;
