import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, Clock, FileCheck, Star, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
const heroImg = new URL('../assets/herosectiongif.gif', import.meta.url).toString();
const mathsImg = new URL('../assets/maths.webp', import.meta.url).toString();
const scienceImg = new URL('../assets/science.webp', import.meta.url).toString();
const literatureImg = new URL('../assets/literature.webp', import.meta.url).toString();
import React from 'react';

const services = [
  {
    icon: BookOpen,
    title: 'One-on-One Tutoring',
    description: 'Get personalized tutoring sessions with expert educators in any subject.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: FileCheck,
    title: 'Assignment Help',
    description: 'Comprehensive assistance with your assignments, essays, and projects.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Clock,
    title: 'Instant Help (24hrs)',
    description: 'Need urgent help? Get expert assistance within 24 hours.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

const stats = [
  { label: 'Tutoring Sessions', value: '2,500+' },
  { label: 'Assignments Completed', value: '1,800+' },
  { label: 'Subjects Covered', value: '50+' },
  { label: 'Happy Students', value: '1,200+' },
];

const subjects = [
  {
    name: 'Mathematics',
    image: mathsImg,
    count: 650,
  },
  {
    name: 'Science',
    image: scienceImg,
    count: 580,
  },
  {
    name: 'Literature',
    image: literatureImg,
    count: 420,
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'College Student',
    content: 'The instant help feature saved me during finals week. Got my calculus assignment reviewed within 24 hours!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'High School Student',
    content: 'Amazing tutors who really care about your success. My grades improved significantly after joining.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'University Student',
    content: 'Professional, affordable, and always available. Best tutoring service I have used!',
    rating: 5,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl mb-6"
              >
                Expert Tutoring & Assignment Help
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-700 mb-8"
              >
                Get personalized academic support from qualified tutors. Tutoring sessions, assignment help, and instant 24-hour assistance.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-4"
              >
                <Link to="/services">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg">Get Started</Button>
                  </motion.div>
                </Link>
                <Link to="/portfolio">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline">
                      View Portfolio
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <ImageWithFallback
                  src={heroImg}
                  alt="Student studying"
                  className="rounded-lg shadow-2xl w-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Choose the perfect learning solution for your needs
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`${service.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}
                      >
                        <Icon className={`w-8 h-8 ${service.color}`} />
                      </motion.div>
                      <h3 className="text-2xl mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">
              Trusted by students worldwide
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                  className="text-4xl text-blue-600 mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subjects Portfolio */}
      <section className="py-20">
        <div className="container mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">Popular Subjects</h2>
            <p className="text-xl text-gray-600">
              We cover a wide range of academic subjects
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={subject.image}
                    alt={subject.name}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl text-white mb-2">{subject.name}</h3>
                  <p className="text-white/90">{subject.count} sessions completed</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">What Students Say</h2>
            <p className="text-xl text-gray-600">
              Real feedback from real students
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex gap-1 mb-4"
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1, type: "spring" }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </motion.div>
                    <p className="text-gray-700 mb-4">{testimonial.content}</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-4">Ready to Excel in Your Studies?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of successful students today
            </p>
            <Link to="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button size="lg" className="px-8">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Request Help Now
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
