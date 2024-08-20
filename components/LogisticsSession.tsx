import Image from 'next/image';
import React from 'react';

const LogisticsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-20 sm:max-w-[500px] md:max-w-[700px] 992:max-w-[965px] 1098:max-w-[1080px] md:mt-40 max-w-7xl mx-auto px-4">
      <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
        <h2 className="text-2xl font-bold border-l-4 border-black pl-4 mb-4">Efficient Transportation</h2>
        <p className="mb-8">
          Our logistics company provides efficient transportation services through trains and trucks to ensure timely delivery of goods.
        </p>
        
        <h2 className="text-2xl font-bold border-l-4 border-black pl-4 mb-4">Secure Handling</h2>
        <p className="mb-8">
          We prioritize secure handling of all goods during transportation, maintaining the integrity of shipments throughout the journey.
        </p>
        
        <h2 className="text-2xl font-bold border-l-4 border-black pl-4 mb-4">Customized Solutions</h2>
        <p className="mb-8">
          Tailored logistics solutions to meet the specific needs of our clients, offering flexibility and personalized services.
        </p>
      </div>

      <div className="w-full lg:w-1/2">
        <Image src="/ourQuality.webp" height={500} width={500} alt="Logistics Overview" className="w-full md:h-[500px] md:object-contain rounded-lg" />
      </div>
    </div>
  );
};

export default LogisticsSection;
