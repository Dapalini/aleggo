const CurrentContract = () => {
	return <div>Current contract</div>;
};

export default CurrentContract;

// import usePlacesAutocomplete, {
// 	getGeocode,
// 	getLatLng,
// } from 'use-places-autocomplete';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// import useOnclickOutside from 'react-cool-onclickoutside';

// import React, { useState, useMemo } from 'react';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import parse from 'autosuggest-highlight/parse';
// import { debounce } from '@mui/material/utils';

// const CurrentContract = () => {
// 	// let hasLoaded;

// 	// const { isLoaded } = useLoadScript({
// 	// 	googleMapsApiKey: 'AIzaSyA_84Ga8vZtrE3XwtauDL_KmbJWr_Kzaps',
// 	// 	libraries: !hasLoaded ? ['places'] : null,
// 	// });

// 	// if (!isLoaded) {
// 	// 	return <div>Loading...</div>;
// 	// } else {
// 	// 	hasLoaded = isLoaded;
// 	// }

// 	return <div>Hello</div>;

// 	// return <PlacesAutocomplete></PlacesAutocomplete>;
// };

// const PlacesAutocomplete = () => {

// const GOOGLE_MAPS_API_KEY = 'AIzaSyA_84Ga8vZtrE3XwtauDL_KmbJWr_Kzaps';

// function loadScript(src, position, id) {
//   if (!position) {
//     return;
//   }

//   const script = document.createElement('script');
//   script.setAttribute('async', '');
//   script.setAttribute('id', id);
//   script.src = src;
//   position.appendChild(script);
// }

// const autocompleteService = { current: null };

// const MainTextMatchedSubstrings = {
//   offset: null,
//   length: null,
// }

// const StructuredFormatting = {
//   main_text: "",
//   secondary_text: "",
//   main_text_matched_substrings: MainTextMatchedSubstrings,
// }
// const PlaceType = {
//   description: "",
//   structured_formatting: StructuredFormatting,
// }

// const GoogleMaps = () => {
//   const [value, setValue] = useState(null);
//   const [inputValue, setInputValue] = useState('');
//   const [options, setOptions] = useState([]);
//   const loaded = useRef(false);

//   if (typeof window !== 'undefined' && !loaded.current) {
//     if (!document.querySelector('#google-maps')) {
//       loadScript(
//         `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
//         document.querySelector('head'),
//         'google-maps',
//       );
//     }

//     loaded.current = true;
//   }

//   const fetch = useMemo(
//     () =>
//       debounce(
//         (
//           request: { input },
//           callback: (results) => void,
//         ) => {
//           (autocompleteService.current).getPlacePredictions(
//             request,
//             callback,
//           );
//         },
//         400,
//       ),
//     [],
//   );

//   React.useEffect(() => {
//     let active = true;

//     if (!autocompleteService.current && (window as any).google) {
//       autocompleteService.current = new (
//         window as any
//       ).google.maps.places.AutocompleteService();
//     }
//     if (!autocompleteService.current) {
//       return undefined;
//     }

//     if (inputValue === '') {
//       setOptions(value ? [value] : []);
//       return undefined;
//     }

//     fetch({ input: inputValue }, (results?: readonly PlaceType[]) => {
//       if (active) {
//         let newOptions: readonly PlaceType[] = [];

//         if (value) {
//           newOptions = [value];
//         }

//         if (results) {
//           newOptions = [...newOptions, ...results];
//         }

//         setOptions(newOptions);
//       }
//     });

//     return () => {
//       active = false;
//     };
//   }, [value, inputValue, fetch]);

//   return (
//     <Autocomplete
//       id="google-map-demo"
//       sx={{ width: 300 }}
//       getOptionLabel={(option) =>
//         typeof option === 'string' ? option : option.description
//       }
//       filterOptions={(x) => x}
//       options={options}
//       autoComplete
//       includeInputInList
//       filterSelectedOptions
//       value={value}
//       noOptionsText="No locations"
//       onChange={(event: any, newValue: PlaceType | null) => {
//         setOptions(newValue ? [newValue, ...options] : options);
//         setValue(newValue);
//       }}
//       onInputChange={(event, newInputValue) => {
//         setInputValue(newInputValue);
//       }}
//       renderInput={(params) => (
//         <TextField {...params} label="Add a location" fullWidth />
//       )}
//       renderOption={(props, option) => {
//         const matches =
//           option.structured_formatting.main_text_matched_substrings || [];

//         const parts = parse(
//           option.structured_formatting.main_text,
//           matches.map((match: any) => [match.offset, match.offset + match.length]),
//         );

//         return (
//           <li {...props}>
//             <Grid container alignItems="center">
//               <Grid item sx={{ display: 'flex', width: 44 }}>
//                 <LocationOnIcon sx={{ color: 'text.secondary' }} />
//               </Grid>
//               <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
//                 {parts.map((part, index) => (
//                   <Box
//                     key={index}
//                     component="span"
//                     sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}
//                   >
//                     {part.text}
//                   </Box>
//                 ))}
//                 <Typography variant="body2" color="text.secondary">
//                   {option.structured_formatting.secondary_text}
//                 </Typography>
//               </Grid>
//             </Grid>
//           </li>
//         );
//       }}
//     />
//   );
// }

// };

// const PlacesAutocomplete = () => {
// 	const {
// 		ready,
// 		value,
// 		suggestions: { status, data },
// 		setValue,
// 		clearSuggestions,
// 	} = usePlacesAutocomplete({
// 		requestOptions: {
// 			/* Define search scope here */
// 		},
// 		debounce: 300,
// 	});
// 	const ref = useOnclickOutside(() => {
// 		// When user clicks outside of the component, we can dismiss
// 		// the searched suggestions by calling this method
// 		clearSuggestions();
// 	});

