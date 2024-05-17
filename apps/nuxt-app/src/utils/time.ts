export const formatTime = (duration?: number) => {
  if (!duration) {
    return '1 hour'
  }

  const days: number = Math.floor(duration / (24 * 60))
  const hours: number = Math.floor((duration % (24 * 60)) / 60)
  const minutes: number = duration % 60
  const result = `${days ? days + ' days' : ''} ${hours ? hours + ' hours' : ''} ${minutes ? minutes + ' minutes' : ''}`
  return result.trim()
}
