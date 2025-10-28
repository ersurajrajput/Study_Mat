import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-primary-dark text-text-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent-blue/20 rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent-blue/30 rounded-full blur-2xl animate-bounce-slow" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-accent-blue drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              ABOUT TASTY BURGER
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Where Flavor Meets Convenience – Your Ultimate Online Food Ordering Experience
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-accent-blue">
            Our Story
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Born from a passion for great food and modern convenience, Tasty Burger started as a small family-owned restaurant
                dreaming of serving delicious burgers to the masses. Today, we've evolved into a comprehensive online food ordering
                platform that brings restaurant-quality meals right to your doorstep.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our journey began with a simple belief: everyone deserves access to mouthwatering food without the hassle of
                cooking or dining out. We've partnered with the best local restaurants and chefs to curate a menu that satisfies
                every craving, from juicy burgers to gourmet pizzas and everything in between.
              </p>
            </div>
            <div className="bg-secondory-dark p-8 rounded-2xl shadow-2xl border border-gray-700/50">
              <div className="text-center">
                <div className="text-6xl mb-4">🍔</div>
                <h3 className="text-2xl font-bold text-accent-blue mb-4">Founded in 2020</h3>
                <p className="text-gray-300">
                  What started as a single restaurant has grown into a platform serving thousands of happy customers daily.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-accent-blue">
            Our Mission
          </h2>
          <div className="bg-secondory-dark p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-700/50">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                "To revolutionize the way people experience food by connecting hungry customers with exceptional local restaurants
                through seamless online ordering, ensuring every meal is delivered hot, fresh, and full of flavor."
              </p>
              <div className="grid sm:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h4 className="text-xl font-bold text-accent-blue mb-2">Fast Delivery</h4>
                  <p className="text-gray-400">Hot food at your door in 30 minutes or less</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⭐</div>
                  <h4 className="text-xl font-bold text-accent-blue mb-2">Quality First</h4>
                  <p className="text-gray-400">Only partnering with top-rated restaurants</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💝</div>
                  <h4 className="text-xl font-bold text-accent-blue mb-2">Customer Love</h4>
                  <p className="text-gray-400">Over 50,000 satisfied customers and counting</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-accent-blue">
            Why Choose Tasty Burger?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-secondory-dark p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-accent-blue/50 transition-colors">
              <div className="text-3xl mb-4 text-accent-blue">🍽️</div>
              <h3 className="text-xl font-bold mb-3 text-white">Diverse Menu</h3>
              <p className="text-gray-400">From classic burgers to exotic cuisines, we have something for every taste bud.</p>
            </div>
            <div className="bg-secondory-dark p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-accent-blue/50 transition-colors">
              <div className="text-3xl mb-4 text-accent-blue">🚚</div>
              <h3 className="text-xl font-bold mb-3 text-white">Reliable Delivery</h3>
              <p className="text-gray-400">Track your order in real-time and enjoy contactless delivery options.</p>
            </div>
            <div className="bg-secondory-dark p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-accent-blue/50 transition-colors">
              <div className="text-3xl mb-4 text-accent-blue">💳</div>
              <h3 className="text-xl font-bold mb-3 text-white">Easy Payments</h3>
              <p className="text-gray-400">Multiple payment options including cash, card, and digital wallets.</p>
            </div>
            <div className="bg-secondory-dark p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-accent-blue/50 transition-colors">
              <div className="text-3xl mb-4 text-accent-blue">🏆</div>
              <h3 className="text-xl font-bold mb-3 text-white">Quality Assurance</h3>
              <p className="text-gray-400">Every order is prepared with fresh ingredients and strict quality controls.</p>
            </div>
            <div className="bg-secondory-dark p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-accent-blue/50 transition-colors">
              <div className="text-3xl mb-4 text-accent-blue">📱</div>
              <h3 className="text-xl font-bold mb-3 text-white">User-Friendly App</h3>
              <p className="text-gray-400">Intuitive interface with personalized recommendations and easy reordering.</p>
            </div>
            <div className="bg-secondory-dark p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-accent-blue/50 transition-colors">
              <div className="text-3xl mb-4 text-accent-blue">🎉</div>
              <h3 className="text-xl font-bold mb-3 text-white">Exclusive Deals</h3>
              <p className="text-gray-400">Regular promotions, discounts, and loyalty rewards for our valued customers.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-accent-blue to-accent-hover p-8 md:p-12 rounded-2xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Ready to Experience the Best?
            </h2>
            <p className="text-lg md:text-xl text-primary-dark/80 mb-8">
              Join thousands of satisfied customers and order your favorite meals today!
            </p>
            <button className="bg-primary-dark text-accent-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors transform hover:scale-105 shadow-lg">
              Start Ordering Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
