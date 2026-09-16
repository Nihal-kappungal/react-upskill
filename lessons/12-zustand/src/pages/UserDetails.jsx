import { useEffect } from "react";
import { useUserDetailsStore } from "../store/UserDetailsStore";

const UserDetails = () => {
  const { user, loading, error, fetchDetails } = useUserDetailsStore();

  useEffect(() => {
    fetchDetails(1);
    console.log(user);
  }, []);

  if (loading) return <p>loading .....</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="w-full min-h-screen bg-zinc-800 flex items-center justify-center gap-6 text-white flex-col">
      <div className="p-10 text-2xl bg-violet-400 flex items-center justify-center flex-col rounded-4xl ">
        <h1>name :{user.name} </h1>
        <h3>email :{user.email} </h3>
        <h3>phone :{user.phone} </h3>
      </div>
    </section>
  );
};

export default UserDetails;
