export default function Card({ title, children }) {
  return (
    <div className=' flex card bg-base-200 w-full shadow-xl'>
      <div className='card-body overflow-y-auto h-[480px]'>
        <div>
          <h2 className='card-title'>{title}</h2>
        </div>
        {children}
      </div>
    </div>
  )
}
