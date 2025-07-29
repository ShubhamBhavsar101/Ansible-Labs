export interface Lab {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  objective: string;
  description: string;
  keyConcepts: string[];
  prerequisites: string[];
  tasks: string[];
  expectedOutcome: string;
  estimatedTime: string;
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
    title: 'Installing and Configuring Nginx',
    difficulty: 'Beginner',
    objective: 'Learn to install and start the Nginx web server using Ansible',
    description: 'In this lab, you will create your first Ansible playbook to install Nginx on a target server and ensure it is running.',
    keyConcepts: ['apt/yum module', 'service module', 'basic playbook structure'],
    prerequisites: ['Basic Linux knowledge', 'Ansible installed on control node', 'Target server with SSH access'],
    tasks: [
      'Create a new playbook file named nginx-install.yml',
      'Define the target hosts and become privileges',
      'Add a task to update the package cache',
      'Add a task to install nginx package',
      'Add a task to start and enable nginx service',
      'Run the playbook and verify nginx is running'
    ],
    expectedOutcome: 'Nginx service running on port 80, accessible via web browser',
    estimatedTime: '15-20 minutes'
  },
  {
    id: 'beginner-2',
    title: 'Managing System Users with Ansible',
    difficulty: 'Beginner',
    objective: 'Create and manage system users using the user module',
    description: 'Learn to create users, set passwords, and manage user groups using Ansible automation.',
    keyConcepts: ['user module', 'group module', 'password hashing'],
    prerequisites: ['Completed Lab 1', 'Understanding of Linux users and groups'],
    tasks: [
      'Create a playbook to add a new user named "webadmin"',
      'Set a secure password for the user',
      'Add the user to the sudo group',
      'Create a home directory with proper permissions',
      'Verify the user can log in and has sudo access'
    ],
    expectedOutcome: 'New user "webadmin" created with sudo privileges and secure login',
    estimatedTime: '20-25 minutes'
  },
  {
    id: 'beginner-3',
    title: 'File Management and Templates',
    difficulty: 'Beginner',
    objective: 'Learn to copy files and use Jinja2 templates in Ansible',
    description: 'Practice managing configuration files and using templates to customize server configurations.',
    keyConcepts: ['copy module', 'template module', 'Jinja2 templating'],
    prerequisites: ['Basic file system knowledge', 'Completed previous beginner labs'],
    tasks: [
      'Create a template for nginx.conf with custom server name',
      'Use the template module to deploy the configuration',
      'Copy static files to the web root directory',
      'Set appropriate file permissions and ownership',
      'Restart nginx to apply changes'
    ],
    expectedOutcome: 'Custom nginx configuration deployed with personalized settings',
    estimatedTime: '25-30 minutes'
  },
  {
    id: 'beginner-4',
    title: 'Working with Variables and Facts',
    difficulty: 'Beginner',
    objective: 'Understand how to use variables and gather system facts',
    description: 'Learn to define variables, use host facts, and make playbooks more dynamic and reusable.',
    keyConcepts: ['variables', 'facts', 'debug module', 'when conditionals'],
    prerequisites: ['Understanding of YAML syntax', 'Completed file management lab'],
    tasks: [
      'Define variables for package names and service names',
      'Use the setup module to gather system facts',
      'Create conditional tasks based on OS family',
      'Display system information using debug module',
      'Create OS-specific installation tasks'
    ],
    expectedOutcome: 'Playbook that adapts to different operating systems automatically',
    estimatedTime: '30-35 minutes'
  },
  {
    id: 'beginner-5',
    title: 'Introduction to Handlers',
    difficulty: 'Beginner',
    objective: 'Learn to use handlers for service management and configuration changes',
    description: 'Understand how handlers work to restart services only when configuration files change.',
    keyConcepts: ['handlers', 'notify', 'service restarts', 'idempotency'],
    prerequisites: ['Understanding of service management', 'Completed variables lab'],
    tasks: [
      'Create handlers for restarting nginx and reloading configuration',
      'Modify configuration file tasks to notify handlers',
      'Test that handlers only run when changes occur',
      'Implement multiple handlers for different services',
      'Verify idempotent behavior of the playbook'
    ],
    expectedOutcome: 'Services restart automatically only when configurations change',
    estimatedTime: '25-30 minutes'
  },
  {
    id: 'beginner-6',
    title: 'Package Management Across Distributions',
    difficulty: 'Beginner',
    objective: 'Install packages on different Linux distributions using appropriate package managers',
    description: 'Learn to write distribution-agnostic playbooks that work on Ubuntu, CentOS, and other systems.',
    keyConcepts: ['apt module', 'yum module', 'package module', 'OS detection'],
    prerequisites: ['Basic understanding of Linux distributions', 'Completed variables and facts lab'],
    tasks: [
      'Create a playbook that detects the OS family',
      'Install git using the appropriate package manager',
      'Handle different package names across distributions',
      'Update package caches properly for each system',
      'Test on multiple Linux distributions'
    ],
    expectedOutcome: 'Git installed successfully on Ubuntu and CentOS systems',
    estimatedTime: '35-40 minutes'
  },
  {
    id: 'beginner-7',
    title: 'Basic File Permissions and Ownership',
    difficulty: 'Beginner',
    objective: 'Manage file permissions, ownership, and directory structures',
    description: 'Learn to set proper file permissions and ownership for web application files and directories.',
    keyConcepts: ['file module', 'permissions (chmod)', 'ownership (chown)', 'directory creation'],
    prerequisites: ['Understanding of Linux file permissions', 'File management experience'],
    tasks: [
      'Create a directory structure for a web application',
      'Set proper ownership for web server files',
      'Configure appropriate permissions for different file types',
      'Create symbolic links for configuration files',
      'Verify security of file permissions'
    ],
    expectedOutcome: 'Secure directory structure with proper permissions and ownership',
    estimatedTime: '30-35 minutes'
  },
  {
    id: 'beginner-8',
    title: 'Working with Configuration Files',
    difficulty: 'Beginner',
    objective: 'Modify configuration files using lineinfile and replace modules',
    description: 'Learn to make specific changes to configuration files without replacing entire files.',
    keyConcepts: ['lineinfile module', 'replace module', 'blockinfile module', 'configuration management'],
    prerequisites: ['Text editing knowledge', 'Understanding of configuration files'],
    tasks: [
      'Modify SSH configuration to disable root login',
      'Add custom settings to Apache configuration',
      'Update system-wide environment variables',
      'Insert configuration blocks into existing files',
      'Validate configuration file syntax'
    ],
    expectedOutcome: 'System configurations updated with specific security and performance settings',
    estimatedTime: '35-40 minutes'
  },
  {
    id: 'beginner-9',
    title: 'Basic Inventory Management',
    difficulty: 'Beginner',
    objective: 'Create and organize inventory files for managing multiple hosts',
    description: 'Learn to create inventory files, group hosts, and set host-specific variables.',
    keyConcepts: ['inventory files', 'host groups', 'host variables', 'group variables'],
    prerequisites: ['Multiple test servers or VMs', 'SSH access to target hosts'],
    tasks: [
      'Create an inventory file with multiple hosts',
      'Organize hosts into logical groups (web servers, databases)',
      'Set group-specific variables',
      'Define host-specific connection parameters',
      'Test connectivity to all inventory hosts'
    ],
    expectedOutcome: 'Well-organized inventory managing multiple server groups',
    estimatedTime: '25-30 minutes'
  },
  {
    id: 'beginner-10',
    title: 'Introduction to Playbook Best Practices',
    difficulty: 'Beginner',
    objective: 'Apply Ansible best practices for readable and maintainable playbooks',
    description: 'Learn essential best practices for writing clean, documented, and maintainable Ansible code.',
    keyConcepts: ['naming conventions', 'task organization', 'documentation', 'error handling'],
    prerequisites: ['Completed all previous beginner labs', 'Basic YAML knowledge'],
    tasks: [
      'Refactor existing playbook with descriptive task names',
      'Add appropriate comments and documentation',
      'Implement error handling with ignore_errors and failed_when',
      'Organize tasks into logical sections',
      'Add tags for selective task execution'
    ],
    expectedOutcome: 'Clean, well-documented playbook following Ansible best practices',
    estimatedTime: '40-45 minutes'
  },

  // Intermediate Labs
  {
    id: 'intermediate-1',
    title: 'Introduction to Ansible Roles',
    difficulty: 'Intermediate',
    objective: 'Create reusable Ansible roles for modular automation',
    description: 'Learn to structure automation code using roles for better organization and reusability.',
    keyConcepts: ['roles', 'role structure', 'defaults', 'tasks', 'handlers'],
    prerequisites: ['Completed all beginner labs', 'Understanding of playbook structure'],
    tasks: [
      'Create a role structure using ansible-galaxy init',
      'Develop a web server role with nginx installation',
      'Define role defaults and variables',
      'Implement role handlers for service management',
      'Use the role in a main playbook'
    ],
    expectedOutcome: 'Reusable nginx role that can be applied to multiple servers',
    estimatedTime: '45-50 minutes'
  },
  {
    id: 'intermediate-2',
    title: 'Advanced Templating with Jinja2',
    difficulty: 'Intermediate',
    objective: 'Master advanced Jinja2 templating techniques for dynamic configurations',
    description: 'Learn complex templating patterns including loops, conditionals, and filters for sophisticated configuration management.',
    keyConcepts: ['Jinja2 loops', 'conditionals in templates', 'filters', 'template inheritance'],
    prerequisites: ['Basic templating experience', 'Understanding of Jinja2 syntax'],
    tasks: [
      'Create a dynamic nginx configuration with server blocks',
      'Use loops to generate multiple virtual hosts',
      'Implement conditional configuration sections',
      'Apply Jinja2 filters for data transformation',
      'Generate configuration based on inventory groups'
    ],
    expectedOutcome: 'Dynamic nginx configuration supporting multiple virtual hosts',
    estimatedTime: '50-55 minutes'
  },
  {
    id: 'intermediate-3',
    title: 'Error Handling and Debugging',
    difficulty: 'Intermediate',
    objective: 'Implement robust error handling and debugging techniques',
    description: 'Learn to handle failures gracefully and debug complex automation scenarios.',
    keyConcepts: ['failed_when', 'ignore_errors', 'block/rescue', 'debug strategies'],
    prerequisites: ['Experience with basic playbooks', 'Understanding of task execution'],
    tasks: [
      'Implement error handling for service installation',
      'Use block/rescue for complex error scenarios',
      'Create custom failure conditions with failed_when',
      'Add debugging output for troubleshooting',
      'Test error scenarios and recovery procedures'
    ],
    expectedOutcome: 'Robust playbook with comprehensive error handling and debugging',
    estimatedTime: '45-50 minutes'
  },
  {
    id: 'intermediate-4',
    title: 'Managing Secrets with Ansible Vault',
    difficulty: 'Intermediate',
    objective: 'Securely manage sensitive data using Ansible Vault',
    description: 'Learn to encrypt and manage passwords, API keys, and other sensitive information in playbooks.',
    keyConcepts: ['ansible-vault', 'encryption', 'vault passwords', 'secure variable management'],
    prerequisites: ['Understanding of sensitive data handling', 'Experience with variables'],
    tasks: [
      'Create encrypted variable files using ansible-vault',
      'Store database passwords and API keys securely',
      'Use vault-encrypted variables in playbooks',
      'Implement vault password file management',
      'Practice vault file editing and rotation'
    ],
    expectedOutcome: 'Secure management of sensitive data without exposing credentials',
    estimatedTime: '40-45 minutes'
  },
  {
    id: 'intermediate-5',
    title: 'Dynamic Inventories and Service Discovery',
    difficulty: 'Intermediate',
    objective: 'Create dynamic inventories that automatically discover infrastructure',
    description: 'Learn to generate inventories dynamically from cloud providers, CMDBs, or custom scripts.',
    keyConcepts: ['dynamic inventory', 'inventory scripts', 'service discovery', 'cloud integration'],
    prerequisites: ['Inventory management experience', 'Basic scripting knowledge'],
    tasks: [
      'Create a custom inventory script',
      'Parse JSON/YAML inventory sources',
      'Implement host grouping logic',
      'Add dynamic host variables',
      'Test with various data sources'
    ],
    expectedOutcome: 'Dynamic inventory system that adapts to changing infrastructure',
    estimatedTime: '55-60 minutes'
  },
  {
    id: 'intermediate-6',
    title: 'Advanced Loops and Iteration',
    difficulty: 'Intermediate',
    objective: 'Master complex looping patterns for bulk operations',
    description: 'Learn advanced looping techniques for managing multiple items, nested loops, and complex data structures.',
    keyConcepts: ['with_items', 'loop', 'nested loops', 'loop control', 'until loops'],
    prerequisites: ['Basic loop understanding', 'Experience with lists and dictionaries'],
    tasks: [
      'Create users from a list with different properties',
      'Install multiple packages with conditional logic',
      'Implement nested loops for complex configurations',
      'Use until loops for polling operations',
      'Handle loop failures and continue execution'
    ],
    expectedOutcome: 'Efficient bulk operations using advanced looping patterns',
    estimatedTime: '45-50 minutes'
  },
  {
    id: 'intermediate-7',
    title: 'Custom Modules and Plugins',
    difficulty: 'Intermediate',
    objective: 'Develop custom Ansible modules for specialized tasks',
    description: 'Learn to extend Ansible functionality by creating custom modules and plugins.',
    keyConcepts: ['module development', 'Python modules', 'module documentation', 'return values'],
    prerequisites: ['Python programming knowledge', 'Understanding of Ansible module system'],
    tasks: [
      'Create a simple custom module in Python',
      'Implement proper argument specification',
      'Add error handling and return values',
      'Document the module properly',
      'Test the custom module in playbooks'
    ],
    expectedOutcome: 'Working custom module integrated into Ansible automation',
    estimatedTime: '60-70 minutes'
  },
  {
    id: 'intermediate-8',
    title: 'Performance Optimization and Parallelization',
    difficulty: 'Intermediate',
    objective: 'Optimize playbook performance and implement parallel execution',
    description: 'Learn techniques to improve playbook execution speed and manage large-scale deployments efficiently.',
    keyConcepts: ['parallel execution', 'strategy plugins', 'fact caching', 'performance tuning'],
    prerequisites: ['Experience with large inventories', 'Understanding of execution flow'],
    tasks: [
      'Configure parallel execution strategies',
      'Implement fact caching for performance',
      'Optimize task execution with async and poll',
      'Use serial keyword for controlled deployments',
      'Monitor and measure performance improvements'
    ],
    expectedOutcome: 'Optimized playbooks with significantly improved execution time',
    estimatedTime: '50-55 minutes'
  },
  {
    id: 'intermediate-9',
    title: 'Integration with CI/CD Pipelines',
    difficulty: 'Intermediate',
    objective: 'Integrate Ansible automation with continuous integration systems',
    description: 'Learn to incorporate Ansible playbooks into CI/CD workflows for automated deployments.',
    keyConcepts: ['CI/CD integration', 'automated testing', 'deployment pipelines', 'environment promotion'],
    prerequisites: ['Understanding of CI/CD concepts', 'Experience with version control'],
    tasks: [
      'Create a deployment playbook for CI/CD',
      'Implement environment-specific configurations',
      'Add automated testing and validation',
      'Configure rollback procedures',
      'Set up notification and reporting'
    ],
    expectedOutcome: 'Ansible-powered CI/CD pipeline with automated deployment and rollback',
    estimatedTime: '60-65 minutes'
  },
  {
    id: 'intermediate-10',
    title: 'Multi-Environment Management',
    difficulty: 'Intermediate',
    objective: 'Manage multiple environments (dev, staging, production) with Ansible',
    description: 'Learn to structure automation for multiple environments while maintaining consistency and security.',
    keyConcepts: ['environment separation', 'variable precedence', 'environment-specific configs', 'promotion workflows'],
    prerequisites: ['Experience with variables and inventories', 'Understanding of deployment environments'],
    tasks: [
      'Create separate inventory files for each environment',
      'Implement environment-specific variable files',
      'Design promotion workflows between environments',
      'Add environment validation and safety checks',
      'Test deployment across all environments'
    ],
    expectedOutcome: 'Structured multi-environment deployment system with proper isolation',
    estimatedTime: '55-60 minutes'
  },

  // Advanced Labs
  {
    id: 'advanced-1',
    title: 'Building a Complete LAMP Stack with Roles',
    difficulty: 'Advanced',
    objective: 'Deploy a full LAMP stack using custom roles and advanced configuration',
    description: 'Create a production-ready LAMP stack deployment with security hardening, monitoring, and backup procedures.',
    keyConcepts: ['role dependencies', 'complex deployments', 'security hardening', 'service orchestration'],
    prerequisites: ['Mastery of roles', 'Understanding of web application architecture'],
    tasks: [
      'Design role architecture for LAMP components',
      'Implement database role with security hardening',
      'Create web server role with SSL configuration',
      'Develop PHP application deployment role',
      'Add monitoring and backup procedures'
    ],
    expectedOutcome: 'Production-ready LAMP stack with security and monitoring',
    estimatedTime: '90-120 minutes'
  },
  {
    id: 'advanced-2',
    title: 'Container Orchestration with Ansible',
    difficulty: 'Advanced',
    objective: 'Deploy and manage containerized applications using Ansible',
    description: 'Learn to manage Docker containers and Docker Compose deployments with Ansible automation.',
    keyConcepts: ['Docker module', 'container orchestration', 'docker-compose integration', 'container networking'],
    prerequisites: ['Docker knowledge', 'Understanding of containerization concepts'],
    tasks: [
      'Install and configure Docker using Ansible',
      'Deploy multi-container applications with docker-compose',
      'Implement container health checks and monitoring',
      'Manage container networking and volumes',
      'Automate container updates and rollbacks'
    ],
    expectedOutcome: 'Fully automated containerized application deployment and management',
    estimatedTime: '75-90 minutes'
  },
  {
    id: 'advanced-3',
    title: 'Infrastructure as Code with Cloud Providers',
    difficulty: 'Advanced',
    objective: 'Provision and manage cloud infrastructure using Ansible',
    description: 'Deploy complete cloud infrastructure including VMs, networking, and storage using Ansible cloud modules.',
    keyConcepts: ['cloud modules', 'infrastructure provisioning', 'resource management', 'cloud automation'],
    prerequisites: ['Cloud platform knowledge', 'Understanding of infrastructure concepts'],
    tasks: [
      'Provision cloud instances with proper networking',
      'Configure security groups and access controls',
      'Implement auto-scaling and load balancing',
      'Manage cloud storage and backup solutions',
      'Add cost optimization and resource tagging'
    ],
    expectedOutcome: 'Complete cloud infrastructure managed through Ansible automation',
    estimatedTime: '100-120 minutes'
  },
  {
    id: 'advanced-4',
    title: 'Advanced Security Hardening and Compliance',
    difficulty: 'Advanced',
    objective: 'Implement comprehensive security hardening following industry standards',
    description: 'Apply security benchmarks like CIS controls and STIG requirements using Ansible automation.',
    keyConcepts: ['security benchmarks', 'compliance automation', 'system hardening', 'audit trails'],
    prerequisites: ['Security knowledge', 'Understanding of compliance requirements'],
    tasks: [
      'Implement CIS benchmark controls',
      'Configure advanced firewall rules',
      'Set up centralized logging and monitoring',
      'Implement access controls and user management',
      'Create compliance reporting and validation'
    ],
    expectedOutcome: 'Fully hardened systems meeting industry security standards',
    estimatedTime: '85-100 minutes'
  },
  {
    id: 'advanced-5',
    title: 'Database Cluster Management and High Availability',
    difficulty: 'Advanced',
    objective: 'Deploy and manage high-availability database clusters',
    description: 'Set up database clustering, replication, and failover using Ansible for production environments.',
    keyConcepts: ['database clustering', 'replication', 'failover', 'high availability'],
    prerequisites: ['Database administration knowledge', 'Understanding of clustering concepts'],
    tasks: [
      'Deploy MySQL/PostgreSQL master-slave replication',
      'Configure automatic failover mechanisms',
      'Implement database backup and recovery procedures',
      'Set up monitoring and alerting for database health',
      'Test disaster recovery scenarios'
    ],
    expectedOutcome: 'Production-ready database cluster with automatic failover',
    estimatedTime: '95-110 minutes'
  },
  {
    id: 'advanced-6',
    title: 'Monitoring and Observability Stack',
    difficulty: 'Advanced',
    objective: 'Deploy comprehensive monitoring solution with metrics, logs, and alerting',
    description: 'Build a complete observability stack using Prometheus, Grafana, ELK stack, and alerting systems.',
    keyConcepts: ['monitoring stack', 'metrics collection', 'log aggregation', 'alerting systems'],
    prerequisites: ['Monitoring concepts', 'Understanding of observability principles'],
    tasks: [
      'Deploy Prometheus for metrics collection',
      'Configure Grafana dashboards and visualizations',
      'Set up ELK stack for log aggregation',
      'Implement alerting with AlertManager',
      'Create custom monitoring for applications'
    ],
    expectedOutcome: 'Complete monitoring and observability solution with alerting',
    estimatedTime: '110-130 minutes'
  },
  {
    id: 'advanced-7',
    title: 'Network Automation and SDN Configuration',
    difficulty: 'Advanced',
    objective: 'Automate network device configuration and software-defined networking',
    description: 'Use Ansible network modules to configure switches, routers, and SDN controllers.',
    keyConcepts: ['network automation', 'device configuration', 'SDN', 'network modules'],
    prerequisites: ['Networking knowledge', 'Understanding of network devices and protocols'],
    tasks: [
      'Configure network devices using platform-specific modules',
      'Implement VLAN and routing configurations',
      'Automate firewall rule management',
      'Set up network monitoring and SNMP',
      'Create network topology documentation'
    ],
    expectedOutcome: 'Automated network infrastructure with consistent configuration',
    estimatedTime: '80-95 minutes'
  },
  {
    id: 'advanced-8',
    title: 'GitOps and Advanced CI/CD Integration',
    difficulty: 'Advanced',
    objective: 'Implement GitOps workflows with Ansible for infrastructure and application deployment',
    description: 'Create sophisticated GitOps pipelines with Ansible for infrastructure as code and application deployment.',
    keyConcepts: ['GitOps', 'advanced CI/CD', 'infrastructure as code', 'deployment strategies'],
    prerequisites: ['Git expertise', 'CI/CD experience', 'Infrastructure as code concepts'],
    tasks: [
      'Design GitOps workflow with Ansible',
      'Implement blue-green deployment strategies',
      'Create automated testing and validation pipelines',
      'Set up configuration drift detection',
      'Build self-healing infrastructure capabilities'
    ],
    expectedOutcome: 'Production GitOps pipeline with automated deployment and healing',
    estimatedTime: '120-140 minutes'
  },
  {
    id: 'advanced-9',
    title: 'Multi-Cloud and Hybrid Infrastructure Management',
    difficulty: 'Advanced',
    objective: 'Manage infrastructure across multiple cloud providers and on-premises systems',
    description: 'Deploy and manage applications across AWS, Azure, GCP, and on-premises infrastructure using unified Ansible automation.',
    keyConcepts: ['multi-cloud', 'hybrid infrastructure', 'cloud abstraction', 'unified management'],
    prerequisites: ['Multiple cloud platform knowledge', 'Advanced infrastructure concepts'],
    tasks: [
      'Create cloud-agnostic deployment roles',
      'Implement cross-cloud networking and connectivity',
      'Set up unified monitoring across environments',
      'Design disaster recovery across clouds',
      'Optimize costs and resource utilization'
    ],
    expectedOutcome: 'Unified multi-cloud infrastructure with seamless management',
    estimatedTime: '130-150 minutes'
  },
  {
    id: 'advanced-10',
    title: 'Enterprise Ansible Automation Platform',
    difficulty: 'Advanced',
    objective: 'Design and implement enterprise-scale Ansible automation with governance and controls',
    description: 'Build a comprehensive enterprise automation platform with role-based access, approval workflows, and centralized management.',
    keyConcepts: ['enterprise automation', 'governance', 'RBAC', 'workflow orchestration'],
    prerequisites: ['Enterprise architecture knowledge', 'Advanced Ansible experience'],
    tasks: [
      'Design enterprise automation architecture',
      'Implement role-based access controls',
      'Create approval workflows for sensitive operations',
      'Set up centralized logging and audit trails',
      'Build self-service automation portal'
    ],
    expectedOutcome: 'Enterprise-ready automation platform with governance and controls',
    estimatedTime: '150-180 minutes'
  }
];

