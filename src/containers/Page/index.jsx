import React from 'react'
import PropTypes from 'prop-types'
import Helmet from '../../components/Helmet'

const Page = ({
    pageContext: {
        longUrl = 'https://www.bobtailyearlings.com/',
    } = {},
}) => (
    <Helmet {...{ longUrl }} />
)

Page.propTypes = {
    pageContext: PropTypes.shape({
        longUrl: PropTypes.string,
    }),
}

export default Page
