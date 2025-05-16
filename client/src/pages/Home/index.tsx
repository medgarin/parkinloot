import { List } from "../../components/List/List";
import { UserCard } from "../../components/UserCard";

export const HomePage = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      </div>
      <section className="flex flex-row">
        {/* Add user componet with initial data name, email and picture */}
        <h2 className="text-xl font-bold mb-4">
          Bienvenido User {<UserCard />}
        </h2>
        <List />
      </section>
    </section>
  );
};
