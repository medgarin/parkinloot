import { useEffect } from "react";
import { UserCard } from "../../components/UserCard";
import { useUserInfo } from "../../hooks/useUserInfo";
import { Reports } from "../../components/Reports/Reports";
import { OccupationChart } from "../../components/Reports/OccupationChart";

export const HomePage = () => {
  const { getUserById, user } = useUserInfo();

  useEffect(() => {
    getUserById().catch(null);
  }, [getUserById]);
  return (
    <section className="flex flex-col container mx-auto">
      <UserCard user={user} />
      <section id="reports" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Reports ListType="BASIC" />
        <OccupationChart />
      </section>
    </section>
  );
};
