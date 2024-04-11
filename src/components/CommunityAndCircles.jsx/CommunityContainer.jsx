import React from 'react';

const data = [
  {
    name: "Artist of the Era",
    interest: "Music",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae explicabo excepturi error officiis accusamus cupiditate sit quas! Veniam repellendus incidunt dolorum, sunt illo alias aliquam eos itaque obcaecati velit.",
    members: "200",
  },
  {
    name: "Disco Dancers",
    interest: "Dance",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae explicabo excepturi error officiis accusamus cupiditate sit quas! Veniam repellendus incidunt dolorum, sunt illo alias aliquam eos itaque obcaecati velit.",
    members: "2000",
  },
];

const CommunityContainer = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Communities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((community) => (
          <div key={community.name} className="rounded-lg shadow-md p-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">{community.name}</h3>
            <p className="text-base text-gray-600 mb-2">Interest: {community.interest}</p>
            <p className="text-sm text-gray-600 mb-4">{community.description}</p>
            <p className="text-sm text-gray-600">Members: {community.members}</p>
            <button className="bg-black text-white font-bold py-2 px-4 my-2 rounded-md shadow-sm">
              Join Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityContainer;
