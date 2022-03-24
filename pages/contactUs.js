export default function ContactUs(params) {
  return (
    <section className="bg-gradient-to-r from-teal-300 to-cyan-500 w-full flex min-h-screen font-sans align-middle">
      <div className="m-auto w-4/5 bg-white border rounded-md p-7 md:p-10">
        <div className="flex justify-center space-x-6">
          <div className="relative w-20 h-full flex flex-col align-middle justify-center mt-10 before:absolute before:content-none before:h-3/4 before:w-3 before:-right-5 before:top-1/2 before:bg-gray-400">
            <div className="address m-10 text-center">
              <em className="fas fa-map-marker-alt  text-2xl text-teal-600 mt-3"></em>
              <div className=" ">Address</div>
              <div className="t1">Kwaluseni M15</div>
              <div className="t2">Manzini</div>
            </div>
            <div className="phone m-10 text-center details">
              <em className="fas fa-phone-alt  text-2xl text-teal-600 mt-3"></em>
              <div className="topic">Phone</div>
              <div className="t1">+268 123 456</div>
              <div className="t2">+268 2404 1234</div>
            </div>
            <div className="email m-10 text-center details">
              <em className="fas fa-envelope  text-2xl text-teal-600 mt-3"></em>
              <div className="topic">Email</div>
              <div className="t1">
                <a href="#">virtumed@gmail.com</a>
              </div>
              <div className="t2">
                <a href="#">info.virtustuff@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="topic-text">Contact us</div>
            <p>
              How can we help you? If you have questions about our medical
              services, please send us a message
            </p>
            <form action="#">
              <div className="input-box">
                <input
                  type="text"
                  id="name"
                  placeholder="Please enter your name"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  id="email"
                  placeholder="Please enter your email address"
                  required
                />
              </div>
              <div className="input-box message-box">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter query here"
                  required
                ></textarea>
              </div>
              <div className="button">
                <input type="button" value="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
