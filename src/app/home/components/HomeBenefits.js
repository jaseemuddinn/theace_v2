import React from 'react'

function HomeBenefits() {
    return (
        <div className='mt-10 p-4 font-Montserrat'>
            <div className='text-3xl md:text-6xl font-bold text-center'>
                Why You Should Join
            </div>
            <div className='mt-6 flex flex-wrap justify-center font-semibold cursor-default'>
                {[
                    { title: "Career Opportunities", description: "Explore various career paths and find the right opportunity for you." },
                    { title: "Career Development", description: "Enhance your skills and knowledge to advance your career." },
                    { title: "Personal Growth", description: "Focus on self-improvement and achieve your goals" },
                    { title: "Leadership Skills", description: "Develop essential skills to lead and inspire others and what else." },
                ].map((item, index) => (
                    <div key={index} className="relative h-96 w-96 lg:h-80 lg:w-80 text-center text-xl overflow-hidden border border-gray-300 transition-all duration-300 group hover:border-none hover:shadow-sm">
                        <div className="absolute top-0 left-0 h-5 w-5 border-t border-l border-[#4b4da0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-0 right-0 h-5 w-5 border-t border-r border-[#4b4da0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-[#4b4da0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-[#4b4da0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className={`h-full flex flex-col items-center justify-center transition-transform duration-300 transform group-hover:translate-y-[-15px]`}>
                            <div className={`transition-transform text-4xl px-4 duration-300 group-hover:translate-y-[-10px]`}>
                                {item.title}
                            </div>
                            <div className={`mt-2 lg:px-10 text-xl lg:text-lg lg:opacity-0 opacity-100 transform scale-75 transition-opacity duration-300 lg:group-hover:opacity-100 group-hover:scale-100`}>
                                {item.description}
                            </div>
                        </div>
                    </div>
                ))}


            </div>

        </div>
    )
}

export default HomeBenefits