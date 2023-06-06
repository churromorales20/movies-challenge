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
        onChange={(value) => handleInputChange('imageUrl', value)}
      />
      <InputField
        name="title"
        value={formData.title}
        onChange={(value) => handleInputChange('title', value)}
      />
      <InputField
        name="duration"
        value={formData.duration.toString()}
        onChange={(value) => handleInputChange('duration', parseInt(value))}
      />
      <InputField
        name="year"
        value={formData.year.toString()}
        onChange={(value) => handleInputChange('year', parseInt(value))}
      />
      <InputField
        name="director"
        value={formData.director}
        onChange={(value) => handleInputChange('director', value)}
      />
      <InputField
        name="starring"
        value={formData.starring}
        onChange={(value) => handleInputChange('starring', value.split(','))}
      />
      <InputField
        name="description"
        value={formData.description}
        onChange={(value) => handleInputChange('description', value)}
      />
      <div className="text-center">
        <Button type="submit">Submit</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </div>
    </form>
  );
}
