import { supabase } from "@/supabase";
import Input from "./Input";
import Share from "./Share";

export const revalidate = 0;

const GuestBook = async () => {
  // let { data: guest, error } = await supabase.from("guest").select("*");

  return (
    <section>
      {/* {guest!.map((guest) => (
        <div key={guest.id}>
          <h3>{guest.name}</h3>
          <p>{guest.comment}</p>
        </div>
      ))} */}
      <Input />
      <Share />
    </section>
  );
};

export default GuestBook;
