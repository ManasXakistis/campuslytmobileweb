// Central content layer.
// In production this shape is served by GET /api/content from the admin-managed
// database — see src/services/api.js. Until that backend is connected, this file
// acts as the default/fallback content so the site is never blank.

export const brand = {
  name: 'CampusLYT',
  tagline: 'Your Campus. Your Network.',
};

export const hero = {
  headline: 'Your Campus. Your Network.',
  subhead:
    'Connect with your campus community, discover people, meet seniors and alumni, join communities, and stay in the loop  all in one place.',
  ctaPrimary: 'Download CampusLYT',
  ctaSecondary: 'Explore CampusLYT',
};

export const whyCampusLYT = {
  heading: 'Campus life is more connected than ever. So why does everyone still feel disconnected?',
  problems: [
    { title: 'Finding the right people', text: 'Your batch is huge. Finding people who share your interests, branch, or hometown shouldn\u2019t be guesswork.' },
    { title: 'Meeting seniors', text: 'The seniors who\u2019ve already solved your problem are one floor away  and you\u2019ve never spoken to them.' },
    { title: 'Connecting with alumni', text: 'Alumni want to help. There\u2019s just no easy, campus-native way to reach them.' },
    { title: 'Discovering communities', text: 'Clubs exist. Finding out about them still happens by word of mouth.' },
    { title: 'Staying updated', text: 'Campus news lives across ten WhatsApp groups, three noticeboards, and one forgotten Instagram page.' },
    { title: 'Organized communication', text: 'Conversations that matter get buried in group chats that never stop buzzing.' },
  ],
  resolution:
    'CampusLYT brings people, seniors, alumni, communities and campus news into one connected space  built for how your campus actually works.',
};

export const features = [
  {
    id: 'discover-people',
    title: 'Discover People',
    description: 'Find students across your campus by branch, year, interests or hometown.',
    icon: 'Users',
  },
  {
    id: 'connect-seniors',
    title: 'Connect With Seniors',
    description: 'Reach out to seniors directly and learn from people who\u2019ve been exactly where you are.',
    icon: 'GraduationCap',
  },
  {
    id: 'meet-alumni',
    title: 'Meet Alumni',
    description: 'Build connections that outlast your campus years, from mentorship to opportunities.',
    icon: 'Handshake',
  },
  {
    id: 'smart-profiles',
    title: 'Smart Profiles',
    description: 'One identity : name, branch, year, bio, interests and location — built for campus life.',
    icon: 'IdCard',
  },
  {
    id: 'messaging',
    title: 'Messaging',
    description: 'Private, one to one conversations without the noise of an oversized group chat.',
    icon: 'MessageCircle',
  },
  {
    id: 'communities',
    title: 'Communities & Clubs',
    description: 'Join Clubss built around what you actually care about  from coding to cricket.',
    icon: 'Users2',
  },
  {
    id: 'campus-news',
    title: 'Campus News',
    description: 'Announcements, events and activity from your campus, in one reliable feed.',
    icon: 'Newspaper',
  },
  {
    id: 'profile-sharing',
    title: 'Profile Sharing',
    description: 'Share your CampusLYT profile with a single link — on or off campus.',
    icon: 'Share2',
  },
];

export const appShowcaseScreens = [
  { id: 'explore', label: 'Explore', caption: 'See who\u2019s around you on campus.', screenshot: 'Explore' },
  { id: 'profile', label: 'Profile', caption: 'Your identity: branch, year, interests.', screenshot: 'Profile' },
  { id: 'connections', label: 'Connections', caption: 'Students, seniors, and alumni in one list.', screenshot: 'Connections' },
  { id: 'chat', label: 'Chat', caption: 'Direct messages, kept simple.', screenshot: 'Chat' },
  /*{ id: 'groups', label: 'Groups', caption: 'Communities built around your interests.', screenshot: null },*/
  { id: 'news', label: 'News', caption: 'Campus events and announcements.', screenshot: 'News' },
];

export const seniorsAlumni = {
  heading: 'Learn from the people who came before you.',
  text: 'Discover seniors who\u2019ve navigated the exact course, club, or placement process you\u2019re facing. Reach alumni who remember being in your seat — and are often glad to help.',
  points: [
    'Discover seniors by branch and interest',
    'Ask for guidance on courses, clubs and careers',
    'Learn from real experiences, not forums',
    'Build professional connections early',
    'Connect with alumni across industries',
    'Discover opportunities shared within your network',
  ],
};

