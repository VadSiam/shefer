'use client'
import { MutatingDots } from "react-loader-spinner"

const LoaderBody = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <MutatingDots
        height="100"
        width="100"
        color="#007081"
        secondaryColor='#007081'
        radius='20'
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default LoaderBody