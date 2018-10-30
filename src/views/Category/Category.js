import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ categoryName, category }) => (
  <section>
      {category && (
          <span>
               <h1>{category.title}</h1>

              {category.clues.length > 0 && (
                  category.clues.map(clue => (
                      <div>
                          <p key={clue.id}>{clue.question}</p>
                          <input type="text" className={"answer"}/>
                      </div>
                  ))
              )}

              <button id={"Submit"} data-id={category.id}>Submit</button>
          </span>

      )}

  </section>
);

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default Category;