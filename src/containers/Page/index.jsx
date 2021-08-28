import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'
// import Anchor from '../../components/Anchor'
import Helmet from '../../components/Helmet'
// import './style'
// import { getShortUrlForFile } from '../../constants/pages'

const Page = ({
    // shortUrl,
    longUrl = 'https://www.bobtailyearlings.com/',
}) => (
    <>
        <Helmet {...{ longUrl }} />
        {/* <div
            {...{
                className: cx(
                    'Page',
                    'font__text',
                ),
            }}
        >

            <Anchor {...{ href: longUrl }}>
                {getShortUrlForFile(shortUrl)}
            </Anchor>
        </div> */}
    </>
)

Page.propTypes = {
    shortUrl: PropTypes.string,
    longUrl: PropTypes.string,
}

export default Page
