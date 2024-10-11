export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  image: string;
  location: {
    lat: number;
    lng: number;
    name: string;
  };
  culturalStory: string;
  cuisine: string;
  dietaryRestrictions: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  cookingTools: string[];
  isPublic: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  cookingTools: string[];
  privacySettings: {
    shareRecipes: boolean;
    shareStories: boolean;
    shareLocation: boolean;
  };
}