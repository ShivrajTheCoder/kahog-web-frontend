import React from 'react'
import { useParams } from 'react-router';
import ChannelContent from '../../components/CreatorComponents.jsx/ChannelContent';
import AddContentForm from '../../components/CreatorComponents.jsx/AddContentForm';
import ApplyForLive from '../../components/CreatorComponents.jsx/ApplyForLive';

export default function UploadContent() {
    const { channelId } = useParams();
    // console.log(channelId);
    return (
        <div className='mx-20 my-10'>
            <h1 className='text-xl font-bold my-5'>Upload Content</h1>
            <AddContentForm />
            <h1 className='text-xl font-bold my-5'>Apply For Live</h1>
            <ApplyForLive/>
            <h1 className='text-xl font-bold my-5'>Channel Content</h1>
            <ChannelContent />
        </div>
    )
}
