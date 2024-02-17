import React from 'react'
import { generationList, typesList, sortList } from '@/utills/optionList'
import { useSearchForm } from '@/components/SearchForm'

const SearchForm = () => {
    const { fieldKeyword } = useSearchForm()
    return (
        <form className='grid grid-cols-4 gap-[20px]'>
            <div>
                <label htmlFor="generation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Generation</label>
                <select id="generation" className="bg-gray-50 capitalize border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                    {generationList.map((item, index) => {
                        <label htmlFor="generation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Generation</label>
                        return <option className=' capitalize' key={`generation-key-${index}`} value={index}>{item.name}</option>
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                <select id="type" className="bg-gray-50 capitalize border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                    {typesList.map((item, index) => {
                        <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                        return <option className=' capitalize' key={`type-key-${index}`} value={index}>{item}</option>
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="sort" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sort By</label>
                <select id="sort" className="bg-gray-50 capitalize border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {sortList.map((item, index) => {
                        <label htmlFor="sort" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sort By</label>
                        return <option className=' capitalize' key={`sort-key-${index}`} value={index}>{item}</option>
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="generation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
                <input
                    {...fieldKeyword}
                    id="generation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
        </form>
    )
}

export default SearchForm