const YEARLINK_DOMAIN = `https://www.yearl.ink`
const YEARLINK_SHORT_DOMAIN = `yearl.ink`

export const getPathForPage = page => (
    page ? `/${page}` : ''
)

export const getUrlForFile = filePath => (
    `${YEARLINK_DOMAIN}${getPathForPage(filePath)}`
)

export const getShortUrlForFile = filePath => (
    `${YEARLINK_SHORT_DOMAIN}${getPathForPage(filePath)}`
)

export const getFormattedUrl = url => (
    url
        .replace('https:', '')
        .replace('//www.', '')
        .replace('//', '')
        .replace(/\/$/, '') // Remove trailing slash
)
