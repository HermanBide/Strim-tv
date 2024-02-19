import { Logo } from "./logo"
import { Actions } from "./actions"

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-20 z-[49] bg-purple-950 px-2 lg:px-4 flex justify-between items-center shadow-sm">
            <Logo/>
            <Actions />
        </div>
    )
}

export default Navbar
