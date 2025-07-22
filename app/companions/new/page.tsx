import React from 'react'
import CompanionForm from "@/components/CompanionForm";
import {getSubjectColor} from "@/lib/utils";

const CompanionsLibrary = () => {
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>

        <CompanionForm />
      </article>
    </main>
  )
}

export default CompanionsLibrary