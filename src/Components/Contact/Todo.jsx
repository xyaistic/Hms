import React, { useState, useEffect } from 'react'

const Todo = () => {
  const list = [
    {
      name:'ziya',
      title:'Afridi',
      status:'Pending',
    }

  ]
  const [lists, setLists] = useState(list)

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const title = event.target.elements.title.value;
    const status = event.target.elements.status.value;
    const isChecked = status == 'Done';
    const newList = {
      name,
      title,
      status,
      isChecked
    }
    setLists((prevList) => {
      return prevList.concat(newList)
    })
  }

  const handleCheckboxChange = (index) => {
    const updatedLists = [...lists];
    updatedLists[index].status =
    updatedLists[index].status === 'Done' ? 'Pending' : 'Done';
    updatedLists[index].isChecked = updatedLists[index].status === 'Done'// Update isChecked property
    setLists(updatedLists);
  }


  useEffect(() => {
    const updatedLists = lists.map((item) => {
      if (item.status === 'Pending') {
        return { ...item, isChecked: false };
      } else {
        return { ...item, isChecked: true };
      }
    });
    setLists(updatedLists);
  }, []);

  return (
    <>

      <div className=' bg-gray-300 w-full h-screen flex justify-evenly items-center '>
        <div className="flex items-center  p-11 min-h-96">
          <table className=" rounded-lg text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className=" bg-slate-100 text-black uppercase bg-white-700 text-md">
              <tr>
                <th scope="col" className="px-6 py-3 w-36">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 w-36">
                  Title
                </th>

                <th scope="col" className="px-6 py-3 w-36">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 w-36">
                  Check
                </th>
              </tr>
            </thead>
            <tbody>
              {lists.map((element, index) => (
                <tr className="bg-white text-lg border-b dark:bg-gray-800 dark:border-gray-700 ">
                  <th key={index} scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                    {element.name}
                  </th>
                  <td className="px-6 py-4 text-base whitespace-nowrap text-white">
                    {element.title}

                  </td>
                  <td className="px-6 py-4 text-base whitespace-nowrap text-white ">
                    <span className='rounded-lg pl-3 pr-3 pt-1 pb-1' style={{ backgroundColor: element.status === 'Done' ? '#6df789' : '#ff6363' }}>{element.status}</span>
                  </td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap text-white flex mt-2 justify-center items-center">
                    <input
                      name='checkBox'
                      type="checkbox"
                      checked={element.isChecked}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        <div className=' bg-gray-50 rounded-lg p-11'>
          <form onSubmit={handleSubmit}>
            <div className="mb-2 w-96 ">
              <label for="base-input" className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">Name</label>
              <input required placeholder='Enter your full name' name='name' type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <div className="mb-2 w-96 ">
              <label for="base-input" className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">Title</label>
              <input required placeholder='Put in your task title' name='title' type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <label for="countries" className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">Status</label>
            <select id="countries" name='status' className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">

              <option>Pending</option>
              <option>Done</option>
            </select>
            <button type="submit" className="text-white mt-4 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Todo
