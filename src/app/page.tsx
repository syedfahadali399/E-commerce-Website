import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const fontPoppins = Poppins({ subsets: ['latin'],
  weight: ['700']
})

export default function Home() {
  return (
    <div>
      {/* Landing Page 1*/}
      <div className={fontPoppins.className}>
        <section className="w-full h-[716.83px] bg-[url('/landingimg.jpg')] bg-cover bg-center bg-no-repeat max-mt:h-[526px]">
          <div className="w-full flex flex-row items-center justify-end h-[716.83px] max-mt:h-[526px]">
            <div className="w-[643px] h-[463px] bg-[#FFF3E3] flex justify-center items-center max-xl:w-[600px] max-xl:h-[400px] mr-[128px] max-2xl:mr-[82px] max-xl:mr-[54px] max-lg:w-[550px] max-lg:h-[375px] max-lg:mr-[36px] max-lt:w-[450px] max-lt:h-[350px] max-mt:mr-[24px] max-mt:w-[375px] max-mt:h-[325px] max-st:w-[300px] max-st:h-[335px] max-mm:w-[250px] max-mm:mr-[16px]">
              <div className="w-[561px] h-[364px] flex flex-col gap-[12px] max-lg:w-[500px] max-lg:h-[300px] max-lt:w-[400px] max-lt:h-[275px] max-mt:w-[350px] max-mt:h-[300px] max-st:w-[275px] max-st:h-[290px] max-mt:justify-center max-mm:w-[225px]">
                <div className="w-[123px] h-[24px]">
                  <h1 className="w-[123px] h-[24px] font-semibold text-[16px] text-[#333333]">New Arrival</h1>
                </div>
                <p className="w-[447px] h-[142px] font-bold text-[52px] text-[#B88E2F] max-xl:text-[42px] max-lg:text-[36px] max-lg:h-[106px] max-lt:w-[375px] max-lt:text-[32px] max-lt:h-[86px] max-mt:w-[340px] max-mt:text-[26px] max-mt:h-[75px] max-st:w-[275px] max-mm:w-[225px] max-mm:text-[22px] max-mm:h-[65px]">Discover Our New Collection</p>
                <p className="w-[546px] h-[52px] font-medium text-[18px] text-[#333333] max-lg:w-[500px] max-lt:w-[400px] max-lt:h-[72px] max-lt:text-[16px] max-mt:w-[340px] max-mt:h-[80px] max-st:w-[275px] max-st:h-[100px] max-mm:w-[225px] max-mm:text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <div className="w-[200px] h-[74px] mt-[42px] max-xl:mt-[24px] bg-[#B88E2F] flex items-center cursor-pointer justify-center p-[20px] max-lg:mt-[16px] max-lg:w-[160px] max-lg:h-[55px] max-lt:mt-[0px] max-lt:w-[145px] max-mt:w-[125px] max-mt:h-[50px] max-mm:w-[100px] max-mm:h-[40px]">
                  <button className="w-[100px] h-[24px] font-bold text-[16px] text-[#FFFF] max-mm:text-[12px]">BUY NOW</button>
                </div>
             </div>
           </div>
         </div>
       </section>
      </div>
      {/* Landing Page 2*/}
      <div className={fontPoppins.className}>
        <section className="w-full h-[725px] flex flex-col gap-[64px] items-center text-center mt-[72px] max-xl:h-[650px] max-lg:h-[600px] max-lt:h-[975px] max-st:h-[1450px]">
          <div className="w-[575px] h-[99.7px] flex flex-col gap-[24px] text-center items-center max-st:w-[480px] max-st:h-[130px] max-lm:w-[400px] max-mm:w-[340px] max-sm:w-[300px]">
            <h2 className="w-[300px] h-[48px] text-[32px] font-bold text-[#333333] max-mm:text-[28px]">Browse The Range</h2>
            <p className="w-[589px] h-[28px] text-[20px] font-normal text-[#666666] max-st:w-[410px] max-st:h-[60px] max-lm:w-[350px] max-mm:text-[18px] max-sm:w-[300px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="w-full flex flex-row justify-center gap-[64px] h-[550px] max-xl:gap-[42px] max-lt:grid max-lt:grid-cols-2 max-lt:justify-items-center max-lt:h-[850px] max-st:flex-col max-st:flex max-st:items-center max-st:h-[1300px]">
            <div className="w-[381px] h-[550px] flex flex-col text-center gap-[24px] items-center max-2xl:w-[325px] max-2xl:h-[475px] max-xl:w-[285px] max-xl:h-[425px] max-lg:w-[250px] max-lg:h-[375px]">
              <img src="/landingpageone/picone.png" alt="picone" />
              <p className="w-[125px] h-[36px] font-bold text-[24px] text-[#333333] max-lg:text-[20px]">Dinning</p>
            </div>
            <div className="w-[381px] h-[550px] flex flex-col text-center gap-[24px] items-center max-2xl:w-[325px] max-2xl:h-[475px] max-xl:w-[285px] max-xl:h-[425px] max-lg:w-[250px] max-lg:h-[375px]">
              <img src="/landingpageone/pictwo.png" alt="pictwo" />
              <p className="w-[125px] h-[36px] font-bold text-[24px] text-[#333333] max-lg:text-[20px]">Living</p>
            </div>
            <div className="w-[381px] h-[550px] flex flex-col text-center gap-[24px] items-center max-2xl:w-[325px] max-2xl:h-[475px] max-xl:w-[285px] max-xl:h-[425px] max-lg:w-[250px] max-lg:h-[375px]">
              <img src="/landingpageone/picthree.png" alt="picthree" />
              <p className="w-[125px] h-[36px] font-bold text-[24px] text-[#333333] max-lg:text-[20px]">Bedroom</p>
            </div>
          </div>
        </section>
      </div>
      {/* Landing Page 3*/}
      <div className={fontPoppins.className}>
        <section className="w-full h-[1300px] flex flex-col gap-[64px] mt-[64px] max-xl:h-[1700px] max-lt:h-[2200px] max-st:h-[4100px]">

          <div className="w-full h-[48px] text-center flex flex-row items-center justify-center justify-items-center">
            <h1 className="w-[269px] h-[48px] text-[40px] text-[#3A3A3A] font-bold max-mm:text-[36px] max-sm:text-[32px]">Our Products</h1>
          </div>

          <div className="grid grid-cols-4 gap-[32px] justify-items-center max-xl:grid-cols-3 max-lt:grid-cols-2 max-st:flex max-st:flex-col max-st:items-center">
            
           {/* Card 1 */}
           <div className="relative group w-[285px] h-[446px] bg-gray-100 overflow-hidden rounded-lg shadow-md max-lg:w-[260px]">
             <div className="w-[45px] h-[48px] flex items-center absolute left-56 top-6 border border-[#E97171] rounded-[50%] bg-[#E97171] max-lg:left-52">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  -30%
                </div>
              </div>
            {/* Background Image */}
            <div className="w-[285px] h-[301px] max-lg:w-[260px]">
              <img src="/landingpagetwo/imgone.png" alt="Product" className="w-[285px] h-[301px] max-lg:w-[260px]"/>
            </div>
  
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Add to Cart Button */}
              <Link href={`singleproductSection`}><button className="mb-4 px-6 py-2 bg-[#FFFF] text-[#B88E2F] font-semibold shadow-md hover:bg-[#FFFF]">Add to Cart</button></Link> 
              {/* Share, Compare, Like */}
              <div className="flex space-x-6 text-white">
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconone.png" alt="iconone" />
                  <span>Share</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageicontwo.png" alt="icontwo" />
                  <span>Compare</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconthree.png" alt="iconthree" />
                  <span>Like</span>
                </div>
             </div>
           </div>
           {/* Product Details */}
           <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px] max-lg:w-[260px]">
              <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="font-semibold text-[24px] text-[#3A3A3A] w-[123px] h-[29px]">Syltherine</h1>
                <p className="w-[138px] h-[24px] text-[16px] font-medium text-[#898989]">Stylish cafe chair</p>
              </div>
              <div className="w-[265px] h-[30px] flex flex-row gap-[12px] items-center">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-lg:text-[18px] max-lg:w-[125px]">Rp 2.500.000</p>
                <p className="w-[111px] h-[24px] font-normal text-[16px] text-[#B0B0B0] line-through max-lg:text-[14px] max-lg:w-[100px]">Rp 3.500.000</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group w-[285px] h-[446px] bg-gray-100 overflow-hidden rounded-lg shadow-md max-lg:w-[260px]">
            {/* Background Image */}
            <div className="w-[285px] h-[301px] max-lg:w-[260px]">
              <img src="/landingpagetwo/imgtwo.png" alt="Product" className="w-[285px] h-[301px] max-lg:w-[260px]"/>
            </div>
  
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Add to Cart Button */}
              <Link href={`singleproductSection`}><button className="mb-4 px-6 py-2 bg-[#FFFF] text-[#B88E2F] font-semibold shadow-md hover:bg-[#FFFF]">Add to Cart</button></Link> 
              {/* Share, Compare, Like */}
              <div className="flex space-x-6 text-white">
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconone.png" alt="iconone" />
                  <span>Share</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageicontwo.png" alt="icontwo" />
                  <span>Compare</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconthree.png" alt="iconthree" />
                  <span>Like</span>
                </div>
             </div>
           </div>
           {/* Product Details */}
           <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px] max-lg:w-[260px]">
              <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="w-[92px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">Leviosa</h1>
                <p className="w-[138px] h-[24px] text-[16px] font-medium text-[#898989]">Stylish cafe chair</p>
              </div>
              <div className="w-[265px] h-[30px]">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-lg:text-[18px] max-lg:w-[125px]"> Rp 2.500.000</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group w-[285px] h-[446px] bg-gray-100 overflow-hidden rounded-lg shadow-md max-lg:w-[260px]">
             <div className="w-[45px] h-[48px] flex items-center absolute left-56 top-6 border border-[#E97171] rounded-[50%] bg-[#E97171] max-lg:left-52">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  -50%
                </div>
              </div>
            {/* Background Image */}
            <div className="w-[285px] h-[301px] max-lg:w-[260px]">
              <img src="/landingpagetwo/imgthree.png" alt="Product" className="w-[285px] h-[301px] max-lg:w-[260px]"/>
            </div>
  
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Add to Cart Button */}
              <Link href={`singleproductSection`}><button className="mb-4 px-6 py-2 bg-[#FFFF] text-[#B88E2F] font-semibold shadow-md hover:bg-[#FFFF]">Add to Cart</button></Link> 
              {/* Share, Compare, Like */}
              <div className="flex space-x-6 text-white">
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconone.png" alt="iconone" />
                  <span>Share</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageicontwo.png" alt="icontwo" />
                  <span>Compare</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconthree.png" alt="iconthree" />
                  <span>Like</span>
                </div>
             </div>
           </div>
           {/* Product Details */}
           <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px] max-lg:w-[260px]">
           <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="w-[85px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">lolitho</h1>
                <p className="w-[121px] h-[24px] text-[16px] font-medium text-[#898989]">Luxury big sofa</p>
              </div>
              <div className="w-[265px] h-[30px] flex flex-row gap-[12px] items-center">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-lg:text-[18px] max-lg:w-[125px]">Rp 7.000.000</p>
                <p className="w-[111px] h-[24px] font-normal text-[16px] text-[#B0B0B0] line-through max-lg:text-[14px] max-lg:w-[100px]">Rp 14.000.000</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative group w-[285px] h-[446px] bg-gray-100 overflow-hidden rounded-lg shadow-md max-lg:w-[260px]">
             <div className="w-[45px] h-[48px] flex items-center text-center absolute left-56 top-6 border border-[#2EC1AC] rounded-[50%] bg-[#2EC1AC] max-lg:left-52">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  New
                </div>
              </div>
            {/* Background Image */}
            <div className="w-[285px] h-[301px] max-lg:w-[260px]">
              <img src="/landingpagetwo/imgfour.jpg" alt="Product" className="w-[285px] h-[301px] max-lg:w-[260px]"/>
            </div>
  
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Add to Cart Button */}
              <Link href={`singleproductSection`}><button className="mb-4 px-6 py-2 bg-[#FFFF] text-[#B88E2F] font-semibold shadow-md hover:bg-[#FFFF]">Add to Cart</button></Link> 
              {/* Share, Compare, Like */}
              <div className="flex space-x-6 text-white">
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconone.png" alt="iconone" />
                  <span>Share</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageicontwo.png" alt="icontwo" />
                  <span>Compare</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconthree.png" alt="iconthree" />
                  <span>Like</span>
                </div>
             </div>
           </div>
           {/* Product Details */}
           <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px] max-lg:w-[260px]">
              <div className="w-[235px] h-[61px] flex flex-col gap-[12px]">
                <h1 className=" w-[123px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">Respira</h1>
                <p className="w-[235px] h-[24px] text-[16px] font-medium text-[#898989]">Outdoor bar table and stool</p>
              </div>
              <div className="w-[265px] h-[30px]">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-lg:text-[18px] max-lg:w-[125px]">Rp 500.000</p>
              </div>
            </div>
          </div>  

          {/* Card 5 */}
          <div className="relative group w-[285px] h-[446px] bg-gray-100 overflow-hidden rounded-lg shadow-md max-lg:w-[260px]">
            {/* Background Image */}
            <div className="w-[285px] h-[301px] max-lg:w-[260px]">
              <img src="/landingpagetwo/imgfive.png" alt="Product" className="w-[285px] h-[301px] max-lg:w-[260px]"/>
            </div>
  
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Add to Cart Button */}
              <Link href={`singleproductSection`}><button className="mb-4 px-6 py-2 bg-[#FFFF] text-[#B88E2F] font-semibold shadow-md hover:bg-[#FFFF]">Add to Cart</button></Link> 
              {/* Share, Compare, Like */}
              <div className="flex space-x-6 text-white">
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconone.png" alt="iconone" />
                  <span>Share</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageicontwo.png" alt="icontwo" />
                  <span>Compare</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconthree.png" alt="iconthree" />
                  <span>Like</span>
                </div>
             </div>
           </div>
           {/* Product Details */}
           <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="w-[59px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">Grifo</h1>
                <p className="w-[90px] h-[24px] text-[16px] font-medium text-[#898989]">Night lamp</p>
              </div>
              <div className="w-[138px] h-[30px]">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-lg:text-[18px] max-lg:w-[125px]">Rp 1.500.000</p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="relative group w-[285px] h-[446px] bg-gray-100 overflow-hidden rounded-lg shadow-md max-lg:w-[260px]">
             <div className="w-[45px] h-[48px] flex items-center text-center absolute left-56 top-6 border border-[#2EC1AC] rounded-[50%] bg-[#2EC1AC] max-lg:left-52">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  New
                </div>
              </div>
            {/* Background Image */}
            <div className="w-[285px] h-[301px] max-lg:w-[260px]">
              <img src="/landingpagetwo/imgsix.png" alt="Product" className="w-[285px] h-[301px] max-lg:w-[260px]"/>
            </div>
  
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Add to Cart Button */}
              <Link href={`singleproductSection`}><button className="mb-4 px-6 py-2 bg-[#FFFF] text-[#B88E2F] font-semibold shadow-md hover:bg-[#FFFF]">Add to Cart</button></Link> 
              {/* Share, Compare, Like */}
              <div className="flex space-x-6 text-white">
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconone.png" alt="iconone" />
                  <span>Share</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageicontwo.png" alt="icontwo" />
                  <span>Compare</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconthree.png" alt="iconthree" />
                  <span>Like</span>
                </div>
             </div>
           </div>
           {/* Product Details */}
           <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px] max-lg:w-[260px]">
              <div className="w-[138x] h-[61px] flex flex-col gap-[12px]">
                <h1 className=" w-[86px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">Muggo</h1>
                <p className="w-[88px] h-[24px] text-[16px] font-medium text-[#898989]">Small mug</p>
              </div>
              <div className="w-[138px] h-[30px]">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-lg:text-[18px] max-lg:w-[125px]">Rp 150.000</p>
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="relative group w-[285px] h-[446px] bg-gray-100 overflow-hidden rounded-lg shadow-md max-lg:w-[260px]">
             <div className="w-[45px] h-[48px] flex items-center absolute left-56 top-6 border border-[#E97171] rounded-[50%] bg-[#E97171] max-lg:left-52">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  -50%
                </div>
              </div>
            {/* Background Image */}
            <div className="w-[285px] h-[301px] max-lg:w-[260px]">
              <img src="/landingpagetwo/imgseven.jpg" alt="Product" className="w-[285px] h-[301px] max-lg:w-[260px]"/>
            </div>
  
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Add to Cart Button */}
              <Link href={`singleproductSection`}><button className="mb-4 px-6 py-2 bg-[#FFFF] text-[#B88E2F] font-semibold shadow-md hover:bg-[#FFFF]">Add to Cart</button></Link> 
              {/* Share, Compare, Like */}
              <div className="flex space-x-6 text-white">
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconone.png" alt="iconone" />
                  <span>Share</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageicontwo.png" alt="icontwo" />
                  <span>Compare</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconthree.png" alt="iconthree" />
                  <span>Like</span>
                </div>
             </div>
           </div>
           {/* Product Details */}
           <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px] max-lg:w-[260px]">
              <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="w-[82px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">Pingky</h1>
                <p className="w-[103px] h-[24px] text-[16px] font-medium text-[#898989]">Cute bed set</p>
              </div>
              <div className="w-[265px] h-[30px] flex flex-row gap-[12px] items-center">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-lg:text-[18px] max-lg:w-[125px]">Rp 7.000.000</p>
                <p className="w-[111px] h-[24px] font-normal text-[16px] text-[#B0B0B0] line-through max-lg:text-[14px] max-lg:w-[100px]">Rp 14.000.000</p>
              </div>
            </div>
          </div>

          {/* Card 8 */}
          <div className="relative group w-[285px] h-[446px] bg-gray-100 overflow-hidden rounded-lg shadow-md max-lg:w-[260px]">
             <div className="w-[45px] h-[48px] flex items-center text-center absolute left-56 top-6 border border-[#2EC1AC] rounded-[50%] bg-[#2EC1AC] max-lg:left-52">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  New
                </div>
              </div>
            {/* Background Image */}
            <div className="w-[285px] h-[301px] max-lg:w-[260px]">
              <img src="/landingpagetwo/imgeight.jpg" alt="Product" className="w-[285px] h-[301px] max-lg:w-[260px]"/>
            </div>
  
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Add to Cart Button */}
              <Link href={`singleproductSection`}><button className="mb-4 px-6 py-2 bg-[#FFFF] text-[#B88E2F] font-semibold shadow-md hover:bg-[#FFFF]">Add to Cart</button></Link> 
              {/* Share, Compare, Like */}
              <div className="flex space-x-6 text-white">
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconone.png" alt="iconone" />
                  <span>Share</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageicontwo.png" alt="icontwo" />
                  <span>Compare</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                  <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconthree.png" alt="iconthree" />
                  <span>Like</span>
                </div>
             </div>
           </div>
           {/* Product Details */}
           <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px] max-lg:w-[260px]">
              <div className="w-[235px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="w-[64px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">Potty</h1>
                <p className="w-[168px] h-[24px] text-[16px] font-medium text-[#898989]">Minimalist flower pot</p>
              </div>
              <div className="w-[138px] h-[30px]">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-lg:text-[18px] max-lg:w-[125px]">Rp 500.000</p>
              </div>
            </div>
          </div>

          </div>

          <div className="w-full flex flex-row text-center items-center justify-center justify-items-center">
            <div className="w-[245px] h-[54px] border-2 border-[#B88E2F] bg-[#FFFF] flex items-center justify-center cursor-pointer max-mt:w-[200px] max-sm:w-[150px]">
              <button className="w-[120px] h-[24px] font-semibold text-[18px] text-[#B88E2F]">Show More</button>
            </div>
          </div>
        </section>
      </div>

      {/* Landing Page 4*/}
      <div className={fontPoppins.className}>
        <section className="w-full h-[670px] bg-[#FCF8F3] flex flex-row max-lt:h-[550px] max-st:h-[800px] max-mm:h-[700px] max-sm:h-[625px]">
          <div className="w-full h-[670px] flex flex-row gap-[48px] items-center max-lt:gap-[32px] max-lt:h-[550px] max-st:flex-col max-st:h-[800px] max-st:justify-center max-mm:h-[675px] max-sm:h-[600px]">
            <div className="w-full h-[202px] flex flex-col gap-[24px] pl-[72px] max-2xl:pl-[36px] max-2xl:h-[275px] max-lg:pl-[28px] max-lg:h-[250px] max-lt:pl-[22px] max-mt:pl-[16px] max-st:h-[215px] max-mm:pl-[12px] max-mm:h-[175px]">
              <h1 className="w-full h-[57px] font-bold text-[40px] text-[#3A3A3A] max-2xl:h-[120px] max-lg:text-[36px] max-lg:h-[106px] max-lt:text-[32px] max-lt:h-[100px] max-mt:text-[28px] max-mt:h-[80px] max-st:h-[42px] max-lm:text-[22px] max-mm:text-[20px] max-mm:h-[34px] max-sm:h-[60px]">50+ Beautiful rooms inspiration</h1>
              <p className="w-[368px] h-[48px] font-medium text-[16px] text-[#616161] max-lt:text-[14px] max-lt:w-[325px] max-mt:w-[265px] max-mt:h-[60px] max-st:w-[320px] max-lm:h-[45px] max-mm:text-[12px] max-sm:w-[280px]">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
              <div className="w-[176px] h-[48px] bg-[#B88E2F] border border-[#B88E2F] flex items-center justify-center max-lt:w-[150px] max-mm:w-[125px] max-mm:h-[42px]">
                <button className="w-[134px] h-[24px] font-semibold text-[16px] text-[#FFFF] max-lt:text-[14px] max-mm:text-[12px]">Explore More</button>
              </div>
            </div>

            <div className="w-full h-[582px] flex flex-row gap-[32px] max-lg:gap-[24px] mr-[24px] max-lt:h-[462px] max-lt:mr-[12px] max-lt:gap-[18px] max-mt:h-[415px] max-st:justify-center max-st:mr-[0px] max-mm:h-[375px] max-sm:h-[350px]">

              <div className="w-[404px] h-[582px] max-2xl:w-[350px] max-lt:w-[300px] max-lt:h-[462px] max-mt:h-[415px] max-mt:w-[250px] max-mm:h-[375px] max-sm:h-[350px] max-sm:w-[225px]">
                <div className="w-[404px] h-[582px] max-2xl:w-[350px] max-lt:w-[300px] max-lt:h-[462px] max-mt:h-[415px] max-mt:w-[250px] max-mm:h-[375px] max-sm:h-[350px] max-sm:w-[225px] bg-[url('/landingpagethree/imgone.png')] bg-cover bg-center bg-no-repeat flex flex-row items-end pl-[28px] pb-[28px] max-lt:pl-[16px] max-lt:pb-[16px]">
                  <div className="w-[217px] h-[130px] bg-[#FFFF] flex flex-col gap-[8px] items-center justify-center max-lt:w-[190px] max-mt:w-[150px] max-mt:h-[110px]">

                    <div className="w-[142px] h-[20px] flex flex-row gap-[8px] items-center max-lt:w-[135px]">
                      <p className="w-[16px] h-[20px] font-medium text-[16px] text-[#616161] max-lt:text-[14px]">01</p>
                      <hr className="w-[27px] border border-[#616161]"/>
                      <p className="w-[83px] h-[20px] font-normal text-[16px] text-[#616161] max-lt:text-[14px]">Bed Room</p>
                    </div>
                    <div className="w-[170px] h-[34px] max-lt:w-[150px] max-mt:w-[125px]">
                     <p className="w-[170px] h-[34px] font-semibold text-[28px] text-[#3A3A3A] max-lt:w-[150px] max-lt:text-[24px] max-mt:text-[20px]">Inner Peace</p>
                    </div>
                  </div>
                  <div className="w-[48px] h-[48px] bg-[#B88E2F] flex items-center justify-center max-lt:w-[36px] max-lt:h-[36px] ">
                    <img className="w-[18px] h-[12px]" src="/landingpagethree/arrowimg.png" alt="ArrowImg" />
                  </div>
                </div>
             </div>
             <div className="w-[372px] h-[524px] flex flex-col justify-between max-2xl:w-[300px] max-xl:hidden">
               <img className="w-[372px] h-[468px] max-2xl:w-[300px]" src="/landingpagethree/imgtwo.png" alt="Imgtwo" />
               <div className="w-[180px] h-[27px] flex flex-row gap-[32px] items-center">
                  <p className="w-[16px] h-[16px] rounded-[50%] bg-[#B88E2F] border-[#B88E2F]"></p>
                  <p className="w-[11px] h-[11px] rounded-[50%] bg-[#D8D8D8]"></p>
                  <p className="w-[11px] h-[11px] rounded-[50%] bg-[#D8D8D8]"></p>
                  <p className="w-[11px] h-[11px] rounded-[50%] bg-[#D8D8D8]"></p>
               </div>
             </div>

             <div className="w-[48px] h-[584px] flex items-center max-lt:h-[464px] max-mt:h-[415px] max-mm:h-[375px] max-sm:h-[350px]">
               <div className="w-[48px] h-[48px] max-mm:w-[42px] max-mm:h-[42px] max-sm:w-[36px] max-sm:h-[36px] bg-[#FFFF] rounded-[50%] border-2 border-[#B88E2F] cursor-pointer flex items-center justify-center">
                  <img className="w-[24px] h-[24px]" src="/landingpagethree/sideimg.png" alt="sideImg" />
               </div>  
             </div>
            </div>
          </div>
        </section>
      </div>

      {/* Landing Page 4*/}
      <div className={fontPoppins.className}>
        <section className="w-full h-[1200px] flex flex-col gap-[48px] mt-[64px] items-center text-cente max-xl:h-[1600px] max-lt:h-[1950px] max-mt:h-[1600px] max-st:h-[2500px]">

          <div className="w-[356px] h-[90px] flex flex-col gap-[12px] items-center max-lm:text-center max-sm:w-[300px]">
            <p className="w-[232px] h-[30px] font-semibold text-[20px] text-[#616161]">Share your setup with</p>
            <h1 className="w-[356px] h-[48px] font-bold text-[40px] text-[#3A3A3A] max-lm:text-[32px] max-sm:w-[300px]">#FuniroFurniture</h1>
          </div>

          <div className="grid grid-cols-4 gap-[24px] justify-between mt-[32px] items-center justify-items-center w-full h-[975px] max-xl:grid-cols-3 max-xl:h-[1500px] max-lt:grid-cols-2 max-lt:h-[1750px] max-mt:h-[1400px] max-st:flex max-st:flex-col max-st:h-[2300px]">
            <div className="w-[274px] h-[312px] max-2xl:w-[250px] max-2xl:h-[282px] max-lg:w-[225px] max-lg:h-[255px] max-mt:w-[200px] max-mt:h-[225px]"> 
              <img src="/landingpagefour/imgone.png" alt="imgone"/>
            </div>
            <div className="w-[451px] h-[227px] max-2xl:w-[325px] max-2xl:h-[165px] max-lg:w-[300px] max-lg:h-[150px] max-mt:w-[275px] max-mt:h-[135px]">
              <img src="/landingpagefour/imgtwo.png" alt="imgtwo"/>
            </div>
            <div className="w-[295px] h-[429px] max-2xl:w-[250px] max-2xl:h-[365px] max-lg:w-[225px] max-lg:h-[325px] max-mt:w-[200px] max-mt:h-[290px]">
              <img src="/landingpagefour/imgthree.png" alt="imgthree"/>
            </div>
            <div className="w-[336px] h-[225px] max-2xl:w-[275px] max-2xl:h-[185px] max-lg:w-[250px] max-lg:h-[165px]">
              <img src="/landingpagefour/imgfour.png" alt="imgfour"/>
            </div>
            <div className="w-[320px] h-[482px] max-2xl:w-[250px] max-2xl:h-[375px] max-lg:w-[225px] max-lg:h-[340px] max-mt:w-[200px] max-mt:h-[300px]">
              <img src="/landingpagefour/imgfive.png" alt="imgfive"/>
            </div>
            <div className="w-[344px] h-[516px] max-2xl:w-[275px] max-2xl:h-[410px] max-lg:w-[250px] max-lg:h-[375px] max-mt:w-[225px] max-mt:h-[338px]">
              <img src="/landingpagefour/imgsix.png" alt="imgsix"/>
            </div>
            <div className="w-[363px] h-[242px] max-2xl:w-[325px] max-2xl:h-[215px] max-lg:w-[300px] max-lg:h-[200px] max-mt:w-[250px] max-mt:h-[168px]">
              <img src="/landingpagefour/imgseven.png" alt="imgseven"/>
            </div>
            <div className="w-[258px] h-[387px] max-2xl:w-[225px] max-2xl:h-[340px] max-lg:w-[200px] max-lg:h-[300px] max-mt:w-[175px] max-mt:h-[264px]">
              <img src="/landingpagefour/imgeight.png" alt="imgeight"/>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}