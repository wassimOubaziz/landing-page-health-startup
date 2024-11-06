'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, Heart, Bell, FileText, Droplet, AlertTriangle, MapPin, Wind, Plus, Sun, Moon, Hospital, Shield, Users, TrendingUp, Target, ChevronDown, ChevronUp, Check, X, Github, Linkedin, X as XIcon } from 'lucide-react'
import Image from 'next/image'
import wassim from "./wassimoubaziz.jpg"
import mounsif from "./mounsif.jpg"

export default function Component() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState('market')
  const [showTestimonials, setShowTestimonials] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  interface MarketInfo {
    title: string;
    content: string;
  }

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  useEffect(() => {
    const targetDate = new Date('2025-03-06T00:00:00').getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      })
    }

    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const features = [
    { icon: Activity, title: 'Accident Detection', description: 'Detects accidents or falls and automatically alerts emergency contacts if there\'s no response within 30 seconds.' },
    { icon: Heart, title: 'Heart Rate Monitoring', description: 'Continuously tracks heart rate; sends alerts for irregularities and contacts emergency services if needed.' },
    { icon: Bell, title: 'Medication Reminders', description: 'Sends reminders for scheduled medications and follow-ups if they aren\'t confirmed.' },
    { icon: FileText, title: 'Daily Health Summary', description: 'Provides daily reports on activity, heart rate, and wellness trends for holistic health insights.' },
  ]

  const additionalFeatures = [
    { icon: Droplet, title: 'Hydration Monitoring' },
    { icon: AlertTriangle, title: 'Panic Button' },
    { icon: MapPin, title: 'Geo-tracking' },
    { icon: Wind, title: 'Air Quality Alerts' },
  ]

  const marketInfo: { [key: string]: MarketInfo } = {
    market: {
      title: 'Market Analysis',
      content: 'The digital health market in Algeria is projected to grow at a CAGR of 15% over the next 5 years. With increasing smartphone penetration and a growing elderly population, there\'s a significant opportunity for innovative health monitoring solutions.',
    },
    target: {
      title: 'Target Audience',
      content: 'Our primary target audience includes elderly individuals living independently, their adult children, and individuals with chronic health conditions. We also target health-conscious adults who want to proactively manage their well-being.',
    },
    traction: {
      title: 'Traction',
      content: 'Since our soft launch 6 months ago, we\'ve acquired 10,000 active users, with a month-over-month growth rate of 20%. Our user retention rate stands at 85%, indicating strong product-market fit.',
    },
  };
  

  const testimonials = [
    { name: 'Amina B.', age: 68, quote: 'Digital Health Guardian gives me peace of mind living alone. The accident detection feature already saved me once!' },
    { name: 'Karim L.', age: 42, quote: 'As a busy professional, I love how the app helps me manage my parents\' health from afar.' },
    { name: 'Dr. Fatima H.', age: 55, quote: 'The integration with our hospital systems has significantly improved our response time to emergencies.' }
  ]

  const faqs = [
    { question: 'How does the accident detection feature work?', answer: 'Our app uses advanced algorithms and sensors in your smartphone to detect sudden changes in movement that could indicate a fall or accident. If such an event is detected, the app will prompt you to confirm you\'re okay. If there\'s no response within 30 seconds, it automatically alerts your emergency contacts and local emergency services.' },
    { question: 'Is my health data secure?', answer: 'Absolutely. We use state-of-the-art encryption and follow strict data protection regulations to ensure your health data is always secure and private. We never share your personal information without your explicit consent.' },
    { question: 'Can I use the app if I don\'t have any health issues?', answer: 'Definitely! While our app is great for managing health conditions, it\'s also an excellent tool for proactive health management. Features like daily health summaries and air quality alerts can benefit anyone looking to maintain a healthy lifestyle.' },
    { question: 'How does the app integrate with Algeria\'s healthcare system?', answer: 'We\'ve partnered with major hospitals and the civil protection services in Algeria. In case of emergencies, our app can quickly relay your vital information and location to these services, ensuring faster and more effective response.' }
  ]

  const comparisonData = [
    { feature: 'Accident Detection', us: true, others: false },
    { feature: '24/7 Heart Rate Monitoring', us: true, others: false },
    { feature: 'Medication Reminders', us: true, others: true },
    { feature: 'Integration with Emergency Services', us: true, others: false },
    { feature: 'Daily Health Reports', us: true, others: true },
    { feature: 'Air Quality Alerts', us: true, others: false },
    { feature: 'Family Member Access', us: true, others: false },
  ]

  const teamMembers = [
    {
      name: 'Wassim Oubaziz',
      role: 'Full Stack Developer & Software Engineer',
      image: wassim,
      bio: 'Wassim is a passionate full stack developer with expertise in building scalable web applications. His experience in both front-end and back-end technologies allows him to create comprehensive solutions for complex problems.',
      github: 'https://github.com/wassimoubaziz',
      linkedin: 'https://www.linkedin.com/in/wassim-oubaziz'
    },
    {
      name: 'Mounsif Chelgham',
      role: 'Front End Developer & Software Engineer',
      image: mounsif,
      bio: 'Mounsif specializes in creating intuitive and responsive user interfaces. His keen eye for design and expertise in modern front-end frameworks ensures that our application provides an excellent user experience.',
      github: 'https://github.com/moncefchelm18',
      linkedin: 'https://www.linkedin.com/in/mounsif-chelgham-b94202289'
    }
  ]


  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-teal-50'} p-8 flex items-center justify-center`}>
      <motion.div
        className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8 max-w-4xl w-full transition-colors duration-300`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-between items-center mb-6">
          <motion.h1 
            className={`text-4xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-300`}
            variants={itemVariants}
          >
            Digital Health Guardian
          </motion.h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-blue-100 text-blue-600'} transition-colors duration-300`}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-2 transition-colors duration-300`}>Our Vision</h2>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
            To enhance health monitoring and emergency response using accessible technology, connecting users with Algeria's civil protection and healthcare system for immediate assistance.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="mb-8">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-4 transition-colors duration-300`}>Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-md`}
                onClick={() => setExpandedFeature(expandedFeature === feature.title ? null : feature.title)}
              >
                <div className="flex items-center mb-2">
                  <feature.icon className={`${isDarkMode ? 'text-blue-400' : 'text-blue-500'} mr-2 transition-colors duration-300`} />
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>{feature.title}</h3>
                </div>
                <AnimatePresence>
                  {expandedFeature === feature.title && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mt-2 transition-colors duration-300`}
                    >
                      {feature.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={containerVariants} className="mb-8">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-4 transition-colors duration-300`}>Additional Features</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${isDarkMode ? 'bg-gray-700' : 'bg-teal-50'} rounded-full py-2 px-4 flex items-center transition-colors duration-300`}
              >
                <feature.icon className={`${isDarkMode ? 'text-teal-400' : 'text-teal-500'} mr-2 transition-colors duration-300`} size={18} />
                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>{feature.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-4 transition-colors duration-300`}>Connected Services</h2>
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center">
              <Shield className={`w-16 h-16 ${isDarkMode ? 'text-red-400' : 'text-red-500'} mb-2 transition-colors duration-300`} />
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center transition-colors duration-300`}>Algeria Civil Protection</p>
            </div>
            <div className="flex flex-col items-center">
              <Hospital className={`w-16 h-16 ${isDarkMode ? 'text-green-400' : 'text-green-500'} mb-2 transition-colors duration-300`} />
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center transition-colors duration-300`}>Healthcare Hospitals</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-4 transition-colors duration-300`}>Market & Audience</h2>
          <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} rounded-lg p-4 transition-colors duration-300`}>
            <div className="flex justify-between mb-4">
              {Object.keys(marketInfo).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-full ${
                    activeTab === key
                      ? isDarkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-500 text-white'
                      : isDarkMode
                      ? 'bg-gray-600 text-gray-300'
                      : 'bg-white text-gray-600'
                  } transition-colors duration-300`}
                >
                  {marketInfo[key].title}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}
              >
                {marketInfo[activeTab].content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-4 transition-colors duration-300`}>How It Works</h2>
          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=256&width=768"
              alt="Digital Health Guardian System Diagram"
              layout="fill"
              objectFit="cover"
            />
            <div className={`absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-black bg-opacity-60' : 'bg-white bg-opacity-60'} transition-colors duration-300`}>
              <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} text-center transition-colors duration-300`}>
                System Diagram: User → App → Civil Protection / Hospitals
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-4 transition-colors duration-300`}>Why Choose Digital Health Guardian?</h2>
          <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} rounded-lg p-4 transition-colors duration-300 overflow-x-auto`}>
            <table className="w-full">
              <thead>
                <tr>
                  <th className={`text-left p-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Feature</th>
                  <th className={`text-center p-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Digital Health Guardian</th>
                  <th className={`text-center p-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Other Solutions</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? (isDarkMode ? 'bg-gray-600' : 'bg-white') : ''}>
                    <td className={`p-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.feature}</td>
                    <td className="text-center p-2">
                      {item.us ? (
                        <Check className={`inline ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />
                      ) : (
                        <X className={`inline ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
                      )}
                    </td>
                    <td className="text-center p-2">
                      {item.others ? (
                        <Check className={`inline ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />
                      ) : (
                        <X className={`inline ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-4 transition-colors duration-300`}>Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div key={index} className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} rounded-lg p-6 transition-colors duration-300`}>
                <div className="flex flex-col items-center mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mb-4"
                  />
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>{member.name}</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>{member.role}</p>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 transition-colors duration-300`}>{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-300`}>
                    <Github size={24} />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-300`}>
                    <Linkedin size={24} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-4 transition-colors duration-300`}>User Testimonials</h2>
          <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} rounded-lg p-4 transition-colors duration-300`}>
            <button
              onClick={() => setShowTestimonials(!showTestimonials)}
              className={`w-full flex justify-between items-center ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}
            >
              <span>What our users say</span>
              {showTestimonials ? <ChevronUp /> : <ChevronDown />}
            </button>
            <AnimatePresence>
              {showTestimonials && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className={`mt-4 p-3 ${isDarkMode ? 'bg-gray-600' : 'bg-white'} rounded-lg transition-colors duration-300`}>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} italic transition-colors duration-300`}>"{testimonial.quote}"</p>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-2 transition-colors duration-300`}>- {testimonial.name}, {testimonial.age}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-4 transition-colors duration-300`}>Frequently Asked Questions</h2>
          <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} rounded-lg p-4 transition-colors duration-300`}>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className={`w-full text-left font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300 flex justify-between items-center`}
                >
                  <span>{faq.question}</span>
                  {expandedFaq === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-2 transition-colors duration-300`}>Our Goal</h2>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
            To create a user-friendly platform that combines health monitoring with emergency support, leveraging smartphones and wearables to make health management accessible and reliable, while seamlessly integrating with Algeria's emergency services.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => setShowModal(true)}
            className={`${isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-6 py-2 rounded-full font-semibold flex items-center justify-center mx-auto transition-all duration-300`}
          >
            Get Early Access
            <Plus className="ml-2" size={18} />
          </button>
        </motion.div>

        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-xl max-w-md w-full m-4`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Coming Soon!</h3>
                  <button onClick={() => setShowModal(false)} className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'}`}>
                    <XIcon size={24} />
                  </button>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  Digital Health Guardian will be available in:
                </p>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-100'} p-3 rounded-lg text-center`}>
                      <div className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{value}</div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{unit}</div>
                    </div>
                  ))}
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center`}>
                  Stay tuned for updates and be the first to experience the future of health monitoring!
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}