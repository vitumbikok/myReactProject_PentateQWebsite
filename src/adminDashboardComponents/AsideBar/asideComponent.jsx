function AsideComponent({src, href, text}) {

    return (
        <div className='flex gap-2'>
            <img src={src} alt="" width={20} />
            <a href={href}>{text}</a>
        </div>
    );
}
export default AsideComponent;