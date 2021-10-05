import React from 'react'
import PropTypes from 'prop-types'
import { Helmet as ReactHelmet } from 'react-helmet'
import {
    getMetaTitle,
    getMetaTags,
} from './helper'

const Helmet = ({ longUrl }) => (
    <ReactHelmet>
        {/* This redirects to the URL. */}
        {longUrl && (
            <meta
                {...{
                    'http-equiv': 'refresh',
                    content: `0; url=${longUrl}`,
                }}
            />
        )}
        {/* ReactHelmet doesn't like React Fragments. */}
        {!longUrl && (
            <title>
                {getMetaTitle()}
            </title>
        )}
        {!longUrl && (
            getMetaTags().map(({
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
            ))
        )}
    </ReactHelmet>
)

Helmet.propTypes = {
    longUrl: PropTypes.string,
}

export default Helmet
