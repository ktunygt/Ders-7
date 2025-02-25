const handleClick = (href, external, navigate) => (e) => {
    if (external) {
        e.preventDefault();
        const url = href.startsWith("http://") || href.startsWith("https://")
            ? href
            : `https://${href}`;
        window.open(url, "_blank");
    }
    else {
        navigate(href);
    }
};

export default handleClick;
