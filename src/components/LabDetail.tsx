import React from 'react';
import { ArrowLeft, Clock, Target, BookOpen, CheckSquare, AlertCircle, Play } from 'lucide-react';
import { Lab } from '../data/labsData';

interface LabDetailProps {
  lab: Lab;
  onBack: () => void;
  onViewSolution: (labId: string) => void;
}

export default function LabDetail({ lab, onBack, onViewSolution }: LabDetailProps) {
  const getDifficultyColor = (diff: string) => {
    switch (diff.toLowerCase()) {
      case 'beginner': return 'green';
      case 'intermediate': return 'yellow';
      case 'advanced': return 'red';
      default: return 'gray';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-4"
        >
          <ArrowLeft size={16} />
          <span>Back to {lab.difficulty} Labs</span>
        </button>

        <div className="flex items-center space-x-3 mb-4">
          <span className={`difficulty-badge difficulty-${getDifficultyColor(lab.difficulty)}`}>
            {lab.difficulty}
          </span>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Clock size={14} />
            <span>{lab.estimatedTime}</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">{lab.title}</h1>
        <p className="text-lg text-gray-600">{lab.description}</p>
      </div>

      {/* Lab Content */}
      <div className="space-y-8">
        {/* Objective */}
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-3">
            <Target className="text-blue-600" size={20} />
            <h2 className="text-lg font-semibold text-gray-900">Lab Objective</h2>
          </div>
          <p className="text-gray-700">{lab.objective}</p>
        </div>

        {/* Key Concepts */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <BookOpen className="text-gray-600" size={20} />
            <h2 className="text-lg font-semibold text-gray-900">Key Concepts Covered</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {lab.keyConcepts.map((concept, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <AlertCircle className="text-orange-600" size={20} />
            <h2 className="text-lg font-semibold text-gray-900">Prerequisites</h2>
          </div>
          <ul className="space-y-2">
            {lab.prerequisites.map((prereq, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckSquare className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-gray-700">{prereq}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tasks */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Play className="text-green-600" size={20} />
            <h2 className="text-lg font-semibold text-gray-900">Lab Tasks</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {lab.tasks.map((task, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <div className="flex items-start space-x-4 p-4">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900">{task}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Outcome */}
        <div className="bg-green-50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-3">
            <CheckSquare className="text-green-600" size={20} />
            <h2 className="text-lg font-semibold text-gray-900">Expected Outcome</h2>
          </div>
          <p className="text-gray-700">{lab.expectedOutcome}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 pt-8">
          <button
            onClick={() => onViewSolution(lab.id)}
            className="btn-secondary"
          >
            View Solution
          </button>
          <button className="btn-primary">
            Mark as Complete
          </button>
        </div>
      </div>
    </div>
  );
}