export const onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            // Import from files without specifying extensions.
            extensions: ['.js', '.jsx', '.scss'],
        },
    })
}
