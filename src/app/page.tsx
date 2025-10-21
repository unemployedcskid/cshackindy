'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');
  
  // Track which section is currently in view and handle scroll animations
  useEffect(() => {
    const sections = ['about', 'schedule', 'faq', 'sponsors'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Add visible class to scroll-fade-in elements in this section
            const fadeElements = entry.target.querySelectorAll('.scroll-fade-in');
            fadeElements.forEach((element) => {
              element.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a Hackathon?",
      answer: "Hack Indy is a three-day overnight event where you can learn, build, and showcase an exciting technology-based project! Beyond working on your project, you'll enjoy free food, swag, and the chance to win awesome prizes. We also host industry-driven workshops, engineering panels, and fun activities like video game tournaments to keep the energy high. Most importantly, Hack Indy is a welcoming space to network with top executives in the Indianapolis tech scene and connect with like-minded students from all majors and experience levels."
    },
    {
      question: "Who can attend and how much experience do I need to participate?",
      answer: "Any undergraduate university student age 18 or older from any school or major can attend Hack Indy! No experience or technical background is required to participate, and we have mentors on site to assist with any technical needs. We also have unique and enriching experiences available to more skilled hackers, with special technologies and tech talks offered."
    },
    {
      question: "Do I have to apply to participate in Hack Indy?",
      answer: "You do not need to apply to participate in Hack Indy, we are open to all students of all majors. Just fill out our Interest form, so we can keep track of participants."
    },
    {
      question: "What projects can I make at Hack Indy?",
      answer: "You can build any project you want at Hack Indy! We have no strict project requirements, other than that it was built at the hackathon itself. Every year, we see a wide variety of technologies used and various applications for projects, and even see hardware-based projects — the possibilities are endless!"
    },
    {
      question: "Does Hack Indy offer travel reimbursements?",
      answer: "Hack Indy will not offer travel reimbursements at this time to those attending from other universities. We do provide all meals while you are at the hackathon. The Hack Indy hackathon venue will be open during the entire duration of the hackathon, and there are many nearby locations which can offer housing over the course of the two nights"
    }
  ];

  return (
    <div className="min-h-screen bg-black style={{color: '#fdfcfb'}} relative overflow-hidden">
      {/* Matrix Circuit Background */}
      <div className="matrix-bg"></div>
      <div className="circuit-overlay"></div>
      
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 opacity-50"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-glow" style={{background: 'rgba(206, 185, 145, 0.05)'}}></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s', background: 'rgba(0, 255, 136, 0.05)'}}></div>
      <div className="fixed top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '3s', background: 'rgba(0, 204, 102, 0.03)'}}></div>
      
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full glass-effect border-b border-green-500/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
                  {/* CS Club Logo */}
                  <div 
                    className="flex items-center space-x-4 animate-fade-in-up cursor-pointer hover:opacity-80 transition-opacity duration-300"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <img 
                      src="/logocsclub.jpg" 
                      alt="CS Club Logo" 
                      className="w-10 h-10 object-contain neon-glow"
                    />
                    <span className="font-canvasans-medium text-sm" style={{color: '#ceb991'}}>Purdue in Indianapolis</span>
                  </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className={`transition-all duration-300 font-canvasans-medium hover:scale-105 ${activeSection === 'about' ? 'text-green-400' : ''}`} style={{color: activeSection === 'about' ? '#00ff88' : '#fdfcfb'}} onMouseEnter={(e) => !activeSection && ((e.target as HTMLElement).style.color = '#ceb991')} onMouseLeave={(e) => !activeSection && ((e.target as HTMLElement).style.color = '#fdfcfb')}>About</a>
              <a href="#schedule" className={`transition-all duration-300 font-canvasans-medium hover:scale-105 ${activeSection === 'schedule' ? 'text-green-400' : ''}`} style={{color: activeSection === 'schedule' ? '#00ff88' : '#fdfcfb'}} onMouseEnter={(e) => !activeSection && ((e.target as HTMLElement).style.color = '#ceb991')} onMouseLeave={(e) => !activeSection && ((e.target as HTMLElement).style.color = '#fdfcfb')}>Schedule</a>
              <a href="#faq" className={`transition-all duration-300 font-canvasans-medium hover:scale-105 ${activeSection === 'faq' ? 'text-green-400' : ''}`} style={{color: activeSection === 'faq' ? '#00ff88' : '#fdfcfb'}} onMouseEnter={(e) => !activeSection && ((e.target as HTMLElement).style.color = '#ceb991')} onMouseLeave={(e) => !activeSection && ((e.target as HTMLElement).style.color = '#fdfcfb')}>FAQ</a>
              <a href="#sponsors" className={`transition-all duration-300 font-canvasans-medium hover:scale-105 ${activeSection === 'sponsors' ? 'text-green-400' : ''}`} style={{color: activeSection === 'sponsors' ? '#00ff88' : '#fdfcfb'}} onMouseEnter={(e) => !activeSection && ((e.target as HTMLElement).style.color = '#ceb991')} onMouseLeave={(e) => !activeSection && ((e.target as HTMLElement).style.color = '#fdfcfb')}>Sponsors</a>
              <Link href="/team" className="transition-all duration-300 font-canvasans-medium hover:scale-105" style={{color: '#fdfcfb'}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#ceb991'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#fdfcfb'}>Team</Link>
            </div>

            {/* Apply Now Button */}
            <a
              href="https://forms.gle/your-interest-form-link"
            target="_blank"
            rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg font-canvasans-bold transition-all duration-300 gold-glow hover:scale-105"
              style={{background: 'linear-gradient(to right, #00ff88, #00cc66)', color: '#fdfcfb'}}
          >
              Apply Now!
          </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-80 pb-64 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-12 space-y-6">
            <h1 className="text-7xl md:text-9xl font-mokoto font-bold mb-6 animate-fade-in-up" style={{background: 'linear-gradient(to right, #ceb991, #fdfcfb, #cdba8e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              HACK INDY
            </h1>
            <h2 className="text-5xl md:text-7xl font-mokoto font-bold mb-8 animate-fade-in-up" style={{animationDelay: '0.2s', color: '#fdfcfb'}}>2026</h2>
            <p className="text-2xl md:text-3xl font-canvasans-semibold mb-12 animate-fade-in-up" style={{animationDelay: '0.4s', color: '#ceb991'}}>
              Friday 3/27 - Sunday 3/29
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a
              href="https://forms.gle/your-interest-form-link"
          target="_blank"
          rel="noopener noreferrer"
              className="px-10 py-5 rounded-xl font-canvasans-bold text-xl transition-all duration-300 neon-green-glow hover:scale-105 transform"
              style={{background: 'linear-gradient(to right, #00ff88, #00cc66)', color: '#fdfcfb'}}
            >
              Apply Now!
        </a>
        <a
              href="https://devpost.com/hackindy2026"
          target="_blank"
          rel="noopener noreferrer"
              className="px-10 py-5 rounded-xl font-canvasans-bold text-xl transition-all duration-300 gold-glow hover:scale-105 transform"
              style={{background: 'linear-gradient(to right, #cdba8e, #ceb991)', color: '#fdfcfb'}}
            >
              Devpost
            </a>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full animate-pulse-glow floating" style={{background: '#ceb991'}}></div>
        <div className="absolute top-40 right-20 w-6 h-6 rounded-full animate-pulse-glow floating" style={{animationDelay: '1s', background: '#00ff88'}}></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 rounded-full animate-pulse-glow floating" style={{animationDelay: '2s', background: '#00cc66'}}></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-mokoto font-bold text-center mb-16 scroll-fade-in" style={{color: '#fdfcfb'}}>
            About
          </h2>
          <div className="glass-effect cyber-border rounded-2xl p-10 hover:neon-glow transition-all duration-500 animate-scale-in">
            <p className="text-xl leading-relaxed font-canvasans" style={{color: 'rgba(253, 252, 251, 0.9)'}}>
              Hack Indy is Purdue University in Indianapolis' largest student-run hackathon, bringing together over 300 students across countless majors to compete in a three-day overnight hackathon for exciting prizes. Open to everyone—no matter your experience level—Hack Indy is designed to provide an inclusive and impactful experience for all participants. You'll have the chance to attend industry-driven workshops, network with top executives in the Indianapolis tech scene, and learn from engineering panels. Beyond hacking, you can join video game tournaments, play fun games, win cool prizes, and enjoy free swag and food—all while building valuable skills and making unforgettable memories. Hack Indy is truly a one-of-a-kind experience for every student!
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-8 h-8 border-2 rotate-45 animate-pulse-glow" style={{borderColor: 'rgba(206, 185, 145, 0.3)'}}></div>
        <div className="absolute bottom-10 left-10 w-6 h-6 border-2 rounded-full animate-pulse-glow" style={{animationDelay: '1s', borderColor: 'rgba(0, 255, 136, 0.3)'}}></div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-mokoto font-bold text-center mb-16 scroll-fade-in" style={{background: 'linear-gradient(to right, #ceb991, #cdba8e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            Schedule
          </h2>
          
          {/* Friday Schedule */}
          <div className="mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-3xl font-mokoto font-bold style={{color: '#ceb991'}} mb-8">Friday 3/27</h3>
            <div className="glass-effect cyber-border rounded-xl overflow-hidden hover:neon-glow transition-all duration-500">
              <table className="w-full">
                <thead className="bg-amber-500/10">
                  <tr>
                    <th className="px-8 py-5 text-left style={{color: '#ceb991'}} font-canvasans-bold text-lg">Time</th>
                    <th className="px-8 py-5 text-left style={{color: '#ceb991'}} font-canvasans-bold text-lg">Event</th>
                    <th className="px-8 py-5 text-left style={{color: '#ceb991'}} font-canvasans-bold text-lg">Location</th>
                  </tr>
                </thead>
                <tbody className="style={{color: '#fdfcfb'}}/90">
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">5:00 - 6:00 PM</td>
                    <td className="px-8 py-5 text-lg">Check In & Registration</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">6:00 - 6:30 PM</td>
                    <td className="px-8 py-5 text-lg">Swag Distribution</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">6:30 - 7:00 PM</td>
                    <td className="px-8 py-5 text-lg">CS Dept Head Petros Keynote Address</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">7:00 - 7:30 PM</td>
                    <td className="px-8 py-5 text-lg">Dinner</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">7:30 - 8:30 PM</td>
                    <td className="px-8 py-5 text-lg">Opening Ceremony</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">8:30 - 9:00 PM</td>
                    <td className="px-8 py-5 text-lg">Team Building & Hacking Starts</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">10:00 PM</td>
                    <td className="px-8 py-5 text-lg">Overnight Hacking Begins</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">10:30 PM</td>
                    <td className="px-8 py-5 text-lg">Officer Led Workshop</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Saturday Schedule */}
          <div className="mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h3 className="text-3xl font-mokoto font-bold style={{color: '#ceb991'}} mb-8 font-mono">Saturday 3/28</h3>
            <div className="glass-effect cyber-border rounded-xl overflow-hidden hover:neon-glow transition-all duration-500">
              <table className="w-full">
                <thead className="bg-amber-500/10">
                  <tr>
                    <th className="px-8 py-5 text-left style={{color: '#ceb991'}} font-canvasans-bold text-lg">Time</th>
                    <th className="px-8 py-5 text-left style={{color: '#ceb991'}} font-canvasans-bold text-lg">Event</th>
                    <th className="px-8 py-5 text-left style={{color: '#ceb991'}} font-canvasans-bold text-lg">Location</th>
                  </tr>
                </thead>
                <tbody className="style={{color: '#fdfcfb'}}/90">
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">12:00 - 1:00 AM</td>
                    <td className="px-8 py-5 text-lg">Midnight Snacks</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">7:00 - 8:00 AM</td>
                    <td className="px-8 py-5 text-lg">Breakfast</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">8:00 - 10:00 AM</td>
                    <td className="px-8 py-5 text-lg">Indy Hackers Workshop</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">10:00 - 11:00 AM</td>
                    <td className="px-8 py-5 text-lg">Eli Lilly Workshop</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">11:00 - 12:00 PM</td>
                    <td className="px-8 py-5 text-lg">Unity VR Workshop</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">12:00 - 1:00 PM</td>
                    <td className="px-8 py-5 text-lg">Lunch</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">1:00 - 5:00 PM</td>
                    <td className="px-8 py-5 text-lg">Employer Networking Fair (Indy Tech Companies)</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">5:00 - 6:00 PM</td>
                    <td className="px-8 py-5 text-lg">Tech Engineering Panel</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">6:00 - 7:00 PM</td>
                    <td className="px-8 py-5 text-lg">Dinner</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">7:00 - 9:00 PM</td>
                    <td className="px-8 py-5 text-lg">Video Game Tournament</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">10:00 PM</td>
                    <td className="px-8 py-5 text-lg">Overnight Hacking Continues</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sunday Schedule */}
          <div className="mb-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <h3 className="text-3xl font-mokoto font-bold style={{color: '#ceb991'}} mb-8 font-mono">Sunday 3/29</h3>
            <div className="glass-effect cyber-border rounded-xl overflow-hidden hover:neon-glow transition-all duration-500">
              <table className="w-full">
                <thead className="bg-amber-500/10">
                  <tr>
                    <th className="px-8 py-5 text-left style={{color: '#ceb991'}} font-canvasans-bold text-lg">Time</th>
                    <th className="px-8 py-5 text-left style={{color: '#ceb991'}} font-canvasans-bold text-lg">Event</th>
                    <th className="px-8 py-5 text-left style={{color: '#ceb991'}} font-canvasans-bold text-lg">Location</th>
                  </tr>
                </thead>
                <tbody className="style={{color: '#fdfcfb'}}/90">
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">12:00 - 1:00 AM</td>
                    <td className="px-8 py-5 text-lg">Midnight Snacks</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">7:00 - 8:00 AM</td>
                    <td className="px-8 py-5 text-lg">Breakfast</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">8:00 - 12:00 PM</td>
                    <td className="px-8 py-5 text-lg">Hacking Continues</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">12:00 - 1:00 PM</td>
                    <td className="px-8 py-5 text-lg">Lunch</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">1:00 - 4:00 PM</td>
                    <td className="px-8 py-5 text-lg">Hacking Continues</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">4:00 PM</td>
                    <td className="px-8 py-5 text-lg">Project Submissions</td>
                    <td className="px-8 py-5 text-lg">Devpost Website</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">4:00 - 6:00 PM</td>
                    <td className="px-8 py-5 text-lg">Judging Symposium</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">6:00 - 8:00 PM</td>
                    <td className="px-8 py-5 text-lg">Dinner</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                  <tr className="border-t border-amber-400/20 hover:bg-amber-500/5 transition-colors">
                    <td className="px-8 py-5 font-canvasans-bold text-lg">8:00 - 10:00 PM</td>
                    <td className="px-8 py-5 text-lg">Closing Ceremony</td>
                    <td className="px-8 py-5 text-lg">Student Center</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-48 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-mokoto font-bold text-center mb-16 scroll-fade-in" style={{background: 'linear-gradient(to right, #ceb991, #cdba8e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            FAQ
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-effect cyber-border rounded-xl overflow-hidden hover:neon-glow transition-all duration-500 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left style={{color: '#fdfcfb'}} hover:style={{color: '#ceb991'}} transition-all duration-300 flex justify-between items-center hover:bg-amber-500/5"
                >
                  <span className="font-canvasans-semibold text-xl">{faq.question}</span>
                  <span className="style={{color: '#ceb991'}} text-3xl transition-transform duration-300" style={{transform: openFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6 style={{color: '#fdfcfb'}}/90 leading-relaxed text-lg animate-fade-in-up font-canvasans">
                    {faq.answer}
                    {index === 2 && (
                      <span>
                        {' '}
                        <a
                          href="https://forms.gle/your-interest-form-link"
          target="_blank"
          rel="noopener noreferrer"
                          className="style={{color: '#ceb991'}} hover:style={{color: '#ceb991'}} underline transition-colors"
                        >
                          Interest form
                        </a>
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 border border-amber-400/40 rotate-45 animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 border border-yellow-400/40 rounded-full animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-32 pb-48 px-4 sm:px-6 lg:px-8 relative">
        {/* Glowy Background Circles */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full blur-3xl animate-pulse-glow" style={{background: 'rgba(206, 185, 145, 0.08)'}}></div>
        <div className="absolute top-40 right-20 w-40 h-40 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s', background: 'rgba(0, 255, 136, 0.06)'}}></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '3s', background: 'rgba(205, 186, 142, 0.07)'}}></div>
        <div className="absolute bottom-10 right-1/3 w-28 h-28 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '2s', background: 'rgba(0, 204, 102, 0.05)'}}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s', background: 'rgba(206, 185, 145, 0.06)'}}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '2.5s', background: 'rgba(0, 255, 136, 0.04)'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl font-mokoto font-bold text-center mb-16 scroll-fade-in" style={{color: '#fdfcfb'}}>
            Sponsors & Partners
          </h2>
          <div className="relative min-h-[900px]">
            {[
              // Row 1
              { logo: 'purdue cs logo transparent.png', x: '0%', y: '1%', size: 'w-56 h-56', delay: '0s'},
              { logo: 'rcac logo transparent.png', x: '20%', y: '1%', size: 'w-56 h-56', delay: '0.1s' },
              { logo: 'datamine logo transparent.png', x: '40%', y: '1%', size: 'w-56 h-56', delay: '0.2s' },
              { logo: 'indyhackers logo transparent.png', x: '60%', y: '1%', size: 'w-56 h-56', delay: '0.3s' },
              { logo: 'jane street logo transparent.png', x: '80%', y: '1%', size: 'w-56 h-56', delay: '0.4s' },
              
              // Row 2
              { logo: 'g-research ogo transparent.png', x: '0%', y: '30%', size: 'w-56 h-56', delay: '0.5s' },
              { logo: 'nms group logo transparent.png', x: '20%', y: '30%', size: 'w-56 h-56', delay: '0.6s' },
              { logo: 'sig logo.png', x: '40%', y: '30%', size: 'w-56 h-56', delay: '0.7s'},
              { logo: 'kusari logo transparent.png', x: '60%', y: '30%', size: 'w-56 h-56', delay: '0.8s' },
              { logo: 'anu logo.jpeg', x: '80%', y: '30%', size: 'w-56 h-56', delay: '0.9s' },
              
              // Row 3
              { logo: 'lilly logo transparent.png', x: '0%', y: '60%', size: 'w-56 h-56', delay: '1.0s' },
              { logo: 'realync logo transparent.png', x: '20%', y: '60%', size: 'w-56 h-56', delay: '1.1s' },
              { logo: 'farm bureau insurance logo transparent.png', x: '40%', y: '60%', size: 'w-56 h-56', delay: '1.2s' },
              { logo: 'crowe logo.jpg', x: '60%', y: '60%', size: 'w-56 h-56', delay: '1.3s'},
              { logo: 'axiomatic consulting logo transparent.png', x: '80%', y: '60%', size: 'w-56 h-56', delay: '1.4s' },
              
              // Row 4
              { logo: 'trava security logo.jpeg', x: '0%', y: '90%', size: 'w-56 h-56', delay: '1.5s'},
              { logo: 'momentum3 logo transparent.png', x: '20%', y: '90%', size: 'w-56 h-56', delay: '1.6s' },
              { logo: 'brooksource logo transparent.png', x: '40%', y: '90%', size: 'w-56 h-56', delay: '1.7s' }
            ].map((item, index) => (
              <div
                key={index}
                className={`absolute ${item.size} hover:scale-110 transition-all duration-500 animate-fade-in-up cursor-pointer`}
                style={{
                  left: item.x,
                  top: item.y,
                  animationDelay: item.delay
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.6))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.filter = 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))';
                }}
              >
                {/* Enhanced background for better visibility */}
                <div className="absolute inset-0 bg-white/90 rounded-lg p-2 shadow-lg" style={{
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 0 15px rgba(206, 185, 145, 0.2)'
                }}></div>
                <img 
                  src={`/sponsors/${item.logo}`}
                  alt="Sponsor Logo"
                  className="w-full h-full object-contain relative z-10"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-8 h-8 border-2 rotate-45 animate-pulse-glow" style={{borderColor: 'rgba(0, 255, 136, 0.3)'}}></div>
        <div className="absolute bottom-10 left-10 w-6 h-6 border-2 rounded-full animate-pulse-glow" style={{animationDelay: '2s', borderColor: 'rgba(0, 204, 102, 0.3)'}}></div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-green-500/30 glass-effect">
        <div className="max-w-6xl mx-auto text-center">
          <p className="style={{color: '#ceb991'}} font-canvasans-medium text-lg animate-fade-in-up">
            © 2026 Hack Indy - Purdue University Indianapolis
          </p>
          <div className="mt-4 flex justify-center space-x-8">
            <a href="https://forms.gle/your-interest-form-link" className="style={{color: '#ceb991'}} hover:style={{color: '#ceb991'}} transition-colors font-canvasans-medium">Interest Form</a>
            <a href="https://devpost.com/hackindy2026" className="style={{color: '#ceb991'}} hover:style={{color: '#ceb991'}} transition-colors font-canvasans-medium">Devpost</a>
          </div>
        </div>
      </footer>
    </div>
  );
}