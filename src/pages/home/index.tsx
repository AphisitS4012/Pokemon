
import PokemonCard from '@/components/PokemonCard'
import SearchForm from '@/components/SearchForm'
import { usePokemonListStore } from '@/store/pokemonList'

const HomePage = () => {

    const { pokemon } = usePokemonListStore()

    return (
        <div className=' w-[90%] m-[auto] max-[1100px]'>
            <div className='flex justify-center'>
                <img src="/pic/logo.webp" className='max-h-[80px] mt-[20px]' />
            </div>
            <SearchForm />

            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-[20px] mt-[40px]'>
                {pokemon.data?.map((item) => {
                    return <PokemonCard
                        image={item.image || ''}
                        name={item.name}
                        id={item.id}
                        types={item.types} />
                })}
            </div>
        </div>


    )
}

export default HomePage