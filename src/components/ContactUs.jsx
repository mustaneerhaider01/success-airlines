function ContactUs() {
  return (
    <section name='contact' className="mt-40 flex flex-col">
      <div className="relative w-[200px] md:w-[250px]">
        <h5 className="text-4xl md:text-5xl font-iowan font-bold pb-2">Write To Us</h5>
        <div className="absolute right-0 bottom-0 h-[5px] bg-[#0063be] w-36 md:w-40" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 mt-10">
        {/* Left */}
        <div className="col-span-2 relative">
          <img
            className="absolute z-[-1] -left-16 top-10"
            src="/img/broBg.png"
            alt=""
          />
          <img src="/img/bro.png" alt="" />
        </div>

        {/* Right */}
        <div className="col-span-3 lg:pl-20 z-10 mt-8 lg:mt-0">
          <form
            className="px-8 py-10 bg-white rounded-2xl shadow 
          flex flex-col"
          >
            <div className="flex space-x-8">
              <input
                className="input flex-1"
                type="text"
                placeholder="First Name"
              />
              <input
                className="input flex-1"
                type="text"
                placeholder="Last Name"
              />
            </div>

            <input
              className="input mt-8"
              type="email"
              placeholder="Email Address"
            />

            <textarea
              className="input mt-8"
              placeholder="Message"
              rows="10"
            ></textarea>

            <button
              className="bg-[#2F8FFF] text-xs text-white py-4 rounded-md text-center mt-8"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
