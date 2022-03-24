import Image from "next/image";
import docImage from "../public/doctor.png";
export default function UserProfile() {
  return (
    <div className="xl:row-span-2 col-span-2 bg-white font-sans  xl:mt-20">
      <div className="rounded-2xl border shadow h-full bg-white ">
        <SizedBox />
        <SizedBox />

        <div className="flex justify-center ">
          <div className="m-auto bg-orange-500 h-28 w-40 rounded-md">
            <Image
              height={110}
              width={220}
              alt="imagesssss"
              src={docImage}
              className="h-28 w-40"
              layout="fixed"
            ></Image>
          </div>
        </div>
        <div className="m-6 md:m-10">
          <h1 className="text-2xl mb-4">Personal Information</h1>
          <TextInformationBar title="First Name" subTitle="John" />
          <TextInformationBar title="Second Name" subTitle="Dae" />
          <TextInformationBar title="Cell Phone" subTitle="202-3873-93838" />
          <TextInformationBar title="E-mail" subTitle="goodbye@gmail.com" />
          <TextInformationBar title="ID Number" subTitle="8993938849" />
          <TextInformationBar title="Age" subTitle="32" />
          <TextInformationBar title="Gender" subTitle="Male" />
          <TextInformationBar title="Next of Kin" subTitle="Mathew Malun" />
          <TextInformationBar
            title="Address"
            subTitle="32, Manzini Street, Swazilamd. "
          />
        </div>
        <div className="m-6 md:m-10">
          <h1 className="text-2xl mb-4">Medical Information</h1>
          <TextInformationBar title="Diabetics" subTitle="No" />
          <TextInformationBar title="Medical allergies" subTitle="No" />
          <TextInformationBar title="Alcohol" subTitle="No" />
          <TextInformationBar title="Smoking" subTitle="No" />
          <TextInformationBar title="Drug Abuse" subTitle="No" />
          <TextInformationBar title="Stroke" subTitle="No" />
          <TextInformationBar title="High sugar level" subTitle="No" />
        </div>
        <ButtonBar />
        <SizedBox />
      </div>
    </div>
  );
}

function ButtonBar() {
  return (
    <div className="xl:flex xl:justify-center m-3">
      <div className="xl:m-auto flex flex-row space-x-3">
        <button className="bg-teal-500 w-72 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded min-w-fit">
          Check Profile
        </button>
        <button className="bg-transparent w-72 hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded">
          Update Profile
        </button>
      </div>
    </div>
  );
}

function TextInformationBar({ title, subTitle }) {
  return (
    <div className="flex flex-row space-x-5 mb-2">
      <p className="text-sm md:text-base text-gray-400 w-36 font-light">
        {title}
      </p>
      <p className="text-sm md:text-base text-gray-700 font-light">
        {subTitle}
      </p>
    </div>
  );
}

function SizedBox() {
  return <div className="h-2 md:h-4"></div>;
}
