import React,{ Fragment,useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({defaultCategories = []}) =>{

    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    //     //setCategories([...categories,'Yugi-Oh']);
    //     setCategories(categories => [...categories,'Yugi-Oh']);
    // }




    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </Fragment>
    );
}

export default GifExpertApp;