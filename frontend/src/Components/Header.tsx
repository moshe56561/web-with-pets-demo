export default function Header() {
  return (
    <header className="relative bg-[#def4fc] pt-6 px-4 sm:px-10">
      <div className="absolute inset-0 headerImage bg-cover bg-center"></div>
      <div className="relative min-h-[90vh] text-white z-10">
        <div className="-mt-10 sm:mt-10 flex items-center justify-center">
          <img src="pawLogo.png" className="w-[200px]" />
        </div>
        <div className="-mt-10 flex flex-col items-center text-center">
          <h1 className="font-bold text-[3.5rem] md:text-[5rem] lg:text-[4.5rem] text-black sm:text-white">
            BRAND NAME
          </h1>
          <h2 className="font-bold text-[1.5rem] text-black sm:text-white">
            PET GROOMING SALON
          </h2>
          <p className="text-black sm:text-white">AUSTIN, TEXAS</p>
        </div>
      </div>
    </header>
  );
}
