import { z } from 'zod';

export const bidSchema = z.object({
  base: z.string().length(3, 'Base airport code must be an IATA code'),
  airline: z.string().length(2, 'Airline code must be a 2-character IATA code'),
  aircraftType: z.string().length(4, 'Aircraft type code must be 4 characters'),
  days: z.number().min(1).max(5).default(1),
  part117: z.boolean().default(true),
  preferAirportsWithScenery: z.boolean().default(false),
  preferAirportsWithATC: z.boolean().default(false)
});

export type BidSchema = typeof bidSchema;
