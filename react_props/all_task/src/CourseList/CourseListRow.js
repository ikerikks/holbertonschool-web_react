import PropTypes from 'prop-types';

export default function CourseListRow({
  isHeader = false, 
  textFirstCell, 
  textSecondCell = null
}) {
  return (
    <tr>
      {
        isHeader?
          (!textSecondCell?
            <th colSpan="2">{textFirstCell}</th>:
            <>
              <th style={{textAlign: 'left'}}>
                {textFirstCell}
              </th>
              <th style={{textAlign: 'left'}}>
                {textSecondCell}
              </th>
            </>
          ):
          (!textSecondCell?
            <td 
              style={{textAlign: 'center'}}
              colSpan="2"
            >{textFirstCell}</td>:
            <>
              <td>{textFirstCell}</td>
              <td>{textSecondCell}</td>
            </>
          )
      }
    </tr>
  );
}

CourseListRow.propTypes =  {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string
};
