

import PropTypes from 'prop-types'


const User = ({users , handleClick}) => {

    console.log(users)

const {area , flags } = users
   
    return (
        <div>
            <h1 className='ml-5'>  {`This Is USER name : ${users.name.common} :  Area Of Country  : ${area}`}</h1>
            
          <img className='border-b-4  w-full ml-5'  src={flags.png} alt='Country Image ' />

          
            <div className='flex justify-between ml-5'>
                <div className='flex'>
                <p > image </p>
                <div className='ml-6'>
                    <p>name</p>
                    <p>Publish Time </p>
                </div>
                </div>
                    <div className='flex '>
                    <p className='mr-8'>Study Time </p>
                    <button onClick={handleClick} className='mb-6 bg-orange-400'>Click_Button</button>
                    </div>
                
               
             
               
            </div>
            
           
        
          
         
           
        </div>
    );
};

User.PropTypes={

    user: PropTypes.object.isRequired
}



export {User} ;