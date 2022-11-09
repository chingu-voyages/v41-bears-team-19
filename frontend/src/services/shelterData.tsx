interface Shelters {
    id: number,
    name: string,
    location: string,
    photo: string
}

const ShelterData: Shelters[] = [
    {
        id: 1,
        name: 'Dream Cats',
        location: 'Boulder, Colorado',
        photo: './shelter1.jpg',
    },
    {
        id: 2,
        name: 'Dream Dogs',
        location: 'New York, New York',
        photo: './shelter1.jpg',
    },
    {
        id: 3,
        name: 'Cherish Dogs',
        location: 'New York, New York',
        photo: './shelter1.jpg',
    }

]

export default ShelterData;