import React from 'react';
import { Search, BookOpen, Code, Lightbulb, AlertTriangle } from 'lucide-react';
import { Solution } from '../data/labsData';

interface SolutionsSectionProps {
  solutions: Solution[];
  onSolutionSelect: (solution: Solution) => void;
  searchTerm: string;
}

export default function SolutionsSection({ solutions, onSolutionSelect, searchTerm }: SolutionsSectionProps) {
  const filteredSolutions = solutions.filter(solution =>
    solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    solution.difficulty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDifficultyColor = (diff: string) => {
    switch (diff.toLowerCase()) {
      case 'beginner': return 'green';
      case 'intermediate': return 'yellow';
      case 'advanced': return 'red';
      default: return 'gray';
    }
  };

  const groupedSolutions = filteredSolutions.reduce((acc, solution) => {
    if (!acc[solution.difficulty]) {
      acc[solution.difficulty] = [];
    }
    acc[solution.difficulty].push(solution);
    return acc;
  }, {} as Record<string, Solution[]>);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-orange-100 rounded-full">
            <Lightbulb className="h-12 w-12 text-orange-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Lab Solutions & Hints</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive step-by-step solutions for all labs with detailed explanations, 
          code examples, and troubleshooting tips.
        </p>
      </div>

      {/* Warning Notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <h3 className="text-sm font-medium text-yellow-800">Learning Recommendation</h3>
            <p className="text-sm text-yellow-700 mt-1">
              Try completing the labs on your own first before viewing the solutions. 
              This will help you develop problem-solving skills and better understand Ansible concepts.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions by Difficulty */}
      {Object.entries(groupedSolutions).map(([difficulty, solutions]) => (
        <div key={difficulty} className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <span className={`difficulty-badge difficulty-${getDifficultyColor(difficulty)} text-lg px-4 py-2`}>
              {difficulty}
            </span>
            <h2 className="text-2xl font-bold text-gray-900">{difficulty} Solutions</h2>
            <span className="text-gray-500">({solutions.length} solutions)</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.labId}
                className="lab-card p-6 cursor-pointer transition-all duration-200 hover:scale-105"
                onClick={() => onSolutionSelect(solution)}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`difficulty-badge difficulty-${getDifficultyColor(solution.difficulty)}`}>
                    {solution.difficulty}
                  </span>
                  <Code className="text-gray-400" size={16} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {solution.title}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <BookOpen size={14} />
                    <span>{solution.walkthrough.length} step walkthrough</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Lightbulb size={14} />
                    <span>{solution.bestPractices.length} best practices</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <AlertTriangle size={14} />
                    <span>{solution.commonPitfalls.length} common pitfalls</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-sm text-blue-600 font-medium hover:text-blue-800">
                    View Complete Solution →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {filteredSolutions.length === 0 && searchTerm && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No solutions found</h3>
          <p className="text-gray-600">
            Try adjusting your search terms or browse all solutions above.
          </p>
        </div>
      )}
    </div>
  );
}