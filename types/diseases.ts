// types/diseases.ts

export type Disease = {
    id: string;
  name: string;
  symptoms?: string[];
  causes?: string[];
  identification: string;
  prevention?: string;
  treatment: string;
};
