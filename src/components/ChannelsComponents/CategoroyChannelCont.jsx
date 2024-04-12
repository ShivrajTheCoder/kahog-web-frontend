import React from 'react';

export default function CategoroyChannelCont({ category }) {
  const data = [
    {
      name: "Channel 1",
      owner: "Suresh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ut voluptas voluptatum in fugiat quo eaque modi, suscipit ipsum. Ipsa eligendi illum facere, quia rem enim nostrum voluptate molestiae quidem.",
      videos: 5,
      audios: 10,
      createdAt: "10/2/23",
      id: 1,
    },
    {
      name: "Channel 2",
      owner: "Ramesh",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ut voluptas voluptatum in fugiat quo eaque modi, suscipit ipsum. Ipsa eligendi illum facere, quia rem enim nostrum voluptate molestiae quidem.",
      videos: 5,
      audios: 10,
      createdAt: "10/2/23",
      id: 2,
    },
  ];

  return (
    <div className="w-full pb-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data.map((channel) => (
          <div
            key={channel.id}
            className="rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              {channel.name}
            </h3>
            <p className="text-base text-gray-600 mb-2">
              Owner: {channel.owner}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              Videos: {channel.videos} | Audios: {channel.audios}
            </p>
            <p className="text-sm text-gray-600 ">
              {channel.description}
            </p>
            <button className='w-full text-white bg-black font-semibold py-2 rounded-sm mt-2'>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
