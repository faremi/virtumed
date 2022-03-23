import Portfolio from "../components/portfolio";

function AdminPage(params) {
  return (
    <section className="p-2 md:p-10 font-sans">
    <div className="flex">
    {/* <Image className="inline object-cover w-12 h-12 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg" alt="Profile image" layout="fill"/> */}
      <h1 className = "">Welcome Back, Testname</h1>
    </div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 md:gap-0 md:gap-x-4  h-screen">
        <Portfolio/>
        <div className="md:row-span-2 col-span-2 bg-blue-500">03</div>
        <div className="col-span-2 md:row-span-6 bg-red-500">01</div>
      </div>
    </section>
  );
}

export default AdminPage;
