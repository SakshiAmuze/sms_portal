import React from 'react'
import useFetch from '../../Functions/useFetch'
import { useDispatch } from 'react-redux'
import { sendLibData } from '../../redux/reducers/librarySlice';
import './Library.css'


export default function Library() {
    var library = useFetch("library/show")
    const dispatch = useDispatch();

    var myfunc = (ev, id) => {

        ev.preventDefault();
        console.log(id);
        dispatch(sendLibData(id));
    }
    return (
        <section className='category-section'>
            <h4 className='text-center p-4'>Library</h4>
            <div className='lib-sec'>
                <ul>
                    {library.data && library.data.map((obj) =>
                        <li onClick={(ev) => { myfunc(ev,obj._id) }}>{obj.lib_name}</li>
                    )}
                </ul>
            </div>
        </section>)
}
