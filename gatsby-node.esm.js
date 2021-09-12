import pages from './src/utils/gatsby/pages'

export const createPages = ({ actions }) => {
    pages.forEach(page => {
        actions.createPage({
            ...page,
            component: require.resolve('./src/containers/Page/index.jsx'),
        })
    })
}
