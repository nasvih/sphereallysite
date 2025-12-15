import { useState } from 'react';
import { Mail, Phone, Instagram, MapPin, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message
    const message = `Hi SphereAlly!

*New Enquiry*
━━━━━━━━━━━━━━
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📚 Interested in: ${formData.course || 'General Enquiry'}
💬 Message: ${formData.message || 'I would like to know more about your courses.'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+917592947230?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let's Start Your Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to transform your academic future? Fill out the form and we'll connect with you on WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border/50 order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-foreground mb-8">Send an Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="+91 75929 47230"
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-foreground mb-2">
                  Interested Course
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                >
                  <option value="">Select a course</option>
                  <option value="CBSE/ICSE (1-12)">CBSE/ICSE (Classes 1-12)</option>
                  <option value="Kerala Board (1-12)">Kerala Board (Classes 1-12)</option>
                  <option value="NEET Preparation">NEET Preparation</option>
                  <option value="JEE Preparation">JEE Preparation</option>
                  <option value="KEAM Preparation">KEAM Preparation</option>
                  <option value="Foundation Course">Foundation Course (KG-10)</option>
                  <option value="Languages">Languages</option>
                  <option value="Skill Development">Skill Development</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Tell us about your learning goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-sphere-navy-dark transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group"
              >
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Continue on WhatsApp
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <p className="text-muted-foreground text-lg mb-8">
                Have questions? We'd love to hear from you. Reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="https://wa.me/919744978305"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">WhatsApp / Call</h4>
                  <p className="text-muted-foreground">+91 75929 47230</p>
                </div>
              </a>

              <a
                href="mailto:info@sphereally.com"
                className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground">info@sphereally.com</p>
                </div>
              </a>

              <a
                href="https://instagram.com/sphereally"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Follow Us</h4>
                  <p className="text-muted-foreground">@sphereally</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Offline Center</h4>
                  <p className="text-muted-foreground">Wayanad, Kerala, India</p>
                </div>
              </div>
            </div>

            {/* Demo class banner */}
            <div className="p-6 bg-gradient-to-br from-primary to-sphere-navy-dark rounded-2xl text-primary-foreground">
              <h4 className="text-xl font-bold mb-2">🎓 Free Demo Class</h4>
              <p className="text-primary-foreground/80 mb-4">
                Experience our teaching methodology with a complimentary 1-day demo class + caliber assessment test.
              </p>
              <a
                href="https://wa.me/919744978305?text=Hi%20SphereAlly,%20I%20would%20like%20to%20book%20a%20free%20demo%20class."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground font-semibold hover:underline"
              >
                Book Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
