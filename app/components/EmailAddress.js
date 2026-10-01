import EmailAddressClient from "./EmailAddressClient";

const MASK = 37;

function encode(value) {
  return Array.from(value, (character) => character.charCodeAt(0) ^ MASK);
}

export default function EmailAddress() {
  return (
    <EmailAddressClient
      localPart={encode("a.million.inch")}
      domain={encode("gmail.com")}
      mask={MASK}
    />
  );
}
