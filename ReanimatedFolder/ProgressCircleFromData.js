import React, { useCallback, useEffect } from 'react'
import { Dimensions, StyleSheet, View, Text } from 'react-native'
import Animated, { useAnimatedProps, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import Svg, { Circle } from 'react-native-svg'

const BACKGROUND_COLOR = "#183564";
const BACKGROUND_STROKE_COLOR = 'rgba(33, 67, 107, 0.8)';
const STROKE_COLOR = "rgba(255, 180, 92, 1)";

const {
    width, height
} = Dimensions.get('window');

const CIRCLE_LENGTH = 1000; // 2PI*R
const R = CIRCLE_LENGTH / (2*Math.PI)

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function ProgressCircleFromData({ wattIn, wattOut, status}) {

    const getStatusColor = (status) => {}


    const progress = useSharedValue(0);

    useEffect(() => {
        const percentage = wattIn > 0 ? wattOut / wattIn : 0;
        progress.value = withTiming(percentage, {duration: 2000});
    }, [wattIn, wattOut])

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value) // 1- changes direction of animation
    }))

    const progressText = useDerivedValue(() => {
        return `${Math.floor(progress.value * 100)}%`;
    });


    return (
        <View style={styles.container}>
            <View style={styles.circleContainer}>
            <ReText style={styles.progressText} text={progressText}/>
            <Svg width={width} height={height} >
                <Circle
                cx={width/2} 
                cy={height/2} 
                r={R} 
                stroke={BACKGROUND_STROKE_COLOR} 
                strokeWidth={20}  
                />
                <AnimatedCircle
                cx={width/2} 
                cy={height/2} 
                r={R} 
                stroke={STROKE_COLOR} 
                strokeWidth={15}  
                strokeDasharray={CIRCLE_LENGTH}
                strokeDashoffset={CIRCLE_LENGTH * 0.10}
                animatedProps={animatedProps}
                strokeLinecap={'round'}
                fill={BACKGROUND_COLOR}
                />
            </Svg>
            <Text style={styles.text}>{wattIn/100} and {wattOut/100}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: BACKGROUND_COLOR,
        alignItems: "center",
        justifyContent: 'flex-start',
    },
    circleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressText: {
        position: 'absolute', // Position the text absolutely in the View
        zIndex: 2,
        fontSize: 60,
        fontFamily: 'Text-Light',
        color: 'rgba(255, 241, 207, 0.5)',
        textAlign: 'center',
        },
    text: {
        color: 'white'
    }
})