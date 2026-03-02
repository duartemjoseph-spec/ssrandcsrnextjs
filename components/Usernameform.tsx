"use client"
import React from 'react'
import { Button } from './ui/button'

const Usernameform = () => {
  return (
    <div className="w-350px">
      <div className="pb-10">
        <label htmlFor="name" className="pb-4">
          UserName
        </label>
        <input
          className=""
          id="name"
          placeholder="Enter your username"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <Button>Submit</Button>
    </div>
  )
}

export default Usernameform