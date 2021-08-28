import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const Anchor = ({
    href,
    children,
}) => (
    <a
        {...{
            className: cx(
                'Anchor',
            ),
            href,
        }}
    >
        {children}
    </a>
)

Anchor.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Anchor
