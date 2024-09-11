import Animated, { useSharedValue } from "react-native-reanimated";
import {Circle, Svg} from 'react-native-svg'

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const AnimatedPropsExample = () => {
    const r = useSharedValue(10);

    return (
      <Svg style={{ width: 100, height: 100 }}>
        <AnimatedCircle cx={10} cy={10} r={r} fill={'green'}/>
      </Svg>
    )
}

export default AnimatedPropsExample;