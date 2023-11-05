import PropTypes from 'prop-types'

export default function Person(props) {

    return (

        <div>

            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Age: {props.age}</p>
            <p>Is married: {props.isMarried ? 'Yes' : 'No'}</p>

            <h2>Friends: </h2>

            {props.friends.map((friend, i) => {

                return <p key={i}>{friend}</p>

            })}

        </div>


    )

}

Person.propTypes = {

    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    friends: PropTypes.arrayOf(PropTypes.string)

}
