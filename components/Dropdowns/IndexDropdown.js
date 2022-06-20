import React from "react";
// import Link from "next/link";
import { createPopper } from "@popperjs/core";

import { Link } from "react-router-dom";

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a data-tf-popup="V1X1ud9P" className="aTypeForm hover:text-white text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" data-tf-iframe-props="title=Booking Form Template (Longrun)" data-tf-medium="snippet" >Contacte-nos</a><script src="//embed.typeform.com/next/embed.js"></script>
      {/* <Link to="/artistSingle"></Link> */}
    </>
  );
};

export default IndexDropdown;
