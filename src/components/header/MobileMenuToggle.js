const MobileMenuToggle = ({ open, setOpen }) => {

    const isExpanded = open ? true: false;

    return (
        <button className="mobileMenuToggle" aria-label="Toggle Menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)}>
            <i className="icon icon--mobileMenuToggle">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24" >
                    <path d="M1.99805 6.00342C1.99805 5.45113 2.44576 5.00342 2.99805 5.00342H21.0013C21.5536 5.00342 22.0013 5.45113 22.0013 6.00342C22.0013 6.5557 21.5536 7.00342 21.0013 7.00342H2.99805C2.44576 7.00342 1.99805 6.5557 1.99805 6.00342ZM1.99805 11.9999C1.99805 11.4476 2.44576 10.9999 2.99805 10.9999H21.0013C21.5536 10.9999 22.0013 11.4476 22.0013 11.9999C22.0013 12.5522 21.5536 12.9999 21.0013 12.9999H2.99805C2.44576 12.9999 1.99805 12.5522 1.99805 11.9999ZM2.99805 16.9964C2.44576 16.9964 1.99805 17.4441 1.99805 17.9964C1.99805 18.5487 2.44576 18.9964 2.99805 18.9964H21.0013C21.5536 18.9964 22.0013 18.5487 22.0013 17.9964C22.0013 17.4441 21.5536 16.9964 21.0013 16.9964H2.99805Z"></path>
                </svg>
            </i>
        </button>
    );
}

export default MobileMenuToggle;