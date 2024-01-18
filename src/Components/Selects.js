const Selects = () => {
  return (
    <>
      <h1 className='text-center'>Top Choices</h1>
    <div className='max-w-[1240px] mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div className='relative'>
        <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1562790351-d273a961e0e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D' alt='/' />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
          <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
            Maldives
          </p>
        </div>
      </div>
      <div className='relative'>
        <img className='w-full h-full object-cover' src='https://plus.unsplash.com/premium_photo-1682913629540-3857602b540c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D' alt='/' />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
          <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
            Istanbul
          </p>
        </div>
      </div>
      <div className='relative'>
        <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D' alt='/' />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
          <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
            Barcelona
          </p>
        </div>
      </div>
      <div className='relative'>
        <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D' alt='/' />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
          <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
            Varanasi
          </p>
        </div>
      </div>
      <div className='relative'>
        <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D' alt='/' />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
          <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
            Bali
          </p>
        </div>
      </div>
      <div className='relative'>
        <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='/' />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
          <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
            Sikkim
          </p>
        </div>
      </div>
        
    </div>
    </>
  )
}

export default Selects