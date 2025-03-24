import React, { useContext, useState } from "react"
import { GlobalState } from "../../State/State"
import { createReview, deleteReview } from "../../API/API"
import { BsThreeDotsVertical } from "react-icons/bs";

// 📌 Donor Reviews Component
export default function DonorReviews({ reviews, donarId }) {

    const [reviewsData, setReviewsData] = useState(reviews)
    const [isLoading, setIsLoading] = useState(false)
    const { postData, deleteData } = useContext(GlobalState)

    const [formData, setFormData] = useState({
        rating: "5",
        comment: ""
    })

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    const handleSubmitReview = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const createReviewApi = createReview + donarId

            const response = await postData(createReviewApi, formData);
            console.log(78, response)
            if (response && response.review) {  // Check if the review is returned from API
                setReviewsData((prev) => [
                    ...prev, // existing reviews
                    response.review // newly created review
                ]);
            }

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }

    }


    //  delete review 
    const handleDeleteCLick = async (reviewId) => {

        const deleteAPI = `${deleteReview + donarId + "/" + reviewId}`;

        const response = await deleteData(deleteAPI);

    }

    return (
        <div className="mt-10">
            <div className=' my-5'>
                <form onSubmit={handleSubmitReview} className=' w-full md:w-[40%] m-auto p-3 bg-white rounded-lg shadow-md'>
                    <div className=' my-4'>
                        <label htmlFor="rating">
                            রেটিং
                        </label>
                        <select onChange={handleChange}
                            value={formData.rating}
                            name="rating"
                            id="rating"
                            className=' input border '
                        >
                            <option value="1">⭐</option>
                            <option value="2">⭐⭐</option>
                            <option value="3">⭐⭐⭐</option>
                            <option value="4">⭐⭐⭐⭐</option>
                            <option value="5">⭐⭐⭐⭐⭐</option>
                        </select>
                    </div>

                    <div >
                        <label htmlFor="comment">
                            কমেন্ট
                        </label>
                        <textarea onChange={handleChange} value={formData.comment} name='comment' className=' input border ' rows={5} placeholder='কমেন্ট করুন ...' />
                    </div>

                    <button type='submit' className=' my-3  px-3 py-2 primaryBg2 text-white rounded-md'>
                        {isLoading ? "Please Wait" : "সাবমিট করুন"}
                    </button>

                </form>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                রিভিউ গুলো
            </h2>

            {reviewsData && reviewsData.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                    {reviewsData.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-5 border-l-4 border-red-500"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {review.name || "Anonymous"}
                                </h3>
                                <span className="text-yellow-500 text-xl">
                                    {"⭐".repeat(review.rating || 4)}
                                </span>
                            </div>
                            <p className="text-gray-700 italic">
                                "{review.comment}"
                            </p>
                            <div className=" flex items-center justify-between flex-wrap">
                                <p className="text-gray-500 text-sm mt-2">
                                    {review.date ? new Date(review.date).toLocaleString() : new Date().toLocaleString()}
                                </p>
                                <button onClick={() => handleDeleteCLick(review._id)}>
                                    <BsThreeDotsVertical className=" text-2xl" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600 text-center italic">
                    No reviews available.
                </p>
            )}
        </div>
    );
}