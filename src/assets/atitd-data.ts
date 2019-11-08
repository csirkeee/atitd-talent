import { GameData } from "src/app/game-data";

export const ATITD_DATA: GameData = {
  tests: [
    {
      id: "alignment",
      name: "Astrological Alignment",
      imageLocation: "assets\\images\\tests\\Worship_Test_Icons_Astro_Alignment.png",
      tasks: [
        {
          id: "found5",
          text: "Found 5 aligned people",
          value: 1,
        },
        {
          id: "found15",
          text: "Found 15 aligned people",
          value: 1,
        },
        {
          id: "found30",
          text: "Found 30 aligned people",
          value: 1,
        },
        {
          id: "found45",
          text: "Found 45 aligned people",
          value: 1,
        },
        {
          id: "ritual",
          text: "Completed ritual",
          value: 3,
        },
      ],
    },
    {
      id: "obelisk",
      name: "Obelisk",
      imageLocation: "assets\\images\\tests\\Architecture_Test_Icons_Test_Obelisk.png",
      tasks: [
        {
          id: "desert",
          text: "Built and held a Desert Obelisk",
          value: 1,
        },
        {
          id: "cutstone",
          text: "Built and held a Cut stone Obelisk",
          value: 1,
        },
        {
          id: "metallic",
          text: "Built and held a Metallic Obelisk",
          value: 1,
        },
        {
          id: "hardwood",
          text: "Built and held a Hardwood Obelisk",
          value: 1,
        },
        {
          id: "marble",
          text: "Built and held a Marble Obelisk",
          value: 1,
        },
        {
          id: "crystal",
          text: "Built and held a Crystal Obelisk",
          value: 1,
        },
        {
          id: "heavenly",
          text: "Built and held a Heavenly Obelisk",
          value: 1,
        },
      ],
    },
  ],
  specializations: [
    {
      id: "laborer",
      name: "Laborer",
      primaryStat1: "str",
      primaryStat2: "dex",
      secondaryStat: "spd",
      perks: [
        {
          id: "carry",
          name: "Increased Carry",
          description: "Increases carry capability by +500 (weight and bulk). Does not increase STR or DEX stats.",
        },
        {
          id: "breaktime",
          name: "Break Time",
          description: "Increased travel time and offline chore production",
        },
        {
          id: "charcoal",
          name: "Charcoal Burner",
          description: "Increased yield in charcoal hearths, charcoal ovens, and charcoal brazier",
        },
      ],
      perkOrder: [
        "carry",
        "breaktime",
        "charcoal",
        "carry",
        "breaktime",
        "charcoal",
        "carry",
        "breaktime",
      ],
    },
    {
      id: "smith",
      name: "Smith",
      primaryStat1: "str",
      primaryStat2: "foc",
      secondaryStat: "end",
      perks: [
        {
          id: "fastsmith",
          name: "Fast Smithing",
          description: "Decreases time required to make items in forge",
        },
        {
          id: "anviltouch",
          name: "Touch of Ptah",
          description: "Increases the number of hits available on an anvil",
        },
        {
          id: "alloymaster",
          name: "Alloy Master",
          description: "+5% to Alloy Crystallization",
        },
        {
          id: "todo",
          name: "TODO",
          description: "This perk is not implemented yet",
        },
      ],
      perkOrder: [
        "fastsmith",
        "anviltouch",
        "alloymaster",
        "anviltouch",
        "fastsmith",
        "anviltouch",
        "todo",
        "todo",
      ],
    },
    {
      id: "weaver",
      name: "Weaver",
      primaryStat1: "end",
      primaryStat2: "foc",
      secondaryStat: "dex",
      perks: [
        {
          id: "nimblefingers",
          name: "Nimble Fingers",
          description: "Decreases number of strings broken on student loom",
        },
        {
          id: "cuttingcorners",
          name: "Cutting Corners",
          description: "Canvas and Linen are now cheaper to make",
        },
        {
          id: "loomhandling",
          name: "Loom Handling",
          description: "Decreases timer on canvas, linen, baskets, wool cloth, silk, and sails",
        },
        {
          id: "flaxcombhandling",
          name: "Flax Comb Handling",
          description: "Increases number of uses flax combs and hackling rakes before they crumble",
        },
        {
          id: "extraflax",
          name: "Textile Gatherer",
          description: "Increased flax and wool gathering",
        },
        {
          id: "flaxginhandling",
          name: "Two Flax is Better Than One",
          description: "Start an automated flax machine by yourself",
        },
        {
          id: "offlineflax",
          name: "Offline Flax",
          description: "Adds the ability to gather flax offline",
        },
      ],
      perkOrder: [
        "nimblefingers",
        "cuttingcorners",
        "loomhandling",
        "flaxcombhandling",
        "extraflax",
        "loomhandling",
        "flaxginhandling",
        "offlineflax",
      ],
    },
  ],
};

export default ATITD_DATA;
