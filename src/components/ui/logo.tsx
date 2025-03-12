import logo from '../../assets/img/logo.png'
const Logo = ({ width, height }: { width: number, height: number }) => {
    return (
        <div>
            <img src={logo} alt="logo" className={`w-${width} object-contain h-${height}`} />
        </div>
    )
}

export default Logo;