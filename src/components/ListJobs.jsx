import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsByCategory } from "../redux/actions";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const ListJobs = ({ category }) => {
  const dispatch = useDispatch();
  const jobsData = useSelector((state) => state.jobs.jobsList);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const error = useSelector((state) => state.jobs.error);

  useEffect(() => {
    dispatch(fetchJobsByCategory(category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, category]);

  const jobs = jobsData?.data || [];

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ListGroup>
        {jobs.map((job) => (
          <ListGroup.Item
            key={job._id}
            className="mb-2 border border-secondary-subtle rounded-3"
          >
            <h5 className="text-primary">{job.title}</h5>
            <p className="fw-bold opacity-75 ">{job.company_name}</p>
            <div className="d-flex justify-content-between">
              <p>{job.job_type}</p>
              <span className="opacity-75 me-3">{job.category}</span>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

ListJobs.propTypes = {
  category: PropTypes.string.isRequired,
};
export default ListJobs;
