import style from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={style.card}>
      <div className={style.profile}>
        <img src={image} alt="User avatar" className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span className={style.label}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span className={style.label}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
