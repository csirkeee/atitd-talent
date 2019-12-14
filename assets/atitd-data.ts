import { GameData } from "src/app/game-data";
import { TestType } from "src/app/tests/test-data";

export const ATITD_DATA: GameData = {
  tests: [
    {
      id: "starting",
      name: "Starting tasks",
      imageLocation: "assets\\images\\tests\\Leadership_Test_Icons_Plantation.png",
      type: TestType.RANDOM_ORDER,
      tasks: [
        {
          id: "citizenship",
          text: "Become a citizen of Egypt",
          value: 1,
        },
        {
          id: "homesweethome",
          text: "Complete the Home Sweet Home task",
          value: 1,
        },
        {
          id: "artandmusic",
          text: "Complete the Art and Music task",
          value: 1,
        },
        {
          id: "thought",
          text: "Complete the Puzzle in the Night Sky task",
          value: 1,
        },
      ],
    },
    {
      id: "obelisk",
      name: "Obelisk",
      imageLocation: "assets\\images\\tests\\Architecture_Test_Icons_Test_Obelisk.png",
      type: TestType.RANDOM_ORDER,
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
    {
      id: "towers",
      name: "Towers",
      imageLocation: "assets\\images\\tests\\Architecture_Test_Icons_Towers.png",
      type: TestType.RANDOM_ORDER,
      tasks: [
        {
          id: "solidland",
          text: "Got 100% coverage with Solid Land towers",
          value: 1,
        },
        {
          id: "richsoil",
          text: "Got 100% coverage with Rich Soil towers",
          value: 1,
        },
        {
          id: "handofman",
          text: "Got 100% coverage with Hand of Man towers",
          value: 1,
        },
        {
          id: "livingland",
          text: "Got 100% coverage with Living Land towers",
          value: 1,
        },
        {
          id: "newlife",
          text: "Got 100% coverage with New Life towers",
          value: 1,
        },
        {
          id: "racingmind",
          text: "Got 100% coverage with Racing Mind towers",
          value: 1,
        },
        {
          id: "night",
          text: "Got 100% coverage with Night towers",
          value: 1,
        },
      ],
    },
    {
      id: "cicada",
      name: "Singing Cicada",
      imageLocation: "assets\\images\\tests\\Human_Body_Test_Icons_Cicada.png",
      type: TestType.SERIAL,
      tasks: [
        {
          id: "pass1st",
          text: "Get your 1st pass by collecting enough points",
          value: 1,
        },
        {
          id: "pass2nd",
          text: "Get your 2nd pass by collecting enough points",
          value: 1,
        },
        {
          id: "pass3rd",
          text: "Get your 3rd pass by collecting enough points",
          value: 1,
        },
        {
          id: "pass4th",
          text: "Get your 4th pass by collecting enough points",
          value: 1,
        },
        {
          id: "pass5th",
          text: "Get your 5th pass by collecting enough points",
          value: 1,
        },
        {
          id: "pass6th",
          text: "Get your 6th pass by collecting enough points",
          value: 1,
        },
        {
          id: "pass7th",
          text: "Get your 7th pass by collecting enough points",
          value: 1,
        },
      ],
    },
    {
      id: "bedouin",
      name: "Bedouin",
      imageLocation: "assets\\images\\tests\\Human_Body_Test_Icons_Bedouin.png",
      type: TestType.SERIAL,
      tasks: [
        {
          id: "pass1st",
          text: "Get your 1st pass by holding enough altars",
          value: 1,
        },
        {
          id: "pass2nd",
          text: "Get your 2nd pass by holding enough altars",
          value: 1,
        },
        {
          id: "pass3rd",
          text: "Get your 3rd pass by holding enough altars",
          value: 1,
        },
        {
          id: "pass4th",
          text: "Get your 4th pass by holding enough altars",
          value: 1,
        },
        {
          id: "pass5th",
          text: "Get your 5th pass by holding enough altars",
          value: 1,
        },
        {
          id: "pass6th",
          text: "Get your 6th pass by holding enough altars",
          value: 1,
        },
        {
          id: "pass7th",
          text: "Get your 7th pass by holding enough altars",
          value: 1,
        },
      ],
    },
    {
      id: "oyster",
      name: "Oyster Catcher",
      imageLocation: "assets\\images\\tests\\Human_Body_Test_Icons_Oyster_Catcher.png",
      type: TestType.SERIAL,
      tasks: [
        {
          id: "pass1st",
          text: "Get your 1st point by putting a pearl in your necklace",
          value: 1,
        },
        {
          id: "pass2nd",
          text: "Get your 2nd point by making progress on your necklace",
          value: 1,
        },
        {
          id: "pass3rd",
          text: "Get your 3rd point by making progress on your necklace",
          value: 1,
        },
        {
          id: "pass4th",
          text: "Get your 4th point by making progress on your necklace",
          value: 1,
        },
        {
          id: "pass5th",
          text: "Get your 5th point by making progress on your necklace",
          value: 1,
        },
        {
          id: "pass6th",
          text: "Get your 6th point by making progress on your necklace",
          value: 1,
        },
        {
          id: "complete",
          text: "Get your 7th point by completing your necklace",
          value: 1,
        },
      ],
    },
    {
      id: "acrobat",
      name: "Acrobat",
      imageLocation: "assets\\images\\tests\\Human_Body_Test_Icons_Acrobat.png",
      type: TestType.SERIAL,
      tasks: [
        {
          id: "teach7",
          text: "Teach 7 facets to other players",
          value: 1,
        },
        {
          id: "learn8",
          text: "Learn 8 moves",
          value: 1,
        },
        {
          id: "learn12",
          text: "Learn 12 moves",
          value: 1,
        },
        {
          id: "learn16",
          text: "Learn 16 moves",
          value: 1,
        },
        {
          id: "learn20",
          text: "Learn 20 moves",
          value: 1,
        },
        {
          id: "learn24",
          text: "Learn 24 moves",
          value: 1,
        },
        {
          id: "learn28",
          text: "Learn 28 moves",
          value: 1,
        },
      ],
    },
    {
      id: "tattoo",
      name: "Ritual Tattoo",
      imageLocation: "assets\\images\\tests\\Human_Body_Test_Icons_Ritual_Tattoo.png",
      type: TestType.SERIAL,
      tasks: [
        {
          id: "complete1stlist",
          text: "Hand in 4 complete mortars from your 1st list",
          value: 1,
        },
        {
          id: "complete2ndlist",
          text: "Hand in 4 complete mortars from your 2nd list",
          value: 1,
        },
        {
          id: "complete3rdlist",
          text: "Hand in 4 complete mortars from your 3rd list",
          value: 1,
        },
        {
          id: "complete4thlist",
          text: "Hand in 4 complete mortars from your 4th list",
          value: 1,
        },
        {
          id: "complete5thlist",
          text: "Hand in 4 complete mortars from your 5th list",
          value: 1,
        },
        {
          id: "complete6thlist",
          text: "Hand in 4 complete mortars from your 6th list",
          value: 1,
        },
        {
          id: "complete7thlist",
          text: "Hand in 4 complete mortars from your 7th list",
          value: 1,
        },
      ],
    },
    {
      id: "venery",
      name: "Venery",
      imageLocation: "assets\\images\\tests\\Thought_Test_Icons_Venery.png",
      type: TestType.SERIAL,
      tasks: [
        {
          id: "buildit",
          text: "Building the Venery Gathering Point",
          value: 1,
        },
        {
          id: "createlockbox",
          text: "Forging a Simple Lockbox",
          value: 1,
        },
        {
          id: "install7lockboxes",
          text: "Installing 7 Lockboxes",
          value: 1,
        },
        {
          id: "completetest",
          text: "Passing the Test",
          value: 4,
        },
      ],
    },
    {
      id: "safari",
      name: "Safari",
      imageLocation: "assets\\images\\tests\\Human_Body_Test_Safari.png",
      type: TestType.SERIAL,
      tasks: [
        {
          id: "cought4",
          text: "Catch a total of 4 safari animals",
          value: 1,
        },
        {
          id: "cought8",
          text: "Catch a total of 8 safari animals",
          value: 1,
        },
        {
          id: "cought12",
          text: "Catch a total of 12 safari animals",
          value: 1,
        },
        {
          id: "cought16",
          text: "Catch a total of 16 safari animals",
          value: 1,
        },
        {
          id: "cought20",
          text: "Catch a total of 20 safari animals",
          value: 1,
        },
        {
          id: "cought24",
          text: "Catch a total of 24 safari animals",
          value: 1,
        },
        {
          id: "cought28",
          text: "Catch a total of 28 safari animals",
          value: 1,
        },
      ],
    },
    {
      id: "darkestnight",
      name: "Darkest Night",
      imageLocation: "assets\\images\\tests\\Human_Body_Test_Icons_Darkest_Night.png",
      type: TestType.SERIAL,
      tasks: [
        {
          id: "complete1st",
          text: "Ingest all mushrooms on your 1st list",
          value: 1,
        },
        {
          id: "complete2nd",
          text: "Ingest all mushrooms on your 2nd list",
          value: 1,
        },
        {
          id: "complete3rd",
          text: "Ingest all mushrooms on your 3rd list",
          value: 1,
        },
        {
          id: "complete4th",
          text: "Ingest all mushrooms on your 4th list",
          value: 1,
        },
        {
          id: "complete5th",
          text: "Ingest all mushrooms on your 5th list",
          value: 1,
        },
        {
          id: "complete6th",
          text: "Ingest all mushrooms on your 6th list",
          value: 1,
        },
        {
          id: "complete7th",
          text: "Ingest all mushrooms on your 7th list",
          value: 1,
        },
      ],
    },
    {
      id: "khefreschildren",
      name: "Khefre's Children",
      imageLocation: "assets\\images\\tests\\Art_and_Music_Test_Icons_Khefres_Child.png",
      type: TestType.SERIAL,
      tasks: [
        {
          id: "breedowned",
          text: "Breed a beetle to 90% - 99% Ownership",
          value: 1,
        },
        {
          id: "winlevel1",
          text: "Win a Level 1 Garden",
          value: 1,
        },
        {
          id: "winlevel2",
          text: "Win a Level 2 Garden",
          value: 2,
        },
        {
          id: "winlevel3",
          text: "Win a Level 3 Garden",
          value: 3,
        },
      ],
    },
    {
      id: "alignment",
      name: "Astrological Alignment",
      imageLocation: "assets\\images\\tests\\Worship_Test_Icons_Astro_Alignment.png",
      type: TestType.SERIAL,
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
      id: "archaeologist",
      name: "Archaeologist",
      imageLocation: "assets\\images\\tests\\Human_Body_Test_Icons_Archeologist.png",
      type: TestType.SERIAL,
      tasks: [
        {
          id: "buildit",
          text: "Build a Trophy Cases",
          value: 1,
        },
        {
          id: "digrelic",
          text: "Dig up a relic",
          value: 2,
        },
        {
          id: "install3",
          text: "Install 3 relics",
          value: 1,
        },
        {
          id: "completetest",
          text: "Won the contest at the weekly scoring",
          value: 3,
        },
      ],
    },
    {
      id: "octec",
      name: "Octec's Ghost",
      imageLocation: "assets\\images\\tests\\Architecture_Test_Icons_Octec_Ghost.png",
      type: TestType.SERIAL,
      tasks: [
        {
          id: "built",
          text: "Build the Statue of Octec's Ghost",
          value: 1,
        },
        {
          id: "placed2",
          text: "Install 2 Crystal Hieroglyphs",
          value: 1,
        },
        {
          id: "placed5",
          text: "Install 5 Crystal Hieroglyphs",
          value: 1,
        },
        {
          id: "placed10",
          text: "Install 10 Crystal Hieroglyphs",
          value: 1,
        },
        {
          id: "placed15",
          text: "Install 15 Crystal Hieroglyphs",
          value: 1,
        },
        {
          id: "placed18",
          text: "Install 18 Crystal Hieroglyphs",
          value: 1,
        },
        {
          id: "activate",
          text: "Activate the statue",
          value: 1,
        },
      ],
    },
    {
      id: "balance",
      name: "Balance of Goods",
      imageLocation: "assets\\images\\tests\\Harmony_Test_Icons_Balance_Of_Goods.png",
      type: TestType.SERIAL,
      tasks: [
        {
          id: "built",
          text: "Build the Offering Vault",
          value: 1,
        },
        {
          id: "offeritems",
          text: "Place 10 items in the Vault",
          value: 1,
        },
        {
          id: "scorepoint",
          text: "Score at least 1 point",
          value: 2,
        },
        {
          id: "won",
          text: "Won the weekly offering count",
          value: 3,
        },
      ],
    },
    {
      id: "marriage",
      name: "Marriage",
      imageLocation: "assets\\images\\tests\\Harmony_Test_Icons_Marriage.png",
      type: TestType.SERIAL,
      tasks: [
        {
          id: "witness",
          text: "Witness a wedding",
          value: 1,
        },
        {
          id: "won",
          text: "Won the weekly score count",
          value: 6,
        },
      ],
    },
    {
      id: "vigil",
      name: "Vigil",
      imageLocation: "assets\\images\\tests\\Worship_Test_Icons_Vigil.png ",
      type: TestType.SERIAL,
      tasks: [
        {
          id: "build",
          text: "Build a sacrificial bonfire or make a sacrifice",
          value: 1,
        },
        {
          id: "sacrifice",
          text: "Make a sacrifice to a sacrificial bonfire",
          value: 1,
        },
        {
          id: "donate",
          text: "Donate some favor at a University of Worship",
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
      id: "angler",
      name: "Angler",
      primaryStat1: "spd",
      primaryStat2: "con",
      secondaryStat: "dex",
      perks: [
        {
          id: "moreroe",
          name: "Roe Your Boat",
          description: "Increases the amount of roe generated",
        },
        {
          id: "betterlures",
          name: "Stronger Lines",
          description: "Less chance that your lure will be lost",
        },
        {
          id: "biggerfish",
          name: "The Big One",
          description: "Increase the sizes of your catches",
        },
        {
          id: "betterfishingpole",
          name: "Quality Equipment",
          description: "The quality of your pole is always considered one higher",
        },
        {
          id: "offlineinsects",
          name: "Offline Insects",
          description: "Adds the ability to gather insects offline - random insects are generated based on rarity",
        },
      ],
      perkOrder: [
        "moreroe",
        "betterlures",
        "biggerfish",
        "betterfishingpole",
        "betterlures",
        "biggerfish",
        "moreroe",
        "offlineinsects",
      ],
    },
    {
      id: "architect",
      name: "Architect",
      primaryStat1: "con",
      primaryStat2: "dex",
      secondaryStat: "end",
      perks: [
        {
          id: "compoundsize",
          name: "Increased Compound Size",
          description: "Increases the number of cells you can add to a compound by 14",
        },
        {
          id: "townhouse",
          name: "This Old Town House",
          description: "Unlocks the Town House style of compounds",
        },
        {
          id: "homeconstruction",
          name: "Home Construction",
          description: "Allows the construction of larger homes with each rank",
        },
        {
          id: "easternmeditation",
          name: "Buddha's Architect",
          description: "Unlimited Eastern Meditation",
        },
      ],
      perkOrder: [
        "compoundsize",
        "townhouse",
        "compoundsize",
        "homeconstruction",
        "compoundsize",
        "easternmeditation",
        "compoundsize",
        "homeconstruction",
      ],
    },
    {
      id: "carpenter",
      name: "Carpenter",
      primaryStat1: "foc",
      primaryStat2: "end",
      secondaryStat: "spd",
      perks: [
        {
          id: "woodplane",
          name: "The Way of Stone",
          description: "Decreases the chance of Slate Blades breaking in a wood plane",
        },
        {
          id: "carpentryshop",
          name: "Carpentry Shop Handling",
          description: "Chance of cutting two boards with one piece of wood",
        },
        {
          id: "whittling",
          name: "Totin' Chip",
          description: "Decreased timers on whittling",
        },
        {
          id: "carpentryshopblades",
          name: "Sharper Blades",
          description: "Blades installed in the carpentry bench act as higher quality",
        },
        {
          id: "endlessboards",
          name: "Endless Boards",
          description: "Carpentry shop board planing does not stop at 50 boards",
        },
        {
          id: "woodshed",
          name: "Wood Shed",
          description: "Unique storage building that can hold up to one million wood",
        },
      ],
      perkOrder: [
        "woodplane",
        "carpentryshop",
        "whittling",
        "carpentryshopblades",
        "carpentryshop",
        "endlessboards",
        "carpentryshopblades",
        "woodshed",
      ],
    },
    {
      id: "cook",
      name: "Cook",
      primaryStat1: "end",
      primaryStat2: "spd",
      secondaryStat: "con",
      perks: [
        {
          id: "morefood",
          name: "Increased Helpings",
          description: "Increases the number of helpings for your dishes by 1",
        },
        {
          id: "freshfood",
          name: "Fresher Meals",
          description: "Increases the time your meals stay fresh",
        },
        {
          id: "masterpiecefood",
          name: "Masterpiece Mastery",
          description: "Increases the chance your meal will be a masterpiece",
        },
        {
          id: "offlineherbs",
          name: "Offline Herbs",
          description: "Adds the ability to pick herbs offline - random herbs are generated based on rarity",
        },
        {
          id: "todo",
          name: "TODO",
          description: "This perk is not implemented yet",
        },
      ],
      perkOrder: [
        "morefood",
        "freshfood",
        "masterpiecefood",
        "morefood",
        "freshfood",
        "todo",
        "morefood",
        "offlineherbs",
      ],
    },
    {
      id: "farmer",
      name: "Farmer",
      primaryStat1: "end",
      primaryStat2: "con",
      secondaryStat: "str",
      perks: [
        {
          id: "moreveggies",
          name: "Green Thumb",
          description: "Increases yield from growing veggies by 3",
        },
        {
          id: "betterplough",
          name: "Sturdy Moulding",
          description: "Lower chance of breaking mouldboards of ploughs",
        },
        {
          id: "betterfields",
          name: "Fertile Fields",
          description: "Field of vegetables lasts longer",
        },
        {
          id: "cheaperfields",
          name: "Improved Planting",
          description: "Requires one less seed to plant a field",
        },
        {
          id: "extraseeds",
          name: "Spontaneous Generation",
          description: "Copy any seed at the crafting bench",
        },
      ],
      perkOrder: [
        "moreveggies",
        "betterplough",
        "betterfields",
        "cheaperfields",
        "moreveggies",
        "betterfields",
        "cheaperfields",
        "extraseeds",
      ],
    },
    {
      id: "glazier",
      name: "Glazier",
      primaryStat1: "foc",
      primaryStat2: "dex",
      secondaryStat: "spd",
      perks: [
        {
          id: "leavelessglass",
          name: "Glazier's Bench Handling",
          description: "Decreases amount of glass required in the bench to function - "
            + "Can deplete the reservoir to 9 db instead of the usual 19 db",
        },
        {
          id: "lessglaziercc",
          name: "Half Charred",
          description: "Reduced charcoal cost in the glazier's bench - Cost is now 1cc, 3cc, 6cc",
        },
        {
          id: "morepotash",
          name: "Potash Subsidy",
          description: "Make more potash at a time in a kettle",
        },
        {
          id: "glassquality",
          name: "Final Polish",
          description: "Allows a glassblower to increase or decrease the quality by up to 100",
        },
        {
          id: "bettersheetglass",
          name: "Smooth as Glass",
          description: "Sheet Glass does not break for you",
        },
        {
          id: "todo",
          name: "TODO",
          description: "This perk is not implemented yet",
        },
      ],
      perkOrder: [
        "leavelessglass",
        "lessglaziercc",
        "morepotash",
        "glassquality",
        "bettersheetglass",
        "morepotash",
        "glassquality",
        "todo",
      ],
    },
    {
      id: "lumberjack",
      name: "Lumberjack",
      primaryStat1: "str",
      primaryStat2: "end",
      secondaryStat: "dex",
      perks: [
        {
          id: "morewood",
          name: "Onceler's Envy",
          description: "Increases wood gathered, without increasing timer",
        },
        {
          id: "fasterwood",
          name: "Wood Timer Decrease",
          description: "Decreases timer on gathering wood",
        },
        {
          id: "mightychop",
          name: "Mighty Chop",
          description: "Perform a one time wood gather with a longer timer",
        },
        {
          id: "betterhatchet",
          name: "Tool Mastery",
          description: "Hatchets and Resin Wedges always count as 9999 quality for you",
        },
      ],
      perkOrder: [
        "morewood",
        "fasterwood",
        "morewood",
        "mightychop",
        "morewood",
        "fasterwood",
        "morewood",
        "betterhatchet",
      ],
    },
    {
      id: "miner",
      name: "Miner",
      primaryStat1: "str",
      primaryStat2: "con",
      secondaryStat: "foc",
      perks: [
        {
          id: "moreore",
          name: "Geb's Touch",
          description: "Increases ore collection",
        },
        {
          id: "bettergems",
          name: "Careful Extraction",
          description: "Higher chance of larger gems",
        },
        {
          id: "moremarble",
          name: "Improved Marble Gathering",
          description: "When pulling marble, gain +1 marble (multiple miners do not stack)",
        },
        {
          id: "miraclemining",
          name: "Hathor's Miracle",
          description: "Break all minestones on a long timer",
        },
      ],
      perkOrder: [
        "moreore",
        "bettergems",
        "moreore",
        "bettergems",
        "moreore",
        "moremarble",
        "moreore",
        "miraclemining",
      ],
    },
    {
      id: "potter",
      name: "Potter",
      primaryStat1: "str",
      primaryStat2: "dex",
      secondaryStat: "con",
      perks: [
        {
          id: "betterbrickracks",
          name: "Brick Rack Handling",
          description: "Decreased chance of brick rack decay, decreased time to create bricks",
        },
        {
          id: "cheaperkilns",
          name: "Fired Clay",
          description: "Repairs to Kilns are halved",
        },
        {
          id: "moreclay",
          name: "Increased Clay Gathering",
          description: "Clay gathering increased by 1",
        },
        {
          id: "moreflint",
          name: "Increased Flint Gathering",
          description: "Flint gathering increased by 1",
        },
        {
          id: "moreraeli",
          name: "Increased Raeli Production",
          description: "Increase the production of Raeli ovens",
        },
        {
          id: "easyclay",
          name: "Jugless Gathering",
          description: "Can gather clay without water",
        },
        {
          id: "changeraeli",
          name: "Raeli Deep Dredging",
          description: "Change the color of a Raeli clay patch permanently on a long timer",
        },
      ],
      perkOrder: [
        "betterbrickracks",
        "cheaperkilns",
        "moreclay",
        "moreflint",
        "moreraeli",
        "easyclay",
        "moreclay",
        "changeraeli",
      ],
    },
    {
      id: "priest",
      name: "Priest",
      primaryStat1: "end",
      primaryStat2: "foc",
      secondaryStat: "con",
      perks: [
        {
          id: "prayforstats",
          name: "Festival of the Gods",
          description: "Pray to the Gods at a Common Altar to gain a stat bonus",
        },
        {
          id: "betterdowsing",
          name: "Expanded Dowsing",
          description: "Increases the radius of your dowsing attempt",
        },
        {
          id: "fasterdowsing",
          name: "Improved Dowsing",
          description: "Increases the rate of your dowsing attempts",
        },
        {
          id: "commonaltar",
          name: "Church Founding",
          description: "Build your own Common Altar",
        },
      ],
      perkOrder: [
        "prayforstats",
        "betterdowsing",
        "fasterdowsing",
        "prayforstats",
        "betterdowsing",
        "fasterdowsing",
        "prayforstats",
        "changeraeli",
      ],
    },
    {
      id: "rancher",
      name: "Rancher",
      primaryStat1: "spd",
      primaryStat2: "dex",
      secondaryStat: "str",
      perks: [
        {
          id: "freecattle",
          name: "Cowboy",
          description: "Free mate of a cattle of your choice at one of your ranches once",
        },
        {
          id: "animalinfo",
          name: "Animal Whisperer",
          description: "Able to examine animals and find out more information about them",
        },
        {
          id: "morefeed",
          name: "Increased Feed Yield",
          description: "Increases the amount of feed created when you make food for animals",
        },
        {
          id: "bettercattle",
          name: "Hearty Cattle",
          description: "Cattle you produce will live longer after heavy work",
        },
        {
          id: "happypigs",
          name: "Happy Pigs, Happy Life",
          description: "TODO",
        },
        {
          id: "animalgender",
          name: "Mendel's Bane",
          description: "Influence the gender and type of animal born from a pregnant animal on a timer",
        },
      ],
      perkOrder: [
        "freecattle",
        "animalinfo",
        "morefeed",
        "bettercattle",
        "happypigs",
        "morefeed",
        "bettercattle",
        "animalgender",
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
      id: "stonemason",
      name: "Stonemason",
      primaryStat1: "str",
      primaryStat2: "end",
      secondaryStat: "dex",
      perks: [
        {
          id: "moreslate",
          name: "Eye for Slate",
          description: "Increased chance of finding hoards of slate",
        },
        {
          id: "easygravel",
          name: "Enormous Hands",
          description: "When gathering gravel, pick up in a radius",
        },
        {
          id: "morelimestone",
          name: "Increased Limestone Gathering",
          description: "Limestone gathering increased per hit by 1",
        },
        {
          id: "easyprospecting",
          name: "Romancing the Stone",
          description: "Increased perception for marble prospecting",
        },
        {
          id: "moregravel",
          name: "Gravel Mastery",
          description: "Increases the number of pieces created when gravel is smashed with a hammer",
        },
        {
          id: "easyclinkervat",
          name: "Give it a Stir",
          description: "Decreased timers on clinker vat stirring",
        },
        {
          id: "offlinestones",
          name: "Offline Stonework",
          description: "Gather cuttables, medium stone, or convert stone to gravel offline",
        },
      ],
      perkOrder: [
        "moreslate",
        "easygravel",
        "morelimestone",
        "easyprospecting",
        "moregravel",
        "morelimestone",
        "easyclinkervat",
        "offlinestones",
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
