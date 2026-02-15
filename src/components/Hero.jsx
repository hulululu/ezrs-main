import React from 'react';
import heroEarth from '../assets/hero_earth.jpg';

const Hero = () => {
    return (
        <section className="relative w-full bg-[#050505] flex justify-center items-center overflow-hidden pt-20" id="hero">
            {/* 16:9 Aspect Ratio Container */}
            <div className="relative w-full max-w-[1920px] aspect-video group overflow-hidden">

                {/* Real High-Res Earth Image from Local Asset */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroEarth}
                        alt="Earth form Space"
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[20s] ease-linear"
                    />
                    {/* Overlay to darken slightly for text readability */}
                    <div className="absolute inset-0 bg-black/40"></div>
                    {/* Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-[#0A0A0A]/70"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6">
                    <div className="animate-fade-in-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Reclaim the Earth's Pulse
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-2xl max-w-5xl">
                            Monitoring Earth’s Pulse – <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-100 to-white">
                                Data for a Changing World
                            </span>
                        </h1>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                            <button className="px-8 py-4 bg-[#00A3E0] hover:bg-[#008CBA] text-white font-semibold rounded transition-all duration-300 shadow-[0_0_20px_rgba(0,163,224,0.4)] hover:shadow-[0_0_30px_rgba(0,163,224,0.6)] active:scale-95">
                                Watch ezRS Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
