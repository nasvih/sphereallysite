import spiral from '@/assets/spiral.png';
import studentsLearning from '@/assets/students-learning.jpg';

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Hero image band */}
        <div className="relative rounded-3xl overflow-hidden mb-20 h-64 md:h-80 lg:h-96">
          <img
            src={studentsLearning}
            alt="Students learning together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-center px-6">
              Empowering Future Scholars
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              About Us
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              From Complexity<br />
              <span className="text-primary">to Excellence</span>
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                SphereAlly is a premium online academy dedicated to transforming students 
                from Classes 1–12 into confident, accomplished scholars. We believe every 
                student's journey from complexity to clarity deserves personalized guidance.
              </p>
              <p>
                Our experienced mentors offer both one-to-one and group classes, delivered 
                in English and Malayalam, ensuring every student receives the attention 
                they deserve.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-12">
              {[
                { value: '1-on-1', label: 'Personal Mentoring' },
                { value: 'K-12', label: 'Complete Coverage' },
                { value: 'Free', label: 'Demo Class + Test' },
                { value: '2', label: 'Languages Offered' },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="p-5 md:p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1 group-hover:text-sphere-navy-dark transition-colors">
                    {feature.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{feature.label}</div>
                </div>
              ))}
            </div>

            {/* Offline center note */}
            <p className="mt-8 text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Also available: Offline learning center in Wayanad, Kerala.
            </p>
          </div>

          {/* Spiral Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-150" />
              <img
                src={spiral}
                alt="From complexity to scholarly excellence"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-float-smooth"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-center">
                <span className="text-sm font-medium text-primary bg-secondary px-4 py-2 rounded-full border border-border">
                  Complex → Scholar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
