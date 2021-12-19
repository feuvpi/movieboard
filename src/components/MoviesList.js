import { responsiveContainer } from "../styles/responsiveContainer";
import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
    <section>

    <responsiveContainer>
        <ul>
            {movies.map(m => <MovieItem movie={m} />)}
        </ul>
    </responsiveContainer>

    </section>
);


