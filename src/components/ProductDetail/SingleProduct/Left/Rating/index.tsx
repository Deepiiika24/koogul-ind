import type React from 'react'

const StarRating: React.FC<{ rating: any }> = ({rating}) =>
 {
    const fullStars = Math.floor(rating)
    const partialStar = rating - fullStars
    return (
      <div className="d-flex mb-4">
        {[...Array(fullStars)].map((_, index) => (
          <i key={index} className="fa fa-star text-secondary" />
        ))}
        {partialStar > 0 && (
          <i className="fa fa-star text-secondary" />
        )}
        {[...Array(5 - fullStars - (partialStar > 0 ? 1 : 0))].map((_, index) => (
          <i key={index} className="fa fa-star " />
        ))}
      </div>
    )
  }
export default StarRating
