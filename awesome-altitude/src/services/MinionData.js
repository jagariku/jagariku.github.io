// ベースURLの設定を環境変数から読み込む
const BASE_URL = import.meta.env.PUBLIC_BASE_URL;

export async function fetchMinionData() {
  try {
    const response = await fetch(`${BASE_URL}/json/minion.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch minion data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching minion data:", error);
    throw error;
  }
}
