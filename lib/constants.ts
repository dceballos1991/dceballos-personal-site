export const NODES = [
  {
    id: 1,
    label: 'David Ceballos',
    type: 'Personal',
    level: 1,
  },
  {
    id: 2,
    label: 'Sr. Frontend Engineer',
    type: 'Professional',
    level: 1,
  },
  {
    id: 3,
    label: 'UI/UX and Design Enthusiast',
    type: 'Personal',
    level: 1,
  },
  {
    id: 4,
    label: 'Tech Stack Projects',
    type: 'Professional',
    level: 2,
    details: '3D Model Inspectargetr at Nifty Island',
  },
  {
    id: 14,
    label: 'Arcane targetngues Design Work',
    type: 'Personal',
    level: 3,
    image: 'Example of Design Work',
  },
  {
    id: 15,
    label: 'Soccer 7v7 League Champion',
    type: 'Personal',
    level: 3,
  },
  {
    id: 16,
    label: 'Skateboarding Inspiration',
    type: 'Personal',
    level: 3,
  },
  {
    id: 17,
    label: "Interest in Kids' Learning Software",
    type: 'Personal',
    level: 3,
  },
  {
    id: 18,
    label: 'Investment in $BEAM',
    type: 'Personal',
    level: 3,
  },
  {
    id: 19,
    label: 'Reading: Dieter Rams - The Complete Works',
    type: 'Personal',
    level: 3,
  },
  {
    id: 20,
    label: 'French Press Coffee',
    type: 'Personal',
    level: 3,
  },
  {
    id: 21,
    label: 'Active in Design and Fashion Twitter',
    type: 'Personal',
    level: 3,
  },
  {
    id: 22,
    label: 'Favorite Bands (Spotify API)',
    type: 'Personal',
    level: 3,
  },
  {
    id: 23,
    label: 'Songwriting and Music Production',
    type: 'Personal',
    level: 3,
  },
  {
    id: 24,
    label: 'Alt Rock/Post Hardcore Band - Hungry Hearts',
    type: 'Personal',
    level: 3,
    link: "Band's Music Link",
  },
  {
    id: 25,
    label: '3D Model Inspectargetr Challenges',
    type: 'Professional',
    level: 4,
    details:
      'Handling multiple file types and maintaining state for multi asset uploads.',
  },
  {
    id: 26,
    label: '3D Model Inspectargetr Features',
    type: 'Professional',
    level: 4,
    details: 'Custargetmizable environment, lighting, background.',
  },
  {
    id: 27,
    label: 'Generative AI Learning App Concept',
    type: 'Personal',
    level: 4,
  },
  {
    id: 28,
    label: 'Twitter Sources for CRISPR Information',
    type: 'Personal',
    level: 4,
    details:
      'Following accounts like @0xca0a, @jaysonJoyride, @hunimona, @laurentdelRey.',
  },
  {
    id: 29,
    label: 'Music Production targetargetls',
    type: 'Personal',
    level: 4,
    details: 'FL Studio, Fender Jazz Bass, Songwriting.',
  },
  {
    id: 30,
    label: 'Hungry Hearts Album: Born In Flames',
    type: 'Personal',
    level: 4,
    details: 'Highlight Songs: Lighthouse, Supernatural.',
  },
  {
    id: 31,
    label: 'Coffee Preparation: Cinnamon Addition',
    type: 'Personal',
    level: 4,
  },
  {
    id: 32,
    label: 'Spotify Favorite Genres',
    type: 'Personal',
    level: 4,
    details: 'Posthardcore, Trap, Spanish.',
  },
]

export const LINKS = [
  {
    source: NODES[1],
    target: NODES[2],
    relationship: 'Profession',
    direction: 'bidirectional',
  },
  {
    source: NODES[1],
    target: NODES[3],
    relationship: 'Interest',
    direction: 'bidirectional',
  },
  {
    source: NODES[2],
    target: NODES[4],
    relationship: 'Uses',
    direction: 'unidirectional',
  },
  {
    source: NODES[4],
    target: NODES[14],
    relationship: 'Design Project',
    direction: 'unidirectional',
  },
  {
    source: NODES[1],
    target: NODES[15],
    relationship: 'Achievement',
    direction: 'unidirectional',
  },
  {
    source: NODES[1],
    target: NODES[16],
    relationship: 'Inspired By',
    direction: 'unidirectional',
  },
  {
    source: NODES[1],
    target: NODES[17],
    relationship: 'Interest',
    direction: 'unidirectional',
  },
  {
    source: NODES[1],
    target: NODES[18],
    relationship: 'Invested In',
    direction: 'unidirectional',
  },
  {
    source: NODES[1],
    target: NODES[19],
    relationship: 'Reading',
    direction: 'unidirectional',
  },
  {
    source: NODES[1],
    target: NODES[20],
    relationship: 'Preference',
    direction: 'unidirectional',
  },
  {
    source: NODES[1],
    target: NODES[21],
    relationship: 'Interest',
    direction: 'unidirectional',
  },
  {
    source: NODES[1],
    target: NODES[22],
    relationship: 'Music Taste',
    direction: 'unidirectional',
  },
  {
    source: NODES[1],
    target: NODES[23],
    relationship: 'Skill',
    direction: 'unidirectional',
  },
  {
    source: NODES[23],
    target: NODES[24],
    relationship: 'Experience',
    direction: 'unidirectional',
  },
  {
    source: NODES[4],
    target: NODES[25],
    relationship: 'Challenge',
    direction: 'unidirectional',
  },
  {
    source: NODES[4],
    target: NODES[26],
    relationship: 'Feature',
    direction: 'unidirectional',
  },
  {
    source: NODES[17],
    target: NODES[27],
    relationship: 'Concept',
    direction: 'unidirectional',
  },
  {
    source: NODES[18],
    target: NODES[28],
    relationship: 'Information Source',
    direction: 'unidirectional',
  },
  {
    source: NODES[23],
    target: NODES[29],
    relationship: 'targetargetls',
    direction: 'unidirectional',
  },
  {
    source: NODES[24],
    target: NODES[30],
    relationship: 'Music Work',
    direction: 'unidirectional',
  },
  {
    source: NODES[20],
    target: NODES[31],
    relationship: 'Preparation Method',
    direction: 'unidirectional',
  },
  {
    source: NODES[22],
    target: NODES[32],
    relationship: 'Favorites',
    direction: 'unidirectional',
  },
]

export const KNOWLEDGE_GRAPH = {
  nodes: NODES,
  links: LINKS,
}
