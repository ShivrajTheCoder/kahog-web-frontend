// Sidebar.jsx
import React, { useState } from 'react';
import AddProduct from '../AdminComponents/Forms.jsx/AddProduct';
import UploadPodcastModal from '../AdminComponents/Forms.jsx/UploadPodcastModal';
import UploadEbookModal from '../AdminComponents/Forms.jsx/UploadEbookModal';
import UploadAudiobookModal from '../AdminComponents/Forms.jsx/UploadAudiobookModal';
import PostEventModal from '../AdminComponents/Forms.jsx/PostEventModal';
import AddCommunityModal from '../AdminComponents/Forms.jsx/AddCommunityModal';
import AddInterestModal from '../AdminComponents/Forms.jsx/AddInterestModal';
import AddCircleModal from '../AdminComponents/Forms.jsx/AddCircleModal';
import AddCategoryModal from '../AdminComponents/Forms.jsx/AddCategoryModal';
import AddKaryashalaModal from '../AdminComponents/Forms.jsx/AddKaryashalaModal'; // Import AddKaryashalaModal
import AddPathshalaModal from '../AdminComponents/Forms.jsx/AddPathshalaModal'; // Import AddPathshalaModal

export default function Sidebar() {
  const [isAddProductModalOpen, setAddProductModalOpen] = useState(false);
  const [isUploadPodcastModalOpen, setUploadPodcastModalOpen] = useState(false);
  const [isUploadEbookModalOpen, setUploadEbookModalOpen] = useState(false);
  const [isUploadAudiobookModalOpen, setUploadAudiobookModalOpen] = useState(false);
  const [isPostEventModalOpen, setPostEventModalOpen] = useState(false);
  const [isAddCommunityModalOpen, setAddCommunityModalOpen] = useState(false);
  const [isAddInterestModalOpen, setAddInterestModalOpen] = useState(false);
  const [isAddCircleModalOpen, setAddCircleModalOpen] = useState(false);
  const [isAddCategoryModalOpen, setAddCategoryModalOpen] = useState(false);
  const [isAddKaryashalaModalOpen, setAddKaryashalaModalOpen] = useState(false); // State for Add Karyashala modal
  const [isAddPathshalaModalOpen, setAddPathshalaModalOpen] = useState(false); // State for Add Pathshala modal

  return (
    <div className="min-h-screen w-1/4 bg-[#2D54C6] shadow-md p-4 z-50">
      <ul className="space-y-1">
        {/* Existing buttons */}
        <li>
          <button onClick={() => setAddProductModalOpen(true)} className="block text-white bg-[#14213d] w-full py-2 rounded-md">Add Product</button>
        </li>
        <li>
          <button onClick={() => setUploadPodcastModalOpen(true)} className="block text-white bg-[#14213d] w-full py-2 rounded-md">Upload Podcast</button>
        </li>
        <li>
          <button onClick={() => setUploadEbookModalOpen(true)} className="block text-white bg-[#14213d] w-full py-2 rounded-md">Upload Ebook</button>
        </li>
        <li>
          <button onClick={() => setUploadAudiobookModalOpen(true)} className="block text-white bg-[#14213d] w-full py-2 rounded-md">Upload Audiobook</button>
        </li>
        <li>
          <button onClick={() => setPostEventModalOpen(true)} className="block text-white bg-[#14213d] w-full py-2 rounded-md">Post Event</button>
        </li>
        <li>
          <button onClick={() => setAddCommunityModalOpen(true)} className="block text-white bg-[#14213d] w-full py-2 rounded-md">Add Community</button>
        </li>
        <li>
          <button onClick={() => setAddInterestModalOpen(true)} className="block text-white bg-[#14213d] w-full py-2 rounded-md">Add Interest</button>
        </li>
        <li>
          <button onClick={() => setAddCircleModalOpen(true)} className="block text-white bg-[#14213d] w-full py-2 rounded-md">Add Circle</button>
        </li>
        <li>
          <button onClick={() => setAddCategoryModalOpen(true)} className="block text-white bg-[#14213d] w-full py-2 rounded-md">Add Category</button>
        </li>
        {/* Add buttons for Add Karyashala and Add Pathshala */}
        <li>
          <button onClick={() => setAddKaryashalaModalOpen(true)} className="block text-white bg-[#14213d] w-full py-2 rounded-md">Add Karyashala</button>
        </li>
        <li>
          <button onClick={() => setAddPathshalaModalOpen(true)} className="block text-white bg-[#14213d] w-full py-2 rounded-md">Add Pathshala</button>
        </li>
        {/* More buttons... */}
      </ul>

      {/* Modals */}
      {isAddProductModalOpen && <AddProduct onClose={() => setAddProductModalOpen(false)} />}
      {isUploadPodcastModalOpen && <UploadPodcastModal onClose={() => setUploadPodcastModalOpen(false)} />}
      {isUploadEbookModalOpen && <UploadEbookModal onClose={() => setUploadEbookModalOpen(false)} />}
      {isUploadAudiobookModalOpen && <UploadAudiobookModal onClose={() => setUploadAudiobookModalOpen(false)} />}
      {isPostEventModalOpen && <PostEventModal onClose={() => setPostEventModalOpen(false)} />}
      {isAddCommunityModalOpen && <AddCommunityModal onClose={() => setAddCommunityModalOpen(false)} />}
      {isAddInterestModalOpen && <AddInterestModal onClose={() => setAddInterestModalOpen(false)} />}
      {isAddCircleModalOpen && <AddCircleModal onClose={() => setAddCircleModalOpen(false)} />}
      {isAddCategoryModalOpen && <AddCategoryModal onClose={() => setAddCategoryModalOpen(false)} />}
      {isAddKaryashalaModalOpen && <AddKaryashalaModal onClose={() => setAddKaryashalaModalOpen(false)} />} {/* Add Karyashala modal */}
      {isAddPathshalaModalOpen && <AddPathshalaModal onClose={() => setAddPathshalaModalOpen(false)} />} {/* Add Pathshala modal */}
    </div>
  );
}
