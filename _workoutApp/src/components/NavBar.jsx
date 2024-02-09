import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <div className=" bg-neutral-200 p-6">
      <Link to="/">
        <h1 className="text-2xl">Workout Buddy</h1>
      </Link>
    </div>
  )
}

export default NavBar
