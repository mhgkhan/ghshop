import React from "react";

const page = () => {
  return (
    <main className="container mx-auto p-8 min-screen">
      <section className="bg-white shadow-md rounded-lg p-6 mb-6 animate-fadeIn">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="mb-4">
          Welcome to My eCommerce Site! We are passionate about providing you
          with the best products and exceptional customer service. Our mission
          is to bring you high-quality items at competitive prices.
        </p>
        <p className="mb-4">
          Our team is dedicated to ensuring a seamless shopping experience. From
          browsing our online store to receiving your order, we are here to
          support you every step of the way. We believe in transparency,
          honesty, and building long-lasting relationships with our customers.
        </p>
        <p className="mb-4">
          Thank you for choosing My eCommerce Site. We look forward to serving
          you and meeting all your shopping needs.
        </p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mb-6 animate-slideInLeft">
        <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Customer Satisfaction: Your happiness is our top priority.
          </li>
          <li className="mb-2">
            Quality Products: We offer only the best products on the market.
          </li>
          <li className="mb-2">
            Integrity: We believe in honesty and transparency in all our
            dealings.
          </li>
          <li className="mb-2">
            Community: We are committed to giving back and supporting our
            community.
          </li>
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 animate-slideInRight">
        <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
        <p className="mb-4">
          Our journey began in 2020, with a small team and a big vision. We
          started with a handful of products and a dream to make quality
          products accessible to everyone. Over the years, we have grown and
          expanded our offerings, but our core values have remained the same.
        </p>
        <p className="mb-4">
          Today, we are proud to serve thousands of customers worldwide. Our
          commitment to quality, customer satisfaction, and community remains
          unwavering. We are constantly evolving and improving to meet the needs
          of our customers and the market.
        </p>
      </section>
    </main>
  );
};

export default page;
