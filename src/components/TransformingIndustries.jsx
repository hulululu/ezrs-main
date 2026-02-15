import React from 'react';
import industryAgri from '../assets/industry_agri.jpg';
import industryCity from '../assets/industry_city.jpg';
import industryPort from '../assets/industry_port.jpg';

const TransformingIndustries = () => {
    return (
        <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white max-w-3xl leading-tight">
                        Transforming Industries with <br />
                        <span className="text-primary">Geospatial Intelligence</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        From agriculture to defense, ezRS provides the critical data layer needed to
                        solve the world's most complex challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Industry Card 1: Global Monitoring (Land) */}
                    <div className="group relative bg-[#121212] border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                        <div className="h-48 relative overflow-hidden">
                            <img
                                src={industryAgri}
                                alt="Agriculture"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-90"></div>

                            {/* Chart Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-around px-4 pb-4">
                                <div className="w-2 bg-primary/50 h-4 rounded-t group-hover:h-8 transition-all duration-500"></div>
                                <div className="w-2 bg-primary/50 h-6 rounded-t group-hover:h-12 transition-all duration-500 delay-75"></div>
                                <div className="w-2 bg-primary/50 h-10 rounded-t group-hover:h-10 transition-all duration-500 delay-150"></div>
                                <div className="w-2 bg-primary h-8 rounded-t group-hover:h-14 transition-all duration-500 delay-200"></div>
                            </div>
                        </div>
                        <div className="p-8 relative">
                            <h3 className="text-xl font-bold text-white mb-2">Global Monitoring</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Track changes across the globe with daily update frequency.
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4">
                                <span>Coverage</span>
                                <span className="text-white">100%</span>
                            </div>
                        </div>
                    </div>

                    {/* Industry Card 2: Energy & Infrastructure (City) */}
                    <div className="group relative bg-[#121212] border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                        <div className="h-48 relative overflow-hidden">
                            <img
                                src={industryCity}
                                alt="City Infrastructure"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-90"></div>
                        </div>
                        <div className="p-8 relative">
                            <h3 className="text-xl font-bold text-white mb-2">Energy & Infrastructure</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Monitor assets and vegetation encroachment in real-time.
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4">
                                <span>Resolution</span>
                                <span className="text-white">50cm</span>
                            </div>
                        </div>
                    </div>

                    {/* Industry Card 3: Civil Government (Maritime/Port) */}
                    <div className="group relative bg-[#121212] border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                        <div className="h-48 relative overflow-hidden">
                            <img
                                src={industryPort}
                                alt="Maritime Port Logistics"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-90"></div>
                        </div>
                        <div className="p-8 relative">
                            <h3 className="text-xl font-bold text-white mb-2">Civil Government</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Urban planning, disaster response, and environmental protection.
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4">
                                <span>Latency</span>
                                <span className="text-white">&lt; 24hrs</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TransformingIndustries;
