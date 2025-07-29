import React from 'react';
import { BookOpen, Target, Users, Code, Zap, Award } from 'lucide-react';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Target,
      title: 'Hands-On Learning',
      description: 'Learn through practical labs that simulate real-world scenarios'
    },
    {
      icon: Users,
      title: 'Progressive Difficulty',
      description: 'Start with basics and advance to enterprise-level automation'
    },
    {
      icon: Code,
      title: 'Comprehensive Solutions',
      description: 'Detailed step-by-step solutions with explanations and best practices'
    },
    {
      icon: Zap,
      title: 'Modern Practices',
      description: 'Learn current industry standards and best practices'
    }
  ];

  const difficultyLevels = [
    {
      level: 'Beginner',
      description: 'Master the fundamentals of Ansible automation',
      labCount: 10,
      color: 'green',
      topics: ['Basic playbooks', 'Modules', 'Variables', 'Handlers', 'Inventory'],
      onClick: () => onNavigate('beginner')
    },
    {
      level: 'Intermediate',
      description: 'Build advanced automation with roles and best practices',
      labCount: 10,
      color: 'yellow',
      topics: ['Roles', 'Templates', 'Vault', 'Dynamic inventory', 'Error handling'],
      onClick: () => onNavigate('intermediate')
    },
    {
      level: 'Advanced',
      description: 'Enterprise-scale deployments and complex scenarios',
      labCount: 10,
      color: 'red',
      topics: ['LAMP stacks', 'Container orchestration', 'Cloud automation', 'Security hardening'],
      onClick: () => onNavigate('advanced')
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 rounded-full">
            <BookOpen className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Master Ansible Through Hands-On Labs
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Learn automation, configuration management, and infrastructure as code through 30 practical labs 
          designed to take you from beginner to expert. Each lab includes comprehensive solutions and explanations.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => onNavigate('beginner')}
            className="btn-primary"
          >
            Start Learning
          </button>
          <button
            onClick={() => onNavigate('solutions')}
            className="btn-secondary"
          >
            View Solutions
          </button>
        </div>
      </div>

      {/* What is Ansible Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Ansible?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Ansible is a powerful, agentless automation tool that simplifies configuration management, 
          application deployment, and task automation. Using simple YAML syntax, you can automate 
          complex IT tasks across multiple servers, making it an essential skill for DevOps engineers, 
          system administrators, and cloud architects.
        </p>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Learn with Our Labs?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Difficulty Levels Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Learning Path</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {difficultyLevels.map((level, index) => (
            <div key={index} className="lab-card p-6 cursor-pointer" onClick={level.onClick}>
              <div className="flex items-center justify-between mb-4">
                <span className={`difficulty-badge difficulty-${level.color.toLowerCase()}`}>
                  {level.level}
                </span>
                <span className="text-sm text-gray-500">{level.labCount} Labs</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{level.level} Labs</h3>
              <p className="text-gray-600 mb-4">{level.description}</p>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Topics Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {level.topics.map((topic, topicIndex) => (
                    <span key={topicIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-700 mb-6">
          Begin your Ansible journey with our beginner-friendly labs, or jump ahead to more advanced topics 
          if you already have some experience. Each lab builds practical skills you can apply immediately.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => onNavigate('beginner')}
            className="btn-primary flex items-center space-x-2"
          >
            <Award size={16} />
            <span>Start with Beginner Labs</span>
          </button>
        </div>
      </div>
    </div>
  );
}