import initFacultyEvent from '../modules/faculty/faculty.event';
import initStudentEvent from '../modules/student/student.event';

const subscribeToEvents = () => {
  initStudentEvent();
  initFacultyEvent();
};

export default subscribeToEvents;
