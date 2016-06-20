import React, { Component, PropTypes } from 'react'
import './styles.styl'

const Channel = ({ data, error, count, onFetchAsync }) =>
      <div className='block'>
        <button className='Btn' onClick={onFetchAsync}>
          Fetch Data Async with Action Channel
        </button>
        <div className='msgBlock'>
          Clicked: {count} times
        </div>
        <div className='msgBlock'>
          A part of data list : {data ? data.map(renderItem) : 'no data'}
        </div>
        <div className='alertBlock'>
          {error ? `Exception: ${error}` : ''}
        </div>
      </div>

const renderItem = (el, i) =>
      <div key={el.id}>
        Index : {i}
        <br/>
        {el.name} : {el.url}
      </div>

Channel.propTypes = {
  data: PropTypes.array,
  error: PropTypes.string,
  count: PropTypes.number.isRequired,
  onFetchAsync: PropTypes.func.isRequired,
}

export default Channel
