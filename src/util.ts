export async function fetchFromHolidayApi(endpoint: string) {
  const res = await fetch(`https://date.nager.at/api/v3/${endpoint}`);
  if (!res.ok) throw new Error("Failed to fetch");
  return await res.json();
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(() => resolve(undefined), ms));
}
