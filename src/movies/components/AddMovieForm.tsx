import React, { useState } from 'react';

import { InputField, Button } from 'shared/components';

type MovieFormData = {
  title: string;
  description: string;
  imageUrl: string;
  director: string;
  starring: string[];
  duration: number;
  year: number;
};

interface AddMovieFormProps {
  onSubmit: (data: MovieFormData) => void;
  onCancel: () => void;
}

export function AddMovieForm({ onSubmit, onCancel }: AddMovieFormProps) {
  const [formData, setFormData] = useState<MovieFormData>({
    title: '',
    description: '',
    imageUrl: '',
    director: '',
    starring: [],
    duration: 0,
    year: 0,
  });

  const handleInputChange = (name: keyof MovieFormData, value: string | string[]) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Check if all required fields are filled
    if (
      formData.title &&
      formData.description &&
      formData.imageUrl &&
      formData.director &&
      formData.starring.length > 0 &&
      formData.duration > 0 &&
      formData.year > 0
    ) {
      onSubmit(formData);
      setFormData({
        title: '',
        description: '',
        imageUrl: '',
        director: '',
        starring: [],
        duration: 0,
        year: 0,
      });
    }
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      director: '',
      starring: [],
      duration: 0,
      year: 0,
    });
    onCancel();
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <InputField
        name="imageUrl"
        value={formData.imageUrl}
        setter={(value) => handleInputChange('imageUrl', value)}
      />
      <InputField
        name="Title"
        value={formData.title}
        setter={(value) => handleInputChange('title', value)}
      />
      <InputField
        name="duration"
        value={formData.duration.toString()}
        setter={(value) => handleInputChange('duration', value)}
      />
      <InputField
        name="year"
        value={formData.year.toString()}
        setter={(value) => handleInputChange('year', value)}
      />
      <InputField
        name="director"
        value={formData.director}
        setter={(value) => handleInputChange('director', value)}
      />
      <InputField
        name="starring"
        value={formData.starring.join(',')}
        setter={(value) => handleInputChange('starring', value.split(','))}
      />
      <InputField
        name="description"
        value={formData.description}
        setter={(value) => handleInputChange('description', value)}
      />
      <div className="text-center">
        <Button>Submit</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </div>
    </form>
  );
}
