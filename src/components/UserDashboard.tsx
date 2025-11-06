import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  DollarSign, 
  Calendar,
  FileText,
  TrendingUp,
  AlertCircle,
  Download
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Avatar, AvatarFallback } from './ui/avatar';

// Mock data - In a real app, this would come from an API
const activeSessions = [
  {
    id: 1,
    subject: 'Mathematics',
    tutor: 'Dr. Sarah Johnson',
    date: '2025-11-08',
    time: '2:00 PM',
    duration: '60 min',
    status: 'upcoming',
    meetingLink: '#',
  },
  {
    id: 2,
    subject: 'Physics',
    tutor: 'Prof. Michael Chen',
    date: '2025-11-10',
    time: '4:00 PM',
    duration: '90 min',
    status: 'upcoming',
    meetingLink: '#',
  },
];

const assignments = [
  {
    id: 1,
    title: 'Calculus Problem Set 5',
    subject: 'Mathematics',
    dueDate: '2025-11-12',
    progress: 75,
    status: 'in-progress',
    tutor: 'Dr. Sarah Johnson',
  },
  {
    id: 2,
    title: 'Quantum Mechanics Essay',
    subject: 'Physics',
    dueDate: '2025-11-15',
    progress: 30,
    status: 'in-progress',
    tutor: 'Prof. Michael Chen',
  },
  {
    id: 3,
    title: 'Chemical Reactions Lab Report',
    subject: 'Chemistry',
    dueDate: '2025-11-05',
    progress: 100,
    status: 'completed',
    tutor: 'Dr. Emily Davis',
  },
];

const payments = [
  {
    id: 1,
    service: 'One-on-One Tutoring',
    amount: 30,
    date: '2025-11-01',
    status: 'paid',
    invoice: 'INV-001',
  },
  {
    id: 2,
    service: 'Assignment Help',
    amount: 50,
    date: '2025-11-03',
    status: 'paid',
    invoice: 'INV-002',
  },
  {
    id: 3,
    service: 'Instant Help (24hrs)',
    amount: 75,
    date: '2025-11-06',
    status: 'pending',
    invoice: 'INV-003',
  },
];

const sessionHistory = [
  {
    id: 1,
    subject: 'Chemistry',
    tutor: 'Dr. Emily Davis',
    date: '2025-10-28',
    duration: '60 min',
    rating: 5,
  },
  {
    id: 2,
    subject: 'Mathematics',
    tutor: 'Dr. Sarah Johnson',
    date: '2025-10-25',
    duration: '90 min',
    rating: 5,
  },
  {
    id: 3,
    subject: 'English Literature',
    tutor: 'Prof. James Wilson',
    date: '2025-10-20',
    duration: '60 min',
    rating: 4,
  },
];

