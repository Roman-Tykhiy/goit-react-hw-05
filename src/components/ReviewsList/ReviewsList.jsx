import s from "./ReviewsList.module.css"
import Notification from '../Notification/Notification';

const ReviewsList = ({ reviews }) => {
  if (!reviews.length)
    return <Notification>There are no reviews now</Notification>;
  return (
    <ul className={s.reviewList}>
      {reviews.map(({ id, author, content, created_at }) => {
        const date = new Date(created_at);
        return (
          <li key={id} className={s.reviewItem}>
            <h3 className={s.authorName}>Author: {author}</h3>
            <p className={s.reviewContent}>{content}</p>
            <p className={s.reviewDate}>
              {date.getDay()}.{date.getMonth() + 1}.{date.getFullYear()}
            </p>
            <hr className={s.horizontalRule} />
          </li>
        );
      })}
    </ul>
  );
};
export default ReviewsList;