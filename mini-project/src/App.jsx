import React from 'react'
// import { Bookmark } from "lucide-react";
import './App.css'
import './index.css'
import Card from './Components/card'

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      name: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      name: "Amazon",
      datePosted: "2 weeks ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      name: "Meta",
      datePosted: "3 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      name: "Apple",
      datePosted: "10 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
      name: "Netflix",
      datePosted: "1 week ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      name: "Microsoft",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$52/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_Logo.png",
      name: "Adobe",
      datePosted: "6 days ago",
      post: "JavaScript Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$48/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      name: "Tesla",
      datePosted: "3 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
      name: "Uber",
      datePosted: "8 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
      name: "Airbnb",
      datePosted: "10 weeks ago",
      post: "React Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$62/hr",
      location: "Remote"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map((e, index) => {
        return <Card key={index} data={e} />
      })}
    </div>
  )
}

export default App