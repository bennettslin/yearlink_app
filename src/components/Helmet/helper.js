import { getShortUrlForFile, getUrlForFile } from '../../constants/pages'
import { TWITTER_ACCOUNT } from '../../constants/socialMedia'
import { APP_NAME } from '../../utils/server'

export const getMetaTitle = () => (
    `Bobtail Yearlinks`
)

export const getMetaDescription = () => (
    `A list of links associated with the band Bobtail Yearlings.`
)

const getDefaultConfig = () => ({
    description: getMetaDescription(),
})

const getFacebookConfig = () => ({
    'og:url': getShortUrlForFile(),
    'og:type': 'website',
    'og:title': getMetaTitle(),
    'og:description': getMetaDescription(),
    'og:image': getUrlForFile(`share/image/facebook/${APP_NAME}.png`),
})

const getTwitterConfig = () => ({
    'twitter:card': 'summary',
    'twitter:site': `@${TWITTER_ACCOUNT}`,
    'twitter:title': getMetaTitle(),
    'twitter:description': getMetaDescription(),
    'twitter:image':
        getUrlForFile(`share/image/twitter/${APP_NAME}.png`),
})

const spreadHelmetConfig = ({ config, nameKey }) => (
    Object.keys(config).map(key => ({
        [nameKey]: key,
        content: config[key],
    }))
)

export const getMetaTags = () => ([
    ...spreadHelmetConfig({
        config: {
            ...getDefaultConfig(),
            ...getTwitterConfig(),
        },
        nameKey: 'name',
    }),
    ...spreadHelmetConfig({
        config: getFacebookConfig(),
        nameKey: 'property',
    }),
])
