import {API_URL} from "../../../(home)/page";
import {Suspense} from "react";
import MovieVideos from "../../../../components/movie-video";
import MovieInfo from "../../../../components/movie-info";



export default async function MovieDetail({params: {id}}:{params: {id:string}}) {
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