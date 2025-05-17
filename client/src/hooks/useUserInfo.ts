import { useCallback, useState } from "react";
import type { User } from "../types/Users";
import { UserResoruce } from "../services/UserRosurce";

export const useUserInfo = () => {
  const [user, setUser] = useState<User | undefined>(undefined);

  // useCallback is used to memoize the function so that it doesn't get recreated on every render
  const getUserById = useCallback(async () => {
    const data = await UserResoruce.getUser();
    setUser(data);
  }, []);

  return {
    user,
    getUserById,
  };
};
