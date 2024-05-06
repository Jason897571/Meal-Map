
import { useQuery } from '@apollo/client'

const ListResult = () => {

  return (
    <div className="result-list">
      <h1 className="text-2xl">Result List</h1>
      {data.restaurants.map((restaurant, index) => (
        <div
          key={index}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img className="rounded-t-lg" src={restaurant.photoUrl} alt="" />
          </a>
          <div className="p-5 flex justify-between">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {restaurant.name}
              </h5>
            </a>
            <button className="">review</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListResult
