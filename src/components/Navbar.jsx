import React, { useState } from 'react';
import { Search, Moon, Sun, Bell, HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SYSTEM_DATA } from '../data/systemData';

export function Navbar({ theme, onToggleTheme, onSearch, searchQuery }) {
  const { organization } = SYSTEM_DATA;
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="app-header">
      {/* Left: Organization & Subtitle */}
      <div className="header-left">
        <div className="header-titles">
          <span className="org-title">{organization.name}</span>
          <span className="divider">/</span>
          <span className="org-subtitle">{organization.subtitle}</span>
        </div>

        {/* Live Simulation Badge */}
        <div className="sim-status-badge">
          <span className="pulse-dot"></span>
          <span>{organization.statusBadge}</span>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="header-search">
        <div className="search-input-wrapper">
          <Search size={15} className="search-icon" />
          <input
            type="text"
            placeholder="Buscar principio, causa o dimensión..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="search-clear-btn" onClick={() => onSearch('')}>
              ×
            </button>
          )}
        </div>
      </div>

      {/* Right: Actions & User */}
      <div className="header-actions">
        {/* Theme Toggle */}
        <button
          className="icon-action-btn"
          onClick={onToggleTheme}
          title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        {/* Help */}
        <button className="icon-action-btn" title="Guía y Documentación ITIL 4">
          <HelpCircle size={17} />
        </button>

        {/* Notifications */}
        <div className="notification-wrapper">
          <button
            className="icon-action-btn"
            title="Notificaciones de Auditoría"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
          >
            <Bell size={17} />
            <span className="notification-badge"></span>
          </button>

          {notificationsOpen && (
            <div className="notification-popover">
              <div className="notif-header">
                <strong>Alertas de Auditoría SVS</strong>
                <span className="notif-count">3 activas</span>
              </div>
              <div className="notif-item critical">
                <span className="notif-indicator"></span>
                <div>
                  <p className="notif-title">SLA por debajo de umbral crítico</p>
                  <p className="notif-time">54.2% registrado en Q2 Pre-ITIL</p>
                </div>
              </div>
              <div className="notif-item">
                <span className="notif-indicator green"></span>
                <div>
                  <p className="notif-title">Simulación Bucle R1 en convergencia</p>
                  <p className="notif-time">Estabilidad calculada en +98.2%</p>
                </div>
              </div>
              <div className="notif-item">
                <span className="notif-indicator purple"></span>
                <div>
                  <p className="notif-title">Gobernanza 4D evaluada</p>
                  <p className="notif-time">Madurez global del servicio en 92.2%</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Card */}
        <div className="header-user">
          <img
            src={organization.currentUser.avatar}
            alt={organization.currentUser.name}
            className="user-avatar"
          />
          <div className="user-details">
            <span className="user-name">{organization.currentUser.name}</span>
            <span className="user-role">{organization.currentUser.role}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
