export default function LandingPage() {
    return(
        <div className='bg-yellow-100 p-4 m-4 md:p-6 md:m-6 rounded-md'>

        <div className='flex flex-col md:flex-row gap-4 md:justify-evenly items-center '>
          <div className=' md:w-1/2'>
            <h1 className='font-semibold text-4xl md:text-4xl py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime alias accusantium magni dolore officiis,</p>
          </div>

          <div className=''>
            <div className='bg-gray-200 rounded-md p-40  md:w-1/2'>
            </div>
          </div>
        </div>

      <div className='m-6'>
        <h3 className='flex justify-center '>Trusted by leading orginizations</h3>
        <div className='flex flex-wrap justify-center gap-6 mt-6'>
          <div className=' bg-white rounded shadow py-4 px-12'>Logo</div>
          <div className=' bg-white rounded shadow py-4 px-12'>Logo</div>
          <div className=' bg-white rounded shadow py-4 px-12'>Logo</div>
          <div className=' bg-white rounded shadow py-4 px-12'>Logo</div>
          <div className=' bg-white rounded shadow py-4 px-12'>Logo</div>
        </div>
      </div>

      </div>
    )
}