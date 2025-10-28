import React from 'react';

function Section3() {
  const foodItems = [
    {
      id: 1,
      name: "Classic Cheeseburger",
      description: "Juicy beef patty with melted cheese, lettuce, tomato, and our special sauce",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80",
      rating: 4.8,
      category: "Burgers"
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomato sauce, basil, and extra virgin olive oil",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.6,
      category: "Pizza"
    },
    {
      id: 3,
      name: "Chicken Wings",
      description: "Crispy fried chicken wings with buffalo sauce and ranch dip",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc696c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.7,
      category: "Appetizers"
    },
    {
      id: 4,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, parmesan cheese, croutons, and caesar dressing",
      price: "$10.99",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 4.5,
      category: "Salads"
    },
    {
      id: 5,
      name: "French Fries",
      description: "Golden crispy fries seasoned with sea salt and served with ketchup",
      price: "$5.99",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 4.4,
      category: "Sides"
    },
    {
      id: 6,
      name: "Chocolate Milkshake",
      description: "Rich and creamy chocolate milkshake topped with whipped cream",
      price: "$6.99",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
      rating: 4.9,
      category: "Beverages"
    }
  ];

  return (
    <div className="py-20 bg-secondory-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-accent-blue">
            OUR MENU
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Discover our delicious selection of handcrafted meals, made with the finest ingredients and served fresh.
          </p>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="group bg-primary-dark rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-accent-blue/50 transition-all duration-300 transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-accent-blue text-primary-dark px-3 py-1 rounded-full text-sm font-bold">
                  {item.category}
                </div>
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm flex items-center">
                  ⭐ {item.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-blue transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-accent-blue">
                    {item.price}
                  </span>
                  <button className="bg-accent-blue text-primary-dark px-6 py-2 rounded-full font-bold hover:bg-accent-hover transition-colors duration-300 transform hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">
            Love what you see? Explore our full menu with hundreds of delicious options!
          </p>
          <button className="bg-accent-blue text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-hover transition-colors duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/40">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section3;
