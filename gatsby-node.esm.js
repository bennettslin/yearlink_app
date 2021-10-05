import webpack from 'webpack'
import {
    getIsProductionBuild,
    getIsRuntimeBuild,
} from './src/utils/server'
import pages from './src/utils/gatsby/pages'

export const createPages = ({ actions }) => {
    pages.forEach(page => {
        actions.createPage({
            ...page,
            component: require.resolve('./src/containers/Page/index.jsx'),
        })
    })
}

export const onCreateWebpackConfig = ({ actions }) => {

    // Get primitive value of current date and time.
    const buildDateTime = new Date().valueOf()

    actions.setWebpackConfig({
        plugins: [
            // Define global constant at compile time.
            new webpack.DefinePlugin({
                BUILD_DATE_TIME: buildDateTime,
                IS_RUNTIME: getIsRuntimeBuild(),
                IS_PRODUCTION: getIsProductionBuild(),
            }),
        ],
        resolve: {
            // Import from files without specifying extensions.
            extensions: ['.js', '.jsx', '.scss', '.svg'],
        },
    })
}
