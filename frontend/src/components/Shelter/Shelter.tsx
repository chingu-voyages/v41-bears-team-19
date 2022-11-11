import shelterPic from '../../images/amy.png'
import shelterFrame from '../../images/frame5.png'
import LocationIcon from '../../images/location.png'
import './Shelter.css'
import shelterData from '../../services/shelterData'
import PetData from '../../services/petData'
import PetCard from '../PetCard/PetCard'

const shelter = () => {    

    //placeholder data
    const shelter = shelterData[0];

    const shelterPets = PetData.map((pet) => {
        return <PetCard key={pet.id} 
                name={pet.name}
                age={pet.age}
                photo={pet.photo}
                type={pet.type}
                location={pet.location}
        />
    })

    return(
        <>
        <header className='shelter__header'>
            <div className='shelter__imgcontainer'>
                <img src={shelterPic} className='shelter__picture' alt="shelter Profile" />
                <img src={shelterFrame} className='shelter__frame' alt='shelter name' />
            </div>
            <div className='shelter__details'>
                <h2>{shelter.name}</h2>
                <span className='shelter__location'>
                    <img src={LocationIcon} alt="shelter Location" className='shelter__location-icon'/>
                    {shelter.location}
                </span>
                <p className='shelter__description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            </div>
        </header>

{/* Future buttons for donations and sponsors go here */}
 {/*        <section className='shelter__section'>
            <button className='shelter__button'>Adopt me!</button>
        </section> */}
        <div className='shelter__section'>
            <>
                <h2>Pets from {shelter.name}</h2>
                <span className='shelter__card-container'>
                {shelterData.length > 0 ? shelterPets : <p>This shelter doesn't have any pet for adoption.</p>}
                </span>
            </>
        </div>

        {/* In the future, add another section: More shelters from the same location */}
        </>
    )
}

export default shelter