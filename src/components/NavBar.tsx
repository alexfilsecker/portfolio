const NavBar = (): JSX.Element => {
  return (
    <div className="absolute w-screen ">
      <div className="flex justify-between px-10 py-3 bg-slate-300 rounded-full mx-10 mt-3">
        <div>icon</div>
        <div className="flex gap-3">
          <div>About</div>
          <div>Experience</div>
          <div>Work</div>
          <div>Contact</div>
          <button>Resume</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
