import React from 'react'
import Page from '../../containers/Page'

const Test = () => (
    <Page
        {...{
            shortUrl: 'test',
            longUrl: 'https://www.yearlingsbobtail.com/',
        }}
    />
)

export default Test
