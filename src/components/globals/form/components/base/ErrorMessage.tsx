import React from 'react'

interface ErrorProps {
  message?: string
}

const Errormessage: React.FC<ErrorProps> = ({ message }) => {
  if (!message) return null

  return <div className="mt-1 text-xs text-red-500">{message}</div>
}

export default Errormessage
