import React, { useEffect, useRef, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { getAlumni, getStudent } from '../actions/auth'
import UserCard from '../components/UserCard';
import SearchBox from '@/components/SearchBox';

const SearchPage = () => {

  let alumni;
  let alumniCollection;

  let students;
  let studentsCollection;


  const [orgArr, setOrgArr] = useState([]);
  const [arr, setArr] = useState([]);
  // const [q, setQ] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [dept, setDept] = useState('');
  let q;

  const getAlumniSearch = async () => {
    alumni = await getAlumni();
    alumniCollection = alumni.result
    console.log(alumniCollection)
    setArr(alumniCollection)
  }

  const getStudentSearch = async () => {
    students = await getStudent();
    studentsCollection = students.result
    console.log(studentsCollection)
    setArr(studentsCollection)
  }

  const getAllSearch = async () => {
    await getAlumniSearch()
    await getStudentSearch()
    const newArr = [...alumniCollection, ...studentsCollection]
    setArr(newArr)
    setOrgArr(newArr)
  }

  // console.log(alumniCollection)
  // getAlumniSearch();

  
  // setArr(getAlumniSearch)

  useEffect(() => {
    console.log(arr)
    // getAlumniSearch()
    // console.log(arr)
    // getStudentSearch()
    // console.log(arr)
    getAllSearch()
    // setArr(alumniCollection)
  }, [alumni, students])
  // getAlumniSearch()

  const handleSearchChange = (e) => {
    // Handle search input change
    let q = e.target.value;
    setSearchTerm(q)
    console.log('Search query:', q);
    let newArr = orgArr.filter(item => item.name.toLowerCase().startsWith(q.toLowerCase()))
    setArr(newArr)
    console.log(arr)
    console.log(newArr)
    
  };

  // console.log("Dept: ", dept)

  const handleDeptChange = (val) => {
    // console.log("in handledept: ", val)
    // setDept(val)
    console.log(dept)
    if(val !== 'All'){
      let newArr = orgArr.filter(item => item.dept === val)
      setArr(newArr)
    } else {
      setArr(orgArr)
    }
    // console.log(arr)
    // console.log(newArr)
  }

  const handleYearChange = (val) => {
    // console.log("in handledept: ", val)
    // setDept(val)
    // console.log(dept)
    console.log(val)
    console.log(typeof(val))
    // console.log(orgArr[0].year)
    console.log(typeof(orgArr[0].yearOfPassing))
    if(val !== 'Any'){
      let newArr = orgArr.filter(item => item.yearOfPassing === val)
      setArr(newArr)
    } else {
      setArr(orgArr)
    }
    // console.log(arr)
    // console.log(newArr)
  }

  const years = [2030, 2029, 2028, 2027, 2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000
  ]

  return (
    <div>

<div className="w-full mx-auto mt-10 mb-4 px-5">
      <SearchBox placeholder="Search..." onChange={handleSearchChange} />
    

<div className='mt-4 flex gap-x-6'>

<div className='flex'>
    <h1 className='font-semibold text-md mr-5'>Department: </h1>
    <Select onValueChange={(value) => handleDeptChange(value)}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Department" />
  </SelectTrigger>
  <SelectContent>
  <SelectItem value="All">All</SelectItem>
    <SelectItem value="IT">IT</SelectItem>
    <SelectItem value="CSE">CSE</SelectItem>
    <SelectItem value="AIDS">AIDS</SelectItem>
    <SelectItem value="AIML">AIML</SelectItem>
    <SelectItem value="ECE">ECE</SelectItem>
    <SelectItem value="EEE">EEE</SelectItem>
    <SelectItem value="MECH">MECH</SelectItem>
    <SelectItem value="CIVIL">CIVIL</SelectItem>
  </SelectContent>
</Select>
</div>


<div className='flex'>
<h1 className='font-semibold text-md mr-5'>Year of Passing: </h1>
<Select onValueChange={(value) => handleYearChange(value)}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Year of Passing" />
  </SelectTrigger>
  <SelectContent>
  <SelectItem value="Any">Any</SelectItem>
    {years.map((year, index) => (<SelectItem key={index} value={year}>{year}</SelectItem>))}
  </SelectContent>
</Select>
</div>


</div>

</div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-20 py-10 min-h-[80vh] bg-zinc-300">
          
            {/* {arr?.map((item) => (<div className='bg-red-500'>{item.name}</div>))} */}
            {
              arr.length > 0 ?
                  arr.map((item ,index) => (<UserCard key={index} name={item.name} dept={item.dept} yearOfPassing={item.yearOfPassing} user={item}/>))
                :
                  <h1 className='text-gray-600 text-xl'>No Results Found..</h1>
                }
        </div>
    </div>
  )
}

export default SearchPage