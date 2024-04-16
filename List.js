import React from 'react';

const List = ({ people }) => {
let count = 0;  
  return (
    <>
      {people.map((person) => {
        const {id, name, age, image} = person;
        if(age < 30)
        {
          count++;
        return (
          <>
            <h3>{count} Рожденници днес!</h3>
            <article key={id} className='person'>
              <img src={image} alt={name} />
              <div>
                <h4>Name: {name}</h4>
                <p>Age: {age} </p>
              </div>
            </article>
          </>
        )
        }
      })
      

      }
    </>
  );
};

export default List;
