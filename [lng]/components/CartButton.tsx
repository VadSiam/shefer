import { useRouter } from "next/navigation";
import { useCallback } from "react";

const CartButton = ({ lng }: { lng: string }) => {
  const router = useRouter();

  const goingCart = useCallback(() => {
    router.push(`/${lng}/cart`)
  }, [router, lng]);


  return (
    <div
      onClick={goingCart}
      className="ml-4 cursor-pointer no-underline relative inline-flex items-center p-1 text-sm font-medium text-center focus:ring-4 focus:outline-none active:outline-none"
    >
      <svg width="35" height="35" viewBox="0 0 35 35" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M4.375 29.1667V8.75H30.625V29.1667C30.625 29.9402 30.3177 30.6821 29.7707 31.2291C29.2237 31.776 28.4819 32.0833 27.7083 32.0833H7.29167C6.51812 32.0833 5.77625 31.776 5.22927 31.2291C4.68229 30.6821 4.375 29.9402 4.375 29.1667Z" stroke="var(--svg-stroke-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.375 8.75H30.625" stroke="var(--svg-stroke-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.6666 7.29175C11.6666 5.74465 12.2812 4.26092 13.3751 3.16696C14.4691 2.073 15.9528 1.45841 17.4999 1.45841C19.047 1.45841 20.5307 2.073 21.6247 3.16696C22.7187 4.26092 23.3333 5.74465 23.3333 7.29175" stroke="var(--svg-stroke-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <span className="sr-only">Notifications</span>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -end-2">
        2
      </div>
    </div>
  )

}

export default CartButton