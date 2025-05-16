export const userApi = {
  getUser: async () => {
    const response = await fetch("http://localhost:5173/data/MockedUsers.json");
    const { data } = await response.json();
    return data;
  },
};
