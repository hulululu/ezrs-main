import React from 'react';
import blogTech from '../assets/blog_tech.jpg';
import blogIce from '../assets/blog_ice.jpg';
import blogCity from '../assets/blog_city.jpg';

// Real images for blog posts
const blogPosts = [
    {
        title: 'The Future of Hyperspectral Imaging',
        excerpt: 'How new sensor technology is revolutionizing agriculture and mining.',
        date: 'Oct 12, 2023',
        category: 'Technology',
        image: blogTech
    },
    {
        title: 'Tracking Polar Ice Melt with AI',
        excerpt: 'Using machine learning to predict climate patterns with 99% accuracy.',
        date: 'Sep 28, 2023',
        category: 'Environment',
        image: blogIce
    },
    {
        title: 'Urban Planning from Orbit',
        excerpt: 'Optimizing city infrastructure using historical satellite data.',
        date: 'Sep 15, 2023',
        category: 'Case Study',
        image: blogCity
    }
];

const BlogFeed = () => {
    return (
        <section className="py-24 bg-[#0A0A0A]" id="insight">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Insight <span className="text-gray-500">& Resources</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore the latest trends, case studies, and technological breakthroughs in the world of remote sensing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <article
                            key={index}
                            className="group bg-[#121212] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/10">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="text-primary text-xs font-mono mb-3">{post.date}</div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>
                                <a href="#" className="inline-flex items-center text-primary text-sm font-semibold hover:text-white transition-colors">
                                    Read Article
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogFeed;
