import StatCard from './StatCard';

export default function HeroSection({ title, description, stats }) {
  return (
    <section className="gradient-bg text-white py-16 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-br from-green-600/50 to-emerald-600/50"></div>

      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 left-0 w-64 h-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.3,86.1C-23.4,84.6,-38.8,78.6,-52.4,69.8C-66,61,-77.8,49.4,-84.3,35.1C-90.8,20.8,-92,3.8,-88.7,-11.9C-85.4,-27.6,-77.6,-41.9,-66.8,-53.4C-56,-64.9,-42.2,-73.6,-27.4,-80.3C-12.6,-87,-6.3,-91.7,1.8,-94.8C9.9,-97.9,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M39.5,-65.8C51.4,-58.9,61.6,-48.3,68.4,-36.1C75.2,-23.9,78.6,-10.1,78.3,3.7C78,17.5,74,31.3,66.4,42.8C58.8,54.3,47.6,63.5,35.1,69.1C22.6,74.7,8.8,76.7,-4.6,74.6C-18,72.5,-31,66.3,-42.8,58.2C-54.6,50.1,-65.2,40.1,-71.4,27.7C-77.6,15.3,-79.4,0.5,-76.8,-13.3C-74.2,-27.1,-67.2,-39.9,-57.4,-48.6C-47.6,-57.3,-35,-61.9,-22.6,-68.5C-10.2,-75.1,2,-83.7,14.1,-82.3C26.2,-80.9,27.6,-72.7,39.5,-65.8Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl font-bold mb-6">{title}</h2>
        <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">{description}</p>
        {stats && (
          <div className="flex items-center justify-center space-x-6">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
