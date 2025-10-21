'use client';

import Link from 'next/link';

export default function TeamPage() {
  const officers = [
    {
      name: "Om Janamanchi",
      title: "Co-President",
      major: "Computer Science",
      interests: "Swimming, Chess, Netflix",
      email: "ojanaman@purdue.edu",
      linkedin: "https://www.linkedin.com/in/om-janamanchi/",
      image: "/team/om-janamanchi.jpg"
    },
    {
      name: "Abha Gupta",
      title: "Co-President",
      major: "Computer Science",
      interests: "Leadership, Technology, Innovation",
      email: "gupt1107@purdue.edu",
      linkedin: "https://www.linkedin.com/in/abha-gupta/",
      image: "/team/abha-gupta.jpg"
    },
    {
      name: "Emily Zheng",
      title: "Treasurer",
      major: "Computer Science",
      interests: "Video Games (Stardew, Hollow Knight) & arts, music",
      email: "zheng849@purdue.edu",
      linkedin: "https://www.linkedin.com/in/emily-zheng-054890338/",
      image: "/team/emily-zheng.jpg"
    },
    {
      name: "Ashwati Palanivel",
      title: "Secretary",
      major: "Computer Science",
      interests: "Crocheting and Movies!",
      email: "palaniv1@purdue.edu",
      linkedin: "https://www.linkedin.com/in/ashwatipalanivel/",
      image: "/team/ashwati-palanivel.jpg"
    },
    {
      name: "Ruthu Shankar",
      title: "Outreach Coordinator",
      major: "Computer Science",
      interests: "Cooking, Cycling, Dancing",
      email: "shanka61@purdue.edu",
      linkedin: "https://www.linkedin.com/in/shankarruthu/",
      image: "/team/ruthu-shankar.jpg"
    },
    {
      name: "Shely Dash",
      title: "Outreach Coordinator",
      major: "Computer Science",
      interests: "Community Building, Technology",
      email: "sdash@purdue.edu",
      linkedin: "https://www.linkedin.com/in/shely-dash/",
      image: "/team/shely-dash.jpg"
    },
    {
      name: "Hana Zoaib",
      title: "Social Media Coordinator",
      major: "Data Science",
      interests: "Gym and reading",
      email: "hzoaib@purdue.edu",
      linkedin: "https://www.linkedin.com/in/hana-zoaib-7233b4345/",
      image: "/team/hana-zoaib.jpg"
    },
    {
      name: "Oluwatomi Oladunni",
      title: "Social Media Coordinator",
      major: "Computer Science BS",
      interests: "Reading, Playing FIFA, Cooking, and Entrepreneurship",
      email: "ooladunn@purdue.edu",
      linkedin: "https://www.linkedin.com/in/oluwatomi-oladunni-685708214/",
      image: "/team/oluwatomi-oladunni.jpg"
    },
    {
      name: "Richin Mrudul",
      title: "Webmaster",
      major: "Computer Science",
      interests: "Sacramento Kings, Gym, Cooking, Music",
      email: "rmrudul@purdue.edu",
      linkedin: "https://www.linkedin.com/in/richinmrudul/",
      image: "/team/richin-mrudul.jpg"
    },
    {
      name: "Aditya Raj Pundir",
      title: "Executive Member",
      major: "Computer Science",
      interests: "Technology, Leadership",
      email: "apundir@purdue.edu",
      linkedin: "https://www.linkedin.com/in/aditya-raj-pundir/",
      image: "/team/aditya-raj-pundir.jpg"
    },
    {
      name: "Aryaman Patel",
      title: "Underclassmen Rep",
      major: "Computer Science",
      interests: "Rock climbing and watching sports",
      email: "pate2794@purdue.edu",
      linkedin: "https://www.linkedin.com/in/aryamanp7/",
      image: "/team/aryaman-patel.jpg"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {officers.map((officer, index) => (
                <div
                  key={index}
                  className="glass-effect cyber-border rounded-2xl p-6 text-center hover:neon-glow transition-all duration-500 group animate-fade-in-up hover:scale-105 transform"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r style={{background: 'linear-gradient(to right, #ceb991, #cdba8e)'}} rounded-full flex items-center justify-center group-hover:neon-glow transition-all duration-300 floating overflow-hidden">
                    <img 
                      src={officer.image} 
                      alt={officer.name}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    <span className="style={{color: '#fdfcfb'}} font-mokoto font-bold text-2xl hidden">
                      {officer.name.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-mokoto font-bold style={{color: '#fdfcfb'}} mb-2">{officer.name}</h3>
                  <p className="style={{color: '#ceb991'}} font-canvasans-medium mb-2 text-lg">{officer.title}</p>
                  <p className="text-sm style={{color: '#9f9d9d'}} mb-3">{officer.major}</p>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">{officer.interests}</p>
                  <div className="flex flex-col space-y-2">
                    <a 
                      href={`mailto:${officer.email}`}
                      className="text-xs style={{color: '#00ff88'}} hover:style={{color: '#ceb991'}} transition-colors"
                    >
                      📧 {officer.email}
                    </a>
                    <a 
                      href={officer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs style={{color: '#00ff88'}} hover:style={{color: '#ceb991'}} transition-colors"
                    >
                      🔗 LinkedIn
                    </a>
                  </div>
                </div>
              ))}
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
