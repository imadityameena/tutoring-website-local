import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  CheckCircle, 
  Clock, 
  XCircle, 
  Download,
  Users,
  GraduationCap,
  Calendar,
  FileText,
  DollarSign,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  MoreVertical
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Switch } from './ui/switch';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

// Interfaces
interface Request {
  id: string;
  name: string;
  email: string;
  subject: string;
  serviceType: string;
  date: string;
  status: 'pending' | 'approved' | 'completed' | 'cancelled';
  price: number;
  paymentStatus: 'paid' | 'pending' | 'pay-later';
  progress: number;
}

interface User {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  status: 'active' | 'inactive';
  totalSessions: number;
  totalSpent: number;
}

interface Tutor {
  id: string;
  name: string;
  email: string;
  subjects: string[];
  rating: number;
  totalSessions: number;
  status: 'active' | 'inactive';
  hourlyRate: number;
}

interface Session {
  id: string;
  student: string;
  tutor: string;
  subject: string;
  date: string;
  time: string;
  duration: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  isPublished: boolean;
}

interface PricingItem {
  id: string;
  service: string;
  price: number;
  description: string;
}

// Mock Data
const mockRequests: Request[] = [
  {
    id: '001',
    name: 'John Smith',
    email: 'john@example.com',
    subject: 'Mathematics',
    serviceType: 'Tutoring',
    date: '2025-11-08',
    status: 'pending',
    price: 30,
    paymentStatus: 'pending',
    progress: 0,
  },
  {
    id: '002',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    subject: 'Physics',
    serviceType: 'Assignment Help',
    date: '2025-11-07',
    status: 'approved',
    price: 50,
    paymentStatus: 'paid',
    progress: 65,
  },
  {
    id: '003',
    name: 'Mike Chen',
    email: 'mike@example.com',
    subject: 'Computer Science',
    serviceType: 'Instant Help',
    date: '2025-11-06',
    status: 'completed',
    price: 75,
    paymentStatus: 'paid',
    progress: 100,
  },
];

const mockUsers: User[] = [
  {
    id: 'U001',
    name: 'John Smith',
    email: 'john@example.com',
    joinDate: '2025-09-15',
    status: 'active',
    totalSessions: 12,
    totalSpent: 380,
  },
  {
    id: 'U002',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    joinDate: '2025-08-20',
    status: 'active',
    totalSessions: 8,
    totalSpent: 250,
  },
  {
    id: 'U003',
    name: 'Mike Chen',
    email: 'mike@example.com',
    joinDate: '2025-10-01',
    status: 'inactive',
    totalSessions: 5,
    totalSpent: 150,
  },
];

const mockTutors: Tutor[] = [
  {
    id: 'T001',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.tutor@example.com',
    subjects: ['Mathematics', 'Physics'],
    rating: 4.9,
    totalSessions: 156,
    status: 'active',
    hourlyRate: 30,
  },
  {
    id: 'T002',
    name: 'Prof. Michael Chen',
    email: 'michael.tutor@example.com',
    subjects: ['Physics', 'Chemistry'],
    rating: 4.8,
    totalSessions: 142,
    status: 'active',
    hourlyRate: 35,
  },
  {
    id: 'T003',
    name: 'Dr. Emily Davis',
    email: 'emily.tutor@example.com',
    subjects: ['Chemistry', 'Biology'],
    rating: 5.0,
    totalSessions: 98,
    status: 'active',
    hourlyRate: 32,
  },
];

const mockSessions: Session[] = [
  {
    id: 'S001',
    student: 'John Smith',
    tutor: 'Dr. Sarah Johnson',
    subject: 'Mathematics',
    date: '2025-11-08',
    time: '2:00 PM',
    duration: '60 min',
    status: 'scheduled',
  },
  {
    id: 'S002',
    student: 'Sarah Johnson',
    tutor: 'Prof. Michael Chen',
    subject: 'Physics',
    date: '2025-11-10',
    time: '4:00 PM',
    duration: '90 min',
    status: 'scheduled',
  },
  {
    id: 'S003',
    student: 'Mike Chen',
    tutor: 'Dr. Emily Davis',
    subject: 'Chemistry',
    date: '2025-11-05',
    time: '3:00 PM',
    duration: '60 min',
    status: 'completed',
  },
];

const mockTestimonials: Testimonial[] = [
  {
    id: 'TM001',
    name: 'John Smith',
    role: 'High School Student',
    content: 'The tutoring sessions helped me improve my math grade from a C to an A!',
    rating: 5,
    isPublished: true,
  },
  {
    id: 'TM002',
    name: 'Sarah Johnson',
    role: 'College Student',
    content: 'Excellent physics tutoring. Very knowledgeable and patient.',
    rating: 5,
    isPublished: true,
  },
  {
    id: 'TM003',
    name: 'Mike Chen',
    role: 'University Student',
    content: 'Great assignment help! Delivered on time and explained everything clearly.',
    rating: 4,
    isPublished: false,
  },
];

