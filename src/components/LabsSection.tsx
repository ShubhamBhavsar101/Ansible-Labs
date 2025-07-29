import React from 'react';
import { Clock, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { Lab } from '../data/labsData';

interface LabsSectionProps {
  labs: Lab[];
  difficulty: string;
  onLabSelect: (lab: Lab) => void;
}

export default function LabsSection({ labs, difficulty, onLabSelect }: LabsSectionProps) {
  const getDifficultyColor = (diff: string) => {
    switch (diff.toLowerCase()) {
      case 'beginner': return 'green';
      case 'intermediate': return 'yellow';
      case 'advanced': return 'red';
      default: return 'gray';
    }
  };

  const getDifficultyDescription = (diff: string) => {
    switch (diff.toLowerCase()) {
      case 'beginner': return 'Perfect for those new to Ansible. Learn fundamental concepts and basic automation.';
      case 'intermediate': return 'Build upon your foundation with advanced features, roles, and best practices.';
      case 'advanced': return 'Master complex scenarios with enterprise-scale deployments and integrations.';
      default: return 'Comprehensive Ansible learning experience.';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <span className={`difficulty-badge difficulty-${getDifficultyColor(difficulty)} text-lg px-4 py-2`}>
            {difficulty} Level
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{difficulty} Ansible Labs</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {getDifficultyDescription(difficulty)}
        </p>
      </div>

      {/* Labs Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {labs.map((lab, index) => (
          <div
            key={lab.id}
            className="lab-card p-6 cursor-pointer transition-all duration-200 hover:scale-105"
            onClick={() => onLabSelect(lab)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded">
                  Lab {index + 1}
                </span>
                <span className={`difficulty-badge difficulty-${getDifficultyColor(lab.difficulty)}`}>
                  {lab.difficulty}
                </span>
              </div>
              <ArrowRight className="text-gray-400" size={16} />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
              {lab.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {lab.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Target size={14} />
                <span className="line-clamp-1">{lab.objective}</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock size={14} />
                <span>{lab.estimatedTime}</span>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Key Concepts:</h4>
                <div className="flex flex-wrap gap-1">
                  {lab.keyConcepts.slice(0, 3).map((concept, conceptIndex) => (
                    <span
                      key={conceptIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {concept}
                    </span>
                  ))}
                  {lab.keyConcepts.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{lab.keyConcepts.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
          <CheckCircle size={16} className="text-green-500" />
          <span>{labs.length} labs available in {difficulty} level</span>
        </div>
      </div>
    </div>
  );
}