// import React from "react"

import { useParams } from "react-router-dom"

const DetailPage = () => {

    const { name } = useParams()


    return (
        <div className=' w-[90%] m-[auto] max-[1100px]'>
            <div className='flex justify-center'>
                <img src="/pic/logo.webp" className='max-h-[80px] mt-[20px]' />
            </div>

            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-[20px] mt-[40px]'>
                {name}
                {/* {pokemon.data?.map((item) => {
                    return <PokemonCard
                        image={item.image || ''}
                        name={item.name}
                        id={item.id}
                        types={item.types} />
                })} */}
            </div>
        </div>
    )
}

export default DetailPage