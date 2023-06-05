import React, { useState } from 'react';

import { InputField, Button } from 'shared/components';

type MovieFormData =
  & Record<"title" | "description" | "imageUrl", string>
  & Record<"director" | "starring", string[]>
  & Record<"duration" | "year", number>

  interface AddMovieFormProps {
    onSubmit: (data: MovieFormData) => void,
    onCancel: () => void,
}

export function AddMovieForm({ onSubmit, onCancel }: AddMovieFormProps) {
  // TODO: Implement form for adding a movie

  return (
    <form className="p-4 ">
      {/* TODO: Add code to make form actions work */}
      <InputField name="Url"/>
      <InputField name="Title"/>
      <InputField name="Duration"/>
      <InputField name="Year"/>
      <InputField name="Director"/>
      <InputField name="Starring"/>
      <InputField name="Description"/>
      <div className="text-center">
      <Button onClick={() => {}}>
        Submit
      </Button>
      <Button onClick={() => {}}>
        Cancel
      </Button>
      </div>
    </form>
  );
}
