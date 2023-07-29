import React from "react";
import { Platform } from "../hooks/useGames";
import { AiFillAndroid, AiFillWindows, AiFillApple } from "react-icons/ai";
import { FaGlobe, FaPlaystation } from "react-icons/fa";
import { BsXbox, BsNintendoSwitch } from "react-icons/bs";
import { DiLinux } from "react-icons/di";
import { MdPhoneIphone } from "react-icons/md";
import { IconType } from "react-icons";
import { HStack, Icon, Text } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    android: AiFillAndroid,
    pc: AiFillWindows,
    linux: DiLinux,
    web: FaGlobe,
    mac: AiFillApple,
    xbox: BsXbox,
    playstation: FaPlaystation,
    ios: MdPhoneIphone,
    nintendo: BsNintendoSwitch,
  };

  return (
    <HStack marginY={2}>
      {platforms.map((p) => (
        <Icon color={"gray.500"} as={iconMap[p.slug]}></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
