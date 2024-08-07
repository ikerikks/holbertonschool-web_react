import CourseListRow from "./CourseListRow";
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from "./CourseShape";

export default function CourseList({
  listCourses = []
}) {
  return (
    <table className="CourseList">
      <thead>
        <CourseListRow 
          textFirstCell="Available courses"
          isHeader={true}
        />
        <CourseListRow 
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      
      <tbody>
        { listCourses.length > 1?
            listCourses.map((course) => (
              <CourseListRow 
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit} 
              />
            )):
            <CourseListRow 
              textFirstCell="No course available yet"
            />
        }
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape(CourseShape)
  )
}

