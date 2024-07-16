import React from 'react'
import Navigation from '../_components/Navigation'
import Counter from '@/app/_components/Counter'

export const metadata = {
    title : "Cabins"
}

const page = async () => {


    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return (
        <div>
            cbins
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}

            </ul>
            <Counter />
        </div>
    )
}

export default page