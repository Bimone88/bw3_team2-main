import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobById } from "../redux/actions";
import PropTypes from "prop-types";

const JobDetails = ({ match }) => {
  const dispatch = useDispatch();
  const jobId = match.params.id;
  const job = useSelector((state) =>
    state.jobs.jobsList.find((j) => j._id === jobId)
  );
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const error = useSelector((state) => state.jobs.error);

  useEffect(() => {
    dispatch(fetchJobById(jobId));
  }, [dispatch, jobId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      {/* Altre informazioni sull'offerta di lavoro */}
    </div>
  );
};

JobDetails.propTypes = {
  match: PropTypes.object.isRequired,
};

export default JobDetails;
