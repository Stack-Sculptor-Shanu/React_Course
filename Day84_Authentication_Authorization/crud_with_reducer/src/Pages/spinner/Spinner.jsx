import React from 'react'

const Spinner = () => {
  return (
    <div>
        <svg className="pl" viewBox="0 0 48 48" width="48px" height="48px" role="img" aria-label="A dot attempts to catch up to one on the right by moving like a Slinky, but it keeps inching away">
	<defs>
		<linearGradient id="pl-grad" x1="0" y1="0" x2="1" y2="1">
			<stop offset="0%" stopColor="#000" />
			<stop offset="100%" stopColor="#fff" />
		</linearGradient>
		<mask id="pl-mask">
			{/* <!-- 1px bleed to help reduce gradient cropping glitch (size is actually 48×16) --> */}
			<rect x="-1" y="-1" width="50" height="18" fill="url(#pl-grad)" />
		</mask>
	</defs>
	<g fill="none" stroke="currentcolor" strokeLinecap="round" strokeWidth="2" transform="translate(0,19)">
		<g className="pl__layer">
			<g className="pl__scene">
				<path className="pl__curve" d="M 16 9 C 16 4.582 19.582 1 24 1 C 28.418 1 32 4.582 32 9" strokeDasharray="25.13 25.13" strokeDashoffset="25.12" />
				<polyline className="pl__dot" points="32 9,48 9" strokeDasharray="0.01 16" />
			</g>
		</g>
		<g className="pl__layer" mask="url(#pl-mask)">
			<g className="pl__scene">
				<path className="pl__curve" d="M 16 9 C 16 4.582 19.582 1 24 1 C 28.418 1 32 4.582 32 9" strokeDasharray="25.13 25.13" strokeDashoffset="25.12" />
				<polyline className="pl__dot" points="32 9,48 9" strokeDasharray="0.01 16" />
			</g>
		</g>
	</g>
</svg>
    </div>
  )
}

export default Spinner