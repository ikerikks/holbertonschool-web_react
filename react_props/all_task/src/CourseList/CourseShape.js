import PropTypes from 'prop-types';

const CourseShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.string.isRequired
};

export default CourseShape;