"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Image from "next/image";
import FeaturedAnimals from "@/component/FeaturedAnimals";
import QurbaniTips from "@/component/QurbaniTips";


export default function HeroAndStats() {
  const animalImages = [
    "/cow1.jpg",
    "/cow2.jpg",
    "/cow3.jpg",
    "/cow4.jpg",
  ];

  const stats = [
    {
      number: "1,200+",
      label: "PETS RESCUED",
      description: "Over the years, our team has rescued more than 1,200 animals from shelters and unsafe environments."
    },
    {
      number: "980+",
      label: "ADOPTIONS COMPLETED",
      description: "Nearly one thousand animals have already found their forever homes through our adoption program."
    },
    {
      number: "20+",
      label: "PETS AVAILABLE",
      description: "Right now, more than 20 animals are waiting for a loving home. Each one is medically checked and ready."
    }
  ];

  return (
    <>
      
      <section className="bg-white pt-20 pb-10 overflow-hidden font-[family-name:var(--font-geist-sans)]">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-[#244D3F] mb-6 tracking-tight leading-[1.1]">
            Every Animal Deserves <br /> a Loving Home
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl mb-12 leading-relaxed font-medium">
            Discover the finest livestock for your Qurbani. <br /> We ensure healthy animals and a <br className="hidden md:block" /> 
            seamless booking experience for you and your family.
          </p>

          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/animals" 
              className="btn btn-lg bg-[#244D3F] border-none text-white rounded-full px-10 h-16 text-lg hover:bg-[#244D3F] shadow-md flex items-center gap-2 group"
            >
              MEET OUR ANIMALS 
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </Link>
            <Link 
              href="/donate" 
              className="btn btn-lg btn-outline border-gray-300 text-gray-800 rounded-full px-10 h-16 text-lg hover:bg-gray-50 flex items-center gap-2 group"
            >
              DONATE 
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </Link>
          </div>
        </div>

        
        <div className="w-full">
          <Marquee speed={45} gradient={false} pauseOnHover={true}>
            {animalImages.map((img, index) => (
              <div 
                key={index} 
                className="mx-3 w-[450px] md:w-[600px] aspect-[16/10] relative rounded-[20px] md:rounded-[40px] overflow-hidden shadow-sm border-2 border-transparent hover:border-gray-100 transition-all"
              >
                <Image 
                  src={img} 
                  alt={`animal-${index}`}
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 450px, 750px"
                  priority={index === 0} 
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <section>
        <FeaturedAnimals></FeaturedAnimals>
      </section>
      <section>
        <QurbaniTips></QurbaniTips>
      </section>

     
      <section className="px-4 py-16 bg-white font-[family-name:var(--font-geist-sans)]">
        <div className="max-w-7xl mx-auto bg-[#204a3b] rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <div className="max-w-2xl text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-[#ffffff] mb-6 leading-tight">
                Giving Every Animal the Life <br /> They Deserve
              </h2>
              <p className="text-[#ffffff] text-lg">
                QurbaniHat is a platform dedicated to providing healthy livestock 
                and ensuring every animal gets proper care and a safe home.
              </p>
            </div>
            
           
            <div className="hidden md:block">
              <div className="w-20 h-20 border-2 border-[#ffffff] rounded-full flex items-center justify-center p-4">
                 <svg viewBox="0 0 24 24" fill="none" className="text-[#ffffff] w-full h-full" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                 </svg>
              </div>
            </div>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-gray-200 text-left">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-5xl font-bold text-[#ffffff]">
                  {stat.number}
                </h3>
                <p className="text-sm font-bold tracking-widest text-[#d3d1d1] uppercase">
                  {stat.label}
                </p>
                <p className="text-[#d3d1d1] leading-relaxed text-sm md:text-base">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
            
      
    </>
  );
}