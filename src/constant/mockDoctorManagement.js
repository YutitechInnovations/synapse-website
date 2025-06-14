export const mockDoctorList = Array.from({ length: 137 }, (_, i) => ({
  user_id: i + 1,
  full_name: `Dr. ${
    ["Ted", "Indiana", "Jaden", "Andrew", "Ben"][i % 4]
  } ${["Doe", "Smith", "Lee", "Patel", "Paul"][i % 4]}`,
  email: `doctor${i + 1}@example.com`,
  mobile_number: `+91 98765${(10000 + i).toString().slice(-5)}`,
  ios_number: `IOS-${i + 1000}`,
  status: i % 3 === 0 ? "approved" : i % 3 === 1 ? "rejected" : "pending",
}));
