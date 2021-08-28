import { getFaviconFileName } from './src/utils/server'

export default {
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Bobtail Yearlink`,
                short_name: `Bobtail Yearlink`,
                description: 'URL shortener for the Bobtail Yearlings',
                start_url: '/',
                background_color: '#e6e6ad',
                theme_color: '#b38e6b',
                display: 'standalone',
                icon: `src/assets/favicon/${getFaviconFileName()}.png`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-remove-trailing-slashes`,
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: 'yearlink--production',
            },
        },
    ],
}
