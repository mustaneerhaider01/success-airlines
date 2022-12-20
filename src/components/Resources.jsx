function Resources() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-5 gap-x-16">
      {/* Left */}
      <div className="col-span-2">
        <h2 className="font-iowan text-3xl lg:text-4xl font-bold mb-1">
          A Resource For Busy
        </h2>
        <h2 className="font-iowan text-3xl lg:text-4xl font-bold">Parents</h2>

        <p className="text-lg lg:text-xl text-[#646464] mt-4">
          Success Airlines is a resource for busy parents of geniuses. It
          teaches hundered of career and life skills to your kids.
        </p>

        <h3 className="text-xl lg:text-2xl font-semibold mt-8">
          Download it now!
        </h3>

        <div className="flex items-center space-x-8 mt-14">
          <a href="https://apps.apple.com/us/app/success-airlines/id1626827609?platform=iphone">
            <img className="w-44" src="./img/App Storewhite.png" alt="" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.kridin.successairlines&hl=en&gl=US">
            <img className="w-44" src="./img/Google Playwhite.png" alt="" />
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="mt-8 lg:mt-0 col-span-3 grid grid-cols-1 md:grid-cols-4 lg:space-x-2 gap-2 lg:gap-0">
        <div className="col-span-2 h-96">
          <img
            className="h-full w-full rounded-md object-cover"
            src="/img/Rectangle 4rNowImg1.png"
            alt=""
          />
        </div>

        <div className="col-span-2 space-y-2">
          <div className="h-44 w-full">
            <img
              className="h-full w-full rounded-md object-cover"
              src="/img/rImgNowImg2.png"
              alt=""
            />
          </div>

          <div className="flex space-x-2 w-full">
            <div className="h-[201px] w-full">
              <img
                className="h-full w-full rounded-md object-cover"
                src="/img/Rectangle 6rNowImg3.png"
                alt=""
              />
            </div>

            <div className="h-[201px] w-full">
              <img
                className="h-full w-full rounded-md object-cover"
                src="/img/Rectangle 7rNowImg4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resources;
