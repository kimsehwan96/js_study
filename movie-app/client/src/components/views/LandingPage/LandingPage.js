import React, { useEffect,  useState } from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config'
import MainImage from './Sections/MainImage'

function LandingPage() {

    const [Movies, setMovies] = useState([]); //최초 상태는 빈배열.

    const [MainMovieImage, setMainMovieImage] = useState(null);

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetch(endpoint)
        .then(response => response.json()) //아 이렇게 response를 json으로 바꾸는것도 프라미스 객체처럼 쓸 수 있나보네.. 체이닝!!
        .then(response => {
            console.log(response)
            setMovies([response.results]);
            setMainMovieImage(response.results[0]);
        })
    }, [])

    return (
        <>
        <div style={{ width: '100%', magin: '0'}}>
        {MainMovieImage && 
            <MainImage 
            image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
            title={MainMovieImage.original_title}
            text={MainMovieImage.overview}
            />
        }
            {/* Main Image */ }
           

            <div style={{ width: '85%', margin: '1rem auto' }}>

            <h2> Movies by latest </h2>
            <hr />

            {/* Movie Grid Cards*/}


            </div>

            <div style ={{ display : 'flex', justifyContent: 'center '}}>
                <button> Load More </button>
            </div>

        </div>

        </>
    )
}

export default LandingPage
