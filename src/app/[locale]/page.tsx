import { getDictionary } from "../i18n/getDictionary";
import { fetchGames } from "../api";
import GameGrid from "../components/GameGrid";

export default async function HomePage({
  params,
}: {
  params: { locale: "en" | "bg" };
}) {
  const dict = await getDictionary(params.locale);
  const allGames = await fetchGames();

  return (
    <main>
      <h1 className="text-2xl font-bold text-center my-6">{dict.title}</h1>
      <GameGrid allGames={allGames} dict={dict} />
    </main>
  );
}