export const solutions: Solution[] = [
  // Beginner Solutions
  {
    labId: 'beginner-1',
    title: 'Installing and Configuring Nginx',
    difficulty: 'Beginner',
    walkthrough: [
      {
        step: 1,
        description: 'Create the playbook file structure',
        code: `# Create nginx-install.yml
---
- name: Install and configure Nginx
  hosts: all
  become: yes`,
        explanation: 'We start with the basic playbook structure, defining the play name, target hosts, and privilege escalation.'
      },
      {
        step: 2,
        description: 'Add task to update package cache',
        code: `  tasks:
    - name: Update package cache
      apt:
        update_cache: yes
        cache_valid_time: 3600
      when: ansible_os_family == "Debian"`,
        explanation: 'Update the package cache to ensure we have the latest package information. The when condition makes this specific to Debian-based systems.'
      },
      {
        step: 3,
        description: 'Install nginx package',
        code: `    - name: Install nginx
      package:
        name: nginx
        state: present`,
        explanation: 'Use the package module for cross-platform compatibility. It will automatically use apt, yum, or the appropriate package manager.'
      },
      {
        step: 4,
        description: 'Start and enable nginx service',
        code: `    - name: Start and enable nginx
      service:
        name: nginx
        state: started
        enabled: yes`,
        explanation: 'Ensure nginx is running and will start automatically on boot.'
      },
      {
        step: 5,
        description: 'Run the playbook',
        command: 'ansible-playbook -i inventory nginx-install.yml',
        explanation: 'Execute the playbook against your inventory. Make sure your inventory file contains the target hosts.'
      },
      {
        step: 6,
        description: 'Verify nginx is running',
        command: 'curl http://your-server-ip',
        explanation: 'Test that nginx is responding by making an HTTP request to the server.'
      }
    ],
    commonPitfalls: [
      'Forgetting to use become: yes for privilege escalation',
      'Not updating package cache before installation',
      'Firewall blocking HTTP traffic on port 80',
      'SSH key authentication not properly configured'
    ],
    bestPractices: [
      'Always use the package module instead of apt/yum for better portability',
      'Include handlers to restart services when configuration changes',
      'Use specific package versions for production deployments',
      'Add tags to tasks for selective execution'
    ]
  },
  {
    labId: 'beginner-2',
    title: 'Managing System Users with Ansible',
    difficulty: 'Beginner',
    walkthrough: [
      {
        step: 1,
        description: 'Create the user management playbook',
        code: `---
- name: Manage system users
  hosts: all
  become: yes
  vars:
    username: webadmin
    user_password: "$6$rounds=656000$salt$hash"  # Generated hash`,
        explanation: 'Define variables for the username and encrypted password. Use ansible-vault or mkpasswd to generate secure password hashes.'
      },
      {
        step: 2,
        description: 'Create the webadmin user',
        code: `  tasks:
    - name: Create webadmin user
      user:
        name: "{{ username }}"
        password: "{{ user_password }}"
        shell: /bin/bash
        create_home: yes
        state: present`,
        explanation: 'Create the user with a home directory and bash shell. The password should be properly hashed.'
      },
      {
        step: 3,
        description: 'Add user to sudo group',
        code: `    - name: Add user to sudo group
      user:
        name: "{{ username }}"
        groups: sudo
        append: yes`,
        explanation: 'Add the user to the sudo group to grant administrative privileges. Use append: yes to keep existing group memberships.'
      },
      {
        step: 4,
        description: 'Set up SSH key authentication (optional)',
        code: `    - name: Set up SSH key for user
      authorized_key:
        user: "{{ username }}"
        key: "{{ lookup('file', '/path/to/public/key.pub') }}"
        state: present`,
        explanation: 'Configure SSH key authentication for secure, password-less login.'
      }
    ],
    commonPitfalls: [
      'Using plain text passwords instead of hashed passwords',
      'Forgetting to set append: yes when adding to groups',
      'Not creating home directory for the user',
      'Incorrect file permissions on SSH keys'
    ],
    bestPractices: [
      'Always use ansible-vault to encrypt sensitive user data',
      'Use strong password policies and enforce regular changes',
      'Implement SSH key authentication over password authentication',
      'Set appropriate shell and home directory permissions'
    ]
  },
  // Add more solutions as needed...
];