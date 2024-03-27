import React from 'react';

export default function CreateSnippet() {
  return (
    <div>
      <h1 className='font-bold m-2'>
        Create Snippets
        <form action='' method='post'>
          <div className='flex flex-col'>
            <label htmlFor='title' className='p-2'>
              Title
            </label>
            <input
              className='border rounded-md bg-slate-100 font-normal p-2'
              type='text'
              name='title'
              id='title'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='code' className='p-2'>
              Code
            </label>
            <textarea
              className='border rounded-md bg-slate-100 font-normal p-2'
              cols={20}
              rows={10}
              name='code'
              id='code'
            />
          </div>
          <button type='submit' className='rounded-md bg-orange-200 w-full my-4 p-2'>
            Submit
          </button>
        </form>
      </h1>
    </div>
  );
}
