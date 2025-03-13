import React from 'react';

export function SimpleTestimonials() {
  return (
    <section className="py-20 bg-linear-to-r from-pink-50 to-purple-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">What Our Customers Say</h2>
          <p className="text-pink-700 max-w-2xl mx-auto">
            Hear from our happy customers about their experience with Hair Cliques 2.0
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-xs">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-pink-200 mr-4 flex items-center justify-center">
                <span className="text-pink-600 font-semibold">SJ</span>
              </div>
              <div>
                <h3 className="font-medium text-pink-700">Sarah Johnson</h3>
                <div className="flex text-pink-400">★★★★★</div>
              </div>
            </div>
            <p className="text-pink-700 text-sm italic">
              "These hair clips are amazing! The magnetic design is genius and so much gentler than traditional clips."
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-xs">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-pink-200 mr-4 flex items-center justify-center">
                <span className="text-pink-600 font-semibold">ML</span>
              </div>
              <div>
                <h3 className="font-medium text-pink-700">Michelle Lee</h3>
                <div className="flex text-pink-400">★★★★★</div>
              </div>
            </div>
            <p className="text-pink-700 text-sm italic">
              "I love how versatile these clips are! They work perfectly with my thin hair and never slip out."
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-xs">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-pink-200 mr-4 flex items-center justify-center">
                <span className="text-pink-600 font-semibold">JR</span>
              </div>
              <div>
                <h3 className="font-medium text-pink-700">Jessica Rodriguez</h3>
                <div className="flex text-pink-400">★★★★☆</div>
              </div>
            </div>
            <p className="text-pink-700 text-sm italic">
              "The star-shaped clip is my favorite! Strong enough to hold my thick hair in place all day."
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center bg-white px-6 py-3 rounded-full shadow-xs">
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
