import { getImgUrl } from '../../cervise/Api';
import Notification from '../Notification/Notification';
import s from "./CastList.module.css"
const CastList = ({ cast }) => {
  if (!cast.length)
    return (
      <Notification>
        There is no information about the movie cast or it's a cartoon
      </Notification>
    );
  return (
    <ul className={s.castList}>
      {cast.map(({ cast_id, name, character, profile_path }) => {
        return (
          <li key={cast_id} className={s.castItem}>
            {profile_path && (
              <img
                src={getImgUrl(profile_path, 'profile', 'm')}
                alt={`The photo of ${name}`}
              />
            )}
            <span className={s.actorName}>{name}</span>
            <span className={s.character}>
              <b>Character:</b> {character}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
export default CastList;







































// import s from "./Contact.module.css"

// const Contact = ( { name, number, id, handleDelete}) => {
//     return (        
//         <li className={s.ContactItem}>
//             <div>
//                 <p className={s.text}>{name}</p>
//                 <p>{number}</p>
//             </div>
//       <button className={s.deletebtn} onClick={() => handleDelete(id)}>
//         Delete
//       </button>
//     </li>
//             );   

// };
// export default Contact;