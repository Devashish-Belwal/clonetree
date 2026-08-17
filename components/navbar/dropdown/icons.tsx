// DynamicIcon.jsx
import React from 'react';
import { type IconType } from 'react-icons'
import {
    LuLayoutGrid,
    LuLightbulb,
    LuLink,
    LuShare2,
    LuUsers,
    LuCircleDollarSign
} from 'react-icons/lu';
import { BsFillBarChartLineFill } from "react-icons/bs";

// 1. Map string names to icon components
const ICON_MAP: Record<string, IconType> = {
    grid: LuLayoutGrid,
    lightbulb: LuLightbulb,
    link: LuLink,
    share: LuShare2,
    users: LuUsers,
    dollar: LuCircleDollarSign,
    chart: BsFillBarChartLineFill,
};

export default function Icon({
    name,
    color = 'currentColor',
    className = '',
    ...props }: {
        name: string,
        color: string,
        className: string
    }) {
    // 2. Lookup the component from the map
    const IconComponent = ICON_MAP[name];

    // 3. Fallback if an invalid name is passed
    if (!IconComponent) {
        console.warn(`Icon "${name}" does not exist in ICON_MAP.`);
        return null;
    }

    return <IconComponent color={color} className={className} {...props} />;
}