const stats = [
  {
    title: 'Active Sessions',
    value: '2',
    icon: BookOpen,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    change: '+1 this week',
  },
  {
    title: 'Assignments in Progress',
    value: '2',
    icon: FileText,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    change: '75% avg completion',
  },
  {
    title: 'Completed Sessions',
    value: '12',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    change: '+3 this month',
  },
  {
    title: 'Total Spent',
    value: '$380',
    icon: DollarSign,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    change: '$75 pending',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function UserDashboard() {
  const getStatusBadge = (status: string) => {
    const variants: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
      upcoming: { label: 'Upcoming', variant: 'default' },
      'in-progress': { label: 'In Progress', variant: 'secondary' },
      completed: { label: 'Completed', variant: 'outline' },
      paid: { label: 'Paid', variant: 'outline' },
      pending: { label: 'Pending', variant: 'secondary' },
    };
    
    const config = variants[status] || { label: status, variant: 'default' };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl mb-2">Welcome back!</h1>
          <p className="text-gray-600">Here's what's happening with your learning journey</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.title} variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">{stat.title}</p>
                      <p className="text-3xl">{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.change}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Tabs defaultValue="sessions" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="sessions">Active Sessions</TabsTrigger>
              <TabsTrigger value="assignments">Assignments</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            {/* Active Sessions Tab */}
            <TabsContent value="sessions" className="space-y-4">
              {activeSessions.map((session, index) => (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12 bg-blue-100">
                            <AvatarFallback className="text-blue-600">
                              {session.tutor.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{session.subject}</h3>
                              {getStatusBadge(session.status)}
                            </div>
                            <p className="text-sm text-gray-600">with {session.tutor}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {session.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {session.time} ({session.duration})
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button size="sm">
                            Join Session
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              
              {activeSessions.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600 mb-4">No active sessions scheduled</p>
                    <Link to="/services">
                      <Button>Book a Session</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Assignments Tab */}
            <TabsContent value="assignments" className="space-y-4">
              {assignments.map((assignment, index) => (
                <motion.div
                  key={assignment.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{assignment.title}</h3>
                              {getStatusBadge(assignment.status)}
                            </div>
                            <p className="text-sm text-gray-600">{assignment.subject}</p>
                            <p className="text-sm text-gray-500">Tutor: {assignment.tutor}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">Due Date</p>
                            <p className="font-semibold">{assignment.dueDate}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-semibold">{assignment.progress}%</span>
                          </div>
                          <Progress value={assignment.progress} className="h-2" />
                        </div>

                        {assignment.status === 'in-progress' && (
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                            <Button size="sm">
                              Continue Work
                            </Button>
                          </div>
                        )}
                        
                        {assignment.status === 'completed' && (
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download Submission
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            {/* Payments Tab */}
            <TabsContent value="payments">
              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                  <CardDescription>View and manage your payment transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Invoice</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {payments.map((payment) => (
                        <motion.tr
                          key={payment.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <TableCell className="font-medium">{payment.invoice}</TableCell>
                          <TableCell>{payment.service}</TableCell>
                          <TableCell>{payment.date}</TableCell>
                          <TableCell>${payment.amount}</TableCell>
                          <TableCell>{getStatusBadge(payment.status)}</TableCell>
                          <TableCell className="text-right">
                            {payment.status === 'paid' ? (
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            ) : (
                              <Button size="sm">Pay Now</Button>
                            )}
                          </TableCell>
                        </motion.tr>
                      ))}
                    </TableBody>
                  </Table>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-semibold text-blue-900">Payment Summary</p>
                        <p className="text-sm text-blue-700 mt-1">
                          Total Paid: $80 | Pending: $75 | Next Payment Due: November 6, 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* History Tab */}
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Session History</CardTitle>
                  <CardDescription>Your completed tutoring sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Subject</TableHead>
                        <TableHead>Tutor</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead className="text-right">Rating</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sessionHistory.map((session) => (
                        <motion.tr
                          key={session.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <TableCell className="font-medium">{session.subject}</TableCell>
                          <TableCell>{session.tutor}</TableCell>
                          <TableCell>{session.date}</TableCell>
                          <TableCell>{session.duration}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-1">
                              {Array.from({ length: session.rating }).map((_, i) => (
                                <span key={i} className="text-yellow-500">★</span>
                              ))}
                            </div>
                          </TableCell>
                        </motion.tr>
                      ))}
                    </TableBody>
                  </Table>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600" />
                        <p className="text-2xl font-semibold">12</p>
                        <p className="text-sm text-gray-600">Total Sessions</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <CheckCircle className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                        <p className="text-2xl font-semibold">4.8</p>
                        <p className="text-sm text-gray-600">Avg Rating</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Clock className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                        <p className="text-2xl font-semibold">18hrs</p>
                        <p className="text-sm text-gray-600">Total Hours</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/services">
                  <Button variant="outline" className="w-full h-auto py-4">
                    <div className="text-center">
                      <BookOpen className="h-6 w-6 mx-auto mb-2" />
                      <p>Book New Session</p>
                    </div>
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="w-full h-auto py-4">
                    <div className="text-center">
                      <FileText className="h-6 w-6 mx-auto mb-2" />
                      <p>Request Assignment Help</p>
                    </div>
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" className="w-full h-auto py-4">
                    <div className="text-center">
                      <TrendingUp className="h-6 w-6 mx-auto mb-2" />
                      <p>View Portfolio</p>
                    </div>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
