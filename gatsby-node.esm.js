import links from './src/links'

export const createPages = ({ actions }) => {
    links.forEach(link => {
        actions.createPage({
            path: link.shortUrl,
            context: link,
            component: require.resolve('./src/containers/Page/index.jsx'),
        })
    })
}
