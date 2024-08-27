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
        extend: {},
    },
    plugins: []
  }