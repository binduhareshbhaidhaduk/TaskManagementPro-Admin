import Aos from 'aos';
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';
import { IoCreateOutline, IoHomeOutline } from 'react-icons/io5';
import { MdContactPage } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { SignOut } from '../../Services/Action/taskAction';
import { GrProjects } from 'react-icons/gr';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const handleSignOut = () => {
    dispatch(SignOut());
    navigate('/login');
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <header className="header d-flex justify-content-between align-items-center">
        <div className='p-2 d-flex col-3'>
          <button className="menu-btn" onClick={toggleSidebar}>
            <IoIosMenu />
          </button>
          <span className="pagetag"></span>
          <section>
            <div>
              <h2>
                <span className='h2 logo'>W</span><span className='h5'>orkFlow Hub</span>
              </h2>
            </div>
            {/* Admin Tag */}
            <div className="admin-tag">
              <small>Admin Panel</small>
            </div>
          </section>
        </div>
        
        <div className="col-6 justify-content-end">
          <Nav defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/home" className='text-dark menu'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/create" className='text-dark menu'>Create</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/task" className='text-dark menu'>Task</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/calendar" className='text-dark menu'>Calendar</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/contact" className='text-dark menu'>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className='col-1 d-flex align-items-center justify-content-end'>
          <div>
            <button className="btn btn-light p-1 fs-6" type="button" data-bs-toggle="offcanvas" onClick={handleSignOut}>Sign Out</button>
          </div>
        </div>
      </header>

      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <ul className="sidebar-menu">
          <li className='d-flex p-3'>
            <Nav.Link as={Link} to="/home" className='d-flex align-items-center text-dark'>
              <IoHomeOutline className='s-icon' />
              <div className='p-1'>Home</div>
            </Nav.Link>
          </li>
          <li className='d-flex p-3'>
            <Nav.Link as={Link} to="/create" className='d-flex align-items-center text-dark'>
              <IoCreateOutline className='s-icon' />
              <div className='p-1'>Create</div>
            </Nav.Link>
          </li>
          <li className='d-flex p-3'>
            <Nav.Link as={Link} to="/task" className='d-flex align-items-center text-dark'>
              <GrProjects className='s-icon' />
              <div className='p-1'>Task</div>
            </Nav.Link>
          </li>
          <li className='d-flex p-3'>
            <Nav.Link as={Link} to="/calendar" className='d-flex align-items-center text-dark'>
              <FaRegCalendarAlt className='s-icon' />
              <div className='p-1'>Calendar</div>
            </Nav.Link>
          </li>
          <li className='d-flex p-3'>
            <Nav.Link as={Link} to="/contact" className='d-flex align-items-center text-dark'>
              <MdContactPage className='s-icon text-dark' />
              <div className='p-1'>Contact</div>
            </Nav.Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
