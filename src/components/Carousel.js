import React from 'react'
import {ScrollView, Animated} from 'react-native'
import Box from './Box'
import Button from './Button'
import { useTheme } from "../lib/theme"
import CarouselItem from './CarouselItem'

const Carousel = ({items, itemWidth, onFinish, buttonLabel}) => {
    const {colors} = useTheme()
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, itemWidth);

    return (
        <Box>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={10}
                decelerationRate={20}
                snapToAlignment={"center"}
                pagingEnabled
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false } 
                )}
            >
                {items.map(({content, value}) => {
                    return (
                        <CarouselItem key={value} width={itemWidth} content={content} />
                    )
                })}
            </ScrollView>
            <Box direction="row" justify="between" align="center">
                <Box width={100} />
                <Box direction="row" justify="center">
                {items.map((_, i) => {
                    let opacity = position.interpolate({
                        inputRange: [i - 1, i, i + 1],
                        outputRange: [colors.background, colors.secondary, colors.background],
                        extrapolate: 'clamp'
                    });
                    return (
                        <Animated.View 
                            key={i}
                            style={{ 
                                height: 10, 
                                width: 10, 
                                backgroundColor: opacity, 
                                margin: 8, 
                                borderRadius: 5 
                            }}
                        />
                    );
                })}
                </Box>
                <Button
                    color="secondary"
                    label={buttonLabel}
                    onPress={onFinish}
                    width={100}
                />
            </Box>
        </Box>
    )
}

export default Carousel;