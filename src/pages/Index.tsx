import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { CoursesSection } from '@/components/CoursesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CareersSection } from '@/components/CareersSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <TestimonialsSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
