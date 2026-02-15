import React from 'react';

const solutions = [
    {
        title: 'Transforming Geospatial Intelligence',
        description: 'Unlock actionable insights with our daily global scans.',
        stat1: '20%',
        desc1: 'Cost Reduction',
        stat2: '29%',
        desc2: 'Faster Analysis',
        icon: '📊'
    },
    {
        title: 'Agriculture & Land Use',
        description: 'Optimize yield and monitor crop health at scale.',
        stat1: '15%',
        desc1: 'Yield Increase',
        stat2: '24/7',
        desc2: 'Monitoring',
        icon: '🌾'
    },
    {
        title: 'Sustainability & Carbon',
        description: 'Verify carbon credits and monitor deforestation.',
        stat1: '100%',
        desc1: 'Transparency',
        stat2: 'Global',
        desc2: 'Scale',
        icon: '🌍'
    },
    {
        title: 'Maritime & Security',
        description: 'Detect illicit activity and monitor vessel traffic.',
        stat1: '<12h',
        desc1: 'Revisit Rate',
        stat2: 'AI',
        desc2: 'Detection',
        icon: '🚢'
    }
];

const Features = () => {
    return (
        <section className="py-24 bg-[#0A0A0A]" id="services">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-white">Our Solutions</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {solutions.map((item, index) => (
                        <div key={index} className="group relative bg-[#121212] rounded-xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center text-3xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 mb-6 text-sm">{item.description}</p>

                                    <div className="flex gap-12 border-t border-white/5 pt-6">
                                        <div>
                                            <div className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.stat1}</div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider">{item.desc1}</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.stat2}</div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider">{item.desc2}</div>
                                        </div>
                                    </div>

                                    <div className="absolute top-8 right-8 w-3 h-3 border-2 border-white/20 rounded-full group-hover:border-primary transition-colors"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
