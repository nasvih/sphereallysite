import { GraduationCap, Trophy, Languages, Lightbulb, FileText, Users, BookOpen, Sparkles } from 'lucide-react';

const courseCategories = [
  {
    title: 'School Syllabus',
    description: 'CBSE, ICSE, Kerala State Board for Grades 1-12',
    icon: GraduationCap,
    items: ['CBSE Curriculum', 'ICSE Curriculum', 'Kerala State Syllabus'],
  },
  {
    title: 'Competitive Exams',
    description: 'Prepare for top-tier entrance examinations',
    icon: Trophy,
    items: ['NEET', 'JEE Main & Advanced', 'KEAM', 'Olympiads'],
  },
  {
    title: 'Foundation Courses',
    description: 'Build strong fundamentals from the start',
    icon: Lightbulb,
    items: ['KG-5 Basics', 'Class 6-10 Foundation', 'Conceptual Learning'],
  },
  {
    title: 'Languages',
    description: 'Master communication across cultures',
    icon: Languages,
    items: ['English Proficiency', 'Malayalam', 'Foreign Languages'],
  },
  {
    title: 'Skill Development',
    description: 'Beyond academics — real-world skills',
    icon: Sparkles,
    items: ['Mathematics', 'Science', 'Coding & Programming', 'Art & Music'],
  },
  {
    title: 'Test Preparation',
    description: 'Government exams and entrance tests',
    icon: FileText,
    items: ['UPSC', 'SSC', 'Banking Exams', 'IIT-JAM'],
  },
  {
    title: 'Custom Packages',
    description: 'Tailored learning paths for unique needs',
    icon: Users,
    items: ['Personalized Curriculum', 'Flexible Scheduling', 'Progress Tracking'],
  },
  {
    title: 'Mentoring Only',
    description: 'Guidance without traditional tutoring',
    icon: BookOpen,
    items: ['Career Counseling', 'Study Strategy', 'Materials Provided'],
  },
];

export function CoursesSection() {
  return (
    <section id="courses" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-medium text-primary/70 tracking-widest uppercase mb-4 block">
            Our Courses
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Discover Your Path
          </h2>
          <p className="text-lg text-muted-foreground">
            From foundational learning to competitive excellence, we offer comprehensive 
            courses designed for every academic journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-8 bg-secondary rounded-3xl border border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                <category.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {category.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-6">
                {category.description}
              </p>
              
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/919744978305?text=Hi%20SphereAlly,%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-sphere-navy-dark transition-all duration-300 hover:shadow-lg"
          >
            Explore All Courses
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
