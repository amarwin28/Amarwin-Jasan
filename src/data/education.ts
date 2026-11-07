import { EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    id: 'be-cse',
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Dhaanish Chennai College of Engineering',
    period: '2024 — Present',
    grade: 'CGPA: 8.8',
    current: true,
    details: [
      'Currently in 2nd Year',
      'Focusing on Data Structures, Algorithms, Software Engineering, and AI Applications',
      'Active participant in technical symposiums, hackathons, and collegiate coding initiatives'
    ]
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Education (12th)',
    institution: 'Maria Rafols Matriculation School',
    period: 'Completed',
    grade: 'Percentage: 84%',
    current: false,
    details: [
      'Mathematics, Physics, Chemistry, and Computer Science stream',
      'Graduated with 84% academic distinction'
    ]
  },
  {
    id: 'sslc',
    degree: 'Secondary Education (SSLC)',
    institution: 'Maria Rafols Matriculation School',
    period: 'Completed',
    current: false,
    details: [
      'Foundational secondary education with focus on science and mathematics'
    ]
  }
];

