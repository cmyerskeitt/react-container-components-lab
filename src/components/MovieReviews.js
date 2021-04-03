// Code MovieReviews Here
import React from 'react'

const Review = ({
    headline,
    link,
    byline,
    summary
}) => {
    return(
        <div key={headline} className="review">
            <header> 
                <a className="review-link" href={link.url}>
                    {headline} <b></b>
                </a>
               
                <span className="author">{byline}</span>
            </header>
          
            <blockquote>{summary}</blockquote>
        </div>
    )
}


const MovieReviews = ({reviews}) => 
    <div className='review-list'>
       {reviews.map(Review)}
    </div>  



export default MovieReviews