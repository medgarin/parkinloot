import React from "react";
import { seederPost } from "../utils/seederPost";
import { seederDelete } from "../utils/seederDelete";

export function SeederButtons() {
  const handleSeeder = async () => {
    try {
      const result = await seederPost();
    } catch (error) {}
  };

  const handleDropSeeder = async () => {
    try {
      const result = await seederDelete();
    } catch (error) {}
  };

  return (
    <div>
      <button className="seeder--button" onClick={handleSeeder}>
        Seeder
      </button>
      <button
        className="seeder--button seeder--button-red"
        onClick={handleDropSeeder}
      >
        Drop seeder
      </button>
    </div>
  );
}
