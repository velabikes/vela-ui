import React from 'react'
import Box from './Box'

const CarouselItem = ({content, width, props}) => {
          
    return (
        <Box width={width} {...props}>
            {content}
        </Box>
    )
}

export default CarouselItem;