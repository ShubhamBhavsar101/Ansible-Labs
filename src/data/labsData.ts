export interface Lab {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  objective: string;
  keyConcepts: string[];
  prerequisites: string[];
  tasks: string[];
  expectedOutcome: string;
}

export interface Solution {
  labId: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  walkthrough: {
    step: number;
    description: string;
    code?: string;
    command?: string;
    explanation?: string;
  }[];
  commonPitfalls: string[];
  bestPractices: string[];
}

export const labs: Lab[] = [
  // Beginner Labs
  {
    id: 'beginner-1',
    title: 'Your First Ansible Playbook',
    description: 'Create and run your first Ansible playbook to understand the basic structure and syntax.',
    difficulty: 'Beginner',
    estimatedTime: '30 minutes',
    objective: 'Learn the fundamental structure of an Ansible playbook and execute basic tasks.',
    keyConcepts: ['Playbooks', 'Tasks', 'Modules', 'YAML syntax'],
    prerequisites: [
      'Ansible installed on control machine',
      'Basic understanding of YAML',
      'SSH access to target hosts'
    ],
    tasks: [
      'Create a simple playbook file named hello-world.yml',
      'Define a play targeting localhost',
      'Add a task using the debug module to print "Hello, Ansible!"',
      'Run the playbook using ansible-playbook command',
      'Verify the output shows the debug message'
    ],
    expectedOutcome: 'Successfully execute your first playbook and see the debug output in the terminal.'
  },
  {
    id: 'beginner-2',
    title: 'Working with Inventory Files',
    description: 'Learn how to create and manage inventory files to define your target hosts.',
    difficulty: 'Beginner',
    estimatedTime: '25 minutes',
    objective: 'Create inventory files and understand different inventory formats.',
    keyConcepts: ['Inventory', 'Host groups', 'Host variables', 'INI format'],
    prerequisites: [
      'Completed Lab 1',
      'Multiple target hosts available'
    ],
    tasks: [
      'Create an INI-format inventory file with multiple hosts',
      'Define host groups (webservers, databases)',
      'Add host-specific variables',
      'Test connectivity using ansible ping module',
      'Run a playbook targeting specific groups'
    ],
    expectedOutcome: 'Successfully manage multiple hosts using inventory files and target specific groups.'
  },
  {
    id: 'beginner-3',
    title: 'Using Variables and Facts',
    description: 'Discover how to use variables and gather system facts in your playbooks.',
    difficulty: 'Beginner',
    estimatedTime: '35 minutes',
    objective: 'Implement variables and utilize Ansible facts for dynamic playbooks.',
    keyConcepts: ['Variables', 'Facts', 'Variable precedence', 'Jinja2 templating'],
    prerequisites: [
      'Completed Labs 1-2',
      'Understanding of YAML syntax'
    ],
    tasks: [
      'Define variables in a playbook',
      'Use the setup module to gather facts',
      'Create tasks that use both custom variables and facts',
      'Implement conditional tasks based on facts',
      'Display system information using variables'
    ],
    expectedOutcome: 'Create dynamic playbooks that adapt based on system facts and custom variables.'
  },
  {
    id: 'beginner-4',
    title: 'File and Directory Management',
    description: 'Learn to manage files and directories using Ansible modules.',
    difficulty: 'Beginner',
    estimatedTime: '40 minutes',
    objective: 'Master file operations including creation, modification, and permissions.',
    keyConcepts: ['File module', 'Copy module', 'Template module', 'File permissions'],
    prerequisites: [
      'Completed Labs 1-3',
      'Basic Linux file system knowledge'
    ],
    tasks: [
      'Create directories with specific permissions',
      'Copy files from control machine to targets',
      'Create files with specific content and ownership',
      'Modify file permissions and ownership',
      'Use templates to create configuration files'
    ],
    expectedOutcome: 'Efficiently manage files and directories across multiple systems using Ansible.'
  },
  {
    id: 'beginner-5',
    title: 'Package Management',
    description: 'Install and manage software packages across different operating systems.',
    difficulty: 'Beginner',
    estimatedTime: '30 minutes',
    objective: 'Use Ansible to install, update, and remove packages on target systems.',
    keyConcepts: ['Package module', 'Yum module', 'Apt module', 'Cross-platform compatibility'],
    prerequisites: [
      'Completed Labs 1-4',
      'Target systems with package managers'
    ],
    tasks: [
      'Install packages using the generic package module',
      'Use distribution-specific modules (yum, apt)',
      'Update package cache',
      'Install multiple packages in a single task',
      'Remove unwanted packages'
    ],
    expectedOutcome: 'Successfully manage software packages across different Linux distributions.'
  },
  {
    id: 'beginner-6',
    title: 'Service Management',
    description: 'Control system services using Ansible service modules.',
    difficulty: 'Beginner',
    estimatedTime: '25 minutes',
    objective: 'Start, stop, restart, and enable services using Ansible.',
    keyConcepts: ['Service module', 'Systemd module', 'Service states', 'Boot configuration'],
    prerequisites: [
      'Completed Labs 1-5',
      'Services installed on target systems'
    ],
    tasks: [
      'Start and stop services',
      'Enable services to start at boot',
      'Restart services when configuration changes',
      'Check service status',
      'Handle service dependencies'
    ],
    expectedOutcome: 'Effectively manage system services and their startup configuration.'
  },
  {
    id: 'beginner-7',
    title: 'Working with Handlers',
    description: 'Implement handlers to respond to changes in your playbooks.',
    difficulty: 'Beginner',
    estimatedTime: '35 minutes',
    objective: 'Create and use handlers to perform actions only when changes occur.',
    keyConcepts: ['Handlers', 'Notify', 'Changed state', 'Handler execution order'],
    prerequisites: [
      'Completed Labs 1-6',
      'Understanding of task states'
    ],
    tasks: [
      'Create handlers for service restarts',
      'Use notify to trigger handlers',
      'Implement multiple handlers in a playbook',
      'Understand handler execution timing',
      'Create handlers that depend on other handlers'
    ],
    expectedOutcome: 'Build efficient playbooks that only perform necessary actions using handlers.'
  },
  {
    id: 'beginner-8',
    title: 'Conditional Tasks and Loops',
    description: 'Add logic to your playbooks with conditionals and loops.',
    difficulty: 'Beginner',
    estimatedTime: '45 minutes',
    objective: 'Implement conditional execution and loops for more dynamic playbooks.',
    keyConcepts: ['When conditions', 'Loops', 'with_items', 'loop', 'Conditional logic'],
    prerequisites: [
      'Completed Labs 1-7',
      'Understanding of variables and facts'
    ],
    tasks: [
      'Create tasks that run conditionally based on facts',
      'Implement loops to process lists of items',
      'Use different loop types (with_items, loop)',
      'Combine conditions with loops',
      'Create nested loops for complex scenarios'
    ],
    expectedOutcome: 'Create sophisticated playbooks with conditional logic and iterative tasks.'
  },
  {
    id: 'beginner-9',
    title: 'Error Handling and Debugging',
    description: 'Learn techniques for handling errors and debugging playbooks.',
    difficulty: 'Beginner',
    estimatedTime: '40 minutes',
    objective: 'Implement error handling strategies and debugging techniques.',
    keyConcepts: ['ignore_errors', 'failed_when', 'changed_when', 'Debug module', 'Verbose output'],
    prerequisites: [
      'Completed Labs 1-8',
      'Experience with playbook failures'
    ],
    tasks: [
      'Use ignore_errors to continue execution',
      'Define custom failure conditions with failed_when',
      'Control change reporting with changed_when',
      'Add debug statements for troubleshooting',
      'Use verbose mode for detailed output'
    ],
    expectedOutcome: 'Build robust playbooks with proper error handling and debugging capabilities.'
  },
  {
    id: 'beginner-10',
    title: 'Basic Security with Ansible Vault',
    description: 'Secure sensitive data using Ansible Vault encryption.',
    difficulty: 'Beginner',
    estimatedTime: '30 minutes',
    objective: 'Encrypt and decrypt sensitive data using Ansible Vault.',
    keyConcepts: ['Ansible Vault', 'Encryption', 'Vault passwords', 'Encrypted variables'],
    prerequisites: [
      'Completed Labs 1-9',
      'Sensitive data to encrypt'
    ],
    tasks: [
      'Create encrypted files using ansible-vault',
      'Edit encrypted files',
      'Use encrypted variables in playbooks',
      'Run playbooks with vault passwords',
      'Implement vault password files'
    ],
    expectedOutcome: 'Securely manage sensitive information in your Ansible projects using Vault.'
  },

  // Intermediate Labs
  {
    id: 'intermediate-1',
    title: 'Creating and Using Roles',
    description: 'Organize your automation code using Ansible roles for better reusability.',
    difficulty: 'Intermediate',
    estimatedTime: '60 minutes',
    objective: 'Create modular, reusable roles and understand role structure.',
    keyConcepts: ['Roles', 'Role structure', 'Role dependencies', 'Galaxy', 'Reusability'],
    prerequisites: [
      'Completed all Beginner labs',
      'Understanding of playbook organization'
    ],
    tasks: [
      'Create a role directory structure using ansible-galaxy',
      'Implement tasks, handlers, and variables in a role',
      'Use the role in a playbook',
      'Create role dependencies',
      'Parameterize roles for flexibility'
    ],
    expectedOutcome: 'Build modular, reusable automation code using Ansible roles.'
  },
  {
    id: 'intermediate-2',
    title: 'Advanced Templating with Jinja2',
    description: 'Master Jinja2 templating for dynamic configuration generation.',
    difficulty: 'Intermediate',
    estimatedTime: '50 minutes',
    objective: 'Create complex templates with loops, conditionals, and filters.',
    keyConcepts: ['Jinja2', 'Template module', 'Filters', 'Template inheritance', 'Macros'],
    prerequisites: [
      'Completed Beginner labs',
      'Basic Jinja2 knowledge'
    ],
    tasks: [
      'Create templates with conditional blocks',
      'Implement loops in templates',
      'Use Jinja2 filters for data transformation',
      'Create template macros for reusability',
      'Generate complex configuration files'
    ],
    expectedOutcome: 'Generate sophisticated configuration files using advanced Jinja2 features.'
  },
  {
    id: 'intermediate-3',
    title: 'Dynamic Inventory and Host Discovery',
    description: 'Implement dynamic inventory sources for cloud and virtualized environments.',
    difficulty: 'Intermediate',
    estimatedTime: '55 minutes',
    objective: 'Configure and use dynamic inventory sources for automated host discovery.',
    keyConcepts: ['Dynamic inventory', 'Inventory plugins', 'Cloud inventory', 'Host discovery'],
    prerequisites: [
      'Completed Beginner labs',
      'Access to cloud resources or virtualization platform'
    ],
    tasks: [
      'Configure AWS EC2 dynamic inventory',
      'Use inventory plugins for different platforms',
      'Filter and group dynamic inventory results',
      'Combine static and dynamic inventory sources',
      'Cache dynamic inventory for performance'
    ],
    expectedOutcome: 'Automatically discover and manage hosts from dynamic sources.'
  },
  {
    id: 'intermediate-4',
    title: 'Advanced Variable Management',
    description: 'Master complex variable scenarios including precedence and scoping.',
    difficulty: 'Intermediate',
    estimatedTime: '45 minutes',
    objective: 'Understand variable precedence, scoping, and advanced variable techniques.',
    keyConcepts: ['Variable precedence', 'Group vars', 'Host vars', 'Extra vars', 'Variable scoping'],
    prerequisites: [
      'Completed Beginner labs',
      'Understanding of basic variables'
    ],
    tasks: [
      'Implement group_vars and host_vars directories',
      'Understand and test variable precedence',
      'Use extra variables from command line',
      'Implement variable encryption with Vault',
      'Create variable hierarchies for complex environments'
    ],
    expectedOutcome: 'Manage complex variable scenarios with proper precedence and organization.'
  },
  {
    id: 'intermediate-5',
    title: 'Custom Modules and Plugins',
    description: 'Extend Ansible functionality by creating custom modules and plugins.',
    difficulty: 'Intermediate',
    estimatedTime: '70 minutes',
    objective: 'Develop custom modules and plugins to extend Ansible capabilities.',
    keyConcepts: ['Custom modules', 'Module development', 'Plugins', 'Python', 'Module documentation'],
    prerequisites: [
      'Completed Beginner labs',
      'Python programming knowledge',
      'Understanding of Ansible module system'
    ],
    tasks: [
      'Create a simple custom module in Python',
      'Implement proper argument handling and validation',
      'Add documentation and examples to the module',
      'Create a custom filter plugin',
      'Test and debug custom modules'
    ],
    expectedOutcome: 'Extend Ansible with custom functionality through modules and plugins.'
  },
  {
    id: 'intermediate-6',
    title: 'Ansible Tower/AWX Integration',
    description: 'Learn to use Ansible Tower or AWX for enterprise automation management.',
    difficulty: 'Intermediate',
    estimatedTime: '65 minutes',
    objective: 'Configure and use Ansible Tower/AWX for centralized automation management.',
    keyConcepts: ['Ansible Tower', 'AWX', 'Job templates', 'Workflows', 'RBAC', 'Scheduling'],
    prerequisites: [
      'Completed Beginner labs',
      'Access to Ansible Tower or AWX instance'
    ],
    tasks: [
      'Set up projects and inventories in Tower/AWX',
      'Create job templates',
      'Configure credentials and permissions',
      'Build workflows for complex automation',
      'Schedule recurring jobs'
    ],
    expectedOutcome: 'Manage enterprise automation using Ansible Tower or AWX platform.'
  },
  {
    id: 'intermediate-7',
    title: 'Container Management with Ansible',
    description: 'Manage Docker containers and container orchestration with Ansible.',
    difficulty: 'Intermediate',
    estimatedTime: '60 minutes',
    objective: 'Use Ansible to manage Docker containers and container-based applications.',
    keyConcepts: ['Docker module', 'Container management', 'Docker Compose', 'Container orchestration'],
    prerequisites: [
      'Completed Beginner labs',
      'Docker installed on target systems',
      'Basic Docker knowledge'
    ],
    tasks: [
      'Install and configure Docker using Ansible',
      'Manage Docker containers with Ansible',
      'Deploy applications using Docker Compose',
      'Implement container health checks',
      'Manage container networks and volumes'
    ],
    expectedOutcome: 'Effectively manage containerized applications using Ansible automation.'
  },
  {
    id: 'intermediate-8',
    title: 'Network Automation Basics',
    description: 'Automate network device configuration using Ansible network modules.',
    difficulty: 'Intermediate',
    estimatedTime: '55 minutes',
    objective: 'Configure and manage network devices using Ansible network automation.',
    keyConcepts: ['Network modules', 'Device configuration', 'Network facts', 'Connection plugins'],
    prerequisites: [
      'Completed Beginner labs',
      'Access to network devices or simulators',
      'Basic networking knowledge'
    ],
    tasks: [
      'Configure network device connections',
      'Gather network device facts',
      'Configure VLANs and interfaces',
      'Implement network configuration templates',
      'Backup and restore network configurations'
    ],
    expectedOutcome: 'Automate network device configuration and management tasks.'
  },
  {
    id: 'intermediate-9',
    title: 'Testing and Validation',
    description: 'Implement testing strategies for your Ansible automation.',
    difficulty: 'Intermediate',
    estimatedTime: '50 minutes',
    objective: 'Create comprehensive testing strategies for Ansible playbooks and roles.',
    keyConcepts: ['Molecule', 'Testing frameworks', 'Validation', 'CI/CD integration', 'Test-driven development'],
    prerequisites: [
      'Completed Beginner labs',
      'Understanding of testing concepts'
    ],
    tasks: [
      'Set up Molecule for role testing',
      'Create test scenarios and assertions',
      'Implement syntax and lint checking',
      'Integrate testing with CI/CD pipelines',
      'Perform idempotency testing'
    ],
    expectedOutcome: 'Implement robust testing practices for reliable automation code.'
  },
  {
    id: 'intermediate-10',
    title: 'Performance Optimization',
    description: 'Optimize Ansible playbook performance and execution efficiency.',
    difficulty: 'Intermediate',
    estimatedTime: '45 minutes',
    objective: 'Implement performance optimization techniques for faster playbook execution.',
    keyConcepts: ['Performance tuning', 'Parallelism', 'Caching', 'Optimization strategies', 'Profiling'],
    prerequisites: [
      'Completed Beginner labs',
      'Experience with slow-running playbooks'
    ],
    tasks: [
      'Configure parallelism and forks',
      'Implement fact caching',
      'Optimize task execution with strategies',
      'Use async tasks for long-running operations',
      'Profile and benchmark playbook performance'
    ],
    expectedOutcome: 'Significantly improve playbook execution speed and efficiency.'
  },

  // Advanced Labs
  {
    id: 'advanced-1',
    title: 'Enterprise LAMP Stack Deployment',
    description: 'Deploy a complete LAMP stack with load balancing and high availability.',
    difficulty: 'Advanced',
    estimatedTime: '120 minutes',
    objective: 'Implement a production-ready LAMP stack with advanced configuration.',
    keyConcepts: ['LAMP stack', 'Load balancing', 'High availability', 'Database clustering', 'SSL/TLS'],
    prerequisites: [
      'Completed Intermediate labs',
      'Multiple servers available',
      'Understanding of web architecture'
    ],
    tasks: [
      'Deploy Apache web servers with SSL configuration',
      'Set up MySQL master-slave replication',
      'Configure PHP with performance optimizations',
      'Implement HAProxy load balancing',
      'Set up monitoring and logging'
    ],
    expectedOutcome: 'Deploy a scalable, highly available LAMP stack ready for production use.'
  },
  {
    id: 'advanced-2',
    title: 'Kubernetes Cluster Management',
    description: 'Deploy and manage Kubernetes clusters using Ansible automation.',
    difficulty: 'Advanced',
    estimatedTime: '150 minutes',
    objective: 'Automate Kubernetes cluster deployment and application management.',
    keyConcepts: ['Kubernetes', 'Container orchestration', 'Cluster management', 'Helm charts', 'Service mesh'],
    prerequisites: [
      'Completed Intermediate labs',
      'Kubernetes knowledge',
      'Multiple nodes for cluster'
    ],
    tasks: [
      'Deploy Kubernetes cluster with kubeadm',
      'Configure networking with CNI plugins',
      'Deploy applications using Ansible k8s module',
      'Implement Helm chart deployments',
      'Set up cluster monitoring and logging'
    ],
    expectedOutcome: 'Fully automated Kubernetes cluster deployment and application management.'
  },
  {
    id: 'advanced-3',
    title: 'Multi-Cloud Infrastructure Automation',
    description: 'Manage infrastructure across multiple cloud providers using Ansible.',
    difficulty: 'Advanced',
    estimatedTime: '135 minutes',
    objective: 'Implement multi-cloud infrastructure automation and management.',
    keyConcepts: ['Multi-cloud', 'Infrastructure as Code', 'Cloud modules', 'Resource management', 'Cost optimization'],
    prerequisites: [
      'Completed Intermediate labs',
      'Access to multiple cloud providers',
      'Cloud platform knowledge'
    ],
    tasks: [
      'Deploy resources on AWS, Azure, and GCP',
      'Implement cross-cloud networking',
      'Manage cloud-specific services',
      'Implement disaster recovery strategies',
      'Optimize costs across cloud providers'
    ],
    expectedOutcome: 'Seamlessly manage infrastructure across multiple cloud platforms.'
  },
  {
    id: 'advanced-4',
    title: 'Security Hardening and Compliance',
    description: 'Implement comprehensive security hardening and compliance automation.',
    difficulty: 'Advanced',
    estimatedTime: '110 minutes',
    objective: 'Automate security hardening and compliance checking across infrastructure.',
    keyConcepts: ['Security hardening', 'Compliance', 'CIS benchmarks', 'Vulnerability management', 'Audit automation'],
    prerequisites: [
      'Completed Intermediate labs',
      'Security knowledge',
      'Understanding of compliance frameworks'
    ],
    tasks: [
      'Implement CIS benchmark compliance',
      'Automate security patch management',
      'Configure intrusion detection systems',
      'Implement log aggregation and analysis',
      'Create compliance reporting automation'
    ],
    expectedOutcome: 'Comprehensive security hardening and automated compliance management.'
  },
  {
    id: 'advanced-5',
    title: 'CI/CD Pipeline Integration',
    description: 'Integrate Ansible with CI/CD pipelines for automated deployment workflows.',
    difficulty: 'Advanced',
    estimatedTime: '100 minutes',
    objective: 'Build complete CI/CD pipelines with Ansible for automated deployments.',
    keyConcepts: ['CI/CD', 'Pipeline automation', 'GitOps', 'Deployment strategies', 'Rollback procedures'],
    prerequisites: [
      'Completed Intermediate labs',
      'CI/CD platform access',
      'Git repository management'
    ],
    tasks: [
      'Integrate Ansible with Jenkins/GitLab CI',
      'Implement blue-green deployments',
      'Create automated testing pipelines',
      'Implement rollback mechanisms',
      'Set up deployment notifications'
    ],
    expectedOutcome: 'Fully automated CI/CD pipelines with Ansible-driven deployments.'
  },
  {
    id: 'advanced-6',
    title: 'Database Cluster Automation',
    description: 'Automate complex database cluster deployments and management.',
    difficulty: 'Advanced',
    estimatedTime: '125 minutes',
    objective: 'Deploy and manage high-availability database clusters with automation.',
    keyConcepts: ['Database clustering', 'Replication', 'Failover', 'Backup automation', 'Performance tuning'],
    prerequisites: [
      'Completed Intermediate labs',
      'Database administration knowledge',
      'Multiple database servers'
    ],
    tasks: [
      'Deploy PostgreSQL/MySQL cluster with replication',
      'Implement automated failover mechanisms',
      'Set up automated backup and recovery',
      'Configure performance monitoring',
      'Implement database maintenance automation'
    ],
    expectedOutcome: 'Highly available, self-managing database clusters with automated operations.'
  },
  {
    id: 'advanced-7',
    title: 'Monitoring and Observability Stack',
    description: 'Deploy comprehensive monitoring and observability infrastructure.',
    difficulty: 'Advanced',
    estimatedTime: '115 minutes',
    objective: 'Implement full-stack monitoring with metrics, logs, and distributed tracing.',
    keyConcepts: ['Monitoring', 'Observability', 'Prometheus', 'Grafana', 'ELK stack', 'Distributed tracing'],
    prerequisites: [
      'Completed Intermediate labs',
      'Understanding of monitoring concepts',
      'Multiple servers for monitoring stack'
    ],
    tasks: [
      'Deploy Prometheus and Grafana stack',
      'Set up ELK stack for log aggregation',
      'Implement distributed tracing with Jaeger',
      'Create custom dashboards and alerts',
      'Implement automated incident response'
    ],
    expectedOutcome: 'Complete observability platform with automated monitoring and alerting.'
  },
  {
    id: 'advanced-8',
    title: 'Disaster Recovery Automation',
    description: 'Implement automated disaster recovery and business continuity solutions.',
    difficulty: 'Advanced',
    estimatedTime: '140 minutes',
    objective: 'Create comprehensive disaster recovery automation for critical systems.',
    keyConcepts: ['Disaster recovery', 'Business continuity', 'Backup automation', 'Failover procedures', 'RTO/RPO'],
    prerequisites: [
      'Completed Intermediate labs',
      'Multiple data centers or cloud regions',
      'Understanding of DR concepts'
    ],
    tasks: [
      'Implement automated backup strategies',
      'Create cross-region replication',
      'Develop failover automation procedures',
      'Test disaster recovery scenarios',
      'Implement automated recovery validation'
    ],
    expectedOutcome: 'Robust disaster recovery automation ensuring business continuity.'
  },
  {
    id: 'advanced-9',
    title: 'Edge Computing Deployment',
    description: 'Manage edge computing infrastructure and applications with Ansible.',
    difficulty: 'Advanced',
    estimatedTime: '105 minutes',
    objective: 'Deploy and manage distributed edge computing infrastructure.',
    keyConcepts: ['Edge computing', 'Distributed systems', 'IoT management', 'Remote deployment', 'Bandwidth optimization'],
    prerequisites: [
      'Completed Intermediate labs',
      'Edge devices or simulators',
      'Understanding of edge computing concepts'
    ],
    tasks: [
      'Deploy applications to edge devices',
      'Implement centralized edge management',
      'Configure bandwidth-optimized deployments',
      'Set up edge-to-cloud synchronization',
      'Implement edge device monitoring'
    ],
    expectedOutcome: 'Scalable edge computing infrastructure with centralized management.'
  },
  {
    id: 'advanced-10',
    title: 'Enterprise Integration and Orchestration',
    description: 'Integrate Ansible with enterprise systems and orchestrate complex workflows.',
    difficulty: 'Advanced',
    estimatedTime: '130 minutes',
    objective: 'Create enterprise-grade integration and orchestration solutions.',
    keyConcepts: ['Enterprise integration', 'Workflow orchestration', 'API integration', 'Event-driven automation', 'Governance'],
    prerequisites: [
      'Completed Intermediate labs',
      'Access to enterprise systems',
      'Understanding of enterprise architecture'
    ],
    tasks: [
      'Integrate with ITSM systems (ServiceNow, JIRA)',
      'Implement event-driven automation',
      'Create complex workflow orchestrations',
      'Integrate with monitoring and alerting systems',
      'Implement governance and approval workflows'
    ],
    expectedOutcome: 'Enterprise-grade automation platform with comprehensive system integration.'
  }
];

