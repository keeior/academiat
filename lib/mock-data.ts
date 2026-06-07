export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  instructorAvatar: string
  thumbnail: string
  price: number
  isFree: boolean
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  lessons: number
  students: number
  rating: number
  reviews: number
  tags: string[]
  featured?: boolean
}

export interface Resource {
  id: string
  title: string
  description: string
  type: 'PDF' | 'Video' | 'Article' | 'Tool' | 'Template'
  category: string
  downloadUrl: string
  isFree: boolean
  price?: number
  downloads: number
}

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  role: 'student' | 'instructor' | 'admin'
  enrolledCourses: string[]
  completedCourses: string[]
  certificates: Certificate[]
  streak: number
  totalHours: number
  joinedAt: string
}

export interface Certificate {
  id: string
  courseId: string
  courseName: string
  issuedAt: string
  credentialId: string
}

export interface Progress {
  courseId: string
  lessonId: string
  completed: boolean
  percentage: number
  lastAccessed: string
}

export const mockCourses: Course[] = [
  {
    id: '9',
    title: 'Economics & Governance in Africa',
    description: 'Explore the socio-economic development of Zimbabwe and broader Africa. Master the principles of governance, financial control, and economic administration.',
    instructor: 'Jacob Chikuhwa',
    instructorAvatar: '/instructor.jpg',
    thumbnail: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=450&fit=crop',
    price: 149,
    isFree: false,
    category: 'Finance',
    level: 'Advanced',
    duration: '22 hours',
    lessons: 78,
    students: 3450,
    rating: 5.0,
    reviews: 423,
    tags: ['Governance', 'Economics', 'Africa', 'International Relations'],
    featured: true,
  },
  {
    id: '1',
    title: 'Introduction to Finance',
    description: 'Master the fundamentals of personal and corporate finance. Learn financial analysis, budgeting, and investment principles with real-world case studies.',
    instructor: 'Dr. Sarah Moyo',
    instructorAvatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=450&fit=crop',
    price: 0,
    isFree: true,
    category: 'Finance',
    level: 'Beginner',
    duration: '12 hours',
    lessons: 48,
    students: 15420,
    rating: 4.8,
    reviews: 2341,
    tags: ['Finance', 'Budgeting', 'Investment'],
    featured: true,
  },
  {
    id: '2',
    title: 'Business Administration Essentials',
    description: 'Build a strong foundation in business management. Learn strategic planning, organizational behavior, and leadership skills for the modern workplace.',
    instructor: 'Prof. James Ndlovu',
    instructorAvatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=James',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop',
    price: 79,
    isFree: false,
    category: 'Business Administration',
    level: 'Intermediate',
    duration: '18 hours',
    lessons: 64,
    students: 8932,
    rating: 4.9,
    reviews: 1567,
    tags: ['Management', 'Leadership', 'Strategy'],
    featured: true,
  },
  {
    id: '3',
    title: 'Data Science with Python',
    description: 'Dive into data science with Python. Learn pandas, numpy, data visualization, and machine learning fundamentals with hands-on projects.',
    instructor: 'Dr. Emma Chikwava',
    instructorAvatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Emma',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=450&fit=crop',
    price: 99,
    isFree: false,
    category: 'Data Science',
    level: 'Intermediate',
    duration: '24 hours',
    lessons: 86,
    students: 12450,
    rating: 4.7,
    reviews: 2103,
    tags: ['Python', 'Pandas', 'Machine Learning'],
    featured: true,
  },
  {
    id: '4',
    title: 'Database Management Systems',
    description: 'Design, implement, and manage relational databases. Learn SQL, normalization, indexing, and modern database architectures.',
    instructor: 'Prof. David Maponga',
    instructorAvatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=David',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
    price: 129,
    isFree: false,
    category: 'Database Management System',
    level: 'Intermediate',
    duration: '20 hours',
    lessons: 72,
    students: 5621,
    rating: 4.9,
    reviews: 892,
    tags: ['SQL', 'Database Design', 'NoSQL'],
  },
  {
    id: '5',
    title: 'Mindfulness & Meditation Foundations',
    description: 'Develop a comprehensive meditation practice. Learn breathing techniques, mindfulness strategies, and stress management for personal and professional growth.',
    instructor: 'Tendai Makoni',
    instructorAvatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Tendai',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=450&fit=crop',
    price: 49,
    isFree: false,
    category: 'Meditation',
    level: 'Beginner',
    duration: '8 hours',
    lessons: 32,
    students: 28340,
    rating: 4.8,
    reviews: 4521,
    tags: ['Mindfulness', 'Wellness', 'Stress Management'],
  },
  {
    id: '6',
    title: 'Human Resource Management',
    description: 'Master the essentials of workforce planning, talent acquisition, and employee development. Build effective HR strategies for modern organizations.',
    instructor: 'Lisa Muponda',
    instructorAvatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Lisa',
    thumbnail: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=450&fit=crop',
    price: 0,
    isFree: true,
    category: 'Manpower',
    level: 'Beginner',
    duration: '6 hours',
    lessons: 24,
    students: 19870,
    rating: 4.7,
    reviews: 3245,
    tags: ['HR', 'Recruitment', 'Workforce Planning'],
  },
  {
    id: '7',
    title: 'Advanced Financial Analysis',
    description: 'Take your financial skills to the next level. Learn corporate valuation, financial modeling, and advanced analytical techniques.',
    instructor: 'Dr. Michael Sibanda',
    instructorAvatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Michael',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop',
    price: 89,
    isFree: false,
    category: 'Finance',
    level: 'Advanced',
    duration: '16 hours',
    lessons: 58,
    students: 7234,
    rating: 4.8,
    reviews: 1234,
    tags: ['Valuation', 'Financial Modeling', 'Analytics'],
  },
  {
    id: '8',
    title: 'Introduction to Data Analytics',
    description: 'Get started with data analytics. Learn to gather, process, and visualize data to drive informed business decisions.',
    instructor: 'Rachel Mutasa',
    instructorAvatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Rachel',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    price: 0,
    isFree: true,
    category: 'Data Science',
    level: 'Beginner',
    duration: '10 hours',
    lessons: 40,
    students: 22156,
    rating: 4.6,
    reviews: 2876,
    tags: ['Data Analytics', 'Visualization', 'Excel'],
  },
]

