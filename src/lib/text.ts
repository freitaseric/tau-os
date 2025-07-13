export const upperHumanize = (content: string) => {
  return content
    .toLowerCase()
    .replace(/-/g, ' ')
    .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase())
}

export const lowerHumanize = (content: string) => {
  return content.toLowerCase().replace(/-/g, ' ')
}
