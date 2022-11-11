interface Pets {
    id: number,
    name: string,
    age: number,
    photo: string,
    type: string,
    location: string,
    shelter: string
}

const PetData: Pets[] = [
    {
        id: 1,
        name: 'Barnaby',
        age: 1,
        photo: './pet1.jpg',
        type: 'Cat',
        location: 'Boulder',
        shelter: 'Love Pets'
    },
    {
        id: 2,
        name: 'Mary',
        age: 1,
        photo: './pet1.jpg',
        type: 'Cat',
        location: 'Boulder',
        shelter: 'Love Pets'
    },
    {
        id: 3,
        name: 'Maryann',
        age: 1,
        photo: './pet1.jpg',
        type: 'Cat',
        location: 'Boulder',
        shelter: 'Love Pets'
    }

]

export default PetData;