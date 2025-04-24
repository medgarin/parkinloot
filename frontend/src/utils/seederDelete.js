export async function seederDelete() {
  try {
    const response = await fetch("http://localhost:4000/seeder/", {
      method: "DELETE",
    });

    return await response.json();
  } catch (error) {
    throw error;
  }
}
