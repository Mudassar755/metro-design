/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const portfolio = require("./src/content/portfolio")

exports.createPages = ({ actions: { createPage } }) => {
  portfolio.projects.forEach((project, index) => {
    const isLast = index === portfolio.projects.length - 1
    const nextIndex = isLast ? 0 : index + 1
    const nextPage = {
      url: `/project/${nextIndex}`,
      title: portfolio.projects[nextIndex].title,
      image: `https://res.cloudinary.com/metrodesign/image/upload${portfolio.projects[nextIndex].images[0]}`,
      backgroundColor: portfolio.projects[nextIndex].backgroundColor,
    }

    createPage({
      path: `/project/${index}`,
      component: path.resolve("./src/components/ProjectPage/index.js"),
      context: {
        content: project,
        nextPage,
      },
    })
  })
}
