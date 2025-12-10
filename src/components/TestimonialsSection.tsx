import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Nair',
    role: 'Class 12, CBSE',
    location: 'Kozhikode, Kerala',
    content: 'SphereAlly transformed my approach to Physics and Chemistry. My JEE scores improved dramatically thanks to the personalized mentoring. The one-on-one sessions made complex concepts so much clearer.',
  },
  {
    name: 'Sneha Menon',
    role: 'NEET Aspirant',
    location: 'Wayanad, Kerala',
    content: 'The Biology sessions are exceptional. My mentor understood exactly where I was struggling and helped me build a strong foundation. I am now confident about cracking NEET this year.',
  },
  {
    name: 'Vishnu Prasad',
    role: 'Class 10, Kerala State',
    location: 'Malappuram, Kerala',
    content: 'Learning in Malayalam made all the difference for me. The teachers are patient and explain everything until I understand. My Mathematics grades have gone from average to excellent.',
  },
  {
    name: 'Lakshmi Krishnan',
    role: 'Parent',
    location: 'Kannur, Kerala',
    content: 'My daughter has been taking classes with SphereAlly for 6 months now. The improvement in her confidence and grades is remarkable. Highly recommend for any parent looking for quality education.',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-primary">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-medium text-primary-foreground/70 tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Stories of Success
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Hear from students and parents who have experienced the SphereAlly difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-8 md:p-10 bg-background rounded-3xl relative"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-primary/10" />
              
              <p className="text-lg text-foreground leading-relaxed mb-8">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
