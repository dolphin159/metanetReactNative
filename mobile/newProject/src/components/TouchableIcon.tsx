import React from "react";
import type { FC, ComponentProps } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableView } from "./TouchableView";
import type { TouchableViewProps } from "./TouchableView";

export type IconTextProps = TouchableViewProps & ComponentProps<typeof Icon>

export const TouchableIcon: FC<IconTextProps> = ({
    name, size, color, ...TouchableViewProps}) => {
    return (
        <TouchableView {...TouchableViewProps}>
            <Icon name={name} size={size} color={color} />
        </TouchableView>
    )
}