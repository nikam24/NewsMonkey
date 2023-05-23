import React, { Component } from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div className="bg-gradient-to-r from-slate-200 via-indigo-200 to-slate-400">
        <Navbar className="shadow-sm shadow-black" fluid={true} rounded={true}>
          <Navbar.Brand to="https://flowbite.com/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              NewsMonkey
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Link to="/" active={true}>
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/business">Business</Link>
            <Link to="/entertainment">Entertainment</Link>
            <Link to="/general">General</Link>
            <Link to="/health">Health</Link>
            <Link to="/science">Science</Link>
            <Link to="/sports">Sports</Link>
            <Link to="/technology">Technology</Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
