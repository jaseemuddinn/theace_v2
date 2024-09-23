import React from 'react'

function HomeAbout() {
  return (
    <div>
      <div className='relative lg:mt-10 mt-12 lg:flex items-center justify-center gap-12 m-4'>
      <div className='md:relative p-4'>
          <img
            className='rounded-xl h-auto w-full object-cover lg:-mr-16 z-10'
            src="http://placeholder.com/1000x800"
            alt="Image description"
          />
        </div>
        <div className='lg:w-4/5 bg-[#fffaf0] rounded-xl lg:p-10 p-4 relative lg:z-20 lg:-ml-[15%]'>
          <span className='font-bold lg:text-7xl text-3xl md:text-5xl font-Montserrat'>UNLOCK YOUR POTENTIAL</span><br />
          <span className='text-justify text-lg font-Montserrat font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dicta, necessitatibus rem quibusdam quis sint illo fuga aut nesciunt molestiae eaque aliquid fugiat amet dignissimos temporibus facilis minima, esse iusto!
            Harum doloribus necessitatibus distinctio.
          </span>
        </div>
      </div>
      <div className="lg:relative p-8">
        <div className="">
          <img
            className="h-auto w-full object-cover rounded-xl z-10"
            src="http://placeholder.com/800x200"
            alt="Image description"
          />
        </div>
        <div className="bg-[#fffaf0] rounded-xl px-4 py-4 lg:px-10 lg:py-6 lg:absolute lg:-mt-20 lg:left-20 lg:bottom-0 z-20 font-Montserrat">
          <p className="text-start text-lg font-medium">
            <span className="font-semibold text-3xl">Become a <span className='text-[#4b4da0]'>Student Ambassador</span></span> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur labore explicabo quam. Rerum explicabo, perferendis magnam eius eos aspernatur ipsa delectus hic sed ratione earum pariatur ducimus! Maiores, quam et?
          </p>
          <button className='px-20 mt-2 py-2 bg-[#4b4da0] text-white rounded-lg text-lg'>
            Apply Now
          </button>
        </div>
        
      </div>

    </div>


  )
}

export default HomeAbout