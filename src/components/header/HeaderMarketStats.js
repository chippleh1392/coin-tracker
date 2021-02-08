const HeaderMarketStats = () => {
    return (
        <div className="header-market-stats">
            <ul className="market-stats">
                <li className="market-stat">
                    <span>
                        Cryptocurrencies:
                    </span>
                    <a href="/">
                        8,408
                    </a>
                </li>
                <li className="market-stat">
                    <span>
                        Markets:
                    </span>
                    <a href="/">
                        33,401
                    </a>
                </li>
                <li className="market-stat">
                    <span>
                        Market Cap:
                    </span>
                    <a href="/">
                        $1,155,057,006,368
                    </a>
                </li>
                <li className="market-stat">
                    <span>
                        24 Vol:
                    </span>
                    <a href="/">
                        $167,384,351,098
                    </a>
                </li>
                <li className="market-stat">
                    <span>
                        BTC Dominance:
                    </span>
                    <a href="/">
                        61.3%
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default HeaderMarketStats;