import {
  MailIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

export default function ContactUs(params) {
  return (
    <section className="bg-gradient-to-r from-teal-300 to-cyan-500 w-full flex min-h-screen font-sans align-middle">
      <div className="my-9 md:m-auto m-auto w-4/5 bg-white border rounded-md p-4 md:p-10 flex flex-col-reverse md:flex-row">
        <ContactAddressInfo />
        <FormBar />
      </div>
    </section>
  );
}

function LabelBar({ title, subTitle, description, image }) {
  return (
    <div className="m-auto text-center my-4 flex flex-col">
      {image}
      <div className="text-xl md:text-2xl">{title}</div>
      <div className="text-sm md:text-md text-gray-600">{subTitle}</div>
      <div className="text-sm md:text-md text-gray-500">{description}</div>
    </div>
  );
}

function MailCustomIcon() {
  return (
    <MailIcon className="max-h-6 w-6 text-gray-600 mb-2 mx-auto"></MailIcon>
  );
}

function MapCustomIcon() {
  return (
    <LocationMarkerIcon className="max-h-6 w-6 text-gray-600 mb-2 mx-auto"></LocationMarkerIcon>
  );
}

function ContactAddressInfo() {
  return (
    <div className="flex my-auto flex-row flex-wrap md:flex-col w-full md:w-1/3 h-full align-middle">
      <LabelBar
        title="Address"
        subTitle="Kwaluseni M15"
        description="Manzini"
        image={<MapCustomIcon />}
      />
      <LabelBar
        title="Phone"
        subTitle="+268 123 456"
        description="+268 2404 1234"
        image={
          <PhoneIcon className="max-h-6 w-6 text-gray-600 mb-2 mx-auto"></PhoneIcon>
        }
      />

      <LabelBar
        title="Email"
        subTitle="virtumed@gmail.com"
        description="info.virtustuff@gmail.com"
        image={<MailCustomIcon />}
      />
    </div>
  );
}

function FormBar() {
  return (
    <div className="flex flex-col w-full md:w-2/3 h-full">
      <div className="w-full">
        <div className="mb-1 text-teal-500 text-2xl md:text-3xl">
          Contact us
        </div>
        <p className="my-3 text-gray-600 text-sm md:text-md">
          How can we help you? If you have questions about our medical services,
          please send us a message
        </p>
        <form action="">
          <input
            className="my-2  bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value="Jane"
          />
          <input
            className="my-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value="Jane"
          />{" "}
          <textarea
            className="h-52 md:h-72 my-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
          />
        </form>
        <div className="bg-gradient-to-r from-teal-300 to-cyan-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 text-white font-bold py-2 px-4 rounded text-center">
          <input type="submit" value="Login" />
        </div>
      </div>
    </div>
  );
}
