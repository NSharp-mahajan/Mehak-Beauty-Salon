import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Scissors, BookOpen, ImageIcon, Tag, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'
import './AdminDashboard.css'

const AdminDashboard = () => {
  const navigate = useNavigate()

  const stats = [
    { title: 'Total Services', value: '24', icon: Scissors, color: '#f3a683' },
    { title: 'Total Courses', value: '8', icon: BookOpen, color: '#f8a5c2' },
    { title: 'Gallery Images', value: '156', icon: ImageIcon, color: '#778beb' },
    { title: 'Active Offers', value: '3', icon: Tag, color: '#e77f67' },
    { title: 'New Enquiries', value: '12', icon: MessageSquare, color: '#cf6a87' }
  ]

  const quickActions = [
    { label: 'Manage Services', icon: Scissors, path: '/admin/services' },
    { label: 'Manage Courses', icon: BookOpen, path: '/admin/courses' },
    { label: 'Update Gallery', icon: ImageIcon, path: '/admin/gallery' },
    { label: 'View Enquiries', icon: MessageSquare, path: '/admin/enquiries' }
  ]

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h2>Welcome Back, Admin</h2>
        <p>Here is what's happening at Mehak Salon & Spa today.</p>
      </div>

      {/* Stats Grid */}
      <div className="dashboard-stats-grid">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.title}
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="stat-card-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
              <stat.icon size={24} />
            </div>
            <div className="stat-card-content">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="dashboard-sections">
        {/* Quick Actions */}
        <div className="dashboard-section">
          <h3>Quick Actions</h3>
          <div className="quick-actions-grid">
            {quickActions.map((action, index) => (
              <motion.button
                key={action.label}
                className="quick-action-btn"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => navigate(action.path)}
              >
                <action.icon size={20} />
                <span>{action.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Recent Activity Placeholder */}
        <div className="dashboard-section">
          <h3>Recent Activity</h3>
          <div className="activity-card">
            <div className="activity-empty">
              <MessageSquare size={32} opacity={0.2} />
              <p>No recent activity to show.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
