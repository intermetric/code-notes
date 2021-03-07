module.exports = {
  siteMetadata: {
    title: "intermetric-code-notes",
    description: "Code notes",
    author: "Rando Leppik",
  },
  plugins: [
    {
      resolve: "gatsby-theme-code-notes",
      options: {
        contentPath: "notes",
        basePath: "/",
        showThemeInfo: false,
        showDescriptionInSidebar: true,
      },
    },
  ],
};
