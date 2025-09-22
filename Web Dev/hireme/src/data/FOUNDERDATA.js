import FounderModel from '../models/FounderModel.js';

// Import team member images
import SURAJ_IMG from '../assets/SURAJ.png';
import SHIVANG_IMG from '../assets/SHIVANG.png';
import RUDRA_IMG from '../assets/RUDRA.png';
import AMIT_IMG from '../assets/AMIT.png';

// Create founder instances using FounderModel
const suraj = new FounderModel(
  'SURAJ',
  'Backend Dev',
  SURAJ_IMG,
  'Suraj specializes in building robust server-side logic, APIs, and database management. He ensures the backbone of our application is secure and scalable.',
  {
    linkedin: 'https://linkedin.com/in/suraj',
    github: 'https://github.com/suraj'
  }
);

const shivang = new FounderModel(
  'SHIVANG',
  'Web Dev',
  SHIVANG_IMG,
  'Shivang specializes in creating modern web applications using cutting-edge technologies. He focuses on building responsive and interactive user experiences.',
  {
    linkedin: 'https://linkedin.com/in/shivang',
    github: 'https://github.com/shivang'
  }
);

const rudra = new FounderModel(
  'RUDRA',
  'Android Dev',
  RUDRA_IMG,
  'Rudra brings our ideas to life on mobile platforms, focusing on performance and usability for all app users.',
  {
    linkedin: 'https://linkedin.com/in/rudra',
    github: 'https://github.com/rudra'
  }
);

const amit = new FounderModel(
  'AMIT',
  'Designer (UI/UX)',
  AMIT_IMG,
  'Amit designs intuitive layouts and stunning visuals, ensuring our brand and product are both attractive and user-friendly.',
  {
    linkedin: 'https://linkedin.com/in/amit',
    behance: 'https://behance.net/amit'
  }
);

// Export all founders as an array
const founders = [suraj, shivang, rudra, amit];

// Export individual founders
export { suraj, shivang, rudra, amit };

// Export founders array as default
export default founders;

// Export helper functions
export const getFounderByName = (name) => {
  return founders.find(founder => founder.name.toLowerCase() === name.toLowerCase());
};

export const getFoundersByRole = (role) => {
  return founders.filter(founder => founder.role.toLowerCase().includes(role.toLowerCase()));
};

export const getAllFounders = () => {
  return founders.map(founder => founder.getDetails());
};
