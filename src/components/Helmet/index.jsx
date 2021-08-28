import React from 'react'
import PropTypes from 'prop-types'
import { Helmet as ReactHelmet } from 'react-helmet'
import {
    getMetaTitle,
    getMetaTags,
} from './helper'

const Helmet = ({
    longUrl,
}) => {
    return (
        <ReactHelmet>
            <title>
                {getMetaTitle()}
            </title>
            <meta
                {...{
                    'http-equiv': 'refresh',
                    content: `0; url=${longUrl}`,
                }}
            />
            {getMetaTags(longUrl).map(({
                name,
                property,
                content,
            }) => (
                <meta
                    {...{
                        key: name || property,
                        ...name && { name },
                        ...property && { property },
                        content,
                    }}
                />
            ))}
        </ReactHelmet>
    )
}

Helmet.propTypes = {
    longUrl: PropTypes.string.isRequired,
}

export default Helmet
