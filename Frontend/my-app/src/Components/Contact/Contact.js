import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useFetch from '../../Functions/useFetch';
import { sendGrpDataToPanel } from '../../redux/reducers/groupSlice';
import './Contact.css'


export default function Contact() {
  const dispatch = useDispatch()
  var ansById = useSelector(state => state.group.grpname);
  console.log(ansById);

  var path = "contact/show-contact-By-Id/" + ansById;
  console.log(path);

  var ans = useFetch(path);
  console.log(ans);

  function myfunc(username,usermobile,useremail) {
    console.log(username);
    console.log(usermobile);
    console.log(useremail);

    dispatch(sendGrpDataToPanel([username,usermobile,useremail]))
  }
  return (
    <section className='contact-section'>
      <h4 className='text-center p-4'>Contact</h4>
      <div className='contact-sec'>
        <ul>
          {
            ans.data && ans.data.length > 0 && ans.data.map(val =>
              <li onClick={(ev) => { myfunc(val.username,val.usermobile,val.useremail) }}>{val.username}</li>
            )
          }
        </ul>
      </div>


    </section>
  )
}
