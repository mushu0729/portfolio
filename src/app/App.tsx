import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Video, Trophy, BookOpen, Award, Heart, FileText, Github, Linkedin, Mail, ChevronDown, Twitch, Youtube, Twitter, Menu, X, Instagram } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import pic from "./pic.jpeg";

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'achievements', 'volunteering'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Education', 'Achievements', 'Volunteering'];

  const projects = [
    {
      title: 'VIDYA VAHINI - AN EDUCATIONAL STREAMING PLATFORM',
      description: 'Developed an educational live streaming platform with video upload (MP4 → HLS), RTMP live streaming, Google OAuth login, and a gamified coin-based ecosystem for students and tutors.',
      tags: ['Flask', 'MySQL', 'Bootstrap', 'FFmpeg', 'Streaming'],
    },
    {
      title: 'ESPORTS COMMUNITY CONNECT',
      description: 'Built an esports community platform using APIs to fetch gaming and tournament data, enabling users to explore teams, events, and live esports updates.',
      tags: ['API Integration', 'JavaScript', 'Web Development'],
    },
    {
      title: 'WEATHER FORECAST APPLICATION',
      description: 'Developed a responsive weather forecasting web application using external weather APIs to display real-time temperature, humidity, and location-based weather conditions.',
      tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    },
    {
      title: 'CLINIC MANAGEMENT SYSTEM',
      description: 'Created a web-based clinic management system to manage patient records, appointments, and doctor information, improving data organization and administrative efficiency.',
      tags: ['Database', 'CRUD', 'Web Application'],
    }
  ];

  const skills = [
    { category: 'Programming', items: ['Java', 'Python', 'JavaScript', 'C++', 'C', 'SQL', 'HTML', 'CSS'] },
    { category: 'Programming Tools', items: ['IDEs', 'Version Control', 'Debugging Tools','Visual Studio'] },
    { category: 'Content Creation', items: ['Video Editing', 'Graphic Design', 'Stream Management', 'OBS Studio', 'Adobe Creative Suite'] },
    { category: 'Community Management', items: ['Discord', 'Twitch Moderation', 'Social Media', 'Engagement Strategy', 'Event Planning'] },
    { category: 'Gaming', items: ['FPS Games', 'Strategy Games', 'Competitive Gaming', 'Game Analysis', 'Meta Understanding'] },
    { category: 'Tools', items: ['Streamlabs', 'StreamElements', 'Canva', 'Photoshop', 'Discord Bots'] }
  ];

  const experience = [
    {
      role: 'Content Manager & Community Lead',
      company: 'RVNC ESPORTS',
      period: '2023 - 2025',
      description: 'Managing content strategy for 10+ streamers, coordinating collaborations, and growing combined audience of 100K+ followers. Oversee community events and engagement initiatives.'
    },
    {
      role: 'Stream Assistant & Moderator',
      company: 'Freelance - Various Streamers',
      period: '2021 - Present',
      description: 'Provided stream assistance including chat moderation, social media management, and content planning. Helped streamers grow their channels by 200-500% on average.'
    },
    {
      role: 'Gaming Community Manager',
      company: 'S8UL ESPORTS',
      period: '2020 - Present',
      description: 'Managed a gaming community of 5K+ members, organized weekly events, and created content calendars. Increased monthly active users by 60%.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering',
      college: 'K N S Institute of Technology',
      period: '2022 - 2026',
      details: 'Focus on learning programming languages, software development, and problem-solving skills. Participated in coding competitions and hackathons.'
    },
    {
      degree: 'Pre University',
      school: 'SPSS PU Science College',
      period: '2020 - 2022',
      details: 'Focus on Science stream with subjects like Physics, Chemistry, Mathematics, and Biology.'
    },
    {
      degree: 'SSLC (10th Grade)',
      school: 'Adarsha Vidyalaya',
      period: '2020',
      details: 'Focus on basic education and foundational learning.'
    }
  ];

  const achievements = [
    {
      title: 'Rajya Puraskar',
      organization: 'Bharat Scouts and Guides',
      year: '2020',
      description: 'Recognized for outstanding contributions to community service and leadership in scouting activities'
    },
    {
      title: 'Best Tournament Coordinator',
      organization: 'The Esports Club',
      year: '2024',
      description: 'Successfully organized the largest online tournament in region with 1000+ participants'
    }
  ];

  const volunteering = [
    {
      role: 'Tournament Watchparty Manager',
      organization: 'The Esports Club',
      period: '2023',
      description: 'for VCT Pacific League, coordinating watch parties for 500+ viewers and fostering community engagement around competitive gaming events.'
    },
    {
      role: 'Watchparty Crowd Manager',
      organization: 'The Esports Club',
      period: '2024',
      description: 'for VCSA Spring Split, managing watch parties for 200+ viewers and creating engaging content around competitive gaming events.'
    },
    {
      role: 'Lan Admin',
      organization: 'Krafton India Esports',
      period: '2022',
      description: 'for BGIS 2022, managing LAN event logistics and ensuring smooth operation for 64 participants and attendees.'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <motion.div 
              className="flex-shrink-0 cursor-pointer"
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="font-mono text-cyan-400 font-bold">
                <span className="text-lg sm:text-xl drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
                  &lt;D M MOHAMAD MOHIUDDIN  /&gt;
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.slice(1).map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-xs font-mono transition-all duration-300 whitespace-nowrap px-3 py-1 rounded relative ${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]'
                      : 'text-gray-400 hover:text-cyan-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  [{item}]
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center gap-2">
             <a href="https://www.youtube.com/@IYIxRECTOR" target="_blank" rel="noopener noreferrer"> 
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </Button>
             </a>
             <a href="https://github.com/mushu0729" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </Button>
             </a>
              <a href="https://www.linkedin.com/in/mushu0729" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
             </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-cyan-400 hover:bg-cyan-400/10"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={mobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden border-t border-cyan-400/20"
        >
          <div className="px-4 py-4 space-y-2 bg-black/95">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left text-sm font-mono transition-all duration-300 px-4 py-2 rounded ${
                  activeSection === item.toLowerCase()
                    ? 'text-cyan-400 bg-cyan-400/10 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]'
                    : 'text-gray-400 hover:text-cyan-300 hover:bg-cyan-400/5'
                }`}
              >
                [{item}]
              </button>
            ))}
            
            {/* Mobile Social Icons */}
            <div className="flex items-center gap-2 pt-4 border-t border-cyan-400/20">
              <a href="https://www.youtube.com/@IYIxRECTOR" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10"
              >
                <Youtube className="w-5 h-5" />
              </Button>
              </a>
              <a href="https://github.com/mushu0729" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10"
              >
                <Github className="w-5 h-5" />
              </Button>
              </a>
              <a href="https://www.linkedin.com/in/mushu0729" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Code Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 font-mono text-xs text-cyan-400/40">
            <pre>{`// System Online
const creator = {
  role: 'Content Strategist',
  passion: 'Gaming & Streaming'
};

> Ready to stream...`}</pre>
          </div>
          <div className="absolute top-20 right-10 font-mono text-xs text-cyan-400/40">
            <pre>{`[!] Community active
if (gaming) {
  console.log('Let\\'s Go!');
}`}</pre>
          </div>
          <div className="absolute bottom-40 left-10 font-mono text-xs text-cyan-400/40">
            <pre>{`> Engagement: MAX`}</pre>
          </div>
          <div className="absolute bottom-40 right-10 font-mono text-xs text-cyan-400/40">
            <pre>{`// Creating content
> Building communities`}</pre>
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              animate={{
                x: [Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
                y: [Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000), Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%'
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-bold tracking-wider mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              D M MOHAMAD MOHIUDDIN MUSHAHEDULLA
            </h1>
            <div className="font-mono text-xl md:text-2xl mb-8 text-cyan-400">
              &lt;&lt; Java Developer | SQL Developer | Frontend Developer | Gaming Enthusiast  &lt;/&gt;
            </div>
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 px-8 py-6 text-lg rounded-none font-mono"
            >
              Explore Work
            </Button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <img 
              src={pic} 
              alt="Picture" 
              className="w-full h-auto" 
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-12 text-cyan-400 font-mono">&lt;About /&gt;</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-300 mb-6">
                  I'm a passionate gaming enthusiast and content strategist who helps streamers build their brands 
                  and grow engaged communities. With years of experience in content creation, community management, 
                  and gaming culture, I bridge the gap between creators and their audiences.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  When I'm not helping streamers optimize their content, you'll find me gaming, analyzing meta strategies, 
                  coordinating community events, or creating resources to help the next generation of content creators succeed.
                </p>
                <div className="flex gap-4">
                 <a href="https://www.instagram.com/_md_mushahedulla_0729_/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                    <Instagram className="w-5 h-5" />
                  </Button>
                 </a>
                 <a href="https://www.youtube.com/@IYIxRECTOR" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                    <Youtube className="w-5 h-5" />
                  </Button>
                 </a>
                 <a href="https://twitter.com/md_mushahedulla" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                    <Twitter className="w-5 h-5" />
                  </Button>
                 </a>
                 <a href="https://www.linkedin.com/in/mushu0729" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                 </a>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-500/30 p-6 text-center hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300">
                  <Users className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                  <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                  <div className="text-sm text-gray-400">Communities</div>
                </Card>
                <Card className="bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-500/30 p-6 text-center hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300">
                  <Video className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                  <div className="text-sm text-gray-400">Streamers</div>
                </Card>
                <Card className="bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-500/30 p-6 text-center hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300">
                  <Trophy className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                  <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                  <div className="text-sm text-gray-400">Years</div>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-6 bg-gradient-to-b from-black to-cyan-950/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-12 text-cyan-400 font-mono">&lt;Projects /&gt;</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-12 text-cyan-400 font-mono">&lt;Skills /&gt;</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-500/30 p-6 h-full hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300">
                    <h3 className="text-xl font-bold mb-4 text-cyan-400">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="outline" className="border-cyan-400/50 text-cyan-400">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 px-6 bg-gradient-to-b from-black to-cyan-950/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-12 text-cyan-400 font-mono">&lt;Work Experience /&gt;</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-500/30 p-6 hover:border-cyan-400 transition-colors">
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                        <p className="text-cyan-400">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="border-cyan-400/50 text-cyan-400">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-12 text-cyan-400 font-mono">&lt;Education /&gt;</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-500/30 p-6 hover:border-cyan-400 transition-colors">
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                          <BookOpen className="w-6 h-6 text-cyan-400" />
                          {edu.degree}
                        </h3>
                        <p className="text-cyan-400">{edu.school}</p>
                      </div>
                      <Badge variant="outline" className="border-cyan-400/50 text-cyan-400">
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-gray-300">{edu.details}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="min-h-screen py-20 px-6 bg-gradient-to-b from-black to-cyan-950/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-12 text-cyan-400 font-mono">&lt;Achievements /&gt;</h2>
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-500/30 p-6 hover:border-cyan-400 transition-colors">
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                          <Award className="w-6 h-6 text-cyan-400" />
                          {achievement.title}
                        </h3>
                        <p className="text-cyan-400">{achievement.organization}</p>
                      </div>
                      <Badge variant="outline" className="border-cyan-400/50 text-cyan-400">
                        {achievement.year}
                      </Badge>
                    </div>
                    <p className="text-gray-300">{achievement.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section id="volunteering" className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-12 text-cyan-400 font-mono">&lt;Volunteering & Leadership /&gt;</h2>
            <div className="space-y-8">
              {volunteering.map((vol, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-500/30 p-6 hover:border-cyan-400 transition-colors">
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                          <Heart className="w-6 h-6 text-cyan-400" />
                          {vol.role}
                        </h3>
                        <p className="text-cyan-400">{vol.organization}</p>
                      </div>
                      <Badge variant="outline" className="border-cyan-400/50 text-cyan-400">
                        {vol.period}
                      </Badge>
                    </div>
                    <p className="text-gray-300">{vol.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 font-mono">
            &lt;/&gt; with 💙 by D M MOHAMAD MOHIUDDIN MUSHAHEDULLA | {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      // whileHover={{ y: -5 }}
    >
      <Card className="bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-500/30 overflow-hidden group hover:border-cyan-400 transition-all duration-300 h-full">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="outline" className="border-cyan-400/50 text-cyan-400">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
