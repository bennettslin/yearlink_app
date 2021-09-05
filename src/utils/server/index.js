export const APP_TITLE = 'Bobtail Yearlink'
export const APP_DESCRIPTION =
    'Client-side URL shortener for the Bobtail Yearlings.'
export const APP_NAME = 'yearlink'
const APP_DOMAIN = APP_NAME.toLowerCase()

export const getIsRuntimeBuild = () => (
    process.env.BUILD === 'runtime'
)

export const getIsProductionBuild = () => (
    process.env.BUILD === 'production'
)

export const getFaviconFileName = () => {
    switch (process.env.DESTINATION) {
        case 'local':
            return `${APP_NAME}_local`
        default:
            return `${APP_NAME}`
    }
}

export const getS3BucketName = () => (
    `${APP_DOMAIN}--production`
)
