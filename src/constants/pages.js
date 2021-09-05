const DOMAIN_NAME = `https://www.yearl.ink`
const DOMAIN_NAME_SHORT = `yearl.ink`

export const getPathForPage = page => (
    page ? `/${page}` : ''
)

export const getUrlForFile = filePath => (
    `${DOMAIN_NAME}${getPathForPage(filePath)}`
)

export const getShortUrlForFile = filePath => (
    `${DOMAIN_NAME_SHORT}${getPathForPage(filePath)}`
)

export const getFormattedUrl = url => (
    url
        .replace('https:', '')
        .replace('//www.', '')
        .replace('//', '')
        .replace(/\/$/, '') // Remove trailing slash
)
