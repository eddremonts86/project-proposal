import React from 'react'

interface ErrorProps {
  message?: string
}

const Errormessage: React.FC<ErrorProps> = ({ message }) => {
  return message && <p className="mt-1 text-xs text-red-500">{message}</p>
}

export default Errormessage
