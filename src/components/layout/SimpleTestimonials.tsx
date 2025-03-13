import React from 'react';

export function SimpleTestimonials() {
    return (
        <section className="bg-linear-to-r from-pink-50 to-purple-50 py-20">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-pink-600">
                        What Our Customers Say
                    </h2>
                    <p className="mx-auto max-w-2xl text-pink-700">
                        Hear from our happy customers about their experience with Hair Cliques 2.0
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="rounded-xl bg-white p-6 shadow-xs">
                        <div className="mb-4 flex items-center">
                            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-200">
                                <span className="font-semibold text-pink-600">SJ</span>
                            </div>
                            <div>
                                <h3 className="font-medium text-pink-700">Sarah Johnson</h3>
                                <div className="flex text-pink-400">★★★★★</div>
                            </div>
                        </div>
                        <p className="text-sm text-pink-700 italic">
                            "These hair clips are amazing! The magnetic design is genius and so much
                            gentler than traditional clips."
                        </p>
                    </div>

                    <div className="rounded-xl bg-white p-6 shadow-xs">
                        <div className="mb-4 flex items-center">
                            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-200">
                                <span className="font-semibold text-pink-600">ML</span>
                            </div>
                            <div>
                                <h3 className="font-medium text-pink-700">Michelle Lee</h3>
                                <div className="flex text-pink-400">★★★★★</div>
                            </div>
                        </div>
                        <p className="text-sm text-pink-700 italic">
                            "I love how versatile these clips are! They work perfectly with my thin
                            hair and never slip out."
                        </p>
                    </div>

                    <div className="rounded-xl bg-white p-6 shadow-xs">
                        <div className="mb-4 flex items-center">
                            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-200">
                                <span className="font-semibold text-pink-600">JR</span>
                            </div>
                            <div>
                                <h3 className="font-medium text-pink-700">Jessica Rodriguez</h3>
                                <div className="flex text-pink-400">★★★★☆</div>
                            </div>
                        </div>
                        <p className="text-sm text-pink-700 italic">
                            "The star-shaped clip is my favorite! Strong enough to hold my thick
                            hair in place all day."
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 shadow-xs">
                        <div className="flex text-pink-400">★★★★★</div>
                        <p className="ml-2 font-medium text-pink-700">
                            4.9 out of 5 stars from over 200+ reviews
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
