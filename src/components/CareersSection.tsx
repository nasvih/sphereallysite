import { Briefcase } from 'lucide-react';

export function CareersSection() {
  return (
    <section id="careers" className="section-padding bg-secondary">
      <div className="container-narrow text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <Briefcase className="w-10 h-10 text-primary" />
        </div>
        
        <span className="text-sm font-medium text-primary/70 tracking-widest uppercase mb-4 block">
          Careers
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Join Our Team
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Are you passionate about education and mentoring? We're always looking for 
          talented educators to join the SphereAlly family.
        </p>

        <div className="bg-background rounded-3xl p-8 md:p-12 border border-border max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Send Your Resume
          </h3>
          <p className="text-muted-foreground mb-8">
            Email your resume and cover letter to our HR team.
          </p>
          
          <a
            href="mailto:hr@sphereally.com?subject=Job%20Application%20-%20SphereAlly"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-sphere-navy-dark transition-all duration-300 hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hr@sphereally.com
          </a>
        </div>
      </div>
    </section>
  );
}
