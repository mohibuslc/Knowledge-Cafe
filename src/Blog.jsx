import { useEffect } from "react";
import { useState } from "react";
import { User } from "./User.jsx/User";

const Blog = ({handleClick}) => {

    const [bloge , setBloge]= useState([])

    useEffect(()=>{

        const blogesFetch= async()=>{

            try{

                const res = await fetch('Bloges.json')
                const data = await res.json()


                setBloge(data)
            }catch(error){

                console.log(error)
            }
        }

        blogesFetch()

    }, [])
    return (
        <div className="md: w-2/3">
            <h2 className="ml-5"> Bloegs: {bloge.length}</h2>
        <div className="ml-5">

            {

                bloge.map(users=> <User users={users} handleClick={handleClick}></User>)
            }
        </div>
        
        </div>
    );
};

export {Blog} ;