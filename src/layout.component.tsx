import {Fragment, useState} from 'react'
import {Dialog, Menu, Transition} from '@headlessui/react'
import UserIcon from "./assets/icons/userIcon.svg"
import DibTechLogo from "./assets/icons/dibtechLogo.svg"
import { removeLocalKey } from './helpers/sessionKey'
import { classNames } from './utils/classNames'

type Props ={
    children:any;
    navigationComponent:any;
}

const DashboardLayout = (props:Props) => {

    const {children, navigationComponent} = props;
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    removeLocalKey("token")
    window.location.replace(window.location.origin)
  }

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-[#F4F5FA]">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <img src="" alt=""/>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                {navigationComponent}
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden bg-[#F4F5FA] md:flex md:flex-shrink-0 p-2 shadow rounded-r-2xl">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto"
                src={DibTechLogo}
                alt="DibTech Logo"
              /><span>ibtech Clients</span>
            </div>
            {/* Profile dropdown */}
            <Menu as="div" className="ml-3 relative shadow  m-[20px] p-[10px] rounded-lg">
              {({open}) => (
                <>
                  <div>
                    <Menu.Button
                      className="max-w-xs flex gap-2 items-center text-sm rounded-full focus:outline-none">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-12 w-12 rounded-full"
                        src={UserIcon}
                        alt="User Icons"
                      />
                      <span className={"text-left"}>Sandeep Kushwaha <br/><span
                        className={"text-left text-xs text-gray-400"}>Super User</span></span>
                    </Menu.Button>
                  </div>
                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <Menu.Item>
                        {({active}) => (
                          <a
                            href={"/profile"}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-1 text-sm text-gray-700'
                            )}
                          >
                            {"Profile"}
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                      {({active}) => (
                        <p onClick={handleLogout}
                           className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-1 text-sm text-gray-700'
                          )}>Sign Out</p>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
            <div className="mt-5 flex-1 flex flex-col text-sm">
              {navigationComponent}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl flex justify-between mx-auto px-4 sm:px-6 md:px-8">
              <div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">
                {children}
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


export default DashboardLayout