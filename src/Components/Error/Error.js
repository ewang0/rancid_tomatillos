import './Error.scss'

const Error = ( {error} ) => {


	return (
		<section className='error'>
			<h1>{error}</h1>
		</section>
	)
}

export default Error;