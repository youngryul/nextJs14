
// 순수 리액트에서 사용하는 data fetch 방식으로 nextjs에서는 사용 권장하지 않음 (client에서 소스를 볼 수 있기 때문)

"use client";

import {Metadata} from "next";
import {useEffect, useState} from "react";

// export const metadata :Metadata= {
//     title: "Home"
//
// }

export default function Page() {
    const [isLoading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
        const json = await response.json();
        setMovies(json);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])
    return (
        <div>
            {isLoading ? "Loading..." : JSON.stringify(movies)}
        </div>
    )
}