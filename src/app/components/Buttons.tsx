import React from 'react'
import { ChevronRight } from "lucide-react"
import { HeartPulse } from 'lucide-react';
 
import { Button } from "@/components/ui/button"

const Buttons = () => {
  return (<div>
    <div> This is button</div>


    <Button variant="outline" size="icon">
      <ChevronRight />
    </Button>

    <HeartPulse />
    </div>
  )
}

export default Buttons