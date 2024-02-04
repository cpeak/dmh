const data = [
  {
    id: 0,
    encounter: 'Ambush',
    creatures: [
      {
        id: '1',
        npc: false,
        name: "Jellifer",
        pc: "Alison",
        race: "Human",
        class: "Fighter",
        level: 2,
        hp: 35,
        ac: 14,
        pp: 13,
        str: 14,
        dex: 16,
        const: 15,
        int: 10,
        wis: 13,
        cha: 9,
      },
      {
        id: '2',
        npc: false,
        name: "Josephine",
        pc: "Kendall",
        class: "Cleric",
        race: "Hill Dwarf",
        level: 2,
        hp: 27,
        ac: 18,
        pp: 13,
        str: 14,
        dex: 8,
        const: 15,
        int: 10,
        wis: 16,
        cha: 12,
      },
      {
        id: '3',
        npc: false,
        name: "Reenah",
        race: "Lightfoot Halfling",
        class: "Rogue",
        pc: "Whitney",
        level: 2,
        hp: 22,
        ac: 14,
        pp: 12,
        str: 8,
        dex: 16,
        const: 12,
        int: 13,
        wis: 10,
        cha: 16,
      },
      {
        id: '4',
        npc: false,
        name: "Aliathan",
        race: "High Elf",
        class: "Wizard",
        pc: "Jeff",
        level: 2,
        hp: 20,
        ac: 12,
        pp: 13,
        str: 10,
        dex: 15,
        const: 14,
        int: 16,
        wis: 12,
        cha: 8,
      },
      {
        id: '5',
        npc: false,
        name: "Jo Jo",
        pc: "Cordelia",
        race: "Human",
        class: "Fighter",
        level: 2,
        hp: 27,
        ac: 17,
        pp: 13,
        str: 16,
        dex: 9,
        const: 15,
        int: 11,
        wis: 13,
        cha: 14,
      },
    ],
  },

  {
    id: 1,
    encounter: 'Hideout',
    creatures: [
      {
        id: '1',
        npc: false,
        name: "Jellifer",
        pc: "Alison",
        level: 2,
        hp: 35,
        ac: 14,
        pp: 13,
        str: 14,
        dex: 16,
        const: 15,
        int: 10,
        wis: 13,
        cha: 9,
      },
      {
        id: '2',
        npc: false,
        name: "Josephine",
        pc: "Kendall",
        level: 2,
        hp: 27,
        ac: 18,
        pp: 13,
        str: 14,
        dex: 8,
        const: 15,
        int: 10,
        wis: 16,
        cha: 12,
      },
      {
        id: '6',
        npc: true,
        name: "Skeleton",
        pc: "2",
        level: 2,
        hp: 13,
        ac: 13,
        pp: 9,
        str: 10,
        dex: 14,
        const: 15,
        int: 6,
        wis: 8,
        cha: 5,
      },
      {
        id: '7',
        npc: true,
        name: "Goblin",
        pc: "1",
        level: 2,
        hp: 13,
        ac: 13,
        pp: 9,
        str: 10,
        dex: 14,
        const: 15,
        int: 6,
        wis: 8,
        cha: 5,
      },
    ],
  }
]

export default data;
