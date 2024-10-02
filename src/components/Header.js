/* Components */
import NavBar from "./NavBar";
import Button from "./Button";

/* Hooks */
import { useState } from "react";
import { useDownloadResume } from "../lib/hooks/useDownloadResume";

/* utils */
import CONSTANTS from "../lib/constants/Constants";

/* Icons */
import { HiDownload } from "react-icons/hi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isMenuToggle, setMenuToggle] = useState(false);
  const { downloadResume, isResumeDownloading } = useDownloadResume();

  return (
    <>
      <div className="flex p-7 w-full justify-between ">
        <NavBar navItems={CONSTANTS.navItems} className={"hidden sm:flex "} />

        <Button
          className={"hidden sm:flex sm:text-md md:text-lg"}
          onClick={() => {
            downloadResume();
          }}
          isDisabled={isResumeDownloading}
          btnName={
            isResumeDownloading ? CONSTANTS.downloading : CONSTANTS.resume
          }
          icon={!isResumeDownloading && <HiDownload />}
        />

        <div className="flex sm:hidden">
          {isMenuToggle ? (
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setMenuToggle(false)}
              color="white"
              size={30}
            />
          ) : (
            <HiOutlineMenuAlt1
              className="cursor-pointer"
              onClick={() => setMenuToggle(true)}
              color="white"
              size={30}
            />
          )}
        </div>
      </div>
      {isMenuToggle && (
        <div className=" flex z-10 h-full flex-col w-full gap-5 absolute sm:hidden items-center bg-black top-20">
          <>
            <NavBar
              navItems={CONSTANTS.navItems}
              className={"flex"}
              isCol={true}
              setMenuToggle={setMenuToggle}
            />
            <Button
              className={"flex text-md text-lg"}
              onClick={() => {
                downloadResume();
              }}
              isDisabled={isResumeDownloading}
              btnName={
                isResumeDownloading ? CONSTANTS.downloading : CONSTANTS.resume
              }
              icon={!isResumeDownloading && <HiDownload />}
            />
          </>
        </div>
      )}
    </>
  );
}
