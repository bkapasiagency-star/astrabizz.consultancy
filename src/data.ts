/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Industry, Testimonial, FAQ, ProcessStep, TrustCounter, Technology, CaseStudy } from './types';
import { SAP_LOGO, ERPNEXT_LOGO, SALESFORCE_LOGO, ZOHO_LOGO, POWERBI_LOGO, AI_LOGO } from './assets/techLogos';

export const SERVICES: Service[] = [
  {
    id: 'erp',
    title: 'ERP Consulting',
    description: 'Helping businesses select, implement, and optimize ERP solutions including SAP, ERPNext, and Zoho ERP.',
    fullDescription: 'We guide you through every stage of the ERP journey — from platform selection to go-live and beyond. Our consultants align inventory tracking, procurement workflows, multi-currency accounting, and shop-floor scheduling into a single, unified system built around how your business actually operates.',
    includes: ['ERP Selection & Advisory', 'Implementation', 'Customization', 'Data Migration', 'Training', 'Ongoing Support'],
    icon: 'Briefcase'
  },
  {
    id: 'crm',
    title: 'CRM Consulting',
    description: 'Implementing and optimizing CRM solutions such as Salesforce and Zoho CRM to improve customer engagement, sales, and service operations.',
    fullDescription: 'We configure CRM platforms that map your customer journey end-to-end, from first contact to long-term account management, so your sales and service teams spend less time on admin and more time building relationships.',
    includes: ['CRM Selection & Advisory', 'Sales Automation', 'Lead Management', 'Customer Service Workflows', 'Reporting & Analytics'],
    icon: 'Users'
  },
  {
    id: 'business-process',
    title: 'Business Process Consulting',
    description: 'Analyzing business processes and designing efficient workflows to improve productivity, operational efficiency, and business performance.',
    fullDescription: 'Before we touch a single system, we study how work actually flows through your organization. We map current-state processes, remove redundancy, and design streamlined, future-ready workflows that improve throughput across every department.',
    includes: ['Process Mapping', 'Workflow Redesign', 'Bottleneck Analysis', 'Standard Operating Procedures', 'Continuous Improvement'],
    icon: 'Workflow'
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence & Data Analytics',
    description: 'Developing interactive dashboards, KPI reports, MIS, and analytics solutions that transform business data into actionable insights.',
    fullDescription: 'We turn raw operational data into decisions. Using Power BI and modern analytics tooling, we build real-time dashboards and MIS reports that give leadership immediate visibility into production, sales, inventory, and financial performance.',
    includes: ['Power BI Dashboards', 'KPI & MIS Reporting', 'Data Modeling', 'Executive Reporting', 'Predictive Analytics'],
    icon: 'BarChart3'
  },
  {
    id: 'ai',
    title: 'AI Consulting',
    description: 'Helping organizations adopt Artificial Intelligence to automate processes, improve decision-making, and increase business productivity.',
    fullDescription: 'We identify the highest-impact places to apply AI in your business — from predictive demand forecasting to intelligent document processing — and implement solutions that deliver measurable operational returns, not just novelty.',
    includes: ['AI Process Automation', 'AI-Powered Analytics', 'Intelligent Chatbots', 'Workflow Automation', 'Predictive Intelligence'],
    icon: 'Sparkles'
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Business Integration & Automation',
    description: 'Integrating WhatsApp Business with ERP and CRM systems to automate customer communication, lead management, order updates, payment reminders, support, and business notifications.',
    fullDescription: 'We connect WhatsApp Business directly into your ERP and CRM so customer communication happens where your customers already are — automated order updates, payment reminders, lead capture, and support, all synced with your core systems.',
    includes: ['WhatsApp-ERP/CRM Integration', 'Automated Notifications', 'Lead Capture & Routing', 'Payment Reminders', 'Customer Support Automation'],
    icon: 'MessageCircle'
  },
  {
    id: 'barcode-rfid',
    title: 'Barcode & RFID Integration',
    description: 'Integrating barcode and RFID solutions with ERP systems for inventory tracking, warehouse management, production monitoring, and dispatch automation.',
    fullDescription: 'We deploy barcode and RFID tracking directly inside your ERP, giving you real-time visibility of stock as it moves through receiving, production, warehousing, and dispatch — eliminating manual counts and reconciliation errors.',
    includes: ['Barcode Scanning Setup', 'RFID Deployment', 'Inventory Tracking', 'Warehouse Automation', 'Dispatch & Production Monitoring'],
    icon: 'ScanLine'
  },
  {
    id: 'banking-payment',
    title: 'Banking & Payment Integration',
    description: 'Connecting ERP systems with banking platforms to automate payment processing, bank reconciliation, collections, and financial transactions.',
    fullDescription: 'We integrate your ERP directly with banking platforms to automate payment processing, collections, and reconciliation — cutting manual finance work and giving you real-time visibility into cash flow.',
    includes: ['Payment Gateway Integration', 'Automated Bank Reconciliation', 'Collections Automation', 'Financial Transaction Sync'],
    icon: 'Landmark'
  },
  {
    id: 'system-audit',
    title: 'System Audit & Health Check',
    description: 'Assessing ERP, CRM, and business systems to identify performance gaps, process inefficiencies, and improvement opportunities.',
    fullDescription: 'Are your systems running slow, generating dirty data, or frustrating your staff? Our flagship System Health Audit runs a deep technical assessment of your configuration, workflows, and data integrity to build a clear, prioritized improvement roadmap.',
    includes: [
      'Performance Bottleneck Analysis',
      'Process Gap Assessment',
      'Duplicate & Data Quality Issues',
      'Security Risk Review',
      'Integration Health Check',
      'Compliance Risk Assessment'
    ],
    icon: 'ShieldCheck',
    isPremium: true,
    badge: 'Premium Service'
  },
  {
    id: 'training',
    title: 'Staff Training & Change Management',
    description: 'Training business users and supporting organizations during technology adoption to maximize user acceptance and system utilization.',
    fullDescription: 'The best system is only as good as its adoption. We run structured training programs and hands-on change management support to make sure your teams actually embrace the new way of working, not just tolerate it.',
    includes: ['User Training Programs', 'Change Management', 'Admin Training Manuals', 'Adoption Tracking'],
    icon: 'GraduationCap'
  },
  {
    id: 'implementation-support',
    title: 'Implementation & Support',
    description: 'Providing end-to-end implementation, go-live support, post-implementation assistance, system optimization, and continuous business support.',
    fullDescription: 'From the first requirement-gathering session through go-live and beyond, we stay by your side. We provide continuous system optimization and responsive support so your investment keeps delivering value as your business scales.',
    includes: ['End-to-End Implementation', 'Go-Live Support', 'Post-Implementation Assistance', 'System Optimization', 'Continuous Support'],
    icon: 'Rocket',
    isNew: true,
    badge: 'Full Lifecycle'
  }
];

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'sap',
    name: 'SAP',
    description: 'Enterprise ERP solutions for finance, manufacturing, procurement, inventory, warehouse management, sales, and supply chain operations.',
    icon: 'Server',
    logo: SAP_LOGO
  },
  {
    id: 'erpnext',
    name: 'ERPNext',
    description: 'Open-source ERP platform for manufacturing, accounting, inventory, HR, CRM, project management, and business operations.',
    icon: 'Leaf',
    logo: ERPNEXT_LOGO
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    description: "World's leading cloud CRM platform for sales automation, customer service, marketing, and customer relationship management.",
    icon: 'Cloud',
    logo: SALESFORCE_LOGO
  },
  {
    id: 'zoho',
    name: 'Zoho',
    description: 'Integrated business applications for CRM, finance, HR, operations, and business productivity.',
    icon: 'LayoutGrid',
    logo: ZOHO_LOGO
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    description: 'Interactive dashboards, KPI reporting, business intelligence, and data visualization for informed business decisions.',
    icon: 'BarChart3',
    logo: POWERBI_LOGO
  },
  {
    id: 'ai-tech',
    name: 'Artificial Intelligence',
    description: 'AI-powered automation, predictive analytics, intelligent reporting, and business process optimization.',
    icon: 'Cpu',
    logo: AI_LOGO
  }
];