export const solutions: Solution[] = [
  // Beginner Solutions Only
  {
    labId: 'beginner-1',
    title: 'Your First Ansible Playbook',
    difficulty: 'Beginner',
    walkthrough: [
      {
        step: 1,
        description: 'Create the playbook file',
        code: `---
- name: My First Playbook
  hosts: localhost
  connection: local
  tasks:
    - name: Print hello message
      debug:
        msg: "Hello, Ansible!"`,
        command: 'nano hello-world.yml',
        explanation: 'Create a new YAML file with the basic playbook structure. The three dashes (---) indicate the start of a YAML document.'
      },
      {
        step: 2,
        description: 'Run the playbook',
        command: 'ansible-playbook hello-world.yml',
        explanation: 'Execute the playbook using the ansible-playbook command. This will run the tasks defined in the playbook.'
      },
      {
        step: 3,
        description: 'Verify the output',
        explanation: 'You should see output showing the play execution and the debug message "Hello, Ansible!" printed to the console.'
      }
    ],
    commonPitfalls: [
      'Incorrect YAML indentation - YAML is sensitive to spaces',
      'Missing the three dashes (---) at the beginning of the file',
      'Using tabs instead of spaces for indentation'
    ],
    bestPractices: [
      'Always use consistent indentation (2 spaces recommended)',
      'Include descriptive names for plays and tasks',
      'Use connection: local when targeting localhost to avoid SSH overhead'
    ]
  },
  {
    labId: 'beginner-2',
    title: 'Working with Inventory Files',
    difficulty: 'Beginner',
    walkthrough: [
      {
        step: 1,
        description: 'Create an INI format inventory file',
        code: `[webservers]
web1.example.com
web2.example.com

[databases]
db1.example.com
db2.example.com

[webservers:vars]
http_port=80
max_clients=200

[databases:vars]
mysql_port=3306`,
        command: 'nano inventory.ini',
        explanation: 'Create an inventory file that defines host groups and variables. Groups are defined in square brackets.'
      },
      {
        step: 2,
        description: 'Test connectivity to all hosts',
        command: 'ansible all -i inventory.ini -m ping',
        explanation: 'Use the ping module to test connectivity to all hosts defined in the inventory.'
      },
      {
        step: 3,
        description: 'Test connectivity to a specific group',
        command: 'ansible webservers -i inventory.ini -m ping',
        explanation: 'Target only the webservers group to test connectivity to those specific hosts.'
      },
      {
        step: 4,
        description: 'Create a playbook that uses the inventory',
        code: `---
- name: Configure webservers
  hosts: webservers
  tasks:
    - name: Display group variables
      debug:
        msg: "HTTP port is {{ http_port }}, Max clients: {{ max_clients }}"`,
        command: 'nano group-playbook.yml',
        explanation: 'Create a playbook that targets the webservers group and uses the group variables.'
      },
      {
        step: 5,
        description: 'Run the playbook with the inventory',
        command: 'ansible-playbook -i inventory.ini group-playbook.yml',
        explanation: 'Execute the playbook using the custom inventory file with the -i flag.'
      }
    ],
    commonPitfalls: [
      'Forgetting to specify the inventory file with -i flag',
      'Incorrect group syntax - groups must be in square brackets',
      'SSH connectivity issues - ensure SSH keys are properly configured'
    ],
    bestPractices: [
      'Use descriptive group names that reflect the purpose of the hosts',
      'Organize hosts logically by function or environment',
      'Use group variables to avoid repetition across hosts'
    ]
  },
  {
    labId: 'beginner-3',
    title: 'Using Variables and Facts',
    difficulty: 'Beginner',
    walkthrough: [
      {
        step: 1,
        description: 'Create a playbook with variables',
        code: `---
- name: Variables and Facts Demo
  hosts: localhost
  connection: local
  vars:
    app_name: "MyWebApp"
    app_version: "1.0.0"
    environment: "development"
  tasks:
    - name: Display custom variables
      debug:
        msg: "Deploying {{ app_name }} version {{ app_version }} to {{ environment }}"`,
        command: 'nano variables-demo.yml',
        explanation: 'Define variables in the vars section and use them in tasks with Jinja2 templating syntax {{ variable_name }}.'
      },
      {
        step: 2,
        description: 'Add fact gathering and display system information',
        code: `    - name: Gather system facts
      setup:
      
    - name: Display system information
      debug:
        msg: "Running on {{ ansible_hostname }} with {{ ansible_processor_cores }} CPU cores"
        
    - name: Show OS information
      debug:
        msg: "OS: {{ ansible_distribution }} {{ ansible_distribution_version }}"`,
        explanation: 'Use the setup module to gather system facts, then display them using the ansible_* variables.'
      },
      {
        step: 3,
        description: 'Add conditional tasks based on facts',
        code: `    - name: Task for Ubuntu systems
      debug:
        msg: "This is an Ubuntu system"
      when: ansible_distribution == "Ubuntu"
      
    - name: Task for systems with more than 2 CPU cores
      debug:
        msg: "This system has multiple CPU cores"
      when: ansible_processor_cores > 2`,
        explanation: 'Use the when clause to conditionally execute tasks based on system facts.'
      },
      {
        step: 4,
        description: 'Run the complete playbook',
        command: 'ansible-playbook variables-demo.yml',
        explanation: 'Execute the playbook to see how variables and facts work together.'
      }
    ],
    commonPitfalls: [
      'Forgetting to use double curly braces {{ }} for variable substitution',
      'Incorrect variable names - they are case sensitive',
      'Not gathering facts when trying to use ansible_* variables'
    ],
    bestPractices: [
      'Use descriptive variable names that clearly indicate their purpose',
      'Group related variables together logically',
      'Use facts to make playbooks adaptable to different systems'
    ]
  }
];