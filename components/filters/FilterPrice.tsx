"use client"

import { Slider } from "../ui"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"

export const FilterPrice = () => {
  return (
    <div className="mt-5 border-y border-y-primary py-6">
      <p className="mb-3 font-bold">Price</p>

      <div className="flex gap-3">
        <InputGroup>
          <InputGroupAddon align="inline-start">₴</InputGroupAddon>
          <InputGroupInput
            type="number"
            placeholder="From"
            className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </InputGroup>

        <InputGroup>
          <InputGroupAddon align="inline-start">₴</InputGroupAddon>
          <InputGroupInput
            type="number"
            placeholder="To"
            className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </InputGroup>
      </div>

      <Slider
        defaultValue={[25, 50]}
        max={100}
        step={5}
        className="mx-auto mt-8 mb-2 w-full max-w-xs"
      />
    </div>
  )
}
