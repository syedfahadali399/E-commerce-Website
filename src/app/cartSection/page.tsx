import { Poppins } from "next/font/google";
import Link from "next/link";
import ServicePage from "../servicepage/page";

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["700"] });

let CartSection = () => {
  return(
    <section className={fontPoppins.className}>
      {/* Landing Page 1 */}
      <div className="w-full h-[300px] bg-[url('/shopSection.jpg')] bg-cover bg-center bg-no-repeat opacity-[50%] max-lt:h-[250px]">
        <div className="flex flex-col h-[300px] items-center justify-center max-lt:h-[250px]">
          <div className="w-[112px] h-[72px]">
              <h1 className="w-[112px] h-[72px] font-medium text-[48px] text-[#000000] opacity-[100%]">Cart</h1>
          </div>
          <div className="flex flex-row gap-[8px] items-center">
            <p className="w-[48px] h-[24px] font-medium text-[16px] text-[#000000]">Home</p>
            <img className="w-[20px] h-[20px]" src="/shopicon/sidearrow.png" alt="sidearrow"/>
            <p className="w-[41px] h-[24px] font-light text-[14px] text-[#000000]">Cart</p>
          </div>
        </div>
      </div>
      {/* Landing Page 2 */}
      <section className="h-[525px] w-full flex items-center justify-evenly max-lt:h-[650px]">
        <div className="h-[390px] flex flex-row gap-[64px] justify-around max-xl:gap-[32px] max-lt:flex-col max-lt:h-[550px] max-lt:items-center max-lt:gap-[48px]">
          <div className="h-[215px] flex flex-col gap-[48px] justify-evenly max-st:w-[410px] max-mm:gap-[24px] max-mm:w-[320px] max-sm:w-[280px] max-sm:gap-[18px]">
            <div className="h-[55px] bg-[#F9F1E7] flex flex-row gap-[32px] justify-evenly items-center max-xl:gap-[24px] max-mm:gap-[16px] max-sm:gap-[12px]">
              <p className="w-[63px] h-[24px] font-semibold text-[16px] max-lg:w-[57px] max-lg:text-[14px] max-sm:text-[12px] max-sm:h-[18px] max-sm:w-[50px] max-lg:font-medium">Product</p>
              <p className="w-[63px] h-[24px] font-semibold text-[16px] max-lg:w-[45px] max-lg:text-[14px] max-sm:text-[12px] max-sm:h-[18px] max-sm:w-[35px] max-lg:font-medium">Price</p>
              <p className="w-[63px] h-[24px] font-semibold text-[16px] max-lg:text-[14px] max-sm:text-[12px] max-sm:h-[18px] max-sm:w-[55px] max-lg:font-medium">Qauntity</p>
              <p className="w-[63px] h-[24px] font-semibold text-[16px] max-lg:text-[14px] max-sm:text-[12px] max-sm:h-[18px] max-sm:w-[50px] max-lg:font-medium">Subtotal</p>
            </div>
            <div className="flex flex-row gap-[32px] items-center max-xl:gap-[24px] max-mm:gap-[14px]">
              <div className="w-[108px] h-[105px] max-lg:w-[90px] max-lg:h-[90px] max-st:h-[60px] max-sm:w-[50px] max-sm:h-[45px]">
                <img src="/cartsectionicon/imageone.png" alt="imgone" />
              </div>
              <p className="h-[24px] font-normal text-[16px] text-[#9F9F9F] max-lg:text-[12px] max-mm:text-[10px] max-sm:text-[9px] max-st:h-[38px]">Asgaard sofa</p>
              <p className="h-[24px] font-normal text-[16px] text-[#9F9F9F] max-lg:text-[12px] max-mm:text-[10px] max-sm:text-[9px] max-st:h-[38px]">Rs. 250,000.00</p>
              <div className="w-[32px] h-[32px] max-lg:w-[26px] max-lg:h-[26px] border border-black rounded-[2px] flex flex-col items-center justify-center">
                <p>1</p>
              </div>
              <p className="h-[24px] font-normal text-[16px] text-[#000000] max-lg:text-[12px] max-mm:text-[10px] max-sm:text-[9px] max-st:h-[38px]">Rs. 250,000.00</p>
              <div className="w-[28px] h-[28px] max-lg:w-[22px] max-lg:h-[22px]">
                <img src="/cartsectionicon/imagetwo.png" alt="imgtwo" />
              </div>
            </div>
          </div>
          <div className="w-[390px] h-[390px] flex flex-col bg-[#F9F1E7] justify-evenly items-center max-xl:w-[320px] max-sm:w-[280px]">
             <h1 className="w-[186px] h-[48px] font-semibold text-[32px] text-[#000000] max-lg:text-[28px] max-lg:w-[160px] max-lg:h-[44px]">Cart Totals</h1>
             <div className="flex flex-row gap-[32px] items-center">
                <p className="w-[69px] h-[24px] font-medium text-[16px] text-[#000000] max-lg:text-[14px] max-lg:h-[20px] max-lg:w-[60px]">Subtotal</p>
                <p className="w-[125px] h-[24px] font-normal text-[16px] text-[#9F9F9F] max-lg:text-[14px] max-lg:h-[20px] max-lg:w-[110px]">Rs. 250,000.00</p>
             </div>
             <div className="flex flex-row gap-[32px] items-center">
                <p className="w-[41px] h-[24px] font-medium text-[16px] text-[#0000000] max-lg:text-[14px] max-lg:h-[20px]">Total</p>
                <p className="w-[155px] h-[30px] font-normal text-[20px] text-[#B88E2F] max-lg:text-[18px] max-lg:w-[130px] max-lg:h-[24px]">Rs. 250,000.00</p>
             </div>
             <div className="w-[222px] h-[60px] rounded-[15px] flex items-center justify-center border border-black max-lg:w-[175px] max-lg:h-[50px]">
              <Link href={`checkoutSection`}><button className="w-[125px] h-[30px] font-normal text-[20px] text-[#000000]">Check Out</button></Link>
             </div>
           </div>
         </div>
      </section>

        {/* Landing Page 3*/}
        <ServicePage></ServicePage>
   </section>
    )
}

export default CartSection