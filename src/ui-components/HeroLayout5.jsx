/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HeroLayout5(props) {
  const { hero, overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="858px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "HeroLayout5")}
    >
      <Image
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="0px 120px 0px 0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={hero?.images}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Text
        fontFamily="Futura"
        fontSize="120px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="159.375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1376px"
        height="370px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="54.08%"
        bottom="2.8%"
        left="2.22%"
        right="2.22%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={hero?.catch}
        {...getOverrideProps(overrides, "CatchCopySample012345678901")}
      ></Text>
    </View>
  );
}
