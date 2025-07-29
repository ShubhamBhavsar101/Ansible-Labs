import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LabsSection from './components/LabsSection';
import LabDetail from './components/LabDetail';
import SolutionsSection from './components/SolutionsSection';
import SolutionDetail from './components/SolutionDetail';
import { labs, solutions, Lab, Solution } from './data/labsData';

type AppState = {
  currentSection: string;
  selectedLab: Lab | null;
  selectedSolution: Solution | null;
  searchTerm: string;
};

function App() {
  const [state, setState] = useState<AppState>({
    currentSection: 'home',
    selectedLab: null,
    selectedSolution: null,
    searchTerm: ''
  });

  const handleNavigate = (section: string) => {
    setState(prev => ({
      ...prev,
      currentSection: section,
      selectedLab: null,
      selectedSolution: null
    }));
  };

  const handleLabSelect = (lab: Lab) => {
    setState(prev => ({
      ...prev,
      selectedLab: lab
    }));
  };

  const handleSolutionSelect = (solution: Solution) => {
    setState(prev => ({
      ...prev,
      selectedSolution: solution
    }));
  };

  const handleViewSolution = (labId: string) => {
    const solution = solutions.find(s => s.labId === labId);
    if (solution) {
      setState(prev => ({
        ...prev,
        currentSection: 'solution-detail',
        selectedSolution: solution,
        selectedLab: null
      }));
    }
  };

  const handleBack = () => {
    if (state.selectedLab) {
      setState(prev => ({
        ...prev,
        selectedLab: null
      }));
    } else if (state.selectedSolution) {
      setState(prev => ({
        ...prev,
        selectedSolution: null,
        currentSection: 'solutions'
      }));
    }
  };

  const handleSearchChange = (term: string) => {
    setState(prev => ({
      ...prev,
      searchTerm: term
    }));
  };

  const filteredLabs = useMemo(() => {
    if (!state.searchTerm) return labs;
    return labs.filter(lab =>
      lab.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      lab.description.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      lab.keyConcepts.some(concept =>
        concept.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    );
  }, [state.searchTerm]);

  const getLabsByDifficulty = (difficulty: string) => {
    return filteredLabs.filter(lab => lab.difficulty.toLowerCase() === difficulty.toLowerCase());
  };

  const renderContent = () => {
    if (state.selectedLab) {
      return (
        <LabDetail
          lab={state.selectedLab}
          onBack={handleBack}
          onViewSolution={handleViewSolution}
        />
      );
    }

    if (state.selectedSolution) {
      return (
        <SolutionDetail
          solution={state.selectedSolution}
          onBack={handleBack}
        />
      );
    }

    switch (state.currentSection) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'beginner':
        return (
          <LabsSection
            labs={getLabsByDifficulty('beginner')}
            difficulty="Beginner"
            onLabSelect={handleLabSelect}
          />
        );
      case 'intermediate':
        return (
          <LabsSection
            labs={getLabsByDifficulty('intermediate')}
            difficulty="Intermediate"
            onLabSelect={handleLabSelect}
          />
        );
      case 'advanced':
        return (
          <LabsSection
            labs={getLabsByDifficulty('advanced')}
            difficulty="Advanced"
            onLabSelect={handleLabSelect}
          />
        );
      case 'solutions':
        return (
          <SolutionsSection
            solutions={solutions}
            onSolutionSelect={handleSolutionSelect}
            searchTerm={state.searchTerm}
          />
        );
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentSection={state.currentSection}
        onNavigate={handleNavigate}
        searchTerm={state.searchTerm}
        onSearchChange={handleSearchChange}
      />
      <main className="pb-12">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;