export interface CandidateProfile {
  full_name: string;
  current_role: string[];
  location: {
    city: string;
    state: string;
    country: string;
    postal_code: string;
  };
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
}

export interface ProfessionalSummary {
  headline: string;
  overview: string;
  specializations: string[];
}

export interface TechnicalSkillGroup {
  programming_languages: { name: string; proficiency: string }[];
  frameworks_and_platforms: { name: string; proficiency: string }[];
  databases: string[];
  cloud_platforms: string[];
  developer_tools: string[];
  backend_engineering: string[];
  software_architecture: string[];
  devops_and_deployment: string[];
  mobile_application_development: string[];
  artificial_intelligence_and_automation: string[];
  blockchain: string[];
}

export interface ProfessionalExperience {
  organization: string;
  designation: string;
  employment_type: string;
  duration: {
    start: string;
    end: string;
  };
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectDoc {
  project_name: string;
  role: string[];
  project_type: string;
  domains: string[];
  description: string;
  keywords: string[];
}

export interface EducationEntry {
  institution: string;
  degree?: string;
  qualification?: string;
  field?: string;
  cgpa?: string;
  percentage?: string;
  duration?: {
    start: string;
    end: string;
  };
  year?: string;
  location: string;
}

export interface LeadershipEntry {
  title: string;
  activities: string[];
}

export interface AchievementEntry {
  title: string;
  category: string;
  organization?: string;
}

export interface ProfileData {
  candidate_profile: CandidateProfile;
  professional_summary: ProfessionalSummary;
  technical_skills: TechnicalSkillGroup;
  professional_experience: ProfessionalExperience[];
  projects: ProjectDoc[];
  education: EducationEntry[];
  leadership_experience: LeadershipEntry[];
  achievements: AchievementEntry[];
  soft_skills: string[];
  ats_keywords: string[];
}

export const profileData: ProfileData = {
  "candidate_profile": {
    "full_name": "KASILINGAM MARUTHAMUTHU",
    "current_role": [
      "Software Developer",
      "Backend Developer",
      "Software Engineer",
      "System Architect"
    ],
    "location": {
      "city": "Tiruvannamalai",
      "state": "Tamil Nadu",
      "country": "India",
      "postal_code": "606601"
    },
    "contact": {
      "phone": "+91 9486856337",
      "email": "kasilingamtvm@gmail.com",
      "linkedin": "kasilingam-maruthamuthu",
      "github": "lingaa005"
    }
  },

  "professional_summary": {
    "headline": "Software Engineer | Backend Developer | System Architect",
    "overview": "Software Engineer and System Architect experienced in backend engineering, scalable API development, microservices architecture, automation systems, cloud-native applications, mobile applications, AI-powered solutions, and enterprise software development. Skilled in designing maintainable architectures, distributed systems, cloud-ready deployments, backend infrastructure, and production-grade software solutions. Experienced in system reliability engineering, asynchronous workflows, service integration, payment systems, and enterprise application development.",
    "specializations": [
      "Backend Development",
      "Software Engineering",
      "System Architecture",
      "API Design",
      "REST API Development",
      "Microservices Architecture",
      "Cloud-Native Applications",
      "Distributed Systems",
      "Automation Systems",
      "Enterprise Software Development",
      "Application Integration",
      "Mobile Application Development",
      "AI-Powered Applications",
      "Cloud Infrastructure"
    ]
  },

  "technical_skills": {
    "programming_languages": [
      {
        "name": "Python",
        "proficiency": "Advanced"
      },
      {
        "name": "Java",
        "proficiency": "Intermediate"
      },
      {
        "name": "C++",
        "proficiency": "Intermediate"
      },
      {
        "name": "C",
        "proficiency": "Intermediate"
      },
      {
        "name": "C#",
        "proficiency": "Beginner"
      }
    ],

    "frameworks_and_platforms": [
      {
        "name": "Django",
        "proficiency": "Advanced"
      },
      {
        "name": "Flask",
        "proficiency": "Advanced"
      },
      {
        "name": "Node.js",
        "proficiency": "Intermediate"
      },
      {
        "name": "Express.js",
        "proficiency": "Intermediate"
      },
      {
        "name": ".NET",
        "proficiency": "Beginner"
      },
      {
        "name": "ASP.NET Core",
        "proficiency": "Beginner"
      },
      {
        "name": "ML.NET",
        "proficiency": "Beginner"
      }
    ],

    "databases": [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "CassandraDB"
    ],

    "cloud_platforms": [
      "Supabase",
      "Render",
      "Railway",
      "MongoDB Atlas"
    ],

    "developer_tools": [
      "Git",
      "Postman",
      "Docker"
    ],

    "backend_engineering": [
      "REST APIs",
      "Backend Architecture",
      "API Design",
      "API Development",
      "Microservices",
      "Service-Oriented Architecture",
      "Event-Driven Architecture",
      "Asynchronous Processing",
      "Workflow Automation",
      "Payment Gateway Integration",
      "Backend Services",
      "Enterprise Integration",
      "Inter-Service Communication",
      "Application Integration",
      "Domain Separation",
      "Data Processing",
      "Business Logic Development"
    ],

    "software_architecture": [
      "System Architecture",
      "Software Architecture",
      "Application Architecture",
      "Backend System Design",
      "Distributed Systems",
      "Scalable Systems",
      "Cloud-Ready Infrastructure",
      "Production-Grade Design",
      "System Reliability",
      "Performance Optimization",
      "Fail-Safe Design",
      "Maintainable Architecture",
      "Solution Design"
    ],

    "devops_and_deployment": [
      "Docker Containerization",
      "Deployment Automation",
      "Infrastructure Design",
      "Cloud Deployment",
      "Environment Management",
      "Container-Based Deployment"
    ],

    "mobile_application_development": [
      "Android Development",
      "Voice-Based Applications",
      "Accessibility-Focused Applications",
      "Email Automation Applications"
    ],

    "artificial_intelligence_and_automation": [
      "AI-Powered Applications",
      "Intelligent Automation",
      "Workflow Automation",
      "Voice Automation Systems"
    ],

    "blockchain": [
      "Blockchain Applications",
      "Blockchain Solution Design",
      "Distributed Ledger Concepts"
    ]
  },

  "professional_experience": [
    {
      "organization": "Viyuga Innovations",
      "designation": "Software Developer",
      "employment_type": "Internship / Industry Experience",
      "duration": {
        "start": "2025-11",
        "end": "2026-02"
      },
      "responsibilities": [
        "Designed scalable microservices using Django and PostgreSQL.",
        "Developed backend services using REST API architecture.",
        "Implemented event-driven architecture patterns.",
        "Built secure inter-service communication mechanisms.",
        "Developed payment integration workflows.",
        "Implemented asynchronous processing systems.",
        "Created Docker-based deployment solutions.",
        "Designed cloud-ready infrastructure patterns.",
        "Maintained clean domain separation principles.",
        "Improved application reliability and scalability.",
        "Applied production-grade software architecture practices."
      ],
      "technologies": [
        "Python",
        "Django",
        "PostgreSQL",
        "REST APIs",
        "Docker",
        "Microservices",
        "Event-Driven Architecture"
      ]
    },

    {
      "organization": "Chennai Port Authority",
      "designation": "Backend Developer",
      "employment_type": "Internship / Industry Experience",
      "duration": {
        "start": "2024-12",
        "end": "2025-01"
      },
      "responsibilities": [
        "Designed and developed a Port Charges Calculator platform.",
        "Architected scalable backend APIs.",
        "Enabled seamless integration with existing port systems.",
        "Implemented accurate charge computation mechanisms.",
        "Designed interoperable backend services.",
        "Improved backend system performance and reliability.",
        "Contributed to complete backend architecture design.",
        "Delivered high-performance service integration solutions."
      ],
      "technologies": [
        "Backend Development",
        "REST APIs",
        "System Design",
        "Software Architecture",
        "Enterprise Integration"
      ]
    }
  ],

  "projects": [
    {
      "project_name": "CleanSlate",
      "role": [
        "System Architect",
        "Blockchain Developer"
      ],
      "project_type": "Cybersecurity and Sustainable Technology Platform",
      "domains": [
        "Cybersecurity",
        "Data Privacy",
        "Blockchain",
        "Sustainability"
      ],
      "description": "Designed and developed a secure data erasure platform for permanent removal of sensitive information from electronic devices. The platform enables safe refurbishment, recycling, and reuse of electronic hardware while ensuring complete privacy protection.",
      "keywords": [
        "Data Erasure",
        "Data Privacy",
        "Secure Deletion",
        "Device Recycling",
        "Blockchain",
        "Security Architecture",
        "Sustainable Computing"
      ]
    },

    {
      "project_name": "BLAP - Business Lifestyle Advancement Platform",
      "role": [
        "System Architect",
        "Android Application Developer"
      ],
      "project_type": "Voice-Based Email Automation Platform",
      "domains": [
        "Mobile Development",
        "Accessibility",
        "Automation",
        "Communication Technology"
      ],
      "description": "Developed a voice-enabled email automation application allowing users to send emails through voice commands and listen to incoming emails through speech output. Built to improve accessibility, productivity, and hands-free communication.",
      "keywords": [
        "Voice Automation",
        "Email Automation",
        "Android Development",
        "Accessibility",
        "Speech Processing",
        "Mobile Applications"
      ]
    },

    {
      "project_name": "SocioScrape",
      "role": [
        "System Architect",
        "API Designer"
      ],
      "project_type": "Social Media Intelligence Platform",
      "domains": [
        "Data Analytics",
        "Social Media Monitoring",
        "Information Analysis",
        "Intelligence Systems"
      ],
      "description": "Designed and developed a social media monitoring and analysis platform for the National Investigation Agency Smart India Hackathon problem statement. The platform transforms publicly available information into structured and actionable intelligence.",
      "keywords": [
        "Social Media Analytics",
        "Data Collection",
        "Information Tracking",
        "Pattern Identification",
        "API Design",
        "Data Processing",
        "Intelligence Analysis"
      ]
    }
  ],

  "education": [
    {
      "institution": "Rajalakshmi Engineering College",
      "degree": "Bachelor of Engineering / Bachelor of Technology",
      "field": "Engineering",
      "cgpa": "7.99",
      "duration": {
        "start": "2023",
        "end": "2027"
      },
      "location": "Chennai"
    },
    {
      "institution": "Maharishi International Residential School",
      "qualification": "Higher Secondary Education",
      "percentage": "92.6",
      "year": "2023",
      "location": "Kanchipuram"
    },
    {
      "institution": "Vignesh International School",
      "qualification": "Secondary Education",
      "percentage": "83.8",
      "year": "2021",
      "location": "Tiruvannamalai"
    }
  ],

  "leadership_experience": [
    {
      "title": "Team Lead",
      "activities": [
        "Led internship development teams.",
        "Led Smart India Hackathon teams.",
        "Managed project planning and execution."
      ]
    },
    {
      "title": "Technical Event Coordinator",
      "activities": [
        "Coordinated major technical events.",
        "Managed technical communities.",
        "Led event execution teams."
      ]
    }
  ],

  "achievements": [
    {
      "title": "Git and GitHub Workshop Speaker",
      "category": "Technical Training"
    },
    {
      "title": "Blockchain Technical Event Organizer",
      "category": "Community Leadership"
    },
    {
      "title": "Modern Blockchain Guest Speaker",
      "organization": "Code Sapiens",
      "category": "Technical Speaking"
    },
    {
      "title": "Technical Associate",
      "organization": "Blockchain Innovation Club",
      "category": "Technical Leadership"
    },
    {
      "title": "Winner - SIH Internal Hackathon 2024",
      "category": "Hackathon"
    },
    {
      "title": "Qualified for Smart India Hackathon 2024 Round 2",
      "category": "National Competition"
    }
  ],

  "soft_skills": [
    "Leadership",
    "Team Collaboration",
    "Technical Communication",
    "Research",
    "Critical Thinking",
    "Problem Solving",
    "Analytical Thinking",
    "Adaptability",
    "Proactive Learning",
    "Innovation",
    "Project Coordination",
    "Decision Making"
  ],

  "ats_keywords": [
    "Software Engineer",
    "Backend Developer",
    "Software Developer",
    "System Architect",
    "Python Developer",
    "Django Developer",
    "Flask Developer",
    "Node.js Developer",
    "REST API",
    "API Development",
    "Backend Engineering",
    "Microservices",
    "System Design",
    "Software Architecture",
    "Cloud Computing",
    "Cloud Infrastructure",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "CassandraDB",
    "Git",
    "Postman",
    "Enterprise Applications",
    "Distributed Systems",
    "Scalable Applications",
    "Performance Optimization",
    "Application Integration",
    "Asynchronous Processing",
    "Event-Driven Architecture",
    "Automation Systems",
    "AI Applications",
    "Android Development",
    "Blockchain",
    "Problem Solving",
    "Leadership",
    "Team Management",
    ".NET",
    "ASP.NET Core",
    "C#"
  ]
};
