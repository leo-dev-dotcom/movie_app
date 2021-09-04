import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1
    `text-align:center;
    color:#393E46;
text-shadow: 4px 4px 2px rgba(0,0,0,0.95);`
const P = styled.p
    `text-align:center`
const Heading = () => {

    return (
        <>
            <H1>Movie App </H1>
            <P>Are you looking for Movie or an Actor?</P>
        </>
    )
}

export default Heading
