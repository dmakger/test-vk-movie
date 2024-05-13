import { MovieList } from "@/entities/Movie/ui/List/MovieList";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";

export default function Home() {
  return (
    <main>
      <Wrapper1280>
        <MovieList title={'Лучшие фильмы по мнению Кинопоиска'} 
                  paramsMovie={{page: 1, limit: 36, sortField: "rating.kp", sortType: "-1", type: "movie"}} />
      </Wrapper1280>
    </main>
  );
}
