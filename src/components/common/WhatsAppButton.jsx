import { MessageCircle } from 'lucide-react'
import './WhatsAppButton.css'

const WhatsAppButton = () => {
  const phoneNumber = '1234567890'
  const message = 'Hello! I would like to inquire about your services.'

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button className="whatsapp-button" onClick={handleClick} aria-label="Contact on WhatsApp">
      <MessageCircle size={28} />
    </button>
  )
}

export default WhatsAppButton