export const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Finance Career Guide',
    description: 'Comprehensive guide covering career paths in finance, banking, and financial analysis.',
    type: 'PDF',
    category: 'Career',
    downloadUrl: '/resources/finance-career-guide.pdf',
    isFree: true,
    downloads: 45230,
  },
  {
    id: '2',
    title: 'Business Plan Templates',
    description: 'Professional business plan templates with financial projections and market analysis frameworks.',
    type: 'Template',
    category: 'Templates',
    downloadUrl: '/resources/business-templates.zip',
    isFree: false,
    price: 29,
    downloads: 12450,
  },
  {
    id: '3',
    title: 'Academic Success Roadmap',
    description: 'Step-by-step guide for planning your academic journey with actionable milestones and study strategies.',
    type: 'Article',
    category: 'Guides',
    downloadUrl: '/resources/academic-roadmap.pdf',
    isFree: true,
    downloads: 38920,
  },
  {
    id: '4',
    title: 'Data Analysis Toolkit',
    description: 'Curated collection of tools, spreadsheets, and templates for data analysis projects.',
    type: 'Tool',
    category: 'Tools',
    downloadUrl: '/resources/data-toolkit.zip',
    isFree: false,
    price: 19,
    downloads: 8760,
  },
  {
    id: '5',
    title: 'Research Project Ideas',
    description: '50+ research and project ideas categorized by discipline to strengthen your academic portfolio.',
    type: 'PDF',
    category: 'Guides',
    downloadUrl: '/resources/project-ideas.pdf',
    isFree: true,
    downloads: 29340,
  },
  {
    id: '6',
    title: 'Database Design Fundamentals',
    description: 'Video walkthrough of essential database design concepts including ER diagrams and normalization.',
    type: 'Video',
    category: 'Videos',
    downloadUrl: '/resources/database-design.mp4',
    isFree: false,
    price: 39,
    downloads: 15670,
  },
]

export const mockUser: User = {
  id: 'user-1',
  name: 'Jordan Taylor',
  email: 'jordan@example.com',
  avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Jordan',
  role: 'student',
  enrolledCourses: ['1', '2', '5', '6'],
  completedCourses: ['1', '8'],
  certificates: [
    {
      id: 'cert-1',
      courseId: '1',
      courseName: 'Introduction to Finance',
      issuedAt: '2024-08-15',
      credentialId: 'AK-FIN-2024-001234',
    },
    {
      id: 'cert-2',
      courseId: '8',
      courseName: 'Introduction to Data Analytics',
      issuedAt: '2024-10-20',
      credentialId: 'AK-DAT-2024-005678',
    },
  ],
  streak: 12,
  totalHours: 87,
  joinedAt: '2024-03-01',
}

export const mockProgress: Progress[] = [
  { courseId: '1', lessonId: '48', completed: true, percentage: 100, lastAccessed: '2024-08-15' },
  { courseId: '2', lessonId: '32', completed: false, percentage: 50, lastAccessed: '2024-11-28' },
  { courseId: '5', lessonId: '8', completed: false, percentage: 25, lastAccessed: '2024-11-25' },
  { courseId: '6', lessonId: '18', completed: false, percentage: 75, lastAccessed: '2024-11-27' },
  { courseId: '8', lessonId: '40', completed: true, percentage: 100, lastAccessed: '2024-10-20' },
]

export const categories = [
  'All',
  'Finance',
  'Business Administration',
  'Manpower',
  'Meditation',
  'Database Management System',
  'Data Science',
]

export const testimonials = [
  {
    id: '1',
    name: 'Marcus Chidziva',
    role: 'Financial Analyst at Old Mutual',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Marcus',
    content: 'Akademia helped me transition from a general business background to a specialized finance role in just 6 months. The courses are practical and the instructors are incredibly knowledgeable.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Emily Nkomo',
    role: 'Data Scientist at Econet',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Emily',
    content: 'The data science program at Akademia is outstanding. No fluff, just real skills that I apply daily in my work. The hands-on projects alone were worth the investment.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Carlos Maphosa',
    role: 'Business Development Manager',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Carlos',
    content: 'I recommend Akademia to everyone looking to advance their career. The business administration program gave me the confidence and skills to step into a leadership role.',
    rating: 5,
  },
]
