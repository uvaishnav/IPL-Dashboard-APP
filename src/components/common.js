// eslint-disable-next-line import/prefer-default-export
export const formatDate = dateString => {
  const options = {year: 'numeric', month: 'short', day: 'numeric'}
  return new Date(dateString).toLocaleDateString('en-US', options)
}
