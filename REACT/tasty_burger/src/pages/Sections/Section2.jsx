import React from 'react';

function Section2() {
  const offers = [
    {
      id: 1,
      title: "50% OFF",
      subtitle: "First Order",
      description: "Get 50% off on your first order above $25",
      icon: "🎉",
      bgColor: "from-accent-blue to-accent-hover",
      validUntil: "Valid until Dec 31"
    },
    {
      id: 2,
      title: "FREE DELIVERY",
      subtitle: "Orders Over $30",
      description: "Enjoy free delivery on all orders above $30",
      icon: "🚚",
      bgColor: "from-green-500 to-green-600",
      validUntil: "Always available"
    },
    {
      id: 3,
      title: "BUY 1 GET 1",
      subtitle: "Burger Deal",
      description: "Buy one burger, get the second one free",
      icon: "🍔",
      bgColor: "from-orange-500 to-red-500",
      validUntil: "Limited time offer"
    },
    {
      id: 4,
      title: "20% OFF",
      subtitle: "Student Discount",
      description: "Special discount for students with valid ID",
      icon: "🎓",
      bgColor: "from-purple-500 to-purple-600",
      validUntil: "Valid with student ID"
    }
  ];

  return (
    <div className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-accent-blue">
            SPECIAL OFFERS
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Don't miss out on these amazing deals! Save big on your favorite meals with our exclusive offers.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group relative bg-secondory-dark rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-accent-blue/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent-blue/20"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${offer.bgColor} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {offer.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white group-hover:text-accent-blue transition-colors duration-300">
                  {offer.title}
                </h3>

                {/* Subtitle */}
                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-accent-blue">
                  {offer.subtitle}
                </h4>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {offer.description}
                </p>

                {/* Valid Until */}
                <div className="text-sm text-gray-400 mb-6">
                  {offer.validUntil}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-accent-blue text-primary-dark py-3 px-6 rounded-full font-bold hover:bg-accent-hover transition-colors duration-300 transform hover:scale-105">
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">
            More offers available in the app! Download now to unlock exclusive deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent-blue text-primary-dark px-8 py-4 rounded-full font-bold hover:bg-accent-hover transition-colors duration-300 transform hover:scale-105">
              Download App
            </button>
            <button className="border-2 border-accent-blue text-accent-blue px-8 py-4 rounded-full font-bold hover:bg-accent-hover hover:text-primary-dark hover:border-accent-hover transition-all duration-300">
              View All Offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
