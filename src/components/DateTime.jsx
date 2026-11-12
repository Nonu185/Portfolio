import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [dateStr, setDateStr] = useState('')
  const [timeStr, setTimeStr] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setDateStr(now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }))
      setTimeStr(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }))
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="datetime-wrap">
      <span className="datebox">{dateStr}</span>
      <span className="clock">{timeStr}</span>
    </div>
  )
}

export default DateTime
