import React from 'react'
import Navigation from '../_components/Navigation'
import Counter from '../_components/Counter'

const page = async () => {


    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    return (
        <div>
            cabins
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}

            </ul>
            <Counter/>
        </div>
    )
}

export default page