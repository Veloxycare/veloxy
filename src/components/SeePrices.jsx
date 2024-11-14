import { navigate } from 'astro/virtual-modules/transitions-router.js';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SeePrices = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  useEffect(() => {
    if (window.google) {
      const pickupInput = document.getElementById('pickup');
      const destinationInput = document.getElementById('destination');
      
      const pickupAutocomplete = new window.google.maps.places.Autocomplete(pickupInput);
      const destinationAutocomplete = new window.google.maps.places.Autocomplete(destinationInput);

      pickupAutocomplete.addListener('place_changed', () => {
        const place = pickupAutocomplete.getPlace();
        setPickup(place.formatted_address || pickupInput.value);
      });

      destinationAutocomplete.addListener('place_changed', () => {
        const place = destinationAutocomplete.getPlace();
        setDestination(place.formatted_address || destinationInput.value);
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pickup !== ""  &&  destination !== "") {
      toast.success("Redirecting to App.")
      window.location.href = "https://apps.apple.com/us/app/veloxy/id6504430463";
      return;
    }
    
    toast.error('Please fill in both Pickup and Destination fields.');
    // Redirect to the app (replace '/app' with your actual redirect URL)
  };

  return (
    <div className='container'>
        <h1 className="text-primary font-extrabold text-5xl mb-10">Go anywhere with Veloxy CareRide</h1>
        <p className="text-primary mb-10">Request a ride, hop in, and go.</p>
        <input 
          type="text" 
          id='pickup' 

          placeholder="Enter Pickup Location" 
          className="w-full md:w-[80%] text-primary rounded-lg p-4 mb-10 border-2 h-14 outline-[#3C3E83]"
          onChange={(e) => setPickup(e.target.value)}
        />
        <input 
          type="text" 
          id='destination' 
          placeholder="Enter Destination" 
          className="w-full md:w-[80%] text-primary rounded-lg p-4 mb-10 border-2 h-14 outline-[#3C3E83]"
          onChange={(e) => setDestination(e.target.value)}
        />
        <br/>
        <button onClick={handleSubmit} className="button px-8 py-4">See Prices</button>
      
      <ToastContainer />
    </div>
  );
}

export default SeePrices;
