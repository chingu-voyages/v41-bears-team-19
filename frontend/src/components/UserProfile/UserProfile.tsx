import UserPic from '../../images/placeholder/user1.jpg';
import UserFrame from '../../images/frame8.png';
import LocationIcon from '../../images/location.png';
import './UserProfile.css';
import ShelterData from '../../services/shelterData';
import PetData from '../../services/petData';
import PetCard, { Pet } from '../PetCard/PetCard';
import ShelterCard from '../ShelterCard/ShelterCard';

const UserProfile = () => {
  const adoptedPets = PetData.map((pet: Pet) => {
    return <PetCard pet={pet} key={pet.id} />;
  });

  const sheltersDonated = ShelterData.map((shelter) => {
    return (
      <ShelterCard
        key={shelter.id}
        name={shelter.name}
        photo={shelter.photo}
        location={shelter.location}
      />
    );
  });

  return (
    <>
      <header className="user__header">
        <div className="user__imgcontainer">
          <img
            src={UserPic}
            className="user__picture"
            alt="User Profile -- add User's name here"
          />
          <img src={UserFrame} className="user__frame" alt="User name" />
        </div>
        <div className="user__details">
          <h2>User Name</h2>
          <span className="user__location">
            <img
              src={LocationIcon}
              alt="User Location"
              className="user__location-icon"
            />
            City, State
          </span>
          <p className="user__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
      </header>

      <div className="user__section">
        <>
          <h2>Adopted</h2>
          <span className="user__card-container">
            {PetData.length > 0 ? (
              adoptedPets
            ) : (
              <p>This user hasn't adopted any pet yet.</p>
            )}
          </span>
        </>
      </div>

      <section className="user__section">
        <>
          <h2>Donations</h2>
          <span className="user__card-container">
            {ShelterData.length > 0 ? (
              sheltersDonated
            ) : (
              <p>This user hasn't donated to any shelter yet.</p>
            )}
          </span>
        </>
      </section>
    </>
  );
};

export default UserProfile;
