import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../components/Flex'
import Helmet from '../../components/Helmet'
import Markdown from '../../components/Markdown'
import './style'

const Page = ({ pageContext: { longUrl } = {} }) => (
    <>
        <Helmet {...{ longUrl }} />
        {!longUrl && (
            <Flex
                {...{
                    className: cx(
                        'Page',
                        'font__text',
                        'fontSize__md',
                    ),
                }}
            >
                <Markdown>
                    {`
# Bobtail Yearlinks

[*Bobtail Yearlings*](https://www.bobtailyearlings.com/)${'  '}
Our band website.

[*Yearling's Bobtail*](https://www.yearlingsbobtail.com/)${'  '}
Our "*Ulysses* of rock albums."

[*Bobtail Dominoes*](https://www.bobtaildominoes.com/)${'  '}
Our musical tile game.

[*BYCombo*](https://www.bycombo.com/)${'  '}
Our rock band incubator.

[*Bobtail Method*](https://www.bobtailmethod.com/)${'  '}
Our songwriting lesson book.
                    `}
                </Markdown>
            </Flex>
        )}
    </>
)

Page.propTypes = {
    pageContext: PropTypes.shape({
        longUrl: PropTypes.string,
    }),
}

export default Page
