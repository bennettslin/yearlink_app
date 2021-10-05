import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const Anchor = ({
    href,
    children,

}) => {
    return (
        <a
            {...{
                className: cx(
                    'Anchor',
                    'colour__link',
                ),
                href,
                target: '_blank',
            }}
        >
            {children}
        </a>
    )
}

Anchor.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Anchor
