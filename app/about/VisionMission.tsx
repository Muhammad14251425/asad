import vision from "@/public/vision.jpg"
import mission from "@/public/Mission.jpeg"
import visiontruck from "@/public/vision-truck.jpg"
import missioLogo from "@/public/missionLogo.png"
import Image from 'next/image'

const VisionMission = () => {
    return (
        <div>
            {/* Vision Section */}
            <div className="flex flex-col lg:flex-row items-start w-full px-2 lg:px-0 my-10">
                <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-4">
                        <h2 className='text-3xl sm:text-4xl lg:text-6xl font-semibold px-2'>Our Vision</h2>
                        <Image priority src={vision} alt='vision' className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full" />
                    </div>
                    <p className="px-4 text-base sm:text-lg lg:text-xl tracking-widest font-semibold font-sans mt-4">
                        Working towards <span className="text-green-400 font-bold">revolutionizing</span> and disrupting the logistics industry in Pakistan through <span className="text-blue-800 font-bold">technology</span> and <span className="text-blue-800 font-bold">services</span>, we are <span className="font-bold">penetrating the industry via digitalization of transport services</span>, ensuring <span className="font-bold text-orange-500">absolute excellence</span>.
                    </p>
                </div>
                <Image priority src={visiontruck} alt="truck" className="flex-shrink h-60 sm:h-72 lg:h-80 w-auto rounded-md mt-6 lg:mt-0" />
            </div>

            {/* Mission Section */}
            <div className="flex flex-col lg:flex-row-reverse items-start gap-7 w-full lg:px-0 px-2 mt-10">
                <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-4">
                        <h2 className='text-3xl sm:text-4xl lg:text-6xl font-semibold px-2'>Our Mission</h2>
                        <Image priority src={missioLogo} alt='mission' className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-20 rounded-full" />
                    </div>
                    <p className="px-4 text-base sm:text-lg lg:text-xl tracking-widest mt-4 font-semibold">
                        To ensure absolute excellence in transport services, we are integrating
                        <span className="text-blue-500 font-bold"> Phase 1</span> stage, allowing our clients with
                        <span className="text-green-500 font-bold"> transparency</span> in
                        <span className="text-purple-500 font-bold"> real-time access</span> and
                        <span className="text-yellow-500 font-bold"> updates</span> of their dispatches.
                        <span className="text-blue-500 font-bold"> Phase 2</span> will lead our clients to a
                        <span className="text-orange-500 font-bold"> completely optimized supply chain system</span>, allowing them
                        <span className="text-purple-500 font-bold"> direct access</span> to their dispatches and
                        <span className="text-red-500 font-bold"> removal of unnecessary intermediaries</span> from the process.
                    </p>
                </div>
                <Image priority src={mission} alt="truck" className="flex-shrink h-60 sm:h-72 lg:h-80 w-auto rounded-md mt-6 lg:mt-0" />
            </div>
        </div>

    )
}

export default VisionMission