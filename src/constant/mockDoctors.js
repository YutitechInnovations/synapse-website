export const mockDoctors = Array.from({ length: 50 }, (_, i) => ({
  name: `Dr. ${["John", "Beatrice", "Joe", "Smith", "Andrew", "Paul"][i % 4]} Doe`,
  email: `doctor${i + 1}@clinic.com`,
  mobile: `+91 98765${(10000 + i).toString().slice(-5)}`,
  rewards: Math.floor(Math.random() * 5000) + 100,
}));
