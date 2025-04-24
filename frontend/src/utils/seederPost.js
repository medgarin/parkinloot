export async function seederPost() {
  try {
    const response = await fetch("http://localhost:4000/seeder/", {
      method: "POST",
    });

    return await response.json();
  } catch (error) {
    throw error;
  }
}
