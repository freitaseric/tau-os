export default {
  site:
    process.env.NODE_ENV === 'production'
      ? 'https://tau-os.freitaseric.com'
      : 'http://localhost:4321',
  rss: {
    title: 'TauOS Blog',
    description: 'See behind the scenes of TauOS development.',
  },
} as const
