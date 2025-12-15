import { useEffect, useState } from 'react';
import logo3d from '@/assets/logo3d.png';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-primary pt-24"
    >
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-sphere-navy-dark to-primary" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute top-1/4 -left-32 w-[600px] h-[600px] bg-sphere-navy-light/30 rounded-full blur-[120px] transition-all duration-[2000ms] ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{ transitionDelay: '200ms' }}
        />
        <div 
          className={`absolute -bottom-32 -right-32 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[150px] transition-all duration-[2500ms] ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{ transitionDelay: '400ms' }}
        />
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-foreground/5 rounded-full blur-[100px] transition-all duration-[3000ms] ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          style={{ transitionDelay: '600ms' }}
        />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

     

        {/* 3D Logo with dramatic entrance - NOW BELOW TITLE */}
        <div 
          className={`mb-6 md:mb-8 transition-all duration-[1200ms] ease-out ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="relative inline-block group">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-accent/40 rounded-full blur-3xl scale-150 animate-pulse-slow" />
            <img
              src={logo3d}
              alt="SphereAlly 3D Logo"
              className="relative w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 mx-auto animate-float-smooth drop-shadow-[0_0_60px_rgba(223,203,168,0.4)] group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

   <div className="relative z-10 container-narrow text-center flex flex-col items-center justify-center flex-1">
        {/* Brand Name - Cinematic reveal - FIRST */}
        <div className="overflow-hidden mb-6 md:mb-8">
          <h1 
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground tracking-tighter transition-all duration-[1000ms] ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
            style={{ transitionDelay: '200ms' }}
          >
            SphereAlly
          </h1>
        </div>

        {/* Slogan */}
        <div className="overflow-hidden mb-10 md:mb-12">
          <p 
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light tracking-widest uppercase transition-all duration-[1000ms] ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
            style={{ transitionDelay: '700ms', letterSpacing: '0.25em' }}
          >
            Your Perfect Mentor
          </p>
        </div>

        {/* CTA Button - Premium glass effect */}
        <div 
          className={`transition-all duration-[1000ms] ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '900ms' }}
        >
          <a
            href="https://wa.me/+917592947230?text=Hi%20SphereAlly,%20I%20would%20like%20to%20enquire%20about%20your%20courses."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg font-medium overflow-hidden transition-all duration-500 hover:scale-105"
          >
            {/* Button background layers */}
            <span className="absolute inset-0 bg-primary-foreground" />
            <span className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shine effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
            
            {/* Button content */}
            <svg className="relative w-5 h-5 md:w-6 md:h-6 text-primary transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="relative text-primary font-semibold tracking-wide">
              Enquire Now
            </span>
            <svg 
              className="relative w-4 h-4 md:w-5 md:h-5 text-primary transition-transform duration-500 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Stats or trust indicators */}
        <div 
          className={`mt-12 md:mt-16 flex flex-wrap justify-center gap-8 md:gap-16 transition-all duration-[1000ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '1100ms' }}
        >
          {[
            { value: '100+', label: 'Students' },
            { value: '50+', label: 'Courses' },
            { value: '100%', label: 'Dedicated' },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-primary-foreground/60 uppercase tracking-widest font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator - More elegant */}
      <div 
        className={`pb-8 md:pb-12 transition-all duration-[1000ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '1300ms' }}
      >
        <a href="#about" className="group flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
          <span className="text-xs uppercase tracking-[0.3em] font-light">Discover</span>
          <div className="w-6 h-10 border border-primary-foreground/30 rounded-full flex justify-center pt-2 group-hover:border-primary-foreground/60 transition-colors duration-300">
            <div className="w-1 h-2 bg-primary-foreground/60 rounded-full animate-scroll-bounce group-hover:bg-primary-foreground transition-colors duration-300" />
          </div>
        </a>
      </div>
    </section>
  );
}
