import React, { useEffect, useState } from 'react'
import useFetch from '../../Functions/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { sendLibDataToPanel } from '../../redux/reducers/librarySlice';

import './Message.css'

export default function Message() {
    // const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const ansById = useSelector(state => state.library.libname);
    console.log(ansById);

    var path = "msg/showById/" + ansById;

    
    // console.log(finalapiPath);
    console.log(path);

    var ans = useFetch(path);
    console.log(ans);

    function myfunc(value) {
        console.log(value);
         dispatch(sendLibDataToPanel(value));
    }

    return (

        <section className='message-section'>
            <h4 className='text-center p-4'>Message</h4>
            <div className='msg-sec'>
                <ul>
                    {
                        ans.data &&  ans.data.length > 0 && ans.data.map(val =>
                            <li onClick={(ev) => { myfunc(ev.target.innerText) }}>{val.Message}</li>
                        )
                    }
                </ul>
            </div>

        </section>
    )
}
