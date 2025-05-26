module.exports = {
    // new directories need to go into the content array
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.md',
      './*.markdown',
      './*.html',
    ],
    theme: {
        fontFamily: {
          heading: ['DM Serif Display', 'sans-serif'],
        },
        extend: {
          colors: {
            primary: '#78290F',
            beige: '#FFECD1',
            teal: '#145B66',
            plat: '#DCDEE0',
          },
        },
    },
    plugins: []
  }