import React from 'react';
import { ViewStyle, Pressable } from 'react-native';
import styles from './styles';

interface CardProps {
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  onPress?: VoidFunction;
}

function Card({ children, style, onPress }: CardProps) {


  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        style,
      ]}
    >
      {children}
    </Pressable>
  );
}

export default Card;
