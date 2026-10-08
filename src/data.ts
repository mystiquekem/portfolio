// ============================================================
// EDIT HERE. Anything wrapped in [ADD ...] is a placeholder.
// Empty link strings ("") show a visible [ADD ...] marker on the site.
// ============================================================

export const SITE = {
  name: 'Thái An',
  email: '', // e.g. 'you@example.com'
  links: {
    github: '',   // https://github.com/...
    linkedin: '', // https://linkedin.com/in/...
    youtube: '',  // music portfolio / channel
    fiverr: '',   // https://fiverr.com/...
  },
}

export const NAV = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'music', label: 'Music' },
  { id: 'experience', label: 'Experience' },
]

export const WORLDS = {
  music: ['Keyboard / Piano', 'Live Performance', 'Song Arrangement', 'Band Rehearsal', 'Musician Training', 'Performance Preparation'],
  tech: ['Java', 'Spring Boot', 'Android', 'REST APIs', 'PostgreSQL / MySQL', 'Python', 'Computer Vision'],
}

export const HISYNC = {
  title: 'HiSync: Band Practice Management System',
  problem: 'A band has members, songs, roles and rehearsal times to keep track of. It is easy to lose track of who plays what, and who has sent a recording.',
  solution: 'HiSync keeps it in one place. An Android app backed by a Spring Boot API. Leaders set up songs, assign parts and schedule rehearsals. Members see what they are assigned and submit recordings.',
  features: [
    'Band member management', 'Member and Leader roles', 'Song management', 'Song assignments', 'Rehearsal scheduling',
    'Practice session management', 'Recording submissions', 'YouTube song assignment', 'Cloud recording storage',
  ],
  stack: ['Android (Java)', 'Spring Boot', 'PostgreSQL', 'REST API', 'Retrofit', 'Cloudinary', 'YouTube API', 'Material Components', 'MVVM'],
  screenshots: ['[ADD SCREENSHOT 1]', '[ADD SCREENSHOT 2]', '[ADD SCREENSHOT 3]'],
  github: '', // [ADD GITHUB LINK]
  demo: '',   // [ADD DEMO LINK]
}

export type Project = { title: string; description: string; stack: string[]; image: string; github: string; demo: string; placeholder?: boolean }
export const PROJECTS: Project[] = [
  {
    title: 'Tennis Ball and Player Tracking',
    description: 'A computer vision project that detects and tracks a tennis ball and the players on court.',
    stack: ['YOLO', 'Computer Vision', 'Object Detection', 'Object Tracking'],
    image: '[ADD PROJECT IMAGE]', github: '', demo: '',
  },
  {
    title: '[ADD OTHER PROJECT]',
    description: '[ADD SHORT DESCRIPTION]',
    stack: ['[ADD TECH STACK]'],
    image: '[ADD PROJECT IMAGE]', github: '', demo: '', placeholder: true,
  },
]

export const MUSIC = {
  skills: ['Live performance', 'Keyboard / piano', 'Band work', 'Arrangement', 'Rehearsal coordination', 'Music community experience'],
  highlight: 'I performed at the Hanoi Opera House at a large formal event.',
  highlightNote: '[ADD EVENT NAME AND DATE]',
  media: [
    { kind: 'Performance video', label: '[ADD VIDEO LINK]' },
    { kind: 'Audio recording', label: '[ADD AUDIO FILE]' },
    { kind: 'Photo', label: '[ADD PHOTO]' },
    { kind: 'Event photo', label: '[ADD EVENT PHOTO]' },
  ],
}

export const TIMELINE = [
  { when: '[ADD DATES]', title: 'Music club', role: 'Professional board member, later advisor', points: ['Band training and rehearsal coordination', 'Performance preparation'] },
  { when: '[ADD DATES]', title: 'Live performance', role: 'Keyboard / piano', points: ['Hanoi Opera House', '[ADD OTHER PERFORMANCES]'] },
  { when: '[ADD DATES]', title: 'Software development', role: 'Academic and personal projects', points: ['HiSync', 'Tennis ball and player tracking', '[ADD OTHER PROJECTS]'] },
]

export const SERVICES = [
  'Software development', 'Android / Java projects', 'Music-related software', 'Music arrangement', 'Keyboard / piano work', 'Performance-related projects',
]
