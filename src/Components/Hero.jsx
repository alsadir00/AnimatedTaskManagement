const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-violet-100 via-pink-200 to-orange-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 py-20 px-6 text-center rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold mb-4">Welcome to Motmaker</h1>
      <p className="text-lg mb-6">Master React UI, dark/light themes, and animations.</p>
      <div className="space-x-4">
        <button className="px-6 py-3 bg-pink-300 text-orange-600 rounded-lg font-semibold hover:bg-pink-200 dark:text-gray-800">Get Started</button>
        <button className="px-6 py-3 border border-rose-200 rounded-lg hover:bg-pink-300 hover:border-pink-300 dark:hover:text-gray-800">Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;