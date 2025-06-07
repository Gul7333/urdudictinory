export default function HomeHeader() {
    return (
      <header className="relative bg-blue-50 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/og.png" // Replace with your actual image path
            alt="Urdu Dictionary Header"
            className="w-full h-full  opacity-30 object-contain"
          
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
        </div>
  
        {/* Text content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 font-urdu">
            اردو زبان لغت
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 font-urdu">
            ایک مکمل اردو لغت، حروف تہجی اور معنوں کے ساتھ تلاش کریں
          </p>
        </div>
      </header>
    );
  }
  