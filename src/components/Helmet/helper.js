import { getFormattedUrl, getUrlForFile } from '../../constants/pages'
import { TWITTER_ACCOUNT } from '../../constants/socialMedia'
import { APP_NAME } from '../../utils/server'

export const getMetaTitle = () => (
    `A Bobtail Yearlink!`
)

export const getMetaDescription = longUrl => (
    `Link to: ${getFormattedUrl(longUrl)}`
)

// const getDefaultConfig = description => ({
//     description: getMetaDescription(description),
// })

const getFacebookConfig = longUrl => ({
    'og:url': longUrl,
    'og:type': 'website',
    'og:title': getMetaTitle(),
    'og:description': getMetaDescription(longUrl),
    'og:image': getUrlForFile(`share/image/facebook/${APP_NAME}.png`),
})

const getTwitterConfig = longUrl => ({
    'twitter:card': 'summary',
    'twitter:site': TWITTER_ACCOUNT,
    'twitter:title': getMetaTitle(),
    'twitter:description': getMetaDescription(longUrl),
    'twitter:image':
        getUrlForFile(`share/image/twitter/${APP_NAME}.png`),
})

const spreadHelmetConfig = ({ config, nameKey }) => (
    Object.keys(config).map(key => ({
        [nameKey]: key,
        content: config[key],
    }))
)

export const getMetaTags = longUrl => ([
    ...spreadHelmetConfig({
        config: {
            // ...getDefaultConfig(longUrl),
            ...getTwitterConfig(longUrl),
        },
        nameKey: 'name',
    }),
    ...spreadHelmetConfig({
        config: getFacebookConfig(longUrl),
        nameKey: 'property',
    }),
])
