import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import styles from "../../styles/Admin/User.module.scss";
import AddReview from "./AddReview";
import ReviewWrapper from "./ReviewWrapper";
import Reev from "./Reev";
import ErrorBoundary from "components/ErrorBoundary";

const AdminReviews = () => {
  //   type Data = {
  //     name: string;
  //     comment: string;
  //     imgUrl: string;
  //   };

  //   const [reev, setReev] = useState(false);
  //   const temp: Data[] = [
  //     {
  //       name: "Millr rodgeridez",
  //       comment:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur sapiente omnis quisquam praesentium id! Harum quidem nam, sequi iste, perspiciatis quisquam quam voluptate maiores, fugit reiciendis consectetur eum vero aut",
  //       imgUrl: "",
  //     },
  //     {
  //       name: "Andrew Montana Charles",
  //       comment:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur sapiente omnis quisquam praesentium id! Harum quidem nam, sequi iste, perspiciatis quisquam quam voluptate maiores, fugit reiciendis consectetur eum vero aut",
  //       imgUrl: "",
  //     },
  //   ];
  return (
    <section className={styles.Module}>
      <h3>Reviews</h3>
      <hr />
      <ErrorBoundary>
        <ReviewWrapper />
      </ErrorBoundary>
      {/* 
	  
	  <div className={styles.review}>
				{/* MAPPED REVIEWS 
				{temp.map((review) => (
					<Reev
						key={review.name}
						name={review.name}
						comment={review.comment}
						imgUrl={review.imgUrl}
					/>
				))}

				{/* DEFAULT 
				<div className={styles.addDefault} onClick={() => setReev(!reev)}>
					<div className={styles.default__review}>
						<BsPlusLg />
					</div>
					<aside>
						Add Client Review <br />
						Here !
					</aside>
				</div>

				{/* 	REVIEW MODAL 
				<AddReview show={reev} set={setReev} />
			</div> 
			
			*/}
    </section>
  );
};

export default AdminReviews;
