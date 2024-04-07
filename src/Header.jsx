


import Profilepic from '../src/assets/Imge/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between p-4 border-b-4 max-w-7xl max-auto ml-3' >
               <h1 className="text-3xl font-bold">Knowledg Cafee</h1>
                <img src={Profilepic} alt='profile pic ' / >

        </div>
    );
};

export default Header;