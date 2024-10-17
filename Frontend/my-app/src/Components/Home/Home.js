import React from 'react'
import Library from '../Library/Library'
import Message from '../Message/Message'
import Group from '../Group/Group'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'
import './Home.css'

export default function Home() {
  
  var LibmsgToMain = useSelector(state =>state.library.messagename);
  console.log(LibmsgToMain);

  var [name,mobile,email] = useSelector(state =>state.group.contact);
//   console.log(ContactMsgToMain);
  return (

    <div className='container'>
    <h1 className='text-center p-4'>Send SMS</h1>
    <div className='row'>
        <div className='col-4'>
            <Library></Library>
            <Message></Message>
        </div>
        <div className='col-4 form-sms' >
            
            <form >
                <label className='sms-label'>Name</label><br />
                <input type='text' defaultValue={name} /><br />
                <label className='sms-label'>Mobile No</label><br />
                <input type='text' defaultValue={mobile}/> <br />
                <label className='sms-label'>Email</label><br />
                <input type='text' defaultValue={email}/> <br />
                <label className='sms-label'>Message</label><br />
                <textarea defaultValue={LibmsgToMain} className='test-area'></textarea><br/>
                <button>Send SMS</button>
            </form>
        </div>
        <div className='col-4'>
            
            <Group></Group>
            <Contact></Contact>
        </div>
    </div>
</div>
    )
}
