'use client';

import Link from 'next/link';

export default function TeamPage() {
  const officers = [
    {
      name: "President",
      title: "President",
      image: "/placeholder-officer.jpg",
      description: "Leading the organization and overseeing all hackathon operations."
    },
    {
      name: "Vice President",
      title: "Vice President", 
      image: "/placeholder-officer.jpg",
      description: "Supporting the president and managing day-to-day operations."
    },
    {
      name: "Treasurer",
      title: "Treasurer",
      image: "/placeholder-officer.jpg", 
      description: "Managing finances and sponsor relations."
    },
    {
      name: "Secretary",
      title: "Secretary",
      image: "/placeholder-officer.jpg",
      description: "Handling communications and administrative tasks."
    },
    {
      name: "Tech Lead",
      title: "Tech Lead",
      image: "/placeholder-officer.jpg",
      description: "Overseeing technical aspects of the hackathon."
    },
    {
      name: "Marketing Lead",
      title: "Marketing Lead", 
      image: "/placeholder-officer.jpg",
      description: "Managing outreach and promotional activities."
    }
  ];

  const advisors = [
    {
      name: "Dr. Faculty Advisor",
      title: "Faculty Advisor",
      image: "/placeholder-advisor.jpg",
      description: "Providing academic guidance and institutional support."
    },
    {
      name: "Industry Mentor",
      title: "Industry Mentor",
      image: "/placeholder-advisor.jpg", 
      description: "Offering industry insights and career guidance."
    }
  ];

  return (
    <div className="min-h-screen bg-black style={{color: '#fdfcfb'}} relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-glow" style={{background: 'rgba(206, 185, 145, 0.05)'}}></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s', background: 'rgba(0, 255, 136, 0.05)'}}></div>
      
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full glass-effect border-b border-green-500/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* CS Club Logo */}
            <div 
              className="flex items-center space-x-4 animate-fade-in-up cursor-pointer hover:opacity-80 transition-opacity duration-300"
              onClick={() => window.location.href = '/'}
            >
              <img 
                src="/logocsclub.jpg" 
                alt="CS Club Logo" 
                className="w-10 h-10 object-contain neon-glow"
              />
              <span className="style={{color: '#ceb991'}} font-canvasans-medium text-sm">Purdue Indianapolis</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#about" className="style={{color: '#fdfcfb'}} hover:style={{color: '#ceb991'}} transition-all duration-300 font-canvasans-medium hover:scale-105">About</Link>
              <a href="/team" className="style={{color: '#ceb991'}} font-canvasans-medium">Team</a>
              <Link href="/#schedule" className="style={{color: '#fdfcfb'}} hover:style={{color: '#ceb991'}} transition-all duration-300 font-canvasans-medium hover:scale-105">Schedule</Link>
              <Link href="/#faq" className="style={{color: '#fdfcfb'}} hover:style={{color: '#ceb991'}} transition-all duration-300 font-canvasans-medium hover:scale-105">FAQ</Link>
              <Link href="/#sponsors" className="style={{color: '#fdfcfb'}} hover:style={{color: '#ceb991'}} transition-all duration-300 font-canvasans-medium hover:scale-105">Sponsors</Link>
            </div>

            {/* Apply Now Button */}
            <a
              href="https://forms.gle/your-interest-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r style={{background: 'linear-gradient(to right, #cdba8e, #383435)'}} style={{color: '#fdfcfb'}} px-6 py-2 rounded-lg font-mokoto font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 gold-glow hover:scale-105"
            >
              Apply Now!
            </a>
          </div>
        </div>
      </nav>

      {/* Team Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-mokoto font-bold mb-6 bg-gradient-to-r from-green-400 via-green-300 to-yellow-400 bg-clip-text text-transparent animate-fade-in-up">
              TEAM
            </h1>
            <p className="text-2xl style={{color: '#ceb991'}} font-canvasans-medium animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Meet the people behind Hack Indy 2026
            </p>
          </div>

          {/* Officers Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-mokoto font-bold text-center mb-16 bg-gradient-to-r style={{background: 'linear-gradient(to right, #ceb991, #cdba8e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} bg-clip-text text-transparent animate-fade-in-up">
              Officers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {officers.map((officer, index) => (
                <div
                  key={index}
                  className="glass-effect cyber-border rounded-2xl p-8 text-center hover:neon-glow transition-all duration-500 group animate-fade-in-up hover:scale-105 transform"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-36 h-36 mx-auto mb-8 bg-gradient-to-r style={{background: 'linear-gradient(to right, #ceb991, #cdba8e)'}} rounded-full flex items-center justify-center group-hover:neon-glow transition-all duration-300 floating">
                    <span className="style={{color: '#fdfcfb'}} font-mokoto font-bold text-3xl">
                      {officer.name.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-mokoto font-bold style={{color: '#fdfcfb'}} mb-3">{officer.name}</h3>
                  <p className="style={{color: '#ceb991'}} font-canvasans-medium mb-6 text-lg">{officer.title}</p>
                  <p className="text-gray-300 leading-relaxed">{officer.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Advisors Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-mokoto font-bold text-center mb-16 bg-gradient-to-r style={{background: 'linear-gradient(to right, #ceb991, #cdba8e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} bg-clip-text text-transparent animate-fade-in-up">
              Advisors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {advisors.map((advisor, index) => (
                <div
                  key={index}
                  className="glass-effect cyber-border rounded-2xl p-10 text-center hover:gold-glow transition-all duration-500 group animate-fade-in-up hover:scale-105 transform"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="w-44 h-44 mx-auto mb-8 bg-gradient-to-r style={{background: 'linear-gradient(to right, #cdba8e, #383435)'}} rounded-full flex items-center justify-center group-hover:gold-glow transition-all duration-300 floating">
                    <span className="style={{color: '#fdfcfb'}} font-mokoto font-bold text-4xl">
                      {advisor.name.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-mokoto font-bold style={{color: '#fdfcfb'}} mb-3">{advisor.name}</h3>
                  <p className="style={{color: '#ceb991'}} font-canvasans-medium mb-6 text-lg">{advisor.title}</p>
                  <p className="text-gray-300 leading-relaxed text-lg">{advisor.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Join Us Section */}
          <div className="text-center animate-fade-in-up">
            <div className="glass-effect cyber-border rounded-2xl p-12 neon-glow hover:scale-105 transition-all duration-500">
              <h2 className="text-3xl font-mokoto font-bold style={{color: '#fdfcfb'}} mb-6">Want to Join Our Team?</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                We're always looking for passionate students to help make Hack Indy even better!
              </p>
              <a
                href="https://forms.gle/your-interest-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 style={{color: '#fdfcfb'}} px-10 py-4 rounded-xl font-mokoto font-bold text-xl hover:from-green-400 hover:to-green-500 transition-all duration-300 inline-block hover:scale-105 transform neon-glow"
              >
                Join the Team
              </a>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-4 h-4 rounded-full animate-pulse-glow floating" style={{background: '#00ff88'}}></div>
          <div className="absolute top-40 right-20 w-6 h-6 rounded-full animate-pulse-glow floating" style={{animationDelay: '1s', background: '#ceb991'}}></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 rounded-full animate-pulse-glow floating" style={{animationDelay: '2s', background: '#00cc66'}}></div>
        </div>
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
