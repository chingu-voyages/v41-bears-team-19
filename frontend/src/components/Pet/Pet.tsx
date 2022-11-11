import PetPic from '../../images/amy.png'
import petFrame from '../../images/frame7.png'
import LocationIcon from '../../images/location.png'
import './Pet.css'
import PetData from '../../services/petData'
import PetCard from '../PetCard/PetCard'

const Pet = () => {    

    //placeholder data
    const pet = PetData[0];

    const morePets = PetData.map((pet) => {
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
        <header className='pet__header'>
            <div className='pet__imgcontainer'>
                <img src={PetPic} className='pet__picture' alt="Pet Profile" />
                <img src={petFrame} className='pet__frame' alt='pet name' />
            </div>
            <div className='pet__details'>
                <h2>{pet.name}</h2>
                <span className='pet__location'>
                    <img src={LocationIcon} alt="pet Location" className='pet__location-icon'/>
                    {pet.location}
                </span>

                <span className='pet__pill-container'>
                    <div className='pet__pill'>{pet.age}</div>
                    <div className='pet__pill'>Male</div>
                    <div className='pet__pill'>Vaccinated</div>
                </span>
                
            </div>
        </header>

        <section className='pet__section'>
            <p className='pet__description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <p><b>Shelter: </b> {pet.shelter}</p>
            
            <button className='pet__button'>Adopt me!</button>
        </section>
        <div className='pet__section'>
            <>
                <h2>More pets from the same shelter</h2>
                <span className='pet__card-container'>
                {PetData.length > 0 ? morePets : <p>This pet hasn't adopted any pet yet.</p>}
                </span>
            </>
        </div>

        {/* In the future, add another section: More pets from the same location */}
        </>
    )
}

export default Pet