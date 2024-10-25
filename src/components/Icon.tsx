import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';


AntDesign.loadFont();


type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

export const FontIcon = ({size, name, color}: IconProps) => (
  <AntDesign name={name} size={IconSizes[size]} color={color} />
);