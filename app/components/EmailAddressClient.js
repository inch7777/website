"use client";

import { useEffect, useState } from "react";

function decode(values, mask) {
  return String.fromCharCode(...values.map((value) => value ^ mask));
}

export default function EmailAddressClient({ localPart, domain, mask }) {
  const [displayAddress, setDisplayAddress] = useState(null);

  useEffect(() => {
    setDisplayAddress(
      `${decode(localPart, mask)} [at] ${decode(domain, mask)}`,
    );
  }, [domain, localPart, mask]);

  if (!displayAddress) {
    return <span aria-hidden="true">Email</span>;
  }

  return <span>{displayAddress}</span>;
}