export const SOLUTIONS: string[] = [
  'ERP Selection & Advisory',
  'CRM Selection & Advisory',
  'Digital Transformation Strategy',
  'Dashboard & MIS Reporting',
  'ERP & CRM Integration',
  'WhatsApp Business Integration',
  'Barcode & RFID Integration',
  'Banking & Payment Integration',
  'API Integration',
  'Data Migration & Master Data Management',
  'Go-Live Support',
  'Business Process Automation'
];

export const BUSINESS_CHALLENGES: string[] = [
  'Selecting the Right ERP & CRM',
  'Manual & Inefficient Business Processes',
  'Lack of Business Visibility',
  'Disconnected Systems',
  'Inventory & Warehouse Challenges',
  'Manufacturing Process Inefficiencies',
  'Poor Reporting & Decision Making',
  'Low User Adoption',
  'Data Management Challenges',
  'Digital Transformation Planning'
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'textile-apparel',
    name: 'Textile & Apparel',
    description: 'Yarn Manufacturing, Textile Processing & Garment Manufacturing. Deep expertise in production planning, BOM, procurement, inventory management, quality management, warehouse operations, and supply chain optimization.',
    workflows: [
      'Production Planning & BOM Management',
      'Procurement & Inventory Control',
      'Quality Management & Inspection',
      'Warehouse & Supply Chain Optimization'
    ],
    challenges: 'Disconnected planning, procurement, and quality data slow production and make yarn-to-garment traceability difficult.',
    solution: 'We implement ERP-driven production planning and inventory optimization that connects every stage, from raw material to finished goods.',
    icon: 'Layers'
  },
  {
    id: 'engineering-manufacturing',
    name: 'Engineering & Industrial Manufacturing',
    description: 'CVD Machine Manufacturing & Industrial Equipment. Deep experience in engineering manufacturing, production planning, material management, shop floor operations, inventory control, and process optimization.',
    workflows: [
      'Production Planning & Scheduling',
      'Material & Shop-Floor Management',
      'Inventory Control',
      'Process Optimization'
    ],
    challenges: 'Manual material tracking and disconnected shop-floor data make it hard to plan production accurately or control costs.',
    solution: 'We structure production and material management workflows that give manufacturing teams real-time visibility and control.',
    icon: 'Factory'
  },
  {
    id: 'lab-grown-diamond',
    name: 'Lab-Grown Diamond',
    description: 'CVD Diamond Manufacturing. Supporting production planning, manufacturing operations, inventory management, traceability, quality processes, and operational excellence.',
    workflows: [
      'Production Planning & Manufacturing Operations',
      'Inventory & Traceability Management',
      'Quality Process Management',
      'Operational Excellence Tracking'
    ],
    challenges: 'Traceability, batch-level quality, and manufacturing visibility are difficult to maintain with manual processes.',
    solution: 'We build manufacturing visibility and process-improvement systems purpose-built for CVD diamond production.',
    icon: 'Gem'
  },
  {
    id: 'metallic-yarn',
    name: 'Metallic Yarn Manufacturing',
    description: 'Specialty Manufacturing. Improving manufacturing workflows, production planning, inventory management, quality control, and process efficiency.',
    workflows: [
      'Manufacturing Workflow Design',
      'Production Planning',
      'Inventory Management',
      'Quality Control & Process Efficiency'
    ],
    challenges: 'Specialty manufacturing workflows often outgrow generic systems, creating inventory and quality control gaps.',
    solution: 'We redesign manufacturing workflows around your specific production and quality requirements.',
    icon: 'Boxes'
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Project-Based Construction & Infrastructure. Expertise in project planning, procurement, material management, inventory control, project costing, vendor management, and business reporting.',
    workflows: [
      'Project Planning & Procurement',
      'Material Management & Inventory Control',
      'Project Costing',
      'Vendor Management & Reporting'
    ],
    challenges: 'Project-based procurement, material planning, and vendor management are difficult to track consistently across multiple sites.',
    solution: 'We optimize procurement and project material management so every project stays on budget and on schedule.',
    icon: 'HardHat'
  },
  {
    id: 'building-materials',
    name: 'Building Materials & Construction Chemicals',
    description: 'Manufacturing & Distribution. Supporting production planning, batch manufacturing, quality management, inventory control, procurement, supply chain, and dealer operations.',
    workflows: [
      'Production Planning & Batch Manufacturing',
      'Quality Management',
      'Inventory Control & Procurement',
      'Supply Chain & Dealer Operations'
    ],
    challenges: "Batch manufacturing, quality management, and dealer operations require tight coordination that manual systems can't support.",
    solution: 'We connect production, quality, and dealer/distribution workflows into a single, reliable system.',
    icon: 'Building2'
  },
  {
    id: 'packaging',
    name: 'Packaging',
    description: 'Packaging Manufacturing. Optimizing production scheduling, raw material planning, quality assurance, warehouse management, inventory control, and dispatch operations.',
    workflows: [
      'Production Scheduling & Material Planning',
      'Quality Assurance',
      'Warehouse & Inventory Control',
      'Dispatch Operations'
    ],
    challenges: 'Manual quoting and disconnected production scheduling compress margins and slow dispatch.',
    solution: 'We link production scheduling, quality assurance, and dispatch into one optimized workflow.',
    icon: 'Package'
  },
  {
    id: 'pharma-medical',
    name: 'Pharmaceuticals & Medical Devices',
    description: 'Regulated Manufacturing. Experience with SAP Batch Manufacturing Records (BMR), Quality Control (QC), EU Entity implementation, inventory management, procurement, and regulatory compliance processes.',
    workflows: [
      'SAP Batch Manufacturing Records (BMR)',
      'Quality Control (QC) Processes',
      'EU Entity Implementation',
      'Regulatory Compliance & Inventory Management'
    ],
    challenges: "Regulatory compliance, batch records, and QC processes demand a level of precision that spreadsheets can't guarantee.",
    solution: 'We implement SAP Batch Manufacturing Records, QC, and EU entity processes purpose-built for regulated manufacturing.',
    icon: 'Pill'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Business-First Consulting Approach',
    description: 'We start with your business goals, not a product pitch. Every recommendation is grounded in what actually improves your operations.'
  },
  {
    title: 'Technology-Neutral Solution Advisory',
    description: "We aren't tied to a single vendor. Whether it's SAP, ERPNext, Salesforce, or Zoho, we recommend what genuinely fits your business."
  },
  {
    title: 'Strong Manufacturing Domain Expertise',
    description: 'Deep, hands-on knowledge of production floors across textile, engineering, pharma, packaging, and construction sectors.'
  },
  {
    title: 'ERP, CRM & AI Specialists',
    description: 'A single consulting partner for enterprise systems, customer relationship platforms, and intelligent automation, all under one roof.'
  },
  {
    title: 'Practical Industry Experience',
    description: 'Our recommendations are shaped by real implementation experience on real production floors, not theoretical frameworks.'
  },
  {
    title: 'End-to-End Implementation & Support',
    description: 'We stay engaged from requirement analysis through go-live and beyond, ensuring systems keep delivering value as you scale.'
  },
  {
    title: 'Data-Driven Decision Making',
    description: 'We build reporting and BI systems that turn your operational data into clear, actionable insight for leadership.'
  },
  {
    title: 'Long-Term Business Partnership',
    description: 'We act as your ongoing technology partner, supporting your business as it grows and market conditions evolve.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'We sit down with key stakeholders across your business to understand current operations, systems, and persistent bottlenecks.',
    substeps: ['Stakeholder interviews', 'Current-system mapping', 'Pain-point identification', 'Goal definition']
  },
  {
    step: '02',
    title: 'Analyze',
    description: 'We analyze your processes, data, and workflows in depth to identify gaps, inefficiencies, and opportunities for improvement.',
    substeps: ['Process analysis', 'Data & systems audit', 'Gap identification', 'Risk assessment']
  },
  {
    step: '03',
    title: 'Recommend',
    description: 'We present a clear, technology-neutral recommendation — the right platforms, modules, and integrations for your specific needs.',
    substeps: ['Solution shortlisting', 'Architecture blueprint', 'Cost & timeline estimate', 'Stakeholder sign-off']
  },
  {
    step: '04',
    title: 'Implement',
    description: 'We configure, customize, and integrate your chosen systems, migrating historical data and building the workflows your teams need.',
    substeps: ['System configuration', 'Data migration', 'Custom integrations', 'Testing & validation']
  },
  {
    step: '05',
    title: 'Train',
    description: 'We run structured, role-specific training so every team member is confident and productive on the new system from day one.',
    substeps: ['Role-based training', 'Admin training', 'User acceptance testing', 'Training documentation']
  },
  {
    step: '06',
    title: 'Support',
    description: 'We provide ongoing, responsive support after go-live, including optimization, troubleshooting, and continued system evolution.',
    substeps: ['Go-live assistance', 'Ongoing SLA support', 'Performance optimization', 'Continuous improvement']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    sector: 'Textile Manufacturing',
    title: 'ERP-Driven Production Planning',
    result: 'Implemented ERP-driven production planning and inventory optimization, giving the client accurate visibility from raw material to finished goods.',
    icon: 'Layers'
  },
  {
    id: 'cs2',
    sector: 'Medical Device Manufacturing',
    title: 'Regulated Manufacturing Compliance',
    result: 'Delivered SAP Batch Manufacturing Records (BMR), Quality Control (QC), and EU Entity implementation for a fully compliant, audit-ready system.',
    icon: 'Pill'
  },
  {
    id: 'cs3',
    sector: 'CVD Machine Manufacturing',
    title: 'Production & Material Optimization',
    result: 'Optimized production and material management workflows, improving shop-floor visibility and reducing planning errors.',
    icon: 'Factory'
  },
  {
    id: 'cs4',
    sector: 'Lab-Grown Diamond Manufacturing',
    title: 'Manufacturing Visibility & Process Improvement',
    result: 'Improved manufacturing visibility and process efficiency across production, quality, and traceability workflows.',
    icon: 'Gem'
  },
  {
    id: 'cs5',
    sector: 'Construction',
    title: 'Procurement & Project Material Management',
    result: 'Optimized procurement and project material management, improving cost control and on-site coordination across multiple projects.',
    icon: 'HardHat'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'f1',
    question: 'Which ERP solution is right for my business?',
    answer: 'We help evaluate your business requirements and recommend the most suitable ERP platform, including SAP, ERPNext, or Zoho ERP, based on your industry, scale, and budget rather than a one-size-fits-all template.',
    category: 'ERP'
  },
  {
    id: 'f2',
    question: 'Do you provide CRM consulting?',
    answer: 'Yes. We specialize in Salesforce and Zoho CRM implementation, optimization, and business process alignment, helping you improve customer engagement, sales, and service operations.',
    category: 'CRM'
  },
  {
    id: 'f3',
    question: 'Can you build dashboards and MIS reports?',
    answer: 'Yes. We develop Power BI dashboards, KPI reports, and business intelligence solutions tailored to your reporting needs, turning raw operational data into clear, actionable insight.',
    category: 'Business Intelligence'
  },
  {
    id: 'f4',
    question: 'Do you integrate WhatsApp with ERP or CRM?',
    answer: 'Yes. We implement WhatsApp Business integrations for customer communication, lead management, notifications, order updates, and support workflows, all synced directly with your core systems.',
    category: 'Integrations'
  },
  {
    id: 'f5',
    question: 'Can you integrate barcode, RFID, and banking systems with ERP?',
    answer: 'Yes. We provide enterprise integrations for barcode, RFID, banking, and other third-party systems to streamline inventory tracking, payment processing, and overall business operations.',
    category: 'Integrations'
  },
  {
    id: 'f6',
    question: 'Do you provide staff training and post-implementation support?',
    answer: 'Yes. We deliver user training, change management, go-live assistance, and ongoing support to ensure your teams achieve successful, lasting adoption of every system we implement.',
    category: 'Support'
  }
];

export const TRUST_COUNTERS: TrustCounter[] = [
  {
    id: 'exp',
    value: '12',
    suffix: '+',
    label: 'Years Experience',
    description: 'Of hands-on ERP, CRM, and digital transformation consulting'
  },
  {
    id: 'proj',
    value: '100',
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successful ERP, CRM, and enterprise transformation engagements'
  },
  {
    id: 'ind',
    value: '8',
    suffix: '+',
    label: 'Industries Served',
    description: 'Textile, Pharma, Construction, Packaging, and more'
  },
  {
    id: 'sat',
    value: '98',
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Long-term client relationships and high user adoption'
  }
];
