import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { ThemedText } from './ThemedText';

type ThemedButtonProps = {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export const ThemedButton = ({
    title,
    onPress,
    style,
    lightColor,
    darkColor,
    type = 'defaultSemiBold',
}: ThemedButtonProps) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <ThemedText type={type} lightColor={lightColor} darkColor={darkColor}>
                {title}
            </ThemedText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#333', 
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
});
