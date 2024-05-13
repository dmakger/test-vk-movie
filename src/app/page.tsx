import { MovieList } from "@/entities/Movie/ui/List/MovieList";
import { RATING_KP__MOVIE_QUERY } from "@/shared/data/query.data";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";

export default function Home() {
  return (
    <main>
      <Wrapper1280>
        <MovieList {...RATING_KP__MOVIE_QUERY} />
      </Wrapper1280>
    </main>
  );
}
