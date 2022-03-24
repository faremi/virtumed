import BookAppointment from "./../components/bookAppointment";
import UserProfile from "./../components/user_profile";
import Portfolio from "../components/portfolio";
import InfoTable from "../components/infoTable";
function AdminPage(params) {
  return (
    <section className="p-2 md:p-10 font-sans">
      <div className="flex">
        <h1 className="text-2xl">Welcome Back</h1>
      </div>
      <div className="xl:grid xl:grid-rows-3 xl:grid-flow-col xl:gap-x-4">
        <Portfolio />
        <UserProfile />
        <div className="col-span-7 xl:row-span-6">
          <BookAppointment />
          <InfoTable />
        </div>
      </div>
    </section>
  );
}

export default AdminPage;
