import Image from 'next/image'

export default function Loading() {
  return (
    <>
      <div className='loading'>
        <Image className='loadingImg' src={'/logo.svg'} width={100} height={100} alt='loading' />
      </div>
    </>
  )
}