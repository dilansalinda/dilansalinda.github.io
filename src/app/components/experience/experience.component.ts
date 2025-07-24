import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  standalone: true,
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [CommonModule]
})
export class ExperienceComponent implements OnInit {
  expandedStates: { [key: number]: boolean } = {};

  ngOnInit() {
    // Clear any existing state first
    this.expandedStates = {};
    this.experiences.forEach((_, index) => {
      this.expandedStates[index] = false;
    });
    console.log('Initial states:', this.expandedStates); // Add this debug
  }

  toggleExperience(index: number) {
    console.log('Before toggle - Index:', index, 'State:', this.expandedStates[index]);
    this.expandedStates[index] = !this.expandedStates[index];
    console.log('After toggle - Index:', index, 'State:', this.expandedStates[index]);
    console.log('isExpanded() returns:', this.isExpanded(index));
  }

  isExpanded(index: number): boolean {
    return this.expandedStates[index] === true; // Be explicit
  }
  experiences = [
    {
      company: 'Linearsix',
      role: 'Software Development Engineer II',
      duration: '2023 – Present',
      logo: '/assets/images/company/linearsix.png',
      achievements: [
        'Designed and developed Java-based OCR applications - Engineered robust back-end services focused on document parsing and data extraction, ensuring high performance across diverse input formats.',
  'Optimized OCR solution performance, accuracy, and scalability - Fine-tuned models and processing pipelines to improve recognition precision while ensuring the system can handle production-level scale and throughput.',
  'Deployed applications on Amazon EKS and managed cloud infrastructure - Containerized services and configured Kubernetes clusters to enable reliable, scalable cloud-native deployments.',
  'Collaborated with cross-functional teams to integrate OCR modules - Worked closely with product, front-end, and infrastructure teams to ensure seamless integration of OCR capabilities into larger enterprise systems.',
  'Troubleshot and resolved complex image processing and cloud deployment issues - Identified and fixed runtime failures, image parsing inconsistencies, and cloud resource bottlenecks to maintain service uptime and data integrity.'
      ]
    },
    {
      company: 'DirectFN LTD',
      role: 'Senior Software Engineer',
      duration: '2023 – 2024',
      logo: '/assets/images/company/directfn.png',
      achievements: [
        'Develop and Supported the NBK Brokerage System : Contributed to the development and support of the National Bank of Kuwait - Wealth’s online brokerage, ensuring robust functionality and reliability.',
        'Real-time Notifications: Implemented real-time notification systems based on order activities to provide timely updates for users. This feature ensures that users receive immediate alerts on their transactions and market activities, significantly enhancing their trading experience.',
        'API Integration: Developed and integrated multi-channel notifications (Email, SMS, Push, WhatsApp) into the Brokerage Order Management System (OMS). This integration allows seamless communication with users through their preferred channels, improving user engagement and satisfaction.',
        'Client Requirements & Product Support: Addressed client requirements and provided robust product support, including bug fixes and feature enhancements. My focus on client needs ensures that the system remains reliable and continues to evolve according to user feedback and market demands.',
        'Domain Expertise: Leveraged strong domain knowledge of stock market operations and brokerage systems to drive product development and support. My expertise in the field has been instrumental in ensuring the system meets industry standards and delivers exceptional performance.'
      ]
    },
    {
      company: 'Virtusa Corporation',
      role: 'Senior Software Engineer',
      duration: '2018 – 2023',
      logo: '/assets/images/company/virtusa.png',
      achievements: [
        'DevOps Engineer within GTO, assisting product teams with the onboarding of their products onto DevOps lifecycle and management of GTO’s internal AWS and GCP Cloud environments',
        'Ensure alignment with DevOps best practices by managing and reviewing all technical operations',
        'Research trends in current technology domains and recommend emerging operational practices',
        'Liaise with upper management and business development teams to define requirements and estimates',
        'Conduct POC efforts to assess technical feasibility on applications of emerging technologies',
        'Conduct code reviews and knowledge transfer sessions to coach junior resources to ensure codebases adhere to development best practices, suitable design pattern usage, unit and functional test coverage thereby maintaining overall engineering quality of the developed artifacts',
        'Provide technical support to client teams on troubleshooting and debugging issues ranging from environment specific issues on containerized environments such as Kubernetes, to application-level defects',
      ]
    },
    {
      company: 'WEGG',
      role: 'Associate Software Engineer',
      duration: '2017 – 2018',
      logo: '/assets/images/company/wegg.svg',
      achievements: [
        'Implement object-oriented design principles to ensure scalable and maintainable code.',
        'Conduct unit testing using Junit and Mockito, ensuring code quality and reliability.',
        'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders',
        'Actively participate in Automated Testing practices to ensure software reliability and stability.',
        'Utilize Java 8 (or later) and the Spring Framework, including SpringBoot and Core, for efficient and effective development.',
      ]
    }
  ];
}