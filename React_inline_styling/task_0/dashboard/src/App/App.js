import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import {getLatestNotification} from '../utils';

function App({isLoggedIn = false}) {
  return (
    <>
      <Notifications displayDrawer={true}
        listNotifications = {
          [
            {id: 1, type: 'default', value: 'New course available'},
            {id: 2, type: 'urgent', value: 'New resume available'},
            {id: 3, type: 'urgent', html: {__html: getLatestNotification()}},
          ]
        }
      />
      <div className="App">
        <Header />
        <main className="App-body">
          {
            isLoggedIn?
              <CourseList 
                listCourses={
                  [
                    {id: 1, name: 'ES6', credit: '60'},
                    {id: 2, name: 'Webpack', credit: '20'},
                    {id: 3, name: 'React', credit: '40'}
                  ]
                }
              />:
              <>
                <p>Login to access the full dashboard</p>
                <Login />
              </>
          }
        </main>
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default App;
