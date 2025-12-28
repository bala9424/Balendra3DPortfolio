import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose, AiOutlineSend } from 'react-icons/ai';
import { BsStars } from 'react-icons/bs';

// Predefined Q&A about you
const aiResponses = {
  education: "I hold a Bachelor's degree in Computer Science. I've completed multiple certification training programs from NPTEL and NareshIT in web technologies, including React, Node.js, Angular, C, C++, and Modern Application Development.",
  
  skills: "I'm a Full Stack Software Engineer with 4+ years of experience. My core skills include:\n\n• Frontend: React, TypeScript, Angular, Material UI, SCSS\n• Backend: NestJS, Node.js, Express.js\n• Databases: SQL, GraphQL, MongoDB, MySQL, PostgreSQL\n• Testing: Jest (unit testing), WebdriverIO (E2E automation)\n• DevOps: Jenkins, Docker, CI/CD pipelines\n• Currently learning: AI, Data Science, Three.js 3D UI development",
  
  experience: "I have 4+ years of professional experience as a Full Stack Software Engineer. I've worked on enterprise-level supply chain management solutions, architected scalable microservices, and implemented comprehensive testing solutions. I received the 'Pat on the Back' award in my first year and the 'Shining Star' award in my second year at Divami for my outstanding performance and contributions.",
  
  projects: "I've built various projects including:\n• Enterprise supply chain management solutions using React.js and Node.js\n• Scalable microservices architecture for warehouse management systems\n• Full-stack web applications with modern tech stacks\n• E2E automation testing frameworks using WebdriverIO\n\nYou can check out my detailed projects in the Projects section!",
  
  contact: "You can reach me through:\n• Email: Check the Contact section\n• LinkedIn: Available in the footer\n• GitHub: Find my repositories in the footer links\n\nFeel free to connect with me for collaboration opportunities or just to chat about tech!",
  
  technologies: "I work with a wide range of technologies:\n• Languages: TypeScript, JavaScript, C, C++\n• Frontend Frameworks: React, Angular\n• Backend Frameworks: NestJS, Node.js, Express.js\n• UI Libraries: Material UI, SCSS, Tailwind CSS\n• Databases: MongoDB, MySQL, PostgreSQL, GraphQL\n• Testing Tools: Jest, WebdriverIO\n• DevOps: Docker, Jenkins, CI/CD\n• 3D Graphics: Three.js",
  
  achievements: "Some of my key achievements:\n🏆 'Pat on the Back' award in my first year at Divami for outstanding performance\n⭐ 'Shining Star' award in my second year at Divami for my contributions\n📚 Multiple certifications from NPTEL and NareshIT\n✅ Successfully implemented comprehensive testing solutions and CI/CD pipelines\n💼 Led development of enterprise-level applications",
  
  default: "I'm Balendra Paraste, a Full Stack Software Engineer with 4+ years of experience. I specialize in React, TypeScript, Node.js, and building scalable web applications. I'm passionate about clean code, testing, and currently exploring AI and Data Science. Feel free to ask me about my education, skills, experience, projects, or how to contact me!"
};

const predefinedQuestions = [
  { icon: "🎓", text: "Tell me about your education", key: "education" },
  { icon: "💻", text: "What are your technical skills?", key: "skills" },
  { icon: "💼", text: "Tell me about your work experience", key: "experience" },
  { icon: "🚀", text: "What projects have you built?", key: "projects" },
  { icon: "🏆", text: "What are your achievements?", key: "achievements" },
  { icon: "🛠️", text: "What technologies do you use?", key: "technologies" },
  { icon: "📧", text: "How can I contact you?", key: "contact" },
];

const AskAI = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      text: "👋 Hi! I'm Balendra's AI assistant. Ask me anything about his education, skills, experience, projects, or how to reach him!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    // Match keywords to responses
    if (lowerQuestion.includes('education') || lowerQuestion.includes('study') || lowerQuestion.includes('degree')) {
      return aiResponses.education;
    } else if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology') || lowerQuestion.includes('tech stack')) {
      return aiResponses.skills;
    } else if (lowerQuestion.includes('experience') || lowerQuestion.includes('work') || lowerQuestion.includes('job')) {
      return aiResponses.experience;
    } else if (lowerQuestion.includes('project') || lowerQuestion.includes('built') || lowerQuestion.includes('developed')) {
      return aiResponses.projects;
    } else if (lowerQuestion.includes('contact') || lowerQuestion.includes('reach') || lowerQuestion.includes('email')) {
      return aiResponses.contact;
    } else if (lowerQuestion.includes('achievement') || lowerQuestion.includes('award') || lowerQuestion.includes('accomplishment')) {
      return aiResponses.achievements;
    } else if (lowerQuestion.includes('technologies') || lowerQuestion.includes('tools') || lowerQuestion.includes('framework')) {
      return aiResponses.technologies;
    } else {
      return aiResponses.default;
    }
  };

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: text.trim() }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const response = getAIResponse(text);
      setMessages(prev => [...prev, { type: 'ai', text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuestionClick = (question) => {
    handleSend(question.text);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-70 z-[9999] flex items-center justify-center p-4 pt-[50vh]"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl h-[65vh] flex flex-col border border-purple-500/30 relative"
        >
          {/* Close Button - Top Right Corner */}
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all z-50 hover:scale-110"
            title="Close"
          >
            <AiOutlineClose className="text-xl" />
          </button>

          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 sm:p-3 rounded-full">
                <BsStars className="text-white text-xl sm:text-2xl" />
              </div>
              <div>
                <h2 className="text-white text-lg sm:text-2xl font-bold">Ask AI About Me</h2>
                <p className="text-gray-400 text-xs sm:text-sm">Get to know Balendra Paraste</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-3 sm:p-4 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gray-700 text-gray-100'
                  }`}
                >
                  <p className="text-sm sm:text-base whitespace-pre-line">{message.text}</p>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-gray-700 p-4 rounded-2xl">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Predefined Questions */}
          {messages.length <= 1 && (
            <div className="px-4 sm:px-6 pb-4">
              <p className="text-gray-400 text-xs sm:text-sm mb-3">Try asking:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-h-[60px] overflow-y-auto pr-2">
                {predefinedQuestions.map((question, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleQuestionClick(question)}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-700/50 hover:bg-gray-700 rounded-xl transition-colors text-left border border-gray-600/50"
                  >
                    <span className="text-lg sm:text-xl">{question.icon}</span>
                    <span className="text-gray-300 text-xs sm:text-sm">{question.text}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 sm:p-6 border-t border-gray-700">
            <div className="flex gap-2 sm:gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask anything about me..."
                className="flex-1 bg-gray-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              />
              <button
                onClick={() => handleSend()}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-2 sm:p-3 rounded-xl transition-all"
              >
                <AiOutlineSend className="text-xl sm:text-2xl" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AskAI;
