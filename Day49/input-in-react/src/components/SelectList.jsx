// import React, { useState } from 'react';

// const SelectList = () => {
//     const [selectedLibs, setSelectedLibs] = useState([]);

//     const jsLibraries = ['React', 'MomentJS', 'jQuery'];

//     const handleCheckboxChange = (e) => {
//         const { value, checked } = e.target;

//         if (checked) {
//             // Add selected library to the list
//             setSelectedLibs([...selectedLibs, value]);
//         } else {
//             // Remove unselected library from the list
//             setSelectedLibs(selectedLibs.filter(lib => lib !== value));
//         }
//     };

//     return (
//         <div>
//             <div className="form-group">
//                 <label>Choose JS Libraries:</label>
//                 <div>
//                     {jsLibraries.map(lib => (
//                         <div key={lib}>
//                             <input
//                                 type="checkbox"
//                                 id={lib}
//                                 value={lib}
//                                 checked={selectedLibs.includes(lib)}
//                                 onChange={handleCheckboxChange}
//                             />
//                             <label htmlFor={lib}>{lib}</label>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* For debug or confirmation display */}
//             <div>
//                 <strong>Selected:</strong> {selectedLibs.join(', ')}
//             </div>
//         </div>
//     );
// };

// export default SelectList;



// import React, { useState } from 'react';

// const SelectList = () => {
//     const [selectedLibs, setSelectedLibs] = useState([]);
//     const [country, setCountry] = useState('');

//     const jsLibraries = ['React', 'MomentJS', 'jQuery'];
//     const countries = ['USA', 'Canada', 'Germany', 'India', 'Australia'];

//     const handleCheckboxChange = (e) => {
//         const { value, checked } = e.target;

//         if (checked) {
//             setSelectedLibs([...selectedLibs, value]);
//         } else {
//             setSelectedLibs(selectedLibs.filter(lib => lib !== value));
//         }
//     };

//     const handleCountryChange = (e) => {
//         setCountry(e.target.value);
//     };

//     return (
//         <div>
//             {/* Checklist */}
//             <div className="form-group">
//                 <label>Choose JS Libraries:</label>
//                 <div>
//                     {jsLibraries.map(lib => (
//                         <div key={lib}>
//                             <input
//                                 type="checkbox"
//                                 id={lib}
//                                 value={lib}
//                                 checked={selectedLibs.includes(lib)}
//                                 onChange={handleCheckboxChange}
//                             />
//                             <label htmlFor={lib}>{lib}</label>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Country Dropdown */}
//             <div className="form-group">
//                 <label htmlFor="country">Select Country:</label>
//                 <select name="country" value={country} onChange={handleCountryChange}>
//                     <option value="">-- Select --</option>
//                     {countries.map(c => (
//                         <option key={c} value={c}>{c}</option>
//                     ))}
//                 </select>
//             </div>

//             {/* Display Selections */}
//             <div>
//                 <strong>Selected Libraries:</strong> {selectedLibs.join(', ') || 'None'}
//             </div>
//             <div>
//                 <strong>Selected Country:</strong> {country || 'None'}
//             </div>
//         </div>
//     );
// };

// export default SelectList;
