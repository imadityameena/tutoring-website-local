import { motion } from 'motion/react';
import { TrendingUp, Users, BookOpen, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';
const mathsImg = new URL('../assets/maths.webp', import.meta.url).toString();
const scienceImg = new URL('../assets/science.webp', import.meta.url).toString();
const literatureImg = new URL('../assets/literature.webp', import.meta.url).toString();
const computerScienceImg = new URL('../assets/computerScience.webp', import.meta.url).toString();
const economicsImg = new URL('../assets/economics.webp', import.meta.url).toString();
const historyImg = new URL('../assets/history.webp', import.meta.url).toString();

const stats = [
  { 
    icon: BookOpen, 
    label: 'Tutoring Sessions', 
    value: '2,500+', 
    color: 'text-blue-600', 
    bgColor: 'bg-blue-50' 
  },
  { 
    icon: Award, 
    label: 'Assignments Completed', 
    value: '1,800+', 
    color: 'text-green-600', 
    bgColor: 'bg-green-50' 
  },
  { 
    icon: Users, 
    label: 'Happy Students', 
    value: '1,200+', 
    color: 'text-purple-600', 
    bgColor: 'bg-purple-50' 
  },
  { 
    icon: TrendingUp, 
    label: 'Success Rate', 
    value: '98%', 
    color: 'text-orange-600', 
    bgColor: 'bg-orange-50' 
  },
];

const subjects = [
  {
    name: 'Mathematics',
    sessions: 650,
    assignments: 420,
    image: mathsImg,
  },
  {
    name: 'Science',
    sessions: 580,
    assignments: 380,
    image: scienceImg,
  },
  {
    name: 'English Literature',
    sessions: 420,
    assignments: 350,
    image: literatureImg,
  },
  {
    name: 'Computer Science',
    sessions: 380,
    assignments: 280,
    image: computerScienceImg,
  },
  {
    name: 'Economics',
    sessions: 220,
    assignments: 180,
    image: economicsImg,
  },
  {
    name: 'History',
    sessions: 250,
    assignments: 190,
    image: historyImg,
  },
];

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl mb-4">Our Portfolio</h1>
            <p className="text-xl text-gray-600">
              Track record of academic excellence and student success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`${stat.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                      >
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </motion.div>
                      <div className={`text-3xl mb-2 ${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subjects Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl mb-4">Subjects We Excel In</h2>
            <p className="text-xl text-gray-600">
              Comprehensive coverage across multiple disciplines
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageWithFallback
                        src={subject.image}
                        alt={subject.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <h3 className="text-2xl text-white p-6">{subject.name}</h3>
                    </div>
                  </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tutoring Sessions:</span>
                      <span className="text-blue-600">{subject.sessions}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Assignments Completed:</span>
                      <span className="text-green-600">{subject.assignments}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span>Total:</span>
                      <span className="text-lg">
                        {subject.sessions + subject.assignments}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Milestones in our mission to help students succeed
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  1
                </div>
                <div className="w-1 h-full bg-blue-200 mt-2"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl mb-2">2023 - Launch</h3>
                <p className="text-gray-600">
                  Started with 5 tutors covering core subjects. First 100 students served.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  2
                </div>
                <div className="w-1 h-full bg-blue-200 mt-2"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl mb-2">2024 - Expansion</h3>
                <p className="text-gray-600">
                  Grew to 25 expert tutors. Introduced instant 24-hour help service.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl mb-2">2025 - Excellence</h3>
                <p className="text-gray-600">
                  Reached 1,200+ students with 98% success rate. Now covering 50+ subjects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
