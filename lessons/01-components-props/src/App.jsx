import Card from './components/Card'


const App = () => {

  const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Part-Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    posted: "2 days ago",
    role: "Product Designer",
    type: "Full-Time",
    level: "Senior Level",
    salary: "$150/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    posted: "1 week ago",
    role: "UX Designer",
    type: "Full-Time",
    level: "Mid Level",
    salary: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    company: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    posted: "3 days ago",
    role: "UI Designer",
    type: "Contract",
    level: "Mid Level",
    salary: "$130/hr",
    location: "Delhi, India"
  },
  {
    id: 5,
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    posted: "4 days ago",
    role: "Senior Product Designer",
    type: "Full-Time",
    level: "Senior Level",
    salary: "$160/hr",
    location: "Chennai, India"
  },
  {
    id: 6,
    company: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    posted: "6 days ago",
    role: "UX Researcher",
    type: "Part-Time",
    level: "Senior Level",
    salary: "$140/hr",
    location: "Pune, India"
  },
  {
    id: 7,
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    posted: "2 weeks ago",
    role: "Interaction Designer",
    type: "Full-Time",
    level: "Mid Level",
    salary: "$135/hr",
    location: "Bangalore, India"
  },
  {
    id: 8,
    company: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    posted: "1 day ago",
    role: "UI/UX Designer",
    type: "Contract",
    level: "Junior Level",
    salary: "$100/hr",
    location: "Kochi, India"
  },
  {
    id: 9,
    company: "Uber",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    posted: "5 days ago",
    role: "Product Designer",
    type: "Full-Time",
    level: "Senior Level",
    salary: "$145/hr",
    location: "Gurgaon, India"
  },
  {
    id: 10,
    company: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    posted: "3 days ago",
    role: "UX Designer",
    type: "Part-Time",
    level: "Mid Level",
    salary: "$125/hr",
    location: "Goa, India"
  }
];

  

  return (
    <div className='container'>
      {jobs.map(function(item){
        return <Card key={item.id} company={item.company} logo={item.logo} posted={item.posted} type={item.type} level={item.level} salary={item.salary} location={item.location}/>
      })}
    </div>
  )
}

export default App