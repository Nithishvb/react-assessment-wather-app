import React from 'react'

type ErrorTextProps = {
    error: string;
}

const ErrorText = ({ error }: ErrorTextProps) => {
  return (
    <div className="text-center p-4 text-red-600 font-bold" >{error}</div>
  )
}

export default ErrorText;