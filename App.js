const App = () => {
    const [auctionItems, setAuctionItems] = useState([]);
  
    useEffect(() => {
      // Fetch auction items from an API
      fetch('/api/auction-items')
        .then((response) => response.json())
        .then((data) => setAuctionItems(data));
    }, []);
  
    return (
      <div className="auction-grid">
        {auctionItems.map((item) => (
          <div key={item.id} className="auction-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <p>Current Bid: ${item.currentBid}</p>
            <p>Highest Bidder: {item.highestBidder}</p>
            <button onClick={() => (window.location.href = item.bidLink)}>
              Bid Now
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default App;