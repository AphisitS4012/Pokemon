import React from 'react'
import css from '@/index.css'
import { IPokemonDetailResponse } from '@/interface/pokemonDetail'

interface PokemonCardProps {
    data: IPokemonDetailResponse
}

const PokemonCard = ({ data }: PokemonCardProps) => {
    return (
        <div className="max-w-sm rounded-[20px] overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 p-[16px] ">
            <div className='bg-[url("/pic/poke-card-bg.png")] bg-center aspect-square bg-cover rounded-[20px]'>
                <a className=''>
                    <img className="rounded-t-lg max-h-[218px] p-[40px] w-full" src={data.image} alt="" />
                </a>
            </div>
            <div className="py-5">
                <div className=' flex justify-between'>

                    <h5 className="mb-2 text-xl font-bold tracking-tight  text-white">{data.name}</h5>
                    <h5 className="mb-2 text-xl font-bold tracking-tight  text-white">#{data.id}</h5>
                </div>

                <div className=' flex gap-2 justify-end '>
                    {data.types.map((item) => {
                        return <span className={`badge-type-${item.type.name}`}>{item.type.name}

                        </span>
                    })}

                </div>


            </div>
        </div>

    )
}

export default PokemonCard