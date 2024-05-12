import { MovieList } from "@/entities/Movie/ui/List/MovieList";

export default function Home() {
  return (
    <main>
      <MovieList title={'Лучшие фильмы по мнению Кинопоиска'} paramsMovie={{page: 1, limit: 40, sortField: "rating.kp", sortType: "-1", type: "movie"}} />
    </main>
  );
}
