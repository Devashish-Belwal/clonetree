"use client";

import { Dispatch, SetStateAction } from "react";

import { NAV_LINKS } from "../../NavLinks";
import MobileMenuItem from "../MobileMenuItem";
import { MobileScreen } from "../types";

interface MainMenuProps {
  setScreen: Dispatch<SetStateAction<MobileScreen>>;
}

export default function MainMenu({
  setScreen,
}: MainMenuProps) {
  return (
    <div className="py-4">
      {NAV_LINKS.map((link) => (
        <MobileMenuItem
          key={link.label}
          label={link.label}
          hasArrow={"menu" in link}
          onClick={() => {
            if ("menu" in link) {
              if (link.menu === "products") {
                setScreen({ type: "products" });
              } else {
                setScreen({ type: "learn" });
              }

              return;
            }

            // TODO: Navigate to actual pages later
            console.log(link.label);
          }}
        />
      ))}
    </div>
  );
}