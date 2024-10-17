import React from 'react'
import useFetch from '../../Functions/useFetch'
import { useDispatch } from 'react-redux'
import { sendGrpData } from '../../redux/reducers/groupSlice';
import './Group.css'
export default function Group() {

    var group = useFetch("group/show-grp")
    var dispatch = useDispatch();

    var myfunc = (ev,id)=>{
        console.log(id);
        dispatch(sendGrpData(id));
    }

  return (

    <section className='group-section'>
            <h4 className='text-center p-4'>Group</h4>
            <div className='grp-sec' >
                <ul>
                    {group.data && group.data.map((obj) =>
                        <li onClick={(ev) => { myfunc(ev,obj._id) }}>{obj.grp_name}</li>
                    )}
                </ul>
            </div>


        </section>
    )
}