export const communities = [
  { id: 'coding', name: 'Coding', description: 'Build, ship, and debug together.' },
  { id: 'entrepreneurship', name: 'Entrepreneurship', description: 'For the ones building something of their own.' },
  { id: 'sports', name: 'Sports', description: 'From weekend matches to campus tournaments.' },
  { id: 'gaming', name: 'Gaming', description: 'Squads, tournaments, and casual sessions.' },
  { id: 'photography', name: 'Photography', description: 'Campus life, one frame at a time.' },
  { id: 'music', name: 'Music', description: 'Jam sessions, covers, and open mics.' },
  { id: 'design', name: 'Design', description: 'Visual thinkers and craft-obsessed makers.' },
  { id: 'cp', name: 'Competitive Programming', description: 'Contests, practice rooms, and rankings.' },
 /* { id: 'clubs', name: 'Clubs', description: 'Every official campus club, in one place.' },*/
  { id: 'events', name: 'Events', description: 'What\u2019s happening on campus, and when.' },
];

export const howItWorks = [
  { step: '01', title: 'Create your profile', text: 'Add your branch, year, interests and a bit about you.' },
  { step: '02', title: 'Discover your campus', text: 'Find students, seniors, alumni and communities around you.' },
  { step: '03', title: 'Connect and participate', text: 'Message, join Clubs, and stay updated on what\u2019s happening.' },
];

export const trust = {
  heading: 'Built with your privacy in mind',
  points: [
    { title: 'User-controlled profiles', text: 'You decide what appears on your profile and who can see it.' },
    { title: 'Privacy-conscious design', text: 'Personal information is never shared without your action.' },
    { title: 'Reporting tools', text: 'Report content or accounts that violate community guidelines.' },
    { title: 'Community moderation', text: 'Reports are reviewed to keep the community safe and on-topic.' },
    { title: 'Secure authentication', text: 'Account access is protected using industry-standard practices.' },
    { title: 'Responsible data handling', text: 'Data is handled in line with our Privacy Policy at all times.' },
  ],
};

// Placeholder stats — must be replaced by real backend/admin values before launch.
export const socialProof = {
  stats: [
    { label: 'Students', value: '100+' },
    { label: 'Clubs', value: '50+' },
    { label: 'Connections made', value: '300+' },
  ],
  
  testimonials: [
    {
      id: 't1',
      name: 'Ananya R.',
      role: 'Final year, Computer Science',
      quote: 'I found my entire project team through a CampusLYT community. Would\u2019ve taken a semester otherwise.',
    },
    {
      id: 't2',
      name: 'Rohit K.',
      role: 'Second year, Mechanical Engineering',
      quote: 'Messaged a senior about internships on a whim. That conversation turned into an actual referral.',
    },
    {
      id: 't3',
      name: 'Meera S.',
      role: 'Alumna, 2022 batch',
      quote: 'It\u2019s nice having one place to stay in touch with juniors who reach out for advice.',
    },
  ],
};

export const story = {
  heading: 'About CampusLYT',
  text: 'CampusLYT is designed to bring the campus ecosystem :- students, seniors, juniors, alumni and communities  into one connected digital space. Instead of scattering campus life across chat apps, noticeboards and word of mouth, CampusLYT gives every campus a single place to discover people, join communities, and stay connected long after graduation.',
};

export const finalCTA = {
  headline: 'Your campus is already here.',
  subhead: 'Now make it easier to connect.',
  cta: 'Download CampusLYT',
};

export const contactCategories = [
  'General',
  'Technical Issue',
  'Account',
  'Report',
  'Partnership',
  'Feedback',
];

export const footerLinks = {
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'About', href: 'src\pages\About.jsx' },
    { label: 'Contact', href: 'src\pages\Contact.jsx' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Community Guidelines', href: '/community-guidelines' },
    { label: 'Delete Account', href: '/delete-account' },
  ],
  // Only include a social link here once the account actually exists.
  social: [
    // { label: 'Instagram', href: 'https://instagram.com/campuslyt' },
  ],
};
