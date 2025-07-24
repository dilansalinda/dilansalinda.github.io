import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image: string;
  category: string;
  status?: 'completed' | 'active' | 'archived';
  year?: number;
  details?: string;
}

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: '1',
      title: 'Compliance Guard Engine',
      description: 'A powerful tool designed to ensure code compliance and maintain code quality through static code analysis. It empowers developers and project owners to proactively detect and address code violations, promoting best practices and enhancing the overall software development process.',
      tech: ['Java 17', 'Spring Boot', 'SonarQube', 'SonarCloud', 'MySQL'],
      github: 'https://github.com/dilansalinda/compliance-guard-engine',
      live: 'https://github.com/dilansalinda/compliance-guard-engine',
      image: 'assets/images/projects/compliance-guard-engine.png',
      category: 'DevOps',
      status: 'completed',
      year: 2024,
      details: 'This project includes advanced static analysis features, custom rule engines, and integration with popular CI/CD pipelines.'
    },
    {
      id: '2',
      title: 'InsightLive SDLC',
      description: 'Intelligent engineering platform Increases accountability and team synergy using real-time intelligence on engineering productivity and quality with seamless SDLC automation to improve speed and agility. Works on top of existing enterprise tool stacks such as SonarQube and Jira.',
      tech: ['Spring Boot', 'MySQL', 'Angular', 'RabbitMQ', 'Docker'],
      github: 'https://www.virtusa.com/news-room/Video-Hub/videos/611/6117142837001',
      image: 'assets/images/projects/insightlive.png',
      category: 'Enterprise',
      status: 'active',
      year: 2023,
      details: 'Enterprise-grade SDLC platform with real-time analytics and automation capabilities.'
    },
    {
      id: '3',
      title: 'OMS 2.0',
      description: 'Unlock unprecedented efficiency with OMS 2.0! A dynamic solution meticulously crafted for streamlined operations. Seamlessly manage tasks, enhance collaboration, and elevate productivity with modern cloud architecture.',
      tech: ['Java 11', 'Spring Boot', 'PostgreSQL', 'AWS RDS', 'Hibernate', 'Redis'],
      github: 'https://github.com/dilansalinda/oms-2.0',
      image: '/assets/images/projects/oms.png',
      category: 'Backend',
      status: 'completed',
      year: 2024,
      details: 'Scalable order management system with microservices architecture and cloud deployment.'
    },
    {
      id: '4',
      title: 'GlowSkin E-Commerce',
      description: 'Modern e-commerce platform for skincare products featuring secure payment integration, user authentication, product reviews, and responsive design. Built with performance and user experience in mind.',
      tech: ['React', 'Spring Boot', 'PostgreSQL', 'Stripe API', 'AWS S3'],
      github: 'https://github.com/dilansalinda/glowskin-web',
      live: 'https://glowskin.lk',
      image: '/assets/images/projects/glowskin.png',
      category: 'Full Stack',
      status: 'completed',
      year: 2023,
      details: 'Full-stack e-commerce solution with advanced filtering, recommendation engine, and admin dashboard.'
    },
    {
      id: '5',
      title: 'DevPortfolio Dashboard',
      description: 'Interactive dashboard for developers to track their GitHub activities, project statistics, and coding metrics. Features beautiful visualizations and real-time data updates.',
      tech: ['Angular 18', 'Node.js', 'MongoDB', 'Chart.js', 'GitHub API'],
      github: 'https://github.com/dilansalinda/dev-dashboard',
      live: 'https://dev-dashboard-demo.vercel.app',
      image: '/assets/images/projects/devportfolio_dashboard.png',
      category: 'Frontend',
      status: 'active',
      year: 2024,
      details: 'Developer analytics platform with GitHub integration and beautiful data visualizations.'
    },
    {
      id: '6',
      title: 'Smart Finance Tracker',
      description: 'Personal finance management application with expense tracking, budget planning, and financial goal setting. Includes data visualization and export features.',
      tech: ['Node.Js','Vue.js', 'Firebase', 'Chart.js', 'PWA', 'Tailwind CSS'],
      github: 'https://github.com/dilansalinda/finance-tracker',
      image: '/assets/images/projects/finance-tracker.png',
      category: 'Frontend',
      status: 'archived',
      year: 2023,
      details: 'Progressive web app for personal finance management with offline capabilities.'
    }
  ];

  displayedProjects: Project[] = [];
  hasMoreProjects = false;
  selectedProject: Project | null = null;
  private readonly projectsPerPage = 4;

  ngOnInit() {
    this.loadInitialProjects();
  }

  private loadInitialProjects() {
    this.displayedProjects = this.projects.slice(0, this.projectsPerPage);
    this.hasMoreProjects = this.projects.length > this.projectsPerPage;
    console.log('Initial projects loaded:', this.displayedProjects.length);
    console.log('Has more projects:', this.hasMoreProjects);
  }

  loadMoreProjects() {
    const currentLength = this.displayedProjects.length;
    const nextBatch = this.projects.slice(currentLength, currentLength + this.projectsPerPage);
    this.displayedProjects = [...this.displayedProjects, ...nextBatch];
    this.hasMoreProjects = this.displayedProjects.length < this.projects.length;
    
    console.log('Projects loaded after "Load More":', this.displayedProjects.length);
    console.log('Has more projects:', this.hasMoreProjects);
  }

  showProjectDetails(project: Project) {
    this.selectedProject = project;
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedProject = null;
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }

  getProjectFeatures(project: Project): string[] {
    // Define features for each project based on their technology and type
    const featureMap: { [key: string]: string[] } = {
      '1': [
        'Static code analysis with custom rules',
        'Integration with SonarQube and SonarCloud',
        'Real-time violation detection',
        'Comprehensive compliance reporting',
        'CI/CD pipeline integration',
        'Multi-language support'
      ],
      '2': [
        'Real-time productivity analytics',
        'SDLC automation workflows',
        'Integration with Jira and SonarQube',
        'Team performance metrics',
        'Quality gate enforcement',
        'Cross-functional team insights'
      ],
      '3': [
        'Microservices architecture',
        'Cloud-native deployment on AWS',
        'Advanced order processing',
        'Inventory management system',
        'Customer relationship features',
        'High-performance caching with Redis'
      ],
      '4': [
        'Secure payment processing with Stripe',
        'Product recommendation engine',
        'Advanced search and filtering',
        'Customer review system',
        'Admin dashboard with analytics',
        'Responsive mobile design'
      ],
      '5': [
        'GitHub API integration',
        'Interactive data visualizations',
        'Commit pattern analysis',
        'Language usage statistics',
        'Repository insights',
        'Real-time data updates'
      ],
      '6': [
        'Offline-first PWA architecture',
        'Expense categorization',
        'Budget planning and alerts',
        'Financial goal tracking',
        'Data export capabilities',
        'Beautiful data visualizations'
      ]
    };

    return featureMap[project.id] || [];
  }

  trackByProjectId(index: number, project: Project): string {
    return project.id;
  }
}