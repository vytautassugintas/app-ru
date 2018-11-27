import React from 'react'

import { isComplete } from './utils'

export const Congratulations = () => {
  console.log(isComplete());
  if (!isComplete()) {
    return null
  }

  return (
    <div>
      <h1>Congratulations view</h1>
    </div>
  )
}
