import { motion } from 'motion/react';
import { Target, Users, Award, Heart, CheckCircle, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for the highest quality in education and student support.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Heart,
    title: 'Student-Centered',
    description: 'Every decision we make puts student success at the forefront.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We embrace new teaching methods and technologies to enhance learning.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'We maintain the highest ethical standards in all our services.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
];

const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Founder & CEO',
    specialty: 'Mathematics & Physics',
    experience: '15+ years',
  },
  {
    name: 'Prof. James Chen',
    role: 'Head of Sciences',
    specialty: 'Chemistry & Biology',
    experience: '12+ years',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Literature Director',
    specialty: 'English & Writing',
    experience: '10+ years',
  },
  {
    name: 'Dr. Michael Park',
    role: 'Technology Lead',
    specialty: 'Computer Science',
    experience: '14+ years',
  },
];

const achievements = [
  { number: '98%', label: 'Student Success Rate' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '50+', label: 'Expert Tutors' },
  { number: '24/7', label: 'Support Available' },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <h1 className="text-5xl mb-6">About EduHelp Pro</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We're on a mission to make quality education accessible to everyone. 
              Our platform connects students with expert tutors who are passionate 
              about teaching and committed to student success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2023, EduHelp Pro was born from a simple observation: 
                  students needed more personalized, accessible academic support that 
                  fit their schedules and learning styles.
                </p>
                <p>
                  What started as a small team of 5 passionate educators has grown 
                  into a community of 50+ expert tutors serving over 1,200 students 
                  across multiple subjects and grade levels.
                </p>
                <p>
                  Today, we're proud to offer comprehensive tutoring services, 
                  assignment help, and instant support that empowers students to 
                  achieve their academic goals.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1701576766277-c6160505581d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzYyNDA0NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students learning"
                className="rounded-lg shadow-2xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl"
              >
                <div className="text-3xl">2,500+</div>
                <div className="text-sm">Sessions Completed</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`${value.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}
                      >
                        <Icon className={`w-8 h-8 ${value.color}`} />
                      </motion.div>
                      <h3 className="text-xl mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl text-blue-600 mb-2"
                >
                  {achievement.number}
                </motion.div>
                <div className="text-gray-600">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600">
              Experienced educators dedicated to your success
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500"></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-3">{member.role}</p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{member.specialty}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{member.experience} experience</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">Why Choose EduHelp Pro?</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              'Personalized one-on-one attention from expert tutors',
              'Flexible scheduling to fit your busy lifestyle',
              'Affordable pricing with pay-now or pay-later options',
              'Instant help available within 24 hours for urgent needs',
              'Comprehensive support across 50+ subjects',
              'Proven track record with 98% student success rate',
            ].map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-gray-700">{reason}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
