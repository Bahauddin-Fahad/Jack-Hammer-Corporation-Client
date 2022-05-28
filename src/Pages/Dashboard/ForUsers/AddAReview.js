import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useReactQuery from "../../../Hooks/useReactQuery";

const AddAReview = () => {
  const [user] = useAuthState(auth);
  const userUrl = `https://jack-hammer-corporation-server.herokuapp.com/user/${user?.email}`;
  const header = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  const { data: userData } = useReactQuery(userUrl, header);

  const url = `https://jack-hammer-corporation-server.herokuapp.com/review/${user?.email}`;
  const { data: userReview, refetch } = useReactQuery(url);

  const showRating = () => {
    const rate = userReview?.rating;
    let star = "";
    for (let i = 0; i < rate; i++) {
      star += "⭐";
    }
    return star;
  };

  const reviewing = async (e) => {
    e.preventDefault();

    const name = user?.displayName;
    const email = user?.email;
    const img = userData?.img;
    const comment = e.target.comment.value;
    const activeRating = [...e.target.rating].reverse();

    const rating =
      parseInt(activeRating.find((rating) => rating.checked)?.value) || 5;

    const review = { name, email, img, comment, rating };
    const url = `https://jack-hammer-corporation-server.herokuapp.com/review/${email}`;

    await axios.put(url, review).then((data) => {
      if (data?.data?.success) {
        toast.success("Review submitted successfully", { theme: "colored" });
      }
      if (data?.data?.update) {
        toast.success("Review updated successfully", { theme: "colored" });
      }
    });
    refetch();
    showRating();
    e.target.comment.value = "";
  };

  return (
    <div className="flex flex-wrap justify-center gap-5 fadeIn text-primary">
      <form
        onSubmit={reviewing}
        className="form-control ring-2 ring-primary rounded-md px-7 py-2 space-y-2 max-w-sm bg-secondary glass"
      >
        <h2 className=" font-medium text-2xl text-center mb-2">Add a Review</h2>
        <label className="input-group max-w-sm w-full">
          <span className="font-medium text-neutral-focus">Name:</span>
          <input
            type="text"
            placeholder={user?.displayName}
            className="input input-bordered placeholder:text-neutral-focus font-medium text-lg w-auto min-w-0"
            readOnly
          />
        </label>
        <label className="input-group max-w-sm w-full">
          <span className="font-medium text-neutral-focus">Email:</span>
          <input
            type="text"
            placeholder={user?.email}
            className="input input-bordered placeholder:text-neutral-focus font-medium text-lg w-auto min-w-0"
            readOnly
          />
        </label>
        <label htmlFor="">
          <textarea
            className="textarea textarea-bordered max-w-sm w-full text-base  text-neutral-focus font-medium"
            name="comment"
            placeholder="Comment"
            required
          ></textarea>
        </label>
        <label htmlFor="" className="flex items-center">
          <span className="font-medium text-lg text-white">Ratings :</span>
          <div className="rating">
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value="1"
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value="2"
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value="3"
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value="4"
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value="5"
            />
          </div>
        </label>
        <button
          type="submit"
          className="btn btn-outline text-primary hover:text-neutral-focus hover:bg-primary font-bold"
        >
          submit review
        </button>
      </form>
      <section className="max-w-sm w-full p-2 ring-2 ring-white rounded max-h-[334px]">
        <div className="bg-white font-medium text-neutral-focus p-3 rounded h-full flex flex-col justify-between">
          <p className="text-lg underline">Submitted Review :</p>
          <p className="h-36 overflow-auto p-1 rounded text-gray-800/70">
            <span className="text-neutral-focus">Comment :</span>
            <br />
            {userReview?.comment}
          </p>
          <p className="w-">Rating : {showRating()}</p>
        </div>
      </section>
    </div>
  );
};

export default AddAReview;
