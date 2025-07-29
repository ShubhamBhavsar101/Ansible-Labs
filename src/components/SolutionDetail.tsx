import React from 'react';
import { ArrowLeft, Code, Lightbulb, AlertTriangle, Copy, CheckCircle } from 'lucide-react';
import { Solution } from '../data/labsData';

interface SolutionDetailProps {
  solution: Solution;
  onBack: () => void;
}

export default function SolutionDetail({ solution, onBack }: SolutionDetailProps) {
  const [copiedSteps, setCopiedSteps] = React.useState<Set<number>>(new Set());

  const getDifficultyColor = (diff: string) => {
    switch (diff.toLowerCase()) {
      case 'beginner': return 'green';
      case 'intermediate': return 'yellow';
      case 'advanced': return 'red';
      default: return 'gray';
    }
  };

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedSteps(prev => new Set(prev).add(stepIndex));
    setTimeout(() => {
      setCopiedSteps(prev => {
        const newSet = new Set(prev);
        newSet.delete(stepIndex);
        return newSet;
      });
    }, 2000);
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
          <span>Back to Solutions</span>
        </button>

        <div className="flex items-center space-x-3 mb-4">
          <span className={`difficulty-badge difficulty-${getDifficultyColor(solution.difficulty)}`}>
            {solution.difficulty}
          </span>
          <Code className="text-gray-600" size={20} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Solution: {solution.title}</h1>
        <p className="text-lg text-gray-600">Complete step-by-step walkthrough with code examples and explanations.</p>
      </div>

      {/* Step-by-Step Walkthrough */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Walkthrough</h2>
        <div className="space-y-6">
          {solution.walkthrough.map((step, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{step.description}</h3>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {step.code && (
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Code:</span>
                      <button
                        onClick={() => copyToClipboard(step.code!, index)}
                        className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700"
                      >
                        {copiedSteps.has(index) ? (
                          <>
                            <CheckCircle size={14} className="text-green-500" />
                            <span className="text-green-500">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="code-block">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                )}

                {step.command && (
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Command:</span>
                      <button
                        onClick={() => copyToClipboard(step.command!, index + 1000)}
                        className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700"
                      >
                        {copiedSteps.has(index + 1000) ? (
                          <>
                            <CheckCircle size={14} className="text-green-500" />
                            <span className="text-green-500">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm overflow-x-auto">
                      <code>$ {step.command}</code>
                    </pre>
                  </div>
                )}

                {step.explanation && (
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="text-gray-700">{step.explanation}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Common Pitfalls */}
      {solution.commonPitfalls.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="text-red-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Common Pitfalls & Troubleshooting</h2>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <ul className="space-y-3">
              {solution.commonPitfalls.map((pitfall, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <AlertTriangle className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-700">{pitfall}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Best Practices */}
      {solution.bestPractices.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Lightbulb className="text-green-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Best Practices</h2>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <ul className="space-y-3">
              {solution.bestPractices.map((practice, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-700">{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-center pt-8">
        <button
          onClick={onBack}
          className="btn-secondary"
        >
          Back to All Solutions
        </button>
      </div>
    </div>
  );
}