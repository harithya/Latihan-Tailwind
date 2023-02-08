import React from 'react'
import Container from '../components/Layout/Container'

const HorizontalScroll = () => {
    return (
        <Container>
            <div className='flex space-x-5 overflow-x-auto w-full pb-10'>
                {Array(10).fill(0).map((_, i) => <Card key={i} />)}
            </div>
        </Container>
    )
}

const Card = () => {
    return (
        <div className='h-40 w-52 rounded-md bg-blue-300 flex-none'>

        </div>
    )
}

export default HorizontalScroll