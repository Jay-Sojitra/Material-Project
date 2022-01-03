import { Heading } from '@chakra-ui/react'
import React from 'react'
import DefaultLayout from './DefaultLayout'


function Home() {
    return (
        // <div className ='container'>
        <DefaultLayout>
            <Heading>I'm a Heading</Heading>
        </DefaultLayout>
        // </div >
    )
}

export default Home
