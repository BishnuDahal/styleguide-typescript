import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef } from "react";
import CrossIcon from "../../assets/icons/cross.svg"
import { classNames } from "../../utils/classNames";

interface IModal {
  open: boolean | undefined;
  setOpen: any;
  children: React.ReactNode;
  title: string;
  size?: string;   // USE TAILWIND SIZE
}

const Modal = (props: IModal) => {
  const { open, setOpen, children, title, size="max-w-xl" } = props;


  const cancelButtonRef = useRef(null);

  return (
    <div className="w-full m-auto">
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-20 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          open={open}
          onClose={()=>setOpen(false)}
        >
          <div className="flex items-center justify-center min-h-screen pt-2 px-4 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className={classNames(size, "inline-block w-full p-6 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl")}>
                <div className="flex justify-between">
               <div></div>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-semibold text-black text-center"
                >
                  {title}
                </Dialog.Title>
                <div className="flex w-[32px] h-[32px] bg-[#E0E0E0] rounded-full p-2  cursor-pointer">
                  <img
                    src={CrossIcon}
                    alt=""
                    onClick={() => setOpen(false)}
                  />
                </div>
                </div>
                <hr className="w-full my-4" />

                <div className="my-4">
                  {/* PASS CHILDREN HERE  */}
                  {children}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Modal;
