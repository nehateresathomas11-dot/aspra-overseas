export type DestinationCard = {
  id: number;
  name: string;
  code: string;
  flag: string;
  region: string;
  badge: string;
  summary: string;
  description: string;
  tuition: string;
  duration: string;
  highlights: string;
};

export const destinationCards: DestinationCard[] = [
  {
    id: 1,
    name: 'Germany',
    code: 'de',
    flag: '/germany.jpeg',
    region: 'Study & Work',
    badge: 'Top Choice',
    summary: 'Healthcare careers, high demand, and strong work-life balance.',
    description: 'Focus on Healthcare Careers including Nurses, Physiotherapists, Caregivers, and Allied Health Professionals.',
    tuition: 'Competitive Salary',
    duration: 'German Standards',
    highlights: 'High demand for healthcare professionals, excellent working conditions, and clear pathways to long-term settlement.',
  },
  {
    id: 2,
    name: 'Canada',
    code: 'ca',
    flag: '/canada.jpeg',
    region: 'Study & Work',
    badge: 'Fast Track',
    summary: 'LMIA-driven roles, strong salaries, and broad job opportunities.',
    description: 'LMIA-based work opportunities for both skilled and unskilled roles with high salary potential.',
    tuition: '4000 CAD+',
    duration: '6-8 Months Processing',
    highlights: 'Loan facility up to 100%, wide range of job roles, and reliable processing timelines.',
  },
  {
    id: 3,
    name: 'Australia',
    code: 'au',
    flag: '/australia.jpeg',
    region: 'Study & Work',
    badge: 'Skilled Growth',
    summary: 'Unskilled and semi-skilled pathways with solid earning potential.',
    description: 'Unskilled work opportunities in Packing & Cleaning under Sub Class 403.',
    tuition: '$5,700 - $6,000',
    duration: '6-8 Months Processing',
    highlights: 'High monthly salary, medical benefits, and overtime rewards for eligible candidates.',
  },
  {
    id: 4,
    name: 'Mauritius',
    code: 'mu',
    flag: '/mauritius.jpeg',
    region: 'Study & Work',
    badge: 'Healthcare Hub',
    summary: 'Bulk hiring, strong benefits, and immediate openings for healthcare professionals.',
    description: 'Bulk hiring for Healthcare professionals with attractive benefits and shift systems.',
    tuition: 'MUR 28,000 - 50,000',
    duration: '9 Hours Shift',
    highlights: 'Free accommodation, free transportation, and immediate openings for nurses and medical officers.',
  },
];
