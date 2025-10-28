import React from 'react';

function Section4() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely amazing! The burgers are juicy and full of flavor. Delivery was super fast and the packaging kept everything hot. Will definitely order again!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      comment: "Best pizza I've had in years! The crust is perfect and the toppings are fresh. The app is easy to use and delivery tracking is spot on.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 4,
      comment: "Great food and service! The chicken wings were crispy and the sauce was perfect. Only complaint is that delivery took a bit longer than expected, but the food made up for it.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      date: "3 days ago"
    },
    {
      id: 4,
      name: "David Kim",
      rating: 5,
      comment: "Tasty Burger never disappoints! The quality is consistent and the customer service is excellent. Love the student discount too!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      date: "5 days ago"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      rating: 5,
      comment: "The Caesar salad is fresh and delicious! Perfect for a light meal. The portion sizes are generous and the prices are reasonable.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      date: "1 week ago"
    },
    {
      id: 6,
      name: "Alex Martinez",
      rating: 4,
      comment: "Good variety of options and the food arrives hot. The app could use some improvements but overall great experience.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      date: "4 days ago"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-accent-blue">
            CUSTOMER REVIEWS
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it – hear what our satisfied customers have to say about their Tasty Burger experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-secondory-dark p-6 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-accent-blue/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-white">{review.name}</h3>
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-sm text-gray-400">{review.rating}/5</span>
                  </div>
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                "{review.comment}"
              </p>

              {/* Date */}
              <div className="text-sm text-gray-500">
                {review.date}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-secondory-dark rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-blue mb-2">50K+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-blue mb-2">4.8</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-blue mb-2">30min</div>
              <div className="text-gray-300">Average Delivery</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-blue mb-2">100+</div>
              <div className="text-gray-300">Menu Items</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">
            Join thousands of satisfied customers! Share your experience with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent-blue text-primary-dark px-8 py-4 rounded-full font-bold hover:bg-accent-hover transition-colors duration-300 transform hover:scale-105">
              Leave a Review
            </button>
            <button className="border-2 border-accent-blue text-accent-blue px-8 py-4 rounded-full font-bold hover:bg-accent-hover hover:text-primary-dark hover:border-accent-hover transition-all duration-300">
              View All Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
