import React from "react"

import { GiEarthAmerica } from "react-icons/gi"
import { FaMoneyCheck } from "react-icons/fa"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"

export const StatsData = [
  {
    icon: (
      <GiEarthAmerica
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "Over 3000 vehicles in inventory",
    desc: "Choose one that fits your personal needs",
  },
  {
    icon: (
      <MdAirplanemodeActive
        css={`
          color: #f3a82e;
        `}
      />
    ),
    title: "Over 3000 vehicles in inventory",
    desc: "Choose one that fits your personal needs",
  },
  {
    icon: (
      <MdTimer
        css={`
          color: #f34f2e;
        `}
      />
    ),
    title: "Over 3000 vehicles in inventory",
    desc: "Choose one that fits your personal needs",
  },
  {
    icon: (
      <FaMoneyCheck
        css={`
          color: #3af576;
        `}
      />
    ),
    title: "Over 3000 vehicles in inventory",
    desc: "Choose one that fits your personal needs",
  },
]
