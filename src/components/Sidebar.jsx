import React from 'react';
import { 
  AlertTriangle, 
  Network, 
  LayoutGrid, 
  Repeat, 
  MoreVertical 
} from 'lucide-react';
import { SYSTEM_DATA } from '../data/systemData';

export function Sidebar({ activeTab, onSelectTab }) {
  const { organization } = SYSTEM_DATA;

  const navItems = [
    {
      id: 'silos',
      label: 'Contexto y Diagnóstico (Silos)',
      icon: AlertTriangle,
      color: '#f59e0b'
    },
    {
      id: 'archetype',
      label: 'Arquetipo Sistémico',
      icon: Network,
      color: '#6366f1'
    },
    {
      id: 'matrix',
      label: 'Matriz Causa-Efecto y 4D',
      icon: LayoutGrid,
      color: '#8b5cf6'
    },
    {
      id: 'reinforcing',
      label: 'Bucle de Refuerzo Positivo',
      icon: Repeat,
      color: '#10b981'
    }
  ];

  return (
    <aside className="app-sidebar">
      {/* Brand & Logo */}
      <div className="sidebar-brand">
        <div className="brand-logo-icon">
          <svg viewBox="0 0 32 32" width="26" height="26" fill="none">
            <circle cx="10" cy="12" r="6" stroke="#6366f1" strokeWidth="2.5" />
            <circle cx="22" cy="12" r="6" stroke="#8b5cf6" strokeWidth="2.5" />
            <circle cx="16" cy="22" r="6" stroke="#10b981" strokeWidth="2.5" />
          </svg>
        </div>
        <div className="brand-texts">
          <h2 className="brand-title">TecnoServicios</h2>
          <span className="brand-sub">Globales S.A. • ITIL 4</span>
        </div>
      </div>

      {/* Navigation Group */}
      <div className="sidebar-section">
        <div className="sidebar-section-header">
          <span className="section-title">PERSPECTIVAS SVS</span>
          <span className="status-indicator-dot"></span>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
              >
                <div className="nav-item-content">
                  <Icon size={18} className="nav-icon" />
                  <span className="nav-label">{item.label}</span>
                </div>
                {isActive && <div className="active-pill-bar"></div>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Footer: User Details */}
      <div className="sidebar-footer">
        <div className="sidebar-user-card">
          <img
            src={organization.currentUser.avatar}
            alt={organization.currentUser.name}
            className="sidebar-avatar"
          />
          <div className="sidebar-user-info">
            <span className="sidebar-user-name">{organization.currentUser.name}</span>
            <span className="sidebar-user-role">{organization.currentUser.role}</span>
          </div>
          <button className="user-menu-btn" title="Opciones">
            <MoreVertical size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
