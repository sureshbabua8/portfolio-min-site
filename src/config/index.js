module.exports = {

    author: "Amirthavarshini Sureshbabu",
    siteTitle: "Amirtha Sureshbabu Portfolio",
    siteShortTitle: "Amirtha Sureshbabu", // Used as logo text in header, footer, and splash screen
    siteDescription: "Amirtha's one page portfolio",
    siteUrl: "https://amirthav.me/",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40amirthasureshbabu",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/amirthasur/"
        },
        {
            name: "Github",
            url: "https://github.com/sureshbabua8"
        },
        {
            name: "Email",
            url: "mailto:amirthasureshbabu@gmail.com"
        },
        {
            name: "Resume",
            url: "https://drive.google.com/file/d/1qVbOUtnwFgsUYagMPxnY5UMxOl29tgW_/view?usp=sharing"
        }
    ],
  
    navLinks: {
        menu: [
            
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Experiences",
                url: "/#experiences",
            },
            {
                name: "Projects",
                url: "/#involvement",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}