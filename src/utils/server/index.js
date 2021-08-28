export const getFaviconFileName = () => {
    switch (process.env.DESTINATION) {
        case 'local':
            return 'bobtailYearlink_local'
        default:
            return 'bobtailYearlink'
    }
}
