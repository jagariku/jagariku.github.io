const BASE_URL = import.meta.env.PUBLIC_BASE_URL;
export async function fetchHeroData() {
  try {
    const response = await fetch(`${BASE_URL}/json/hero.json`);
    if (!response.ok) throw new Error("Failed to fetch hero data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching hero data:", error);
    throw error;
  }
}

export async function fetchHeroDetails() {
  try {
    const response = await fetch(`${BASE_URL}/json/hero-detail.json`);
    if (!response.ok) throw new Error("Failed to fetch hero details");
    return await response.json();
  } catch (error) {
    console.error("Error fetching hero details:", error);
    throw error;
  }
}
