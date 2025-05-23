
import { FaHeart } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';


import Aos from 'aos';
const Featured = ({post}) => {

const lifestyleData = post.lifestyle ? (Array.isArray(post.lifestyle) ? post.lifestyle : post.lifestyle.split(',')) : [] ;


  
    return (
       <div  className="card    card-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105" 
       
    
       >
  <div className="card-body flex flex-col justify-between" >
    <div className='flex justify-between items-center py-2'>
        <h2 className="card-title text-xl font-bold">{post.title}</h2>
        <h1 className='bg-blue-500 px-3 py-1 rounded-full text-white'>{post.availability}</h1>
    </div>
    <h1 className='flex items-center gap-2'><FaLocationDot />{post.location}</h1>
    <div>
        <h1 className='text-xl font-semibold'>${post.rent}/month</h1>
    </div>
  <div>
      <h1  className='flex flex-wrap gap-3 ' >{lifestyleData.slice(0 ,3).map((item , index) => (
        <span key={index} className='px-3 py-1 rounded-full'>{item}</span>
    ))}
    {lifestyleData.length > 3 && (
        <span className='px-3 py-1  rounded-full'>+{post.lifestyle.length - 3}</span>
    )}
    </h1>

  </div>
    <div className="justify-end card-actions mt-5">
        <p className='flex items-center gap-2'><FaHeart /> {post.likes}</p>
      <Link to={`/details/${post._id}`}> <button   className="btn">See more</button></Link>
     
    </div>

  

  </div>
</div>
    );
};

export default Featured;