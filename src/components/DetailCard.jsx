import React, { useEffect, useState } from "react";
import { GoStarFill } from "react-icons/go";
import { RxStar } from "react-icons/rx";

const DetailCard = ({ allApp }) => {
  const {
    name,
    developer,
    thumbnail,
    banner,
    downloads,
    category,
    rating,
    description,
    features,
  } = allApp;

  const [installed, setInstalled] = useState(false);
  const [hasInstalledBefore, setHasInstalledBefore] = useState(false);

  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState("");

  const handleInstall = () => {
    if (!installed) {
      setInstalled(true);
      setHasInstalledBefore(true);
    } else {
      setInstalled(false);
    }
  };
  useEffect(() => {
    document.title = "App Details | App Store";
  }, []);

  const handleSubmit = () => {
    if (!reviewText || !reviewRating) {
      alert("Please add review + rating");
      return;
    }

    const newReview = {
      text: reviewText,
      rating: Number(reviewRating),
    };

    setReviews([...reviews, newReview]);
    setReviewText("");
    setReviewRating("");
  };

  return (
    <div className="p-4 sm:p-6 bg-white rounded-xl shadow max-w-5xl mx-auto">
      {/* Banner */}
      <img
        src={banner}
        className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-xl"
        alt=""
      />

      {/* Main Info */}
      <div className="flex flex-col md:flex-row gap-6 mt-6 items-center md:items-start">
        <img
          src={thumbnail}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover"
          alt=""
        />

        <div className="text-center md:text-left flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold">{name}</h1>
          <p className="text-gray-400">{developer}</p>
          <p className="text-sm sm:text-base">Category: {category}</p>
          <p className="text-sm sm:text-base">Downloads: {downloads}</p>
          <p className="text-sm sm:text-base gap-1">Rating: {rating}⭐</p>
        </div>

        <button
          onClick={handleInstall}
          className={`px-4 py-2 rounded-lg w-full md:w-auto text-white cursor-pointer ${
            installed ? "bg-red-600" : "bg-blue-600"
          }`}
        >
          {installed ? "Uninstall" : "Install"}
        </button>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="text-gray-700 mt-2 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </div>

      {/* Features */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Features</h2>
        <ul className="list-disc ml-5 sm:ml-6 mt-2 space-y-1 text-sm sm:text-base">
          {features?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      {/* Review Form */}
      <div className="p-4 border rounded-xl mt-8">
        <h2 className="text-xl font-semibold mb-3">Write a Review</h2>

        {!hasInstalledBefore && (
          <p className="text-red-500 font-medium mb-3 text-sm">
            You must install the app before submitting a review.
          </p>
        )}

        <textarea
          placeholder="Your review..."
          className="w-full border p-2 rounded-lg text-sm"
          disabled={!hasInstalledBefore}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />

        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rating"
          disabled={!hasInstalledBefore}
          className="border p-2 rounded-lg mt-3 w-24 text-sm mr-2"
          value={reviewRating}
          onChange={(e) => {
            let value = Number(e.target.value);
            value = Math.min(5, Math.max(1, value));
            setReviewRating(value);
          }}
        />

        <button
          onClick={handleSubmit}
          disabled={!hasInstalledBefore}
          className={`mt-4 px-4 py-2 rounded-lg text-white text-sm cursor-pointer ${
            hasInstalledBefore
              ? "bg-green-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit Review
        </button>
      </div>

      {/* Display Reviews */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">User Reviews</h2>

        {reviews.length === 0 ? (
          <p className="text-gray-500 mt-2">No reviews yet</p>
        ) : (
          reviews.map((r, i) => (
            <div key={i} className="p-3 mt-2 border rounded-lg bg-gray-50">
              <p className="text-sm">{r.text}</p>
              <p className="font-bold text-sm">⭐ {r.rating}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DetailCard;
