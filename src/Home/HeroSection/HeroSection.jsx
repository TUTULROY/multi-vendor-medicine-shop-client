

const HeroSection = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.postimg.cc/q7JLnqvY/istockphoto-1464101157-612x612.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Eye Drops</h1>
      <button className="btn btn-primary">Coming Soon</button>
    </div>
  </div>
</div>
    );
};

export default HeroSection;