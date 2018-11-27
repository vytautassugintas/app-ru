import { hints } from '../data'

export const isComplete = () => {
  const answeredHints = hints.filter(hint => !!localStorage.getItem(hint.id))
  return answeredHints.length === hints.length
}