import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ContextDiagnosticView } from './components/views/ContextDiagnosticView';
import { SystemArchetypeView } from './components/views/SystemArchetypeView';
import { CauseEffectMatrixView } from './components/views/CauseEffectMatrixView';
import { PositiveReinforcingLoopView } from './components/views/PositiveReinforcingLoopView';
import './App.css';

export function App() {
  // Tabs: 'silos' | 'archetype' | 'matrix' | 'reinforcing'
  const [activeTab, setActiveTab] = useState('silos');
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle dark/light theme on html element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Main App Content Area */}
      <div className="app-main-content">
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          searchQuery={searchQuery}
          onSearch={setSearchQuery}
        />

        <main className="view-content-wrapper">
          {activeTab === 'silos' && (
            <ContextDiagnosticView onNavigate={setActiveTab} />
          )}

          {activeTab === 'archetype' && (
            <SystemArchetypeView onNavigate={setActiveTab} />
          )}

          {activeTab === 'matrix' && (
            <CauseEffectMatrixView />
          )}

          {activeTab === 'reinforcing' && (
            <PositiveReinforcingLoopView />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
