function Footer() {
  return (
    <>
      <footer className="_footer w-full px-4 py-12 bg-gray-950 text-center">
        <p>
          &copy; {new Date().getFullYear() || "2025"} Millat Science Club. All
          Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