const mockPricing: PricingItem[] = [
  {
    id: 'P001',
    service: 'One-on-One Tutoring',
    price: 30,
    description: 'Personalized tutoring session with expert tutors',
  },
  {
    id: 'P002',
    service: 'Assignment Help',
    price: 50,
    description: 'Professional help with your assignments',
  },
  {
    id: 'P003',
    service: 'Instant Help (24hrs)',
    price: 75,
    description: 'Quick turnaround for urgent requests',
  },
];

const stats = [
  { label: 'Total Users', value: '248', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { label: 'Active Tutors', value: '18', icon: GraduationCap, color: 'text-green-600', bgColor: 'bg-green-100' },
  { label: 'Pending Requests', value: '12', icon: Clock, color: 'text-orange-600', bgColor: 'bg-orange-100' },
  { label: 'Revenue (Month)', value: '$12,450', icon: DollarSign, color: 'text-purple-600', bgColor: 'bg-purple-100' },
];

export function AdminPanel() {
  const [requests, setRequests] = useState<Request[]>(mockRequests);
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [tutors, setTutors] = useState<Tutor[]>(mockTutors);
  const [sessions, setSessions] = useState<Session[]>(mockSessions);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(mockTestimonials);
  const [pricing, setPricing] = useState<PricingItem[]>(mockPricing);
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
      pending: { variant: 'secondary' },
      approved: { variant: 'default' },
      completed: { variant: 'outline' },
      cancelled: { variant: 'destructive' },
      active: { variant: 'default' },
      inactive: { variant: 'secondary' },
      scheduled: { variant: 'default' },
      paid: { variant: 'outline' },
    };
    
    const config = variants[status] || { variant: 'default' };
    return (
      <Badge variant={config.variant}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const updateRequestStatus = (id: string, newStatus: Request['status']) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: newStatus } : req
    ));
  };

  const updateRequestProgress = (id: string, progress: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, progress } : req
    ));
  };

  const toggleUserStatus = (id: string) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' } : user
    ));
  };

  const toggleTutorStatus = (id: string) => {
    setTutors(tutors.map(tutor => 
      tutor.id === id ? { ...tutor, status: tutor.status === 'active' ? 'inactive' : 'active' } : tutor
    ));
  };

  const toggleTestimonialPublish = (id: string) => {
    setTestimonials(testimonials.map(testimonial => 
      testimonial.id === id ? { ...testimonial, isPublished: !testimonial.isPublished } : testimonial
    ));
  };

  const updatePricing = (id: string, price: number) => {
    setPricing(pricing.map(item => 
      item.id === id ? { ...item, price } : item
    ));
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
          <h1 className="text-3xl mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage users, tutors, sessions, and content</p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-3xl">{stat.value}</p>
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
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Tabs defaultValue="requests" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              <TabsTrigger value="requests">Requests</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="tutors">Tutors</TabsTrigger>
              <TabsTrigger value="sessions">Sessions</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
            </TabsList>

            {/* Assignment Requests Tab */}
            <TabsContent value="requests">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Assignment Requests</CardTitle>
                      <CardDescription>Track and manage all service requests</CardDescription>
                    </div>
                    <Button size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Search requests..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Student</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Progress</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Payment</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {requests.map((request) => (
                          <TableRow key={request.id}>
                            <TableCell className="font-medium">#{request.id}</TableCell>
                            <TableCell>
                              <div>
                                <div>{request.name}</div>
                                <div className="text-sm text-gray-500">{request.email}</div>
                              </div>
                            </TableCell>
                            <TableCell>{request.subject}</TableCell>
                            <TableCell>{request.serviceType}</TableCell>
                            <TableCell>{new Date(request.date).toLocaleDateString()}</TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="text-sm">{request.progress}%</div>
                                <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-blue-600 transition-all" 
                                    style={{ width: `${request.progress}%` }}
                                  />
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{getStatusBadge(request.status)}</TableCell>
                            <TableCell>{getStatusBadge(request.paymentStatus)}</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  {request.status === 'pending' && (
                                    <DropdownMenuItem onClick={() => updateRequestStatus(request.id, 'approved')}>
                                      <CheckCircle className="h-4 w-4 mr-2" />
                                      Approve
                                    </DropdownMenuItem>
                                  )}
                                  {request.status === 'approved' && (
                                    <>
                                      <DropdownMenuItem onClick={() => updateRequestProgress(request.id, Math.min(100, request.progress + 25))}>
                                        <FileText className="h-4 w-4 mr-2" />
                                        Update Progress
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={() => updateRequestStatus(request.id, 'completed')}>
                                        <CheckCircle className="h-4 w-4 mr-2" />
                                        Mark Complete
                                      </DropdownMenuItem>
                                    </>
                                  )}
                                  <DropdownMenuItem>
                                    <Eye className="h-4 w-4 mr-2" />
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-600">
                                    <XCircle className="h-4 w-4 mr-2" />
                                    Cancel
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Users Management Tab */}
            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>User Management</CardTitle>
                      <CardDescription>Manage student accounts and activity</CardDescription>
                    </div>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add User
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>User ID</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Join Date</TableHead>
                          <TableHead>Sessions</TableHead>
                          <TableHead>Total Spent</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.id}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8 bg-blue-100">
                                  <AvatarFallback className="text-blue-600 text-sm">
                                    {user.name.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                {user.name}
                              </div>
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
                            <TableCell>{user.totalSessions}</TableCell>
                            <TableCell>${user.totalSpent}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                {getStatusBadge(user.status)}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => toggleUserStatus(user.id)}
                                >
                                  {user.status === 'active' ? 'Deactivate' : 'Activate'}
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tutors Management Tab */}
            <TabsContent value="tutors">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Tutor Management</CardTitle>
                      <CardDescription>Manage tutors and their performance</CardDescription>
                    </div>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Tutor
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Tutor ID</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Subjects</TableHead>
                          <TableHead>Rating</TableHead>
                          <TableHead>Sessions</TableHead>
                          <TableHead>Rate/hr</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tutors.map((tutor) => (
                          <TableRow key={tutor.id}>
                            <TableCell className="font-medium">{tutor.id}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8 bg-green-100">
                                  <AvatarFallback className="text-green-600 text-sm">
                                    {tutor.name.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div>{tutor.name}</div>
                                  <div className="text-sm text-gray-500">{tutor.email}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {tutor.subjects.map((subject) => (
                                  <Badge key={subject} variant="outline" className="text-xs">
                                    {subject}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <span className="text-yellow-500">★</span>
                                {tutor.rating}
                              </div>
                            </TableCell>
                            <TableCell>{tutor.totalSessions}</TableCell>
                            <TableCell>${tutor.hourlyRate}</TableCell>
                            <TableCell>{getStatusBadge(tutor.status)}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => toggleTutorStatus(tutor.id)}
                                >
                                  {tutor.status === 'active' ? 'Deactivate' : 'Activate'}
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Sessions Management Tab */}
            <TabsContent value="sessions">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Session Management</CardTitle>
                      <CardDescription>View and manage all tutoring sessions</CardDescription>
                    </div>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Schedule Session
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Session ID</TableHead>
                          <TableHead>Student</TableHead>
                          <TableHead>Tutor</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead>Date & Time</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {sessions.map((session) => (
                          <TableRow key={session.id}>
                            <TableCell className="font-medium">{session.id}</TableCell>
                            <TableCell>{session.student}</TableCell>
                            <TableCell>{session.tutor}</TableCell>
                            <TableCell>{session.subject}</TableCell>
                            <TableCell>
                              <div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4 text-gray-400" />
                                  {new Date(session.date).toLocaleDateString()}
                                </div>
                                <div className="text-sm text-gray-500">{session.time}</div>
                              </div>
                            </TableCell>
                            <TableCell>{session.duration}</TableCell>
                            <TableCell>{getStatusBadge(session.status)}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                {session.status === 'scheduled' && (
                                  <Button variant="ghost" size="sm" className="text-red-600">
                                    Cancel
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Testimonials Tab */}
            <TabsContent value="testimonials">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Testimonials Management</CardTitle>
                      <CardDescription>Manage and publish student testimonials</CardDescription>
                    </div>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Testimonial
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {testimonials.map((testimonial) => (
                      <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Avatar className="h-10 w-10 bg-purple-100">
                                <AvatarFallback className="text-purple-600">
                                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-semibold">{testimonial.name}</div>
                                <div className="text-sm text-gray-500">{testimonial.role}</div>
                              </div>
                              <div className="flex items-center gap-1 ml-auto">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                  <span key={i} className="text-yellow-500">★</span>
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-700 mb-3">{testimonial.content}</p>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <Switch
                                  checked={testimonial.isPublished}
                                  onCheckedChange={() => toggleTestimonialPublish(testimonial.id)}
                                />
                                <span className="text-sm text-gray-600">
                                  {testimonial.isPublished ? 'Published' : 'Draft'}
                                </span>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit
                                </Button>
                                <Button variant="ghost" size="sm" className="text-red-600">
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Pricing Management Tab */}
            <TabsContent value="pricing">
              <Card>
                <CardHeader>
                  <CardTitle>Pricing Management</CardTitle>
                  <CardDescription>Update service pricing and descriptions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pricing.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="border rounded-lg p-6 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{item.service}</h3>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <Label htmlFor={`price-${item.id}`}>Price:</Label>
                                <div className="flex items-center gap-1">
                                  <span className="text-2xl font-semibold text-blue-600">
                                    ${item.price}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Edit Pricing</DialogTitle>
                                  <DialogDescription>
                                    Update the price and description for {item.service}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="price">Price ($)</Label>
                                    <Input
                                      id="price"
                                      type="number"
                                      defaultValue={item.price}
                                      onChange={(e) => updatePricing(item.id, parseFloat(e.target.value))}
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                      id="description"
                                      defaultValue={item.description}
                                      rows={3}
                                    />
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button>Save Changes</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
