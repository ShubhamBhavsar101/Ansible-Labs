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
  {
    labId: 'beginner-3',
    title: 'File Management and Templates',
    difficulty: 'Beginner',
    walkthrough: [
      {
        step: 1,
        description: 'Create the nginx configuration template',
        code: `# templates/nginx.conf.j2
user www-data;
worker_processes auto;
pid /run/nginx.pid;

events {
    worker_connections 768;
}

http {
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    server_names_hash_bucket_size 64;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name {{ server_name | default('localhost') }};
        root {{ web_root | default('/var/www/html') }};
        index index.html index.htm;

        location / {
            try_files $uri $uri/ =404;
        }
    }
}`,
        explanation: 'Create a Jinja2 template with variables for server_name and web_root. The template uses default filters for fallback values.'
      },
      {
        step: 2,
        description: 'Create the playbook with template deployment',
        code: `---
- name: Deploy nginx configuration and files
  hosts: all
  become: yes
  vars:
    server_name: "mysite.local"
    web_root: "/var/www/mysite"

  tasks:
    - name: Create web root directory
      file:
        path: "{{ web_root }}"
        state: directory
        owner: www-data
        group: www-data
        mode: '0755'`,
        explanation: 'Define variables and create the web root directory with proper ownership and permissions.'
      },
      {
        step: 3,
        description: 'Deploy the nginx configuration template',
        code: `    - name: Deploy nginx configuration
      template:
        src: nginx.conf.j2
        dest: /etc/nginx/nginx.conf
        owner: root
        group: root
        mode: '0644'
        backup: yes
      notify: restart nginx`,
        explanation: 'Use the template module to deploy the configuration. The backup option creates a backup of the original file.'
      },
      {
        step: 4,
        description: 'Copy static files to web root',
        code: `    - name: Copy index.html
      copy:
        content: |
          <!DOCTYPE html>
          <html>
          <head>
              <title>Welcome to {{ server_name }}</title>
          </head>
          <body>
              <h1>Hello from {{ server_name }}!</h1>
              <p>This server is managed by Ansible.</p>
          </body>
          </html>
        dest: "{{ web_root }}/index.html"
        owner: www-data
        group: www-data
        mode: '0644'`,
        explanation: 'Create a simple HTML file using the copy module with inline content. Variables are processed in the content.'
      },
      {
        step: 5,
        description: 'Add handler for nginx restart',
        code: `  handlers:
    - name: restart nginx
      service:
        name: nginx
        state: restarted`,
        explanation: 'Define a handler that will restart nginx when the configuration changes.'
      }
    ],
    commonPitfalls: [
      'Forgetting to create the web root directory before copying files',
      'Incorrect file permissions causing access denied errors',
      'Not using backup option when modifying critical configuration files',
      'Template syntax errors causing deployment failures'
    ],
    bestPractices: [
      'Always use backup: yes when modifying configuration files',
      'Set appropriate file ownership and permissions',
      'Use handlers to restart services only when needed',
      'Validate template syntax before deployment'
    ]
  },
  {
    labId: 'beginner-4',
    title: 'Working with Variables and Facts',
    difficulty: 'Beginner',
    walkthrough: [
      {
        step: 1,
        description: 'Create playbook with variable definitions',
        code: `---
- name: Working with variables and facts
  hosts: all
  become: yes
  vars:
    packages:
      RedHat: httpd
      Debian: apache2
    service_names:
      RedHat: httpd
      Debian: apache2

  tasks:
    - name: Gather system facts
      setup:`,
        explanation: 'Define OS-specific variables using dictionaries. The setup module explicitly gathers facts about the target system.'
      },
      {
        step: 2,
        description: 'Display system information using debug',
        code: `    - name: Display OS information
      debug:
        msg: |
          Operating System: {{ ansible_distribution }}
          OS Version: {{ ansible_distribution_version }}
          Architecture: {{ ansible_architecture }}
          Hostname: {{ ansible_hostname }}
          IP Address: {{ ansible_default_ipv4.address }}`,
        explanation: 'Use the debug module to display gathered facts. This helps understand what information is available.'
      },
      {
        step: 3,
        description: 'Install packages based on OS family',
        code: `    - name: Install web server (RedHat family)
      yum:
        name: "{{ packages.RedHat }}"
        state: present
      when: ansible_os_family == "RedHat"

    - name: Install web server (Debian family)
      apt:
        name: "{{ packages.Debian }}"
        state: present
        update_cache: yes
      when: ansible_os_family == "Debian"`,
        explanation: 'Use conditional statements to install the appropriate package based on the OS family detected by facts.'
      },
      {
        step: 4,
        description: 'Start service using variables',
        code: `    - name: Start and enable web server
      service:
        name: "{{ service_names[ansible_os_family] }}"
        state: started
        enabled: yes`,
        explanation: 'Use dictionary lookup with facts to get the correct service name for the detected OS family.'
      },
      {
        step: 5,
        description: 'Create custom facts',
        code: `    - name: Create custom fact directory
      file:
        path: /etc/ansible/facts.d
        state: directory
        mode: '0755'

    - name: Create custom fact file
      copy:
        content: |
          [deployment]
          version=1.0
          environment=development
          deployed_by=ansible
        dest: /etc/ansible/facts.d/deployment.fact
        mode: '0644'`,
        explanation: 'Create custom facts that will be available in subsequent playbook runs as ansible_local variables.'
      }
    ],
    commonPitfalls: [
      'Misspelling fact variable names (they are case-sensitive)',
      'Not handling cases where facts might be undefined',
      'Using wrong conditional operators in when statements',
      'Forgetting that facts are gathered automatically unless disabled'
    ],
    bestPractices: [
      'Use ansible_os_family instead of ansible_distribution for broader compatibility',
      'Always test conditionals with different operating systems',
      'Use default filters to handle undefined variables gracefully',
      'Document custom facts and their purpose'
    ]
  },
  {
    labId: 'beginner-5',
    title: 'Introduction to Handlers',
    difficulty: 'Beginner',
    walkthrough: [
      {
        step: 1,
        description: 'Create playbook with configuration management',
        code: `---
- name: Configuration management with handlers
  hosts: all
  become: yes
  vars:
    nginx_port: 8080

  tasks:
    - name: Install nginx
      package:
        name: nginx
        state: present`,
        explanation: 'Start with basic nginx installation. We will modify its configuration and use handlers to manage service restarts.'
      },
      {
        step: 2,
        description: 'Modify nginx configuration',
        code: `    - name: Configure nginx port
      lineinfile:
        path: /etc/nginx/sites-available/default
        regexp: '^(\s*)listen\s+80'
        line: '\1listen {{ nginx_port }}'
        backrefs: yes
      notify:
        - restart nginx
        - reload nginx config`,
        explanation: 'Use lineinfile to change the listening port. The notify directive triggers handlers when the task makes changes.'
      },
      {
        step: 3,
        description: 'Update nginx main configuration',
        code: `    - name: Set worker processes
      lineinfile:
        path: /etc/nginx/nginx.conf
        regexp: '^worker_processes'
        line: 'worker_processes auto;'
      notify: restart nginx

    - name: Configure client max body size
      lineinfile:
        path: /etc/nginx/nginx.conf
        insertafter: 'http {'
        line: '    client_max_body_size 100M;'
      notify: reload nginx config`,
        explanation: 'Multiple tasks can notify the same handler. Handlers are only executed once, even if notified multiple times.'
      },
      {
        step: 4,
        description: 'Define handlers for service management',
        code: `  handlers:
    - name: restart nginx
      service:
        name: nginx
        state: restarted

    - name: reload nginx config
      service:
        name: nginx
        state: reloaded

    - name: check nginx status
      command: nginx -t
      listen: "validate nginx"`,
        explanation: 'Define multiple handlers for different operations. The listen directive allows multiple handlers to respond to the same notification.'
      },
      {
        step: 5,
        description: 'Add configuration validation',
        code: `    - name: Validate nginx configuration
      command: nginx -t
      register: nginx_syntax
      changed_when: false
      notify: validate nginx

    - name: Display validation result
      debug:
        var: nginx_syntax.stdout`,
        explanation: 'Validate configuration before applying changes. Use changed_when: false for tasks that do not modify the system.'
      }
    ],
    commonPitfalls: [
      'Handlers not running because tasks did not report changes',
      'Misspelling handler names in notify directives',
      'Expecting handlers to run immediately (they run at the end of the play)',
      'Not understanding that handlers run only once per play'
    ],
    bestPractices: [
      'Use descriptive names for handlers that clearly indicate their purpose',
      'Group related handlers together in the handlers section',
      'Use listen directive for handlers that should respond to multiple notifications',
      'Always validate configuration before restarting critical services'
    ]
  },
  {
    labId: 'beginner-6',
    title: 'Package Management Across Distributions',
    difficulty: 'Beginner',
    walkthrough: [
      {
        step: 1,
        description: 'Create cross-platform package installation playbook',
        code: `---
- name: Cross-platform package management
  hosts: all
  become: yes
  vars:
    common_packages:
      - git
      - curl
      - wget
      - vim
    
    distro_packages:
      RedHat:
        - epel-release
        - yum-utils
      Debian:
        - software-properties-common
        - apt-transport-https`,
        explanation: 'Define common packages that exist across distributions and distribution-specific packages with different names.'
      },
      {
        step: 2,
        description: 'Update package cache for different systems',
        code: `  tasks:
    - name: Update package cache (Debian/Ubuntu)
      apt:
        update_cache: yes
        cache_valid_time: 3600
      when: ansible_os_family == "Debian"

    - name: Update package cache (RedHat/CentOS)
      yum:
        update_cache: yes
      when: ansible_os_family == "RedHat"`,
        explanation: 'Different package managers require different approaches to cache updates. Use conditionals based on OS family.'
      },
      {
        step: 3,
        description: 'Install common packages using generic module',
        code: `    - name: Install common packages
      package:
        name: "{{ common_packages }}"
        state: present`,
        explanation: 'The package module automatically detects the appropriate package manager and works across different distributions.'
      },
      {
        step: 4,
        description: 'Install distribution-specific packages',
        code: `    - name: Install distribution-specific packages
      package:
        name: "{{ distro_packages[ansible_os_family] }}"
        state: present
      when: distro_packages[ansible_os_family] is defined`,
        explanation: 'Use dictionary lookup with OS family and add a safety check to ensure the key exists before installation.'
      },
      {
        step: 5,
        description: 'Handle package name differences',
        code: `    - name: Install Python package manager
      package:
        name: "{{ 'python3-pip' if ansible_os_family == 'Debian' else 'python3-pip' }}"
        state: present
      when: ansible_python_version is version('3.0', '>=')

    - name: Install development tools
      package:
        name: "{{ 'build-essential' if ansible_os_family == 'Debian' else 'gcc' }}"
        state: present`,
        explanation: 'Handle cases where packages have different names across distributions using conditional expressions.'
      }
    ],
    commonPitfalls: [
      'Assuming package names are the same across all distributions',
      'Not updating package cache before installation',
      'Using distribution-specific modules instead of the generic package module',
      'Not handling cases where packages might not exist on certain distributions'
    ],
    bestPractices: [
      'Use the package module for better cross-platform compatibility',
      'Define package mappings in variables for maintainability',
      'Always update package cache before installing packages',
      'Test playbooks on multiple distributions to ensure compatibility'
    ]
  },
  {
    labId: 'beginner-7',
    title: 'Basic File Permissions and Ownership',
    difficulty: 'Beginner',
    walkthrough: [
      {
        step: 1,
        description: 'Create directory structure for web application',
        code: `---
- name: Manage file permissions and ownership
  hosts: all
  become: yes
  vars:
    app_user: webapp
    app_group: webapp
    app_root: /opt/webapp

  tasks:
    - name: Create application user
      user:
        name: "{{ app_user }}"
        group: "{{ app_group }}"
        system: yes
        shell: /bin/false
        home: "{{ app_root }}"
        create_home: no`,
        explanation: 'Create a system user for the application with restricted shell access for security.'
      },
      {
        step: 2,
        description: 'Create directory structure with proper permissions',
        code: `    - name: Create application directories
      file:
        path: "{{ item.path }}"
        state: directory
        owner: "{{ item.owner | default(app_user) }}"
        group: "{{ item.group | default(app_group) }}"
        mode: "{{ item.mode }}"
      loop:
        - { path: "{{ app_root }}", mode: "0755" }
        - { path: "{{ app_root }}/bin", mode: "0755" }
        - { path: "{{ app_root }}/config", mode: "0750" }
        - { path: "{{ app_root }}/logs", mode: "0755" }
        - { path: "{{ app_root }}/data", mode: "0750" }
        - { path: "{{ app_root }}/tmp", mode: "0777" }`,
        explanation: 'Create multiple directories with different permission levels based on their purpose and security requirements.'
      },
      {
        step: 3,
        description: 'Set up configuration files with restricted access',
        code: `    - name: Create configuration file
      copy:
        content: |
          # Application Configuration
          database_host=localhost
          database_user=webapp
          database_password=secret123
          api_key=abc123xyz789
        dest: "{{ app_root }}/config/app.conf"
        owner: "{{ app_user }}"
        group: "{{ app_group }}"
        mode: "0640"`,
        explanation: 'Configuration files containing sensitive data should have restricted read permissions (640 = owner read/write, group read, no others).'
      },
      {
        step: 4,
        description: 'Create executable scripts with proper permissions',
        code: `    - name: Create application startup script
      copy:
        content: |
          #!/bin/bash
          # Application startup script
          cd {{ app_root }}
          echo "Starting application..."
          # Add startup commands here
        dest: "{{ app_root }}/bin/start.sh"
        owner: "{{ app_user }}"
        group: "{{ app_group }}"
        mode: "0750"`,
        explanation: 'Executable scripts need execute permissions. 0750 allows owner and group to execute, but not others.'
      },
      {
        step: 5,
        description: 'Create symbolic links and set special permissions',
        code: `    - name: Create symbolic link to configuration
      file:
        src: "{{ app_root }}/config/app.conf"
        dest: /etc/webapp.conf
        state: link
        owner: root
        group: root

    - name: Set sticky bit on tmp directory
      file:
        path: "{{ app_root }}/tmp"
        mode: "1777"
        state: directory`,
        explanation: 'Symbolic links and special permissions like sticky bit (1777) for shared temporary directories.'
      }
    ],
    commonPitfalls: [
      'Using overly permissive permissions (777) for security-sensitive files',
      'Forgetting to set execute permissions on scripts',
      'Not considering group permissions for shared access',
      'Setting wrong ownership on symbolic links'
    ],
    bestPractices: [
      'Follow the principle of least privilege - grant minimum necessary permissions',
      'Use system users for application services',
      'Separate configuration, logs, and data with appropriate permissions',
      'Regularly audit file permissions for security compliance'
    ]
  },
  {
    labId: 'beginner-8',
    title: 'Working with Configuration Files',
    difficulty: 'Beginner',
    walkthrough: [
      {
        step: 1,
        description: 'Modify SSH configuration for security',
        code: `---
- name: Manage configuration files
  hosts: all
  become: yes

  tasks:
    - name: Disable root login via SSH
      lineinfile:
        path: /etc/ssh/sshd_config
        regexp: '^#?PermitRootLogin'
        line: 'PermitRootLogin no'
        backup: yes
      notify: restart sshd`,
        explanation: 'Use lineinfile to modify specific lines in configuration files. The regexp matches both commented and uncommented lines.'
      },
      {
        step: 2,
        description: 'Configure SSH security settings',
        code: `    - name: Configure SSH security settings
      lineinfile:
        path: /etc/ssh/sshd_config
        regexp: "{{ item.regexp }}"
        line: "{{ item.line }}"
        backup: yes
      loop:
        - { regexp: '^#?PasswordAuthentication', line: 'PasswordAuthentication no' }
        - { regexp: '^#?PubkeyAuthentication', line: 'PubkeyAuthentication yes' }
        - { regexp: '^#?MaxAuthTries', line: 'MaxAuthTries 3' }
        - { regexp: '^#?ClientAliveInterval', line: 'ClientAliveInterval 300' }
      notify: restart sshd`,
        explanation: 'Use loops to apply multiple configuration changes efficiently. Each change will trigger the same handler.'
      },
      {
        step: 3,
        description: 'Add configuration block to Apache',
        code: `    - name: Add custom Apache configuration block
      blockinfile:
        path: /etc/apache2/apache2.conf
        block: |
          # Custom security headers
          <IfModule mod_headers.c>
              Header always set X-Content-Type-Options nosniff
              Header always set X-Frame-Options DENY
              Header always set X-XSS-Protection "1; mode=block"
              Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
          </IfModule>
        marker: "# {mark} ANSIBLE MANAGED SECURITY HEADERS"
        backup: yes
      notify: reload apache`,
        explanation: 'Use blockinfile to add entire configuration blocks. The marker helps identify Ansible-managed content.'
      },
      {
        step: 4,
        description: 'Update system environment variables',
        code: `    - name: Set system-wide environment variables
      lineinfile:
        path: /etc/environment
        regexp: "{{ item.regexp }}"
        line: "{{ item.line }}"
      loop:
        - { regexp: '^EDITOR=', line: 'EDITOR=vim' }
        - { regexp: '^PAGER=', line: 'PAGER=less' }
        - { regexp: '^LANG=', line: 'LANG=en_US.UTF-8' }`,
        explanation: 'Modify system environment variables that will be available to all users and processes.'
      },
      {
        step: 5,
        description: 'Replace content in configuration files',
        code: `    - name: Update Apache timeout settings
      replace:
        path: /etc/apache2/apache2.conf
        regexp: 'Timeout \d+'
        replace: 'Timeout 60'
        backup: yes
      notify: reload apache

    - name: Validate Apache configuration
      command: apache2ctl configtest
      register: apache_config_test
      changed_when: false
      failed_when: apache_config_test.rc != 0`,
        explanation: 'Use replace module for pattern-based replacements. Always validate configuration before applying changes.'
      },
      {
        step: 6,
        description: 'Define handlers for service management',
        code: `  handlers:
    - name: restart sshd
      service:
        name: sshd
        state: restarted

    - name: reload apache
      service:
        name: apache2
        state: reloaded`,
        explanation: 'Define handlers to restart or reload services when configuration changes are made.'
      }
    ],
    commonPitfalls: [
      'Not backing up configuration files before making changes',
      'Using incorrect regular expressions that match unintended lines',
      'Forgetting to validate configuration syntax after changes',
      'Not restarting services after configuration changes'
    ],
    bestPractices: [
      'Always use backup: yes when modifying critical configuration files',
      'Validate configuration syntax before applying changes',
      'Use specific regular expressions to avoid unintended matches',
      'Test configuration changes in a development environment first'
    ]
  },
  {
    labId: 'beginner-9',
    title: 'Basic Inventory Management',
    difficulty: 'Beginner',
    walkthrough: [
      {
        step: 1,
        description: 'Create basic inventory file',
        code: `# inventory/hosts
[webservers]
web1.example.com ansible_host=192.168.1.10
web2.example.com ansible_host=192.168.1.11
web3.example.com ansible_host=192.168.1.12

[databases]
db1.example.com ansible_host=192.168.1.20
db2.example.com ansible_host=192.168.1.21

[loadbalancers]
lb1.example.com ansible_host=192.168.1.30`,
        explanation: 'Create groups of hosts with descriptive names. Use ansible_host to specify IP addresses when DNS names are not available.'
      },
      {
        step: 2,
        description: 'Add host-specific variables',
        code: `# Add to inventory/hosts
[webservers]
web1.example.com ansible_host=192.168.1.10 nginx_port=80 ssl_enabled=true
web2.example.com ansible_host=192.168.1.11 nginx_port=8080 ssl_enabled=false
web3.example.com ansible_host=192.168.1.12 nginx_port=80 ssl_enabled=true

[databases]
db1.example.com ansible_host=192.168.1.20 mysql_port=3306 replication_role=master
db2.example.com ansible_host=192.168.1.21 mysql_port=3306 replication_role=slave`,
        explanation: 'Define host-specific variables directly in the inventory file for simple configurations.'
      },
      {
        step: 3,
        description: 'Create group variables file',
        code: `# inventory/group_vars/webservers.yml
---
# Web server configuration
nginx_user: www-data
nginx_worker_processes: auto
nginx_worker_connections: 1024

# Application settings
app_name: mywebapp
app_version: "1.0.0"
app_port: 3000

# SSL configuration
ssl_certificate_path: /etc/ssl/certs
ssl_private_key_path: /etc/ssl/private`,
        explanation: 'Create group variable files to organize configuration by server role. This keeps the inventory file clean.'
      },
      {
        step: 4,
        description: 'Create database group variables',
        code: `# inventory/group_vars/databases.yml
---
# MySQL configuration
mysql_root_password: "{{ vault_mysql_root_password }}"
mysql_databases:
  - name: webapp_prod
    encoding: utf8mb4
    collation: utf8mb4_unicode_ci
  - name: webapp_staging
    encoding: utf8mb4
    collation: utf8mb4_unicode_ci

# Backup configuration
backup_schedule: "0 2 * * *"
backup_retention_days: 30`,
        explanation: 'Define database-specific variables including sensitive data references that should be encrypted with Ansible Vault.'
      },
      {
        step: 5,
        description: 'Create host-specific variables',
        code: `# inventory/host_vars/web1.example.com.yml
---
# Host-specific overrides for web1
nginx_worker_processes: 4
ssl_enabled: true
ssl_certificate: web1.example.com.crt
ssl_private_key: web1.example.com.key

# Monitoring configuration
monitoring_enabled: true
log_level: info`,
        explanation: 'Use host_vars for host-specific overrides and configurations that differ from group defaults.'
      },
      {
        step: 6,
        description: 'Test inventory connectivity',
        command: 'ansible all -i inventory/hosts -m ping',
        explanation: 'Test connectivity to all hosts in the inventory using the ping module.'
      },
      {
        step: 7,
        description: 'List inventory groups and hosts',
        command: 'ansible-inventory -i inventory/hosts --list',
        explanation: 'Display the complete inventory structure including all variables and group memberships.'
      }
    ],
    commonPitfalls: [
      'Not organizing hosts into logical groups',
      'Putting too many variables directly in the inventory file',
      'Not using consistent naming conventions for hosts and groups',
      'Forgetting to test connectivity after inventory changes'
    ],
    bestPractices: [
      'Use descriptive group names that reflect server roles',
      'Keep inventory files clean by using group_vars and host_vars',
      'Use consistent naming conventions across all inventory files',
      'Document inventory structure and variable purposes'
    ]
  },
  {
    labId: 'beginner-10',
    title: 'Introduction to Playbook Best Practices',
    difficulty: 'Beginner',
    walkthrough: [
      {
        step: 1,
        description: 'Create well-structured playbook with documentation',
        code: `---
# Web Server Deployment Playbook
# Purpose: Deploy and configure nginx web server with security hardening
# Author: DevOps Team
# Version: 1.0
# Last Updated: 2024-01-15

- name: Deploy and configure nginx web server
  hosts: webservers
  become: yes
  gather_facts: yes
  
  vars:
    # Application configuration
    app_name: "mywebapp"
    app_version: "1.0.0"
    
    # Nginx configuration
    nginx_port: 80
    nginx_ssl_port: 443
    
  pre_tasks:
    - name: Validate required variables are defined
      assert:
        that:
          - app_name is defined
          - app_version is defined
        fail_msg: "Required variables are not defined"
        success_msg: "All required variables are properly defined"
      tags: validation`,
        explanation: 'Start with comprehensive documentation and variable validation to ensure playbook reliability.'
      },
      {
        step: 2,
        description: 'Organize tasks with descriptive names and tags',
        code: `  tasks:
    # Package Installation Section
    - name: "INSTALL | Update package cache (Debian/Ubuntu)"
      apt:
        update_cache: yes
        cache_valid_time: 3600
      when: ansible_os_family == "Debian"
      tags:
        - packages
        - installation

    - name: "INSTALL | Install nginx web server"
      package:
        name: nginx
        state: present
      tags:
        - packages
        - installation
        - nginx

    # Configuration Section
    - name: "CONFIG | Create nginx configuration from template"
      template:
        src: nginx.conf.j2
        dest: /etc/nginx/nginx.conf
        owner: root
        group: root
        mode: '0644'
        backup: yes
        validate: 'nginx -t -c %s'
      notify: restart nginx
      tags:
        - configuration
        - nginx`,
        explanation: 'Use descriptive task names with prefixes to indicate the purpose. Apply multiple tags for flexible execution.'
      },
      {
        step: 3,
        description: 'Implement proper error handling',
        code: `    # Service Management with Error Handling
    - name: "SERVICE | Start and enable nginx service"
      service:
        name: nginx
        state: started
        enabled: yes
      register: nginx_service_result
      retries: 3
      delay: 5
      until: nginx_service_result is succeeded
      tags:
        - services
        - nginx

    - name: "VERIFY | Check nginx is responding"
      uri:
        url: "http://{{ ansible_default_ipv4.address }}:{{ nginx_port }}"
        method: GET
        status_code: 200
      register: nginx_response
      retries: 5
      delay: 10
      until: nginx_response.status == 200
      tags:
        - verification
        - testing`,
        explanation: 'Add retry logic and verification steps to ensure services are properly started and responding.'
      },
      {
        step: 4,
        description: 'Add comprehensive error handling with blocks',
        code: `    # Error Handling Example
    - name: "SECURITY | Configure firewall rules"
      block:
        - name: "SECURITY | Install ufw firewall"
          package:
            name: ufw
            state: present

        - name: "SECURITY | Configure ufw rules"
          ufw:
            rule: allow
            port: "{{ item }}"
            proto: tcp
          loop:
            - "22"
            - "{{ nginx_port }}"
            - "{{ nginx_ssl_port }}"

        - name: "SECURITY | Enable ufw firewall"
          ufw:
            state: enabled
            policy: deny
            direction: incoming

      rescue:
        - name: "ERROR | Firewall configuration failed"
          debug:
            msg: "Firewall configuration failed, continuing without firewall"

        - name: "ERROR | Log firewall failure"
          lineinfile:
            path: /var/log/ansible-deployment.log
            line: "{{ ansible_date_time.iso8601 }} - Firewall configuration failed on {{ inventory_hostname }}"
            create: yes

      always:
        - name: "CLEANUP | Ensure deployment log exists"
          file:
            path: /var/log/ansible-deployment.log
            state: touch
            owner: root
            group: root
            mode: '0644'
      
      tags:
        - security
        - firewall`,
        explanation: 'Use block/rescue/always for comprehensive error handling and cleanup operations.'
      },
      {
        step: 5,
        description: 'Define handlers with proper organization',
        code: `  handlers:
    - name: restart nginx
      service:
        name: nginx
        state: restarted
      listen: "restart web services"

    - name: reload nginx
      service:
        name: nginx
        state: reloaded
      listen: "restart web services"

    - name: validate nginx config
      command: nginx -t
      listen: "validate configuration"

  post_tasks:
    - name: "REPORT | Generate deployment summary"
      debug:
        msg: |
          Deployment Summary:
          - Application: {{ app_name }} v{{ app_version }}
          - Server: {{ inventory_hostname }}
          - Nginx Status: {{ nginx_service_result.state }}
          - Response Check: {{ 'PASSED' if nginx_response.status == 200 else 'FAILED' }}
          - Deployment Time: {{ ansible_date_time.iso8601 }}
      tags: reporting`,
        explanation: 'Organize handlers logically and add post-tasks for reporting and summary information.'
      }
    ],
    commonPitfalls: [
      'Using vague task names that do not describe the actual operation',
      'Not implementing proper error handling for critical operations',
      'Forgetting to add tags for selective task execution',
      'Not validating configuration files before applying changes'
    ],
    bestPractices: [
      'Use descriptive, action-oriented task names with consistent prefixes',
      'Implement comprehensive error handling with block/rescue/always',
      'Add meaningful tags to enable selective playbook execution',
      'Include validation and verification steps for critical operations',
      'Document playbooks thoroughly with comments and metadata'
    ]
  },

  // Intermediate Solutions
  {
    labId: 'intermediate-1',
    title: 'Introduction to Ansible Roles',
    difficulty: 'Intermediate',
    walkthrough: [
      {
        step: 1,
        description: 'Initialize role structure using ansible-galaxy',
        command: 'ansible-galaxy init roles/nginx',
        explanation: 'Create a standard role directory structure with all necessary folders and files.'
      },
      {
        step: 2,
        description: 'Define role defaults',
        code: `# roles/nginx/defaults/main.yml
---
# Default variables for nginx role
nginx_user: www-data
nginx_worker_processes: auto
nginx_worker_connections: 1024
nginx_keepalive_timeout: 65
nginx_client_max_body_size: 1m

# Port configuration
nginx_port: 80
nginx_ssl_port: 443

# SSL configuration
nginx_ssl_enabled: false
nginx_ssl_certificate: ""
nginx_ssl_certificate_key: ""

# Virtual hosts
nginx_vhosts: []

# Package and service names
nginx_package_name: nginx
nginx_service_name: nginx
nginx_conf_path: /etc/nginx/nginx.conf
nginx_vhost_path: /etc/nginx/sites-available
nginx_vhost_enabled_path: /etc/nginx/sites-enabled`,
        explanation: 'Define sensible defaults that can be overridden by users of the role.'
      },
      {
        step: 3,
        description: 'Create role variables for different environments',
        code: `# roles/nginx/vars/main.yml
---
# OS-specific variables
nginx_config_paths:
  RedHat:
    conf_path: /etc/nginx/nginx.conf
    vhost_path: /etc/nginx/conf.d
    user: nginx
  Debian:
    conf_path: /etc/nginx/nginx.conf
    vhost_path: /etc/nginx/sites-available
    vhost_enabled_path: /etc/nginx/sites-enabled
    user: www-data

# Set OS-specific variables
nginx_os_user: "{{ nginx_config_paths[ansible_os_family]['user'] }}"
nginx_os_conf_path: "{{ nginx_config_paths[ansible_os_family]['conf_path'] }}"
nginx_os_vhost_path: "{{ nginx_config_paths[ansible_os_family]['vhost_path'] }}"`,
        explanation: 'Define OS-specific variables that handle differences between distributions.'
      },
      {
        step: 4,
        description: 'Implement role tasks',
        code: `# roles/nginx/tasks/main.yml
---
- name: Include OS-specific variables
  include_vars: "{{ ansible_os_family }}.yml"
  ignore_errors: yes

- name: Install nginx package
  package:
    name: "{{ nginx_package_name }}"
    state: present
  notify: restart nginx

- name: Create nginx directories
  file:
    path: "{{ item }}"
    state: directory
    owner: root
    group: root
    mode: '0755'
  loop:
    - "{{ nginx_vhost_path }}"
    - "{{ nginx_vhost_enabled_path | default(omit) }}"
  when: item != ""

- name: Generate nginx main configuration
  template:
    src: nginx.conf.j2
    dest: "{{ nginx_conf_path }}"
    owner: root
    group: root
    mode: '0644'
    backup: yes
    validate: 'nginx -t -c %s'
  notify:
    - restart nginx
    - reload nginx

- name: Configure virtual hosts
  include_tasks: vhost.yml
  loop: "{{ nginx_vhosts }}"
  loop_control:
    loop_var: vhost
  when: nginx_vhosts | length > 0

- name: Start and enable nginx service
  service:
    name: "{{ nginx_service_name }}"
    state: started
    enabled: yes`,
        explanation: 'Organize tasks logically and use includes for complex operations like virtual host configuration.'
      },
      {
        step: 5,
        description: 'Create virtual host configuration task',
        code: `# roles/nginx/tasks/vhost.yml
---
- name: "Configure virtual host: {{ vhost.server_name }}"
  template:
    src: vhost.conf.j2
    dest: "{{ nginx_vhost_path }}/{{ vhost.server_name }}.conf"
    owner: root
    group: root
    mode: '0644'
  notify: reload nginx

- name: "Enable virtual host: {{ vhost.server_name }}"
  file:
    src: "{{ nginx_vhost_path }}/{{ vhost.server_name }}.conf"
    dest: "{{ nginx_vhost_enabled_path }}/{{ vhost.server_name }}.conf"
    state: link
  when: 
    - nginx_vhost_enabled_path is defined
    - vhost.enabled | default(true)
  notify: reload nginx`,
        explanation: 'Create separate task files for complex operations to keep the main tasks file clean and readable.'
      },
      {
        step: 6,
        description: 'Define role handlers',
        code: `# roles/nginx/handlers/main.yml
---
- name: restart nginx
  service:
    name: "{{ nginx_service_name }}"
    state: restarted

- name: reload nginx
  service:
    name: "{{ nginx_service_name }}"
    state: reloaded

- name: validate nginx config
  command: nginx -t
  changed_when: false`,
        explanation: 'Define handlers specific to the role for service management operations.'
      },
      {
        step: 7,
        description: 'Create nginx configuration template',
        code: `# roles/nginx/templates/nginx.conf.j2
user {{ nginx_user }};
worker_processes {{ nginx_worker_processes }};
pid /var/run/nginx.pid;

events {
    worker_connections {{ nginx_worker_connections }};
    use epoll;
    multi_accept on;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Basic Settings
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout {{ nginx_keepalive_timeout }};
    types_hash_max_size 2048;
    client_max_body_size {{ nginx_client_max_body_size }};

    # Logging Settings
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    # Gzip Settings
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Virtual Host Configs
{% if ansible_os_family == "Debian" %}
    include {{ nginx_vhost_enabled_path }}/*;
{% else %}
    include {{ nginx_vhost_path }}/*.conf;
{% endif %}
}`,
        explanation: 'Create a comprehensive nginx configuration template with conditional includes based on OS family.'
      },
      {
        step: 8,
        description: 'Use the role in a playbook',
        code: `# site.yml
---
- name: Deploy web servers using nginx role
  hosts: webservers
  become: yes
  
  vars:
    nginx_vhosts:
      - server_name: example.com
        document_root: /var/www/example.com
        enabled: true
      - server_name: test.example.com
        document_root: /var/www/test
        enabled: false

  roles:
    - role: nginx
      nginx_worker_processes: 4
      nginx_client_max_body_size: 10m`,
        explanation: 'Use the role in a playbook with custom variables to override defaults.'
      }
    ],
    commonPitfalls: [
      'Not using proper role directory structure',
      'Hardcoding values instead of using variables',
      'Not handling OS differences in role variables',
      'Creating overly complex roles that try to do too much'
    ],
    bestPractices: [
      'Follow the standard role directory structure created by ansible-galaxy init',
      'Use defaults for common settings and vars for OS-specific configurations',
      'Keep roles focused on a single service or application',
      'Include comprehensive documentation in the role README'
    ]
  },
  {
    labId: 'intermediate-2',
    title: 'Advanced Templating with Jinja2',
    difficulty: 'Intermediate',
    walkthrough: [
      {
        step: 1,
        description: 'Create advanced nginx configuration template with loops',
        code: `# templates/nginx-advanced.conf.j2
user {{ nginx_user | default('www-data') }};
worker_processes {{ nginx_worker_processes | default('auto') }};
pid /var/run/nginx.pid;

events {
    worker_connections {{ nginx_worker_connections | default(1024) }};
    use epoll;
    multi_accept on;
}

http {
    # MIME Types
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Log Formats
{% for log_format in nginx_log_formats | default([]) %}
    log_format {{ log_format.name }} '{{ log_format.format }}';
{% endfor %}

    # Default log format if none specified
{% if nginx_log_formats is not defined %}
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
{% endif %}

    # Basic Settings
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout {{ nginx_keepalive_timeout | default(65) }};
    client_max_body_size {{ nginx_client_max_body_size | default('1m') }};`,
        explanation: 'Use default filters and conditional blocks to handle optional configurations gracefully.'
      },
      {
        step: 2,
        description: 'Add conditional SSL and security configurations',
        code: `    # SSL Configuration
{% if nginx_ssl_enabled | default(false) %}
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
{% endif %}

    # Security Headers
{% if nginx_security_headers | default(true) %}
    add_header X-Frame-Options DENY always;
    add_header X-Content-Type-Options nosniff always;
    add_header X-XSS-Protection "1; mode=block" always;
{% if nginx_ssl_enabled | default(false) %}
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
{% endif %}
{% endif %}

    # Rate Limiting
{% for limit in nginx_rate_limits | default([]) %}
    limit_req_zone ${{ limit.key | default('binary_remote_addr') }} zone={{ limit.name }}:{{ limit.size | default('10m') }} rate={{ limit.rate }};
{% endfor %}`,
        explanation: 'Use nested conditionals and loops to generate complex configurations based on provided variables.'
      },
      {
        step: 3,
        description: 'Generate multiple virtual hosts with advanced logic',
        code: `    # Virtual Hosts
{% for vhost in nginx_vhosts | default([]) %}
    server {
        listen {{ vhost.port | default(80) }}{% if vhost.default_server | default(false) %} default_server{% endif %};
{% if nginx_ssl_enabled and vhost.ssl | default(false) %}
        listen {{ vhost.ssl_port | default(443) }} ssl{% if vhost.default_server | default(false) %} default_server{% endif %};
        ssl_certificate {{ vhost.ssl_certificate | default(nginx_ssl_certificate) }};
        ssl_certificate_key {{ vhost.ssl_certificate_key | default(nginx_ssl_certificate_key) }};
{% endif %}

        server_name {{ vhost.server_name }}{% if vhost.server_aliases is defined %} {{ vhost.server_aliases | join(' ') }}{% endif %};
        root {{ vhost.document_root | default('/var/www/html') }};
        index {{ vhost.index_files | default(['index.html', 'index.htm']) | join(' ') }};

        # Access and Error Logs
        access_log /var/log/nginx/{{ vhost.server_name }}_access.log{% if vhost.log_format is defined %} {{ vhost.log_format }}{% endif %};
        error_log /var/log/nginx/{{ vhost.server_name }}_error.log;

{% if vhost.rate_limit is defined %}
        # Rate Limiting
        limit_req zone={{ vhost.rate_limit.zone }} burst={{ vhost.rate_limit.burst | default(5) }}{% if vhost.rate_limit.nodelay | default(false) %} nodelay{% endif %};
{% endif %}

        # Location Blocks
{% for location in vhost.locations | default([{'path': '/', 'try_files': '$uri $uri/ =404'}]) %}
        location {{ location.path }} {
{% if location.try_files is defined %}
            try_files {{ location.try_files }};
{% endif %}
{% if location.proxy_pass is defined %}
            proxy_pass {{ location.proxy_pass }};
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
{% endif %}
{% if location.return is defined %}
            return {{ location.return.code }} {{ location.return.url }};
{% endif %}
{% if location.custom_config is defined %}
{{ location.custom_config | indent(12, true) }}
{% endif %}
        }
{% endfor %}

{% if vhost.custom_config is defined %}
        # Custom Configuration
{{ vhost.custom_config | indent(8, true) }}
{% endif %}
    }

{% endfor %}
}`,
        explanation: 'Create complex virtual host configurations with nested loops, conditionals, and custom configuration blocks.'
      },
      {
        step: 4,
        description: 'Create playbook with complex template variables',
        code: `---
- name: Advanced nginx templating example
  hosts: webservers
  become: yes
  vars:
    nginx_user: www-data
    nginx_worker_processes: auto
    nginx_ssl_enabled: true
    nginx_ssl_certificate: /etc/ssl/certs/server.crt
    nginx_ssl_certificate_key: /etc/ssl/private/server.key
    
    nginx_log_formats:
      - name: main
        format: '$remote_addr - $remote_user [$time_local] "$request" $status $body_bytes_sent "$http_referer" "$http_user_agent"'
      - name: json
        format: '{"time":"$time_iso8601","remote_addr":"$remote_addr","request":"$request","status":$status,"body_bytes_sent":$body_bytes_sent}'
    
    nginx_rate_limits:
      - name: login
        key: binary_remote_addr
        size: 10m
        rate: 1r/s
      - name: api
        key: binary_remote_addr
        size: 10m
        rate: 10r/s
    
    nginx_vhosts:
      - server_name: example.com
        document_root: /var/www/example.com
        ssl: true
        default_server: true
        server_aliases:
          - www.example.com
        log_format: json
        rate_limit:
          zone: api
          burst: 20
          nodelay: true
        locations:
          - path: /
            try_files: $uri $uri/ /index.php?$query_string
          - path: /api/
            proxy_pass: http://127.0.0.1:3000
          - path: /login
            try_files: $uri $uri/ /login.php?$query_string
            custom_config: |
              limit_req zone=login burst=3 nodelay;
          - path: /admin
            return:
              code: 301
              url: https://admin.example.com$request_uri
        custom_config: |
          # Custom server block configuration
          client_max_body_size 50m;
          
      - server_name: api.example.com
        document_root: /var/www/api
        ssl: true
        locations:
          - path: /
            proxy_pass: http://127.0.0.1:8080
            custom_config: |
              proxy_read_timeout 300;
              proxy_connect_timeout 300;`,
        explanation: 'Define complex data structures that will be processed by the advanced template.'
      },
      {
        step: 5,
        description: 'Deploy the template and validate configuration',
        code: `  tasks:
    - name: Deploy advanced nginx configuration
      template:
        src: nginx-advanced.conf.j2
        dest: /etc/nginx/nginx.conf
        owner: root
        group: root
        mode: '0644'
        backup: yes
        validate: 'nginx -t -c %s'
      notify: reload nginx

    - name: Create log directories for virtual hosts
      file:
        path: /var/log/nginx
        state: directory
        owner: www-data
        group: adm
        mode: '0755'

    - name: Create document root directories
      file:
        path: "{{ item.document_root }}"
        state: directory
        owner: www-data
        group: www-data
        mode: '0755'
      loop: "{{ nginx_vhosts }}"
      when: item.document_root is defined

  handlers:
    - name: reload nginx
      service:
        name: nginx
        state: reloaded`,
        explanation: 'Deploy the template with validation and create necessary directories for the virtual hosts.'
      }
    ],
    commonPitfalls: [
      'Not using default filters for optional variables',
      'Creating overly complex templates that are hard to maintain',
      'Not properly indenting multi-line custom configurations',
      'Forgetting to validate template syntax before deployment'
    ],
    bestPractices: [
      'Use default filters to handle optional variables gracefully',
      'Break complex templates into smaller, manageable sections',
      'Use proper indentation filters for multi-line content',
      'Always validate generated configuration files before applying'
    ]
  },
  {
    labId: 'intermediate-3',
    title: 'Error Handling and Debugging',
    difficulty: 'Intermediate',
    walkthrough: [
      {
        step: 1,
        description: 'Create playbook with comprehensive error handling',
        code: `---
- name: Error handling and debugging demonstration
  hosts: all
  become: yes
  vars:
    required_packages:
      - nginx
      - mysql-server
      - php-fpm
    debug_mode: false

  tasks:
    - name: Enable debug output when debug_mode is true
      debug:
        msg: "Debug mode enabled - showing detailed output"
      when: debug_mode | bool

    - name: Validate system requirements
      assert:
        that:
          - ansible_memtotal_mb >= 1024
          - ansible_processor_vcpus >= 1
          - ansible_distribution in ['Ubuntu', 'CentOS', 'RedHat']
        fail_msg: "System does not meet minimum requirements"
        success_msg: "System requirements validated successfully"`,
        explanation: 'Start with system validation and debug controls to ensure the environment meets requirements.'
      },
      {
        step: 2,
        description: 'Implement block/rescue/always error handling',
        code: `    - name: Install and configure services with error handling
      block:
        - name: Update package cache
          package:
            update_cache: yes
          register: cache_update
          retries: 3
          delay: 5
          until: cache_update is succeeded

        - name: Install required packages
          package:
            name: "{{ required_packages }}"
            state: present
          register: package_install

        - name: Debug package installation results
          debug:
            var: package_install
          when: debug_mode | bool

        - name: Start services
          service:
            name: "{{ item }}"
            state: started
            enabled: yes
          loop:
            - nginx
            - mysql
            - php7.4-fpm
          register: service_start
          failed_when: false  # Don't fail immediately, handle in rescue

      rescue:
        - name: Log error details
          debug:
            msg: |
              Error occurred during service installation:
              - Package installation: {{ package_install.failed | default(false) }}
              - Service start failures: {{ service_start.results | selectattr('failed', 'equalto', true) | list | length }}

        - name: Attempt alternative package installation
          package:
            name: "{{ item }}"
            state: present
          loop:
            - nginx
            - mariadb-server  # Alternative to mysql-server
            - php-fpm         # Generic php-fpm
          ignore_errors: yes
          register: alternative_install

        - name: Create error report
          copy:
            content: |
              Error Report - {{ ansible_date_time.iso8601 }}
              Host: {{ inventory_hostname }}
              Original Error: {{ ansible_failed_result.msg | default('Unknown error') }}
              Alternative Installation: {{ alternative_install.results | map(attribute='failed') | list }}
            dest: /tmp/ansible-error-report.txt
            mode: '0644'

      always:
        - name: Cleanup temporary files
          file:
            path: /tmp/ansible-temp
            state: absent

        - name: Ensure log directory exists
          file:
            path: /var/log/ansible
            state: directory
            mode: '0755'`,
        explanation: 'Use block/rescue/always to handle errors gracefully and perform cleanup operations.'
      },
      {
        step: 3,
        description: 'Implement custom failure conditions',
        code: `    - name: Check service status with custom failure conditions
      command: systemctl is-active {{ item }}
      register: service_status
      loop:
        - nginx
        - mysql
      failed_when: 
        - service_status.rc != 0
        - "'inactive' in service_status.stdout"
      changed_when: false

    - name: Verify web server response
      uri:
        url: "http://{{ ansible_default_ipv4.address }}"
        method: GET
        status_code: [200, 301, 302]
      register: web_response
      retries: 5
      delay: 10
      until: web_response.status in [200, 301, 302]
      failed_when: 
        - web_response.status is defined
        - web_response.status >= 400

    - name: Check disk space and fail if insufficient
      shell: df -h / | awk 'NR==2 {print $5}' | sed 's/%//'
      register: disk_usage
      failed_when: disk_usage.stdout | int > 90
      changed_when: false`,
        explanation: 'Define custom failure conditions based on specific criteria rather than just return codes.'
      },
      {
        step: 4,
        description: 'Add comprehensive debugging and logging',
        code: `    - name: Debug system information
      debug:
        msg: |
          System Debug Information:
          - Hostname: {{ ansible_hostname }}
          - OS: {{ ansible_distribution }} {{ ansible_distribution_version }}
          - Memory: {{ ansible_memtotal_mb }}MB
          - CPU: {{ ansible_processor_vcpus }} cores
          - Disk Usage: {{ disk_usage.stdout }}%
          - Services Status: {{ service_status.results | map(attribute='stdout') | list }}
      when: debug_mode | bool

    - name: Create detailed log entry
      lineinfile:
        path: /var/log/ansible/deployment.log
        line: |
          {{ ansible_date_time.iso8601 }} | {{ inventory_hostname }} | 
          Packages: {{ package_install.results | map(attribute='name') | list | join(',') }} | 
          Status: {{ 'SUCCESS' if not ansible_failed_task else 'FAILED' }}
        create: yes
        mode: '0644'

    - name: Conditional task execution based on previous results
      debug:
        msg: "Skipping optional configuration due to previous failures"
      when: 
        - service_start is defined
        - service_start.results | selectattr('failed', 'equalto', true) | list | length > 0`,
        explanation: 'Add comprehensive debugging output and logging for troubleshooting and audit purposes.'
      },
      {
        step: 5,
        description: 'Implement error recovery and rollback procedures',
        code: `    - name: Rollback on critical failure
      block:
        - name: Stop services if configuration failed
          service:
            name: "{{ item }}"
            state: stopped
          loop:
            - nginx
            - mysql
          when: 
            - rollback_required | default(false)
            - item in (failed_services | default([]))
          ignore_errors: yes

        - name: Restore backup configurations
          copy:
            src: "/etc/{{ item }}.backup"
            dest: "/etc/{{ item }}"
            remote_src: yes
          loop:
            - nginx/nginx.conf
            - mysql/my.cnf
          when: rollback_required | default(false)
          ignore_errors: yes

        - name: Send failure notification
          mail:
            to: admin@example.com
            subject: "Ansible Deployment Failed on {{ inventory_hostname }}"
            body: |
              Deployment failed on {{ inventory_hostname }}
              
              Error Details:
              {{ ansible_failed_result | default('Unknown error') }}
              
              Check /var/log/ansible/deployment.log for details.
          when: 
            - rollback_required | default(false)
            - send_notifications | default(true)
          ignore_errors: yes

      when: ansible_failed_task is defined`,
        explanation: 'Implement rollback procedures and notification systems for critical failures.'
      }
    ],
    commonPitfalls: [
      'Not using retries for network-dependent operations',
      'Failing to log error details for troubleshooting',
      'Not implementing proper cleanup in always blocks',
      'Using ignore_errors too broadly instead of specific error handling'
    ],
    bestPractices: [
      'Use block/rescue/always for comprehensive error handling',
      'Implement custom failure conditions with failed_when',
      'Add retry logic for operations that might fail temporarily',
      'Log detailed error information for debugging and auditing'
    ]
  },
  {
    labId: 'intermediate-4',
    title: 'Managing Secrets with Ansible Vault',
    difficulty: 'Intermediate',
    walkthrough: [
      {
        step: 1,
        description: 'Create encrypted variable files using ansible-vault',
        command: 'ansible-vault create group_vars/all/vault.yml',
        explanation: 'Create an encrypted file to store sensitive variables. You will be prompted to enter a vault password.'
      },
      {
        step: 2,
        description: 'Add sensitive variables to vault file',
        code: `# group_vars/all/vault.yml (encrypted content)
---
# Database credentials
vault_mysql_root_password: "SuperSecretRootPassword123!"
vault_mysql_app_password: "AppPassword456!"

# API keys
vault_api_key: "sk-1234567890abcdef"
vault_secret_key: "secret-key-xyz789"

# SSL certificates (base64 encoded)
vault_ssl_certificate: |
  LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0t
  MIIDXTCCAkWgAwIBAgIJAKL0UG+jkjkjMA0G
  ...certificate content...
  LS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQ==

vault_ssl_private_key: |
  LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0t
  MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcw
  ...private key content...
  LS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLQ==

# SSH keys
vault_deploy_ssh_key: |
  -----BEGIN OPENSSH PRIVATE KEY-----
  b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAFwAAAAdzc2gtcn
  ...ssh key content...
  -----END OPENSSH PRIVATE KEY-----`,
        explanation: 'Store all sensitive data in the encrypted vault file. Use descriptive names with vault_ prefix.'
      },
      {
        step: 3,
        description: 'Create unencrypted variables that reference vault variables',
        code: `# group_vars/all/vars.yml (unencrypted)
---
# Database configuration
mysql_root_password: "{{ vault_mysql_root_password }}"
mysql_databases:
  - name: webapp
    user: webapp
    password: "{{ vault_mysql_app_password }}"
    priv: "webapp.*:ALL"

# Application configuration
app_config:
  api_key: "{{ vault_api_key }}"
  secret_key: "{{ vault_secret_key }}"
  database_url: "mysql://webapp:{{ vault_mysql_app_password }}@localhost/webapp"

# SSL configuration
ssl_certificate_content: "{{ vault_ssl_certificate | b64decode }}"
ssl_private_key_content: "{{ vault_ssl_private_key | b64decode }}"

# Deployment configuration
deploy_ssh_key_content: "{{ vault_deploy_ssh_key }}"`,
        explanation: 'Create unencrypted variables that reference the vault variables for easier management.'
      },
      {
        step: 4,
        description: 'Create playbook using vault variables',
        code: `---
- name: Deploy application with vault-encrypted secrets
  hosts: all
  become: yes
  vars:
    app_user: webapp
    app_directory: /opt/webapp

  tasks:
    - name: Install MySQL server
      package:
        name: mysql-server
        state: present

    - name: Set MySQL root password
      mysql_user:
        name: root
        password: "{{ mysql_root_password }}"
        login_unix_socket: /var/run/mysqld/mysqld.sock
        state: present
      no_log: true  # Prevent password from appearing in logs

    - name: Create application database
      mysql_db:
        name: "{{ item.name }}"
        state: present
        login_user: root
        login_password: "{{ mysql_root_password }}"
      loop: "{{ mysql_databases }}"
      no_log: true

    - name: Create database user
      mysql_user:
        name: "{{ item.user }}"
        password: "{{ item.password }}"
        priv: "{{ item.priv }}"
        state: present
        login_user: root
        login_password: "{{ mysql_root_password }}"
      loop: "{{ mysql_databases }}"
      no_log: true`,
        explanation: 'Use vault variables in tasks and add no_log: true to prevent sensitive data from appearing in logs.'
      },
      {
        step: 5,
        description: 'Deploy SSL certificates from vault',
        code: `    - name: Create SSL certificate directory
      file:
        path: /etc/ssl/webapp
        state: directory
        owner: root
        group: root
        mode: '0700'

    - name: Deploy SSL certificate
      copy:
        content: "{{ ssl_certificate_content }}"
        dest: /etc/ssl/webapp/server.crt
        owner: root
        group: root
        mode: '0644'
      no_log: true
      notify: restart nginx

    - name: Deploy SSL private key
      copy:
        content: "{{ ssl_private_key_content }}"
        dest: /etc/ssl/webapp/server.key
        owner: root
        group: root
        mode: '0600'
      no_log: true
      notify: restart nginx

    - name: Create application configuration file
      template:
        src: app-config.json.j2
        dest: "{{ app_directory }}/config.json"
        owner: "{{ app_user }}"
        group: "{{ app_user }}"
        mode: '0600'
      no_log: true`,
        explanation: 'Deploy certificates and configuration files with appropriate permissions and no_log for security.'
      },
      {
        step: 6,
        description: 'Create application configuration template',
        code: `# templates/app-config.json.j2
{
  "database": {
    "host": "localhost",
    "port": 3306,
    "database": "webapp",
    "username": "webapp",
    "password": "{{ vault_mysql_app_password }}"
  },
  "api": {
    "key": "{{ vault_api_key }}",
    "secret": "{{ vault_secret_key }}",
    "base_url": "https://api.example.com"
  },
  "ssl": {
    "certificate": "/etc/ssl/webapp/server.crt",
    "private_key": "/etc/ssl/webapp/server.key"
  },
  "logging": {
    "level": "info",
    "file": "/var/log/webapp/app.log"
  }
}`,
        explanation: 'Create configuration templates that use vault variables for sensitive data.'
      },
      {
        step: 7,
        description: 'Create vault password file and run playbook',
        code: `# Create .vault_pass file (keep this secure!)
echo "your-vault-password" > .vault_pass
chmod 600 .vault_pass

# Add to .gitignore
echo ".vault_pass" >> .gitignore`,
        command: 'ansible-playbook -i inventory site.yml --vault-password-file .vault_pass',
        explanation: 'Create a vault password file for automated deployments and run the playbook with vault decryption.'
      },
      {
        step: 8,
        description: 'Vault management commands',
        command: 'ansible-vault edit group_vars/all/vault.yml',
        explanation: 'Edit encrypted vault files. Other useful commands: view, encrypt, decrypt, rekey.'
      }
    ],
    commonPitfalls: [
      'Storing vault passwords in version control',
      'Not using no_log for tasks that handle sensitive data',
      'Mixing encrypted and unencrypted sensitive data',
      'Not properly securing vault password files'
    ],
    bestPractices: [
      'Use vault_ prefix for all encrypted variables',
      'Store vault passwords securely outside of version control',
      'Always use no_log for tasks handling sensitive data',
      'Regularly rotate vault passwords and encrypted secrets'
    ]
  },
  {
    labId: 'intermediate-5',
    title: 'Dynamic Inventories and Service Discovery',
    difficulty: 'Intermediate',
    walkthrough: [
      {
        step: 1,
        description: 'Create a custom dynamic inventory script',
        code: `#!/usr/bin/env python3
# inventory/dynamic_inventory.py

import json
import sys
import argparse
import requests
from typing import Dict, List, Any

class DynamicInventory:
    def __init__(self):
        self.inventory = {
            '_meta': {
                'hostvars': {}
            }
        }
        self.read_cli_args()
        
        if self.args.list:
            self.inventory = self.get_inventory()
        elif self.args.host:
            self.inventory = self.get_host_vars(self.args.host)
            
        print(json.dumps(self.inventory, indent=2))

    def read_cli_args(self):
        parser = argparse.ArgumentParser()
        parser.add_argument('--list', action='store_true')
        parser.add_argument('--host', action='store')
        self.args = parser.parse_args()

    def get_inventory(self) -> Dict[str, Any]:
        """Generate inventory from multiple sources"""
        inventory = {
            '_meta': {
                'hostvars': {}
            }
        }
        
        # Get servers from cloud provider API
        cloud_servers = self.get_cloud_servers()
        
        # Get servers from CMDB
        cmdb_servers = self.get_cmdb_servers()
        
        # Combine and organize servers
        all_servers = cloud_servers + cmdb_servers
        
        for server in all_servers:
            # Add to appropriate groups
            for group in server.get('groups', []):
                if group not in inventory:
                    inventory[group] = {'hosts': []}
                inventory[group]['hosts'].append(server['name'])
            
            # Add host variables
            inventory['_meta']['hostvars'][server['name']] = server.get('vars', {})
        
        return inventory`,
        explanation: 'Create a Python script that implements the dynamic inventory interface with --list and --host options.'
      },
      {
        step: 2,
        description: 'Add cloud provider integration',
        code: `    def get_cloud_servers(self) -> List[Dict[str, Any]]:
        """Fetch servers from cloud provider API"""
        servers = []
        
        try:
            # Example: AWS EC2 instances (simplified)
            # In real implementation, use boto3 or similar
            response = requests.get(
                'http://metadata.example.com/api/instances',
                headers={'Authorization': 'Bearer your-api-token'},
                timeout=10
            )
            
            if response.status_code == 200:
                instances = response.json()
                
                for instance in instances:
                    server = {
                        'name': instance['name'],
                        'groups': self.determine_groups(instance),
                        'vars': {
                            'ansible_host': instance['public_ip'],
                            'ansible_user': 'ubuntu',
                            'instance_id': instance['id'],
                            'instance_type': instance['type'],
                            'region': instance['region'],
                            'environment': instance.get('tags', {}).get('Environment', 'unknown'),
                            'role': instance.get('tags', {}).get('Role', 'unknown')
                        }
                    }
                    servers.append(server)
                    
        except Exception as e:
            print(f"Error fetching cloud servers: {e}", file=sys.stderr)
            
        return servers

    def get_cmdb_servers(self) -> List[Dict[str, Any]]:
        """Fetch servers from CMDB or asset management system"""
        servers = []
        
        try:
            # Example CMDB API call
            response = requests.get(
                'http://cmdb.example.com/api/servers',
                auth=('username', 'password'),
                timeout=10
            )
            
            if response.status_code == 200:
                cmdb_data = response.json()
                
                for server_data in cmdb_data:
                    if server_data['status'] == 'active':
                        server = {
                            'name': server_data['hostname'],
                            'groups': [server_data['role'], server_data['environment']],
                            'vars': {
                                'ansible_host': server_data['ip_address'],
                                'ansible_user': server_data.get('ssh_user', 'root'),
                                'datacenter': server_data['datacenter'],
                                'os_family': server_data['os_family'],
                                'environment': server_data['environment'],
                                'role': server_data['role']
                            }
                        }
                        servers.append(server)
                        
        except Exception as e:
            print(f"Error fetching CMDB servers: {e}", file=sys.stderr)
            
        return servers`,
        explanation: 'Add methods to fetch server information from cloud providers and CMDB systems.'
      },
      {
        step: 3,
        description: 'Implement intelligent grouping logic',
        code: `    def determine_groups(self, instance: Dict[str, Any]) -> List[str]:
        """Determine which groups an instance should belong to"""
        groups = []
        
        # Group by role/function
        role = instance.get('tags', {}).get('Role', '').lower()
        if role:
            groups.append(role)
            
            # Add specific role-based groups
            if 'web' in role:
                groups.append('webservers')
            elif 'db' in role or 'database' in role:
                groups.append('databases')
            elif 'lb' in role or 'loadbalancer' in role:
                groups.append('loadbalancers')
        
        # Group by environment
        environment = instance.get('tags', {}).get('Environment', '').lower()
        if environment:
            groups.append(environment)
        
        # Group by region/datacenter
        region = instance.get('region', '').lower()
        if region:
            groups.append(f"region_{region}")
        
        # Group by instance type/size
        instance_type = instance.get('type', '').lower()
        if instance_type:
            if 'small' in instance_type or 't2.micro' in instance_type:
                groups.append('small_instances')
            elif 'large' in instance_type or 'xlarge' in instance_type:
                groups.append('large_instances')
        
        # Add default group
        groups.append('all')
        
        return groups

    def get_host_vars(self, hostname: str) -> Dict[str, Any]:
        """Get variables for a specific host"""
        inventory = self.get_inventory()
        return inventory['_meta']['hostvars'].get(hostname, {})

if __name__ == '__main__':
    DynamicInventory()`,
        explanation: 'Implement intelligent grouping based on server attributes and tags.'
      },
      {
        step: 4,
        description: 'Make the script executable and test it',
        command: 'chmod +x inventory/dynamic_inventory.py',
        explanation: 'Make the script executable so Ansible can run it.'
      },
      {
        step: 5,
        description: 'Test the dynamic inventory',
        command: './inventory/dynamic_inventory.py --list',
        explanation: 'Test the script to see the generated inventory structure.'
      },
      {
        step: 6,
        description: 'Create configuration file for the dynamic inventory',
        code: `# inventory/dynamic_inventory.yml
---
# Configuration for dynamic inventory script
plugin: advanced_host_list
keyed_groups:
  # Group by environment
  - key: environment
    prefix: env
  # Group by role
  - key: role
    prefix: role
  # Group by region
  - key: region
    prefix: region

compose:
  # Create composed variables
  ansible_host: public_ip | default(private_ip)
  short_hostname: inventory_hostname.split('.')[0]
  
groups:
  # Create conditional groups
  production: environment == "production"
  staging: environment == "staging"
  webservers: role == "web"
  databases: role == "database"
  
hostnames:
  # Prefer certain hostname formats
  - name
  - public_dns_name
  - private_dns_name`,
        explanation: 'Create a configuration file for more advanced dynamic inventory features.'
      },
      {
        step: 7,
        description: 'Use dynamic inventory in playbooks',
        code: `---
- name: Deploy to dynamically discovered servers
  hosts: webservers:&production  # Intersection of webservers and production
  become: yes
  vars:
    deployment_version: "{{ lookup('env', 'BUILD_NUMBER') | default('latest') }}"

  tasks:
    - name: Display server information from dynamic inventory
      debug:
        msg: |
          Deploying to: {{ inventory_hostname }}
          Environment: {{ environment }}
          Role: {{ role }}
          Region: {{ region | default('unknown') }}
          Instance Type: {{ instance_type | default('unknown') }}

    - name: Install packages based on server role
      package:
        name: "{{ packages[role] | default(packages.default) }}"
        state: present
      vars:
        packages:
          web:
            - nginx
            - php-fpm
          database:
            - mysql-server
            - mysql-client
          default:
            - htop
            - vim

    - name: Configure service based on environment
      template:
        src: "{{ role }}-{{ environment }}.conf.j2"
        dest: "/etc/{{ role }}/{{ role }}.conf"
      when: role is defined and environment is defined
      notify: "restart {{ role }}"`,
        explanation: 'Use the dynamic inventory in playbooks with group intersections and dynamic variable usage.'
      },
      {
        step: 8,
        description: 'Run playbook with dynamic inventory',
        command: 'ansible-playbook -i inventory/dynamic_inventory.py site.yml',
        explanation: 'Execute the playbook using the dynamic inventory script.'
      }
    ],
    commonPitfalls: [
      'Not handling API failures gracefully in inventory scripts',
      'Creating too many small groups that complicate management',
      'Not caching inventory data for performance',
      'Hardcoding credentials in inventory scripts'
    ],
    bestPractices: [
      'Implement error handling and timeouts for external API calls',
      'Use meaningful group names that reflect infrastructure organization',
      'Cache inventory data to improve performance',
      'Store API credentials securely using environment variables or vault'
    ]
  },
  {
    labId: 'intermediate-6',
    title: 'Advanced Loops and Iteration',
    difficulty: 'Intermediate',
    walkthrough: [
      {
        step: 1,
        description: 'Create users with complex data structures using loops',
        code: `---
- name: Advanced loops and iteration examples
  hosts: all
  become: yes
  vars:
    users:
      - name: alice
        uid: 1001
        groups: [sudo, developers]
        shell: /bin/bash
        ssh_keys:
          - "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQ... alice@laptop"
          - "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQ... alice@desktop"
        home_dirs:
          - path: /home/alice/projects
            mode: '0755'
          - path: /home/alice/.ssh
            mode: '0700'
      - name: bob
        uid: 1002
        groups: [developers]
        shell: /bin/zsh
        ssh_keys:
          - "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQ... bob@work"
        home_dirs:
          - path: /home/bob/workspace
            mode: '0755'
      - name: charlie
        uid: 1003
        groups: [sudo, admins]
        shell: /bin/bash
        ssh_keys: []
        home_dirs: []

  tasks:
    - name: Create user accounts
      user:
        name: "{{ item.name }}"
        uid: "{{ item.uid }}"
        shell: "{{ item.shell }}"
        groups: "{{ item.groups | join(',') }}"
        append: yes
        create_home: yes
        state: present
      loop: "{{ users }}"
      register: user_creation`,
        explanation: 'Create users with complex attributes using loop over a list of dictionaries.'
      },
      {
        step: 2,
        description: 'Use nested loops for SSH key management',
        code: `    - name: Add SSH keys for users
      authorized_key:
        user: "{{ item.0.name }}"
        key: "{{ item.1 }}"
        state: present
      loop: "{{ users | subelements('ssh_keys', skip_missing=True) }}"
      when: item.1 != ""

    - name: Create user home directories
      file:
        path: "{{ item.1.path }}"
        state: directory
        owner: "{{ item.0.name }}"
        group: "{{ item.0.name }}"
        mode: "{{ item.1.mode }}"
      loop: "{{ users | subelements('home_dirs', skip_missing=True) }}"`,
        explanation: 'Use subelements to create nested loops for SSH keys and home directories.'
      },
      {
        step: 3,
        description: 'Install packages with conditional logic and error handling',
        code: `    - name: Install packages with advanced loop control
      package:
        name: "{{ item.name }}"
        state: "{{ item.state | default('present') }}"
      loop:
        - { name: nginx, state: present, required: true }
        - { name: apache2, state: absent, required: false }
        - { name: mysql-server, state: present, required: true }
        - { name: postgresql, state: present, required: false }
        - { name: redis-server, state: present, required: false }
      loop_control:
        pause: 2  # Pause 2 seconds between iterations
        label: "{{ item.name }}"  # Show only package name in output
      register: package_results
      failed_when: 
        - package_results.failed
        - item.required | default(false)
      ignore_errors: yes`,
        explanation: 'Use loop_control for better output and error handling with conditional failures.'
      },
      {
        step: 4,
        description: 'Implement until loops for polling operations',
        code: `    - name: Wait for services to be ready using until loop
      uri:
        url: "http://{{ item.host }}:{{ item.port }}{{ item.path | default('/') }}"
        method: GET
        status_code: 200
      register: service_check
      until: service_check.status == 200
      retries: 30
      delay: 10
      loop:
        - { host: "localhost", port: 80, path: "/health" }
        - { host: "localhost", port: 3306, path: "/" }
        - { host: "localhost", port: 6379, path: "/" }
      loop_control:
        label: "{{ item.host }}:{{ item.port }}"
      ignore_errors: yes

    - name: Check disk space until threshold is met
      shell: df -h {{ item }} | awk 'NR==2 {print $5}' | sed 's/%//'
      register: disk_usage
      until: disk_usage.stdout | int < 80
      retries: 5
      delay: 60
      loop:
        - /
        - /var
        - /tmp
      failed_when: disk_usage.stdout | int > 90`,
        explanation: 'Use until loops for polling operations and health checks with proper error handling.'
      },
      {
        step: 5,
        description: 'Complex nested loops with conditional execution',
        code: `    - name: Configure virtual hosts with complex nested structure
      template:
        src: vhost.conf.j2
        dest: "/etc/nginx/sites-available/{{ item.0.domain }}-{{ item.1.name }}.conf"
        owner: root
        group: root
        mode: '0644'
      loop: "{{ vhosts | product(environments) | list }}"
      vars:
        vhosts:
          - domain: example.com
            ssl: true
            backends: [web1, web2, web3]
          - domain: api.example.com
            ssl: true
            backends: [api1, api2]
          - domain: staging.example.com
            ssl: false
            backends: [staging1]
        environments:
          - name: production
            port: 80
            ssl_port: 443
          - name: staging
            port: 8080
            ssl_port: 8443
      when: 
        - item.0.ssl or item.1.name != 'production'
        - item.0.backends | length > 0
      loop_control:
        label: "{{ item.0.domain }} - {{ item.1.name }}"
      notify: reload nginx`,
        explanation: 'Use product filter to create cartesian product loops with complex conditional logic.'
      },
      {
        step: 6,
        description: 'Loop with dynamic variable creation and registration',
        code: `    - name: Gather service status information
      service_facts:
      register: service_facts_result

    - name: Check and restart failed services
      service:
        name: "{{ item }}"
        state: restarted
      loop: "{{ services_to_check }}"
      vars:
        services_to_check: >-
          {{
            ['nginx', 'mysql', 'redis-server', 'php7.4-fpm'] |
            select('extract', ansible_facts.services, 'state') |
            select('match', 'stopped|failed') |
            list
          }}
      when: services_to_check | length > 0
      register: service_restart_results

    - name: Create service status report
      copy:
        content: |
          Service Status Report - {{ ansible_date_time.iso8601 }}
          Host: {{ inventory_hostname }}
          
          {% for result in service_restart_results.results | default([]) %}
          Service: {{ result.item }}
          Status: {{ 'Restarted' if result.changed else 'Already Running' }}
          {% endfor %}
          
          {% for service in ansible_facts.services.keys() | sort %}
          {% if service in ['nginx', 'mysql', 'redis-server'] %}
          {{ service }}: {{ ansible_facts.services[service].state }}
          {% endif %}
          {% endfor %}
        dest: /tmp/service-status-report.txt
        mode: '0644'`,
        explanation: 'Use complex Jinja2 expressions in loops to filter and process service data dynamically.'
      },
      {
        step: 7,
        description: 'Implement loop with custom retry logic',
        code: `    - name: Deploy application with custom retry logic
      block:
        - name: Download and deploy application files
          get_url:
            url: "{{ item.url }}"
            dest: "{{ item.dest }}"
            mode: "{{ item.mode | default('0644') }}"
            owner: "{{ item.owner | default('root') }}"
            group: "{{ item.group | default('root') }}"
          loop:
            - url: https://releases.example.com/app-v1.0.tar.gz
              dest: /tmp/app-v1.0.tar.gz
              mode: '0644'
            - url: https://releases.example.com/config.json
              dest: /opt/app/config.json
              mode: '0600'
              owner: app
              group: app
          register: download_results
          retries: 3
          delay: 5
          until: download_results is succeeded
          loop_control:
            label: "{{ item.url | basename }}"

      rescue:
        - name: Handle download failures
          debug:
            msg: "Failed to download {{ item.item.url }}"
          loop: "{{ download_results.results | default([]) }}"
          when: item.failed | default(false)
          loop_control:
            label: "{{ item.item.url | basename }}"

        - name: Use fallback download locations
          get_url:
            url: "{{ fallback_url }}/{{ item.item.url | basename }}"
            dest: "{{ item.item.dest }}"
          loop: "{{ download_results.results | default([]) }}"
          vars:
            fallback_url: "https://backup.example.com/releases"
          when: item.failed | default(false)
          ignore_errors: yes`,
        explanation: 'Implement complex retry logic with fallback mechanisms using block/rescue and loop results.'
      }
    ],
    commonPitfalls: [
      'Using complex loops when simple ones would suffice',
      'Not using loop_control to limit output verbosity',
      'Forgetting to handle empty lists in subelements',
      'Not properly handling failed iterations in complex loops'
    ],
    bestPractices: [
      'Use loop_control.label to make loop output more readable',
      'Handle empty lists and missing keys with skip_missing=True',
      'Use until loops for polling operations instead of arbitrary delays',
      'Register loop results for complex error handling and reporting'
    ]
  },
  {
    labId: 'intermediate-7',
    title: 'Custom Modules and Plugins',
    difficulty: 'Intermediate',
    walkthrough: [
      {
        step: 1,
        description: 'Create directory structure for custom modules',
        command: 'mkdir -p library plugins/modules',
        explanation: 'Create directories for custom modules. Ansible looks for modules in the library/ directory by default.'
      },
      {
        step: 2,
        description: 'Create a simple custom module',
        code: `#!/usr/bin/python3
# library/system_info.py

from ansible.module_utils.basic import AnsibleModule
import os
import platform
import psutil
import json

DOCUMENTATION = '''
---
module: system_info
short_description: Gather detailed system information
description:
    - This module gathers comprehensive system information including CPU, memory, disk, and network details
    - Returns structured data that can be used in playbooks and templates
version_added: "1.0"
author: "DevOps Team"
options:
    include_processes:
        description:
            - Whether to include running process information
        required: false
        default: false
        type: bool
    include_network:
        description:
            - Whether to include network interface information
        required: false
        default: true
        type: bool
'''

EXAMPLES = '''
# Gather basic system information
- name: Get system info
  system_info:
  register: sys_info

# Include process information
- name: Get detailed system info with processes
  system_info:
    include_processes: true
    include_network: false
  register: detailed_info
'''

RETURN = '''
system_info:
    description: Dictionary containing system information
    returned: always
    type: dict
    contains:
        cpu:
            description: CPU information
            type: dict
        memory:
            description: Memory information
            type: dict
        disk:
            description: Disk usage information
            type: dict
'''`,
        explanation: 'Start with proper module documentation following Ansible standards.'
      },
      {
        step: 3,
        description: 'Implement the module logic',
        code: `def get_cpu_info():
    """Get CPU information"""
    return {
        'count': psutil.cpu_count(),
        'count_logical': psutil.cpu_count(logical=True),
        'usage_percent': psutil.cpu_percent(interval=1),
        'load_average': os.getloadavg() if hasattr(os, 'getloadavg') else None,
        'architecture': platform.machine(),
        'processor': platform.processor()
    }

def get_memory_info():
    """Get memory information"""
    memory = psutil.virtual_memory()
    swap = psutil.swap_memory()
    
    return {
        'total': memory.total,
        'available': memory.available,
        'used': memory.used,
        'free': memory.free,
        'percent': memory.percent,
        'swap_total': swap.total,
        'swap_used': swap.used,
        'swap_free': swap.free,
        'swap_percent': swap.percent
    }

def get_disk_info():
    """Get disk usage information"""
    disk_info = {}
    
    for partition in psutil.disk_partitions():
        try:
            usage = psutil.disk_usage(partition.mountpoint)
            disk_info[partition.mountpoint] = {
                'device': partition.device,
                'fstype': partition.fstype,
                'total': usage.total,
                'used': usage.used,
                'free': usage.free,
                'percent': (usage.used / usage.total) * 100
            }
        except PermissionError:
            continue
    
    return disk_info

def get_network_info():
    """Get network interface information"""
    network_info = {}
    
    for interface, addresses in psutil.net_if_addrs().items():
        network_info[interface] = []
        for addr in addresses:
            network_info[interface].append({
                'family': str(addr.family),
                'address': addr.address,
                'netmask': addr.netmask,
                'broadcast': addr.broadcast
            })
    
    return network_info

def get_process_info():
    """Get running process information"""
    processes = []
    
    for proc in psutil.process_iter(['pid', 'name', 'username', 'cpu_percent', 'memory_percent']):
        try:
            processes.append(proc.info)
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            continue
    
    return sorted(processes, key=lambda x: x['cpu_percent'], reverse=True)[:20]`,
        explanation: 'Implement helper functions to gather different types of system information.'
      },
      {
        step: 4,
        description: 'Complete the module with main function',
        code: `def main():
    # Define module arguments
    module_args = dict(
        include_processes=dict(type='bool', required=False, default=False),
        include_network=dict(type='bool', required=False, default=True)
    )
    
    # Create AnsibleModule instance
    module = AnsibleModule(
        argument_spec=module_args,
        supports_check_mode=True
    )
    
    # Get module parameters
    include_processes = module.params['include_processes']
    include_network = module.params['include_network']
    
    try:
        # Gather system information
        system_info = {
            'hostname': platform.node(),
            'platform': platform.platform(),
            'system': platform.system(),
            'release': platform.release(),
            'version': platform.version(),
            'cpu': get_cpu_info(),
            'memory': get_memory_info(),
            'disk': get_disk_info(),
            'uptime': psutil.boot_time()
        }
        
        # Add optional information
        if include_network:
            system_info['network'] = get_network_info()
        
        if include_processes:
            system_info['top_processes'] = get_process_info()
        
        # Return success result
        module.exit_json(
            changed=False,
            system_info=system_info,
            msg="System information gathered successfully"
        )
        
    except Exception as e:
        # Return failure result
        module.fail_json(
            msg=f"Failed to gather system information: {str(e)}",
            exception=str(e)
        )

if __name__ == '__main__':
    main()`,
        explanation: 'Complete the module with proper argument handling, error management, and return values.'
      },
      {
        step: 5,
        description: 'Create a custom filter plugin',
        code: `# plugins/filter/custom_filters.py

def bytes_to_human(bytes_value):
    """Convert bytes to human readable format"""
    if not isinstance(bytes_value, (int, float)):
        return bytes_value
    
    for unit in ['B', 'KB', 'MB', 'GB', 'TB']:
        if bytes_value < 1024.0:
            return f"{bytes_value:.1f} {unit}"
        bytes_value /= 1024.0
    return f"{bytes_value:.1f} PB"

def format_uptime(boot_time):
    """Format uptime from boot timestamp"""
    import time
    import datetime
    
    if not isinstance(boot_time, (int, float)):
        return "Unknown"
    
    uptime_seconds = time.time() - boot_time
    uptime_delta = datetime.timedelta(seconds=int(uptime_seconds))
    
    days = uptime_delta.days
    hours, remainder = divmod(uptime_delta.seconds, 3600)
    minutes, _ = divmod(remainder, 60)
    
    if days > 0:
        return f"{days} days, {hours} hours, {minutes} minutes"
    elif hours > 0:
        return f"{hours} hours, {minutes} minutes"
    else:
        return f"{minutes} minutes"

def extract_top_processes(processes, count=5):
    """Extract top N processes by CPU usage"""
    if not isinstance(processes, list):
        return []
    
    return sorted(processes, key=lambda x: x.get('cpu_percent', 0), reverse=True)[:count]

def network_summary(network_info):
    """Create a summary of network interfaces"""
    if not isinstance(network_info, dict):
        return {}
    
    summary = {}
    for interface, addresses in network_info.items():
        ipv4_addresses = []
        ipv6_addresses = []
        
        for addr in addresses:
            if 'IPv4' in addr.get('family', ''):
                ipv4_addresses.append(addr['address'])
            elif 'IPv6' in addr.get('family', ''):
                ipv6_addresses.append(addr['address'])
        
        summary[interface] = {
            'ipv4': ipv4_addresses,
            'ipv6': ipv6_addresses
        }
    
    return summary

class FilterModule(object):
    """Custom filter plugin"""
    
    def filters(self):
        return {
            'bytes_to_human': bytes_to_human,
            'format_uptime': format_uptime,
            'extract_top_processes': extract_top_processes,
            'network_summary': network_summary
        }`,
        explanation: 'Create custom filter plugins to process data in templates and playbooks.'
      },
      {
        step: 6,
        description: 'Create playbook using the custom module and filters',
        code: `---
- name: Test custom module and filters
  hosts: localhost
  gather_facts: no
  
  tasks:
    - name: Gather system information using custom module
      system_info:
        include_processes: true
        include_network: true
      register: sys_info

    - name: Display formatted system information
      debug:
        msg: |
          System Information for {{ sys_info.system_info.hostname }}:
          
          Platform: {{ sys_info.system_info.platform }}
          Uptime: {{ sys_info.system_info.uptime | format_uptime }}
          
          CPU:
            Cores: {{ sys_info.system_info.cpu.count }}
            Usage: {{ sys_info.system_info.cpu.usage_percent }}%
          
          Memory:
            Total: {{ sys_info.system_info.memory.total | bytes_to_human }}
            Used: {{ sys_info.system_info.memory.used | bytes_to_human }}
            Available: {{ sys_info.system_info.memory.available | bytes_to_human }}
            Usage: {{ sys_info.system_info.memory.percent }}%
          
          Top Processes:
          {% for proc in sys_info.system_info.top_processes | extract_top_processes(3) %}
            - {{ proc.name }} (PID: {{ proc.pid }}, CPU: {{ proc.cpu_percent }}%)
          {% endfor %}

    - name: Create system report template
      template:
        src: system_report.html.j2
        dest: /tmp/system_report.html
        mode: '0644'
      vars:
        report_data: "{{ sys_info.system_info }}"`,
        explanation: 'Use the custom module and filters in a playbook to gather and format system information.'
      },
      {
        step: 7,
        description: 'Create HTML report template using custom filters',
        code: `<!-- templates/system_report.html.j2 -->
<!DOCTYPE html>
<html>
<head>
    <title>System Report - {{ report_data.hostname }}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .section { margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; }
        .metric { margin: 5px 0; }
        .high-usage { color: red; font-weight: bold; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h1>System Report: {{ report_data.hostname }}</h1>
    <p>Generated: {{ ansible_date_time.iso8601 }}</p>
    
    <div class="section">
        <h2>System Overview</h2>
        <div class="metric">Platform: {{ report_data.platform }}</div>
        <div class="metric">Uptime: {{ report_data.uptime | format_uptime }}</div>
        <div class="metric">System: {{ report_data.system }} {{ report_data.release }}</div>
    </div>
    
    <div class="section">
        <h2>CPU Information</h2>
        <div class="metric">Cores: {{ report_data.cpu.count }} ({{ report_data.cpu.count_logical }} logical)</div>
        <div class="metric{% if report_data.cpu.usage_percent > 80 %} high-usage{% endif %}">
            Usage: {{ report_data.cpu.usage_percent }}%
        </div>
        <div class="metric">Architecture: {{ report_data.cpu.architecture }}</div>
    </div>
    
    <div class="section">
        <h2>Memory Information</h2>
        <div class="metric">Total: {{ report_data.memory.total | bytes_to_human }}</div>
        <div class="metric">Used: {{ report_data.memory.used | bytes_to_human }}</div>
        <div class="metric">Available: {{ report_data.memory.available | bytes_to_human }}</div>
        <div class="metric{% if report_data.memory.percent > 80 %} high-usage{% endif %}">
            Usage: {{ report_data.memory.percent }}%
        </div>
    </div>
    
    <div class="section">
        <h2>Disk Usage</h2>
        <table>
            <tr><th>Mount Point</th><th>Device</th><th>Total</th><th>Used</th><th>Free</th><th>Usage %</th></tr>
            {% for mount, info in report_data.disk.items() %}
            <tr>
                <td>{{ mount }}</td>
                <td>{{ info.device }}</td>
                <td>{{ info.total | bytes_to_human }}</td>
                <td>{{ info.used | bytes_to_human }}</td>
                <td>{{ info.free | bytes_to_human }}</td>
                <td{% if info.percent > 80 %} class="high-usage"{% endif %}>{{ "%.1f" | format(info.percent) }}%</td>
            </tr>
            {% endfor %}
        </table>
    </div>
    
    {% if report_data.top_processes is defined %}
    <div class="section">
        <h2>Top Processes</h2>
        <table>
            <tr><th>PID</th><th>Name</th><th>User</th><th>CPU %</th><th>Memory %</th></tr>
            {% for proc in report_data.top_processes | extract_top_processes(10) %}
            <tr>
                <td>{{ proc.pid }}</td>
                <td>{{ proc.name }}</td>
                <td>{{ proc.username }}</td>
                <td>{{ "%.1f" | format(proc.cpu_percent) }}%</td>
                <td>{{ "%.1f" | format(proc.memory_percent) }}%</td>
            </tr>
            {% endfor %}
        </table>
    </div>
    {% endif %}
    
    {% if report_data.network is defined %}
    <div class="section">
        <h2>Network Interfaces</h2>
        {% for interface, summary in report_data.network | network_summary %}
        <div class="metric">
            <strong>{{ interface }}:</strong>
            {% if summary.ipv4 %}IPv4: {{ summary.ipv4 | join(', ') }}{% endif %}
            {% if summary.ipv6 %}IPv6: {{ summary.ipv6 | join(', ') }}{% endif %}
        </div>
        {% endfor %}
    </div>
    {% endif %}
</body>
</html>`,
        explanation: 'Create a comprehensive HTML report template that uses custom filters to format the data.'
      },
      {
        step: 8,
        description: 'Test the custom module and generate report',
        command: 'ansible-playbook test-custom-module.yml',
        explanation: 'Run the playbook to test the custom module and generate the system report.'
      }
    ],
    commonPitfalls: [
      'Not following Ansible module conventions for documentation and return values',
      'Not handling exceptions properly in custom modules',
      'Creating overly complex modules that should be broken into smaller pieces',
      'Not testing modules with different input parameters and edge cases'
    ],
    bestPractices: [
      'Follow Ansible module development guidelines and conventions',
      'Include comprehensive documentation and examples',
      'Implement proper error handling and validation',
      'Test modules thoroughly with various inputs and scenarios'
    ]
  },
  {
    labId: 'intermediate-8',
    title: 'Performance Optimization and Parallelization',
    difficulty: 'Intermediate',
    walkthrough: [
      {
        step: 1,
        description: 'Configure ansible.cfg for performance optimization',
        code: `# ansible.cfg
[defaults]
# Increase SSH connection multiplexing
host_key_checking = False
ssh_args = -o ControlMaster=auto -o ControlPersist=60s -o ControlPath=/tmp/ansible-ssh-%h-%p-%r

# Optimize fact gathering
gathering = smart
fact_caching = jsonfile
fact_caching_connection = /tmp/ansible_facts_cache
fact_caching_timeout = 3600

# Increase parallelism
forks = 20

# Reduce SSH connection overhead
pipelining = True

# Optimize callbacks
stdout_callback = yaml
bin_ansible_callbacks = True

[ssh_connection]
# SSH optimizations
ssh_args = -o ControlMaster=auto -o ControlPersist=60s -o PreferredAuthentications=publickey
control_path_dir = /tmp
control_path = /tmp/ansible-ssh-%%h-%%p-%%r
pipelining = True`,
        explanation: 'Configure Ansible for optimal performance with SSH multiplexing, fact caching, and increased parallelism.'
      },
      {
        step: 2,
        description: 'Create playbook with parallel execution strategies',
        code: `---
- name: Performance optimized deployment
  hosts: all
  gather_facts: yes
  strategy: free  # Allow hosts to run independently
  serial: "30%"   # Process 30% of hosts at a time
  
  vars:
    packages_to_install:
      - nginx
      - mysql-server
      - php-fpm
      - redis-server
      - memcached
    
    services_to_configure:
      - name: nginx
        config_template: nginx.conf.j2
        config_dest: /etc/nginx/nginx.conf
      - name: mysql
        config_template: my.cnf.j2
        config_dest: /etc/mysql/my.cnf
      - name: php-fpm
        config_template: php-fpm.conf.j2
        config_dest: /etc/php/7.4/fpm/php-fpm.conf

  tasks:
    - name: Update package cache (parallel across hosts)
      package:
        update_cache: yes
      when: ansible_os_family == "Debian"
      tags: packages

    - name: Install packages in parallel
      package:
        name: "{{ packages_to_install }}"
        state: present
      tags: packages`,
        explanation: 'Use the free strategy and serial execution to optimize deployment across multiple hosts.'
      },
      {
        step: 3,
        description: 'Implement asynchronous tasks for long-running operations',
        code: `    - name: Start long-running database initialization (async)
      shell: |
        mysql_secure_installation --use-default --password="{{ mysql_root_password }}"
        mysql -u root -p"{{ mysql_root_password }}" -e "CREATE DATABASE IF NOT EXISTS webapp;"
        mysql -u root -p"{{ mysql_root_password }}" webapp < /opt/webapp/schema.sql
      async: 300  # Allow up to 5 minutes
      poll: 0     # Fire and forget
      register: db_init
      tags: database

    - name: Start application build process (async)
      shell: |
        cd /opt/webapp
        npm install --production
        npm run build
      async: 600  # Allow up to 10 minutes
      poll: 0     # Fire and forget
      register: app_build
      tags: application

    - name: Configure services while async tasks run
      template:
        src: "{{ item.config_template }}"
        dest: "{{ item.config_dest }}"
        backup: yes
      loop: "{{ services_to_configure }}"
      notify: "restart {{ item.name }}"
      tags: configuration

    - name: Wait for database initialization to complete
      async_status:
        jid: "{{ db_init.ansible_job_id }}"
      register: db_init_result
      until: db_init_result.finished
      retries: 60
      delay: 5
      tags: database

    - name: Wait for application build to complete
      async_status:
        jid: "{{ app_build.ansible_job_id }}"
      register: app_build_result
      until: app_build_result.finished
      retries: 120
      delay: 5
      tags: application`,
        explanation: 'Use async and poll to run long-running tasks in the background while continuing with other operations.'
      },
      {
        step: 4,
        description: 'Optimize fact gathering and caching',
        code: `    - name: Gather only essential facts
      setup:
        filter: 
          - ansible_distribution*
          - ansible_os_family
          - ansible_architecture
          - ansible_memtotal_mb
          - ansible_processor_vcpus
          - ansible_default_ipv4
      when: ansible_facts is not defined or force_fact_gathering | default(false)
      tags: facts

    - name: Create custom facts for performance monitoring
      copy:
        content: |
          #!/bin/bash
          echo "{"
          echo "  \"deployment_time\": \"$(date -Iseconds)\","
          echo "  \"deployment_user\": \"$(whoami)\","
          echo "  \"ansible_version\": \"{{ ansible_version.full }}\","
          echo "  \"playbook_run_id\": \"{{ ansible_date_time.epoch }}\""
          echo "}"
        dest: /etc/ansible/facts.d/deployment.fact
        mode: '0755'
      tags: facts

    - name: Re-gather facts to include custom facts
      setup:
        filter: ansible_local
      tags: facts`,
        explanation: 'Optimize fact gathering by collecting only necessary facts and creating custom facts for deployment tracking.'
      },
      {
        step: 5,
        description: 'Use batch processing for bulk operations',
        code: `    - name: Create user accounts in batches
      user:
        name: "{{ item }}"
        state: present
        create_home: yes
      loop: "{{ users_to_create | batch(5) | list }}"
      vars:
        users_to_create:
          - user1
          - user2
          - user3
          - user4
          - user5
          - user6
          - user7
          - user8
          - user9
          - user10
      loop_control:
        label: "Batch {{ ansible_loop.index }}"
      tags: users

    - name: Download files in parallel batches
      get_url:
        url: "https://releases.example.com/{{ item }}"
        dest: "/opt/downloads/{{ item }}"
        mode: '0644'
      loop: "{{ files_to_download }}"
      async: 60
      poll: 0
      register: download_jobs
      vars:
        files_to_download:
          - app-v1.0.tar.gz
          - config-v1.0.json
          - assets-v1.0.zip
          - docs-v1.0.pdf
      tags: downloads

    - name: Wait for all downloads to complete
      async_status:
        jid: "{{ item.ansible_job_id }}"
      loop: "{{ download_jobs.results }}"
      register: download_results
      until: download_results.finished
      retries: 12
      delay: 5
      tags: downloads`,
        explanation: 'Use batch processing and parallel downloads to optimize bulk operations.'
      },
      {
        step: 6,
        description: 'Implement conditional execution for performance',
        code: `    - name: Check if services need restart (performance optimization)
      stat:
        path: "/var/run/{{ item }}.pid"
      register: service_pids
      loop:
        - nginx
        - mysql
        - php-fpm
      tags: services

    - name: Get service status efficiently
      service_facts:
      tags: services

    - name: Restart only services that need it
      service:
        name: "{{ item.item }}"
        state: restarted
      loop: "{{ service_pids.results }}"
      when: 
        - not item.stat.exists or 
          ansible_facts.services[item.item + '.service'].state != 'running'
      loop_control:
        label: "{{ item.item }}"
      tags: services

    - name: Validate configuration only when changed
      command: "{{ item.validate_command }}"
      loop:
        - service: nginx
          validate_command: nginx -t
        - service: mysql
          validate_command: mysqld --help --verbose > /dev/null
      when: 
        - hostvars[inventory_hostname]['config_changed_' + item.service] | default(false)
      changed_when: false
      tags: validation`,
        explanation: 'Use conditional execution to avoid unnecessary operations and improve performance.'
      },
      {
        step: 7,
        description: 'Create performance monitoring and reporting',
        code: `    - name: Record deployment start time
      set_fact:
        deployment_start_time: "{{ ansible_date_time.epoch }}"
      run_once: true
      tags: monitoring

    - name: Monitor system resources during deployment
      shell: |
        echo "$(date -Iseconds),$(uptime | awk '{print $10,$11,$12}'),$(free -m | awk 'NR==2{printf \"%.1f\", $3*100/$2}'),$(df -h / | awk 'NR==2{print $5}')" >> /tmp/deployment_metrics.csv
      async: 1
      poll: 0
      ignore_errors: yes
      tags: monitoring

    - name: Generate performance report
      template:
        src: performance_report.j2
        dest: /tmp/deployment_performance_{{ ansible_date_time.epoch }}.txt
        mode: '0644'
      vars:
        deployment_end_time: "{{ ansible_date_time.epoch }}"
        deployment_duration: "{{ (ansible_date_time.epoch | int) - (deployment_start_time | int) }}"
        total_hosts: "{{ groups['all'] | length }}"
        failed_hosts: "{{ groups['all'] | length - ansible_play_hosts | length }}"
      run_once: true
      tags: monitoring

  handlers:
    - name: restart nginx
      service:
        name: nginx
        state: restarted
      listen: "restart nginx"

    - name: restart mysql
      service:
        name: mysql
        state: restarted
      listen: "restart mysql"

    - name: restart php-fpm
      service:
        name: php7.4-fpm
        state: restarted
      listen: "restart php-fpm"`,
        explanation: 'Add performance monitoring and reporting to track deployment efficiency and resource usage.'
      },
      {
        step: 8,
        description: 'Create performance report template',
        code: `# templates/performance_report.j2
Ansible Deployment Performance Report
=====================================

Deployment Summary:
  Start Time: {{ deployment_start_time | int | strftime('%Y-%m-%d %H:%M:%S') }}
  End Time: {{ deployment_end_time | int | strftime('%Y-%m-%d %H:%M:%S') }}
  Duration: {{ deployment_duration }} seconds ({{ (deployment_duration | int / 60) | round(1) }} minutes)
  
Host Statistics:
  Total Hosts: {{ total_hosts }}
  Successful Hosts: {{ ansible_play_hosts | length }}
  Failed Hosts: {{ failed_hosts }}
  Success Rate: {{ ((ansible_play_hosts | length / total_hosts) * 100) | round(1) }}%

Performance Metrics:
  Average Time per Host: {{ (deployment_duration | int / total_hosts) | round(1) }} seconds
  Parallelism Factor: {{ ansible_forks | default(5) }}
  Strategy Used: {{ ansible_play_strategy | default('linear') }}

Configuration:
  Fact Caching: {{ 'Enabled' if ansible_facts_cacheable else 'Disabled' }}
  SSH Pipelining: {{ 'Enabled' if ansible_ssh_pipelining else 'Disabled' }}
  Control Persist: {{ ansible_ssh_control_path is defined | ternary('Enabled', 'Disabled') }}

Recommendations:
{% if deployment_duration | int > 300 %}
  - Consider increasing parallelism (current: {{ ansible_forks | default(5) }})
  - Enable fact caching if not already enabled
  - Use async tasks for long-running operations
{% endif %}
{% if failed_hosts > 0 %}
  - Review failed hosts and network connectivity
  - Consider implementing retry logic for failed tasks
{% endif %}
{% if (ansible_play_hosts | length / total_hosts) < 0.9 %}
  - High failure rate detected - review playbook logic and host connectivity
{% endif %}`,
        explanation: 'Create a comprehensive performance report template with recommendations for optimization.'
      }
    ],
    commonPitfalls: [
      'Using linear strategy when free strategy would be more efficient',
      'Not implementing fact caching for repeated playbook runs',
      'Running synchronous tasks that could be asynchronous',
      'Not optimizing SSH connections with multiplexing'
    ],
    bestPractices: [
      'Use appropriate execution strategies based on task dependencies',
      'Implement fact caching to reduce overhead on repeated runs',
      'Use async tasks for long-running operations',
      'Monitor and measure performance to identify bottlenecks'
    ]
  },
  {
    labId: 'intermediate-9',
    title: 'Integration with CI/CD Pipelines',
    difficulty: 'Intermediate',
    walkthrough: [
      {
        step: 1,
        description: 'Create deployment playbook for CI/CD integration',
        code: `---
- name: CI/CD Deployment Pipeline
  hosts: "{{ target_environment | default('staging') }}"
  become: yes
  serial: "{{ deployment_batch_size | default('25%') }}"
  max_fail_percentage: 10
  
  vars:
    app_name: "{{ app_name | mandatory }}"
    app_version: "{{ app_version | mandatory }}"
    deployment_id: "{{ deployment_id | default(ansible_date_time.epoch) }}"
    rollback_version: "{{ rollback_version | default('') }}"
    health_check_url: "{{ health_check_url | default('/health') }}"
    
    # Environment-specific configurations
    environments:
      staging:
        replicas: 2
        health_check_timeout: 30
        deployment_timeout: 300
      production:
        replicas: 5
        health_check_timeout: 60
        deployment_timeout: 600
        
  pre_tasks:
    - name: Validate deployment parameters
      assert:
        that:
          - app_name is defined and app_name != ""
          - app_version is defined and app_version != ""
          - target_environment in ['staging', 'production']
        fail_msg: "Required deployment parameters are missing or invalid"
        success_msg: "Deployment parameters validated successfully"
      tags: validation

    - name: Create deployment directory
      file:
        path: "/opt/deployments/{{ deployment_id }}"
        state: directory
        mode: '0755'
      tags: setup`,
        explanation: 'Create a deployment playbook with proper validation and environment-specific configurations.'
      },
      {
        step: 2,
        description: 'Implement blue-green deployment strategy',
        code: `  tasks:
    - name: Determine current and target slots
      set_fact:
        current_slot: "{{ 'blue' if (current_active_slot | default('green')) == 'green' else 'green' }}"
        target_slot: "{{ 'green' if (current_active_slot | default('green')) == 'blue' else 'blue' }}"
      tags: deployment

    - name: Stop target slot services
      service:
        name: "{{ app_name }}-{{ target_slot }}"
        state: stopped
      ignore_errors: yes
      tags: deployment

    - name: Download application artifact
      get_url:
        url: "{{ artifact_repository_url }}/{{ app_name }}/{{ app_version }}/{{ app_name }}-{{ app_version }}.tar.gz"
        dest: "/opt/deployments/{{ deployment_id }}/{{ app_name }}-{{ app_version }}.tar.gz"
        mode: '0644'
        timeout: 120
      register: download_result
      retries: 3
      delay: 10
      until: download_result is succeeded
      tags: deployment

    - name: Extract application to target slot
      unarchive:
        src: "/opt/deployments/{{ deployment_id }}/{{ app_name }}-{{ app_version }}.tar.gz"
        dest: "/opt/{{ app_name }}/{{ target_slot }}"
        remote_src: yes
        owner: "{{ app_user }}"
        group: "{{ app_group }}"
        creates: "/opt/{{ app_name }}/{{ target_slot }}/app.py"
      tags: deployment

    - name: Update configuration for target slot
      template:
        src: app-config.j2
        dest: "/opt/{{ app_name }}/{{ target_slot }}/config.json"
        owner: "{{ app_user }}"
        group: "{{ app_group }}"
        mode: '0640'
      vars:
        app_port: "{{ 8080 if target_slot == 'blue' else 8081 }}"
        database_pool_size: "{{ environments[target_environment].replicas * 2 }}"
      tags: deployment`,
        explanation: 'Implement blue-green deployment with proper slot management and configuration.'
      },
      {
        step: 3,
        description: 'Add comprehensive health checks and validation',
        code: `    - name: Start target slot service
      service:
        name: "{{ app_name }}-{{ target_slot }}"
        state: started
        enabled: yes
      tags: deployment

    - name: Wait for application to start
      wait_for:
        port: "{{ 8080 if target_slot == 'blue' else 8081 }}"
        host: "{{ ansible_default_ipv4.address }}"
        delay: 10
        timeout: "{{ environments[target_environment].deployment_timeout }}"
      tags: health_check

    - name: Perform health check on target slot
      uri:
        url: "http://{{ ansible_default_ipv4.address }}:{{ 8080 if target_slot == 'blue' else 8081 }}{{ health_check_url }}"
        method: GET
        status_code: 200
        timeout: "{{ environments[target_environment].health_check_timeout }}"
      register: health_check
      retries: 10
      delay: 6
      until: health_check.status == 200
      tags: health_check

    - name: Run smoke tests
      uri:
        url: "http://{{ ansible_default_ipv4.address }}:{{ 8080 if target_slot == 'blue' else 8081 }}/api/{{ item }}"
        method: GET
        status_code: [200, 201]
      loop:
        - version
        - status
        - metrics
      register: smoke_tests
      tags: testing

    - name: Validate database connectivity
      shell: |
        cd /opt/{{ app_name }}/{{ target_slot }}
        python3 -c "
        import json
        import mysql.connector
        with open('config.json') as f:
            config = json.load(f)
        conn = mysql.connector.connect(**config['database'])
        cursor = conn.cursor()
        cursor.execute('SELECT 1')
        result = cursor.fetchone()
        assert result[0] == 1
        conn.close()
        print('Database connectivity: OK')
        "
      register: db_check
      changed_when: false
      tags: testing`,
        explanation: 'Add comprehensive health checks, smoke tests, and database connectivity validation.'
      },
      {
        step: 4,
        description: 'Implement traffic switching and rollback capability',
        code: `    - name: Update load balancer configuration
      template:
        src: nginx-lb.conf.j2
        dest: /etc/nginx/sites-available/{{ app_name }}.conf
        backup: yes
      vars:
        active_slot: "{{ target_slot }}"
        active_port: "{{ 8080 if target_slot == 'blue' else 8081 }}"
      notify: reload nginx
      tags: traffic_switch

    - name: Verify load balancer configuration
      command: nginx -t
      changed_when: false
      tags: traffic_switch

    - name: Reload load balancer
      service:
        name: nginx
        state: reloaded
      tags: traffic_switch

    - name: Wait for traffic switch to complete
      pause:
        seconds: 30
      tags: traffic_switch

    - name: Verify application is receiving traffic
      uri:
        url: "http://{{ ansible_default_ipv4.address }}{{ health_check_url }}"
        method: GET
        status_code: 200
      register: traffic_check
      retries: 5
      delay: 10
      until: traffic_check.status == 200
      tags: traffic_switch

    - name: Stop old slot service
      service:
        name: "{{ app_name }}-{{ current_slot }}"
        state: stopped
      when: traffic_check is succeeded
      tags: cleanup`,
        explanation: 'Implement traffic switching through load balancer and cleanup of old deployment.'
      },
      {
        step: 5,
        description: 'Add deployment notification and reporting',
        code: `    - name: Record deployment success
      copy:
        content: |
          {
            "deployment_id": "{{ deployment_id }}",
            "app_name": "{{ app_name }}",
            "app_version": "{{ app_version }}",
            "environment": "{{ target_environment }}",
            "active_slot": "{{ target_slot }}",
            "deployment_time": "{{ ansible_date_time.iso8601 }}",
            "deployed_by": "{{ ansible_user_id }}",
            "status": "success"
          }
        dest: "/opt/deployments/{{ deployment_id }}/deployment.json"
        mode: '0644'
      tags: reporting

    - name: Send deployment notification
      uri:
        url: "{{ notification_webhook_url }}"
        method: POST
        body_format: json
        body:
          text: |
            ✅ Deployment Successful
            App: {{ app_name }} v{{ app_version }}
            Environment: {{ target_environment }}
            Deployment ID: {{ deployment_id }}
            Duration: {{ (ansible_date_time.epoch | int) - (deployment_start_time | int) }} seconds
        status_code: 200
      when: notification_webhook_url is defined
      ignore_errors: yes
      tags: notification

  rescue:
    - name: Rollback on deployment failure
      block:
        - name: Stop failed deployment slot
          service:
            name: "{{ app_name }}-{{ target_slot }}"
            state: stopped
          ignore_errors: yes

        - name: Restore previous load balancer configuration
          copy:
            src: "/etc/nginx/sites-available/{{ app_name }}.conf.{{ ansible_date_time.date }}"
            dest: "/etc/nginx/sites-available/{{ app_name }}.conf"
            remote_src: yes
          ignore_errors: yes
          notify: reload nginx

        - name: Start previous slot service
          service:
            name: "{{ app_name }}-{{ current_slot }}"
            state: started
          ignore_errors: yes

        - name: Record deployment failure
          copy:
            content: |
              {
                "deployment_id": "{{ deployment_id }}",
                "app_name": "{{ app_name }}",
                "app_version": "{{ app_version }}",
                "environment": "{{ target_environment }}",
                "deployment_time": "{{ ansible_date_time.iso8601 }}",
                "deployed_by": "{{ ansible_user_id }}",
                "status": "failed",
                "error": "{{ ansible_failed_result.msg | default('Unknown error') }}"
              }
            dest: "/opt/deployments/{{ deployment_id }}/deployment.json"
            mode: '0644'

        - name: Send failure notification
          uri:
            url: "{{ notification_webhook_url }}"
            method: POST
            body_format: json
            body:
              text: |
                ❌ Deployment Failed
                App: {{ app_name }} v{{ app_version }}
                Environment: {{ target_environment }}
                Deployment ID: {{ deployment_id }}
                Error: {{ ansible_failed_result.msg | default('Unknown error') }}
                Rollback: Attempted
            status_code: 200
          when: notification_webhook_url is defined
          ignore_errors: yes

      tags: rollback`,
        explanation: 'Add comprehensive error handling with automatic rollback and notification capabilities.'
      },
      {
        step: 6,
        description: 'Create CI/CD pipeline integration script',
        code: `#!/bin/bash
# scripts/deploy.sh - CI/CD integration script

set -euo pipefail

# Default values
ENVIRONMENT=${ENVIRONMENT:-staging}
APP_NAME=${APP_NAME:-myapp}
APP_VERSION=${APP_VERSION:-latest}
INVENTORY=${INVENTORY:-inventory/${ENVIRONMENT}}
PLAYBOOK=${PLAYBOOK:-deploy.yml}
VAULT_PASSWORD_FILE=${VAULT_PASSWORD_FILE:-.vault_pass}

# CI/CD specific variables
BUILD_NUMBER=${BUILD_NUMBER:-$(date +%s)}
GIT_COMMIT=${GIT_COMMIT:-$(git rev-parse HEAD 2>/dev/null || echo "unknown")}
GIT_BRANCH=${GIT_BRANCH:-$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "unknown")}

# Logging
LOG_FILE="deployment-${BUILD_NUMBER}.log"
exec 1> >(tee -a "$LOG_FILE")
exec 2> >(tee -a "$LOG_FILE" >&2)

echo "=== Ansible Deployment Started ==="
echo "Environment: $ENVIRONMENT"
echo "Application: $APP_NAME"
echo "Version: $APP_VERSION"
echo "Build Number: $BUILD_NUMBER"
echo "Git Commit: $GIT_COMMIT"
echo "Git Branch: $GIT_BRANCH"
echo "Timestamp: $(date -Iseconds)"
echo "=================================="

# Pre-deployment checks
echo "Running pre-deployment checks..."

# Check if inventory exists
if [[ ! -f "$INVENTORY" ]]; then
    echo "ERROR: Inventory file $INVENTORY not found"
    exit 1
fi

# Check if playbook exists
if [[ ! -f "$PLAYBOOK" ]]; then
    echo "ERROR: Playbook $PLAYBOOK not found"
    exit 1
fi

# Check if vault password file exists
if [[ ! -f "$VAULT_PASSWORD_FILE" ]]; then
    echo "ERROR: Vault password file $VAULT_PASSWORD_FILE not found"
    exit 1
fi

# Test connectivity to target hosts
echo "Testing connectivity to target hosts..."
ansible all -i "$INVENTORY" -m ping --vault-password-file "$VAULT_PASSWORD_FILE" || {
    echo "ERROR: Cannot connect to target hosts"
    exit 1
}

# Run the deployment
echo "Starting deployment..."
ansible-playbook \
    -i "$INVENTORY" \
    --vault-password-file "$VAULT_PASSWORD_FILE" \
    -e "app_name=$APP_NAME" \
    -e "app_version=$APP_VERSION" \
    -e "target_environment=$ENVIRONMENT" \
    -e "deployment_id=$BUILD_NUMBER" \
    -e "git_commit=$GIT_COMMIT" \
    -e "git_branch=$GIT_BRANCH" \
    -e "deployment_start_time=$(date +%s)" \
    "$PLAYBOOK"

DEPLOYMENT_EXIT_CODE=$?

if [[ $DEPLOYMENT_EXIT_CODE -eq 0 ]]; then
    echo "=== Deployment Successful ==="
    echo "Build Number: $BUILD_NUMBER"
    echo "Duration: $(($(date +%s) - $(date +%s))) seconds"
    echo "Log File: $LOG_FILE"
else
    echo "=== Deployment Failed ==="
    echo "Exit Code: $DEPLOYMENT_EXIT_CODE"
    echo "Log File: $LOG_FILE"
    echo "Check the log file for detailed error information"
fi

exit $DEPLOYMENT_EXIT_CODE`,
        explanation: 'Create a comprehensive CI/CD integration script with proper error handling and logging.'
      },
      {
        step: 7,
        description: 'Create Jenkins pipeline configuration',
        code: `// Jenkinsfile
pipeline {
    agent any
    
    parameters {
        choice(
            name: 'ENVIRONMENT',
            choices: ['staging', 'production'],
            description: 'Target deployment environment'
        )
        string(
            name: 'APP_VERSION',
            defaultValue: 'latest',
            description: 'Application version to deploy'
        )
        booleanParam(
            name: 'SKIP_TESTS',
            defaultValue: false,
            description: 'Skip pre-deployment tests'
        )
    }
    
    environment {
        APP_NAME = 'myapp'
        ANSIBLE_HOST_KEY_CHECKING = 'False'
        ANSIBLE_STDOUT_CALLBACK = 'yaml'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_COMMIT = sh(
                        script: 'git rev-parse HEAD',
                        returnStdout: true
                    ).trim()
                    env.GIT_BRANCH = sh(
                        script: 'git rev-parse --abbrev-ref HEAD',
                        returnStdout: true
                    ).trim()
                }
            }
        }
        
        stage('Validate') {
            steps {
                sh '''
                    echo "Validating Ansible configuration..."
                    ansible-playbook --syntax-check deploy.yml
                    ansible-lint deploy.yml || true
                '''
            }
        }
        
        stage('Pre-deployment Tests') {
            when {
                not { params.SKIP_TESTS }
            }
            steps {
                sh '''
                    echo "Running pre-deployment tests..."
                    ansible-playbook -i inventory/staging test-connectivity.yml
                '''
            }
        }
        
        stage('Deploy to Staging') {
            when {
                anyOf {
                    branch 'develop'
                    branch 'main'
                    params.ENVIRONMENT == 'staging'
                }
            }
            steps {
                withCredentials([file(credentialsId: 'ansible-vault-password', variable: 'VAULT_PASS')]) {
                    sh '''
                        cp "$VAULT_PASS" .vault_pass
                        chmod 600 .vault_pass
                        ./scripts/deploy.sh
                    '''
                }
            }
            post {
                always {
                    sh 'rm -f .vault_pass'
                    archiveArtifacts artifacts: 'deployment-*.log', allowEmptyArchive: true
                }
            }
        }
        
        stage('Production Approval') {
            when {
                allOf {
                    branch 'main'
                    params.ENVIRONMENT == 'production'
                }
            }
            steps {
                timeout(time: 30, unit: 'MINUTES') {
                    input message: 'Deploy to Production?', 
                          ok: 'Deploy',
                          submitterParameter: 'APPROVER'
                }
            }
        }
        
        stage('Deploy to Production') {
            when {
                allOf {
                    branch 'main'
                    params.ENVIRONMENT == 'production'
                }
            }
            steps {
                withCredentials([file(credentialsId: 'ansible-vault-password', variable: 'VAULT_PASS')]) {
                    sh '''
                        cp "$VAULT_PASS" .vault_pass
                        chmod 600 .vault_pass
                        ENVIRONMENT=production ./scripts/deploy.sh
                    '''
                }
            }
            post {
                always {
                    sh 'rm -f .vault_pass'
                    archiveArtifacts artifacts: 'deployment-*.log', allowEmptyArchive: true
                }
                success {
                    slackSend(
                        color: 'good',
                        message: "✅ Production deployment successful: ${env.APP_NAME} v${params.APP_VERSION}"
                    )
                }
                failure {
                    slackSend(
                        color: 'danger',
                        message: "❌ Production deployment failed: ${env.APP_NAME} v${params.APP_VERSION}"
                    )
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}`,
        explanation: 'Create a comprehensive Jenkins pipeline with approval gates, notifications, and proper credential management.'
      }
    ],
    commonPitfalls: [
      'Not implementing proper rollback mechanisms',
      'Skipping health checks and validation steps',
      'Not securing sensitive data in CI/CD pipelines',
      'Deploying to production without proper approval processes'
    ],
    bestPractices: [
      'Implement blue-green or canary deployment strategies',
      'Add comprehensive health checks and smoke tests',
      'Use proper secret management for credentials',
      'Include approval gates for production deployments'
    ]
  },
  {
    labId: 'intermediate-10',
    title: 'Multi-Environment Management',
    difficulty: 'Intermediate',
    walkthrough: [
      {
        step: 1,
        description: 'Create environment-specific inventory structure',
        code: `# inventory/development/hosts
[webservers]
dev-web-01 ansible_host=192.168.1.10
dev-web-02 ansible_host=192.168.1.11

[databases]
dev-db-01 ansible_host=192.168.1.20

[loadbalancers]
dev-lb-01 ansible_host=192.168.1.30

[development:children]
webservers
databases
loadbalancers`,
        explanation: 'Create separate inventory files for each environment with environment-specific hostnames and IP addresses.'
      },
      {
        step: 2,
        description: 'Create staging inventory',
        code: `# inventory/staging/hosts
[webservers]
staging-web-01 ansible_host=10.0.1.10
staging-web-02 ansible_host=10.0.1.11
staging-web-03 ansible_host=10.0.1.12

[databases]
staging-db-01 ansible_host=10.0.1.20
staging-db-02 ansible_host=10.0.1.21

[loadbalancers]
staging-lb-01 ansible_host=10.0.1.30

[staging:children]
webservers
databases
loadbalancers`,
        explanation: 'Staging environment typically mirrors production with similar architecture but smaller scale.'
      },
      {
        step: 3,
        description: 'Create production inventory',
        code: `# inventory/production/hosts
[webservers]
prod-web-01 ansible_host=172.16.1.10
prod-web-02 ansible_host=172.16.1.11
prod-web-03 ansible_host=172.16.1.12
prod-web-04 ansible_host=172.16.1.13
prod-web-05 ansible_host=172.16.1.14

[databases]
prod-db-01 ansible_host=172.16.1.20 mysql_role=master
prod-db-02 ansible_host=172.16.1.21 mysql_role=slave
prod-db-03 ansible_host=172.16.1.22 mysql_role=slave

[loadbalancers]
prod-lb-01 ansible_host=172.16.1.30
prod-lb-02 ansible_host=172.16.1.31

[production:children]
webservers
databases
loadbalancers`,
        explanation: 'Production environment with high availability setup including multiple servers and database replication.'
      },
      {
        step: 4,
        description: 'Create environment-specific group variables',
        code: `# inventory/development/group_vars/all.yml
---
environment: development
domain_suffix: dev.example.com

# Application configuration
app_debug: true
app_log_level: debug
app_replicas: 1

# Database configuration
mysql_max_connections: 50
mysql_innodb_buffer_pool_size: 128M
mysql_query_cache_size: 32M

# Security settings (relaxed for development)
ssl_enabled: false
firewall_strict: false

# Monitoring
monitoring_enabled: false
log_retention_days: 7

# Backup configuration
backup_enabled: false
backup_schedule: "0 2 * * 0"  # Weekly

# Resource limits
nginx_worker_processes: 1
nginx_worker_connections: 512
php_max_children: 5`,
        explanation: 'Development environment with relaxed security, debug enabled, and minimal resource allocation.'
      },
      {
        step: 5,
        description: 'Create staging environment variables',
        code: `# inventory/staging/group_vars/all.yml
---
environment: staging
domain_suffix: staging.example.com

# Application configuration
app_debug: false
app_log_level: info
app_replicas: 2

# Database configuration
mysql_max_connections: 100
mysql_innodb_buffer_pool_size: 256M
mysql_query_cache_size: 64M

# Security settings (production-like)
ssl_enabled: true
firewall_strict: true

# Monitoring
monitoring_enabled: true
log_retention_days: 30

# Backup configuration
backup_enabled: true
backup_schedule: "0 2 * * *"  # Daily

# Resource limits
nginx_worker_processes: 2
nginx_worker_connections: 1024
php_max_children: 10

# SSL configuration
ssl_certificate_path: /etc/ssl/certs/staging.example.com.crt
ssl_private_key_path: /etc/ssl/private/staging.example.com.key`,
        explanation: 'Staging environment mirrors production settings but with smaller scale and staging-specific configurations.'
      },
      {
        step: 6,
        description: 'Create production environment variables',
        code: `# inventory/production/group_vars/all.yml
---
environment: production
domain_suffix: example.com

# Application configuration
app_debug: false
app_log_level: warning
app_replicas: 5

# Database configuration
mysql_max_connections: 500
mysql_innodb_buffer_pool_size: 1G
mysql_query_cache_size: 256M
mysql_slow_query_log: true

# Security settings (strict)
ssl_enabled: true
firewall_strict: true
fail2ban_enabled: true

# Monitoring
monitoring_enabled: true
alerting_enabled: true
log_retention_days: 90

# Backup configuration
backup_enabled: true
backup_schedule: "0 1 * * *"  # Daily at 1 AM
backup_retention_days: 30

# Resource limits
nginx_worker_processes: auto
nginx_worker_connections: 2048
php_max_children: 50

# SSL configuration
ssl_certificate_path: /etc/ssl/certs/example.com.crt
ssl_private_key_path: /etc/ssl/private/example.com.key

# Performance tuning
nginx_gzip_enabled: true
nginx_cache_enabled: true
mysql_query_cache_enabled: true`,
        explanation: 'Production environment with strict security, comprehensive monitoring, and optimized performance settings.'
      },
      {
        step: 7,
        description: 'Create environment-specific encrypted variables',
        code: `# Create encrypted vault files for each environment
# inventory/development/group_vars/vault.yml (encrypted)
---
vault_mysql_root_password: "dev_root_password_123"
vault_mysql_app_password: "dev_app_password_456"
vault_api_secret_key: "dev_secret_key_789"
vault_ssl_certificate: ""  # No SSL in development
vault_ssl_private_key: ""

# inventory/staging/group_vars/vault.yml (encrypted)
---
vault_mysql_root_password: "staging_secure_root_password_456"
vault_mysql_app_password: "staging_secure_app_password_789"
vault_api_secret_key: "staging_secret_key_abc123"
vault_ssl_certificate: |
  -----BEGIN CERTIFICATE-----
  [staging SSL certificate content]
  -----END CERTIFICATE-----
vault_ssl_private_key: |
  -----BEGIN PRIVATE KEY-----
  [staging SSL private key content]
  -----END PRIVATE KEY-----

# inventory/production/group_vars/vault.yml (encrypted)
---
vault_mysql_root_password: "production_ultra_secure_root_password_xyz"
vault_mysql_app_password: "production_ultra_secure_app_password_abc"
vault_api_secret_key: "production_secret_key_def456"
vault_ssl_certificate: |
  -----BEGIN CERTIFICATE-----
  [production SSL certificate content]
  -----END CERTIFICATE-----
vault_ssl_private_key: |
  -----BEGIN PRIVATE KEY-----
  [production SSL private key content]
  -----END PRIVATE KEY-----`,
        explanation: 'Create separate encrypted vault files for each environment with environment-specific secrets.'
      },
      {
        step: 8,
        description: 'Create multi-environment deployment playbook',
        code: `---
- name: Multi-environment application deployment
  hosts: all
  become: yes
  serial: "{{ deployment_batch_size | default('25%') }}"
  
  vars:
    # Reference vault variables
    mysql_root_password: "{{ vault_mysql_root_password }}"
    mysql_app_password: "{{ vault_mysql_app_password }}"
    api_secret_key: "{{ vault_api_secret_key }}"
    
    # Environment validation
    allowed_environments: ['development', 'staging', 'production']
    
  pre_tasks:
    - name: Validate environment
      assert:
        that:
          - environment is defined
          - environment in allowed_environments
        fail_msg: "Invalid or undefined environment: {{ environment | default('undefined') }}"
        success_msg: "Deploying to {{ environment }} environment"
      tags: validation

    - name: Display environment information
      debug:
        msg: |
          Environment: {{ environment }}
          Domain: {{ domain_suffix }}
          SSL Enabled: {{ ssl_enabled }}
          Debug Mode: {{ app_debug }}
          Replicas: {{ app_replicas }}
          Monitoring: {{ monitoring_enabled }}
      tags: info

    - name: Confirm production deployment
      pause:
        prompt: "You are about to deploy to PRODUCTION. Type 'yes' to continue"
      when: 
        - environment == 'production'
        - not (auto_approve | default(false))
      tags: confirmation`,
        explanation: 'Create a deployment playbook that validates the environment and shows different behavior based on the target environment.'
      },
      {
        step: 9,
        description: 'Add environment-specific deployment tasks',
        code: `  tasks:
    - name: Install packages (environment-specific)
      package:
        name: "{{ item }}"
        state: present
      loop: "{{ base_packages + environment_packages[environment] }}"
      vars:
        base_packages:
          - nginx
          - mysql-server
          - php-fpm
        environment_packages:
          development:
            - vim
            - htop
            - curl
          staging:
            - htop
            - curl
            - logrotate
          production:
            - logrotate
            - fail2ban
            - unattended-upgrades
      tags: packages

    - name: Configure application (environment-specific)
      template:
        src: app-config.j2
        dest: /opt/app/config.json
        owner: www-data
        group: www-data
        mode: "{{ '0644' if environment == 'development' else '0640' }}"
        backup: "{{ environment != 'development' }}"
      notify: restart application
      tags: configuration

    - name: Configure SSL certificates (staging and production only)
      block:
        - name: Deploy SSL certificate
          copy:
            content: "{{ vault_ssl_certificate }}"
            dest: "{{ ssl_certificate_path }}"
            owner: root
            group: root
            mode: '0644'
          no_log: true

        - name: Deploy SSL private key
          copy:
            content: "{{ vault_ssl_private_key }}"
            dest: "{{ ssl_private_key_path }}"
            owner: root
            group: root
            mode: '0600'
          no_log: true

      when: ssl_enabled
      tags: ssl

    - name: Configure monitoring (staging and production only)
      template:
        src: monitoring-config.j2
        dest: /etc/monitoring/config.yml
        owner: root
        group: root
        mode: '0644'
      when: monitoring_enabled
      notify: restart monitoring
      tags: monitoring

    - name: Setup backup (staging and production only)
      cron:
        name: "Database backup"
        cron_file: database_backup
        minute: "0"
        hour: "{{ backup_schedule.split()[1] }}"
        job: "/opt/scripts/backup.sh {{ environment }}"
        user: root
      when: backup_enabled
      tags: backup`,
        explanation: 'Implement environment-specific tasks that adapt behavior based on the target environment.'
      },
      {
        step: 10,
        description: 'Create environment promotion workflow',
        code: `---
- name: Environment promotion workflow
  hosts: localhost
  gather_facts: no
  vars:
    promotion_workflows:
      dev_to_staging:
        source: development
        target: staging
        validation_required: true
        approval_required: false
      staging_to_production:
        source: staging
        target: production
        validation_required: true
        approval_required: true

  tasks:
    - name: Validate promotion workflow
      assert:
        that:
          - promotion_type is defined
          - promotion_type in promotion_workflows.keys()
        fail_msg: "Invalid promotion type: {{ promotion_type | default('undefined') }}"
      tags: validation

    - name: Set promotion variables
      set_fact:
        workflow: "{{ promotion_workflows[promotion_type] }}"
        source_env: "{{ promotion_workflows[promotion_type].source }}"
        target_env: "{{ promotion_workflows[promotion_type].target }}"
      tags: setup

    - name: Run validation tests on source environment
      include_tasks: validate_environment.yml
      vars:
        environment_to_validate: "{{ source_env }}"
      when: workflow.validation_required
      tags: validation

    - name: Request approval for production promotion
      pause:
        prompt: |
          Promotion Request:
          Source: {{ source_env }}
          Target: {{ target_env }}
          
          Please review the validation results and type 'approve' to continue
      register: approval_response
      when: workflow.approval_required
      tags: approval

    - name: Validate approval
      assert:
        that:
          - approval_response.user_input == 'approve'
        fail_msg: "Promotion not approved"
      when: workflow.approval_required
      tags: approval

    - name: Deploy to target environment
      command: >
        ansible-playbook 
        -i inventory/{{ target_env }}/hosts 
        --vault-password-file .vault_pass_{{ target_env }}
        -e environment={{ target_env }}
        -e promoted_from={{ source_env }}
        -e promotion_id={{ ansible_date_time.epoch }}
        deploy.yml
      register: deployment_result
      tags: deployment

    - name: Record promotion
      copy:
        content: |
          {
            "promotion_id": "{{ ansible_date_time.epoch }}",
            "promotion_type": "{{ promotion_type }}",
            "source_environment": "{{ source_env }}",
            "target_environment": "{{ target_env }}",
            "promoted_by": "{{ ansible_user_id }}",
            "promotion_time": "{{ ansible_date_time.iso8601 }}",
            "status": "{{ 'success' if deployment_result.rc == 0 else 'failed' }}"
          }
        dest: "promotions/{{ ansible_date_time.epoch }}.json"
        mode: '0644'
      tags: recording`,
        explanation: 'Create an environment promotion workflow with validation, approval, and audit trail.'
      },
      {
        step: 11,
        description: 'Create deployment script for different environments',
        code: `#!/bin/bash
# scripts/deploy-multi-env.sh

set -euo pipefail

# Function to display usage
usage() {
    echo "Usage: $0 -e ENVIRONMENT [-v APP_VERSION] [-a] [-h]"
    echo ""
    echo "Options:"
    echo "  -e ENVIRONMENT    Target environment (development, staging, production)"
    echo "  -v APP_VERSION    Application version to deploy (default: latest)"
    echo "  -a                Auto-approve (skip confirmation prompts)"
    echo "  -h                Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 -e development"
    echo "  $0 -e staging -v 1.2.3"
    echo "  $0 -e production -v 1.2.3 -a"
    exit 1
}

# Default values
ENVIRONMENT=""
APP_VERSION="latest"
AUTO_APPROVE=false

# Parse command line arguments
while getopts "e:v:ah" opt; do
    case $opt in
        e) ENVIRONMENT="$OPTARG" ;;
        v) APP_VERSION="$OPTARG" ;;
        a) AUTO_APPROVE=true ;;
        h) usage ;;
        *) usage ;;
    esac
done

# Validate required parameters
if [[ -z "$ENVIRONMENT" ]]; then
    echo "ERROR: Environment is required"
    usage
fi

# Validate environment
case "$ENVIRONMENT" in
    development|staging|production)
        echo "Deploying to $ENVIRONMENT environment"
        ;;
    *)
        echo "ERROR: Invalid environment: $ENVIRONMENT"
        echo "Valid environments: development, staging, production"
        exit 1
        ;;
esac

# Set environment-specific variables
INVENTORY="inventory/$ENVIRONMENT/hosts"
VAULT_PASSWORD_FILE=".vault_pass_$ENVIRONMENT"
LOG_FILE="deployment-$ENVIRONMENT-$(date +%Y%m%d-%H%M%S).log"

# Check prerequisites
echo "Checking prerequisites..."

if [[ ! -f "$INVENTORY" ]]; then
    echo "ERROR: Inventory file not found: $INVENTORY"
    exit 1
fi

if [[ ! -f "$VAULT_PASSWORD_FILE" ]]; then
    echo "ERROR: Vault password file not found: $VAULT_PASSWORD_FILE"
    exit 1
fi

# Production safety check
if [[ "$ENVIRONMENT" == "production" && "$AUTO_APPROVE" == false ]]; then
    echo ""
    echo "⚠️  WARNING: You are about to deploy to PRODUCTION!"
    echo "Environment: $ENVIRONMENT"
    echo "Version: $APP_VERSION"
    echo ""
    read -p "Are you sure you want to continue? (type 'yes' to proceed): " confirmation
    
    if [[ "$confirmation" != "yes" ]]; then
        echo "Deployment cancelled"
        exit 1
    fi
fi

# Start deployment
echo "Starting deployment..."
echo "Environment: $ENVIRONMENT"
echo "Version: $APP_VERSION"
echo "Log file: $LOG_FILE"
echo "Timestamp: $(date -Iseconds)"

# Run the deployment
ansible-playbook \
    -i "$INVENTORY" \
    --vault-password-file "$VAULT_PASSWORD_FILE" \
    -e "environment=$ENVIRONMENT" \
    -e "app_version=$APP_VERSION" \
    -e "auto_approve=$AUTO_APPROVE" \
    -e "deployment_timestamp=$(date +%s)" \
    deploy.yml \
    2>&1 | tee "$LOG_FILE"

DEPLOYMENT_EXIT_CODE=${PIPESTATUS[0]}

# Report results
if [[ $DEPLOYMENT_EXIT_CODE -eq 0 ]]; then
    echo ""
    echo "✅ Deployment to $ENVIRONMENT completed successfully!"
    echo "Version: $APP_VERSION"
    echo "Log file: $LOG_FILE"
else
    echo ""
    echo "❌ Deployment to $ENVIRONMENT failed!"
    echo "Exit code: $DEPLOYMENT_EXIT_CODE"
    echo "Check log file for details: $LOG_FILE"
fi

exit $DEPLOYMENT_EXIT_CODE`,
        explanation: 'Create a comprehensive deployment script that handles multiple environments with proper validation and safety checks.'
      }
    ],
    commonPitfalls: [
      'Using the same configuration across all environments',
      'Not implementing proper approval processes for production',
      'Storing environment-specific secrets in the same vault file',
      'Not validating environment parameters before deployment'
    ],
    bestPractices: [
      'Maintain separate inventory and variable files for each environment',
      'Use environment-specific vault files for secrets',
      'Implement validation and approval workflows for production deployments',
      'Create promotion workflows to move code between environments safely'
    ]
  }
];