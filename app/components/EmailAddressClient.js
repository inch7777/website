"use client";

import { useEffect, useState } from "react";

function decode(values, mask) {
  return String.fromCharCode(...values.map((value) => value ^ mask));
}

export default function EmailAddressClient({ localPart, domain, mask }) {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    setEmail(`${decode(localPart, mask)}@${decode(domain, mask)}`);
  }, [domain, localPart, mask]);

  if (!email) {
    return <span aria-hidden="true">Email</span>;
  }

  const [local, host] = email.split("@");

  return (
    <a href={`mailto:${email}`} aria-label="Email Yanqi">
      {local} [at] {host}
    </a>
  );
}
