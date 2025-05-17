import { useEffect } from "react";
import { UserCard } from "../../components/UserCard";
import { useUserInfo } from "../../hooks/useUserInfo";
import { Reports } from "../../components/Reports/Reports";

export const HomePage = () => {
  const { getUserById, user } = useUserInfo();

  useEffect(() => {
    getUserById().catch(null);
  }, [getUserById]);
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      </div>
      <section className="flex flex-row">
        {/* Add user componet with initial data name, email and picture */}
        <h2 className="text-xl font-bold mb-4">
          Bienvenido User {<UserCard user={user} />}
        </h2>
        <Reports />
      </section>
    </section>
  );
};