// 	const handleInput = (e) => {
// 		// Update the keyword of the input element
// 		setValue(e.target.value);
// 	};

// 	const handleSelect =
// 		({ description }) =>
// 		() => {
// 			// When user selects a place, we can replace the keyword without request data from API
// 			// by setting the second parameter to "false"

// 			setValue(description, false);
// 			clearSuggestions();

// 			// Get latitude and longitude via utility functions
// 			getGeocode({ address: description }).then((results) => {
// 				const { lat, lng } = getLatLng(results[0]);
// 				console.log('📍 Coordinates: ', { lat, lng });
// 			});
// 		};

// 	const renderSuggestions = () =>
// 		data.map((suggestion) => {
// 			const {
// 				place_id,
// 				structured_formatting: { main_text, secondary_text },
// 			} = suggestion;

// 			console.log(suggestion);
// 			return (
// 				<option
// 					className='pt-3 menu-item'
// 					key={place_id}
// 					onClick={handleSelect(suggestion)}
// 				>
// 					{main_text + ', ' + secondary_text}
// 				</option>
// 			);
// 		});

// 	return (
// 		<div ref={ref} className='container' style={{ maxWidth: '400px' }}>
// 			<input
// 				list='datalistOptions'
// 				id='exampleDataList'
// 				className='form-control'
// 				value={value}
// 				onChange={handleInput}
// 				disabled={!ready}
// 				placeholder='Where are you going?'
// 			/>
// 			{/* We can use the "status" to decide whether we should display the dropdown or not */}
// 			{status === 'OK' && (
// 				<div className='container border rounded container'>
// 					<datalist
// 						id='datalistOptions'
// 						className='p-2'
// 						style={{ listStyle: 'none', margin: '0px 0px 0px 100px' }}
// 					>
// 						{renderSuggestions()}
// 					</datalist>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default CurrentContract;

{
	/* <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
<datalist id="datalistOptions">
  <option value="San Francisco">
  <option value="New York">
  <option value="Seattle">
  <option value="Los Angeles">
  <option value="Chicago">
</datalist> */
}

// import { useUpdate } from 'react-use';
// import AsyncSelect from 'react-select/async';

// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// import usePlacesAutocomplete, {
// 	getGeocode,
// 	getLatLng,
// } from 'use-places-autocomplete';
// import { warning } from '@remix-run/router';

// 	const { isLoaded } = useLoadScript({
// 		googleMapsApiKey: 'AIzaSyA_84Ga8vZtrE3XwtauDL_KmbJWr_Kzaps',
// 		libraries: ['places'],
// 	});

// 	if (!isLoaded) {
// 		return <div>Loading...</div>;
// 	}

// 	return <Map />;
// };

// const Map = () => {
// 	const center = useMemo(() => ({ lat: 55.66, lng: 12.5 }), []);
// 	const [selected, setSelected] = useState(null);

// 	return (
// 		<>
// 			<div className='container'>
// 				<PlacesContainer setSelected={setSelected} />
// 			</div>
// 			<GoogleMap zoom={11.1} center={center} mapContainerClassName='Map-test'>
// 				{selected && <Marker position={{ lat: 55.66, lng: 12.5 }}></Marker>}
// 			</GoogleMap>
// 		</>
// 	);
// };

// const PlacesContainer = ({ setSelected }) => {
// 	const {
// 		ready,
// 		value,
// 		setValue,
// 		suggestions: { status, data },
// 		clearSuggestions,
// 	} = usePlacesAutocomplete();

// 	const update = useUpdate();

// 	const makeList = () => {
// 		return data.map((item) => ({
// 			value: `${item.place_id}`,
// 			label: `${item.description}`,
// 		}));
// 	};

// 	console.log(data);
// 	// const loadOptions = makeList();

// 	const loadOptions = (inputValue, getOptions) => {
// 		setValue(inputValue);
// 		wait(1000);
// 		getOptions(makeList());
// 	};

// 	// const checkIfOk = () => {
// 	// 	if (status !== 'OK') {
// 	// 		return;
// 	// 	} else {
// 	// 		clearTimeout(intValId);
// 	// 	}
// 	// };

// 	return (
// 		<AsyncSelect
// 			cacheOptions
// 			defaultOptions
// 			loadOptions={loadOptions}
// 		></AsyncSelect>
// 	);
// };

// // 	const [selectOptions, setSelectOptions] = useState([]);
// // 	const [selectedOption, setSelectedOption] = useState({});

// // 	const handleAutocomplete = async (location) => {
// // 		setSelected(location);
// // 		await setValue(location);
// // 		const newSelectOptions = data.map((item) => ({
// // 			value: `${item.place_id}`,
// // 			label: `${item.description}`,
// // 		}));
// // 		setSelectOptions(newSelectOptions);
// // 		update();
// // 		return;
// // 	};

// // 	return (
// // 		<>
// // 			<Select
// // 				onKeyDown={(e) => handleAutocomplete(e.target.value)}
// // 				onChange={(selection) => setSelectedOption(selection)}
// // 				options={selectOptions}
// // 				value={selectedOption}
// // 			></Select>

// // 			<input
// // 				value={value}
// // 				disable={!ready}
// // 				placeholder='Search an address'
// // 			></input>
// // 		</>
// // 	);
// // };

// export default CurrentContract;
