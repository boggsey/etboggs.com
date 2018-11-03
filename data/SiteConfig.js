module.exports = {
  siteTitle: "Eric Boggs", // Site title.
  siteTitleShort: "Eric Boggs", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Web Developer in Cincinnati", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "http://etboggs.com", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-advanced-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Web Developer. Non-profit cofounder. Tech Instructor.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Eric Boggs", // Username to display in the author segment.
  userTwitter: "etboggs", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Cincinnati, Ohio", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription: "Hello",
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/boggsey",
      socialIcon: "social-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/etboggs",
      socialIcon: "social-twitter" 
    },
    {
      label: "Linkedin",
      url: "mailto:eric@mlemedia.com",
      socialIcon: "TiSocialLinkedIn"
    }
  ],
  copyright: "Copyright © 2018 Eric Boggs", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#000000", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
