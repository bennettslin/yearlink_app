import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactMarkdown from 'react-markdown'
import Anchor from '../Anchor'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import { getSmartQuotedText } from '../../utils/format/smartQuote'
import './style'

const Markdown = ({
    children,
}) => (
    <ReactMarkdown
        {...{
            className: cx(
                'Markdown',
            ),
            components: {
                a: Anchor,
                h1: ({ children }) => (
                    <Heading>{children}</Heading>
                ),
                h3: ({ children }) => (
                    <Heading {...{ level: 3 }}>{children}</Heading>
                ),
                h5: ({ children }) => (
                    <Heading {...{ level: 5 }}>{children}</Heading>
                ),
                p: Paragraph,
            },
        }}
    >
        {getSmartQuotedText(children)}
    </ReactMarkdown>
)

Markdown.propTypes = {
    children: PropTypes.string.isRequired,
}

export default Markdown
