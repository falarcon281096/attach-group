import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10 lg:pt-20 lg:pb-10 bg-[#F7F7F7]">
      <div className="lg:mx-30">
        <div className="grid lg:grid-cols-3 lg:gap-12 font-['graphik']">
          {/* Perú */}
          <div className="p-4 md:p-8">
            <p className="text-[#818181] font-semibold text-[16px] md:text-[24px] leading-[20px] md:leading-[28px] pb-3">Perú</p>
            <p className="text-[#818181]">
              <span className="font-bold text-[13px] md:text-[16px] leading-[18px] md:leading-[24px]">Dirección:</span>{' '}
              <span className="font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]">Av. Javier Prado Este 492 - Oficina 1202</span>
            </p>
            <p className="text-[#818181]">
              <span className="font-bold text-[13px] md:text-[16px] leading-[18px] md:leading-[24px]">E-mail:</span>{' '}
              <span className="font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]">peru@attach.group</span>
            </p>
          </div>

          {/* México */}
          <div className="p-4 md:p-8">
            <p className="text-[#818181] font-semibold text-[16px] md:text-[24px] leading-[20px] md:leading-[28px] pb-3">México</p>
            <p className="text-[#818181]">
              <span className="font-bold text-[13px] md:text-[16px] leading-[18px] md:leading-[24px]">Dirección:</span>{' '}
              <span className="font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]">Torre Reforma, Piso 14, Av. Paseo de la Reforma 483, Col. Cuauhtémoc, CP 06500</span>
            </p>
            <p className="text-[#818181]">
              <span className="font-bold text-[13px] md:text-[16px] leading-[18px] md:leading-[24px]">E-mail:</span>{' '}
              <span className="font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]">mexico@attach.group</span>
            </p>
          </div>

          {/* USA */}
          <div className="p-4 md:p-8">
            <p className="text-[#818181] font-semibold text-[16px] md:text-[24px] leading-[20px] md:leading-[28px] pb-3">USA</p>
            <p className="text-[#818181]">
              <span className="font-bold text-[13px] md:text-[16px] leading-[18px] md:leading-[24px]">Address:</span>{' '}
              <span className="font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]">201 South Biscayne Blvd, Miami, FL 33131</span>
            </p>
            <p className="text-[#818181]">
              <span className="font-bold text-[13px] md:text-[16px] leading-[18px] md:leading-[24px]">E-mail:</span>{' '}
              <span className="font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]">usa@attach.group</span>
            </p>
          </div>
        </div>

        {/* Logo y Social Links */}
        <div className="text-gray-500 grid grid-cols-2 gap-5 mt-5 lg:mt-0 py-5 px-7 lg:gap-12">
          <Link href="/" className="mt-1 px-0 md:py-8 w-30 lg:w-auto">
            <Image 
              src="/images/general/attachGroupLogo.svg" 
              alt="Logo Attach" 
              width={180} 
              height={50} 
            />
          </Link>
          <div className="lg:p-8">
            <div className="flex justify-end gap-2 lg:gap-4">
              <a href="https://www.instagram.com/attach.consultores/" target="blank" className="w-1/3 lg:w-1/11 p-3 rounded-[50%] bg-[#1e3fda]">
                <Image 
                  src="/images/general/socialicon_linkden.png" 
                  alt="LinkedIn" 
                  width={180} 
                  height={50} 
                />
              </a>
              <a href="https://pe.linkedin.com/company/attach-consultores" target="blank" className="w-1/3 lg:w-1/11 p-3 rounded-[50%] bg-[#1e3fda]">
                <Image 
                  src="/images/general/socialicon_ig.png" 
                  alt="Instagram" 
                  width={180} 
                  height={50} 
                />
              </a>
              <a href="https://www.youtube.com/c/attachmedia" target="blank" className="w-1/3 lg:w-1/11 p-3 rounded-[50%] bg-[#1e3fda]">
                <Image 
                  style={{ marginTop: '4px' }} 
                  src="/images/general/socialicon_yt.png" 
                  alt="YouTube" 
                  width={180} 
                  height={50} 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
