import React, { useState } from 'react'
import { db } from '../../firebase/firebaseConfig'
import { collection, getDocs, writeBatch, doc } from 'firebase/firestore'
import { initialOffers } from '../../data/admin/offersData'
import { Database } from 'lucide-react'

const SeedOffersButton = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSeed = async () => {
    if (!window.confirm('This will seed the offers collection with initial data. Continue?')) {
      return
    }

    setLoading(true)
    setMessage('')

    try {
      // Check if offers collection already has data
      const offersRef = collection(db, 'offers')
      const snapshot = await getDocs(offersRef)
      
      if (!snapshot.empty) {
        if (!window.confirm('Offers collection already has data. Do you want to overwrite it?')) {
          setLoading(false)
          return
        }
      }

      const batch = writeBatch(db)

      // Add initial offers
      initialOffers.forEach((offer) => {
        const docRef = doc(collection(db, 'offers'))
        batch.set(docRef, offer)
      })

      await batch.commit()
      setMessage('✅ Offers seeded successfully! Refresh the page to see changes.')
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (error) {
      console.error('Error seeding offers:', error)
      setMessage('❌ Failed to seed offers: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '20px', borderBottom: '1px solid #e5e7eb' }}>
      <button
        onClick={handleSeed}
        disabled={loading}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 20px',
          backgroundColor: loading ? '#9ca3af' : '#059669',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}
      >
        <Database size={18} />
        {loading ? 'Seeding...' : 'Seed Offers Collection'}
      </button>
      {message && (
        <div style={{
          marginTop: '10px',
          padding: '10px',
          backgroundColor: message.includes('✅') ? '#d1fae5' : '#fee2e2',
          color: message.includes('✅') ? '#065f46' : '#991b1b',
          borderRadius: '6px',
          fontSize: '14px'
        }}>
          {message}
        </div>
      )}
    </div>
  )
}

export default SeedOffersButton
