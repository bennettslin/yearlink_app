import { getFormattedUrl, getUrlForFile } from '../../constants/pages'

export const getMetaTitle = () => (
    `A Bobtail Yearlink!`
)

export const getMetaDescription = longUrl => (
    `Link to ${getFormattedUrl(longUrl)}`
)

// const getDefaultConfig = description => ({
//     description: getMetaDescription(description),
// })

const getFacebookConfig = longUrl => ({
    'og:url': longUrl,
    'og:type': 'website',
    'og:title': getMetaTitle(),
    'og:description': getMetaDescription(longUrl),
    'og:image': getUrlForFile(`share/image/facebook/bobtailYearlings.png`),
})

const getTwitterConfig = longUrl => ({
    'twitter:card': 'summary',
    'twitter:site': '@BobtailYearling',
    'twitter:title': getMetaTitle(),
    'twitter:description': getMetaDescription(longUrl),
    'twitter:image':
        getUrlForFile(`share/image/twitter/bobtailYearlings.png`),
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
