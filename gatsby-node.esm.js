import pages from './src/utils/gatsby/pages'

export const createPages = ({ actions }) => {
    pages.forEach(({
        path,
        longUrl,
    }) => {
        actions.createPage({
            path,
            context: {
                longUrl,
            },
            component: require.resolve('./src/containers/Page/index.jsx'),
        })
    })
}
