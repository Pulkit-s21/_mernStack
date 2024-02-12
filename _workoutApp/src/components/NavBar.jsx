import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <div className=" bg-neutral-100 p-6">
      <Link to="/">
        <h1 className="text-2xl lg:text-6xl font-bold">Workout Buddy</h1>
      </Link>
    </div>
  )
}

export default NavBar
