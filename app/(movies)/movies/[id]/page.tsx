import {API_URL} from "../../../(home)/page";
import {Suspense} from "react";
import MovieVideos from "../../../../components/movie-video";
import MovieInfo from "../../../../components/movie-info";

interface IParams {
    params: {id: string};
}

export async function generateMetadata({params: {id}}:IParams) {
    return {
        title: "lalal"
    }
}

export default async function MovieDetail({params: {id}}:IParams) {
   return (
       <div>
           <Suspense fallback={<h1>Loading movie vides</h1>}>
               <MovieVideos id={id} />
           </Suspense>
           <Suspense>
               <MovieInfo id={id} />
           </Suspense>
       </div>
   )
}