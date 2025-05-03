import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Package from './components/Package/Package';
import Contact from './components/Contact/Contact'; 
import Gymlocation from './components/Location/Gymlocation';

function App() {
	const [showPopup, setShowPopup] = useState(true);

	const handleClosePopup = () => {
		setShowPopup(false);
	};

	return (
		<React.Fragment>
			{/* Popup Image */}
			{showPopup && (
				<div style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(0, 0, 0, 0.8)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					zIndex: 1000
				}}>
					<div style={{ position: 'relative' }}>
						<img 
							src="/alert.jpg" 
							alt="Popup"
							style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: '10px' }}
						/>
						<button
							onClick={handleClosePopup}
							style={{
								position: 'absolute',
								top: '10px',
								right: '10px',
								backgroundColor: 'red',
								color: 'white',
								border: 'none',
								borderRadius: '5px',
								padding: '5px 10px',
								cursor: 'pointer'
							}}
						>
							X
						</button>
					</div>
				</div>
			)}

			<Navbar />
			<Hero /> 
			<Services />
			<Package />
			<Contact />
			<Gymlocation />
		</React.Fragment>
	);
}

export default App;
