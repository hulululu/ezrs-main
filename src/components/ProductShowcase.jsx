import React from 'react';
import nanoBanana from '../assets/nano_banana.svg';
import satelliteMap from '../assets/satellite_map.jpg';


const ProductShowcase = () => {
    return (
        <section className="py-24 bg-surface relative overflow-hidden" id="explore">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    {/* Visual Viewer - Dark Mode MVP Dashboard Mockup */}
                    <div className="w-full md:w-3/5 relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-500"></div>

                        {/* Main Dashboard Window */}
                        <div className="relative bg-[#0F0F0F] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col aspect-[16/10]">

                            {/* Window Header */}
                            <div className="h-8 bg-[#1A1A1A] border-b border-white/5 flex items-center px-4 gap-2 shrink-0">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                                </div>
                                <div className="ml-4 text-[10px] text-gray-500 font-mono flex-1 text-center">ezRS_Pro_Platform_v3.0.1</div>
                            </div>

                            {/* Dashboard Content: Sidebar + Map */}
                            <div className="flex-1 flex overflow-hidden">

                                {/* Sidebar (Search & Results) */}
                                <div className="w-1/3 bg-[#141414] border-r border-white/5 p-4 flex flex-col gap-4">
                                    {/* Search Box */}
                                    <div className="space-y-2">
                                        <div className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Search Parameters</div>
                                        <div className="h-8 bg-[#0A0A0A] border border-white/10 rounded flex items-center px-2 text-xs text-gray-400">
                                            Date Range: 2024.10.01 - 2024.10.31
                                        </div>
                                        <div className="h-8 bg-[#0A0A0A] border border-white/10 rounded flex items-center px-2 text-xs text-gray-400">
                                            Product: Sentinel-2 L2A
                                        </div>
                                        <button className="w-full py-1.5 bg-primary/20 text-primary text-xs font-bold rounded border border-primary/30 hover:bg-primary/30 transition-colors">
                                            SEARCH ASSETS
                                        </button>
                                    </div>

                                    {/* Results List */}
                                    <div className="flex-1 overflow-hidden flex flex-col gap-2">
                                        <div className="text-[10px] uppercase text-gray-500 font-bold tracking-wider mt-2">Results (12)</div>

                                        {/* Result Item 1 (Active) */}
                                        <div className="bg-[#1A1A1A] border border-primary/50 text-white p-2 rounded cursor-pointer">
                                            <div className="text-[10px] text-primary font-bold mb-1">NDVI_Monthly_2024_10_Seoul</div>
                                            <div className="flex justify-between items-end">
                                                <div className="w-12 h-8 bg-gray-800 rounded overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-green-500/20"></div>
                                                </div>
                                                <div className="text-[9px] text-gray-400">Cloud: 0.2%</div>
                                            </div>
                                        </div>

                                        {/* Result Item 2 */}
                                        <div className="bg-[#0A0A0A] border border-white/5 text-gray-400 p-2 rounded hover:bg-[#1A1A1A] transition-colors cursor-pointer">
                                            <div className="text-[10px] font-bold mb-1">SAR_C-Band_2024_10_05</div>
                                            <div className="text-[9px] text-gray-600">Ascending | VV+VH</div>
                                        </div>

                                        {/* Result Item 3 */}
                                        <div className="bg-[#0A0A0A] border border-white/5 text-gray-400 p-2 rounded hover:bg-[#1A1A1A] transition-colors cursor-pointer">
                                            <div className="text-[10px] font-bold mb-1">Optical_RGB_2024_09_28</div>
                                            <div className="text-[9px] text-gray-600">Resolution: 50cm</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Map View */}
                                <div className="flex-1 relative bg-black group/map">
                                    {/* Real Satellite Background (Darkened) */}
                                    <img
                                        src={satelliteMap}
                                        alt="Satellite Map View"
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[30%]"
                                    />

                                    {/* Map UI Overlays */}
                                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                                        <div className="w-8 h-8 bg-[#1A1A1A] border border-white/10 rounded flex items-center justify-center text-white hover:bg-[#252525] cursor-pointer">+</div>
                                        <div className="w-8 h-8 bg-[#1A1A1A] border border-white/10 rounded flex items-center justify-center text-white hover:bg-[#252525] cursor-pointer">-</div>
                                    </div>

                                    {/* ROI Box */}
                                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-primary bg-primary/5 backdrop-blur-[1px] flex items-center justify-center">
                                        {/* Crosshair Center */}
                                        <div className="w-4 h-4 text-primary relative">
                                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary"></div>
                                            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-primary"></div>
                                        </div>

                                        {/* Analysis Overlay */}
                                        <div className="absolute top-2 left-2 bg-black/80 text-primary text-[9px] font-mono px-1.5 py-0.5 border border-primary/30 rounded">
                                            ROI: SEOUL_METRO_01
                                        </div>

                                        {/* Detected Objects */}
                                        <div className="absolute bottom-10 right-10 w-4 h-4 border border-accent rounded-full animate-ping"></div>
                                        <div className="absolute bottom-10 right-10 w-1 h-1 bg-accent rounded-full"></div>
                                    </div>

                                    {/* Bottom Status Bar */}
                                    <div className="absolute bottom-0 left-0 w-full h-6 bg-[#0A0A0A]/90 border-t border-white/10 flex items-center px-4 justify-between text-[9px] font-mono text-gray-400">
                                        <div>LAT: 37.5665 N  LON: 126.9780 E</div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                            <span>LIVE FEED</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* Text Content */}
                    <div className="w-full md:w-2/5">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            <span className="text-primary text-sm font-bold tracking-widest uppercase">Live Analysis</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-6 text-white">
                            ezRS <span className="text-gray-500">Explore</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Uncover hidden patterns with our advanced visualization engine.
                            From spectral analysis to change detection, ezRS Explore gives
                            you the power to see the world in new dimensions.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">26%</div>
                                <div className="text-sm text-gray-500">Efficiency Boost</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">2.4s</div>
                                <div className="text-sm text-gray-500">Processing Time</div>
                            </div>
                        </div>
                        <button className="btn-primary w-full md:w-auto">
                            Launch Platform
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProductShowcase;
