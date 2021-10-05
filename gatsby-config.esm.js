import {
    APP_DESCRIPTION,
    APP_TITLE,
    getFaviconFileName,
    getS3BucketName,
} from './src/utils/server'

export default {
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: APP_TITLE,
                short_name: APP_TITLE,
                description: APP_DESCRIPTION,
                start_url: '/',
                background_color: '#99e1d9',
                theme_color: '#5d576b',
                display: 'standalone',
                icon: `src/assets/favicon/${getFaviconFileName()}.png`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: getS3BucketName(),
            },
        },
    ],
}
